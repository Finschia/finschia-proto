/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.token.v1";

/** Permission enumerates the valid permissions on a token class. */
export enum Permission {
  /** PERMISSION_UNSPECIFIED - unspecified defines the default permission which is invalid. */
  PERMISSION_UNSPECIFIED = 0,
  /** PERMISSION_MODIFY - PERMISSION_MODIFY defines a permission to modify a contract. */
  PERMISSION_MODIFY = 1,
  /** PERMISSION_MINT - PERMISSION_MINT defines a permission to mint tokens of a contract. */
  PERMISSION_MINT = 2,
  /** PERMISSION_BURN - PERMISSION_BURN defines a permission to burn tokens of a contract. */
  PERMISSION_BURN = 3,
  UNRECOGNIZED = -1,
}

export function permissionFromJSON(object: any): Permission {
  switch (object) {
    case 0:
    case "PERMISSION_UNSPECIFIED":
      return Permission.PERMISSION_UNSPECIFIED;
    case 1:
    case "PERMISSION_MODIFY":
      return Permission.PERMISSION_MODIFY;
    case 2:
    case "PERMISSION_MINT":
      return Permission.PERMISSION_MINT;
    case 3:
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
 * LegacyPermission enumerates the valid permissions on a token class.
 */
export enum LegacyPermission {
  /** LEGACY_PERMISSION_UNSPECIFIED - unspecified defines the default permission which is invalid. */
  LEGACY_PERMISSION_UNSPECIFIED = 0,
  /** LEGACY_PERMISSION_MODIFY - modify defines a permission to modify a contract. */
  LEGACY_PERMISSION_MODIFY = 1,
  /** LEGACY_PERMISSION_MINT - mint defines a permission to mint tokens of a contract. */
  LEGACY_PERMISSION_MINT = 2,
  /** LEGACY_PERMISSION_BURN - burn defines a permission to burn tokens of a contract. */
  LEGACY_PERMISSION_BURN = 3,
  UNRECOGNIZED = -1,
}

export function legacyPermissionFromJSON(object: any): LegacyPermission {
  switch (object) {
    case 0:
    case "LEGACY_PERMISSION_UNSPECIFIED":
      return LegacyPermission.LEGACY_PERMISSION_UNSPECIFIED;
    case 1:
    case "LEGACY_PERMISSION_MODIFY":
      return LegacyPermission.LEGACY_PERMISSION_MODIFY;
    case 2:
    case "LEGACY_PERMISSION_MINT":
      return LegacyPermission.LEGACY_PERMISSION_MINT;
    case 3:
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

/** Params defines the parameters for the token module. */
export interface Params {}

/** TokenClass defines token information. */
export interface TokenClass {
  /** contract_id defines the unique identifier of the token class. */
  contractId: string;
  /** name defines the human-readable name of the token class. mandatory (not ERC20 compliant). */
  name: string;
  /** symbol is an abbreviated name for token class. mandatory (not ERC20 compliant). */
  symbol: string;
  /** image_uri is an uri for the image of the token class stored off chain. */
  imageUri: string;
  /** meta is a brief description of token class. */
  meta: string;
  /** decimals is the number of decimals which one must divide the amount by to get its user representation. */
  decimals: number;
  /** mintable represents whether the token is allowed to mint or burn. */
  mintable: boolean;
}

/** Pair defines a key-value pair. */
export interface Pair {
  field: string;
  value: string;
}

/** Authorization defines an authorization given to the operator on tokens of the holder. */
export interface Authorization {
  /** address of the token holder which approves the authorization. */
  holder: string;
  /** address of the operator which the authorization is granted to. */
  operator: string;
}

/** Grant defines permission given to a grantee. */
export interface Grant {
  /** address of the grantee. */
  grantee: string;
  /** permission on the token class. */
  permission: Permission;
}

function createBaseParams(): Params {
  return {};
}

export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Params {
    return {};
  },

  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(_: I): Params {
    const message = createBaseParams();
    return message;
  },
};

function createBaseTokenClass(): TokenClass {
  return {
    contractId: "",
    name: "",
    symbol: "",
    imageUri: "",
    meta: "",
    decimals: 0,
    mintable: false,
  };
}

export const TokenClass = {
  encode(
    message: TokenClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.imageUri !== "") {
      writer.uint32(34).string(message.imageUri);
    }
    if (message.meta !== "") {
      writer.uint32(42).string(message.meta);
    }
    if (message.decimals !== 0) {
      writer.uint32(48).int32(message.decimals);
    }
    if (message.mintable === true) {
      writer.uint32(56).bool(message.mintable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenClass();
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
          message.symbol = reader.string();
          break;
        case 4:
          message.imageUri = reader.string();
          break;
        case 5:
          message.meta = reader.string();
          break;
        case 6:
          message.decimals = reader.int32();
          break;
        case 7:
          message.mintable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenClass {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      imageUri: isSet(object.imageUri) ? String(object.imageUri) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
    };
  },

  toJSON(message: TokenClass): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.imageUri !== undefined && (obj.imageUri = message.imageUri);
    message.meta !== undefined && (obj.meta = message.meta);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenClass>, I>>(
    object: I
  ): TokenClass {
    const message = createBaseTokenClass();
    message.contractId = object.contractId ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.imageUri = object.imageUri ?? "";
    message.meta = object.meta ?? "";
    message.decimals = object.decimals ?? 0;
    message.mintable = object.mintable ?? false;
    return message;
  },
};

function createBasePair(): Pair {
  return { field: "", value: "" };
}

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();
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

  fromJSON(object: any): Pair {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pair>, I>>(object: I): Pair {
    const message = createBasePair();
    message.field = object.field ?? "";
    message.value = object.value ?? "";
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
