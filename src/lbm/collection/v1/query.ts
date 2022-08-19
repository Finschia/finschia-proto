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
  /** token type associated with the token type. */
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
  /** token type associated with the token type. */
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
  /** token type associated with the token type. */
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
  /** token type associated with the token type. */
  tokenType: string;
}

/** QueryTokenTypeResponse is the response type for the Query/TokenType RPC method. */
export interface QueryTokenTypeResponse {
  /** token type is the information of the token type. */
  tokenType?: TokenType;
}

/** QueryTokenTypesRequest is the request type for the Query/TokenTypes RPC method. */
export interface QueryTokenTypesRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryTokenTypesResponse is the response type for the Query/TokenTypes RPC method. */
export interface QueryTokenTypesResponse {
  /** token types is the informations of all the token types. */
  tokenTypes: TokenType[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
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

/** QueryTokensWithTokenTypeRequest is the request type for the Query/TokensWithTokenType RPC method. */
export interface QueryTokensWithTokenTypeRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token type associated with the token type. */
  tokenType: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryTokensWithTokenTypeResponse is the response type for the Query/TokensWithTokenType RPC method. */
export interface QueryTokensWithTokenTypeResponse {
  /** informations of all the tokens. */
  tokens: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryTokensRequest is the request type for the Query/Tokens RPC method. */
export interface QueryTokensRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryTokensResponse is the response type for the Query/Tokens RPC method. */
export interface QueryTokensResponse {
  /** informations of all the tokens. */
  tokens: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
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

/** QueryParentRequest is the request type for the Query/Parent RPC method. */
export interface QueryParentRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated wit the non-fungible token. */
  tokenId: string;
}

/** QueryParentResponse is the response type for the Query/Parent RPC method. */
export interface QueryParentResponse {
  /**
   * parent is the information of the parent token.
   * if there is no parent for the token, it would return nil.
   */
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

/** QueryApprovedRequest is the request type for the Query/Approved RPC method. */
export interface QueryApprovedRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the proxy. */
  address: string;
  /** the address of the token approver. */
  approver: string;
}

/** QueryApprovedResponse is the response type for the Query/Approved RPC method. */
export interface QueryApprovedResponse {
  approved: boolean;
}

/** QueryApproversRequest is the request type for the Query/Approvers RPC method. */
export interface QueryApproversRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the proxy. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryApproversResponse is the response type for the Query/Approvers RPC method. */
export interface QueryApproversResponse {
  approvers: string[];
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

function createBaseQueryTokenTypesRequest(): QueryTokenTypesRequest {
  return { contractId: "", pagination: undefined };
}

export const QueryTokenTypesRequest = {
  encode(
    message: QueryTokenTypesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenTypesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenTypesRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenTypesRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenTypesRequest>, I>>(
    object: I
  ): QueryTokenTypesRequest {
    const message = createBaseQueryTokenTypesRequest();
    message.contractId = object.contractId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenTypesResponse(): QueryTokenTypesResponse {
  return { tokenTypes: [], pagination: undefined };
}

export const QueryTokenTypesResponse = {
  encode(
    message: QueryTokenTypesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokenTypes) {
      TokenType.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryTokenTypesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenTypes.push(TokenType.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTokenTypesResponse {
    return {
      tokenTypes: Array.isArray(object?.tokenTypes)
        ? object.tokenTypes.map((e: any) => TokenType.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenTypesResponse): unknown {
    const obj: any = {};
    if (message.tokenTypes) {
      obj.tokenTypes = message.tokenTypes.map((e) =>
        e ? TokenType.toJSON(e) : undefined
      );
    } else {
      obj.tokenTypes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenTypesResponse>, I>>(
    object: I
  ): QueryTokenTypesResponse {
    const message = createBaseQueryTokenTypesResponse();
    message.tokenTypes =
      object.tokenTypes?.map((e) => TokenType.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
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

function createBaseQueryTokensWithTokenTypeRequest(): QueryTokensWithTokenTypeRequest {
  return { contractId: "", tokenType: "", pagination: undefined };
}

export const QueryTokensWithTokenTypeRequest = {
  encode(
    message: QueryTokensWithTokenTypeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.tokenType !== "") {
      writer.uint32(18).string(message.tokenType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokensWithTokenTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensWithTokenTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenType = reader.string();
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

  fromJSON(object: any): QueryTokensWithTokenTypeRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokensWithTokenTypeRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokensWithTokenTypeRequest>, I>>(
    object: I
  ): QueryTokensWithTokenTypeRequest {
    const message = createBaseQueryTokensWithTokenTypeRequest();
    message.contractId = object.contractId ?? "";
    message.tokenType = object.tokenType ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokensWithTokenTypeResponse(): QueryTokensWithTokenTypeResponse {
  return { tokens: [], pagination: undefined };
}

export const QueryTokensWithTokenTypeResponse = {
  encode(
    message: QueryTokensWithTokenTypeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokens) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryTokensWithTokenTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensWithTokenTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTokensWithTokenTypeResponse {
    return {
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => Any.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokensWithTokenTypeResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokensWithTokenTypeResponse>, I>
  >(object: I): QueryTokensWithTokenTypeResponse {
    const message = createBaseQueryTokensWithTokenTypeResponse();
    message.tokens = object.tokens?.map((e) => Any.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokensRequest(): QueryTokensRequest {
  return { contractId: "", pagination: undefined };
}

export const QueryTokensRequest = {
  encode(
    message: QueryTokensRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.contractId = reader.string();
          break;
        case 2:
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
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokensRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
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
    message.contractId = object.contractId ?? "";
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
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.tokens.push(Any.decode(reader, reader.uint32()));
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
        ? object.tokens.map((e: any) => Any.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokensResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? Any.toJSON(e) : undefined));
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
    message.tokens = object.tokens?.map((e) => Any.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
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

function createBaseQueryApprovedRequest(): QueryApprovedRequest {
  return { contractId: "", address: "", approver: "" };
}

export const QueryApprovedRequest = {
  encode(
    message: QueryApprovedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
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
          message.address = reader.string();
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
      address: isSet(object.address) ? String(object.address) : "",
      approver: isSet(object.approver) ? String(object.approver) : "",
    };
  },

  toJSON(message: QueryApprovedRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.address !== undefined && (obj.address = message.address);
    message.approver !== undefined && (obj.approver = message.approver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApprovedRequest>, I>>(
    object: I
  ): QueryApprovedRequest {
    const message = createBaseQueryApprovedRequest();
    message.contractId = object.contractId ?? "";
    message.address = object.address ?? "";
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
   * Balance queries the balance of a single token class for a single account.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `address` is of invalid format.
   */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /**
   * AllBalances queries the balance of all token classes for a single account.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `address` is of invalid format.
   */
  AllBalances(
    request: QueryAllBalancesRequest
  ): Promise<QueryAllBalancesResponse>;
  /**
   * FTSupply queries the number of tokens from a given contract id and token id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   */
  FTSupply(request: QueryFTSupplyRequest): Promise<QueryFTSupplyResponse>;
  /**
   * FTMinted queries the number of minted tokens from a given contract id and token id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   */
  FTMinted(request: QueryFTMintedRequest): Promise<QueryFTMintedResponse>;
  /**
   * FTBurnt queries the number of burnt tokens from a given contract id and token id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   */
  FTBurnt(request: QueryFTBurntRequest): Promise<QueryFTBurntResponse>;
  /**
   * NFTSupply queries the number of tokens from a given contract id and token type.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   */
  NFTSupply(request: QueryNFTSupplyRequest): Promise<QueryNFTSupplyResponse>;
  /**
   * NFTMinted queries the number of minted tokens from a given contract id and token type.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   */
  NFTMinted(request: QueryNFTMintedRequest): Promise<QueryNFTMintedResponse>;
  /**
   * NFTBurnt queries the number of burnt tokens from a given contract id and token type.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   */
  NFTBurnt(request: QueryNFTBurntRequest): Promise<QueryNFTBurntResponse>;
  /**
   * Contract queries a contract metadata based on its contract id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrNotFound
   *   - there is no contract of `contract_id`.
   */
  Contract(request: QueryContractRequest): Promise<QueryContractResponse>;
  /**
   * TokenClassTypeName queries the fully qualified message type name of a token class from its class id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   * Since: 0.46.0 (finschia)
   */
  TokenClassTypeName(
    request: QueryTokenClassTypeNameRequest
  ): Promise<QueryTokenClassTypeNameResponse>;
  /**
   * TokenType queries metadata of a token type.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   */
  TokenType(request: QueryTokenTypeRequest): Promise<QueryTokenTypeResponse>;
  /**
   * TokenTypes queries metadata of all the token types.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token contract of `contract_id`.
   */
  TokenTypes(request: QueryTokenTypesRequest): Promise<QueryTokenTypesResponse>;
  /**
   * Token queries a metadata of a token from its token id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `token_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token of `token_id`.
   */
  Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /**
   * TokensWithTokenType queries all token metadata with token type.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `token_type` is of invalid format.
   * - ErrNotFound
   *   - there is no contract of `contract_id`.
   */
  TokensWithTokenType(
    request: QueryTokensWithTokenTypeRequest
  ): Promise<QueryTokensWithTokenTypeResponse>;
  /**
   * Tokens queries all token metadata.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrNotFound
   *   - there is no contract of `contract_id`.
   */
  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
  /**
   * Root queries the root of a given nft.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `token_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token of `token_id`.
   */
  Root(request: QueryRootRequest): Promise<QueryRootResponse>;
  /**
   * Parent queries the parent of a given nft.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `token_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token of `token_id`.
   *   - token is the root.
   */
  Parent(request: QueryParentRequest): Promise<QueryParentResponse>;
  /**
   * Children queries the children of a given nft.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `token_id` is of invalid format.
   */
  Children(request: QueryChildrenRequest): Promise<QueryChildrenResponse>;
  /**
   * GranteeGrants queries all permissions on a given grantee.
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
   * Approved queries whether the proxy is approved by the approver.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `proxy` is of invalid format.
   *   - `approver` is of invalid format.
   * - ErrNotFound
   *   - there is no authorization given by `approver` to `proxy`.
   */
  Approved(request: QueryApprovedRequest): Promise<QueryApprovedResponse>;
  /**
   * Approvers queries approvers of a given proxy.
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
    this.TokenTypes = this.TokenTypes.bind(this);
    this.Token = this.Token.bind(this);
    this.TokensWithTokenType = this.TokensWithTokenType.bind(this);
    this.Tokens = this.Tokens.bind(this);
    this.Root = this.Root.bind(this);
    this.Parent = this.Parent.bind(this);
    this.Children = this.Children.bind(this);
    this.GranteeGrants = this.GranteeGrants.bind(this);
    this.Approved = this.Approved.bind(this);
    this.Approvers = this.Approvers.bind(this);
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

  TokenTypes(
    request: QueryTokenTypesRequest
  ): Promise<QueryTokenTypesResponse> {
    const data = QueryTokenTypesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "TokenTypes",
      data
    );
    return promise.then((data) =>
      QueryTokenTypesResponse.decode(new _m0.Reader(data))
    );
  }

  Token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    const data = QueryTokenRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Token", data);
    return promise.then((data) =>
      QueryTokenResponse.decode(new _m0.Reader(data))
    );
  }

  TokensWithTokenType(
    request: QueryTokensWithTokenTypeRequest
  ): Promise<QueryTokensWithTokenTypeResponse> {
    const data = QueryTokensWithTokenTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "TokensWithTokenType",
      data
    );
    return promise.then((data) =>
      QueryTokensWithTokenTypeResponse.decode(new _m0.Reader(data))
    );
  }

  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
    const data = QueryTokensRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Tokens", data);
    return promise.then((data) =>
      QueryTokensResponse.decode(new _m0.Reader(data))
    );
  }

  Root(request: QueryRootRequest): Promise<QueryRootResponse> {
    const data = QueryRootRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Root", data);
    return promise.then((data) =>
      QueryRootResponse.decode(new _m0.Reader(data))
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

  Approved(request: QueryApprovedRequest): Promise<QueryApprovedResponse> {
    const data = QueryApprovedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "Approved",
      data
    );
    return promise.then((data) =>
      QueryApprovedResponse.decode(new _m0.Reader(data))
    );
  }

  Approvers(request: QueryApproversRequest): Promise<QueryApproversResponse> {
    const data = QueryApproversRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "Approvers",
      data
    );
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
