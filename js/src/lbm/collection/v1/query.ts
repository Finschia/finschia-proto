/* eslint-disable */
import { Coin, Contract, TokenType, NFT, Grant } from "./collection";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.collection.v1";

/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** address is the address to query the balance for. */
  address: string;
  /** token id associated with the token. */
  tokenId: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the token. */
  balance?: Coin;
}

/** QueryAllBalancesRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** address is the address to query the balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryAllBalancesResponse is the response type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesResponse {
  /** balances is the balalces of all the tokens. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryFTSupplyRequest is the request type for the Query/FTSupply RPC method. */
export interface QueryFTSupplyRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the fungible token. */
  tokenId: string;
}

/** QueryFTSupplyResponse is the response type for the Query/FTSupply RPC method. */
export interface QueryFTSupplyResponse {
  /** supply is the supply of the tokens. */
  supply: string;
}

/** QueryFTMintedRequest is the request type for the Query/FTMinted RPC method. */
export interface QueryFTMintedRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the fungible token. */
  tokenId: string;
}

/** QueryFTMintedResponse is the response type for the Query/FTMinted RPC method. */
export interface QueryFTMintedResponse {
  /** minted is the amount of the minted tokens. */
  minted: string;
}

/** QueryFTBurntRequest is the request type for the Query/FTBurnt RPC method. */
export interface QueryFTBurntRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the fungible token. */
  tokenId: string;
}

/** QueryFTBurntResponse is the response type for the Query/FTBurnt RPC method. */
export interface QueryFTBurntResponse {
  /** burnt is the amount of the burnt tokens. */
  burnt: string;
}

/** QueryNFTSupplyRequest is the request type for the Query/NFTSupply RPC method. */
export interface QueryNFTSupplyRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * token type associated with the token type.
   * refer to TokenType for the definition.
   */
  tokenType: string;
}

/** QueryNFTSupplyResponse is the response type for the Query/NFTSupply RPC method. */
export interface QueryNFTSupplyResponse {
  /** supply is the supply of the non-fungible token. */
  supply: string;
}

/** QueryNFTMintedRequest is the request type for the Query/NFTMinted RPC method. */
export interface QueryNFTMintedRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * token type associated with the token type.
   * refer to TokenType for the definition.
   */
  tokenType: string;
}

/** QueryNFTMintedResponse is the response type for the Query/NFTMinted RPC method. */
export interface QueryNFTMintedResponse {
  /** minted is the amount of minted tokens. */
  minted: string;
}

/** QueryNFTBurntRequest is the request type for the Query/NFTBurnt RPC method. */
export interface QueryNFTBurntRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * token type associated with the token type.
   * refer to TokenType for the definition.
   */
  tokenType: string;
}

/** QueryNFTBurntResponse is the response type for the Query/NFTBurnt RPC method. */
export interface QueryNFTBurntResponse {
  /** burnt is the amount of the burnt tokens. */
  burnt: string;
}

/** QueryContractRequest is the request type for the Query/Contract RPC method. */
export interface QueryContractRequest {
  /** contract id associated with the contract. */
  contractId: string;
}

/** QueryContractResponse is the response type for the Query/Contract RPC method. */
export interface QueryContractResponse {
  /** contract is the information of the contract. */
  contract?: Contract;
}

/**
 * QueryTokenClassTypeNameRequest is the request type for the Query/TokenClassTypeName RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryTokenClassTypeNameRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** class id associated with the token class. */
  classId: string;
}

/**
 * QueryTokenClassTypeNameResponse is the response type for the Query/TokenClassTypeName RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryTokenClassTypeNameResponse {
  /** type name of the token class. */
  name: string;
}

/** QueryTokenTypeRequest is the request type for the Query/TokenType RPC method. */
export interface QueryTokenTypeRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * token type associated with the token type.
   * refer to TokenType for the definition.
   */
  tokenType: string;
}

/** QueryTokenTypeResponse is the response type for the Query/TokenType RPC method. */
export interface QueryTokenTypeResponse {
  /** token type is the information of the token type. */
  tokenType?: TokenType;
}

/** QueryTokenRequest is the request type for the Query/Token RPC method. */
export interface QueryTokenRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the fungible token. */
  tokenId: string;
}

/** QueryTokenResponse is the response type for the Query/Token RPC method. */
export interface QueryTokenResponse {
  /** information of the token. */
  token?: Any;
}

/** QueryRootRequest is the request type for the Query/Root RPC method. */
export interface QueryRootRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the non-fungible token. */
  tokenId: string;
}

/** QueryRootResponse is the response type for the Query/Root RPC method. */
export interface QueryRootResponse {
  /**
   * root is the information of the root token.
   * it would return itself if it's the root token.
   */
  root?: NFT;
}

/** QueryHasParentRequest is the request type for the Query/HasParent RPC method. */
export interface QueryHasParentRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated wit the non-fungible token. */
  tokenId: string;
}

/** QueryHasParentResponse is the response type for the Query/HasParent RPC method. */
export interface QueryHasParentResponse {
  /** whether the token has its parent. */
  hasParent: boolean;
}

/** QueryParentRequest is the request type for the Query/Parent RPC method. */
export interface QueryParentRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated wit the non-fungible token. */
  tokenId: string;
}

/** QueryParentResponse is the response type for the Query/Parent RPC method. */
export interface QueryParentResponse {
  /** parent is the information of the parent token. */
  parent?: NFT;
}

/** QueryChildrenRequest is the request type for the Query/Children RPC method. */
export interface QueryChildrenRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the non-fungible token. */
  tokenId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryChildrenResponse is the response type for the Query/Children RPC method. */
export interface QueryChildrenResponse {
  /** children is the information of the child tokens. */
  children: NFT[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the grantee. */
  grantee: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
  grants: Grant[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryIsOperatorForRequest is the request type for the Query/IsOperatorFor RPC method. */
export interface QueryIsOperatorForRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the operator. */
  operator: string;
  /** the address of the token holder. */
  holder: string;
}

/** QueryIsOperatorForResponse is the response type for the Query/IsOperatorFor RPC method. */
export interface QueryIsOperatorForResponse {
  authorized: boolean;
}

/** QueryHoldersByOperatorRequest is the request type for the Query/HoldersByOperator RPC method. */
export interface QueryHoldersByOperatorRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator. */
  operator: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryHoldersByOperatorResponse is the response type for the Query/HoldersByOperator RPC method. */
export interface QueryHoldersByOperatorResponse {
  holders: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return { contractId: "", address: "", tokenId: "" };
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
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
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
        case 3:
          message.tokenId = reader.string();
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
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.address !== undefined && (obj.address = message.address);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(
    object: I
  ): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.contractId = object.contractId ?? "";
    message.address = object.address ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return { balance: undefined };
}

export const QueryBalanceResponse = {
  encode(
    message: QueryBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
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
          message.balance = Coin.decode(reader, reader.uint32());
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
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(
    object: I
  ): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

function createBaseQueryAllBalancesRequest(): QueryAllBalancesRequest {
  return { contractId: "", address: "", pagination: undefined };
}

export const QueryAllBalancesRequest = {
  encode(
    message: QueryAllBalancesRequest,
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
  ): QueryAllBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesRequest();
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

  fromJSON(object: any): QueryAllBalancesRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllBalancesRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(
    object: I
  ): QueryAllBalancesRequest {
    const message = createBaseQueryAllBalancesRequest();
    message.contractId = object.contractId ?? "";
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllBalancesResponse(): QueryAllBalancesResponse {
  return { balances: [], pagination: undefined };
}

export const QueryAllBalancesResponse = {
  encode(
    message: QueryAllBalancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBalancesResponse {
    return {
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Coin.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(
    object: I
  ): QueryAllBalancesResponse {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryFTSupplyRequest(): QueryFTSupplyRequest {
  return { contractId: "", tokenId: "" };
}

export const QueryFTSupplyRequest = {
  encode(
    message: QueryFTSupplyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFTSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFTSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFTSupplyRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryFTSupplyRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFTSupplyRequest>, I>>(
    object: I
  ): QueryFTSupplyRequest {
    const message = createBaseQueryFTSupplyRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryFTSupplyResponse(): QueryFTSupplyResponse {
  return { supply: "" };
}

export const QueryFTSupplyResponse = {
  encode(
    message: QueryFTSupplyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.supply !== "") {
      writer.uint32(10).string(message.supply);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFTSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFTSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFTSupplyResponse {
    return {
      supply: isSet(object.supply) ? String(object.supply) : "",
    };
  },

  toJSON(message: QueryFTSupplyResponse): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = message.supply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFTSupplyResponse>, I>>(
    object: I
  ): QueryFTSupplyResponse {
    const message = createBaseQueryFTSupplyResponse();
    message.supply = object.supply ?? "";
    return message;
  },
};

function createBaseQueryFTMintedRequest(): QueryFTMintedRequest {
  return { contractId: "", tokenId: "" };
}

export const QueryFTMintedRequest = {
  encode(
    message: QueryFTMintedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFTMintedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFTMintedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFTMintedRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryFTMintedRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFTMintedRequest>, I>>(
    object: I
  ): QueryFTMintedRequest {
    const message = createBaseQueryFTMintedRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryFTMintedResponse(): QueryFTMintedResponse {
  return { minted: "" };
}

export const QueryFTMintedResponse = {
  encode(
    message: QueryFTMintedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minted !== "") {
      writer.uint32(10).string(message.minted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFTMintedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFTMintedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFTMintedResponse {
    return {
      minted: isSet(object.minted) ? String(object.minted) : "",
    };
  },

  toJSON(message: QueryFTMintedResponse): unknown {
    const obj: any = {};
    message.minted !== undefined && (obj.minted = message.minted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFTMintedResponse>, I>>(
    object: I
  ): QueryFTMintedResponse {
    const message = createBaseQueryFTMintedResponse();
    message.minted = object.minted ?? "";
    return message;
  },
};

function createBaseQueryFTBurntRequest(): QueryFTBurntRequest {
  return { contractId: "", tokenId: "" };
}

export const QueryFTBurntRequest = {
  encode(
    message: QueryFTBurntRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFTBurntRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFTBurntRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFTBurntRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryFTBurntRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFTBurntRequest>, I>>(
    object: I
  ): QueryFTBurntRequest {
    const message = createBaseQueryFTBurntRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryFTBurntResponse(): QueryFTBurntResponse {
  return { burnt: "" };
}

export const QueryFTBurntResponse = {
  encode(
    message: QueryFTBurntResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.burnt !== "") {
      writer.uint32(10).string(message.burnt);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFTBurntResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFTBurntResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFTBurntResponse {
    return {
      burnt: isSet(object.burnt) ? String(object.burnt) : "",
    };
  },

  toJSON(message: QueryFTBurntResponse): unknown {
    const obj: any = {};
    message.burnt !== undefined && (obj.burnt = message.burnt);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFTBurntResponse>, I>>(
    object: I
  ): QueryFTBurntResponse {
    const message = createBaseQueryFTBurntResponse();
    message.burnt = object.burnt ?? "";
    return message;
  },
};

function createBaseQueryNFTSupplyRequest(): QueryNFTSupplyRequest {
  return { contractId: "", tokenType: "" };
}

export const QueryNFTSupplyRequest = {
  encode(
    message: QueryNFTSupplyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenType !== "") {
      writer.uint32(18).string(message.tokenType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNFTSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTSupplyRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
    };
  },

  toJSON(message: QueryNFTSupplyRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTSupplyRequest>, I>>(
    object: I
  ): QueryNFTSupplyRequest {
    const message = createBaseQueryNFTSupplyRequest();
    message.contractId = object.contractId ?? "";
    message.tokenType = object.tokenType ?? "";
    return message;
  },
};

function createBaseQueryNFTSupplyResponse(): QueryNFTSupplyResponse {
  return { supply: "" };
}

export const QueryNFTSupplyResponse = {
  encode(
    message: QueryNFTSupplyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.supply !== "") {
      writer.uint32(10).string(message.supply);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNFTSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTSupplyResponse {
    return {
      supply: isSet(object.supply) ? String(object.supply) : "",
    };
  },

  toJSON(message: QueryNFTSupplyResponse): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = message.supply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTSupplyResponse>, I>>(
    object: I
  ): QueryNFTSupplyResponse {
    const message = createBaseQueryNFTSupplyResponse();
    message.supply = object.supply ?? "";
    return message;
  },
};

function createBaseQueryNFTMintedRequest(): QueryNFTMintedRequest {
  return { contractId: "", tokenType: "" };
}

export const QueryNFTMintedRequest = {
  encode(
    message: QueryNFTMintedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenType !== "") {
      writer.uint32(18).string(message.tokenType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNFTMintedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTMintedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTMintedRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
    };
  },

  toJSON(message: QueryNFTMintedRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTMintedRequest>, I>>(
    object: I
  ): QueryNFTMintedRequest {
    const message = createBaseQueryNFTMintedRequest();
    message.contractId = object.contractId ?? "";
    message.tokenType = object.tokenType ?? "";
    return message;
  },
};

function createBaseQueryNFTMintedResponse(): QueryNFTMintedResponse {
  return { minted: "" };
}

export const QueryNFTMintedResponse = {
  encode(
    message: QueryNFTMintedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minted !== "") {
      writer.uint32(10).string(message.minted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNFTMintedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTMintedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTMintedResponse {
    return {
      minted: isSet(object.minted) ? String(object.minted) : "",
    };
  },

  toJSON(message: QueryNFTMintedResponse): unknown {
    const obj: any = {};
    message.minted !== undefined && (obj.minted = message.minted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTMintedResponse>, I>>(
    object: I
  ): QueryNFTMintedResponse {
    const message = createBaseQueryNFTMintedResponse();
    message.minted = object.minted ?? "";
    return message;
  },
};

function createBaseQueryNFTBurntRequest(): QueryNFTBurntRequest {
  return { contractId: "", tokenType: "" };
}

export const QueryNFTBurntRequest = {
  encode(
    message: QueryNFTBurntRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenType !== "") {
      writer.uint32(18).string(message.tokenType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNFTBurntRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTBurntRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTBurntRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
    };
  },

  toJSON(message: QueryNFTBurntRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTBurntRequest>, I>>(
    object: I
  ): QueryNFTBurntRequest {
    const message = createBaseQueryNFTBurntRequest();
    message.contractId = object.contractId ?? "";
    message.tokenType = object.tokenType ?? "";
    return message;
  },
};

function createBaseQueryNFTBurntResponse(): QueryNFTBurntResponse {
  return { burnt: "" };
}

export const QueryNFTBurntResponse = {
  encode(
    message: QueryNFTBurntResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.burnt !== "") {
      writer.uint32(10).string(message.burnt);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNFTBurntResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTBurntResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTBurntResponse {
    return {
      burnt: isSet(object.burnt) ? String(object.burnt) : "",
    };
  },

  toJSON(message: QueryNFTBurntResponse): unknown {
    const obj: any = {};
    message.burnt !== undefined && (obj.burnt = message.burnt);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTBurntResponse>, I>>(
    object: I
  ): QueryNFTBurntResponse {
    const message = createBaseQueryNFTBurntResponse();
    message.burnt = object.burnt ?? "";
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

function createBaseQueryTokenClassTypeNameRequest(): QueryTokenClassTypeNameRequest {
  return { contractId: "", classId: "" };
}

export const QueryTokenClassTypeNameRequest = {
  encode(
    message: QueryTokenClassTypeNameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenClassTypeNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenClassTypeNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenClassTypeNameRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
    };
  },

  toJSON(message: QueryTokenClassTypeNameRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenClassTypeNameRequest>, I>>(
    object: I
  ): QueryTokenClassTypeNameRequest {
    const message = createBaseQueryTokenClassTypeNameRequest();
    message.contractId = object.contractId ?? "";
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseQueryTokenClassTypeNameResponse(): QueryTokenClassTypeNameResponse {
  return { name: "" };
}

export const QueryTokenClassTypeNameResponse = {
  encode(
    message: QueryTokenClassTypeNameResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenClassTypeNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenClassTypeNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenClassTypeNameResponse {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: QueryTokenClassTypeNameResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenClassTypeNameResponse>, I>>(
    object: I
  ): QueryTokenClassTypeNameResponse {
    const message = createBaseQueryTokenClassTypeNameResponse();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryTokenTypeRequest(): QueryTokenTypeRequest {
  return { contractId: "", tokenType: "" };
}

export const QueryTokenTypeRequest = {
  encode(
    message: QueryTokenTypeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenType !== "") {
      writer.uint32(18).string(message.tokenType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenTypeRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
    };
  },

  toJSON(message: QueryTokenTypeRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenTypeRequest>, I>>(
    object: I
  ): QueryTokenTypeRequest {
    const message = createBaseQueryTokenTypeRequest();
    message.contractId = object.contractId ?? "";
    message.tokenType = object.tokenType ?? "";
    return message;
  },
};

function createBaseQueryTokenTypeResponse(): QueryTokenTypeResponse {
  return { tokenType: undefined };
}

export const QueryTokenTypeResponse = {
  encode(
    message: QueryTokenTypeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenType !== undefined) {
      TokenType.encode(message.tokenType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenType = TokenType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenTypeResponse {
    return {
      tokenType: isSet(object.tokenType)
        ? TokenType.fromJSON(object.tokenType)
        : undefined,
    };
  },

  toJSON(message: QueryTokenTypeResponse): unknown {
    const obj: any = {};
    message.tokenType !== undefined &&
      (obj.tokenType = message.tokenType
        ? TokenType.toJSON(message.tokenType)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenTypeResponse>, I>>(
    object: I
  ): QueryTokenTypeResponse {
    const message = createBaseQueryTokenTypeResponse();
    message.tokenType =
      object.tokenType !== undefined && object.tokenType !== null
        ? TokenType.fromPartial(object.tokenType)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenRequest(): QueryTokenRequest {
  return { contractId: "", tokenId: "" };
}

export const QueryTokenRequest = {
  encode(
    message: QueryTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
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
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
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
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryTokenRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenRequest>, I>>(
    object: I
  ): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
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
      Any.encode(message.token, writer.uint32(10).fork()).ldelim();
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
          message.token = Any.decode(reader, reader.uint32());
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
      token: isSet(object.token) ? Any.fromJSON(object.token) : undefined,
    };
  },

  toJSON(message: QueryTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Any.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenResponse>, I>>(
    object: I
  ): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.token =
      object.token !== undefined && object.token !== null
        ? Any.fromPartial(object.token)
        : undefined;
    return message;
  },
};

function createBaseQueryRootRequest(): QueryRootRequest {
  return { contractId: "", tokenId: "" };
}

export const QueryRootRequest = {
  encode(
    message: QueryRootRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRootRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRootRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRootRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryRootRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRootRequest>, I>>(
    object: I
  ): QueryRootRequest {
    const message = createBaseQueryRootRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryRootResponse(): QueryRootResponse {
  return { root: undefined };
}

export const QueryRootResponse = {
  encode(
    message: QueryRootResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.root !== undefined) {
      NFT.encode(message.root, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRootResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRootResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.root = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRootResponse {
    return {
      root: isSet(object.root) ? NFT.fromJSON(object.root) : undefined,
    };
  },

  toJSON(message: QueryRootResponse): unknown {
    const obj: any = {};
    message.root !== undefined &&
      (obj.root = message.root ? NFT.toJSON(message.root) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRootResponse>, I>>(
    object: I
  ): QueryRootResponse {
    const message = createBaseQueryRootResponse();
    message.root =
      object.root !== undefined && object.root !== null
        ? NFT.fromPartial(object.root)
        : undefined;
    return message;
  },
};

function createBaseQueryHasParentRequest(): QueryHasParentRequest {
  return { contractId: "", tokenId: "" };
}

export const QueryHasParentRequest = {
  encode(
    message: QueryHasParentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryHasParentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHasParentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHasParentRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryHasParentRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHasParentRequest>, I>>(
    object: I
  ): QueryHasParentRequest {
    const message = createBaseQueryHasParentRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryHasParentResponse(): QueryHasParentResponse {
  return { hasParent: false };
}

export const QueryHasParentResponse = {
  encode(
    message: QueryHasParentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hasParent === true) {
      writer.uint32(8).bool(message.hasParent);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryHasParentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHasParentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasParent = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHasParentResponse {
    return {
      hasParent: isSet(object.hasParent) ? Boolean(object.hasParent) : false,
    };
  },

  toJSON(message: QueryHasParentResponse): unknown {
    const obj: any = {};
    message.hasParent !== undefined && (obj.hasParent = message.hasParent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHasParentResponse>, I>>(
    object: I
  ): QueryHasParentResponse {
    const message = createBaseQueryHasParentResponse();
    message.hasParent = object.hasParent ?? false;
    return message;
  },
};

function createBaseQueryParentRequest(): QueryParentRequest {
  return { contractId: "", tokenId: "" };
}

export const QueryParentRequest = {
  encode(
    message: QueryParentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParentRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryParentRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParentRequest>, I>>(
    object: I
  ): QueryParentRequest {
    const message = createBaseQueryParentRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryParentResponse(): QueryParentResponse {
  return { parent: undefined };
}

export const QueryParentResponse = {
  encode(
    message: QueryParentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== undefined) {
      NFT.encode(message.parent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParentResponse {
    return {
      parent: isSet(object.parent) ? NFT.fromJSON(object.parent) : undefined,
    };
  },

  toJSON(message: QueryParentResponse): unknown {
    const obj: any = {};
    message.parent !== undefined &&
      (obj.parent = message.parent ? NFT.toJSON(message.parent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParentResponse>, I>>(
    object: I
  ): QueryParentResponse {
    const message = createBaseQueryParentResponse();
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? NFT.fromPartial(object.parent)
        : undefined;
    return message;
  },
};

function createBaseQueryChildrenRequest(): QueryChildrenRequest {
  return { contractId: "", tokenId: "", pagination: undefined };
}

export const QueryChildrenRequest = {
  encode(
    message: QueryChildrenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChildrenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChildrenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
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

  fromJSON(object: any): QueryChildrenRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryChildrenRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryChildrenRequest>, I>>(
    object: I
  ): QueryChildrenRequest {
    const message = createBaseQueryChildrenRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryChildrenResponse(): QueryChildrenResponse {
  return { children: [], pagination: undefined };
}

export const QueryChildrenResponse = {
  encode(
    message: QueryChildrenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.children) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryChildrenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChildrenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.children.push(NFT.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryChildrenResponse {
    return {
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => NFT.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryChildrenResponse): unknown {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map((e) =>
        e ? NFT.toJSON(e) : undefined
      );
    } else {
      obj.children = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryChildrenResponse>, I>>(
    object: I
  ): QueryChildrenResponse {
    const message = createBaseQueryChildrenResponse();
    message.children = object.children?.map((e) => NFT.fromPartial(e)) || [];
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
  /** Balance queries the balance of a single token class for a single account. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** AllBalances queries the balance of all token classes for a single account. */
  AllBalances(
    request: QueryAllBalancesRequest
  ): Promise<QueryAllBalancesResponse>;
  /** FTSupply queries the number of tokens from a given contract id and token id. */
  FTSupply(request: QueryFTSupplyRequest): Promise<QueryFTSupplyResponse>;
  /** FTMinted queries the number of minted tokens from a given contract id and token id. */
  FTMinted(request: QueryFTMintedRequest): Promise<QueryFTMintedResponse>;
  /** FTBurnt queries the number of burnt tokens from a given contract id and token id. */
  FTBurnt(request: QueryFTBurntRequest): Promise<QueryFTBurntResponse>;
  /** NFTSupply queries the number of tokens from a given contract id and token type. */
  NFTSupply(request: QueryNFTSupplyRequest): Promise<QueryNFTSupplyResponse>;
  /** NFTMinted queries the number of minted tokens from a given contract id and token type. */
  NFTMinted(request: QueryNFTMintedRequest): Promise<QueryNFTMintedResponse>;
  /** NFTBurnt queries the number of burnt tokens from a given contract id and token type. */
  NFTBurnt(request: QueryNFTBurntRequest): Promise<QueryNFTBurntResponse>;
  /** Contract queries a contract metadata based on its contract id. */
  Contract(request: QueryContractRequest): Promise<QueryContractResponse>;
  /**
   * TokenClassTypeName queries the fully qualified message type name of a token class from its class id.
   *
   * Since: 0.46.0 (finschia)
   */
  TokenClassTypeName(
    request: QueryTokenClassTypeNameRequest
  ): Promise<QueryTokenClassTypeNameResponse>;
  /** TokenType queries metadata of a token type. */
  TokenType(request: QueryTokenTypeRequest): Promise<QueryTokenTypeResponse>;
  /** Token queries a metadata of a token from its token id. */
  Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /** Root queries the root of a given nft. */
  Root(request: QueryRootRequest): Promise<QueryRootResponse>;
  /** HasParent queries whether a given nft has its parent. */
  HasParent(request: QueryHasParentRequest): Promise<QueryHasParentResponse>;
  /** Parent queries the parent of a given nft. */
  Parent(request: QueryParentRequest): Promise<QueryParentResponse>;
  /** Children queries the children of a given nft. */
  Children(request: QueryChildrenRequest): Promise<QueryChildrenResponse>;
  /** GranteeGrants queries all permissions on a given grantee. */
  GranteeGrants(
    request: QueryGranteeGrantsRequest
  ): Promise<QueryGranteeGrantsResponse>;
  /** IsOperatorFor queries whether the operator is authorized by the holder. */
  IsOperatorFor(
    request: QueryIsOperatorForRequest
  ): Promise<QueryIsOperatorForResponse>;
  /** HoldersByOperator queries holders of a given operator. */
  HoldersByOperator(
    request: QueryHoldersByOperatorRequest
  ): Promise<QueryHoldersByOperatorResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.AllBalances = this.AllBalances.bind(this);
    this.FTSupply = this.FTSupply.bind(this);
    this.FTMinted = this.FTMinted.bind(this);
    this.FTBurnt = this.FTBurnt.bind(this);
    this.NFTSupply = this.NFTSupply.bind(this);
    this.NFTMinted = this.NFTMinted.bind(this);
    this.NFTBurnt = this.NFTBurnt.bind(this);
    this.Contract = this.Contract.bind(this);
    this.TokenClassTypeName = this.TokenClassTypeName.bind(this);
    this.TokenType = this.TokenType.bind(this);
    this.Token = this.Token.bind(this);
    this.Root = this.Root.bind(this);
    this.HasParent = this.HasParent.bind(this);
    this.Parent = this.Parent.bind(this);
    this.Children = this.Children.bind(this);
    this.GranteeGrants = this.GranteeGrants.bind(this);
    this.IsOperatorFor = this.IsOperatorFor.bind(this);
    this.HoldersByOperator = this.HoldersByOperator.bind(this);
  }
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "Balance",
      data
    );
    return promise.then((data) =>
      QueryBalanceResponse.decode(new _m0.Reader(data))
    );
  }

  AllBalances(
    request: QueryAllBalancesRequest
  ): Promise<QueryAllBalancesResponse> {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "AllBalances",
      data
    );
    return promise.then((data) =>
      QueryAllBalancesResponse.decode(new _m0.Reader(data))
    );
  }

  FTSupply(request: QueryFTSupplyRequest): Promise<QueryFTSupplyResponse> {
    const data = QueryFTSupplyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "FTSupply",
      data
    );
    return promise.then((data) =>
      QueryFTSupplyResponse.decode(new _m0.Reader(data))
    );
  }

  FTMinted(request: QueryFTMintedRequest): Promise<QueryFTMintedResponse> {
    const data = QueryFTMintedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "FTMinted",
      data
    );
    return promise.then((data) =>
      QueryFTMintedResponse.decode(new _m0.Reader(data))
    );
  }

  FTBurnt(request: QueryFTBurntRequest): Promise<QueryFTBurntResponse> {
    const data = QueryFTBurntRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "FTBurnt",
      data
    );
    return promise.then((data) =>
      QueryFTBurntResponse.decode(new _m0.Reader(data))
    );
  }

  NFTSupply(request: QueryNFTSupplyRequest): Promise<QueryNFTSupplyResponse> {
    const data = QueryNFTSupplyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "NFTSupply",
      data
    );
    return promise.then((data) =>
      QueryNFTSupplyResponse.decode(new _m0.Reader(data))
    );
  }

  NFTMinted(request: QueryNFTMintedRequest): Promise<QueryNFTMintedResponse> {
    const data = QueryNFTMintedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "NFTMinted",
      data
    );
    return promise.then((data) =>
      QueryNFTMintedResponse.decode(new _m0.Reader(data))
    );
  }

  NFTBurnt(request: QueryNFTBurntRequest): Promise<QueryNFTBurntResponse> {
    const data = QueryNFTBurntRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "NFTBurnt",
      data
    );
    return promise.then((data) =>
      QueryNFTBurntResponse.decode(new _m0.Reader(data))
    );
  }

  Contract(request: QueryContractRequest): Promise<QueryContractResponse> {
    const data = QueryContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "Contract",
      data
    );
    return promise.then((data) =>
      QueryContractResponse.decode(new _m0.Reader(data))
    );
  }

  TokenClassTypeName(
    request: QueryTokenClassTypeNameRequest
  ): Promise<QueryTokenClassTypeNameResponse> {
    const data = QueryTokenClassTypeNameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "TokenClassTypeName",
      data
    );
    return promise.then((data) =>
      QueryTokenClassTypeNameResponse.decode(new _m0.Reader(data))
    );
  }

  TokenType(request: QueryTokenTypeRequest): Promise<QueryTokenTypeResponse> {
    const data = QueryTokenTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "TokenType",
      data
    );
    return promise.then((data) =>
      QueryTokenTypeResponse.decode(new _m0.Reader(data))
    );
  }

  Token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    const data = QueryTokenRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Token", data);
    return promise.then((data) =>
      QueryTokenResponse.decode(new _m0.Reader(data))
    );
  }

  Root(request: QueryRootRequest): Promise<QueryRootResponse> {
    const data = QueryRootRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Root", data);
    return promise.then((data) =>
      QueryRootResponse.decode(new _m0.Reader(data))
    );
  }

  HasParent(request: QueryHasParentRequest): Promise<QueryHasParentResponse> {
    const data = QueryHasParentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "HasParent",
      data
    );
    return promise.then((data) =>
      QueryHasParentResponse.decode(new _m0.Reader(data))
    );
  }

  Parent(request: QueryParentRequest): Promise<QueryParentResponse> {
    const data = QueryParentRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Parent", data);
    return promise.then((data) =>
      QueryParentResponse.decode(new _m0.Reader(data))
    );
  }

  Children(request: QueryChildrenRequest): Promise<QueryChildrenResponse> {
    const data = QueryChildrenRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "Children",
      data
    );
    return promise.then((data) =>
      QueryChildrenResponse.decode(new _m0.Reader(data))
    );
  }

  GranteeGrants(
    request: QueryGranteeGrantsRequest
  ): Promise<QueryGranteeGrantsResponse> {
    const data = QueryGranteeGrantsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
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
      "lbm.collection.v1.Query",
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
      "lbm.collection.v1.Query",
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
