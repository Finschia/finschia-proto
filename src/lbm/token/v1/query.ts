/* eslint-disable */
import { Contract, Grant } from "./token";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.token.v1";

/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
  /** contract id associated with the contract. */
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
  /** contract id associated with the contract. */
  contractId: string;
}

/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  /** the supply of the tokens. */
  amount: string;
}

/** QueryMintedRequest is the request type for the Query/Minted RPC method */
export interface QueryMintedRequest {
  /** contract id associated with the contract. */
  contractId: string;
}

/** QueryMintedResponse is the response type for the Query/Minted RPC method */
export interface QueryMintedResponse {
  /** the amount of the minted tokens. */
  amount: string;
}

/** QueryBurntRequest is the request type for the Query/Burnt RPC method */
export interface QueryBurntRequest {
  /** contract id associated with the contract. */
  contractId: string;
}

/** QueryBurntResponse is the response type for the Query/Burnt RPC method */
export interface QueryBurntResponse {
  /** the amount of the burnt tokens. */
  amount: string;
}

/** QueryContractRequest is the request type for the Query/Contract RPC method */
export interface QueryContractRequest {
  /** contract id associated with the contract. */
  contractId: string;
}

/** QueryContractResponse is the response type for the Query/Contract RPC method */
export interface QueryContractResponse {
  contract?: Contract;
}

/** QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC method */
export interface QueryGranteeGrantsRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** grantee which has permissions on the contract. */
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

/** QueryIsOperatorForRequest is the request type for the Query/IsOperatorFor RPC method */
export interface QueryIsOperatorForRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator which the authorization is granted to. */
  operator: string;
  /** address of the holder of the authorization. */
  holder: string;
}

/** QueryIsOperatorForResponse is the response type for the Query/IsOperatorFor RPC method */
export interface QueryIsOperatorForResponse {
  authorized: boolean;
}

/** QueryHoldersByOperatorRequest is the request type for the Query/HoldersByOperator RPC method */
export interface QueryHoldersByOperatorRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator which the authorization is granted to. */
  operator: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryHoldersByOperatorResponse is the response type for the Query/HoldersByOperator RPC method */
export interface QueryHoldersByOperatorResponse {
  /** holder addresses */
  holders: string[];
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

function createBaseQueryContractRequest(): QueryContractRequest {
  return { contractId: "" };
}

export const QueryContractRequest = {
  encode(
    message: QueryContractRequest,
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
  ): QueryContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractRequest();
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

  fromJSON(object: any): QueryContractRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
    };
  },

  toJSON(message: QueryContractRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractRequest>, I>>(
    object: I
  ): QueryContractRequest {
    const message = createBaseQueryContractRequest();
    message.contractId = object.contractId ?? "";
    return message;
  },
};

function createBaseQueryContractResponse(): QueryContractResponse {
  return { contract: undefined };
}

export const QueryContractResponse = {
  encode(
    message: QueryContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contract !== undefined) {
      Contract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = Contract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractResponse {
    return {
      contract: isSet(object.contract)
        ? Contract.fromJSON(object.contract)
        : undefined,
    };
  },

  toJSON(message: QueryContractResponse): unknown {
    const obj: any = {};
    message.contract !== undefined &&
      (obj.contract = message.contract
        ? Contract.toJSON(message.contract)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractResponse>, I>>(
    object: I
  ): QueryContractResponse {
    const message = createBaseQueryContractResponse();
    message.contract =
      object.contract !== undefined && object.contract !== null
        ? Contract.fromPartial(object.contract)
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

function createBaseQueryIsOperatorForRequest(): QueryIsOperatorForRequest {
  return { contractId: "", operator: "", holder: "" };
}

export const QueryIsOperatorForRequest = {
  encode(
    message: QueryIsOperatorForRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.holder !== "") {
      writer.uint32(26).string(message.holder);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIsOperatorForRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOperatorForRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.holder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIsOperatorForRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
    };
  },

  toJSON(message: QueryIsOperatorForRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.holder !== undefined && (obj.holder = message.holder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIsOperatorForRequest>, I>>(
    object: I
  ): QueryIsOperatorForRequest {
    const message = createBaseQueryIsOperatorForRequest();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.holder = object.holder ?? "";
    return message;
  },
};

function createBaseQueryIsOperatorForResponse(): QueryIsOperatorForResponse {
  return { authorized: false };
}

export const QueryIsOperatorForResponse = {
  encode(
    message: QueryIsOperatorForResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authorized === true) {
      writer.uint32(8).bool(message.authorized);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIsOperatorForResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsOperatorForResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIsOperatorForResponse {
    return {
      authorized: isSet(object.authorized) ? Boolean(object.authorized) : false,
    };
  },

  toJSON(message: QueryIsOperatorForResponse): unknown {
    const obj: any = {};
    message.authorized !== undefined && (obj.authorized = message.authorized);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIsOperatorForResponse>, I>>(
    object: I
  ): QueryIsOperatorForResponse {
    const message = createBaseQueryIsOperatorForResponse();
    message.authorized = object.authorized ?? false;
    return message;
  },
};

function createBaseQueryHoldersByOperatorRequest(): QueryHoldersByOperatorRequest {
  return { contractId: "", operator: "", pagination: undefined };
}

export const QueryHoldersByOperatorRequest = {
  encode(
    message: QueryHoldersByOperatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryHoldersByOperatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHoldersByOperatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
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

  fromJSON(object: any): QueryHoldersByOperatorRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryHoldersByOperatorRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHoldersByOperatorRequest>, I>>(
    object: I
  ): QueryHoldersByOperatorRequest {
    const message = createBaseQueryHoldersByOperatorRequest();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryHoldersByOperatorResponse(): QueryHoldersByOperatorResponse {
  return { holders: [], pagination: undefined };
}

export const QueryHoldersByOperatorResponse = {
  encode(
    message: QueryHoldersByOperatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.holders) {
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
  ): QueryHoldersByOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHoldersByOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holders.push(reader.string());
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

  fromJSON(object: any): QueryHoldersByOperatorResponse {
    return {
      holders: Array.isArray(object?.holders)
        ? object.holders.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryHoldersByOperatorResponse): unknown {
    const obj: any = {};
    if (message.holders) {
      obj.holders = message.holders.map((e) => e);
    } else {
      obj.holders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHoldersByOperatorResponse>, I>>(
    object: I
  ): QueryHoldersByOperatorResponse {
    const message = createBaseQueryHoldersByOperatorResponse();
    message.holders = object.holders?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of tokens of a given contract owned by the address. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Supply queries the number of tokens from the given contract id. */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /** Minted queries the number of minted tokens from the given contract id. */
  Minted(request: QueryMintedRequest): Promise<QueryMintedResponse>;
  /** Burnt queries the number of burnt tokens from the given contract id. */
  Burnt(request: QueryBurntRequest): Promise<QueryBurntResponse>;
  /** Contract queries an token metadata based on its contract id. */
  Contract(request: QueryContractRequest): Promise<QueryContractResponse>;
  /** GranteeGrants queries permissions on a given grantee. */
  GranteeGrants(
    request: QueryGranteeGrantsRequest
  ): Promise<QueryGranteeGrantsResponse>;
  /** IsOperatorFor queries authorization on a given operator holder pair. */
  IsOperatorFor(
    request: QueryIsOperatorForRequest
  ): Promise<QueryIsOperatorForResponse>;
  /** HoldersByOperator queries holders on a given operator. */
  HoldersByOperator(
    request: QueryHoldersByOperatorRequest
  ): Promise<QueryHoldersByOperatorResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.Supply = this.Supply.bind(this);
    this.Minted = this.Minted.bind(this);
    this.Burnt = this.Burnt.bind(this);
    this.Contract = this.Contract.bind(this);
    this.GranteeGrants = this.GranteeGrants.bind(this);
    this.IsOperatorFor = this.IsOperatorFor.bind(this);
    this.HoldersByOperator = this.HoldersByOperator.bind(this);
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

  Contract(request: QueryContractRequest): Promise<QueryContractResponse> {
    const data = QueryContractRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Query", "Contract", data);
    return promise.then((data) =>
      QueryContractResponse.decode(new _m0.Reader(data))
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

  IsOperatorFor(
    request: QueryIsOperatorForRequest
  ): Promise<QueryIsOperatorForResponse> {
    const data = QueryIsOperatorForRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.token.v1.Query",
      "IsOperatorFor",
      data
    );
    return promise.then((data) =>
      QueryIsOperatorForResponse.decode(new _m0.Reader(data))
    );
  }

  HoldersByOperator(
    request: QueryHoldersByOperatorRequest
  ): Promise<QueryHoldersByOperatorResponse> {
    const data = QueryHoldersByOperatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.token.v1.Query",
      "HoldersByOperator",
      data
    );
    return promise.then((data) =>
      QueryHoldersByOperatorResponse.decode(new _m0.Reader(data))
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
