/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Token, Approve, Grant } from "../../../lbm/token/v1/token";
import {
  PageRequest,
  PageResponse,
} from "../../../lbm/base/query/v1/pagination";

export const protobufPackage = "lbm.token.v1";

/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
  /** class id associated with the token. */
  classId: string;
  address: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
  amount: string;
}

/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
  /** class id associated with the token. */
  classId: string;
  type: string;
}

/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  amount: string;
}

/** QueryTokenRequest is the request type for the Query/Token RPC method */
export interface QueryTokenRequest {
  classId: string;
}

/** QueryTokenResponse is the response type for the Query/Token RPC method */
export interface QueryTokenResponse {
  token?: Token;
}

/** QueryTokensRequest is the request type for the Query/Tokens RPC method */
export interface QueryTokensRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryTokensResponse is the response type for the Query/Tokens RPC method */
export interface QueryTokensResponse {
  tokens: Token[];
  pagination?: PageResponse;
}

/** QueryGrantsRequest is the request type for the Query/Grants RPC method */
export interface QueryGrantsRequest {
  /** class id associated with the token. */
  classId: string;
  grantee: string;
}

/** QueryGrantsResponse is the response type for the Query/Grants RPC method */
export interface QueryGrantsResponse {
  grants: Grant[];
}

/** QueryApproveRequest is the request type for the Query/Approve RPC method */
export interface QueryApproveRequest {
  /** class id associated with the token. */
  classId: string;
  proxy: string;
  approver: string;
}

/** QueryApproveResponse is the response type for the Query/Approve RPC method */
export interface QueryApproveResponse {
  approve?: Approve;
}

/** QueryApprovesRequest is the request type for the Query/Approves RPC method */
export interface QueryApprovesRequest {
  /** class id associated with the token. */
  classId: string;
  proxy: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryApprovesResponse is the response type for the Query/Approves RPC method */
export interface QueryApprovesResponse {
  approves: Approve[];
  pagination?: PageResponse;
}

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return { classId: "", address: "" };
}

export const QueryBalanceRequest = {
  encode(
    message: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(
    object: I
  ): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return { amount: "" };
}

export const QueryBalanceResponse = {
  encode(
    message: QueryBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(
    object: I
  ): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return { classId: "", type: "" };
}

export const QuerySupplyRequest = {
  encode(
    message: QuerySupplyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(
    object: I
  ): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return { amount: "" };
}

export const QuerySupplyResponse = {
  encode(
    message: QuerySupplyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(
    object: I
  ): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseQueryTokenRequest(): QueryTokenRequest {
  return { classId: "" };
}

export const QueryTokenRequest = {
  encode(
    message: QueryTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
    };
  },

  toJSON(message: QueryTokenRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenRequest>, I>>(
    object: I
  ): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseQueryTokenResponse(): QueryTokenResponse {
  return { token: undefined };
}

export const QueryTokenResponse = {
  encode(
    message: QueryTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenResponse {
    return {
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined,
    };
  },

  toJSON(message: QueryTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenResponse>, I>>(
    object: I
  ): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromPartial(object.token)
        : undefined;
    return message;
  },
};

function createBaseQueryTokensRequest(): QueryTokensRequest {
  return { pagination: undefined };
}

export const QueryTokensRequest = {
  encode(
    message: QueryTokensRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensRequest();
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

  fromJSON(object: any): QueryTokensRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokensRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokensRequest>, I>>(
    object: I
  ): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokensResponse(): QueryTokensResponse {
  return { tokens: [], pagination: undefined };
}

export const QueryTokensResponse = {
  encode(
    message: QueryTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(Token.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTokensResponse {
    return {
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => Token.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokensResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? Token.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokensResponse>, I>>(
    object: I
  ): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGrantsRequest(): QueryGrantsRequest {
  return { classId: "", grantee: "" };
}

export const QueryGrantsRequest = {
  encode(
    message: QueryGrantsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGrantsRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
    };
  },

  toJSON(message: QueryGrantsRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGrantsRequest>, I>>(
    object: I
  ): QueryGrantsRequest {
    const message = createBaseQueryGrantsRequest();
    message.classId = object.classId ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
};

function createBaseQueryGrantsResponse(): QueryGrantsResponse {
  return { grants: [] };
}

export const QueryGrantsResponse = {
  encode(
    message: QueryGrantsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGrantsResponse {
    return {
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryGrantsResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) => (e ? Grant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGrantsResponse>, I>>(
    object: I
  ): QueryGrantsResponse {
    const message = createBaseQueryGrantsResponse();
    message.grants = object.grants?.map((e) => Grant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryApproveRequest(): QueryApproveRequest {
  return { classId: "", proxy: "", approver: "" };
}

export const QueryApproveRequest = {
  encode(
    message: QueryApproveRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.approver !== "") {
      writer.uint32(26).string(message.approver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApproveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApproveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.proxy = reader.string();
          break;
        case 3:
          message.approver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryApproveRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      approver: isSet(object.approver) ? String(object.approver) : "",
    };
  },

  toJSON(message: QueryApproveRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.approver !== undefined && (obj.approver = message.approver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApproveRequest>, I>>(
    object: I
  ): QueryApproveRequest {
    const message = createBaseQueryApproveRequest();
    message.classId = object.classId ?? "";
    message.proxy = object.proxy ?? "";
    message.approver = object.approver ?? "";
    return message;
  },
};

function createBaseQueryApproveResponse(): QueryApproveResponse {
  return { approve: undefined };
}

export const QueryApproveResponse = {
  encode(
    message: QueryApproveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.approve !== undefined) {
      Approve.encode(message.approve, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryApproveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApproveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approve = Approve.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryApproveResponse {
    return {
      approve: isSet(object.approve)
        ? Approve.fromJSON(object.approve)
        : undefined,
    };
  },

  toJSON(message: QueryApproveResponse): unknown {
    const obj: any = {};
    message.approve !== undefined &&
      (obj.approve = message.approve
        ? Approve.toJSON(message.approve)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApproveResponse>, I>>(
    object: I
  ): QueryApproveResponse {
    const message = createBaseQueryApproveResponse();
    message.approve =
      object.approve !== undefined && object.approve !== null
        ? Approve.fromPartial(object.approve)
        : undefined;
    return message;
  },
};

function createBaseQueryApprovesRequest(): QueryApprovesRequest {
  return { classId: "", proxy: "", pagination: undefined };
}

export const QueryApprovesRequest = {
  encode(
    message: QueryApprovesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryApprovesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.proxy = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryApprovesRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryApprovesRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApprovesRequest>, I>>(
    object: I
  ): QueryApprovesRequest {
    const message = createBaseQueryApprovesRequest();
    message.classId = object.classId ?? "";
    message.proxy = object.proxy ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryApprovesResponse(): QueryApprovesResponse {
  return { approves: [], pagination: undefined };
}

export const QueryApprovesResponse = {
  encode(
    message: QueryApprovesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.approves) {
      Approve.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryApprovesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approves.push(Approve.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryApprovesResponse {
    return {
      approves: Array.isArray(object?.approves)
        ? object.approves.map((e: any) => Approve.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryApprovesResponse): unknown {
    const obj: any = {};
    if (message.approves) {
      obj.approves = message.approves.map((e) =>
        e ? Approve.toJSON(e) : undefined
      );
    } else {
      obj.approves = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApprovesResponse>, I>>(
    object: I
  ): QueryApprovesResponse {
    const message = createBaseQueryApprovesResponse();
    message.approves =
      object.approves?.map((e) => Approve.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of tokens of a given class owned by the address. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Supply queries the number of tokens from the given class id. */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /** Token queries an token metadata based on its class id. */
  Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /** Tokens queries all token metadata. */
  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
  /** Grants queries grants on a given grantee. */
  Grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
  /** Approve queries approve on a given proxy approver pair. */
  Approve(request: QueryApproveRequest): Promise<QueryApproveResponse>;
  /** Approves queries all approves on a given proxy. */
  Approves(request: QueryApprovesRequest): Promise<QueryApprovesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.Supply = this.Supply.bind(this);
    this.Token = this.Token.bind(this);
    this.Tokens = this.Tokens.bind(this);
    this.Grants = this.Grants.bind(this);
    this.Approve = this.Approve.bind(this);
    this.Approves = this.Approves.bind(this);
  }
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Balance", data);
    return promise.then((data) =>
      QueryBalanceResponse.decode(new _m0.Reader(data))
    );
  }

  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Supply", data);
    return promise.then((data) =>
      QuerySupplyResponse.decode(new _m0.Reader(data))
    );
  }

  Token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    const data = QueryTokenRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Token", data);
    return promise.then((data) =>
      QueryTokenResponse.decode(new _m0.Reader(data))
    );
  }

  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
    const data = QueryTokensRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Tokens", data);
    return promise.then((data) =>
      QueryTokensResponse.decode(new _m0.Reader(data))
    );
  }

  Grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
    const data = QueryGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Grants", data);
    return promise.then((data) =>
      QueryGrantsResponse.decode(new _m0.Reader(data))
    );
  }

  Approve(request: QueryApproveRequest): Promise<QueryApproveResponse> {
    const data = QueryApproveRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Approve", data);
    return promise.then((data) =>
      QueryApproveResponse.decode(new _m0.Reader(data))
    );
  }

  Approves(request: QueryApprovesRequest): Promise<QueryApprovesResponse> {
    const data = QueryApprovesRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Approves", data);
    return promise.then((data) =>
      QueryApprovesResponse.decode(new _m0.Reader(data))
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
