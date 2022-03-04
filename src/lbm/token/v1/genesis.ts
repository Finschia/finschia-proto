/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, Token, Grant, Approve, FT } from "../../../lbm/token/v1/token";

export const protobufPackage = "lbm.token.v1";

/** GenesisState defines the token module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  /** class_state is the class keeper's genesis state. */
  classState?: ClassGenesisState;
  /** balances is an array containing the balances of all the accounts. */
  balances: Balance[];
  /** classes defines the metadata of the differents tokens. */
  classes: Token[];
  /** grants defines the grant information. */
  grants: Grant[];
  /** approves defines the approve information. */
  approves: Approve[];
  /** supplies represents the total supplies of tokens. */
  supplies: FT[];
  /** mints represents the total mints of tokens. */
  mints: FT[];
  /** burns represents the total burns of tokens. */
  burns: FT[];
}

/** ClassGenesisState defines the classs keeper's genesis state. */
export interface ClassGenesisState {
  /** nonce is the next class nonce to issue. */
  nonce: string;
  /** ids represents the issued ids. */
  ids: string[];
}

/**
 * Balance defines an account address and balance pair used in the token module's
 * genesis state.
 */
export interface Balance {
  address: string;
  tokens: FT[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    classState: undefined,
    balances: [],
    classes: [],
    grants: [],
    approves: [],
    supplies: [],
    mints: [],
    burns: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.classState !== undefined) {
      ClassGenesisState.encode(
        message.classState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.classes) {
      Token.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.approves) {
      Approve.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.supplies) {
      FT.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.mints) {
      FT.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.burns) {
      FT.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.classState = ClassGenesisState.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        case 4:
          message.classes.push(Token.decode(reader, reader.uint32()));
          break;
        case 5:
          message.grants.push(Grant.decode(reader, reader.uint32()));
          break;
        case 6:
          message.approves.push(Approve.decode(reader, reader.uint32()));
          break;
        case 7:
          message.supplies.push(FT.decode(reader, reader.uint32()));
          break;
        case 8:
          message.mints.push(FT.decode(reader, reader.uint32()));
          break;
        case 9:
          message.burns.push(FT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      classState: isSet(object.classState)
        ? ClassGenesisState.fromJSON(object.classState)
        : undefined,
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Balance.fromJSON(e))
        : [],
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => Token.fromJSON(e))
        : [],
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromJSON(e))
        : [],
      approves: Array.isArray(object?.approves)
        ? object.approves.map((e: any) => Approve.fromJSON(e))
        : [],
      supplies: Array.isArray(object?.supplies)
        ? object.supplies.map((e: any) => FT.fromJSON(e))
        : [],
      mints: Array.isArray(object?.mints)
        ? object.mints.map((e: any) => FT.fromJSON(e))
        : [],
      burns: Array.isArray(object?.burns)
        ? object.burns.map((e: any) => FT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.classState !== undefined &&
      (obj.classState = message.classState
        ? ClassGenesisState.toJSON(message.classState)
        : undefined);
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Balance.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    if (message.classes) {
      obj.classes = message.classes.map((e) =>
        e ? Token.toJSON(e) : undefined
      );
    } else {
      obj.classes = [];
    }
    if (message.grants) {
      obj.grants = message.grants.map((e) => (e ? Grant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    if (message.approves) {
      obj.approves = message.approves.map((e) =>
        e ? Approve.toJSON(e) : undefined
      );
    } else {
      obj.approves = [];
    }
    if (message.supplies) {
      obj.supplies = message.supplies.map((e) =>
        e ? FT.toJSON(e) : undefined
      );
    } else {
      obj.supplies = [];
    }
    if (message.mints) {
      obj.mints = message.mints.map((e) => (e ? FT.toJSON(e) : undefined));
    } else {
      obj.mints = [];
    }
    if (message.burns) {
      obj.burns = message.burns.map((e) => (e ? FT.toJSON(e) : undefined));
    } else {
      obj.burns = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.classState =
      object.classState !== undefined && object.classState !== null
        ? ClassGenesisState.fromPartial(object.classState)
        : undefined;
    message.balances =
      object.balances?.map((e) => Balance.fromPartial(e)) || [];
    message.classes = object.classes?.map((e) => Token.fromPartial(e)) || [];
    message.grants = object.grants?.map((e) => Grant.fromPartial(e)) || [];
    message.approves =
      object.approves?.map((e) => Approve.fromPartial(e)) || [];
    message.supplies = object.supplies?.map((e) => FT.fromPartial(e)) || [];
    message.mints = object.mints?.map((e) => FT.fromPartial(e)) || [];
    message.burns = object.burns?.map((e) => FT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClassGenesisState(): ClassGenesisState {
  return { nonce: "", ids: [] };
}

export const ClassGenesisState = {
  encode(
    message: ClassGenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.string();
          break;
        case 2:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassGenesisState {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ClassGenesisState): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClassGenesisState>, I>>(
    object: I
  ): ClassGenesisState {
    const message = createBaseClassGenesisState();
    message.nonce = object.nonce ?? "";
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseBalance(): Balance {
  return { address: "", tokens: [] };
}

export const Balance = {
  encode(
    message: Balance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.tokens) {
      FT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tokens.push(FT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Balance {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => FT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? FT.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Balance>, I>>(object: I): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.tokens = object.tokens?.map((e) => FT.fromPartial(e)) || [];
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
