/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, ValidatorAuth } from "../../../lbm/consortium/v1/consortium";
import {
  PageRequest,
  PageResponse,
} from "../../../lbm/base/query/v1/pagination";

export const protobufPackage = "lbm.consortium.v1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}

/**
 * QueryValidatorAuthsRequest is the request type for the
 * Query/ValidatorAuths RPC method.
 */
export interface QueryValidatorAuthsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorAuthsResponse is the response type for the
 * Query/ValidatorAuths RPC method.
 */
export interface QueryValidatorAuthsResponse {
  auths: ValidatorAuth[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryValidatorAuthRequest is the request type for the
 * Query/ValidatorAuth RPC method.
 */
export interface QueryValidatorAuthRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorAuthResponse is the request type for the
 * Query/ValidatorAuth RPC method.
 */
export interface QueryValidatorAuthResponse {
  auth?: ValidatorAuth;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryValidatorAuthsRequest(): QueryValidatorAuthsRequest {
  return { pagination: undefined };
}

export const QueryValidatorAuthsRequest = {
  encode(
    message: QueryValidatorAuthsRequest,
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
  ): QueryValidatorAuthsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAuthsRequest();
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

  fromJSON(object: any): QueryValidatorAuthsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryValidatorAuthsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorAuthsRequest>, I>>(
    object: I
  ): QueryValidatorAuthsRequest {
    const message = createBaseQueryValidatorAuthsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryValidatorAuthsResponse(): QueryValidatorAuthsResponse {
  return { auths: [], pagination: undefined };
}

export const QueryValidatorAuthsResponse = {
  encode(
    message: QueryValidatorAuthsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.auths) {
      ValidatorAuth.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryValidatorAuthsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAuthsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auths.push(ValidatorAuth.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorAuthsResponse {
    return {
      auths: Array.isArray(object?.auths)
        ? object.auths.map((e: any) => ValidatorAuth.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryValidatorAuthsResponse): unknown {
    const obj: any = {};
    if (message.auths) {
      obj.auths = message.auths.map((e) =>
        e ? ValidatorAuth.toJSON(e) : undefined
      );
    } else {
      obj.auths = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorAuthsResponse>, I>>(
    object: I
  ): QueryValidatorAuthsResponse {
    const message = createBaseQueryValidatorAuthsResponse();
    message.auths =
      object.auths?.map((e) => ValidatorAuth.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryValidatorAuthRequest(): QueryValidatorAuthRequest {
  return { validatorAddress: "" };
}

export const QueryValidatorAuthRequest = {
  encode(
    message: QueryValidatorAuthRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorAuthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAuthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorAuthRequest {
    return {
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
    };
  },

  toJSON(message: QueryValidatorAuthRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorAuthRequest>, I>>(
    object: I
  ): QueryValidatorAuthRequest {
    const message = createBaseQueryValidatorAuthRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorAuthResponse(): QueryValidatorAuthResponse {
  return { auth: undefined };
}

export const QueryValidatorAuthResponse = {
  encode(
    message: QueryValidatorAuthResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auth !== undefined) {
      ValidatorAuth.encode(message.auth, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidatorAuthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auth = ValidatorAuth.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorAuthResponse {
    return {
      auth: isSet(object.auth)
        ? ValidatorAuth.fromJSON(object.auth)
        : undefined,
    };
  },

  toJSON(message: QueryValidatorAuthResponse): unknown {
    const obj: any = {};
    message.auth !== undefined &&
      (obj.auth = message.auth
        ? ValidatorAuth.toJSON(message.auth)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorAuthResponse>, I>>(
    object: I
  ): QueryValidatorAuthResponse {
    const message = createBaseQueryValidatorAuthResponse();
    message.auth =
      object.auth !== undefined && object.auth !== null
        ? ValidatorAuth.fromPartial(object.auth)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service for consortium module. */
export interface Query {
  /** Params queries the module params. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ValidatorAuths queries authorization infos of validators. */
  ValidatorAuths(
    request: QueryValidatorAuthsRequest
  ): Promise<QueryValidatorAuthsResponse>;
  /** ValidatorAuth queries authorization info of a validator. */
  ValidatorAuth(
    request: QueryValidatorAuthRequest
  ): Promise<QueryValidatorAuthResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ValidatorAuths = this.ValidatorAuths.bind(this);
    this.ValidatorAuth = this.ValidatorAuth.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.consortium.v1.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  ValidatorAuths(
    request: QueryValidatorAuthsRequest
  ): Promise<QueryValidatorAuthsResponse> {
    const data = QueryValidatorAuthsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.consortium.v1.Query",
      "ValidatorAuths",
      data
    );
    return promise.then((data) =>
      QueryValidatorAuthsResponse.decode(new _m0.Reader(data))
    );
  }

  ValidatorAuth(
    request: QueryValidatorAuthRequest
  ): Promise<QueryValidatorAuthResponse> {
    const data = QueryValidatorAuthRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.consortium.v1.Query",
      "ValidatorAuth",
      data
    );
    return promise.then((data) =>
      QueryValidatorAuthResponse.decode(new _m0.Reader(data))
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
