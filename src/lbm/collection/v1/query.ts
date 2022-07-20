/* eslint-disable */
import {
  Coin,
  Contract,
  TokenType,
  FTClass,
  NFTClass,
  NFT,
  Permission,
  Grant,
  Authorization,
  permissionFromJSON,
  permissionToJSON,
} from "./collection";
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

/**
 * QueryAllBalancesRequest is the request type for the Query/AllBalances RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryAllBalancesRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** address is the address to query the balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryAllBalancesResponse {
  /** balances is the balalces of all the tokens. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QuerySupplyRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** class id associated with the token class. */
  classId: string;
}

/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QuerySupplyResponse {
  /** supply is the supply of the tokens. */
  supply: string;
}

/**
 * QueryMintedRequest is the request type for the Query/Minted RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryMintedRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** class id associated with the token class. */
  classId: string;
}

/**
 * QueryMintedResponse is the response type for the Query/Minted RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryMintedResponse {
  /** minted is the amount of the minted tokens. */
  minted: string;
}

/**
 * QueryBurntRequest is the request type for the Query/Burnt RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryBurntRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** class id associated with the token class. */
  classId: string;
}

/**
 * QueryBurntResponse is the response type for the Query/Burnt RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryBurntResponse {
  /** burnt is the amount of the burnt tokens. */
  burnt: string;
}

/**
 * Deprecated: use QuerySupplyRequest
 *
 * QueryFTSupplyRequest is the request type for the Query/FTSupply RPC method.
 */
export interface QueryFTSupplyRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the fungible token. */
  tokenId: string;
}

/**
 * Deprecated: do not use
 *
 * QueryFTSupplyResponse is the response type for the Query/FTSupply RPC method.
 */
export interface QueryFTSupplyResponse {
  /** supply is the supply of the tokens. */
  supply: string;
}

/**
 * Deprecated: use QueryMintedRequest
 *
 * QueryFTMintedRequest is the request type for the Query/FTMinted RPC method.
 */
export interface QueryFTMintedRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the fungible token. */
  tokenId: string;
}

/**
 * Deprecated: do not use
 *
 * QueryFTMintedResponse is the response type for the Query/FTMinted RPC method.
 */
export interface QueryFTMintedResponse {
  /** minted is the amount of the minted tokens. */
  minted: string;
}

/**
 * Deprecated: use QueryBurntRequest
 *
 * QueryFTBurntRequest is the request type for the Query/FTBurnt RPC method.
 */
export interface QueryFTBurntRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the fungible token. */
  tokenId: string;
}

/**
 * Deprecated: do not use
 *
 * QueryFTBurntResponse is the response type for the Query/FTBurnt RPC method.
 */
export interface QueryFTBurntResponse {
  /** burnt is the amount of the burnt tokens. */
  burnt: string;
}

/**
 * Deprecated: use QuerySupplyRequest
 *
 * QueryNFTSupplyRequest is the request type for the Query/NFTSupply RPC method.
 */
export interface QueryNFTSupplyRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token type associated with the token type. */
  tokenType: string;
}

/**
 * Deprecated: do not use
 *
 * QueryNFTSupplyResponse is the response type for the Query/NFTSupply RPC method.
 */
export interface QueryNFTSupplyResponse {
  /** supply is the supply of the non-fungible token. */
  supply: string;
}

/**
 * Deprecated: use QueryMintedRequest
 *
 * QueryNFTMintedRequest is the request type for the Query/NFTMinted RPC method.
 */
export interface QueryNFTMintedRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token type associated with the token type. */
  tokenType: string;
}

/**
 * Deprecated: do not use
 *
 * QueryNFTMintedResponse is the response type for the Query/NFTMinted RPC method.
 */
export interface QueryNFTMintedResponse {
  /** minted is the amount of minted tokens. */
  minted: string;
}

/**
 * Deprecated: use QueryBurntRequest
 *
 * QueryNFTBurntRequest is the request type for the Query/NFTBurnt RPC method.
 */
export interface QueryNFTBurntRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token type associated with the token type. */
  tokenType: string;
}

/**
 * Deprecated: do not use
 *
 * QueryNFTBurntResponse is the response type for the Query/NFTBurnt RPC method.
 */
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
 * QueryContractsRequest is the request type for the Query/Contracts RPC method.
 * Since: 0.46.0 (finschia)
 */
export interface QueryContractsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryContractsResponse is the response type for the Query/Contracts RPC method.
 * Since: 0.46.0 (finschia)
 */
export interface QueryContractsResponse {
  /** contracts are the informations of all the contracts. */
  contracts: Contract[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * Deprecated: use QueryTokenClassRequest
 *
 * QueryTokenTypeRequest is the request type for the Query/TokenType RPC method.
 */
export interface QueryTokenTypeRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token type associated with the token type. */
  tokenType: string;
}

/**
 * Deprecated: do not use
 *
 * QueryTokenTypeResponse is the response type for the Query/TokenType RPC method.
 */
export interface QueryTokenTypeResponse {
  /** token type is the information of the token type. */
  tokenType?: TokenType;
}

/**
 * Deprecated: do not use
 *
 * QueryTokenTypesRequest is the request type for the Query/TokenTypes RPC method.
 */
export interface QueryTokenTypesRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * Deprecated: do not use
 *
 * QueryTokenTypesResponse is the response type for the Query/TokenTypes RPC method.
 */
export interface QueryTokenTypesResponse {
  /** token types is the informations of all the token types. */
  tokenTypes: TokenType[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * Deprecated: use QueryFTClassRequest or QueryNFTRequest
 *
 * QueryTokenRequest is the request type for the Query/Token RPC method.
 */
export interface QueryTokenRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the fungible token. */
  tokenId: string;
}

/**
 * Deprecated: do not use
 *
 * QueryTokenResponse is the response type for the Query/Token RPC method.
 */
export interface QueryTokenResponse {
  /** information of the token. */
  token?: Any;
}

/**
 * Deprecated: do not use
 *
 * QueryTokensRequest is the request type for the Query/Tokens RPC method.
 */
export interface QueryTokensRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * Deprecated: do not use
 *
 * QueryTokensResponse is the response type for the Query/Tokens RPC method.
 */
export interface QueryTokensResponse {
  /** informations of all the tokens. */
  tokens: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryFTClassRequest is the request type for the Query/FTClass RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryFTClassRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** class id associated with the token class. */
  classId: string;
}

/**
 * QueryFTClassResponse is the response type for the Query/FTClass RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryFTClassResponse {
  /** class is the information of the token class. */
  class?: FTClass;
}

/**
 * QueryNFTClassRequest is the request type for the Query/NFTClass RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryNFTClassRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** class id associated with the token class. */
  classId: string;
}

/**
 * QueryNFTClassResponse is the response type for the Query/NFTClass RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryNFTClassResponse {
  /** class is the information of the token class. */
  class?: NFTClass;
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

/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryNFTRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the non-fungible token. */
  tokenId: string;
}

/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryNFTResponse {
  /** token is the information of the non-fungible token. */
  token?: NFT;
}

/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryOwnerRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** token id associated with the non-fungible token. */
  tokenId: string;
}

/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryOwnerResponse {
  /** owner of the token. */
  owner: string;
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

/**
 * QueryGrantRequest is the request type for the Query/Grant RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryGrantRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the grantee. */
  grantee: string;
  /** permission on the contract. */
  permission: Permission;
}

/**
 * QueryGrantResponse is the response type for the Query/Grant RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryGrantResponse {
  /** if no grant found for the request, it would be nil and return an error. */
  grant?: Grant;
}

/**
 * QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryGranteeGrantsRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the grantee. */
  grantee: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryGranteeGrantsResponse {
  grants: Grant[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryAuthorizationRequest is the request type for the Query/Authorization RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryAuthorizationRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the operator. */
  operator: string;
  /** the address of the token holder. */
  holder: string;
}

/**
 * QueryAuthorizationResponse is the response type for the Query/Authorization RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryAuthorizationResponse {
  /** if no authorization found for the request, it would be nil. */
  authorization?: Authorization;
}

/**
 * QueryOperatorAuthorizationsRequest is the request type for the Query/OperatorAuthorizations RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryOperatorAuthorizationsRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator. */
  operator: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryOperatorAuthorizationsResponse is the response type for the Query/OperatorAuthorizations RPC method.
 *
 * Since: 0.46.0 (finschia)
 */
export interface QueryOperatorAuthorizationsResponse {
  authorizations: Authorization[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * Deprecated: use QueryAuthorizationRequest
 *
 * QueryApprovedRequest is the request type for the Query/Approved RPC method.
 */
export interface QueryApprovedRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the operator. */
  address: string;
  /** the address of the token holder. */
  approver: string;
}

/**
 * Deprecated: do not use
 *
 * QueryApprovedResponse is the response type for the Query/Approved RPC method.
 */
export interface QueryApprovedResponse {
  approved: boolean;
}

/**
 * Deprecated: use QueryOperatorAuthorizations
 *
 * QueryApproversRequest is the request type for the Query/Approvers RPC method.
 */
export interface QueryApproversRequest {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * Deprecated: do not use
 *
 * QueryApproversResponse is the response type for the Query/Approvers RPC method.
 */
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

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return { contractId: "", classId: "" };
}

export const QuerySupplyRequest = {
  encode(
    message: QuerySupplyRequest,
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

  fromJSON(object: any): QuerySupplyRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(
    object: I
  ): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.contractId = object.contractId ?? "";
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return { supply: "" };
}

export const QuerySupplyResponse = {
  encode(
    message: QuerySupplyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.supply !== "") {
      writer.uint32(10).string(message.supply);
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
          message.supply = reader.string();
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
      supply: isSet(object.supply) ? String(object.supply) : "",
    };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = message.supply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(
    object: I
  ): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.supply = object.supply ?? "";
    return message;
  },
};

function createBaseQueryMintedRequest(): QueryMintedRequest {
  return { contractId: "", classId: "" };
}

export const QueryMintedRequest = {
  encode(
    message: QueryMintedRequest,
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

  fromJSON(object: any): QueryMintedRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
    };
  },

  toJSON(message: QueryMintedRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintedRequest>, I>>(
    object: I
  ): QueryMintedRequest {
    const message = createBaseQueryMintedRequest();
    message.contractId = object.contractId ?? "";
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseQueryMintedResponse(): QueryMintedResponse {
  return { minted: "" };
}

export const QueryMintedResponse = {
  encode(
    message: QueryMintedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minted !== "") {
      writer.uint32(10).string(message.minted);
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
          message.minted = reader.string();
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
      minted: isSet(object.minted) ? String(object.minted) : "",
    };
  },

  toJSON(message: QueryMintedResponse): unknown {
    const obj: any = {};
    message.minted !== undefined && (obj.minted = message.minted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintedResponse>, I>>(
    object: I
  ): QueryMintedResponse {
    const message = createBaseQueryMintedResponse();
    message.minted = object.minted ?? "";
    return message;
  },
};

function createBaseQueryBurntRequest(): QueryBurntRequest {
  return { contractId: "", classId: "" };
}

export const QueryBurntRequest = {
  encode(
    message: QueryBurntRequest,
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

  fromJSON(object: any): QueryBurntRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
    };
  },

  toJSON(message: QueryBurntRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBurntRequest>, I>>(
    object: I
  ): QueryBurntRequest {
    const message = createBaseQueryBurntRequest();
    message.contractId = object.contractId ?? "";
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseQueryBurntResponse(): QueryBurntResponse {
  return { burnt: "" };
}

export const QueryBurntResponse = {
  encode(
    message: QueryBurntResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.burnt !== "") {
      writer.uint32(10).string(message.burnt);
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
          message.burnt = reader.string();
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
      burnt: isSet(object.burnt) ? String(object.burnt) : "",
    };
  },

  toJSON(message: QueryBurntResponse): unknown {
    const obj: any = {};
    message.burnt !== undefined && (obj.burnt = message.burnt);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBurntResponse>, I>>(
    object: I
  ): QueryBurntResponse {
    const message = createBaseQueryBurntResponse();
    message.burnt = object.burnt ?? "";
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

function createBaseQueryContractsRequest(): QueryContractsRequest {
  return { pagination: undefined };
}

export const QueryContractsRequest = {
  encode(
    message: QueryContractsRequest,
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
  ): QueryContractsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsRequest();
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

  fromJSON(object: any): QueryContractsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryContractsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractsRequest>, I>>(
    object: I
  ): QueryContractsRequest {
    const message = createBaseQueryContractsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryContractsResponse(): QueryContractsResponse {
  return { contracts: [], pagination: undefined };
}

export const QueryContractsResponse = {
  encode(
    message: QueryContractsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryContractsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryContractsResponse {
    return {
      contracts: Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => Contract.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryContractsResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) =>
        e ? Contract.toJSON(e) : undefined
      );
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryContractsResponse>, I>>(
    object: I
  ): QueryContractsResponse {
    const message = createBaseQueryContractsResponse();
    message.contracts =
      object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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

function createBaseQueryFTClassRequest(): QueryFTClassRequest {
  return { contractId: "", classId: "" };
}

export const QueryFTClassRequest = {
  encode(
    message: QueryFTClassRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFTClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFTClassRequest();
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

  fromJSON(object: any): QueryFTClassRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
    };
  },

  toJSON(message: QueryFTClassRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFTClassRequest>, I>>(
    object: I
  ): QueryFTClassRequest {
    const message = createBaseQueryFTClassRequest();
    message.contractId = object.contractId ?? "";
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseQueryFTClassResponse(): QueryFTClassResponse {
  return { class: undefined };
}

export const QueryFTClassResponse = {
  encode(
    message: QueryFTClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.class !== undefined) {
      FTClass.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFTClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFTClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = FTClass.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFTClassResponse {
    return {
      class: isSet(object.class) ? FTClass.fromJSON(object.class) : undefined,
    };
  },

  toJSON(message: QueryFTClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined &&
      (obj.class = message.class ? FTClass.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFTClassResponse>, I>>(
    object: I
  ): QueryFTClassResponse {
    const message = createBaseQueryFTClassResponse();
    message.class =
      object.class !== undefined && object.class !== null
        ? FTClass.fromPartial(object.class)
        : undefined;
    return message;
  },
};

function createBaseQueryNFTClassRequest(): QueryNFTClassRequest {
  return { contractId: "", classId: "" };
}

export const QueryNFTClassRequest = {
  encode(
    message: QueryNFTClassRequest,
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
  ): QueryNFTClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTClassRequest();
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

  fromJSON(object: any): QueryNFTClassRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
    };
  },

  toJSON(message: QueryNFTClassRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTClassRequest>, I>>(
    object: I
  ): QueryNFTClassRequest {
    const message = createBaseQueryNFTClassRequest();
    message.contractId = object.contractId ?? "";
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseQueryNFTClassResponse(): QueryNFTClassResponse {
  return { class: undefined };
}

export const QueryNFTClassResponse = {
  encode(
    message: QueryNFTClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.class !== undefined) {
      NFTClass.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNFTClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = NFTClass.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTClassResponse {
    return {
      class: isSet(object.class) ? NFTClass.fromJSON(object.class) : undefined,
    };
  },

  toJSON(message: QueryNFTClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined &&
      (obj.class = message.class ? NFTClass.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTClassResponse>, I>>(
    object: I
  ): QueryNFTClassResponse {
    const message = createBaseQueryNFTClassResponse();
    message.class =
      object.class !== undefined && object.class !== null
        ? NFTClass.fromPartial(object.class)
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

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return { contractId: "", tokenId: "" };
}

export const QueryNFTRequest = {
  encode(
    message: QueryNFTRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
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

  fromJSON(object: any): QueryNFTRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(
    object: I
  ): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryNFTResponse(): QueryNFTResponse {
  return { token: undefined };
}

export const QueryNFTResponse = {
  encode(
    message: QueryNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      NFT.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTResponse {
    return {
      token: isSet(object.token) ? NFT.fromJSON(object.token) : undefined,
    };
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? NFT.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTResponse>, I>>(
    object: I
  ): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.token =
      object.token !== undefined && object.token !== null
        ? NFT.fromPartial(object.token)
        : undefined;
    return message;
  },
};

function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return { contractId: "", tokenId: "" };
}

export const QueryOwnerRequest = {
  encode(
    message: QueryOwnerRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
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

  fromJSON(object: any): QueryOwnerRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryOwnerRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerRequest>, I>>(
    object: I
  ): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.contractId = object.contractId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return { owner: "" };
}

export const QueryOwnerResponse = {
  encode(
    message: QueryOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerResponse {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerResponse>, I>>(
    object: I
  ): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
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

function createBaseQueryGrantRequest(): QueryGrantRequest {
  return { contractId: "", grantee: "", permission: 0 };
}

export const QueryGrantRequest = {
  encode(
    message: QueryGrantRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.permission !== 0) {
      writer.uint32(24).int32(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantRequest();
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
          message.permission = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGrantRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permission: isSet(object.permission)
        ? permissionFromJSON(object.permission)
        : 0,
    };
  },

  toJSON(message: QueryGrantRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permission !== undefined &&
      (obj.permission = permissionToJSON(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGrantRequest>, I>>(
    object: I
  ): QueryGrantRequest {
    const message = createBaseQueryGrantRequest();
    message.contractId = object.contractId ?? "";
    message.grantee = object.grantee ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBaseQueryGrantResponse(): QueryGrantResponse {
  return { grant: undefined };
}

export const QueryGrantResponse = {
  encode(
    message: QueryGrantResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGrantResponse {
    return {
      grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined,
    };
  },

  toJSON(message: QueryGrantResponse): unknown {
    const obj: any = {};
    message.grant !== undefined &&
      (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGrantResponse>, I>>(
    object: I
  ): QueryGrantResponse {
    const message = createBaseQueryGrantResponse();
    message.grant =
      object.grant !== undefined && object.grant !== null
        ? Grant.fromPartial(object.grant)
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

function createBaseQueryAuthorizationRequest(): QueryAuthorizationRequest {
  return { contractId: "", operator: "", holder: "" };
}

export const QueryAuthorizationRequest = {
  encode(
    message: QueryAuthorizationRequest,
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
  ): QueryAuthorizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorizationRequest();
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

  fromJSON(object: any): QueryAuthorizationRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
    };
  },

  toJSON(message: QueryAuthorizationRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.holder !== undefined && (obj.holder = message.holder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuthorizationRequest>, I>>(
    object: I
  ): QueryAuthorizationRequest {
    const message = createBaseQueryAuthorizationRequest();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.holder = object.holder ?? "";
    return message;
  },
};

function createBaseQueryAuthorizationResponse(): QueryAuthorizationResponse {
  return { authorization: undefined };
}

export const QueryAuthorizationResponse = {
  encode(
    message: QueryAuthorizationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authorization !== undefined) {
      Authorization.encode(
        message.authorization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuthorizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = Authorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuthorizationResponse {
    return {
      authorization: isSet(object.authorization)
        ? Authorization.fromJSON(object.authorization)
        : undefined,
    };
  },

  toJSON(message: QueryAuthorizationResponse): unknown {
    const obj: any = {};
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Authorization.toJSON(message.authorization)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuthorizationResponse>, I>>(
    object: I
  ): QueryAuthorizationResponse {
    const message = createBaseQueryAuthorizationResponse();
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Authorization.fromPartial(object.authorization)
        : undefined;
    return message;
  },
};

function createBaseQueryOperatorAuthorizationsRequest(): QueryOperatorAuthorizationsRequest {
  return { contractId: "", operator: "", pagination: undefined };
}

export const QueryOperatorAuthorizationsRequest = {
  encode(
    message: QueryOperatorAuthorizationsRequest,
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
  ): QueryOperatorAuthorizationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorAuthorizationsRequest();
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

  fromJSON(object: any): QueryOperatorAuthorizationsRequest {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOperatorAuthorizationsRequest): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOperatorAuthorizationsRequest>, I>
  >(object: I): QueryOperatorAuthorizationsRequest {
    const message = createBaseQueryOperatorAuthorizationsRequest();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOperatorAuthorizationsResponse(): QueryOperatorAuthorizationsResponse {
  return { authorizations: [], pagination: undefined };
}

export const QueryOperatorAuthorizationsResponse = {
  encode(
    message: QueryOperatorAuthorizationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.authorizations) {
      Authorization.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryOperatorAuthorizationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorAuthorizationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorizations.push(
            Authorization.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryOperatorAuthorizationsResponse {
    return {
      authorizations: Array.isArray(object?.authorizations)
        ? object.authorizations.map((e: any) => Authorization.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOperatorAuthorizationsResponse): unknown {
    const obj: any = {};
    if (message.authorizations) {
      obj.authorizations = message.authorizations.map((e) =>
        e ? Authorization.toJSON(e) : undefined
      );
    } else {
      obj.authorizations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOperatorAuthorizationsResponse>, I>
  >(object: I): QueryOperatorAuthorizationsResponse {
    const message = createBaseQueryOperatorAuthorizationsResponse();
    message.authorizations =
      object.authorizations?.map((e) => Authorization.fromPartial(e)) || [];
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
   * Since: 0.46.0 (finschia)
   */
  AllBalances(
    request: QueryAllBalancesRequest
  ): Promise<QueryAllBalancesResponse>;
  /**
   * Supply queries the number of tokens from a given contract id and class id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   * Info: one can query for both fungible tokens and non-fungible token classes.
   * Since: 0.46.0 (finschia)
   */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /**
   * Minted queries the number of minted tokens from a given contract id and class id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   * Info: one can query for both fungible tokens and non-fungible token classes.
   * Since: 0.46.0 (finschia)
   */
  Minted(request: QueryMintedRequest): Promise<QueryMintedResponse>;
  /**
   * Burnt queries the number of burnt tokens from a given contract id and class id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   * Info: one can query for both fungible tokens and non-fungible token classes.
   * Since: 0.46.0 (finschia)
   */
  Burnt(request: QueryBurntRequest): Promise<QueryBurntResponse>;
  /**
   * Deprecated: use Supply
   * FTSupply queries the number of tokens from a given contract id and token id.
   */
  FTSupply(request: QueryFTSupplyRequest): Promise<QueryFTSupplyResponse>;
  /**
   * Deprecated: use Minted
   * FTMinted queries the number of minted tokens from a given contract id and token id.
   */
  FTMinted(request: QueryFTMintedRequest): Promise<QueryFTMintedResponse>;
  /**
   * Deprecated: use Burnt
   * FTBurnt queries the number of burnt tokens from a given contract id and token id.
   */
  FTBurnt(request: QueryFTBurntRequest): Promise<QueryFTBurntResponse>;
  /**
   * Deprecated: use Supply
   * NFTSupply queries the number of tokens from a given contract id and token type.
   */
  NFTSupply(request: QueryNFTSupplyRequest): Promise<QueryNFTSupplyResponse>;
  /**
   * Deprecated: use Minted
   * NFTMinted queries the number of minted tokens from a given contract id and token type.
   */
  NFTMinted(request: QueryNFTMintedRequest): Promise<QueryNFTMintedResponse>;
  /**
   * Deprecated: use Burnt
   * NFTBurnt queries the number of burnt tokens from a given contract id and token type.
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
   * Contracts queries metadata of all contracts.
   * Since: 0.46.0 (finschia)
   */
  Contracts(request: QueryContractsRequest): Promise<QueryContractsResponse>;
  /**
   * FTClass queries a metadata of a fungible token class from its class id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   * Since: 0.46.0 (finschia)
   */
  FTClass(request: QueryFTClassRequest): Promise<QueryFTClassResponse>;
  /**
   * NFTClass queries a metadata of a non-fungible token class from its class id.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `class_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token class of `class_id`.
   * Since: 0.46.0 (finschia)
   */
  NFTClass(request: QueryNFTClassRequest): Promise<QueryNFTClassResponse>;
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
   * Deprecated: use NFTClass
   * TokenType queries metadata of a token type.
   */
  TokenType(request: QueryTokenTypeRequest): Promise<QueryTokenTypeResponse>;
  /**
   * TokenTypes queries metadata of all the token types.
   * Note: deprecated
   */
  TokenTypes(request: QueryTokenTypesRequest): Promise<QueryTokenTypesResponse>;
  /**
   * Deprecated: use FTClass or NFT
   * Token queries a metadata of a token from its token id.
   */
  Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /**
   * Tokens queries all token metadata.
   * Note: deprecated
   */
  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
  /**
   * NFT queries a metadata of a non-fungible token.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `token_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token of `token_id`.
   * Since: 0.46.0 (finschia)
   */
  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  /**
   * Owner queries the owner of the token.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `token_id` is of invalid format.
   * - ErrNotFound
   *   - there is no token of `token_id`.
   * Since: 0.46.0 (finschia)
   */
  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
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
   * Grant queries a permission on a given grantee.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   *   - `permission` is not a valid permission.
   * - ErrInvalidAddress
   *   - `grantee` is of invalid format.
   * - ErrNotFound
   *   - there is no permission of `permission` on `grantee`.
   * Since: 0.46.0 (finschia)
   */
  Grant(request: QueryGrantRequest): Promise<QueryGrantResponse>;
  /**
   * GranteeGrants queries all permissions on a given grantee.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `grantee` is of invalid format.
   * Since: 0.46.0 (finschia)
   */
  GranteeGrants(
    request: QueryGranteeGrantsRequest
  ): Promise<QueryGranteeGrantsResponse>;
  /**
   * Authorization queries an authorization on a given operator approver pair.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `operator` is of invalid format.
   *   - `holder` is of invalid format.
   * - ErrNotFound
   *   - there is no authorization given by `holder` to `operator`.
   * Since: 0.46.0 (finschia)
   */
  Authorization(
    request: QueryAuthorizationRequest
  ): Promise<QueryAuthorizationResponse>;
  /**
   * OperatorAuthorizations queries authorizations on a given operator.
   * Throws:
   * - ErrInvalidRequest
   *   - `contract_id` is of invalid format.
   * - ErrInvalidAddress
   *   - `operator` is of invalid format.
   * Since: 0.46.0 (finschia)
   */
  OperatorAuthorizations(
    request: QueryOperatorAuthorizationsRequest
  ): Promise<QueryOperatorAuthorizationsResponse>;
  /**
   * Deprecated: use Authorization
   * Approved queries whether the operator is approved by the approver.
   */
  Approved(request: QueryApprovedRequest): Promise<QueryApprovedResponse>;
  /**
   * Deprecated: use OperatorAuthorizations
   * Approvers queries approvers of a given operator.
   */
  Approvers(request: QueryApproversRequest): Promise<QueryApproversResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.AllBalances = this.AllBalances.bind(this);
    this.Supply = this.Supply.bind(this);
    this.Minted = this.Minted.bind(this);
    this.Burnt = this.Burnt.bind(this);
    this.FTSupply = this.FTSupply.bind(this);
    this.FTMinted = this.FTMinted.bind(this);
    this.FTBurnt = this.FTBurnt.bind(this);
    this.NFTSupply = this.NFTSupply.bind(this);
    this.NFTMinted = this.NFTMinted.bind(this);
    this.NFTBurnt = this.NFTBurnt.bind(this);
    this.Contract = this.Contract.bind(this);
    this.Contracts = this.Contracts.bind(this);
    this.FTClass = this.FTClass.bind(this);
    this.NFTClass = this.NFTClass.bind(this);
    this.TokenClassTypeName = this.TokenClassTypeName.bind(this);
    this.TokenType = this.TokenType.bind(this);
    this.TokenTypes = this.TokenTypes.bind(this);
    this.Token = this.Token.bind(this);
    this.Tokens = this.Tokens.bind(this);
    this.NFT = this.NFT.bind(this);
    this.Owner = this.Owner.bind(this);
    this.Root = this.Root.bind(this);
    this.Parent = this.Parent.bind(this);
    this.Children = this.Children.bind(this);
    this.Grant = this.Grant.bind(this);
    this.GranteeGrants = this.GranteeGrants.bind(this);
    this.Authorization = this.Authorization.bind(this);
    this.OperatorAuthorizations = this.OperatorAuthorizations.bind(this);
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

  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Supply", data);
    return promise.then((data) =>
      QuerySupplyResponse.decode(new _m0.Reader(data))
    );
  }

  Minted(request: QueryMintedRequest): Promise<QueryMintedResponse> {
    const data = QueryMintedRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Minted", data);
    return promise.then((data) =>
      QueryMintedResponse.decode(new _m0.Reader(data))
    );
  }

  Burnt(request: QueryBurntRequest): Promise<QueryBurntResponse> {
    const data = QueryBurntRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Burnt", data);
    return promise.then((data) =>
      QueryBurntResponse.decode(new _m0.Reader(data))
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

  Contracts(request: QueryContractsRequest): Promise<QueryContractsResponse> {
    const data = QueryContractsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "Contracts",
      data
    );
    return promise.then((data) =>
      QueryContractsResponse.decode(new _m0.Reader(data))
    );
  }

  FTClass(request: QueryFTClassRequest): Promise<QueryFTClassResponse> {
    const data = QueryFTClassRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "FTClass",
      data
    );
    return promise.then((data) =>
      QueryFTClassResponse.decode(new _m0.Reader(data))
    );
  }

  NFTClass(request: QueryNFTClassRequest): Promise<QueryNFTClassResponse> {
    const data = QueryNFTClassRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "NFTClass",
      data
    );
    return promise.then((data) =>
      QueryNFTClassResponse.decode(new _m0.Reader(data))
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

  Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
    const data = QueryTokensRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Tokens", data);
    return promise.then((data) =>
      QueryTokensResponse.decode(new _m0.Reader(data))
    );
  }

  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "NFT", data);
    return promise.then((data) =>
      QueryNFTResponse.decode(new _m0.Reader(data))
    );
  }

  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Owner", data);
    return promise.then((data) =>
      QueryOwnerResponse.decode(new _m0.Reader(data))
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

  Grant(request: QueryGrantRequest): Promise<QueryGrantResponse> {
    const data = QueryGrantRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Query", "Grant", data);
    return promise.then((data) =>
      QueryGrantResponse.decode(new _m0.Reader(data))
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

  Authorization(
    request: QueryAuthorizationRequest
  ): Promise<QueryAuthorizationResponse> {
    const data = QueryAuthorizationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "Authorization",
      data
    );
    return promise.then((data) =>
      QueryAuthorizationResponse.decode(new _m0.Reader(data))
    );
  }

  OperatorAuthorizations(
    request: QueryOperatorAuthorizationsRequest
  ): Promise<QueryOperatorAuthorizationsResponse> {
    const data = QueryOperatorAuthorizationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Query",
      "OperatorAuthorizations",
      data
    );
    return promise.then((data) =>
      QueryOperatorAuthorizationsResponse.decode(new _m0.Reader(data))
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
