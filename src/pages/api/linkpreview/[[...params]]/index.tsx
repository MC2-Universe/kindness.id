import { env } from "env"
import loadGoogleFont from "fonts/loadGoogleFont"
import { ImageResponse } from "next/og"
import { Guild } from "types"

export const config = {
  runtime: "edge",
}

const interFont = loadGoogleFont("Inter", "400")
const interBoldFont = loadGoogleFont("Inter", "700")
const dystopianFont = fetch(
  new URL("../../../../../public/fonts/Dystopian-Black.woff", import.meta.url)
).then((res) => res.arrayBuffer())

const handler = async (req, _) => {
  const { protocol, host } = req.nextUrl
  const baseUrl = `${protocol}//${host}`

  const [, guildUrlName, pageUrlName] =
    req.nextUrl?.pathname
      ?.replace("/api/linkpreview", "")
      ?.split("/")
      ?.filter((param) => !!param) ?? []

  if (!guildUrlName) return new Response(undefined, { status: 404 })

  const [guild, guildRoles, pages]: [Guild, Guild["roles"], Guild["groups"]] =
    await Promise.all([
      fetch(
        `${env.NEXT_PUBLIC_API.replace("v1", "v2")}/guilds/${guildUrlName}`
      ).then((res) => res.json()),
      fetch(
        `${env.NEXT_PUBLIC_API.replace("v1", "v2")}/guilds/${guildUrlName}/roles`
      ).then((res) => res.json()),
      !!pageUrlName
        ? fetch(
            `${env.NEXT_PUBLIC_API.replace("v1", "v2")}/guilds/${guildUrlName}/groups`
          ).then((res) => res.json())
        : undefined,
    ]).catch(() => [null, null, null])

  if (!guild?.id)
    return new Response(undefined, {
      status: 404,
      statusText: "Kindness not found there yet",
    })

  const page = pages?.find((p) => p.urlName === pageUrlName)

  const name = page?.name ?? guild.name
  const image = page?.imageUrl || guild.imageUrl
  const roles = !!page
    ? guildRoles.filter((role) => role.groupId === page.id)
    : guildRoles

  try {
    const [interFontData, interBoldFontData, dystopianFontData] = await Promise.all([
      interFont,
      interBoldFont,
      dystopianFont,
    ])

    const safeDescription = (
      !!page ? page.description : guild.description
    )?.replaceAll("\n", "")

    return new ImageResponse(
      <div
        style={{
          display: "flex",
          position: "relative",
          backgroundColor: "#27272a",
          width: "800px",
          height: "450px",
          fontFamily: "Inter var, Inter, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "320px",
            height: "450px!important",
            opacity: 0.6,
          }}
          src={`${baseUrl}/img/guilders.svg`}
          alt="Guilders"
        />

        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "transparent",
            backgroundImage:
              "linear-gradient(to right, rgba(39, 39, 42, 1) 0%, rgba(39, 39, 42, 1) 55%, rgba(39, 39, 42, 0) 85%, rgba(39, 39, 42, 0))",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            paddingTop: "56px",
            paddingLeft: "56px",
            width: "480px",
            height: "386px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "4px",
                marginRight: "16px",
                width: "48px",
                height: "48px",
                backgroundColor: "#52525b",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                style={{
                  width: image.match("guildLogos") ? "20px" : "48px",
                  height: image?.match("guildLogos") ? "20px" : "48px",
                  borderRadius: image?.match("guildLogos") ? 0 : "50%",
                }}
                src={
                  image?.startsWith("http")
                    ? `${baseUrl}/_next/image?url=${image}&w=48&q=75`
                    : `${baseUrl}${image}`
                }
                alt={name}
              />
            </div>
            <h1
              style={{
                width: "356px",
                fontFamily: "Dystopian, sans-serif",
                fontSize: "48px",
                color: "white",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {name}
            </h1>
          </div>

          <div style={{ display: "flex", marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "12px",
                paddingLeft: "16px",
                paddingRight: "16px",
                height: "32px",
                backgroundColor: "#52525b",
                color: "white",
                fontWeight: "bold",
                borderRadius: "6px",
                fontSize: "18px",
              }}
            >{`${new Intl.NumberFormat("en", { notation: "compact" }).format(
              guild?.memberCount ?? 0
            )} members`}</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "16px",
                paddingRight: "16px",
                height: "32px",
                backgroundColor: "#52525b",
                color: "white",
                fontWeight: "bold",
                borderRadius: "6px",
                fontSize: "18px",
              }}
            >{`${roles?.length || 0} roles`}</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "388px",
              fontFamily: "Dystopian, sans-serif",
              fontSize: "24px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {safeDescription ? (
              `${safeDescription?.slice(0, 80)}${
                safeDescription?.length > 80 ? "..." : ""
              }`
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "4px" }}>
                  {"That's a great party in there!"}
                </div>
                <div>{"I dare you to be the plus one."}</div>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "auto",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              style={{
                marginTop: "4px",
                marginRight: "8px",
                width: "20px",
                height: "20px",
              }}
              src={`${baseUrl}/guildLogos/logo.svg`}
              alt="Guild.xyz"
            />
            <div
              style={{
                fontFamily: "Dystopian, sans-serif",
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
                lineHeight: 1.2,
              }}
            >
              Guild.xyz
            </div>
          </div>
        </div>
      </div>,
      {
        headers: {
          "Cache-Control": "s-maxage=3600", // 1 hour
        },
        width: 800,
        height: 450,
        fonts: [
          {
            name: "Inter",
            data: interFontData,
            style: "normal",
            weight: 400,
          },
          {
            name: "Inter",
            data: interBoldFontData,
            style: "normal",
            weight: 700,
          },
          {
            name: "Dystopian",
            data: dystopianFontData,
            style: "normal",
          },
        ],
      }
    )
  } catch (e: any) {}
}

export default handler
