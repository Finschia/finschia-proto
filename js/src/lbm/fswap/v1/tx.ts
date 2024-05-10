/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Swap } from "./fswap";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fswap.v1";

export interface MsgSwap {
  /** holder's address */
  fromAddress: string;
  /** from-coin amount */
  fromCoinAmount?: Coin;
  toDenom: string;
}

export interface MsgSwapResponse {}

export interface MsgSwapAll {
  /** holder's address */
  fromAddress: string;
  fromDenom: string;
  toDenom: string;
}

export interface MsgSwapAllResponse {}

export interface MsgSetSwap {
  /** authority is the address of the privileged account. */
  authority: string;
  swap?: Swap;
  toDenomMetadata?: Metadata;
}

export interface MsgSetSwapResponse {}

function createBaseMsgSwap(): MsgSwap {
  return { fromAddress: "", fromCoinAmount: undefined, toDenom: "" };
}

export const MsgSwap = {
  encode(
    message: MsgSwap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.fromCoinAmount !== undefined) {
      Coin.encode(message.fromCoinAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.toDenom !== "") {
      writer.uint32(26).string(message.toDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.fromCoinAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.toDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwap {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      fromCoinAmount: isSet(object.fromCoinAmount)
        ? Coin.fromJSON(object.fromCoinAmount)
        : undefined,
      toDenom: isSet(object.toDenom) ? String(object.toDenom) : "",
    };
  },

  toJSON(message: MsgSwap): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.fromCoinAmount !== undefined &&
      (obj.fromCoinAmount = message.fromCoinAmount
        ? Coin.toJSON(message.fromCoinAmount)
        : undefined);
    message.toDenom !== undefined && (obj.toDenom = message.toDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwap>, I>>(object: I): MsgSwap {
    const message = createBaseMsgSwap();
    message.fromAddress = object.fromAddress ?? "";
    message.fromCoinAmount =
      object.fromCoinAmount !== undefined && object.fromCoinAmount !== null
        ? Coin.fromPartial(object.fromCoinAmount)
        : undefined;
    message.toDenom = object.toDenom ?? "";
    return message;
  },
};

function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}

export const MsgSwapResponse = {
  encode(
    _: MsgSwapResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();
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

  fromJSON(_: any): MsgSwapResponse {
    return {};
  },

  toJSON(_: MsgSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapResponse>, I>>(
    _: I
  ): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  },
};

function createBaseMsgSwapAll(): MsgSwapAll {
  return { fromAddress: "", fromDenom: "", toDenom: "" };
}

export const MsgSwapAll = {
  encode(
    message: MsgSwapAll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.fromDenom !== "") {
      writer.uint32(18).string(message.fromDenom);
    }
    if (message.toDenom !== "") {
      writer.uint32(26).string(message.toDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapAll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.fromDenom = reader.string();
          break;
        case 3:
          message.toDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapAll {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      fromDenom: isSet(object.fromDenom) ? String(object.fromDenom) : "",
      toDenom: isSet(object.toDenom) ? String(object.toDenom) : "",
    };
  },

  toJSON(message: MsgSwapAll): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.fromDenom !== undefined && (obj.fromDenom = message.fromDenom);
    message.toDenom !== undefined && (obj.toDenom = message.toDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapAll>, I>>(
    object: I
  ): MsgSwapAll {
    const message = createBaseMsgSwapAll();
    message.fromAddress = object.fromAddress ?? "";
    message.fromDenom = object.fromDenom ?? "";
    message.toDenom = object.toDenom ?? "";
    return message;
  },
};

function createBaseMsgSwapAllResponse(): MsgSwapAllResponse {
  return {};
}

export const MsgSwapAllResponse = {
  encode(
    _: MsgSwapAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapAllResponse();
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

  fromJSON(_: any): MsgSwapAllResponse {
    return {};
  },

  toJSON(_: MsgSwapAllResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapAllResponse>, I>>(
    _: I
  ): MsgSwapAllResponse {
    const message = createBaseMsgSwapAllResponse();
    return message;
  },
};

function createBaseMsgSetSwap(): MsgSetSwap {
  return { authority: "", swap: undefined, toDenomMetadata: undefined };
}

export const MsgSetSwap = {
  encode(
    message: MsgSetSwap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(18).fork()).ldelim();
    }
    if (message.toDenomMetadata !== undefined) {
      Metadata.encode(
        message.toDenomMetadata,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.swap = Swap.decode(reader, reader.uint32());
          break;
        case 3:
          message.toDenomMetadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetSwap {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
      toDenomMetadata: isSet(object.toDenomMetadata)
        ? Metadata.fromJSON(object.toDenomMetadata)
        : undefined,
    };
  },

  toJSON(message: MsgSetSwap): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.swap !== undefined &&
      (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    message.toDenomMetadata !== undefined &&
      (obj.toDenomMetadata = message.toDenomMetadata
        ? Metadata.toJSON(message.toDenomMetadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetSwap>, I>>(
    object: I
  ): MsgSetSwap {
    const message = createBaseMsgSetSwap();
    message.authority = object.authority ?? "";
    message.swap =
      object.swap !== undefined && object.swap !== null
        ? Swap.fromPartial(object.swap)
        : undefined;
    message.toDenomMetadata =
      object.toDenomMetadata !== undefined && object.toDenomMetadata !== null
        ? Metadata.fromPartial(object.toDenomMetadata)
        : undefined;
    return message;
  },
};

function createBaseMsgSetSwapResponse(): MsgSetSwapResponse {
  return {};
}

export const MsgSetSwapResponse = {
  encode(
    _: MsgSetSwapResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSwapResponse();
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

  fromJSON(_: any): MsgSetSwapResponse {
    return {};
  },

  toJSON(_: MsgSetSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetSwapResponse>, I>>(
    _: I
  ): MsgSetSwapResponse {
    const message = createBaseMsgSetSwapResponse();
    return message;
  },
};

export interface Msg {
  Swap(request: MsgSwap): Promise<MsgSwapResponse>;
  SwapAll(request: MsgSwapAll): Promise<MsgSwapAllResponse>;
  SetSwap(request: MsgSetSwap): Promise<MsgSetSwapResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Swap = this.Swap.bind(this);
    this.SwapAll = this.SwapAll.bind(this);
    this.SetSwap = this.SetSwap.bind(this);
  }
  Swap(request: MsgSwap): Promise<MsgSwapResponse> {
    const data = MsgSwap.encode(request).finish();
    const promise = this.rpc.request("lbm.fswap.v1.Msg", "Swap", data);
    return promise.then((data) => MsgSwapResponse.decode(new _m0.Reader(data)));
  }

  SwapAll(request: MsgSwapAll): Promise<MsgSwapAllResponse> {
    const data = MsgSwapAll.encode(request).finish();
    const promise = this.rpc.request("lbm.fswap.v1.Msg", "SwapAll", data);
    return promise.then((data) =>
      MsgSwapAllResponse.decode(new _m0.Reader(data))
    );
  }

  SetSwap(request: MsgSetSwap): Promise<MsgSetSwapResponse> {
    const data = MsgSetSwap.encode(request).finish();
    const promise = this.rpc.request("lbm.fswap.v1.Msg", "SetSwap", data);
    return promise.then((data) =>
      MsgSetSwapResponse.decode(new _m0.Reader(data))
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
