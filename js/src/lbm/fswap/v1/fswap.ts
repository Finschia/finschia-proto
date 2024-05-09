/* eslint-disable */
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fswap.v1";

export interface Swap {
  fromDenom: string;
  toDenom: string;
  amountCapForToDenom: string;
  swapRate: string;
}

export interface SwapStats {
  swapCount: number;
}

/** From cosmos-sdk 0.46.0 they deprecated this way, but currently finschia-sdk based on 0.45.10 */
export interface MakeSwapProposal {
  title: string;
  description: string;
  swap?: Swap;
  toDenomMetadata?: Metadata;
}

export interface Swapped {
  fromCoinAmount?: Coin;
  toCoinAmount?: Coin;
}

function createBaseSwap(): Swap {
  return { fromDenom: "", toDenom: "", amountCapForToDenom: "", swapRate: "" };
}

export const Swap = {
  encode(message: Swap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromDenom !== "") {
      writer.uint32(10).string(message.fromDenom);
    }
    if (message.toDenom !== "") {
      writer.uint32(18).string(message.toDenom);
    }
    if (message.amountCapForToDenom !== "") {
      writer.uint32(26).string(message.amountCapForToDenom);
    }
    if (message.swapRate !== "") {
      writer.uint32(34).string(message.swapRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Swap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromDenom = reader.string();
          break;
        case 2:
          message.toDenom = reader.string();
          break;
        case 3:
          message.amountCapForToDenom = reader.string();
          break;
        case 4:
          message.swapRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Swap {
    return {
      fromDenom: isSet(object.fromDenom) ? String(object.fromDenom) : "",
      toDenom: isSet(object.toDenom) ? String(object.toDenom) : "",
      amountCapForToDenom: isSet(object.amountCapForToDenom)
        ? String(object.amountCapForToDenom)
        : "",
      swapRate: isSet(object.swapRate) ? String(object.swapRate) : "",
    };
  },

  toJSON(message: Swap): unknown {
    const obj: any = {};
    message.fromDenom !== undefined && (obj.fromDenom = message.fromDenom);
    message.toDenom !== undefined && (obj.toDenom = message.toDenom);
    message.amountCapForToDenom !== undefined &&
      (obj.amountCapForToDenom = message.amountCapForToDenom);
    message.swapRate !== undefined && (obj.swapRate = message.swapRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Swap>, I>>(object: I): Swap {
    const message = createBaseSwap();
    message.fromDenom = object.fromDenom ?? "";
    message.toDenom = object.toDenom ?? "";
    message.amountCapForToDenom = object.amountCapForToDenom ?? "";
    message.swapRate = object.swapRate ?? "";
    return message;
  },
};

function createBaseSwapStats(): SwapStats {
  return { swapCount: 0 };
}

export const SwapStats = {
  encode(
    message: SwapStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.swapCount !== 0) {
      writer.uint32(8).int32(message.swapCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapStats {
    return {
      swapCount: isSet(object.swapCount) ? Number(object.swapCount) : 0,
    };
  },

  toJSON(message: SwapStats): unknown {
    const obj: any = {};
    message.swapCount !== undefined &&
      (obj.swapCount = Math.round(message.swapCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapStats>, I>>(
    object: I
  ): SwapStats {
    const message = createBaseSwapStats();
    message.swapCount = object.swapCount ?? 0;
    return message;
  },
};

function createBaseMakeSwapProposal(): MakeSwapProposal {
  return {
    title: "",
    description: "",
    swap: undefined,
    toDenomMetadata: undefined,
  };
}

export const MakeSwapProposal = {
  encode(
    message: MakeSwapProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(26).fork()).ldelim();
    }
    if (message.toDenomMetadata !== undefined) {
      Metadata.encode(
        message.toDenomMetadata,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MakeSwapProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMakeSwapProposal();
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
          message.swap = Swap.decode(reader, reader.uint32());
          break;
        case 4:
          message.toDenomMetadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MakeSwapProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
      toDenomMetadata: isSet(object.toDenomMetadata)
        ? Metadata.fromJSON(object.toDenomMetadata)
        : undefined,
    };
  },

  toJSON(message: MakeSwapProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.swap !== undefined &&
      (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    message.toDenomMetadata !== undefined &&
      (obj.toDenomMetadata = message.toDenomMetadata
        ? Metadata.toJSON(message.toDenomMetadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MakeSwapProposal>, I>>(
    object: I
  ): MakeSwapProposal {
    const message = createBaseMakeSwapProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
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

function createBaseSwapped(): Swapped {
  return { fromCoinAmount: undefined, toCoinAmount: undefined };
}

export const Swapped = {
  encode(
    message: Swapped,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromCoinAmount !== undefined) {
      Coin.encode(message.fromCoinAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.toCoinAmount !== undefined) {
      Coin.encode(message.toCoinAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Swapped {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromCoinAmount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.toCoinAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Swapped {
    return {
      fromCoinAmount: isSet(object.fromCoinAmount)
        ? Coin.fromJSON(object.fromCoinAmount)
        : undefined,
      toCoinAmount: isSet(object.toCoinAmount)
        ? Coin.fromJSON(object.toCoinAmount)
        : undefined,
    };
  },

  toJSON(message: Swapped): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<Swapped>, I>>(object: I): Swapped {
    const message = createBaseSwapped();
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
