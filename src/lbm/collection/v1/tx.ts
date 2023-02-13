/* eslint-disable */
import Long from "long";
import { Coin, Attribute } from "./collection";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.collection.v1";

/** MsgSendFT is the Msg/SendFT request type. */
export interface MsgSendFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /**
   * the amount of the transfer.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/** MsgSendFTResponse is the Msg/SendFT response type. */
export interface MsgSendFTResponse {}

/** MsgOperatorSendFT is the Msg/OperatorSendFT request type. */
export interface MsgOperatorSendFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the operator. */
  operator: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /**
   * the amount of the transfer.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/** MsgOperatorSendFTResponse is the Msg/OperatorSendFT response type. */
export interface MsgOperatorSendFTResponse {}

/** MsgSendNFT is the Msg/SendNFT request type. */
export interface MsgSendNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /** the token ids to transfer. */
  tokenIds: string[];
}

/** MsgSendNFTResponse is the Msg/SendNFT response type. */
export interface MsgSendNFTResponse {}

/** MsgOperatorSendNFT is the Msg/OperatorSendNFT request type. */
export interface MsgOperatorSendNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the operator. */
  operator: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /** the token ids to transfer. */
  tokenIds: string[];
}

/** MsgOperatorSendNFTResponse is the Msg/OperatorSendNFT response type. */
export interface MsgOperatorSendNFTResponse {}

/** MsgAuthorizeOperator is the Msg/AuthorizeOperator request type. */
export interface MsgAuthorizeOperator {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the holder who allows the manipulation of its token. */
  holder: string;
  /** address which the manipulation is allowed to. */
  operator: string;
}

/** MsgAuthorizeOperatorResponse is the Msg/AuthorizeOperator response type. */
export interface MsgAuthorizeOperatorResponse {}

/** MsgRevokeOperator is the Msg/RevokeOperator request type. */
export interface MsgRevokeOperator {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the holder who allows the manipulation of its token. */
  holder: string;
  /** address which the manipulation is allowed to. */
  operator: string;
}

/** MsgRevokeOperatorResponse is the Msg/RevokeOperator response type. */
export interface MsgRevokeOperatorResponse {}

/**
 * MsgCreateContract is the Msg/CreateContract request type.
 *
 * Signer: `owner`
 */
export interface MsgCreateContract {
  /** address which all the permissions on the contract will be granted to (not a permanent property). */
  owner: string;
  /** name defines the human-readable name of the contract. */
  name: string;
  /** uri for the contract image stored off chain. */
  uri: string;
  /** meta is a brief description of the contract. */
  meta: string;
}

/** MsgCreateContractResponse is the Msg/CreateContract response type. */
export interface MsgCreateContractResponse {
  /** id of the new contract. */
  contractId: string;
}

/**
 * MsgIssueFT is the Msg/IssueFT request type.
 *
 * Signer: `owner`
 */
export interface MsgIssueFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** name defines the human-readable name of the token type. */
  name: string;
  /** meta is a brief description of the token type. */
  meta: string;
  /** decimals is the number of decimals which one must divide the amount by to get its user representation. */
  decimals: number;
  /** mintable represents whether the token is allowed to be minted or burnt. */
  mintable: boolean;
  /** the address of the grantee which must have the permission to issue a token. */
  owner: string;
  /** the address to send the minted tokens to. mandatory. */
  to: string;
  /**
   * the amount of tokens to mint on the issuance.
   * Note: if you provide negative amount, a panic may result.
   * Note: amount may be zero.
   */
  amount: string;
}

/** MsgIssueFTResponse is the Msg/IssueFT response type. */
export interface MsgIssueFTResponse {
  /** id of the token. */
  tokenId: string;
}

/**
 * MsgIssueNFT is the Msg/IssueNFT request type.
 *
 * Signer: `owner`
 */
export interface MsgIssueNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** name defines the human-readable name of the token type. */
  name: string;
  /** meta is a brief description of the token type. */
  meta: string;
  /** the address of the grantee which must have the permission to issue a token. */
  owner: string;
}

/** MsgIssueNFTResponse is the Msg/IssueNFT response type. */
export interface MsgIssueNFTResponse {
  /**
   * id of the new token type.
   * refer to TokenType for the definition.
   */
  tokenType: string;
}

/**
 * MsgMintFT is the Msg/MintFT request type.
 *
 * Signer: `from`
 */
export interface MsgMintFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the grantee which has the permission for the mint. */
  from: string;
  /** address which the minted tokens will be sent to. */
  to: string;
  /**
   * the amount of the mint.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/** MsgMintFTResponse is the Msg/MintFT response type. */
export interface MsgMintFTResponse {}

/**
 * MsgMintNFT is the Msg/MintNFT request type.
 *
 * Signer: `from`
 */
export interface MsgMintNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the grantee which has the permission for the mint. */
  from: string;
  /** address which the minted token will be sent to. */
  to: string;
  /** parameters for the minted tokens. */
  params: MintNFTParam[];
}

/** MsgMintNFTResponse is the Msg/MintNFT response type. */
export interface MsgMintNFTResponse {
  /** ids of the new non-fungible tokens. */
  tokenIds: string[];
}

/** MintNFTParam defines a parameter for minting nft. */
export interface MintNFTParam {
  /**
   * token type or class id of the nft.
   * Note: it cannot start with zero.
   * refer to TokenType for the definition.
   */
  tokenType: string;
  /**
   * name defines the human-readable name of the nft (mandatory).
   * Note: it has an app-specific limit in length.
   */
  name: string;
  /**
   * meta is a brief description of the nft.
   * Note: it has an app-specific limit in length.
   */
  meta: string;
}

/** MsgBurnFT is the Msg/BurnFT request type. */
export interface MsgBurnFT {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which the tokens will be burnt from.
   * Note: it must have the permission for the burn.
   */
  from: string;
  /**
   * the amount of the burn.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/** MsgBurnFTResponse is the Msg/BurnFT response type. */
export interface MsgBurnFTResponse {}

/** MsgOperatorBurnFT is the Msg/OperatorBurnFT request type. */
export interface MsgOperatorBurnFT {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which triggers the burn.
   * Note: it must have the permission for the burn.
   * Note: it must have been authorized by from.
   */
  operator: string;
  /** address which the tokens will be burnt from. */
  from: string;
  /**
   * the amount of the burn.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/** MsgOperatorBurnFTResponse is the Msg/OperatorBurnFT response type. */
export interface MsgOperatorBurnFTResponse {}

/** MsgBurnNFT is the Msg/BurnNFT request type. */
export interface MsgBurnNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which the tokens will be burnt from.
   * Note: it must have the permission for the burn.
   */
  from: string;
  /**
   * the token ids to burn.
   * Note: id cannot start with zero.
   */
  tokenIds: string[];
}

/** MsgBurnNFTResponse is the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponse {}

/** MsgOperatorBurnNFT is the Msg/OperatorBurnNFT request type. */
export interface MsgOperatorBurnNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which triggers the burn.
   * Note: it must have the permission for the burn.
   * Note: it must have been authorized by from.
   */
  operator: string;
  /** address which the tokens will be burnt from. */
  from: string;
  /**
   * the token ids to burn.
   * Note: id cannot start with zero.
   */
  tokenIds: string[];
}

/** MsgOperatorBurnNFTResponse is the Msg/OperatorBurnNFT response type. */
export interface MsgOperatorBurnNFTResponse {}

/** MsgModify is the Msg/Modify request type. */
export interface MsgModify {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the grantee which must have modify permission. */
  owner: string;
  /**
   * token type of the token.
   * refer to TokenType for the definition.
   */
  tokenType: string;
  /**
   * token index of the token.
   * if index is empty, it would modify the corresponding token type.
   * if index is not empty, it would modify the corresponding nft.
   * Note: if token type is of FTs, the index cannot be empty.
   */
  tokenIndex: string;
  /**
   * changes to apply.
   * possible attribute keys on modifying collection: name, base_img_uri, meta.
   * possible attribute keys on modifying token type and token: name, meta.
   */
  changes: Attribute[];
}

/** MsgModifyResponse is the Msg/Modify response type. */
export interface MsgModifyResponse {}

/** MsgGrantPermission is the Msg/GrantPermission request type. */
export interface MsgGrantPermission {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the granter which must have the permission to give. */
  from: string;
  /** address of the grantee. */
  to: string;
  /** permission on the contract. */
  permission: string;
}

/** MsgGrantPermissionResponse is the Msg/GrantPermission response type. */
export interface MsgGrantPermissionResponse {}

/** MsgRevokePermission is the Msg/RevokePermission request type. */
export interface MsgRevokePermission {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the grantee which abandons the permission. */
  from: string;
  /** permission on the contract. */
  permission: string;
}

/** MsgRevokePermissionResponse is the Msg/RevokePermission response type. */
export interface MsgRevokePermissionResponse {}

/**
 * MsgAttach is the Msg/Attach request type.
 *
 * Signer: `from`
 */
export interface MsgAttach {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to attach. */
  tokenId: string;
  /** to token id which one attachs the token to. */
  toTokenId: string;
}

/** MsgAttachResponse is the Msg/Attach response type. */
export interface MsgAttachResponse {}

/**
 * MsgDetach is the Msg/Detach request type.
 *
 * Signer: `from`
 */
export interface MsgDetach {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to detach. */
  tokenId: string;
}

/** MsgDetachResponse is the Msg/Detach response type. */
export interface MsgDetachResponse {}

/** MsgOperatorAttach is the Msg/OperatorAttach request type. */
export interface MsgOperatorAttach {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator. */
  operator: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to attach. */
  tokenId: string;
  /** to token id which one attachs the token to. */
  toTokenId: string;
}

/** MsgOperatorAttachResponse is the Msg/OperatorAttach response type. */
export interface MsgOperatorAttachResponse {}

/** MsgOperatorDetach is the Msg/OperatorDetach request type. */
export interface MsgOperatorDetach {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator. */
  operator: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to detach. */
  tokenId: string;
}

/** MsgOperatorDetachResponse is the Msg/OperatorDetach response type. */
export interface MsgOperatorDetachResponse {}

function createBaseMsgSendFT(): MsgSendFT {
  return { contractId: "", from: "", to: "", amount: [] };
}

export const MsgSendFT = {
  encode(
    message: MsgSendFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgSendFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendFT>, I>>(
    object: I
  ): MsgSendFT {
    const message = createBaseMsgSendFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSendFTResponse(): MsgSendFTResponse {
  return {};
}

export const MsgSendFTResponse = {
  encode(
    _: MsgSendFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendFTResponse();
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

  fromJSON(_: any): MsgSendFTResponse {
    return {};
  },

  toJSON(_: MsgSendFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendFTResponse>, I>>(
    _: I
  ): MsgSendFTResponse {
    const message = createBaseMsgSendFTResponse();
    return message;
  },
};

function createBaseMsgOperatorSendFT(): MsgOperatorSendFT {
  return { contractId: "", operator: "", from: "", to: "", amount: [] };
}

export const MsgOperatorSendFT = {
  encode(
    message: MsgOperatorSendFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorSendFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorSendFT();
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
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorSendFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgOperatorSendFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorSendFT>, I>>(
    object: I
  ): MsgOperatorSendFT {
    const message = createBaseMsgOperatorSendFT();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgOperatorSendFTResponse(): MsgOperatorSendFTResponse {
  return {};
}

export const MsgOperatorSendFTResponse = {
  encode(
    _: MsgOperatorSendFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorSendFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorSendFTResponse();
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

  fromJSON(_: any): MsgOperatorSendFTResponse {
    return {};
  },

  toJSON(_: MsgOperatorSendFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorSendFTResponse>, I>>(
    _: I
  ): MsgOperatorSendFTResponse {
    const message = createBaseMsgOperatorSendFTResponse();
    return message;
  },
};

function createBaseMsgSendNFT(): MsgSendNFT {
  return { contractId: "", from: "", to: "", tokenIds: [] };
}

export const MsgSendNFT = {
  encode(
    message: MsgSendNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.tokenIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgSendNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendNFT>, I>>(
    object: I
  ): MsgSendNFT {
    const message = createBaseMsgSendNFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgSendNFTResponse(): MsgSendNFTResponse {
  return {};
}

export const MsgSendNFTResponse = {
  encode(
    _: MsgSendNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendNFTResponse();
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

  fromJSON(_: any): MsgSendNFTResponse {
    return {};
  },

  toJSON(_: MsgSendNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendNFTResponse>, I>>(
    _: I
  ): MsgSendNFTResponse {
    const message = createBaseMsgSendNFTResponse();
    return message;
  },
};

function createBaseMsgOperatorSendNFT(): MsgOperatorSendNFT {
  return { contractId: "", operator: "", from: "", to: "", tokenIds: [] };
}

export const MsgOperatorSendNFT = {
  encode(
    message: MsgOperatorSendNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    for (const v of message.tokenIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorSendNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorSendNFT();
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
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorSendNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgOperatorSendNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorSendNFT>, I>>(
    object: I
  ): MsgOperatorSendNFT {
    const message = createBaseMsgOperatorSendNFT();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgOperatorSendNFTResponse(): MsgOperatorSendNFTResponse {
  return {};
}

export const MsgOperatorSendNFTResponse = {
  encode(
    _: MsgOperatorSendNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorSendNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorSendNFTResponse();
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

  fromJSON(_: any): MsgOperatorSendNFTResponse {
    return {};
  },

  toJSON(_: MsgOperatorSendNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorSendNFTResponse>, I>>(
    _: I
  ): MsgOperatorSendNFTResponse {
    const message = createBaseMsgOperatorSendNFTResponse();
    return message;
  },
};

function createBaseMsgAuthorizeOperator(): MsgAuthorizeOperator {
  return { contractId: "", holder: "", operator: "" };
}

export const MsgAuthorizeOperator = {
  encode(
    message: MsgAuthorizeOperator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.holder !== "") {
      writer.uint32(18).string(message.holder);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAuthorizeOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.holder = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAuthorizeOperator {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: MsgAuthorizeOperator): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.holder !== undefined && (obj.holder = message.holder);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAuthorizeOperator>, I>>(
    object: I
  ): MsgAuthorizeOperator {
    const message = createBaseMsgAuthorizeOperator();
    message.contractId = object.contractId ?? "";
    message.holder = object.holder ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseMsgAuthorizeOperatorResponse(): MsgAuthorizeOperatorResponse {
  return {};
}

export const MsgAuthorizeOperatorResponse = {
  encode(
    _: MsgAuthorizeOperatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAuthorizeOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeOperatorResponse();
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

  fromJSON(_: any): MsgAuthorizeOperatorResponse {
    return {};
  },

  toJSON(_: MsgAuthorizeOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAuthorizeOperatorResponse>, I>>(
    _: I
  ): MsgAuthorizeOperatorResponse {
    const message = createBaseMsgAuthorizeOperatorResponse();
    return message;
  },
};

function createBaseMsgRevokeOperator(): MsgRevokeOperator {
  return { contractId: "", holder: "", operator: "" };
}

export const MsgRevokeOperator = {
  encode(
    message: MsgRevokeOperator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.holder !== "") {
      writer.uint32(18).string(message.holder);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.holder = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeOperator {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: MsgRevokeOperator): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.holder !== undefined && (obj.holder = message.holder);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeOperator>, I>>(
    object: I
  ): MsgRevokeOperator {
    const message = createBaseMsgRevokeOperator();
    message.contractId = object.contractId ?? "";
    message.holder = object.holder ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseMsgRevokeOperatorResponse(): MsgRevokeOperatorResponse {
  return {};
}

export const MsgRevokeOperatorResponse = {
  encode(
    _: MsgRevokeOperatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeOperatorResponse();
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

  fromJSON(_: any): MsgRevokeOperatorResponse {
    return {};
  },

  toJSON(_: MsgRevokeOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeOperatorResponse>, I>>(
    _: I
  ): MsgRevokeOperatorResponse {
    const message = createBaseMsgRevokeOperatorResponse();
    return message;
  },
};

function createBaseMsgCreateContract(): MsgCreateContract {
  return { owner: "", name: "", uri: "", meta: "" };
}

export const MsgCreateContract = {
  encode(
    message: MsgCreateContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateContract {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: MsgCreateContract): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateContract>, I>>(
    object: I
  ): MsgCreateContract {
    const message = createBaseMsgCreateContract();
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseMsgCreateContractResponse(): MsgCreateContractResponse {
  return { contractId: "" };
}

export const MsgCreateContractResponse = {
  encode(
    message: MsgCreateContractResponse,
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
  ): MsgCreateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateContractResponse();
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

  fromJSON(object: any): MsgCreateContractResponse {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
    };
  },

  toJSON(message: MsgCreateContractResponse): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateContractResponse>, I>>(
    object: I
  ): MsgCreateContractResponse {
    const message = createBaseMsgCreateContractResponse();
    message.contractId = object.contractId ?? "";
    return message;
  },
};

function createBaseMsgIssueFT(): MsgIssueFT {
  return {
    contractId: "",
    name: "",
    meta: "",
    decimals: 0,
    mintable: false,
    owner: "",
    to: "",
    amount: "",
  };
}

export const MsgIssueFT = {
  encode(
    message: MsgIssueFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    if (message.decimals !== 0) {
      writer.uint32(32).int32(message.decimals);
    }
    if (message.mintable === true) {
      writer.uint32(40).bool(message.mintable);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    if (message.to !== "") {
      writer.uint32(58).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(66).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        case 4:
          message.decimals = reader.int32();
          break;
        case 5:
          message.mintable = reader.bool();
          break;
        case 6:
          message.owner = reader.string();
          break;
        case 7:
          message.to = reader.string();
          break;
        case 8:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgIssueFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.owner !== undefined && (obj.owner = message.owner);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueFT>, I>>(
    object: I
  ): MsgIssueFT {
    const message = createBaseMsgIssueFT();
    message.contractId = object.contractId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.decimals = object.decimals ?? 0;
    message.mintable = object.mintable ?? false;
    message.owner = object.owner ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgIssueFTResponse(): MsgIssueFTResponse {
  return { tokenId: "" };
}

export const MsgIssueFTResponse = {
  encode(
    message: MsgIssueFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueFTResponse {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: MsgIssueFTResponse): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueFTResponse>, I>>(
    object: I
  ): MsgIssueFTResponse {
    const message = createBaseMsgIssueFTResponse();
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseMsgIssueNFT(): MsgIssueNFT {
  return { contractId: "", name: "", meta: "", owner: "" };
}

export const MsgIssueNFT = {
  encode(
    message: MsgIssueNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgIssueNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueNFT>, I>>(
    object: I
  ): MsgIssueNFT {
    const message = createBaseMsgIssueNFT();
    message.contractId = object.contractId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgIssueNFTResponse(): MsgIssueNFTResponse {
  return { tokenType: "" };
}

export const MsgIssueNFTResponse = {
  encode(
    message: MsgIssueNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenType !== "") {
      writer.uint32(10).string(message.tokenType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueNFTResponse {
    return {
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
    };
  },

  toJSON(message: MsgIssueNFTResponse): unknown {
    const obj: any = {};
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueNFTResponse>, I>>(
    object: I
  ): MsgIssueNFTResponse {
    const message = createBaseMsgIssueNFTResponse();
    message.tokenType = object.tokenType ?? "";
    return message;
  },
};

function createBaseMsgMintFT(): MsgMintFT {
  return { contractId: "", from: "", to: "", amount: [] };
}

export const MsgMintFT = {
  encode(
    message: MsgMintFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgMintFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintFT>, I>>(
    object: I
  ): MsgMintFT {
    const message = createBaseMsgMintFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgMintFTResponse(): MsgMintFTResponse {
  return {};
}

export const MsgMintFTResponse = {
  encode(
    _: MsgMintFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintFTResponse();
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

  fromJSON(_: any): MsgMintFTResponse {
    return {};
  },

  toJSON(_: MsgMintFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintFTResponse>, I>>(
    _: I
  ): MsgMintFTResponse {
    const message = createBaseMsgMintFTResponse();
    return message;
  },
};

function createBaseMsgMintNFT(): MsgMintNFT {
  return { contractId: "", from: "", to: "", params: [] };
}

export const MsgMintNFT = {
  encode(
    message: MsgMintNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.params) {
      MintNFTParam.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.params.push(MintNFTParam.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      params: Array.isArray(object?.params)
        ? object.params.map((e: any) => MintNFTParam.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.params) {
      obj.params = message.params.map((e) =>
        e ? MintNFTParam.toJSON(e) : undefined
      );
    } else {
      obj.params = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFT>, I>>(
    object: I
  ): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.params =
      object.params?.map((e) => MintNFTParam.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return { tokenIds: [] };
}

export const MsgMintNFTResponse = {
  encode(
    message: MsgMintNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokenIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFTResponse {
    return {
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgMintNFTResponse): unknown {
    const obj: any = {};
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTResponse>, I>>(
    object: I
  ): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMintNFTParam(): MintNFTParam {
  return { tokenType: "", name: "", meta: "" };
}

export const MintNFTParam = {
  encode(
    message: MintNFTParam,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenType !== "") {
      writer.uint32(10).string(message.tokenType);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintNFTParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintNFTParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenType = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintNFTParam {
    return {
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: MintNFTParam): unknown {
    const obj: any = {};
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MintNFTParam>, I>>(
    object: I
  ): MintNFTParam {
    const message = createBaseMintNFTParam();
    message.tokenType = object.tokenType ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseMsgBurnFT(): MsgBurnFT {
  return { contractId: "", from: "", amount: [] };
}

export const MsgBurnFT = {
  encode(
    message: MsgBurnFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgBurnFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFT>, I>>(
    object: I
  ): MsgBurnFT {
    const message = createBaseMsgBurnFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgBurnFTResponse(): MsgBurnFTResponse {
  return {};
}

export const MsgBurnFTResponse = {
  encode(
    _: MsgBurnFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFTResponse();
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

  fromJSON(_: any): MsgBurnFTResponse {
    return {};
  },

  toJSON(_: MsgBurnFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFTResponse>, I>>(
    _: I
  ): MsgBurnFTResponse {
    const message = createBaseMsgBurnFTResponse();
    return message;
  },
};

function createBaseMsgOperatorBurnFT(): MsgOperatorBurnFT {
  return { contractId: "", operator: "", from: "", amount: [] };
}

export const MsgOperatorBurnFT = {
  encode(
    message: MsgOperatorBurnFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorBurnFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorBurnFT();
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
          message.from = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorBurnFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgOperatorBurnFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorBurnFT>, I>>(
    object: I
  ): MsgOperatorBurnFT {
    const message = createBaseMsgOperatorBurnFT();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgOperatorBurnFTResponse(): MsgOperatorBurnFTResponse {
  return {};
}

export const MsgOperatorBurnFTResponse = {
  encode(
    _: MsgOperatorBurnFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorBurnFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorBurnFTResponse();
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

  fromJSON(_: any): MsgOperatorBurnFTResponse {
    return {};
  },

  toJSON(_: MsgOperatorBurnFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorBurnFTResponse>, I>>(
    _: I
  ): MsgOperatorBurnFTResponse {
    const message = createBaseMsgOperatorBurnFTResponse();
    return message;
  },
};

function createBaseMsgBurnNFT(): MsgBurnNFT {
  return { contractId: "", from: "", tokenIds: [] };
}

export const MsgBurnNFT = {
  encode(
    message: MsgBurnNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    for (const v of message.tokenIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgBurnNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFT>, I>>(
    object: I
  ): MsgBurnNFT {
    const message = createBaseMsgBurnNFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}

export const MsgBurnNFTResponse = {
  encode(
    _: MsgBurnNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTResponse();
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

  fromJSON(_: any): MsgBurnNFTResponse {
    return {};
  },

  toJSON(_: MsgBurnNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFTResponse>, I>>(
    _: I
  ): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  },
};

function createBaseMsgOperatorBurnNFT(): MsgOperatorBurnNFT {
  return { contractId: "", operator: "", from: "", tokenIds: [] };
}

export const MsgOperatorBurnNFT = {
  encode(
    message: MsgOperatorBurnNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    for (const v of message.tokenIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorBurnNFT();
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
          message.from = reader.string();
          break;
        case 4:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorBurnNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgOperatorBurnNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorBurnNFT>, I>>(
    object: I
  ): MsgOperatorBurnNFT {
    const message = createBaseMsgOperatorBurnNFT();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgOperatorBurnNFTResponse(): MsgOperatorBurnNFTResponse {
  return {};
}

export const MsgOperatorBurnNFTResponse = {
  encode(
    _: MsgOperatorBurnNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorBurnNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorBurnNFTResponse();
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

  fromJSON(_: any): MsgOperatorBurnNFTResponse {
    return {};
  },

  toJSON(_: MsgOperatorBurnNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorBurnNFTResponse>, I>>(
    _: I
  ): MsgOperatorBurnNFTResponse {
    const message = createBaseMsgOperatorBurnNFTResponse();
    return message;
  },
};

function createBaseMsgModify(): MsgModify {
  return {
    contractId: "",
    owner: "",
    tokenType: "",
    tokenIndex: "",
    changes: [],
  };
}

export const MsgModify = {
  encode(
    message: MsgModify,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.tokenType !== "") {
      writer.uint32(26).string(message.tokenType);
    }
    if (message.tokenIndex !== "") {
      writer.uint32(34).string(message.tokenIndex);
    }
    for (const v of message.changes) {
      Attribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModify {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.tokenType = reader.string();
          break;
        case 4:
          message.tokenIndex = reader.string();
          break;
        case 5:
          message.changes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgModify {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
      tokenIndex: isSet(object.tokenIndex) ? String(object.tokenIndex) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgModify): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.tokenIndex !== undefined && (obj.tokenIndex = message.tokenIndex);
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModify>, I>>(
    object: I
  ): MsgModify {
    const message = createBaseMsgModify();
    message.contractId = object.contractId ?? "";
    message.owner = object.owner ?? "";
    message.tokenType = object.tokenType ?? "";
    message.tokenIndex = object.tokenIndex ?? "";
    message.changes =
      object.changes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgModifyResponse(): MsgModifyResponse {
  return {};
}

export const MsgModifyResponse = {
  encode(
    _: MsgModifyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyResponse();
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

  fromJSON(_: any): MsgModifyResponse {
    return {};
  },

  toJSON(_: MsgModifyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModifyResponse>, I>>(
    _: I
  ): MsgModifyResponse {
    const message = createBaseMsgModifyResponse();
    return message;
  },
};

function createBaseMsgGrantPermission(): MsgGrantPermission {
  return { contractId: "", from: "", to: "", permission: "" };
}

export const MsgGrantPermission = {
  encode(
    message: MsgGrantPermission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.permission !== "") {
      writer.uint32(34).string(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.permission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGrantPermission {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      permission: isSet(object.permission) ? String(object.permission) : "",
    };
  },

  toJSON(message: MsgGrantPermission): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.permission !== undefined && (obj.permission = message.permission);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantPermission>, I>>(
    object: I
  ): MsgGrantPermission {
    const message = createBaseMsgGrantPermission();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.permission = object.permission ?? "";
    return message;
  },
};

function createBaseMsgGrantPermissionResponse(): MsgGrantPermissionResponse {
  return {};
}

export const MsgGrantPermissionResponse = {
  encode(
    _: MsgGrantPermissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgGrantPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantPermissionResponse();
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

  fromJSON(_: any): MsgGrantPermissionResponse {
    return {};
  },

  toJSON(_: MsgGrantPermissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantPermissionResponse>, I>>(
    _: I
  ): MsgGrantPermissionResponse {
    const message = createBaseMsgGrantPermissionResponse();
    return message;
  },
};

function createBaseMsgRevokePermission(): MsgRevokePermission {
  return { contractId: "", from: "", permission: "" };
}

export const MsgRevokePermission = {
  encode(
    message: MsgRevokePermission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.permission !== "") {
      writer.uint32(26).string(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokePermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.permission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokePermission {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      permission: isSet(object.permission) ? String(object.permission) : "",
    };
  },

  toJSON(message: MsgRevokePermission): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.permission !== undefined && (obj.permission = message.permission);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokePermission>, I>>(
    object: I
  ): MsgRevokePermission {
    const message = createBaseMsgRevokePermission();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.permission = object.permission ?? "";
    return message;
  },
};

function createBaseMsgRevokePermissionResponse(): MsgRevokePermissionResponse {
  return {};
}

export const MsgRevokePermissionResponse = {
  encode(
    _: MsgRevokePermissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokePermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokePermissionResponse();
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

  fromJSON(_: any): MsgRevokePermissionResponse {
    return {};
  },

  toJSON(_: MsgRevokePermissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokePermissionResponse>, I>>(
    _: I
  ): MsgRevokePermissionResponse {
    const message = createBaseMsgRevokePermissionResponse();
    return message;
  },
};

function createBaseMsgAttach(): MsgAttach {
  return { contractId: "", from: "", tokenId: "", toTokenId: "" };
}

export const MsgAttach = {
  encode(
    message: MsgAttach,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.toTokenId !== "") {
      writer.uint32(34).string(message.toTokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttach {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.toTokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAttach {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      toTokenId: isSet(object.toTokenId) ? String(object.toTokenId) : "",
    };
  },

  toJSON(message: MsgAttach): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.toTokenId !== undefined && (obj.toTokenId = message.toTokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttach>, I>>(
    object: I
  ): MsgAttach {
    const message = createBaseMsgAttach();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    message.toTokenId = object.toTokenId ?? "";
    return message;
  },
};

function createBaseMsgAttachResponse(): MsgAttachResponse {
  return {};
}

export const MsgAttachResponse = {
  encode(
    _: MsgAttachResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttachResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttachResponse();
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

  fromJSON(_: any): MsgAttachResponse {
    return {};
  },

  toJSON(_: MsgAttachResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttachResponse>, I>>(
    _: I
  ): MsgAttachResponse {
    const message = createBaseMsgAttachResponse();
    return message;
  },
};

function createBaseMsgDetach(): MsgDetach {
  return { contractId: "", from: "", tokenId: "" };
}

export const MsgDetach = {
  encode(
    message: MsgDetach,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetach {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
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

  fromJSON(object: any): MsgDetach {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: MsgDetach): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDetach>, I>>(
    object: I
  ): MsgDetach {
    const message = createBaseMsgDetach();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseMsgDetachResponse(): MsgDetachResponse {
  return {};
}

export const MsgDetachResponse = {
  encode(
    _: MsgDetachResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetachResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetachResponse();
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

  fromJSON(_: any): MsgDetachResponse {
    return {};
  },

  toJSON(_: MsgDetachResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDetachResponse>, I>>(
    _: I
  ): MsgDetachResponse {
    const message = createBaseMsgDetachResponse();
    return message;
  },
};

function createBaseMsgOperatorAttach(): MsgOperatorAttach {
  return { contractId: "", operator: "", from: "", tokenId: "", toTokenId: "" };
}

export const MsgOperatorAttach = {
  encode(
    message: MsgOperatorAttach,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.tokenId !== "") {
      writer.uint32(34).string(message.tokenId);
    }
    if (message.toTokenId !== "") {
      writer.uint32(42).string(message.toTokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorAttach {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorAttach();
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
          message.from = reader.string();
          break;
        case 4:
          message.tokenId = reader.string();
          break;
        case 5:
          message.toTokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorAttach {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      toTokenId: isSet(object.toTokenId) ? String(object.toTokenId) : "",
    };
  },

  toJSON(message: MsgOperatorAttach): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.toTokenId !== undefined && (obj.toTokenId = message.toTokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorAttach>, I>>(
    object: I
  ): MsgOperatorAttach {
    const message = createBaseMsgOperatorAttach();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    message.toTokenId = object.toTokenId ?? "";
    return message;
  },
};

function createBaseMsgOperatorAttachResponse(): MsgOperatorAttachResponse {
  return {};
}

export const MsgOperatorAttachResponse = {
  encode(
    _: MsgOperatorAttachResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorAttachResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorAttachResponse();
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

  fromJSON(_: any): MsgOperatorAttachResponse {
    return {};
  },

  toJSON(_: MsgOperatorAttachResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorAttachResponse>, I>>(
    _: I
  ): MsgOperatorAttachResponse {
    const message = createBaseMsgOperatorAttachResponse();
    return message;
  },
};

function createBaseMsgOperatorDetach(): MsgOperatorDetach {
  return { contractId: "", operator: "", from: "", tokenId: "" };
}

export const MsgOperatorDetach = {
  encode(
    message: MsgOperatorDetach,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.tokenId !== "") {
      writer.uint32(34).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorDetach {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorDetach();
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
          message.from = reader.string();
          break;
        case 4:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorDetach {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: MsgOperatorDetach): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorDetach>, I>>(
    object: I
  ): MsgOperatorDetach {
    const message = createBaseMsgOperatorDetach();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseMsgOperatorDetachResponse(): MsgOperatorDetachResponse {
  return {};
}

export const MsgOperatorDetachResponse = {
  encode(
    _: MsgOperatorDetachResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorDetachResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorDetachResponse();
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

  fromJSON(_: any): MsgOperatorDetachResponse {
    return {};
  },

  toJSON(_: MsgOperatorDetachResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorDetachResponse>, I>>(
    _: I
  ): MsgOperatorDetachResponse {
    const message = createBaseMsgOperatorDetachResponse();
    return message;
  },
};

/** Msg defines the collection Msg service. */
export interface Msg {
  /**
   * SendFT defines a method to send fungible tokens from one account to another account.
   * Fires:
   * - EventSent
   * - transfer_ft (deprecated, not typed)
   */
  SendFT(request: MsgSendFT): Promise<MsgSendFTResponse>;
  /**
   * OperatorSendFT defines a method to send fungible tokens from one account to another account by the operator.
   * Fires:
   * - EventSent
   * - transfer_ft_from (deprecated, not typed)
   */
  OperatorSendFT(
    request: MsgOperatorSendFT
  ): Promise<MsgOperatorSendFTResponse>;
  /**
   * SendNFT defines a method to send non-fungible tokens from one account to another account.
   * Fires:
   * - EventSent
   * - transfer_nft (deprecated, not typed)
   * - operation_transfer_nft (deprecated, not typed)
   */
  SendNFT(request: MsgSendNFT): Promise<MsgSendNFTResponse>;
  /**
   * OperatorSendNFT defines a method to send non-fungible tokens from one account to another account by the operator.
   * Fires:
   * - EventSent
   * - transfer_nft_from (deprecated, not typed)
   * - operation_transfer_nft (deprecated, not typed)
   */
  OperatorSendNFT(
    request: MsgOperatorSendNFT
  ): Promise<MsgOperatorSendNFTResponse>;
  /**
   * AuthorizeOperator allows one to send tokens on behalf of the holder.
   * Fires:
   * - EventAuthorizedOperator
   * - approve_collection (deprecated, not typed)
   */
  AuthorizeOperator(
    request: MsgAuthorizeOperator
  ): Promise<MsgAuthorizeOperatorResponse>;
  /**
   * RevokeOperator revokes the authorization of the operator to send the holder's token.
   * Fires:
   * - EventRevokedOperator
   * - disapprove_collection (deprecated, not typed)
   */
  RevokeOperator(
    request: MsgRevokeOperator
  ): Promise<MsgRevokeOperatorResponse>;
  /**
   * CreateContract defines a method to create a contract for collection.
   * it grants `mint`, `burn`, `modify` and `issue` permissions on the contract to its creator.
   * Fires:
   * - EventCreatedContract
   * - create_collection (deprecated, not typed)
   */
  CreateContract(
    request: MsgCreateContract
  ): Promise<MsgCreateContractResponse>;
  /**
   * IssueFT defines a method to create a class of fungible token.
   * Fires:
   * - EventCreatedFTClass
   * - EventMintedFT
   * - issue_ft (deprecated, not typed)
   * Note: it does not grant any permissions to its issuer.
   */
  IssueFT(request: MsgIssueFT): Promise<MsgIssueFTResponse>;
  /**
   * IssueNFT defines a method to create a class of non-fungible token.
   * Fires:
   * - EventCreatedNFTClass
   * - issue_nft (deprecated, not typed)
   * Note: it DOES grant `mint` and `burn` permissions to its issuer.
   */
  IssueNFT(request: MsgIssueNFT): Promise<MsgIssueNFTResponse>;
  /**
   * MintFT defines a method to mint fungible tokens.
   * Fires:
   * - EventMintedFT
   * - mint_ft (deprecated, not typed)
   */
  MintFT(request: MsgMintFT): Promise<MsgMintFTResponse>;
  /**
   * MintNFT defines a method to mint non-fungible tokens.
   * Fires:
   * - EventMintedNFT
   * - mint_nft (deprecated, not typed)
   */
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  /**
   * BurnFT defines a method to burn fungible tokens.
   * Fires:
   * - EventBurned
   * - burn_ft (deprecated, not typed)
   * - burn_nft (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   */
  BurnFT(request: MsgBurnFT): Promise<MsgBurnFTResponse>;
  /**
   * OperatorBurnFT defines a method to burn fungible tokens of the holder by the operator.
   * Fires:
   * - EventBurned
   * - burn_ft_from (deprecated, not typed)
   * - burn_nft_from (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   */
  OperatorBurnFT(
    request: MsgOperatorBurnFT
  ): Promise<MsgOperatorBurnFTResponse>;
  /**
   * BurnNFT defines a method to burn non-fungible tokens.
   * Fires:
   * - EventBurned
   * - burn_ft (deprecated, not typed)
   * - burn_nft (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   */
  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
  /**
   * OperatorBurnNFT defines a method to burn non-fungible tokens of the holder by the operator.
   * Fires:
   * - EventBurned
   * - burn_ft_from (deprecated, not typed)
   * - burn_nft_from (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   */
  OperatorBurnNFT(
    request: MsgOperatorBurnNFT
  ): Promise<MsgOperatorBurnNFTResponse>;
  /**
   * Modify defines a method to modify metadata.
   * Fires:
   * - EventModifiedContract
   * - modify_collection (deprecated, not typed)
   * - EventModifiedTokenClass
   * - modify_token_type (deprecated, not typed)
   * - modify_token (deprecated, not typed)
   * - EventModifiedNFT
   */
  Modify(request: MsgModify): Promise<MsgModifyResponse>;
  /**
   * GrantPermission allows one to mint or burn tokens or modify metadata.
   * Fires:
   * - EventGranted
   * - grant_perm (deprecated, not typed)
   */
  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse>;
  /**
   * RevokePermission abandons a permission.
   * Fires:
   * - EventRenounced
   * - revoke_perm (deprecated, not typed)
   */
  RevokePermission(
    request: MsgRevokePermission
  ): Promise<MsgRevokePermissionResponse>;
  /**
   * Attach defines a method to attach a token to another token.
   * Fires:
   * - EventAttach
   * - attach (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   */
  Attach(request: MsgAttach): Promise<MsgAttachResponse>;
  /**
   * Detach defines a method to detach a token from another token.
   * Fires:
   * - EventDetach
   * - detach (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   */
  Detach(request: MsgDetach): Promise<MsgDetachResponse>;
  /**
   * OperatorAttach defines a method to attach a token to another token by operator.
   * Fires:
   * - EventAttach
   * - attach_from (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   */
  OperatorAttach(
    request: MsgOperatorAttach
  ): Promise<MsgOperatorAttachResponse>;
  /**
   * OperatorDetach defines a method to detach a token from another token by operator.
   * Fires:
   * - EventDetach
   * - detach_from (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   */
  OperatorDetach(
    request: MsgOperatorDetach
  ): Promise<MsgOperatorDetachResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SendFT = this.SendFT.bind(this);
    this.OperatorSendFT = this.OperatorSendFT.bind(this);
    this.SendNFT = this.SendNFT.bind(this);
    this.OperatorSendNFT = this.OperatorSendNFT.bind(this);
    this.AuthorizeOperator = this.AuthorizeOperator.bind(this);
    this.RevokeOperator = this.RevokeOperator.bind(this);
    this.CreateContract = this.CreateContract.bind(this);
    this.IssueFT = this.IssueFT.bind(this);
    this.IssueNFT = this.IssueNFT.bind(this);
    this.MintFT = this.MintFT.bind(this);
    this.MintNFT = this.MintNFT.bind(this);
    this.BurnFT = this.BurnFT.bind(this);
    this.OperatorBurnFT = this.OperatorBurnFT.bind(this);
    this.BurnNFT = this.BurnNFT.bind(this);
    this.OperatorBurnNFT = this.OperatorBurnNFT.bind(this);
    this.Modify = this.Modify.bind(this);
    this.GrantPermission = this.GrantPermission.bind(this);
    this.RevokePermission = this.RevokePermission.bind(this);
    this.Attach = this.Attach.bind(this);
    this.Detach = this.Detach.bind(this);
    this.OperatorAttach = this.OperatorAttach.bind(this);
    this.OperatorDetach = this.OperatorDetach.bind(this);
  }
  SendFT(request: MsgSendFT): Promise<MsgSendFTResponse> {
    const data = MsgSendFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "SendFT", data);
    return promise.then((data) =>
      MsgSendFTResponse.decode(new _m0.Reader(data))
    );
  }

  OperatorSendFT(
    request: MsgOperatorSendFT
  ): Promise<MsgOperatorSendFTResponse> {
    const data = MsgOperatorSendFT.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorSendFT",
      data
    );
    return promise.then((data) =>
      MsgOperatorSendFTResponse.decode(new _m0.Reader(data))
    );
  }

  SendNFT(request: MsgSendNFT): Promise<MsgSendNFTResponse> {
    const data = MsgSendNFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "SendNFT", data);
    return promise.then((data) =>
      MsgSendNFTResponse.decode(new _m0.Reader(data))
    );
  }

  OperatorSendNFT(
    request: MsgOperatorSendNFT
  ): Promise<MsgOperatorSendNFTResponse> {
    const data = MsgOperatorSendNFT.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorSendNFT",
      data
    );
    return promise.then((data) =>
      MsgOperatorSendNFTResponse.decode(new _m0.Reader(data))
    );
  }

  AuthorizeOperator(
    request: MsgAuthorizeOperator
  ): Promise<MsgAuthorizeOperatorResponse> {
    const data = MsgAuthorizeOperator.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "AuthorizeOperator",
      data
    );
    return promise.then((data) =>
      MsgAuthorizeOperatorResponse.decode(new _m0.Reader(data))
    );
  }

  RevokeOperator(
    request: MsgRevokeOperator
  ): Promise<MsgRevokeOperatorResponse> {
    const data = MsgRevokeOperator.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "RevokeOperator",
      data
    );
    return promise.then((data) =>
      MsgRevokeOperatorResponse.decode(new _m0.Reader(data))
    );
  }

  CreateContract(
    request: MsgCreateContract
  ): Promise<MsgCreateContractResponse> {
    const data = MsgCreateContract.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "CreateContract",
      data
    );
    return promise.then((data) =>
      MsgCreateContractResponse.decode(new _m0.Reader(data))
    );
  }

  IssueFT(request: MsgIssueFT): Promise<MsgIssueFTResponse> {
    const data = MsgIssueFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "IssueFT", data);
    return promise.then((data) =>
      MsgIssueFTResponse.decode(new _m0.Reader(data))
    );
  }

  IssueNFT(request: MsgIssueNFT): Promise<MsgIssueNFTResponse> {
    const data = MsgIssueNFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "IssueNFT", data);
    return promise.then((data) =>
      MsgIssueNFTResponse.decode(new _m0.Reader(data))
    );
  }

  MintFT(request: MsgMintFT): Promise<MsgMintFTResponse> {
    const data = MsgMintFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "MintFT", data);
    return promise.then((data) =>
      MsgMintFTResponse.decode(new _m0.Reader(data))
    );
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "MintNFT", data);
    return promise.then((data) =>
      MsgMintNFTResponse.decode(new _m0.Reader(data))
    );
  }

  BurnFT(request: MsgBurnFT): Promise<MsgBurnFTResponse> {
    const data = MsgBurnFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "BurnFT", data);
    return promise.then((data) =>
      MsgBurnFTResponse.decode(new _m0.Reader(data))
    );
  }

  OperatorBurnFT(
    request: MsgOperatorBurnFT
  ): Promise<MsgOperatorBurnFTResponse> {
    const data = MsgOperatorBurnFT.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorBurnFT",
      data
    );
    return promise.then((data) =>
      MsgOperatorBurnFTResponse.decode(new _m0.Reader(data))
    );
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "BurnNFT", data);
    return promise.then((data) =>
      MsgBurnNFTResponse.decode(new _m0.Reader(data))
    );
  }

  OperatorBurnNFT(
    request: MsgOperatorBurnNFT
  ): Promise<MsgOperatorBurnNFTResponse> {
    const data = MsgOperatorBurnNFT.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorBurnNFT",
      data
    );
    return promise.then((data) =>
      MsgOperatorBurnNFTResponse.decode(new _m0.Reader(data))
    );
  }

  Modify(request: MsgModify): Promise<MsgModifyResponse> {
    const data = MsgModify.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Modify", data);
    return promise.then((data) =>
      MsgModifyResponse.decode(new _m0.Reader(data))
    );
  }

  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse> {
    const data = MsgGrantPermission.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "GrantPermission",
      data
    );
    return promise.then((data) =>
      MsgGrantPermissionResponse.decode(new _m0.Reader(data))
    );
  }

  RevokePermission(
    request: MsgRevokePermission
  ): Promise<MsgRevokePermissionResponse> {
    const data = MsgRevokePermission.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "RevokePermission",
      data
    );
    return promise.then((data) =>
      MsgRevokePermissionResponse.decode(new _m0.Reader(data))
    );
  }

  Attach(request: MsgAttach): Promise<MsgAttachResponse> {
    const data = MsgAttach.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Attach", data);
    return promise.then((data) =>
      MsgAttachResponse.decode(new _m0.Reader(data))
    );
  }

  Detach(request: MsgDetach): Promise<MsgDetachResponse> {
    const data = MsgDetach.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Detach", data);
    return promise.then((data) =>
      MsgDetachResponse.decode(new _m0.Reader(data))
    );
  }

  OperatorAttach(
    request: MsgOperatorAttach
  ): Promise<MsgOperatorAttachResponse> {
    const data = MsgOperatorAttach.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorAttach",
      data
    );
    return promise.then((data) =>
      MsgOperatorAttachResponse.decode(new _m0.Reader(data))
    );
  }

  OperatorDetach(
    request: MsgOperatorDetach
  ): Promise<MsgOperatorDetachResponse> {
    const data = MsgOperatorDetach.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorDetach",
      data
    );
    return promise.then((data) =>
      MsgOperatorDetachResponse.decode(new _m0.Reader(data))
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
