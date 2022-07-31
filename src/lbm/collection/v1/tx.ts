/* eslint-disable */
import Long from "long";
import { Coin, Change } from "./collection";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.collection.v1";

/** MsgTransferFT is the Msg/TransferFT request type. */
export interface MsgTransferFT {
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

/** MsgTransferFTResponse is the Msg/TransferFT response type. */
export interface MsgTransferFTResponse {}

/** MsgTransferFTFrom is the Msg/TransferFTFrom request type. */
export interface MsgTransferFTFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the proxy. */
  proxy: string;
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

/** MsgTransferFTFromResponse is the Msg/TransferFTFrom response type. */
export interface MsgTransferFTFromResponse {}

/** MsgTransferNFT is the Msg/TransferNFT request type. */
export interface MsgTransferNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /** the token ids to transfer. */
  tokenIds: string[];
}

/** MsgTransferNFTResponse is the Msg/TransferNFT response type. */
export interface MsgTransferNFTResponse {}

/** MsgTransferNFTFrom is the Msg/TransferNFTFrom request type. */
export interface MsgTransferNFTFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the proxy. */
  proxy: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /** the token ids to transfer. */
  tokenIds: string[];
}

/** MsgTransferNFTFromResponse is the Msg/TransferNFTFrom response type. */
export interface MsgTransferNFTFromResponse {}

/** MsgApprove is the Msg/Approve request type. */
export interface MsgApprove {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the approver who allows the manipulation of its token. */
  approver: string;
  /** address which the manipulation is allowed to. */
  proxy: string;
}

/** MsgApproveResponse is the Msg/Approve response type. */
export interface MsgApproveResponse {}

/** MsgDisapprove is the Msg/Disapprove request type. */
export interface MsgDisapprove {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the approver who allows the manipulation of its token. */
  approver: string;
  /** address which the manipulation is allowed to. */
  proxy: string;
}

/** MsgDisapproveResponse is the Msg/Disapprove response type. */
export interface MsgDisapproveResponse {}

/**
 * MsgCreateContract is the Msg/CreateContract request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `owner` is of invalid format.
 * - ErrInvalidRequest
 *   - `name` exceeds the app-specific limit in length.
 *   - `base_img_uri` exceeds the app-specific limit in length.
 *   - `meta` exceeds the app-specific limit in length.
 *
 * Signer: `owner`
 */
export interface MsgCreateContract {
  /** address which all the permissions on the contract will be granted to (not a permanent property). */
  owner: string;
  /** name defines the human-readable name of the contract. */
  name: string;
  /** base img uri is an uri for the contract image stored off chain. */
  baseImgUri: string;
  /** meta is a brief description of the contract. */
  meta: string;
}

/** MsgCreateContractResponse is the Msg/CreateContract response type. */
export interface MsgCreateContractResponse {
  /** id of the new contract. */
  id: string;
}

/**
 * MsgIssueFT is the Msg/IssueFT request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `owner` is of invalid format.
 *   - `to` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `name` is empty.
 *   - `name` exceeds the app-specific limit in length.
 *   - `meta` exceeds the app-specific limit in length.
 *   - `decimals` is lesser than 0 or greater than 18.
 *   - `amount` is not positive.
 *   - `mintable` == false, amount == 1 and decimals == 0 (weird, but for the backward compatibility).
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
  /** id of the new token type. */
  id: string;
}

/**
 * MsgIssueNFT is the Msg/IssueNFT request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `owner` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `name` exceeds the app-specific limit in length.
 *   - `meta` exceeds the app-specific limit in length.
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
  /** id of the new token type. */
  id: string;
}

/**
 * MsgMintFT is the Msg/MintFT request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 *   - `to` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `amount` is not positive.
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
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 *   - `to` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `params` is empty.
 *   - `params` has an invalid element.
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
  ids: string[];
}

/** MintNFTParam defines a parameter for minting nft. */
export interface MintNFTParam {
  /**
   * token type or class id of the nft.
   * Note: it cannot start with zero.
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

/** MsgBurnFTFrom is the Msg/BurnFTFrom request type. */
export interface MsgBurnFTFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which triggers the burn.
   * Note: it must have the permission for the burn.
   * Note: it must have been authorized by from.
   */
  proxy: string;
  /** address which the tokens will be burnt from. */
  from: string;
  /**
   * the amount of the burn.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/** MsgBurnFTFromResponse is the Msg/BurnFTFrom response type. */
export interface MsgBurnFTFromResponse {}

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

/** MsgBurnNFTFrom is the Msg/BurnNFTFrom request type. */
export interface MsgBurnNFTFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which triggers the burn.
   * Note: it must have the permission for the burn.
   * Note: it must have been authorized by from.
   */
  proxy: string;
  /** address which the tokens will be burnt from. */
  from: string;
  /**
   * the token ids to burn.
   * Note: id cannot start with zero.
   */
  tokenIds: string[];
}

/** MsgBurnNFTFromResponse is the Msg/BurnNFTFrom response type. */
export interface MsgBurnNFTFromResponse {}

/** MsgModify is the Msg/Modify request type. */
export interface MsgModify {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the grantee which must have modify permission. */
  owner: string;
  /** token type of the token. */
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
   * on modifying collection: name, base_img_uri, meta.
   * on modifying token type and token: name, meta.
   */
  changes: Change[];
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
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `token_id` is of invalid format.
 *   - `to_token_id` is of invalid format.
 *   - `token_id` is equal to `to_token_id`.
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
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `token_id` is of invalid format.
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

/** MsgAttachFrom is the Msg/AttachFrom request type. */
export interface MsgAttachFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the proxy. */
  proxy: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to attach. */
  tokenId: string;
  /** to token id which one attachs the token to. */
  toTokenId: string;
}

/** MsgAttachFromResponse is the Msg/AttachFrom response type. */
export interface MsgAttachFromResponse {}

/** MsgDetachFrom is the Msg/DetachFrom request type. */
export interface MsgDetachFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the proxy. */
  proxy: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to detach. */
  tokenId: string;
}

/** MsgDetachFromResponse is the Msg/DetachFrom response type. */
export interface MsgDetachFromResponse {}

function createBaseMsgTransferFT(): MsgTransferFT {
  return { contractId: "", from: "", to: "", amount: [] };
}

export const MsgTransferFT = {
  encode(
    message: MsgTransferFT,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFT();
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

  fromJSON(object: any): MsgTransferFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgTransferFT): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MsgTransferFT>, I>>(
    object: I
  ): MsgTransferFT {
    const message = createBaseMsgTransferFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgTransferFTResponse(): MsgTransferFTResponse {
  return {};
}

export const MsgTransferFTResponse = {
  encode(
    _: MsgTransferFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFTResponse();
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

  fromJSON(_: any): MsgTransferFTResponse {
    return {};
  },

  toJSON(_: MsgTransferFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferFTResponse>, I>>(
    _: I
  ): MsgTransferFTResponse {
    const message = createBaseMsgTransferFTResponse();
    return message;
  },
};

function createBaseMsgTransferFTFrom(): MsgTransferFTFrom {
  return { contractId: "", proxy: "", from: "", to: "", amount: [] };
}

export const MsgTransferFTFrom = {
  encode(
    message: MsgTransferFTFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferFTFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFTFrom();
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

  fromJSON(object: any): MsgTransferFTFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgTransferFTFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferFTFrom>, I>>(
    object: I
  ): MsgTransferFTFrom {
    const message = createBaseMsgTransferFTFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgTransferFTFromResponse(): MsgTransferFTFromResponse {
  return {};
}

export const MsgTransferFTFromResponse = {
  encode(
    _: MsgTransferFTFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferFTFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFTFromResponse();
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

  fromJSON(_: any): MsgTransferFTFromResponse {
    return {};
  },

  toJSON(_: MsgTransferFTFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferFTFromResponse>, I>>(
    _: I
  ): MsgTransferFTFromResponse {
    const message = createBaseMsgTransferFTFromResponse();
    return message;
  },
};

function createBaseMsgTransferNFT(): MsgTransferNFT {
  return { contractId: "", from: "", to: "", tokenIds: [] };
}

export const MsgTransferNFT = {
  encode(
    message: MsgTransferNFT,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFT();
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

  fromJSON(object: any): MsgTransferNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgTransferNFT): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFT>, I>>(
    object: I
  ): MsgTransferNFT {
    const message = createBaseMsgTransferNFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgTransferNFTResponse(): MsgTransferNFTResponse {
  return {};
}

export const MsgTransferNFTResponse = {
  encode(
    _: MsgTransferNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTResponse();
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

  fromJSON(_: any): MsgTransferNFTResponse {
    return {};
  },

  toJSON(_: MsgTransferNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTResponse>, I>>(
    _: I
  ): MsgTransferNFTResponse {
    const message = createBaseMsgTransferNFTResponse();
    return message;
  },
};

function createBaseMsgTransferNFTFrom(): MsgTransferNFTFrom {
  return { contractId: "", proxy: "", from: "", to: "", tokenIds: [] };
}

export const MsgTransferNFTFrom = {
  encode(
    message: MsgTransferNFTFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFTFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTFrom();
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

  fromJSON(object: any): MsgTransferNFTFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgTransferNFTFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTFrom>, I>>(
    object: I
  ): MsgTransferNFTFrom {
    const message = createBaseMsgTransferNFTFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgTransferNFTFromResponse(): MsgTransferNFTFromResponse {
  return {};
}

export const MsgTransferNFTFromResponse = {
  encode(
    _: MsgTransferNFTFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferNFTFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTFromResponse();
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

  fromJSON(_: any): MsgTransferNFTFromResponse {
    return {};
  },

  toJSON(_: MsgTransferNFTFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTFromResponse>, I>>(
    _: I
  ): MsgTransferNFTFromResponse {
    const message = createBaseMsgTransferNFTFromResponse();
    return message;
  },
};

function createBaseMsgApprove(): MsgApprove {
  return { contractId: "", approver: "", proxy: "" };
}

export const MsgApprove = {
  encode(
    message: MsgApprove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.approver !== "") {
      writer.uint32(18).string(message.approver);
    }
    if (message.proxy !== "") {
      writer.uint32(26).string(message.proxy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApprove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.approver = reader.string();
          break;
        case 3:
          message.proxy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApprove {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      approver: isSet(object.approver) ? String(object.approver) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
    };
  },

  toJSON(message: MsgApprove): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.approver !== undefined && (obj.approver = message.approver);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApprove>, I>>(
    object: I
  ): MsgApprove {
    const message = createBaseMsgApprove();
    message.contractId = object.contractId ?? "";
    message.approver = object.approver ?? "";
    message.proxy = object.proxy ?? "";
    return message;
  },
};

function createBaseMsgApproveResponse(): MsgApproveResponse {
  return {};
}

export const MsgApproveResponse = {
  encode(
    _: MsgApproveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveResponse();
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

  fromJSON(_: any): MsgApproveResponse {
    return {};
  },

  toJSON(_: MsgApproveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveResponse>, I>>(
    _: I
  ): MsgApproveResponse {
    const message = createBaseMsgApproveResponse();
    return message;
  },
};

function createBaseMsgDisapprove(): MsgDisapprove {
  return { contractId: "", approver: "", proxy: "" };
}

export const MsgDisapprove = {
  encode(
    message: MsgDisapprove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.approver !== "") {
      writer.uint32(18).string(message.approver);
    }
    if (message.proxy !== "") {
      writer.uint32(26).string(message.proxy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisapprove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisapprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.approver = reader.string();
          break;
        case 3:
          message.proxy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisapprove {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      approver: isSet(object.approver) ? String(object.approver) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
    };
  },

  toJSON(message: MsgDisapprove): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.approver !== undefined && (obj.approver = message.approver);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisapprove>, I>>(
    object: I
  ): MsgDisapprove {
    const message = createBaseMsgDisapprove();
    message.contractId = object.contractId ?? "";
    message.approver = object.approver ?? "";
    message.proxy = object.proxy ?? "";
    return message;
  },
};

function createBaseMsgDisapproveResponse(): MsgDisapproveResponse {
  return {};
}

export const MsgDisapproveResponse = {
  encode(
    _: MsgDisapproveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisapproveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisapproveResponse();
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

  fromJSON(_: any): MsgDisapproveResponse {
    return {};
  },

  toJSON(_: MsgDisapproveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisapproveResponse>, I>>(
    _: I
  ): MsgDisapproveResponse {
    const message = createBaseMsgDisapproveResponse();
    return message;
  },
};

function createBaseMsgCreateContract(): MsgCreateContract {
  return { owner: "", name: "", baseImgUri: "", meta: "" };
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
    if (message.baseImgUri !== "") {
      writer.uint32(26).string(message.baseImgUri);
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
          message.baseImgUri = reader.string();
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
      baseImgUri: isSet(object.baseImgUri) ? String(object.baseImgUri) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: MsgCreateContract): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.baseImgUri !== undefined && (obj.baseImgUri = message.baseImgUri);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateContract>, I>>(
    object: I
  ): MsgCreateContract {
    const message = createBaseMsgCreateContract();
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.baseImgUri = object.baseImgUri ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseMsgCreateContractResponse(): MsgCreateContractResponse {
  return { id: "" };
}

export const MsgCreateContractResponse = {
  encode(
    message: MsgCreateContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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
          message.id = reader.string();
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
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgCreateContractResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateContractResponse>, I>>(
    object: I
  ): MsgCreateContractResponse {
    const message = createBaseMsgCreateContractResponse();
    message.id = object.id ?? "";
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
  return { id: "" };
}

export const MsgIssueFTResponse = {
  encode(
    message: MsgIssueFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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
          message.id = reader.string();
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
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgIssueFTResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueFTResponse>, I>>(
    object: I
  ): MsgIssueFTResponse {
    const message = createBaseMsgIssueFTResponse();
    message.id = object.id ?? "";
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
  return { id: "" };
}

export const MsgIssueNFTResponse = {
  encode(
    message: MsgIssueNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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
          message.id = reader.string();
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
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgIssueNFTResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueNFTResponse>, I>>(
    object: I
  ): MsgIssueNFTResponse {
    const message = createBaseMsgIssueNFTResponse();
    message.id = object.id ?? "";
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
  return { ids: [] };
}

export const MsgMintNFTResponse = {
  encode(
    message: MsgMintNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
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
          message.ids.push(reader.string());
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
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgMintNFTResponse): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTResponse>, I>>(
    object: I
  ): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    message.ids = object.ids?.map((e) => e) || [];
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

function createBaseMsgBurnFTFrom(): MsgBurnFTFrom {
  return { contractId: "", proxy: "", from: "", amount: [] };
}

export const MsgBurnFTFrom = {
  encode(
    message: MsgBurnFTFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFTFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFTFrom();
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

  fromJSON(object: any): MsgBurnFTFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgBurnFTFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFTFrom>, I>>(
    object: I
  ): MsgBurnFTFrom {
    const message = createBaseMsgBurnFTFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgBurnFTFromResponse(): MsgBurnFTFromResponse {
  return {};
}

export const MsgBurnFTFromResponse = {
  encode(
    _: MsgBurnFTFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBurnFTFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFTFromResponse();
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

  fromJSON(_: any): MsgBurnFTFromResponse {
    return {};
  },

  toJSON(_: MsgBurnFTFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFTFromResponse>, I>>(
    _: I
  ): MsgBurnFTFromResponse {
    const message = createBaseMsgBurnFTFromResponse();
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

function createBaseMsgBurnNFTFrom(): MsgBurnNFTFrom {
  return { contractId: "", proxy: "", from: "", tokenIds: [] };
}

export const MsgBurnNFTFrom = {
  encode(
    message: MsgBurnNFTFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    for (const v of message.tokenIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTFrom();
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

  fromJSON(object: any): MsgBurnNFTFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgBurnNFTFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFTFrom>, I>>(
    object: I
  ): MsgBurnNFTFrom {
    const message = createBaseMsgBurnNFTFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgBurnNFTFromResponse(): MsgBurnNFTFromResponse {
  return {};
}

export const MsgBurnNFTFromResponse = {
  encode(
    _: MsgBurnNFTFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBurnNFTFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTFromResponse();
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

  fromJSON(_: any): MsgBurnNFTFromResponse {
    return {};
  },

  toJSON(_: MsgBurnNFTFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFTFromResponse>, I>>(
    _: I
  ): MsgBurnNFTFromResponse {
    const message = createBaseMsgBurnNFTFromResponse();
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
      Change.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.changes.push(Change.decode(reader, reader.uint32()));
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
        ? object.changes.map((e: any) => Change.fromJSON(e))
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
        e ? Change.toJSON(e) : undefined
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
    message.changes = object.changes?.map((e) => Change.fromPartial(e)) || [];
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

function createBaseMsgAttachFrom(): MsgAttachFrom {
  return { contractId: "", proxy: "", from: "", tokenId: "", toTokenId: "" };
}

export const MsgAttachFrom = {
  encode(
    message: MsgAttachFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttachFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttachFrom();
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

  fromJSON(object: any): MsgAttachFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      toTokenId: isSet(object.toTokenId) ? String(object.toTokenId) : "",
    };
  },

  toJSON(message: MsgAttachFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.toTokenId !== undefined && (obj.toTokenId = message.toTokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttachFrom>, I>>(
    object: I
  ): MsgAttachFrom {
    const message = createBaseMsgAttachFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    message.toTokenId = object.toTokenId ?? "";
    return message;
  },
};

function createBaseMsgAttachFromResponse(): MsgAttachFromResponse {
  return {};
}

export const MsgAttachFromResponse = {
  encode(
    _: MsgAttachFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAttachFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttachFromResponse();
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

  fromJSON(_: any): MsgAttachFromResponse {
    return {};
  },

  toJSON(_: MsgAttachFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttachFromResponse>, I>>(
    _: I
  ): MsgAttachFromResponse {
    const message = createBaseMsgAttachFromResponse();
    return message;
  },
};

function createBaseMsgDetachFrom(): MsgDetachFrom {
  return { contractId: "", proxy: "", from: "", tokenId: "" };
}

export const MsgDetachFrom = {
  encode(
    message: MsgDetachFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.tokenId !== "") {
      writer.uint32(34).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetachFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetachFrom();
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

  fromJSON(object: any): MsgDetachFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: MsgDetachFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDetachFrom>, I>>(
    object: I
  ): MsgDetachFrom {
    const message = createBaseMsgDetachFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseMsgDetachFromResponse(): MsgDetachFromResponse {
  return {};
}

export const MsgDetachFromResponse = {
  encode(
    _: MsgDetachFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDetachFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetachFromResponse();
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

  fromJSON(_: any): MsgDetachFromResponse {
    return {};
  },

  toJSON(_: MsgDetachFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDetachFromResponse>, I>>(
    _: I
  ): MsgDetachFromResponse {
    const message = createBaseMsgDetachFromResponse();
    return message;
  },
};

/** Msg defines the collection Msg service. */
export interface Msg {
  /**
   * TransferFT defines a method to send fungible tokens from one account to another account.
   * Fires:
   * - EventSent
   * - transfer_ft (deprecated, not typed)
   * Throws:
   * - ErrInvalidRequest:
   *   - the balance of `from` does not have enough tokens to spend.
   */
  TransferFT(request: MsgTransferFT): Promise<MsgTransferFTResponse>;
  /**
   * TransferFTFrom defines a method to send fungible tokens from one account to another account by the proxy.
   * Fires:
   * - EventSent
   * - transfer_ft_from (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized:
   *   - the approver has not authorized the proxy.
   * - ErrInvalidRequest:
   *   - the balance of `from` does not have enough tokens to spend.
   */
  TransferFTFrom(
    request: MsgTransferFTFrom
  ): Promise<MsgTransferFTFromResponse>;
  /**
   * TransferNFT defines a method to send non-fungible tokens from one account to another account.
   * Fires:
   * - EventSent
   * - transfer_nft (deprecated, not typed)
   * - operation_transfer_nft (deprecated, not typed)
   * Throws:
   * - ErrInvalidRequest:
   *   - the balance of `from` does not have enough tokens to spend.
   */
  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
  /**
   * TransferNFTFrom defines a method to send non-fungible tokens from one account to another account by the proxy.
   * Fires:
   * - EventSent
   * - transfer_nft_from (deprecated, not typed)
   * - operation_transfer_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized:
   *   - the approver has not authorized the proxy.
   * - ErrInvalidRequest:
   *   - the balance of `from` does not have enough tokens to spend.
   */
  TransferNFTFrom(
    request: MsgTransferNFTFrom
  ): Promise<MsgTransferNFTFromResponse>;
  /**
   * Approve allows one to send tokens on behalf of the approver.
   * Fires:
   * - EventAuthorizedOperator
   * - approve_collection (deprecated, not typed)
   * Throws:
   * - ErrNotFound:
   *   - there is no contract of `contract_id`.
   * - ErrInvalidRequest:
   *   - `approver` has already authorized `proxy`.
   */
  Approve(request: MsgApprove): Promise<MsgApproveResponse>;
  /**
   * Disapprove revokes the authorization of the proxy to send the approver's token.
   * Fires:
   * - EventRevokedOperator
   * - disapprove_collection (deprecated, not typed)
   * Throws:
   * - ErrNotFound:
   *   - there is no contract of `contract_id`.
   *   - there is no authorization by `approver` to `proxy`.
   */
  Disapprove(request: MsgDisapprove): Promise<MsgDisapproveResponse>;
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
   * Throws:
   * - ErrUnauthorized
   *   - `from` does not have `mint` permission.
   */
  MintFT(request: MsgMintFT): Promise<MsgMintFTResponse>;
  /**
   * MintNFT defines a method to mint non-fungible tokens.
   * Fires:
   * - EventMintedNFT
   * - mint_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `from` does not have `mint` permission.
   */
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  /**
   * BurnFT defines a method to burn fungible tokens.
   * Fires:
   * - EventBurned
   * - burn_ft (deprecated, not typed)
   * - burn_nft (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `from` does not have `burn` permission.
   * - ErrInvalidRequest:
   *   - the balance of `from` does not have enough tokens to burn.
   */
  BurnFT(request: MsgBurnFT): Promise<MsgBurnFTResponse>;
  /**
   * BurnFTFrom defines a method to burn fungible tokens of the approver by the proxy.
   * Fires:
   * - EventBurned
   * - burn_ft_from (deprecated, not typed)
   * - burn_nft_from (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `proxy` does not have `burn` permission.
   *   - the approver has not authorized `proxy`.
   * - ErrInvalidRequest:
   *   - the balance of `from` does not have enough tokens to burn.
   */
  BurnFTFrom(request: MsgBurnFTFrom): Promise<MsgBurnFTFromResponse>;
  /**
   * BurnNFT defines a method to burn non-fungible tokens.
   * Fires:
   * - EventBurned
   * - burn_ft (deprecated, not typed)
   * - burn_nft (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `from` does not have `burn` permission.
   * - ErrInvalidRequest:
   *   - the balance of `from` does not have enough tokens to burn.
   */
  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
  /**
   * BurnNFTFrom defines a method to burn non-fungible tokens of the approver by the proxy.
   * Fires:
   * - EventBurned
   * - burn_ft_from (deprecated, not typed)
   * - burn_nft_from (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `proxy` does not have `burn` permission.
   *   - the approver has not authorized `proxy`.
   * - ErrInvalidRequest:
   *   - the balance of `from` does not have enough tokens to burn.
   */
  BurnNFTFrom(request: MsgBurnNFTFrom): Promise<MsgBurnNFTFromResponse>;
  /**
   * Modify defines a method to modify metadata.
   * Fires:
   * - EventModifiedContract
   * - modify_collection (deprecated, not typed)
   * - EventModifiedTokenClass
   * - modify_token_type (deprecated, not typed)
   * - modify_token (deprecated, not typed)
   * - EventModifiedNFT
   * Throws:
   * - ErrUnauthorized
   *   - the proxy does not have `modify` permission.
   * - ErrNotFound
   *   - there is no contract of `contract_id`.
   *   - there is no token type of `token_type`.
   *   - there is no token of `token_id`.
   */
  Modify(request: MsgModify): Promise<MsgModifyResponse>;
  /**
   * GrantPermission allows one to mint or burn tokens or modify metadata.
   * Fires:
   * - EventGrant
   * - grant_perm (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `granter` does not have `permission`.
   * - ErrInvalidRequest
   *   - `grantee` already has `permission`.
   */
  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse>;
  /**
   * RevokePermission abandons a permission.
   * Fires:
   * - EventAbandon
   * - revoke_perm (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `grantee` does not have `permission`.
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
   * Throws:
   * - ErrInvalidRequest
   *   - `owner` does not owns `id`.
   *   - `owner` does not owns `to`.
   *   - `token_id` is not root.
   *   - `token_id` is an ancestor of `to_token_id`, which creates a cycle as a result.
   *   - depth of `to_token_id` exceeds an app-specific limit.
   */
  Attach(request: MsgAttach): Promise<MsgAttachResponse>;
  /**
   * Detach defines a method to detach a token from another token.
   * Fires:
   * - EventDetach
   * - detach (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   * Throws:
   * - ErrInvalidRequest
   *   - `owner` does not owns `token_id`.
   */
  Detach(request: MsgDetach): Promise<MsgDetachResponse>;
  /**
   * AttachFrom defines a method to attach a token to another token by proxy.
   * Fires:
   * - EventAttach
   * - attach_from (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - the approver has not authorized `proxy`.
   * - ErrInvalidRequest
   *   - `owner` does not owns `subject`.
   *   - `owner` does not owns `target`.
   *   - `subject` is not root.
   *   - `subject` is an ancestor of `target`, which creates a cycle as a result.
   *   - depth of `to` exceeds an app-specific limit.
   */
  AttachFrom(request: MsgAttachFrom): Promise<MsgAttachFromResponse>;
  /**
   * DetachFrom defines a method to detach a token from another token by proxy.
   * Fires:
   * - EventDetach
   * - detach_from (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - the approver has not authorized `proxy`.
   * - ErrInvalidRequest
   *   - `owner` does not owns `subject`.
   */
  DetachFrom(request: MsgDetachFrom): Promise<MsgDetachFromResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TransferFT = this.TransferFT.bind(this);
    this.TransferFTFrom = this.TransferFTFrom.bind(this);
    this.TransferNFT = this.TransferNFT.bind(this);
    this.TransferNFTFrom = this.TransferNFTFrom.bind(this);
    this.Approve = this.Approve.bind(this);
    this.Disapprove = this.Disapprove.bind(this);
    this.CreateContract = this.CreateContract.bind(this);
    this.IssueFT = this.IssueFT.bind(this);
    this.IssueNFT = this.IssueNFT.bind(this);
    this.MintFT = this.MintFT.bind(this);
    this.MintNFT = this.MintNFT.bind(this);
    this.BurnFT = this.BurnFT.bind(this);
    this.BurnFTFrom = this.BurnFTFrom.bind(this);
    this.BurnNFT = this.BurnNFT.bind(this);
    this.BurnNFTFrom = this.BurnNFTFrom.bind(this);
    this.Modify = this.Modify.bind(this);
    this.GrantPermission = this.GrantPermission.bind(this);
    this.RevokePermission = this.RevokePermission.bind(this);
    this.Attach = this.Attach.bind(this);
    this.Detach = this.Detach.bind(this);
    this.AttachFrom = this.AttachFrom.bind(this);
    this.DetachFrom = this.DetachFrom.bind(this);
  }
  TransferFT(request: MsgTransferFT): Promise<MsgTransferFTResponse> {
    const data = MsgTransferFT.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "TransferFT",
      data
    );
    return promise.then((data) =>
      MsgTransferFTResponse.decode(new _m0.Reader(data))
    );
  }

  TransferFTFrom(
    request: MsgTransferFTFrom
  ): Promise<MsgTransferFTFromResponse> {
    const data = MsgTransferFTFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "TransferFTFrom",
      data
    );
    return promise.then((data) =>
      MsgTransferFTFromResponse.decode(new _m0.Reader(data))
    );
  }

  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "TransferNFT",
      data
    );
    return promise.then((data) =>
      MsgTransferNFTResponse.decode(new _m0.Reader(data))
    );
  }

  TransferNFTFrom(
    request: MsgTransferNFTFrom
  ): Promise<MsgTransferNFTFromResponse> {
    const data = MsgTransferNFTFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "TransferNFTFrom",
      data
    );
    return promise.then((data) =>
      MsgTransferNFTFromResponse.decode(new _m0.Reader(data))
    );
  }

  Approve(request: MsgApprove): Promise<MsgApproveResponse> {
    const data = MsgApprove.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Approve", data);
    return promise.then((data) =>
      MsgApproveResponse.decode(new _m0.Reader(data))
    );
  }

  Disapprove(request: MsgDisapprove): Promise<MsgDisapproveResponse> {
    const data = MsgDisapprove.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "Disapprove",
      data
    );
    return promise.then((data) =>
      MsgDisapproveResponse.decode(new _m0.Reader(data))
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

  BurnFTFrom(request: MsgBurnFTFrom): Promise<MsgBurnFTFromResponse> {
    const data = MsgBurnFTFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "BurnFTFrom",
      data
    );
    return promise.then((data) =>
      MsgBurnFTFromResponse.decode(new _m0.Reader(data))
    );
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "BurnNFT", data);
    return promise.then((data) =>
      MsgBurnNFTResponse.decode(new _m0.Reader(data))
    );
  }

  BurnNFTFrom(request: MsgBurnNFTFrom): Promise<MsgBurnNFTFromResponse> {
    const data = MsgBurnNFTFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "BurnNFTFrom",
      data
    );
    return promise.then((data) =>
      MsgBurnNFTFromResponse.decode(new _m0.Reader(data))
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

  AttachFrom(request: MsgAttachFrom): Promise<MsgAttachFromResponse> {
    const data = MsgAttachFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "AttachFrom",
      data
    );
    return promise.then((data) =>
      MsgAttachFromResponse.decode(new _m0.Reader(data))
    );
  }

  DetachFrom(request: MsgDetachFrom): Promise<MsgDetachFromResponse> {
    const data = MsgDetachFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "DetachFrom",
      data
    );
    return promise.then((data) =>
      MsgDetachFromResponse.decode(new _m0.Reader(data))
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
