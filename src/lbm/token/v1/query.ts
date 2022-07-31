/* eslint-disable */
import { TokenClass, Grant } from "./token";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.token.v1";

/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
  /** contract id associated with the token class. */
  contractId: string;
  /** address is the address to query balance for. */
  address: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
  /** the balance of the tokens. */
  amount: string;
}

/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
  /** contract id associated with the token class. */
  contractId: string;
}

/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  /** the supply of the tokens. */
  amount: string;
}

/** QueryMintedRequest is the request type for the Query/Minted RPC method */
export interface QueryMintedRequest {
  /** contract id associated with the token class. */
  contractId: string;
}

/** QueryMintedResponse is the response type for the Query/Minted RPC method */
export interface QueryMintedResponse {
  /** the amount of the minted tokens. */
  amount: string;
}

/** QueryBurntRequest is the request type for the Query/Burnt RPC method */
export interface QueryBurntRequest {
  /** contract id associated with the token class. */
  contractId: string;
}

/** QueryBurntResponse is the response type for the Query/Burnt RPC method */
export interface QueryBurntResponse {
  /** the amount of the burnt tokens. */
  amount: string;
}

/** QueryTokenClassRequest is the request type for the Query/TokenClass RPC method */
export interface QueryTokenClassRequest {
  /** contract id associated with the token class. */
  contractId: string;
}

/** QueryTokenClassResponse is the response type for the Query/TokenClass RPC method */
export interface QueryTokenClassResponse {
  class?: TokenClass;
}

/** QueryTokenClassesRequest is the request type for the Query/TokenClasses RPC method */
export interface QueryTokenClassesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryTokenClassesResponse is the response type for the Query/TokenClasses RPC method */
export interface QueryTokenClassesResponse {
  /** information of the token classes. */
  classes: TokenClass[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC method */
export interface QueryGranteeGrantsRequest {
  /** contract id associated with the token class. */
  contractId: string;
  /** grantee which has permissions on the token class. */
  grantee: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method */
export interface QueryGranteeGrantsResponse {
  /** all the grants on the grantee. */
  grants: Grant[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryApprovedRequest is the request type for the Query/Approved RPC method */
export interface QueryApprovedRequest {
  /** contract id associated with the token class. */
  contractId: string;
  /** address of the proxy which the authorization is granted to. */
  proxy: string;
  /** approver is the address of the approver of the authorization. */
  approver: string;
}

/** QueryApprovedResponse is the response type for the Query/Approved RPC method */
export interface QueryApprovedResponse {
  approved: boolean;
}

/** QueryApproversRequest is the request type for the Query/Approvers RPC method */
export interface QueryApproversRequest {
  /** contract id associated with the token class. */
  contractId: string;
  /** address of the proxy which the authorization is granted to. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryApproversResponse is the response type for the Query/Approvers RPC method */
export interface QueryApproversResponse {
  /** all the authorizations on the proxy. */
  approvers: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return { contractId: "", address: "" };
}

export const QueryBalanceRequest = {
  encode(
    message: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
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
          message.contractId = reader.string();
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
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(
    object: I
  ): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.contractId = object.contractId ?? "";
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
  return { contractId: "" };
}

export const QuerySupplyRequest = {
  encode(
    message: QuerySupplyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
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
          message.contractId = reader.string();
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
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(
    object: I
  ): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.contractId = object.contractId ?? "";
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

function createBaseQueryMintedRequest(): QueryMintedRequest {
  return { contractId: "" };
}

export const QueryMintedRequest = {
  encode(
    message: QueryMintedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintedRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
    };
  },

  toJSON(message: QueryMintedRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintedRequest>, I>>(
    object: I
  ): QueryMintedRequest {
    const message = createBaseQueryMintedRequest();
    message.contractId = object.contractId ?? "";
    return message;
  },
};

function createBaseQueryMintedResponse(): QueryMintedResponse {
  return { amount: "" };
}

export const QueryMintedResponse = {
  encode(
    message: QueryMintedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintedResponse();
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

  fromJSON(object: any): QueryMintedResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: QueryMintedResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintedResponse>, I>>(
    object: I
  ): QueryMintedResponse {
    const message = createBaseQueryMintedResponse();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseQueryBurntRequest(): QueryBurntRequest {
  return { contractId: "" };
}

export const QueryBurntRequest = {
  encode(
    message: QueryBurntRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurntRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurntRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBurntRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
    };
  },

  toJSON(message: QueryBurntRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBurntRequest>, I>>(
    object: I
  ): QueryBurntRequest {
    const message = createBaseQueryBurntRequest();
    message.contractId = object.contractId ?? "";
    return message;
  },
};

function createBaseQueryBurntResponse(): QueryBurntResponse {
  return { amount: "" };
}

export const QueryBurntResponse = {
  encode(
    message: QueryBurntResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurntResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurntResponse();
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

  fromJSON(object: any): QueryBurntResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: QueryBurntResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBurntResponse>, I>>(
    object: I
  ): QueryBurntResponse {
    const message = createBaseQueryBurntResponse();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseQueryTokenClassRequest(): QueryTokenClassRequest {
  return { contractId: "" };
}

export const QueryTokenClassRequest = {
  encode(
    message: QueryTokenClassRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenClassRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
    };
  },

  toJSON(message: QueryTokenClassRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenClassRequest>, I>>(
    object: I
  ): QueryTokenClassRequest {
    const message = createBaseQueryTokenClassRequest();
    message.contractId = object.contractId ?? "";
    return message;
  },
};

function createBaseQueryTokenClassResponse(): QueryTokenClassResponse {
  return { class: undefined };
}

export const QueryTokenClassResponse = {
  encode(
    message: QueryTokenClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.class !== undefined) {
      TokenClass.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = TokenClass.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenClassResponse {
    return {
      class: isSet(object.class)
        ? TokenClass.fromJSON(object.class)
        : undefined,
    };
  },

  toJSON(message: QueryTokenClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined &&
      (obj.class = message.class
        ? TokenClass.toJSON(message.class)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenClassResponse>, I>>(
    object: I
  ): QueryTokenClassResponse {
    const message = createBaseQueryTokenClassResponse();
    message.class =
      object.class !== undefined && object.class !== null
        ? TokenClass.fromPartial(object.class)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenClassesRequest(): QueryTokenClassesRequest {
  return { pagination: undefined };
}

export const QueryTokenClassesRequest = {
  encode(
    message: QueryTokenClassesRequest,
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
  ): QueryTokenClassesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenClassesRequest();
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

  fromJSON(object: any): QueryTokenClassesRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenClassesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenClassesRequest>, I>>(
    object: I
  ): QueryTokenClassesRequest {
    const message = createBaseQueryTokenClassesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenClassesResponse(): QueryTokenClassesResponse {
  return { classes: [], pagination: undefined };
}

export const QueryTokenClassesResponse = {
  encode(
    message: QueryTokenClassesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.classes) {
      TokenClass.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryTokenClassesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(TokenClass.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTokenClassesResponse {
    return {
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => TokenClass.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenClassesResponse): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) =>
        e ? TokenClass.toJSON(e) : undefined
      );
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenClassesResponse>, I>>(
    object: I
  ): QueryTokenClassesResponse {
    const message = createBaseQueryTokenClassesResponse();
    message.classes =
      object.classes?.map((e) => TokenClass.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGranteeGrantsRequest(): QueryGranteeGrantsRequest {
  return { contractId: "", grantee: "", pagination: undefined };
}

export const QueryGranteeGrantsRequest = {
  encode(
    message: QueryGranteeGrantsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGranteeGrantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
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

  fromJSON(object: any): QueryGranteeGrantsRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGranteeGrantsRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGranteeGrantsRequest>, I>>(
    object: I
  ): QueryGranteeGrantsRequest {
    const message = createBaseQueryGranteeGrantsRequest();
    message.contractId = object.contractId ?? "";
    message.grantee = object.grantee ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGranteeGrantsResponse(): QueryGranteeGrantsResponse {
  return { grants: [], pagination: undefined };
}

export const QueryGranteeGrantsResponse = {
  encode(
    message: QueryGranteeGrantsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGranteeGrantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGranteeGrantsResponse {
    return {
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGranteeGrantsResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) => (e ? Grant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGranteeGrantsResponse>, I>>(
    object: I
  ): QueryGranteeGrantsResponse {
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants = object.grants?.map((e) => Grant.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryApprovedRequest(): QueryApprovedRequest {
  return { contractId: "", proxy: "", approver: "" };
}

export const QueryApprovedRequest = {
  encode(
    message: QueryApprovedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.approver !== "") {
      writer.uint32(26).string(message.approver);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryApprovedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
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

  fromJSON(object: any): QueryApprovedRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      approver: isSet(object.approver) ? String(object.approver) : "",
    };
  },

  toJSON(message: QueryApprovedRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.approver !== undefined && (obj.approver = message.approver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApprovedRequest>, I>>(
    object: I
  ): QueryApprovedRequest {
    const message = createBaseQueryApprovedRequest();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.approver = object.approver ?? "";
    return message;
  },
};

function createBaseQueryApprovedResponse(): QueryApprovedResponse {
  return { approved: false };
}

export const QueryApprovedResponse = {
  encode(
    message: QueryApprovedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.approved === true) {
      writer.uint32(8).bool(message.approved);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryApprovedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryApprovedResponse {
    return {
      approved: isSet(object.approved) ? Boolean(object.approved) : false,
    };
  },

  toJSON(message: QueryApprovedResponse): unknown {
    const obj: any = {};
    message.approved !== undefined && (obj.approved = message.approved);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApprovedResponse>, I>>(
    object: I
  ): QueryApprovedResponse {
    const message = createBaseQueryApprovedResponse();
    message.approved = object.approved ?? false;
    return message;
  },
};

function createBaseQueryApproversRequest(): QueryApproversRequest {
  return { contractId: "", address: "", pagination: undefined };
}

export const QueryApproversRequest = {
  encode(
    message: QueryApproversRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryApproversRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApproversRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.address = reader.string();
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

  fromJSON(object: any): QueryApproversRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryApproversRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApproversRequest>, I>>(
    object: I
  ): QueryApproversRequest {
    const message = createBaseQueryApproversRequest();
    message.contractId = object.contractId ?? "";
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryApproversResponse(): QueryApproversResponse {
  return { approvers: [], pagination: undefined };
}

export const QueryApproversResponse = {
  encode(
    message: QueryApproversResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.approvers) {
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
  ): QueryApproversResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApproversResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approvers.push(reader.string());
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

  fromJSON(object: any): QueryApproversResponse {
    return {
      approvers: Array.isArray(object?.approvers)
        ? object.approvers.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryApproversResponse): unknown {
    const obj: any = {};
    if (message.approvers) {
      obj.approvers = message.approvers.map((e) => e);
    } else {
      obj.approvers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApproversResponse>, I>>(
    object: I
  ): QueryApproversResponse {
    const message = createBaseQueryApproversResponse();
    message.approvers = object.approvers?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Balance queries the number of tokens of a given contract owned by the address.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `address` is of invalid format.
   */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /**
   * Supply queries the number of tokens from the given contract id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `contract_id`.
   */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /**
   * Minted queries the number of minted tokens from the given contract id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `contract_id`.
   */
  Minted(request: QueryMintedRequest): Promise<QueryMintedResponse>;
  /**
   * Burnt queries the number of burnt tokens from the given contract id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `contract_id`.
   */
  Burnt(request: QueryBurntRequest): Promise<QueryBurntResponse>;
  /**
   * TokenClass queries an token metadata based on its contract id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `contract_id`.
   */
  TokenClass(request: QueryTokenClassRequest): Promise<QueryTokenClassResponse>;
  /** TokenClasses queries all token metadata. */
  TokenClasses(
    request: QueryTokenClassesRequest
  ): Promise<QueryTokenClassesResponse>;
  /**
   * GranteeGrants queries permissions on a given grantee.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `grantee` is of invalid format.
   */
  GranteeGrants(
    request: QueryGranteeGrantsRequest
  ): Promise<QueryGranteeGrantsResponse>;
  /**
   * Approved queries authorization on a given proxy approver pair.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `proxy` is of invalid format.
   *   - `approver` is of invalid format.
   */
  Approved(request: QueryApprovedRequest): Promise<QueryApprovedResponse>;
  /**
   * Approvers queries approvers on a given proxy.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `proxy` is of invalid format.
   */
  Approvers(request: QueryApproversRequest): Promise<QueryApproversResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.Supply = this.Supply.bind(this);
    this.Minted = this.Minted.bind(this);
    this.Burnt = this.Burnt.bind(this);
    this.TokenClass = this.TokenClass.bind(this);
    this.TokenClasses = this.TokenClasses.bind(this);
    this.GranteeGrants = this.GranteeGrants.bind(this);
    this.Approved = this.Approved.bind(this);
    this.Approvers = this.Approvers.bind(this);
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

  Minted(request: QueryMintedRequest): Promise<QueryMintedResponse> {
    const data = QueryMintedRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Minted", data);
    return promise.then((data) =>
      QueryMintedResponse.decode(new _m0.Reader(data))
    );
  }

  Burnt(request: QueryBurntRequest): Promise<QueryBurntResponse> {
    const data = QueryBurntRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Burnt", data);
    return promise.then((data) =>
      QueryBurntResponse.decode(new _m0.Reader(data))
    );
  }

  TokenClass(
    request: QueryTokenClassRequest
  ): Promise<QueryTokenClassResponse> {
    const data = QueryTokenClassRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "TokenClass", data);
    return promise.then((data) =>
      QueryTokenClassResponse.decode(new _m0.Reader(data))
    );
  }

  TokenClasses(
    request: QueryTokenClassesRequest
  ): Promise<QueryTokenClassesResponse> {
    const data = QueryTokenClassesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.token.v1.Query",
      "TokenClasses",
      data
    );
    return promise.then((data) =>
      QueryTokenClassesResponse.decode(new _m0.Reader(data))
    );
  }

  GranteeGrants(
    request: QueryGranteeGrantsRequest
  ): Promise<QueryGranteeGrantsResponse> {
    const data = QueryGranteeGrantsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.token.v1.Query",
      "GranteeGrants",
      data
    );
    return promise.then((data) =>
      QueryGranteeGrantsResponse.decode(new _m0.Reader(data))
    );
  }

  Approved(request: QueryApprovedRequest): Promise<QueryApprovedResponse> {
    const data = QueryApprovedRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Approved", data);
    return promise.then((data) =>
      QueryApprovedResponse.decode(new _m0.Reader(data))
    );
  }

  Approvers(request: QueryApproversRequest): Promise<QueryApproversResponse> {
    const data = QueryApproversRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Approvers", data);
    return promise.then((data) =>
      QueryApproversResponse.decode(new _m0.Reader(data))
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
