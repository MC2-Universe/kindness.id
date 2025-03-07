/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
*/

import { Contract, Interface } from "fuels"
import type {
  AbstractAddress,
  Account,
  BN,
  BigNumberish,
  Bytes,
  EvmAddress,
  FunctionFragment,
  InvokeFunction,
  JsonAbi,
  Provider,
  StdString,
  StorageSlot,
} from "fuels"

import type { Enum, Option } from "./common"

export enum AccessErrorInput {
  NotOwner = "NotOwner",
}
export enum AccessErrorOutput {
  NotOwner = "NotOwner",
}
export enum GuildActionInput {
  Joined = "Joined",
  Owner = "Owner",
  Admin = "Admin",
}
export enum GuildActionOutput {
  Joined = "Joined",
  Owner = "Owner",
  Admin = "Admin",
}
export type IdentityInput = Enum<{
  Address: AddressInput
  ContractId: ContractIdInput
}>
export type IdentityOutput = Enum<{
  Address: AddressOutput
  ContractId: ContractIdOutput
}>
export enum InitErrorInput {
  AlreadyInitialized = "AlreadyInitialized",
  NotInitialized = "NotInitialized",
}
export enum InitErrorOutput {
  AlreadyInitialized = "AlreadyInitialized",
  NotInitialized = "NotInitialized",
}
export enum InitializationErrorInput {
  CannotReinitialized = "CannotReinitialized",
}
export enum InitializationErrorOutput {
  CannotReinitialized = "CannotReinitialized",
}
export type MetadataInput = Enum<{
  B256: string
  Bytes: Bytes
  Int: BigNumberish
  String: StdString
}>
export type MetadataOutput = Enum<{
  B256: string
  Bytes: Bytes
  Int: BN
  String: StdString
}>
export type StateInput = Enum<{
  Uninitialized: []
  Initialized: IdentityInput
  Revoked: []
}>
export type StateOutput = Enum<{
  Uninitialized: []
  Initialized: IdentityOutput
  Revoked: []
}>
export enum TokenErrorInput {
  AlreadyClaimed = "AlreadyClaimed",
  AlreadyBurned = "AlreadyBurned",
  ExpiredSignature = "ExpiredSignature",
  InvalidSignature = "InvalidSignature",
  InvalidAssetId = "InvalidAssetId",
  InvalidContractId = "InvalidContractId",
  InsufficientAmount = "InsufficientAmount",
  PinIdDoesNotExist = "PinIdDoesNotExist",
  NotPinOwner = "NotPinOwner",
  CouldNotRemoveEntry = "CouldNotRemoveEntry",
}
export enum TokenErrorOutput {
  AlreadyClaimed = "AlreadyClaimed",
  AlreadyBurned = "AlreadyBurned",
  ExpiredSignature = "ExpiredSignature",
  InvalidSignature = "InvalidSignature",
  InvalidAssetId = "InvalidAssetId",
  InvalidContractId = "InvalidContractId",
  InsufficientAmount = "InsufficientAmount",
  PinIdDoesNotExist = "PinIdDoesNotExist",
  NotPinOwner = "NotPinOwner",
  CouldNotRemoveEntry = "CouldNotRemoveEntry",
}

export type AddressInput = { bits: string }
export type AddressOutput = AddressInput
export type AssetIdInput = { bits: string }
export type AssetIdOutput = AssetIdInput
export type ClaimParametersInput = {
  recipient: AddressInput
  action: GuildActionInput
  user_id: BigNumberish
  guild_id: BigNumberish
  guild_name: string
  created_at: BigNumberish
  signed_at: BigNumberish
  chain_id: BigNumberish
  cid: string
  admin_treasury: IdentityInput
  admin_fee: BigNumberish
  contract_id: ContractIdInput
}
export type ClaimParametersOutput = {
  recipient: AddressOutput
  action: GuildActionOutput
  user_id: BN
  guild_id: BN
  guild_name: string
  created_at: BN
  signed_at: BN
  chain_id: BN
  cid: string
  admin_treasury: IdentityOutput
  admin_fee: BN
  contract_id: ContractIdOutput
}
export type ContractIdInput = { bits: string }
export type ContractIdOutput = ContractIdInput
export type ContractInitializedInput = {
  owner: IdentityInput
  signer: EvmAddress
  treasury: IdentityInput
  fee: BigNumberish
}
export type ContractInitializedOutput = {
  owner: IdentityOutput
  signer: EvmAddress
  treasury: IdentityOutput
  fee: BN
}
export type FeeChangedInput = { old: BigNumberish; new: BigNumberish }
export type FeeChangedOutput = { old: BN; new: BN }
export type OwnershipSetInput = { new_owner: IdentityInput }
export type OwnershipSetOutput = { new_owner: IdentityOutput }
export type OwnershipTransferredInput = {
  new_owner: IdentityInput
  previous_owner: IdentityInput
}
export type OwnershipTransferredOutput = {
  new_owner: IdentityOutput
  previous_owner: IdentityOutput
}
export type PinMintedInput = { recipient: AddressInput; pin_id: BigNumberish }
export type PinMintedOutput = { recipient: AddressOutput; pin_id: BN }
export type SignerChangedInput = { old: EvmAddress; new: EvmAddress }
export type SignerChangedOutput = SignerChangedInput
export type TreasuryChangedInput = { old: IdentityInput; new: IdentityInput }
export type TreasuryChangedOutput = { old: IdentityOutput; new: IdentityOutput }

export type GuildPinContractConfigurables = Partial<{
  NAME: string
  SYMBOL: string
  OWNER: IdentityInput
  SIGNER: string
  SIGNATURE_VALIDITY_PERIOD: BigNumberish
  TREASURY: IdentityInput
  FEE: BigNumberish
}>

export const abi = {
  encoding: "1",
  types: [
    {
      typeId: 0,
      type: "()",
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: "[_; 2]",
      components: [
        {
          name: "__array_element",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 2,
      type: "b256",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 3,
      type: "enum AccessError",
      components: [
        {
          name: "NotOwner",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 4,
      type: "enum GuildAction",
      components: [
        {
          name: "Joined",
          type: 0,
          typeArguments: null,
        },
        {
          name: "Owner",
          type: 0,
          typeArguments: null,
        },
        {
          name: "Admin",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 5,
      type: "enum Identity",
      components: [
        {
          name: "Address",
          type: 18,
          typeArguments: null,
        },
        {
          name: "ContractId",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 6,
      type: "enum InitError",
      components: [
        {
          name: "AlreadyInitialized",
          type: 0,
          typeArguments: null,
        },
        {
          name: "NotInitialized",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 7,
      type: "enum InitializationError",
      components: [
        {
          name: "CannotReinitialized",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 8,
      type: "enum Metadata",
      components: [
        {
          name: "B256",
          type: 2,
          typeArguments: null,
        },
        {
          name: "Bytes",
          type: 21,
          typeArguments: null,
        },
        {
          name: "Int",
          type: 34,
          typeArguments: null,
        },
        {
          name: "String",
          type: 32,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 9,
      type: "enum Option",
      components: [
        {
          name: "None",
          type: 0,
          typeArguments: null,
        },
        {
          name: "Some",
          type: 12,
          typeArguments: null,
        },
      ],
      typeParameters: [12],
    },
    {
      typeId: 10,
      type: "enum State",
      components: [
        {
          name: "Uninitialized",
          type: 0,
          typeArguments: null,
        },
        {
          name: "Initialized",
          type: 5,
          typeArguments: null,
        },
        {
          name: "Revoked",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 11,
      type: "enum TokenError",
      components: [
        {
          name: "AlreadyClaimed",
          type: 0,
          typeArguments: null,
        },
        {
          name: "AlreadyBurned",
          type: 0,
          typeArguments: null,
        },
        {
          name: "ExpiredSignature",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InvalidSignature",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InvalidAssetId",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InvalidContractId",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InsufficientAmount",
          type: 0,
          typeArguments: null,
        },
        {
          name: "PinIdDoesNotExist",
          type: 0,
          typeArguments: null,
        },
        {
          name: "NotPinOwner",
          type: 0,
          typeArguments: null,
        },
        {
          name: "CouldNotRemoveEntry",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 12,
      type: "generic T",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 13,
      type: "raw untyped ptr",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 14,
      type: "str",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 15,
      type: "str[5]",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 16,
      type: "str[64]",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 17,
      type: "str[9]",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 18,
      type: "struct Address",
      components: [
        {
          name: "bits",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 19,
      type: "struct AssetId",
      components: [
        {
          name: "bits",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 20,
      type: "struct B512",
      components: [
        {
          name: "bits",
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 21,
      type: "struct Bytes",
      components: [
        {
          name: "buf",
          type: 30,
          typeArguments: null,
        },
        {
          name: "len",
          type: 34,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 22,
      type: "struct ClaimParameters",
      components: [
        {
          name: "recipient",
          type: 18,
          typeArguments: null,
        },
        {
          name: "action",
          type: 4,
          typeArguments: null,
        },
        {
          name: "user_id",
          type: 34,
          typeArguments: null,
        },
        {
          name: "guild_id",
          type: 34,
          typeArguments: null,
        },
        {
          name: "guild_name",
          type: 16,
          typeArguments: null,
        },
        {
          name: "created_at",
          type: 34,
          typeArguments: null,
        },
        {
          name: "signed_at",
          type: 34,
          typeArguments: null,
        },
        {
          name: "chain_id",
          type: 34,
          typeArguments: null,
        },
        {
          name: "cid",
          type: 16,
          typeArguments: null,
        },
        {
          name: "admin_treasury",
          type: 5,
          typeArguments: null,
        },
        {
          name: "admin_fee",
          type: 34,
          typeArguments: null,
        },
        {
          name: "contract_id",
          type: 23,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 23,
      type: "struct ContractId",
      components: [
        {
          name: "bits",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 24,
      type: "struct ContractInitialized",
      components: [
        {
          name: "owner",
          type: 5,
          typeArguments: null,
        },
        {
          name: "signer",
          type: 25,
          typeArguments: null,
        },
        {
          name: "treasury",
          type: 5,
          typeArguments: null,
        },
        {
          name: "fee",
          type: 34,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 25,
      type: "struct EvmAddress",
      components: [
        {
          name: "bits",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 26,
      type: "struct FeeChanged",
      components: [
        {
          name: "old",
          type: 34,
          typeArguments: null,
        },
        {
          name: "new",
          type: 34,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 27,
      type: "struct OwnershipSet",
      components: [
        {
          name: "new_owner",
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 28,
      type: "struct OwnershipTransferred",
      components: [
        {
          name: "new_owner",
          type: 5,
          typeArguments: null,
        },
        {
          name: "previous_owner",
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 29,
      type: "struct PinMinted",
      components: [
        {
          name: "recipient",
          type: 18,
          typeArguments: null,
        },
        {
          name: "pin_id",
          type: 34,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 30,
      type: "struct RawBytes",
      components: [
        {
          name: "ptr",
          type: 13,
          typeArguments: null,
        },
        {
          name: "cap",
          type: 34,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 31,
      type: "struct SignerChanged",
      components: [
        {
          name: "old",
          type: 25,
          typeArguments: null,
        },
        {
          name: "new",
          type: 25,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 32,
      type: "struct String",
      components: [
        {
          name: "bytes",
          type: 21,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 33,
      type: "struct TreasuryChanged",
      components: [
        {
          name: "old",
          type: 5,
          typeArguments: null,
        },
        {
          name: "new",
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 34,
      type: "u64",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 35,
      type: "u8",
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [],
      name: "initialize",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "fee",
          type: 34,
          typeArguments: null,
        },
      ],
      name: "set_fee",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "owner",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "set_owner",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "signer",
          type: 25,
          typeArguments: null,
        },
      ],
      name: "set_signer",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "treasury",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "set_treasury",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [],
      name: "fee",
      output: {
        name: "",
        type: 34,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "signer",
      output: {
        name: "",
        type: 2,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "treasury",
      output: {
        name: "",
        type: 5,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "_pin_id",
          type: 34,
          typeArguments: null,
        },
      ],
      name: "burn",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "params",
          type: 22,
          typeArguments: null,
        },
        {
          name: "signature",
          type: 20,
          typeArguments: null,
        },
      ],
      name: "claim",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "payable",
          arguments: [],
        },
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "id",
          type: 18,
          typeArguments: null,
        },
      ],
      name: "balance_of",
      output: {
        name: "",
        type: 34,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "user",
          type: 18,
          typeArguments: null,
        },
        {
          name: "guild_id",
          type: 34,
          typeArguments: null,
        },
        {
          name: "action",
          type: 4,
          typeArguments: null,
        },
      ],
      name: "pin_id_by_address",
      output: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 34,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "user_id",
          type: 34,
          typeArguments: null,
        },
        {
          name: "guild_id",
          type: 34,
          typeArguments: null,
        },
        {
          name: "action",
          type: 4,
          typeArguments: null,
        },
      ],
      name: "pin_id_by_user_id",
      output: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 34,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "pin_id",
          type: 34,
          typeArguments: null,
        },
      ],
      name: "pin_owner",
      output: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 18,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "user",
          type: 18,
          typeArguments: null,
        },
        {
          name: "index",
          type: 34,
          typeArguments: null,
        },
      ],
      name: "token_of_owner_by_index",
      output: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 34,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "total_minted",
      output: {
        name: "",
        type: 34,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "guild_id",
          type: 34,
          typeArguments: null,
        },
      ],
      name: "total_minted_per_guild",
      output: {
        name: "",
        type: 34,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "owner",
      output: {
        name: "",
        type: 10,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "asset",
          type: 19,
          typeArguments: null,
        },
      ],
      name: "decimals",
      output: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 35,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "asset",
          type: 19,
          typeArguments: null,
        },
      ],
      name: "name",
      output: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 32,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "asset",
          type: 19,
          typeArguments: null,
        },
      ],
      name: "symbol",
      output: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 32,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "total_assets",
      output: {
        name: "",
        type: 34,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "asset",
          type: 19,
          typeArguments: null,
        },
      ],
      name: "total_supply",
      output: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 34,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "asset_id",
          type: 19,
          typeArguments: null,
        },
        {
          name: "key",
          type: 32,
          typeArguments: null,
        },
      ],
      name: "metadata",
      output: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 8,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "pin_id",
          type: 34,
          typeArguments: null,
        },
      ],
      name: "encoded_metadata",
      output: {
        name: "",
        type: 32,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "pin_id",
          type: 34,
          typeArguments: null,
        },
      ],
      name: "pin_metadata",
      output: {
        name: "",
        type: 32,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
  ],
  loggedTypes: [
    {
      logId: "2894384429946533623",
      loggedType: {
        name: "",
        type: 6,
        typeArguments: [],
      },
    },
    {
      logId: "2161305517876418151",
      loggedType: {
        name: "",
        type: 7,
        typeArguments: [],
      },
    },
    {
      logId: "16280289466020123285",
      loggedType: {
        name: "",
        type: 27,
        typeArguments: [],
      },
    },
    {
      logId: "14366998805467575349",
      loggedType: {
        name: "",
        type: 24,
        typeArguments: [],
      },
    },
    {
      logId: "4571204900286667806",
      loggedType: {
        name: "",
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: "2446762064164283588",
      loggedType: {
        name: "",
        type: 26,
        typeArguments: [],
      },
    },
    {
      logId: "12970362301975156672",
      loggedType: {
        name: "",
        type: 28,
        typeArguments: [],
      },
    },
    {
      logId: "1176917155281974327",
      loggedType: {
        name: "",
        type: 31,
        typeArguments: [],
      },
    },
    {
      logId: "15028988019905214435",
      loggedType: {
        name: "",
        type: 33,
        typeArguments: [],
      },
    },
    {
      logId: "10098701174489624218",
      loggedType: {
        name: "",
        type: 14,
        typeArguments: null,
      },
    },
    {
      logId: "8391453796649435963",
      loggedType: {
        name: "",
        type: 11,
        typeArguments: [],
      },
    },
    {
      logId: "6914920428417705670",
      loggedType: {
        name: "",
        type: 29,
        typeArguments: [],
      },
    },
    {
      logId: "11132648958528852192",
      loggedType: {
        name: "",
        type: 32,
        typeArguments: [],
      },
    },
    {
      logId: "15587543869071072960",
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [
          {
            name: "",
            type: 34,
            typeArguments: null,
          },
        ],
      },
    },
  ],
  messagesTypes: [],
  configurables: [
    {
      name: "NAME",
      configurableType: {
        name: "",
        type: 17,
        typeArguments: null,
      },
      offset: 74416,
    },
    {
      name: "SYMBOL",
      configurableType: {
        name: "",
        type: 15,
        typeArguments: null,
      },
      offset: 74432,
    },
    {
      name: "OWNER",
      configurableType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
      offset: 74160,
    },
    {
      name: "SIGNER",
      configurableType: {
        name: "",
        type: 2,
        typeArguments: null,
      },
      offset: 74208,
    },
    {
      name: "SIGNATURE_VALIDITY_PERIOD",
      configurableType: {
        name: "",
        type: 34,
        typeArguments: null,
      },
      offset: 74376,
    },
    {
      name: "TREASURY",
      configurableType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
      offset: 74240,
    },
    {
      name: "FEE",
      configurableType: {
        name: "",
        type: 34,
        typeArguments: null,
      },
      offset: 74280,
    },
  ],
} as unknown as JsonAbi

const storageSlots: StorageSlot[] = [
  {
    key: "0a860bae2f483542169820f52be34ca40c507a967660cdc5941c15815204bc4d",
    value: "0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    key: "b48b753af346966d0d169c0b2e3234611f65d5cfdb57c7b6e7cd6ca93707bee0",
    value: "0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    key: "c7e08cdde76020f08f4ce5c3257422ae67f9676992689b64b85f35aa58752d9e",
    value: "0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    key: "d02e07f5a716bd3b6670aaf9a73352164e6b946c24db14f72005b7029e67d96a",
    value: "0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    key: "de9090cb50e71c2588c773487d1da7066d0c719849a7e58dc8b6397a25c567c0",
    value: "0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    key: "de9090cb50e71c2588c773487d1da7066d0c719849a7e58dc8b6397a25c567c1",
    value: "0000000000000000000000000000000000000000000000000000000000000000",
  },
  {
    key: "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ed",
    value: "0000000000000000000000000000000000000000000000000000000000000000",
  },
]

export class GuildPinContractInterface extends Interface {
  constructor() {
    super(abi)
  }

  declare functions: {
    initialize: FunctionFragment
    set_fee: FunctionFragment
    set_owner: FunctionFragment
    set_signer: FunctionFragment
    set_treasury: FunctionFragment
    fee: FunctionFragment
    signer: FunctionFragment
    treasury: FunctionFragment
    burn: FunctionFragment
    claim: FunctionFragment
    balance_of: FunctionFragment
    pin_id_by_address: FunctionFragment
    pin_id_by_user_id: FunctionFragment
    pin_owner: FunctionFragment
    token_of_owner_by_index: FunctionFragment
    total_minted: FunctionFragment
    total_minted_per_guild: FunctionFragment
    owner: FunctionFragment
    decimals: FunctionFragment
    name: FunctionFragment
    symbol: FunctionFragment
    total_assets: FunctionFragment
    total_supply: FunctionFragment
    metadata: FunctionFragment
    encoded_metadata: FunctionFragment
    pin_metadata: FunctionFragment
  }
}

export class GuildPinContract extends Contract {
  static readonly abi = abi
  static readonly storageSlots = storageSlots

  declare interface: GuildPinContractInterface
  declare functions: {
    initialize: InvokeFunction<[], void>
    set_fee: InvokeFunction<[fee: BigNumberish], void>
    set_owner: InvokeFunction<[owner: IdentityInput], void>
    set_signer: InvokeFunction<[signer: EvmAddress], void>
    set_treasury: InvokeFunction<[treasury: IdentityInput], void>
    fee: InvokeFunction<[], BN>
    signer: InvokeFunction<[], string>
    treasury: InvokeFunction<[], IdentityOutput>
    burn: InvokeFunction<[_pin_id: BigNumberish], void>
    claim: InvokeFunction<[params: ClaimParametersInput, signature: string], void>
    balance_of: InvokeFunction<[id: AddressInput], BN>
    pin_id_by_address: InvokeFunction<
      [user: AddressInput, guild_id: BigNumberish, action: GuildActionInput],
      Option<BN>
    >
    pin_id_by_user_id: InvokeFunction<
      [user_id: BigNumberish, guild_id: BigNumberish, action: GuildActionInput],
      Option<BN>
    >
    pin_owner: InvokeFunction<[pin_id: BigNumberish], Option<AddressOutput>>
    token_of_owner_by_index: InvokeFunction<
      [user: AddressInput, index: BigNumberish],
      Option<BN>
    >
    total_minted: InvokeFunction<[], BN>
    total_minted_per_guild: InvokeFunction<[guild_id: BigNumberish], BN>
    owner: InvokeFunction<[], StateOutput>
    decimals: InvokeFunction<[asset: AssetIdInput], Option<number>>
    name: InvokeFunction<[asset: AssetIdInput], Option<StdString>>
    symbol: InvokeFunction<[asset: AssetIdInput], Option<StdString>>
    total_assets: InvokeFunction<[], BN>
    total_supply: InvokeFunction<[asset: AssetIdInput], Option<BN>>
    metadata: InvokeFunction<
      [asset_id: AssetIdInput, key: StdString],
      Option<MetadataOutput>
    >
    encoded_metadata: InvokeFunction<[pin_id: BigNumberish], StdString>
    pin_metadata: InvokeFunction<[pin_id: BigNumberish], StdString>
  }

  constructor(id: string | AbstractAddress, accountOrProvider: Account | Provider) {
    super(id, abi, accountOrProvider)
  }
}
