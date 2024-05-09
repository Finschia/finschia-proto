/* eslint-disable */
import { SwapStats, Swap, Swapped } from "./fswap";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fswap.v1";

/** GenesisState defines the fswap module's genesis state. */
export interface GenesisState {
  swaps: Swap[];
  swapStats?: SwapStats;
  swappeds: Swapped[];
}

function createBaseGenesisState(): GenesisState {
  return { swaps: [], swapStats: undefined, swappeds: [] };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.swaps) {
      Swap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapStats !== undefined) {
      SwapStats.encode(message.swapStats, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.swappeds) {
      Swapped.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.swaps.push(Swap.decode(reader, reader.uint32()));
          break;
        case 2:
          message.swapStats = SwapStats.decode(reader, reader.uint32());
          break;
        case 3:
          message.swappeds.push(Swapped.decode(reader, reader.uint32()));
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
      swaps: Array.isArray(object?.swaps)
        ? object.swaps.map((e: any) => Swap.fromJSON(e))
        : [],
      swapStats: isSet(object.swapStats)
        ? SwapStats.fromJSON(object.swapStats)
        : undefined,
      swappeds: Array.isArray(object?.swappeds)
        ? object.swappeds.map((e: any) => Swapped.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map((e) => (e ? Swap.toJSON(e) : undefined));
    } else {
      obj.swaps = [];
    }
    message.swapStats !== undefined &&
      (obj.swapStats = message.swapStats
        ? SwapStats.toJSON(message.swapStats)
        : undefined);
    if (message.swappeds) {
      obj.swappeds = message.swappeds.map((e) =>
        e ? Swapped.toJSON(e) : undefined
      );
    } else {
      obj.swappeds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.swaps = object.swaps?.map((e) => Swap.fromPartial(e)) || [];
    message.swapStats =
      object.swapStats !== undefined && object.swapStats !== null
        ? SwapStats.fromPartial(object.swapStats)
        : undefined;
    message.swappeds =
      object.swappeds?.map((e) => Swapped.fromPartial(e)) || [];
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
