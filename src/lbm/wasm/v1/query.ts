/* eslint-disable */
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.wasm.v1";

/** QueryInactiveContractsRequest is the request type for Query/InactiveContract RPC method. */
export interface QueryInactiveContractsRequest {
  /** pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}

/** QueryInactiveContractsResponse is the response type for the Query/InactiveContract RPC method. */
export interface QueryInactiveContractsResponse {
  /** addresses is the inactive address list */
  addresses: string[];
  /** pagination defines the pagination in the response */
  pagination?: PageResponse;
}

/** QueryIsInactiveContractRequest is the request type for Query/IsInactiveContract RPC method. */
export interface QueryInactiveContractRequest {
  /** address is the address of the contract */
  address: string;
}

/** QueryInactiveContractsResponse is the response type for the Query/IsInactiveContract RPC method. */
export interface QueryInactiveContractResponse {
  /** inactivated is the result if the contract is inactive contract or not */
  inactivated: boolean;
}

function createBaseQueryInactiveContractsRequest(): QueryInactiveContractsRequest {
  return { pagination: undefined };
}

export const QueryInactiveContractsRequest = {
  encode(
    message: QueryInactiveContractsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInactiveContractsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInactiveContractsRequest();
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

  fromJSON(object: any): QueryInactiveContractsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryInactiveContractsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInactiveContractsRequest>, I>>(
    object: I
  ): QueryInactiveContractsRequest {
    const message = createBaseQueryInactiveContractsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryInactiveContractsResponse(): QueryInactiveContractsResponse {
  return { addresses: [], pagination: undefined };
}

export const QueryInactiveContractsResponse = {
  encode(
    message: QueryInactiveContractsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInactiveContractsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInactiveContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
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

  fromJSON(object: any): QueryInactiveContractsResponse {
    return {
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryInactiveContractsResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInactiveContractsResponse>, I>>(
    object: I
  ): QueryInactiveContractsResponse {
    const message = createBaseQueryInactiveContractsResponse();
    message.addresses = object.addresses?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryInactiveContractRequest(): QueryInactiveContractRequest {
  return { address: "" };
}

export const QueryInactiveContractRequest = {
  encode(
    message: QueryInactiveContractRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInactiveContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInactiveContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInactiveContractRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryInactiveContractRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInactiveContractRequest>, I>>(
    object: I
  ): QueryInactiveContractRequest {
    const message = createBaseQueryInactiveContractRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryInactiveContractResponse(): QueryInactiveContractResponse {
  return { inactivated: false };
}

export const QueryInactiveContractResponse = {
  encode(
    message: QueryInactiveContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inactivated === true) {
      writer.uint32(8).bool(message.inactivated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInactiveContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInactiveContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactivated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInactiveContractResponse {
    return {
      inactivated: isSet(object.inactivated)
        ? Boolean(object.inactivated)
        : false,
    };
  },

  toJSON(message: QueryInactiveContractResponse): unknown {
    const obj: any = {};
    message.inactivated !== undefined &&
      (obj.inactivated = message.inactivated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInactiveContractResponse>, I>>(
    object: I
  ): QueryInactiveContractResponse {
    const message = createBaseQueryInactiveContractResponse();
    message.inactivated = object.inactivated ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** InactiveContracts queries all inactive contracts */
  InactiveContracts(
    request: QueryInactiveContractsRequest
  ): Promise<QueryInactiveContractsResponse>;
  /** InactiveContract check it the contract is inactive state or not */
  InactiveContract(
    request: QueryInactiveContractRequest
  ): Promise<QueryInactiveContractResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InactiveContracts = this.InactiveContracts.bind(this);
    this.InactiveContract = this.InactiveContract.bind(this);
  }
  InactiveContracts(
    request: QueryInactiveContractsRequest
  ): Promise<QueryInactiveContractsResponse> {
    const data = QueryInactiveContractsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.wasm.v1.Query",
      "InactiveContracts",
      data
    );
    return promise.then((data) =>
      QueryInactiveContractsResponse.decode(new _m0.Reader(data))
    );
  }

  InactiveContract(
    request: QueryInactiveContractRequest
  ): Promise<QueryInactiveContractResponse> {
    const data = QueryInactiveContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.wasm.v1.Query",
      "InactiveContract",
      data
    );
    return promise.then((data) =>
      QueryInactiveContractResponse.decode(new _m0.Reader(data))
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
