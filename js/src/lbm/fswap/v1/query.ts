/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Swap } from "./fswap";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fswap.v1";

export interface QuerySwappedRequest {
  fromDenom: string;
  toDenom: string;
}

export interface QuerySwappedResponse {
  fromCoinAmount?: Coin;
  toCoinAmount?: Coin;
}

export interface QueryTotalSwappableToCoinAmountRequest {
  fromDenom: string;
  toDenom: string;
}

export interface QueryTotalSwappableToCoinAmountResponse {
  swappableAmount?: Coin;
}

export interface QuerySwapRequest {
  fromDenom: string;
  toDenom: string;
}

export interface QuerySwapResponse {
  swap?: Swap;
}

export interface QuerySwapsRequest {
  pagination?: PageRequest;
}

export interface QuerySwapsResponse {
  swaps: Swap[];
  pagination?: PageResponse;
}

function createBaseQuerySwappedRequest(): QuerySwappedRequest {
  return { fromDenom: "", toDenom: "" };
}

export const QuerySwappedRequest = {
  encode(
    message: QuerySwappedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromDenom !== "") {
      writer.uint32(10).string(message.fromDenom);
    }
    if (message.toDenom !== "") {
      writer.uint32(18).string(message.toDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwappedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwappedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromDenom = reader.string();
          break;
        case 2:
          message.toDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwappedRequest {
    return {
      fromDenom: isSet(object.fromDenom) ? String(object.fromDenom) : "",
      toDenom: isSet(object.toDenom) ? String(object.toDenom) : "",
    };
  },

  toJSON(message: QuerySwappedRequest): unknown {
    const obj: any = {};
    message.fromDenom !== undefined && (obj.fromDenom = message.fromDenom);
    message.toDenom !== undefined && (obj.toDenom = message.toDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwappedRequest>, I>>(
    object: I
  ): QuerySwappedRequest {
    const message = createBaseQuerySwappedRequest();
    message.fromDenom = object.fromDenom ?? "";
    message.toDenom = object.toDenom ?? "";
    return message;
  },
};

function createBaseQuerySwappedResponse(): QuerySwappedResponse {
  return { fromCoinAmount: undefined, toCoinAmount: undefined };
}

export const QuerySwappedResponse = {
  encode(
    message: QuerySwappedResponse,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySwappedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwappedResponse();
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

  fromJSON(object: any): QuerySwappedResponse {
    return {
      fromCoinAmount: isSet(object.fromCoinAmount)
        ? Coin.fromJSON(object.fromCoinAmount)
        : undefined,
      toCoinAmount: isSet(object.toCoinAmount)
        ? Coin.fromJSON(object.toCoinAmount)
        : undefined,
    };
  },

  toJSON(message: QuerySwappedResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QuerySwappedResponse>, I>>(
    object: I
  ): QuerySwappedResponse {
    const message = createBaseQuerySwappedResponse();
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

function createBaseQueryTotalSwappableToCoinAmountRequest(): QueryTotalSwappableToCoinAmountRequest {
  return { fromDenom: "", toDenom: "" };
}

export const QueryTotalSwappableToCoinAmountRequest = {
  encode(
    message: QueryTotalSwappableToCoinAmountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromDenom !== "") {
      writer.uint32(10).string(message.fromDenom);
    }
    if (message.toDenom !== "") {
      writer.uint32(18).string(message.toDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalSwappableToCoinAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSwappableToCoinAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromDenom = reader.string();
          break;
        case 2:
          message.toDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSwappableToCoinAmountRequest {
    return {
      fromDenom: isSet(object.fromDenom) ? String(object.fromDenom) : "",
      toDenom: isSet(object.toDenom) ? String(object.toDenom) : "",
    };
  },

  toJSON(message: QueryTotalSwappableToCoinAmountRequest): unknown {
    const obj: any = {};
    message.fromDenom !== undefined && (obj.fromDenom = message.fromDenom);
    message.toDenom !== undefined && (obj.toDenom = message.toDenom);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTotalSwappableToCoinAmountRequest>, I>
  >(object: I): QueryTotalSwappableToCoinAmountRequest {
    const message = createBaseQueryTotalSwappableToCoinAmountRequest();
    message.fromDenom = object.fromDenom ?? "";
    message.toDenom = object.toDenom ?? "";
    return message;
  },
};

function createBaseQueryTotalSwappableToCoinAmountResponse(): QueryTotalSwappableToCoinAmountResponse {
  return { swappableAmount: undefined };
}

export const QueryTotalSwappableToCoinAmountResponse = {
  encode(
    message: QueryTotalSwappableToCoinAmountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.swappableAmount !== undefined) {
      Coin.encode(message.swappableAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalSwappableToCoinAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSwappableToCoinAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swappableAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSwappableToCoinAmountResponse {
    return {
      swappableAmount: isSet(object.swappableAmount)
        ? Coin.fromJSON(object.swappableAmount)
        : undefined,
    };
  },

  toJSON(message: QueryTotalSwappableToCoinAmountResponse): unknown {
    const obj: any = {};
    message.swappableAmount !== undefined &&
      (obj.swappableAmount = message.swappableAmount
        ? Coin.toJSON(message.swappableAmount)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTotalSwappableToCoinAmountResponse>, I>
  >(object: I): QueryTotalSwappableToCoinAmountResponse {
    const message = createBaseQueryTotalSwappableToCoinAmountResponse();
    message.swappableAmount =
      object.swappableAmount !== undefined && object.swappableAmount !== null
        ? Coin.fromPartial(object.swappableAmount)
        : undefined;
    return message;
  },
};

function createBaseQuerySwapRequest(): QuerySwapRequest {
  return { fromDenom: "", toDenom: "" };
}

export const QuerySwapRequest = {
  encode(
    message: QuerySwapRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromDenom !== "") {
      writer.uint32(10).string(message.fromDenom);
    }
    if (message.toDenom !== "") {
      writer.uint32(18).string(message.toDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromDenom = reader.string();
          break;
        case 2:
          message.toDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapRequest {
    return {
      fromDenom: isSet(object.fromDenom) ? String(object.fromDenom) : "",
      toDenom: isSet(object.toDenom) ? String(object.toDenom) : "",
    };
  },

  toJSON(message: QuerySwapRequest): unknown {
    const obj: any = {};
    message.fromDenom !== undefined && (obj.fromDenom = message.fromDenom);
    message.toDenom !== undefined && (obj.toDenom = message.toDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapRequest>, I>>(
    object: I
  ): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    message.fromDenom = object.fromDenom ?? "";
    message.toDenom = object.toDenom ?? "";
    return message;
  },
};

function createBaseQuerySwapResponse(): QuerySwapResponse {
  return { swap: undefined };
}

export const QuerySwapResponse = {
  encode(
    message: QuerySwapResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapResponse();
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

  fromJSON(object: any): QuerySwapResponse {
    return {
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
    };
  },

  toJSON(message: QuerySwapResponse): unknown {
    const obj: any = {};
    message.swap !== undefined &&
      (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapResponse>, I>>(
    object: I
  ): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    message.swap =
      object.swap !== undefined && object.swap !== null
        ? Swap.fromPartial(object.swap)
        : undefined;
    return message;
  },
};

function createBaseQuerySwapsRequest(): QuerySwapsRequest {
  return { pagination: undefined };
}

export const QuerySwapsRequest = {
  encode(
    message: QuerySwapsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySwapsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapsRequest>, I>>(
    object: I
  ): QuerySwapsRequest {
    const message = createBaseQuerySwapsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQuerySwapsResponse(): QuerySwapsResponse {
  return { swaps: [], pagination: undefined };
}

export const QuerySwapsResponse = {
  encode(
    message: QuerySwapsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.swaps) {
      Swap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swaps.push(Swap.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapsResponse {
    return {
      swaps: Array.isArray(object?.swaps)
        ? object.swaps.map((e: any) => Swap.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySwapsResponse): unknown {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map((e) => (e ? Swap.toJSON(e) : undefined));
    } else {
      obj.swaps = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapsResponse>, I>>(
    object: I
  ): QuerySwapsResponse {
    const message = createBaseQuerySwapsResponse();
    message.swaps = object.swaps?.map((e) => Swap.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

export interface Query {
  /**
   * Swapped queries the current swapped status that includes a burnt amount of from-coin and a minted amount of
   * to-coin.
   */
  Swapped(request: QuerySwappedRequest): Promise<QuerySwappedResponse>;
  /** TotalSwappableToCoinAmount queries the current swappable amount for to-coin. */
  TotalSwappableToCoinAmount(
    request: QueryTotalSwappableToCoinAmountRequest
  ): Promise<QueryTotalSwappableToCoinAmountResponse>;
  /** Swap queries a swap */
  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
  /** Swaps queries all the swap that registered */
  Swaps(request: QuerySwapsRequest): Promise<QuerySwapsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Swapped = this.Swapped.bind(this);
    this.TotalSwappableToCoinAmount =
      this.TotalSwappableToCoinAmount.bind(this);
    this.Swap = this.Swap.bind(this);
    this.Swaps = this.Swaps.bind(this);
  }
  Swapped(request: QuerySwappedRequest): Promise<QuerySwappedResponse> {
    const data = QuerySwappedRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fswap.v1.Query", "Swapped", data);
    return promise.then((data) =>
      QuerySwappedResponse.decode(new _m0.Reader(data))
    );
  }

  TotalSwappableToCoinAmount(
    request: QueryTotalSwappableToCoinAmountRequest
  ): Promise<QueryTotalSwappableToCoinAmountResponse> {
    const data =
      QueryTotalSwappableToCoinAmountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fswap.v1.Query",
      "TotalSwappableToCoinAmount",
      data
    );
    return promise.then((data) =>
      QueryTotalSwappableToCoinAmountResponse.decode(new _m0.Reader(data))
    );
  }

  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
    const data = QuerySwapRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fswap.v1.Query", "Swap", data);
    return promise.then((data) =>
      QuerySwapResponse.decode(new _m0.Reader(data))
    );
  }

  Swaps(request: QuerySwapsRequest): Promise<QuerySwapsResponse> {
    const data = QuerySwapsRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fswap.v1.Query", "Swaps", data);
    return promise.then((data) =>
      QuerySwapsResponse.decode(new _m0.Reader(data))
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
