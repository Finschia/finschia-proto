/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.collection.v1";

/** Permission enumerates the valid permissions on a contract. */
export enum Permission {
  /** PERMISSION_UNSPECIFIED - unspecified defines the default permission which is invalid. */
  PERMISSION_UNSPECIFIED = 0,
  /** PERMISSION_ISSUE - PERMISSION_ISSUE defines a permission to create a token class. */
  PERMISSION_ISSUE = 1,
  /** PERMISSION_MODIFY - PERMISSION_MODIFY defines a permission to modify a contract. */
  PERMISSION_MODIFY = 2,
  /** PERMISSION_MINT - PERMISSION_MINT defines a permission to mint tokens of a contract. */
  PERMISSION_MINT = 3,
  /** PERMISSION_BURN - PERMISSION_BURN defines a permission to burn tokens of a contract. */
  PERMISSION_BURN = 4,
  UNRECOGNIZED = -1,
}

export function permissionFromJSON(object: any): Permission {
  switch (object) {
    case 0:
    case "PERMISSION_UNSPECIFIED":
      return Permission.PERMISSION_UNSPECIFIED;
    case 1:
    case "PERMISSION_ISSUE":
      return Permission.PERMISSION_ISSUE;
    case 2:
    case "PERMISSION_MODIFY":
      return Permission.PERMISSION_MODIFY;
    case 3:
    case "PERMISSION_MINT":
      return Permission.PERMISSION_MINT;
    case 4:
    case "PERMISSION_BURN":
      return Permission.PERMISSION_BURN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permission.UNRECOGNIZED;
  }
}

export function permissionToJSON(object: Permission): string {
  switch (object) {
    case Permission.PERMISSION_UNSPECIFIED:
      return "PERMISSION_UNSPECIFIED";
    case Permission.PERMISSION_ISSUE:
      return "PERMISSION_ISSUE";
    case Permission.PERMISSION_MODIFY:
      return "PERMISSION_MODIFY";
    case Permission.PERMISSION_MINT:
      return "PERMISSION_MINT";
    case Permission.PERMISSION_BURN:
      return "PERMISSION_BURN";
    case Permission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Deprecated: use Permission
 *
 * LegacyPermission enumerates the valid permissions on a contract.
 */
export enum LegacyPermission {
  /** LEGACY_PERMISSION_UNSPECIFIED - unspecified defines the default permission which is invalid. */
  LEGACY_PERMISSION_UNSPECIFIED = 0,
  /** LEGACY_PERMISSION_ISSUE - issue defines a permission to create a token class. */
  LEGACY_PERMISSION_ISSUE = 1,
  /** LEGACY_PERMISSION_MODIFY - modify defines a permission to modify a contract. */
  LEGACY_PERMISSION_MODIFY = 2,
  /** LEGACY_PERMISSION_MINT - mint defines a permission to mint tokens of a contract. */
  LEGACY_PERMISSION_MINT = 3,
  /** LEGACY_PERMISSION_BURN - burn defines a permission to burn tokens of a contract. */
  LEGACY_PERMISSION_BURN = 4,
  UNRECOGNIZED = -1,
}

export function legacyPermissionFromJSON(object: any): LegacyPermission {
  switch (object) {
    case 0:
    case "LEGACY_PERMISSION_UNSPECIFIED":
      return LegacyPermission.LEGACY_PERMISSION_UNSPECIFIED;
    case 1:
    case "LEGACY_PERMISSION_ISSUE":
      return LegacyPermission.LEGACY_PERMISSION_ISSUE;
    case 2:
    case "LEGACY_PERMISSION_MODIFY":
      return LegacyPermission.LEGACY_PERMISSION_MODIFY;
    case 3:
    case "LEGACY_PERMISSION_MINT":
      return LegacyPermission.LEGACY_PERMISSION_MINT;
    case 4:
    case "LEGACY_PERMISSION_BURN":
      return LegacyPermission.LEGACY_PERMISSION_BURN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LegacyPermission.UNRECOGNIZED;
  }
}

export function legacyPermissionToJSON(object: LegacyPermission): string {
  switch (object) {
    case LegacyPermission.LEGACY_PERMISSION_UNSPECIFIED:
      return "LEGACY_PERMISSION_UNSPECIFIED";
    case LegacyPermission.LEGACY_PERMISSION_ISSUE:
      return "LEGACY_PERMISSION_ISSUE";
    case LegacyPermission.LEGACY_PERMISSION_MODIFY:
      return "LEGACY_PERMISSION_MODIFY";
    case LegacyPermission.LEGACY_PERMISSION_MINT:
      return "LEGACY_PERMISSION_MINT";
    case LegacyPermission.LEGACY_PERMISSION_BURN:
      return "LEGACY_PERMISSION_BURN";
    case LegacyPermission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Params defines the parameters for the collection module. */
export interface Params {
  depthLimit: number;
  widthLimit: number;
}

/** Contract defines the information of the contract for the collection. */
export interface Contract {
  /** contract_id defines the unique identifier of the contract. */
  contractId: string;
  /** name defines the human-readable name of the contract. */
  name: string;
  /** meta is a brief description of the contract. */
  meta: string;
  /** base img uri is an uri for the contract image stored off chain. */
  baseImgUri: string;
}

/**
 * FTClass defines the class of fungible token.
 *
 * Since: 0.46.0 (finschia)
 */
export interface FTClass {
  /**
   * id defines the unique identifier of the token class.
   * Note: size of the class id is 8 in length.
   * Note: token id of the fungible token would be `id` + `00000000`.
   */
  id: string;
  /** name defines the human-readable name of the token class. */
  name: string;
  /** meta is a brief description of the token class. */
  meta: string;
  /** decimals is the number of decimals which one must divide the amount by to get its user representation. */
  decimals: number;
  /** mintable represents whether the token class is allowed to mint or burn its tokens. */
  mintable: boolean;
}

/**
 * NFTClass defines the class of non-fungible token.
 *
 * Since: 0.46.0 (finschia)
 */
export interface NFTClass {
  /**
   * id defines the unique identifier of the token class.
   * Note: size of the class id is 8 in length.
   */
  id: string;
  /** name defines the human-readable name of the token class. */
  name: string;
  /** meta is a brief description of the token class. */
  meta: string;
}

/**
 * NFT defines the information of non-fungible token.
 *
 * Since: 0.46.0 (finschia)
 */
export interface NFT {
  /** id defines the unique identifier of the token. */
  id: string;
  /** name defines the human-readable name of the token. */
  name: string;
  /** meta is a brief description of the token. */
  meta: string;
}

/**
 * Deprecated: use NFT
 *
 * OwnerNFT defines the information of non-fungible token.
 */
export interface OwnerNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** id defines the unique identifier of the token. */
  tokenId: string;
  /** name defines the human-readable name of the token. */
  name: string;
  /** meta is a brief description of the token. */
  meta: string;
  /** owner of the token. */
  owner: string;
}

/**
 * Deprecated: use FTClass
 *
 * FT defines the information of fungible token.
 */
export interface FT {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id defines the unique identifier of the fungible token. */
  tokenId: string;
  /** name defines the human-readable name of the fungible token. */
  name: string;
  /** meta is a brief description of the fungible token. */
  meta: string;
  /** decimals is the number of decimals which one must divide the amount by to get its user representation. */
  decimals: number;
  /** mintable represents whether the fungible token is allowed to be minted or burnt. */
  mintable: boolean;
}

/**
 * Deprecated: use TokenClass
 *
 * TokenType defines the information of token type.
 */
export interface TokenType {
  /** contract id associated with the contract. */
  contractId: string;
  /** token type defines the unique identifier of the token type. */
  tokenType: string;
  /** name defines the human-readable name of the token type. */
  name: string;
  /** meta is a brief description of the token type. */
  meta: string;
}

/** Coin defines a token with a token id and an amount. */
export interface Coin {
  /** token id associated with the token. */
  tokenId: string;
  /** amount of the token. */
  amount: string;
}

/**
 * Grant defines permission given to a grantee.
 *
 * Since: 0.46.0 (finschia)
 */
export interface Grant {
  /** address of the grantee. */
  grantee: string;
  /** permission on the contract. */
  permission: Permission;
}

/**
 * Authorization defines an authorization given to the operator on tokens of the holder.
 *
 * Since: 0.46.0 (finschia)
 */
export interface Authorization {
  /** address of the holder which authorizes the manipulation of its tokens. */
  holder: string;
  /** address of the operator which the authorization is granted to. */
  operator: string;
}

/**
 * Attribute defines a key and value of the attribute.
 *
 * Since: 0.46.0 (finschia)
 */
export interface Attribute {
  key: string;
  value: string;
}

/**
 * Deprecated: use Attribute
 *
 * Change defines a field-value pair.
 */
export interface Change {
  field: string;
  value: string;
}

function createBaseParams(): Params {
  return { depthLimit: 0, widthLimit: 0 };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depthLimit !== 0) {
      writer.uint32(8).uint32(message.depthLimit);
    }
    if (message.widthLimit !== 0) {
      writer.uint32(16).uint32(message.widthLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depthLimit = reader.uint32();
          break;
        case 2:
          message.widthLimit = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      depthLimit: isSet(object.depthLimit) ? Number(object.depthLimit) : 0,
      widthLimit: isSet(object.widthLimit) ? Number(object.widthLimit) : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.depthLimit !== undefined &&
      (obj.depthLimit = Math.round(message.depthLimit));
    message.widthLimit !== undefined &&
      (obj.widthLimit = Math.round(message.widthLimit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.depthLimit = object.depthLimit ?? 0;
    message.widthLimit = object.widthLimit ?? 0;
    return message;
  },
};

function createBaseContract(): Contract {
  return { contractId: "", name: "", meta: "", baseImgUri: "" };
}

export const Contract = {
  encode(
    message: Contract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    if (message.baseImgUri !== "") {
      writer.uint32(34).string(message.baseImgUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        case 4:
          message.baseImgUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Contract {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      baseImgUri: isSet(object.baseImgUri) ? String(object.baseImgUri) : "",
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.baseImgUri !== undefined && (obj.baseImgUri = message.baseImgUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Contract>, I>>(object: I): Contract {
    const message = createBaseContract();
    message.contractId = object.contractId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.baseImgUri = object.baseImgUri ?? "";
    return message;
  },
};

function createBaseFTClass(): FTClass {
  return { id: "", name: "", meta: "", decimals: 0, mintable: false };
}

export const FTClass = {
  encode(
    message: FTClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    if (message.decimals !== 0) {
      writer.uint32(32).int32(message.decimals);
    }
    if (message.mintable === true) {
      writer.uint32(40).bool(message.mintable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FTClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFTClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        case 4:
          message.decimals = reader.int32();
          break;
        case 5:
          message.mintable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FTClass {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
    };
  },

  toJSON(message: FTClass): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FTClass>, I>>(object: I): FTClass {
    const message = createBaseFTClass();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.decimals = object.decimals ?? 0;
    message.mintable = object.mintable ?? false;
    return message;
  },
};

function createBaseNFTClass(): NFTClass {
  return { id: "", name: "", meta: "" };
}

export const NFTClass = {
  encode(
    message: NFTClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFTClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFTClass {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: NFTClass): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NFTClass>, I>>(object: I): NFTClass {
    const message = createBaseNFTClass();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseNFT(): NFT {
  return { id: "", name: "", meta: "" };
}

export const NFT = {
  encode(message: NFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: NFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NFT>, I>>(object: I): NFT {
    const message = createBaseNFT();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseOwnerNFT(): OwnerNFT {
  return { contractId: "", tokenId: "", name: "", meta: "", owner: "" };
}

export const OwnerNFT = {
  encode(
    message: OwnerNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OwnerNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OwnerNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: OwnerNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OwnerNFT>, I>>(object: I): OwnerNFT {
    const message = createBaseOwnerNFT();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseFT(): FT {
  return {
    contractId: "",
    tokenId: "",
    name: "",
    meta: "",
    decimals: 0,
    mintable: false,
  };
}

export const FT = {
  encode(message: FT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    if (message.decimals !== 0) {
      writer.uint32(40).int32(message.decimals);
    }
    if (message.mintable === true) {
      writer.uint32(48).bool(message.mintable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        case 5:
          message.decimals = reader.int32();
          break;
        case 6:
          message.mintable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
    };
  },

  toJSON(message: FT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FT>, I>>(object: I): FT {
    const message = createBaseFT();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.decimals = object.decimals ?? 0;
    message.mintable = object.mintable ?? false;
    return message;
  },
};

function createBaseTokenType(): TokenType {
  return { contractId: "", tokenType: "", name: "", meta: "" };
}

export const TokenType = {
  encode(
    message: TokenType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenType !== "") {
      writer.uint32(18).string(message.tokenType);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenType = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenType {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: TokenType): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenType>, I>>(
    object: I
  ): TokenType {
    const message = createBaseTokenType();
    message.contractId = object.contractId ?? "";
    message.tokenType = object.tokenType ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseCoin(): Coin {
  return { tokenId: "", amount: "" };
}

export const Coin = {
  encode(message: Coin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Coin {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: Coin): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Coin>, I>>(object: I): Coin {
    const message = createBaseCoin();
    message.tokenId = object.tokenId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseGrant(): Grant {
  return { grantee: "", permission: 0 };
}

export const Grant = {
  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.permission !== 0) {
      writer.uint32(16).int32(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.permission = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Grant {
    return {
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permission: isSet(object.permission)
        ? permissionFromJSON(object.permission)
        : 0,
    };
  },

  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permission !== undefined &&
      (obj.permission = permissionToJSON(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
    const message = createBaseGrant();
    message.grantee = object.grantee ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBaseAuthorization(): Authorization {
  return { holder: "", operator: "" };
}

export const Authorization = {
  encode(
    message: Authorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Authorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Authorization {
    return {
      holder: isSet(object.holder) ? String(object.holder) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: Authorization): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Authorization>, I>>(
    object: I
  ): Authorization {
    const message = createBaseAuthorization();
    message.holder = object.holder ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseAttribute(): Attribute {
  return { key: "", value: "" };
}

export const Attribute = {
  encode(
    message: Attribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(
    object: I
  ): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseChange(): Change {
  return { field: "", value: "" };
}

export const Change = {
  encode(
    message: Change,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Change {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Change {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Change): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Change>, I>>(object: I): Change {
    const message = createBaseChange();
    message.field = object.field ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
