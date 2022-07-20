/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.auth.v1beta1";

/** MsgEmpty represents a message that doesn't do anything. Used to measure performance. */
export interface MsgEmpty {
  fromAddress: string;
}

/** MsgEmptyResponse defines the Msg/Empty response type. */
export interface MsgEmptyResponse {}

function createBaseMsgEmpty(): MsgEmpty {
  return { fromAddress: "" };
}

export const MsgEmpty = {
  encode(
    message: MsgEmpty,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEmpty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEmpty {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
    };
  },

  toJSON(message: MsgEmpty): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEmpty>, I>>(object: I): MsgEmpty {
    const message = createBaseMsgEmpty();
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
};

function createBaseMsgEmptyResponse(): MsgEmptyResponse {
  return {};
}

export const MsgEmptyResponse = {
  encode(
    _: MsgEmptyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEmptyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEmptyResponse();
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

  fromJSON(_: any): MsgEmptyResponse {
    return {};
  },

  toJSON(_: MsgEmptyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEmptyResponse>, I>>(
    _: I
  ): MsgEmptyResponse {
    const message = createBaseMsgEmptyResponse();
    return message;
  },
};

/** Msg defines the auth Msg service. */
export interface Msg {
  /** Empty defines a method that doesn't do anything. Used to measure performance. */
  Empty(request: MsgEmpty): Promise<MsgEmptyResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Empty = this.Empty.bind(this);
  }
  Empty(request: MsgEmpty): Promise<MsgEmptyResponse> {
    const data = MsgEmpty.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Msg", "Empty", data);
    return promise.then((data) =>
      MsgEmptyResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
