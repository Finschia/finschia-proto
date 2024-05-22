/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Swap } from "./fswap";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fswap.v1";

export interface EventSwapCoins {
  /** holder's address */
  address: string;
  /** from-coin amount */
  fromCoinAmount?: Coin;
  /** to-coin amount */
  toCoinAmount?: Coin;
}

export interface EventSetSwap {
  swap?: Swap;
}

export interface EventAddDenomMetadata {
  metadata?: Metadata;
}

function createBaseEventSwapCoins(): EventSwapCoins {
  return { address: "", fromCoinAmount: undefined, toCoinAmount: undefined };
}

export const EventSwapCoins = {
  encode(
    message: EventSwapCoins,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.fromCoinAmount !== undefined) {
      Coin.encode(message.fromCoinAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.toCoinAmount !== undefined) {
      Coin.encode(message.toCoinAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwapCoins {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwapCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.fromCoinAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.toCoinAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSwapCoins {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      fromCoinAmount: isSet(object.fromCoinAmount)
        ? Coin.fromJSON(object.fromCoinAmount)
        : undefined,
      toCoinAmount: isSet(object.toCoinAmount)
        ? Coin.fromJSON(object.toCoinAmount)
        : undefined,
    };
  },

  toJSON(message: EventSwapCoins): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.fromCoinAmount !== undefined &&
      (obj.fromCoinAmount = message.fromCoinAmount
        ? Coin.toJSON(message.fromCoinAmount)
        : undefined);
    message.toCoinAmount !== undefined &&
      (obj.toCoinAmount = message.toCoinAmount
        ? Coin.toJSON(message.toCoinAmount)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSwapCoins>, I>>(
    object: I
  ): EventSwapCoins {
    const message = createBaseEventSwapCoins();
    message.address = object.address ?? "";
    message.fromCoinAmount =
      object.fromCoinAmount !== undefined && object.fromCoinAmount !== null
        ? Coin.fromPartial(object.fromCoinAmount)
        : undefined;
    message.toCoinAmount =
      object.toCoinAmount !== undefined && object.toCoinAmount !== null
        ? Coin.fromPartial(object.toCoinAmount)
        : undefined;
    return message;
  },
};

function createBaseEventSetSwap(): EventSetSwap {
  return { swap: undefined };
}

export const EventSetSwap = {
  encode(
    message: EventSetSwap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = Swap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetSwap {
    return {
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
    };
  },

  toJSON(message: EventSetSwap): unknown {
    const obj: any = {};
    message.swap !== undefined &&
      (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetSwap>, I>>(
    object: I
  ): EventSetSwap {
    const message = createBaseEventSetSwap();
    message.swap =
      object.swap !== undefined && object.swap !== null
        ? Swap.fromPartial(object.swap)
        : undefined;
    return message;
  },
};

function createBaseEventAddDenomMetadata(): EventAddDenomMetadata {
  return { metadata: undefined };
}

export const EventAddDenomMetadata = {
  encode(
    message: EventAddDenomMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventAddDenomMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAddDenomMetadata {
    return {
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: EventAddDenomMetadata): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAddDenomMetadata>, I>>(
    object: I
  ): EventAddDenomMetadata {
    const message = createBaseEventAddDenomMetadata();
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromPartial(object.metadata)
        : undefined;
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
