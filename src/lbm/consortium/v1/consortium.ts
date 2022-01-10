/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.consortium.v1";

/** Params defines the parameters for the consortium module. */
export interface Params {
  enabled: boolean;
}

/** ValidatorAuth defines authorization info of a validator. */
export interface ValidatorAuth {
  operatorAddress: string;
  creationAllowed: boolean;
}

/** UpdateConsortiumParamsProposal details a proposal to update params of cosortium module. */
export interface UpdateConsortiumParamsProposal {
  title: string;
  description: string;
  params?: Params;
}

/** UpdateValidatorAuthsProposal details a proposal to update validator auths on consortium. */
export interface UpdateValidatorAuthsProposal {
  title: string;
  description: string;
  auths: ValidatorAuth[];
}

function createBaseParams(): Params {
  return { enabled: false };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
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
          message.enabled = reader.bool();
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
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseValidatorAuth(): ValidatorAuth {
  return { operatorAddress: "", creationAllowed: false };
}

export const ValidatorAuth = {
  encode(
    message: ValidatorAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.creationAllowed === true) {
      writer.uint32(16).bool(message.creationAllowed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.creationAllowed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorAuth {
    return {
      operatorAddress: isSet(object.operatorAddress)
        ? String(object.operatorAddress)
        : "",
      creationAllowed: isSet(object.creationAllowed)
        ? Boolean(object.creationAllowed)
        : false,
    };
  },

  toJSON(message: ValidatorAuth): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.creationAllowed !== undefined &&
      (obj.creationAllowed = message.creationAllowed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorAuth>, I>>(
    object: I
  ): ValidatorAuth {
    const message = createBaseValidatorAuth();
    message.operatorAddress = object.operatorAddress ?? "";
    message.creationAllowed = object.creationAllowed ?? false;
    return message;
  },
};

function createBaseUpdateConsortiumParamsProposal(): UpdateConsortiumParamsProposal {
  return { title: "", description: "", params: undefined };
}

export const UpdateConsortiumParamsProposal = {
  encode(
    message: UpdateConsortiumParamsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateConsortiumParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConsortiumParamsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateConsortiumParamsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: UpdateConsortiumParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateConsortiumParamsProposal>, I>>(
    object: I
  ): UpdateConsortiumParamsProposal {
    const message = createBaseUpdateConsortiumParamsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseUpdateValidatorAuthsProposal(): UpdateValidatorAuthsProposal {
  return { title: "", description: "", auths: [] };
}

export const UpdateValidatorAuthsProposal = {
  encode(
    message: UpdateValidatorAuthsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.auths) {
      ValidatorAuth.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateValidatorAuthsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateValidatorAuthsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.auths.push(ValidatorAuth.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateValidatorAuthsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      auths: Array.isArray(object?.auths)
        ? object.auths.map((e: any) => ValidatorAuth.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateValidatorAuthsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.auths) {
      obj.auths = message.auths.map((e) =>
        e ? ValidatorAuth.toJSON(e) : undefined
      );
    } else {
      obj.auths = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateValidatorAuthsProposal>, I>>(
    object: I
  ): UpdateValidatorAuthsProposal {
    const message = createBaseUpdateValidatorAuthsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.auths =
      object.auths?.map((e) => ValidatorAuth.fromPartial(e)) || [];
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
