/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.token.v1";

/** Params defines the parameters for the token module. */
export interface Params {}

/** Token defines token information. */
export interface Token {
  /** id defines the unique identifier of the token. */
  id: string;
  /** name defines the human-readable name of the token. */
  name: string;
  /** symbol is an abbreviated name for token. */
  symbol: string;
  /** meta is a brief description of token. */
  meta: string;
  /** image_uri is an uri for the token image stored off chain. */
  imageUri: string;
  /** decimals is the number of decimals which one must divide the amount by to get its user representation. */
  decimals: number;
  /** mintable represents whether the token is allowed to mint. */
  mintable: boolean;
}

/** FT defines a fungible token with a class id and an amount. */
export interface FT {
  /** class id associated with the token. */
  classId: string;
  /** amount of the token */
  amount: string;
}

/** Pair defines a key-value pair. */
export interface Pair {
  key: string;
  value: string;
}

/** Grant defines grant information. */
export interface Grant {
  /** address of the granted account. */
  grantee: string;
  /** class id associated with the token. */
  classId: string;
  /** action on the token class. Must be one of "mint", "burn" and "modify". */
  action: string;
}

/** Approve defines approve information. */
export interface Approve {
  approver: string;
  proxy: string;
  /** class id associated with the token. */
  classId: string;
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

function createBaseToken(): Token {
  return {
    id: "",
    name: "",
    symbol: "",
    meta: "",
    imageUri: "",
    decimals: 0,
    mintable: false,
  };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    if (message.imageUri !== "") {
      writer.uint32(42).string(message.imageUri);
    }
    if (message.decimals !== 0) {
      writer.uint32(48).int32(message.decimals);
    }
    if (message.mintable === true) {
      writer.uint32(56).bool(message.mintable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
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
          message.symbol = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        case 5:
          message.imageUri = reader.string();
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

  fromJSON(object: any): Token {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      imageUri: isSet(object.imageUri) ? String(object.imageUri) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.meta !== undefined && (obj.meta = message.meta);
    message.imageUri !== undefined && (obj.imageUri = message.imageUri);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.meta = object.meta ?? "";
    message.imageUri = object.imageUri ?? "";
    message.decimals = object.decimals ?? 0;
    message.mintable = object.mintable ?? false;
    return message;
  },
};

function createBaseFT(): FT {
  return { classId: "", amount: "" };
}

export const FT = {
  encode(message: FT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
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
          message.classId = reader.string();
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

  fromJSON(object: any): FT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: FT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FT>, I>>(object: I): FT {
    const message = createBaseFT();
    message.classId = object.classId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBasePair(): Pair {
  return { key: "", value: "" };
}

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
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

  fromJSON(object: any): Pair {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pair>, I>>(object: I): Pair {
    const message = createBasePair();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGrant(): Grant {
  return { grantee: "", classId: "", action: "" };
}

export const Grant = {
  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
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
          message.classId = reader.string();
          break;
        case 3:
          message.action = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.classId !== undefined && (obj.classId = message.classId);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
    const message = createBaseGrant();
    message.grantee = object.grantee ?? "";
    message.classId = object.classId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseApprove(): Approve {
  return { approver: "", proxy: "", classId: "" };
}

export const Approve = {
  encode(
    message: Approve,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.approver !== "") {
      writer.uint32(10).string(message.approver);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Approve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approver = reader.string();
          break;
        case 2:
          message.proxy = reader.string();
          break;
        case 3:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Approve {
    return {
      approver: isSet(object.approver) ? String(object.approver) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
    };
  },

  toJSON(message: Approve): unknown {
    const obj: any = {};
    message.approver !== undefined && (obj.approver = message.approver);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Approve>, I>>(object: I): Approve {
    const message = createBaseApprove();
    message.approver = object.approver ?? "";
    message.proxy = object.proxy ?? "";
    message.classId = object.classId ?? "";
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
