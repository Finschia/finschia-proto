/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, ValidatorAuth } from "../../../lbm/consortium/v1/consortium";

export const protobufPackage = "lbm.consortium.v1";

/** EventUpdateConsortiumParams is emitted after updating consortium parameters. */
export interface EventUpdateConsortiumParams {
  params?: Params;
}

/** EventUpdateValidatorAuths is emitted after updating validator auth info. */
export interface EventUpdateValidatorAuths {
  auths: ValidatorAuth[];
}

function createBaseEventUpdateConsortiumParams(): EventUpdateConsortiumParams {
  return { params: undefined };
}

export const EventUpdateConsortiumParams = {
  encode(
    message: EventUpdateConsortiumParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventUpdateConsortiumParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateConsortiumParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateConsortiumParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: EventUpdateConsortiumParams): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateConsortiumParams>, I>>(
    object: I
  ): EventUpdateConsortiumParams {
    const message = createBaseEventUpdateConsortiumParams();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseEventUpdateValidatorAuths(): EventUpdateValidatorAuths {
  return { auths: [] };
}

export const EventUpdateValidatorAuths = {
  encode(
    message: EventUpdateValidatorAuths,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.auths) {
      ValidatorAuth.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventUpdateValidatorAuths {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateValidatorAuths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auths.push(ValidatorAuth.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateValidatorAuths {
    return {
      auths: Array.isArray(object?.auths)
        ? object.auths.map((e: any) => ValidatorAuth.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventUpdateValidatorAuths): unknown {
    const obj: any = {};
    if (message.auths) {
      obj.auths = message.auths.map((e) =>
        e ? ValidatorAuth.toJSON(e) : undefined
      );
    } else {
      obj.auths = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateValidatorAuths>, I>>(
    object: I
  ): EventUpdateValidatorAuths {
    const message = createBaseEventUpdateValidatorAuths();
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
