/* eslint-disable */
import {
  Permission,
  Coin,
  NFT,
  Attribute,
  permissionFromJSON,
  permissionToJSON,
} from "./collection";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.collection.v1";

/**
 * Deprecated: use typed events.
 *
 * EventType enumerates the valid event types on x/collection.
 */
export enum EventType {
  EVENT_TYPE_UNSPECIFIED = 0,
  EVENT_TYPE_CREATE_COLLECTION = 1,
  EVENT_TYPE_ISSUE_FT = 2,
  EVENT_TYPE_ISSUE_NFT = 3,
  EVENT_TYPE_MINT_FT = 4,
  EVENT_TYPE_BURN_FT = 5,
  EVENT_TYPE_MINT_NFT = 6,
  EVENT_TYPE_BURN_NFT = 7,
  EVENT_TYPE_BURN_FT_FROM = 8,
  EVENT_TYPE_BURN_NFT_FROM = 9,
  EVENT_TYPE_MODIFY_COLLECTION = 10,
  EVENT_TYPE_MODIFY_TOKEN_TYPE = 11,
  EVENT_TYPE_MODIFY_TOKEN = 12,
  EVENT_TYPE_TRANSFER = 13,
  EVENT_TYPE_TRANSFER_FT = 14,
  EVENT_TYPE_TRANSFER_NFT = 15,
  EVENT_TYPE_TRANSFER_FT_FROM = 16,
  EVENT_TYPE_TRANSFER_NFT_FROM = 17,
  EVENT_TYPE_GRANT_PERM = 18,
  EVENT_TYPE_REVOKE_PERM = 19,
  EVENT_TYPE_ATTACH = 20,
  EVENT_TYPE_DETACH = 21,
  EVENT_TYPE_ATTACH_FROM = 22,
  EVENT_TYPE_DETACH_FROM = 23,
  EVENT_TYPE_APPROVE_COLLECTION = 24,
  EVENT_TYPE_DISAPPROVE_COLLECTION = 25,
  EVENT_TYPE_OPERATION_TRANSFER_NFT = 26,
  EVENT_TYPE_OPERATION_BURN_NFT = 27,
  EVENT_TYPE_OPERATION_ROOT_CHANGED = 28,
  UNRECOGNIZED = -1,
}

export function eventTypeFromJSON(object: any): EventType {
  switch (object) {
    case 0:
    case "EVENT_TYPE_UNSPECIFIED":
      return EventType.EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "EVENT_TYPE_CREATE_COLLECTION":
      return EventType.EVENT_TYPE_CREATE_COLLECTION;
    case 2:
    case "EVENT_TYPE_ISSUE_FT":
      return EventType.EVENT_TYPE_ISSUE_FT;
    case 3:
    case "EVENT_TYPE_ISSUE_NFT":
      return EventType.EVENT_TYPE_ISSUE_NFT;
    case 4:
    case "EVENT_TYPE_MINT_FT":
      return EventType.EVENT_TYPE_MINT_FT;
    case 5:
    case "EVENT_TYPE_BURN_FT":
      return EventType.EVENT_TYPE_BURN_FT;
    case 6:
    case "EVENT_TYPE_MINT_NFT":
      return EventType.EVENT_TYPE_MINT_NFT;
    case 7:
    case "EVENT_TYPE_BURN_NFT":
      return EventType.EVENT_TYPE_BURN_NFT;
    case 8:
    case "EVENT_TYPE_BURN_FT_FROM":
      return EventType.EVENT_TYPE_BURN_FT_FROM;
    case 9:
    case "EVENT_TYPE_BURN_NFT_FROM":
      return EventType.EVENT_TYPE_BURN_NFT_FROM;
    case 10:
    case "EVENT_TYPE_MODIFY_COLLECTION":
      return EventType.EVENT_TYPE_MODIFY_COLLECTION;
    case 11:
    case "EVENT_TYPE_MODIFY_TOKEN_TYPE":
      return EventType.EVENT_TYPE_MODIFY_TOKEN_TYPE;
    case 12:
    case "EVENT_TYPE_MODIFY_TOKEN":
      return EventType.EVENT_TYPE_MODIFY_TOKEN;
    case 13:
    case "EVENT_TYPE_TRANSFER":
      return EventType.EVENT_TYPE_TRANSFER;
    case 14:
    case "EVENT_TYPE_TRANSFER_FT":
      return EventType.EVENT_TYPE_TRANSFER_FT;
    case 15:
    case "EVENT_TYPE_TRANSFER_NFT":
      return EventType.EVENT_TYPE_TRANSFER_NFT;
    case 16:
    case "EVENT_TYPE_TRANSFER_FT_FROM":
      return EventType.EVENT_TYPE_TRANSFER_FT_FROM;
    case 17:
    case "EVENT_TYPE_TRANSFER_NFT_FROM":
      return EventType.EVENT_TYPE_TRANSFER_NFT_FROM;
    case 18:
    case "EVENT_TYPE_GRANT_PERM":
      return EventType.EVENT_TYPE_GRANT_PERM;
    case 19:
    case "EVENT_TYPE_REVOKE_PERM":
      return EventType.EVENT_TYPE_REVOKE_PERM;
    case 20:
    case "EVENT_TYPE_ATTACH":
      return EventType.EVENT_TYPE_ATTACH;
    case 21:
    case "EVENT_TYPE_DETACH":
      return EventType.EVENT_TYPE_DETACH;
    case 22:
    case "EVENT_TYPE_ATTACH_FROM":
      return EventType.EVENT_TYPE_ATTACH_FROM;
    case 23:
    case "EVENT_TYPE_DETACH_FROM":
      return EventType.EVENT_TYPE_DETACH_FROM;
    case 24:
    case "EVENT_TYPE_APPROVE_COLLECTION":
      return EventType.EVENT_TYPE_APPROVE_COLLECTION;
    case 25:
    case "EVENT_TYPE_DISAPPROVE_COLLECTION":
      return EventType.EVENT_TYPE_DISAPPROVE_COLLECTION;
    case 26:
    case "EVENT_TYPE_OPERATION_TRANSFER_NFT":
      return EventType.EVENT_TYPE_OPERATION_TRANSFER_NFT;
    case 27:
    case "EVENT_TYPE_OPERATION_BURN_NFT":
      return EventType.EVENT_TYPE_OPERATION_BURN_NFT;
    case 28:
    case "EVENT_TYPE_OPERATION_ROOT_CHANGED":
      return EventType.EVENT_TYPE_OPERATION_ROOT_CHANGED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventType.UNRECOGNIZED;
  }
}

export function eventTypeToJSON(object: EventType): string {
  switch (object) {
    case EventType.EVENT_TYPE_UNSPECIFIED:
      return "EVENT_TYPE_UNSPECIFIED";
    case EventType.EVENT_TYPE_CREATE_COLLECTION:
      return "EVENT_TYPE_CREATE_COLLECTION";
    case EventType.EVENT_TYPE_ISSUE_FT:
      return "EVENT_TYPE_ISSUE_FT";
    case EventType.EVENT_TYPE_ISSUE_NFT:
      return "EVENT_TYPE_ISSUE_NFT";
    case EventType.EVENT_TYPE_MINT_FT:
      return "EVENT_TYPE_MINT_FT";
    case EventType.EVENT_TYPE_BURN_FT:
      return "EVENT_TYPE_BURN_FT";
    case EventType.EVENT_TYPE_MINT_NFT:
      return "EVENT_TYPE_MINT_NFT";
    case EventType.EVENT_TYPE_BURN_NFT:
      return "EVENT_TYPE_BURN_NFT";
    case EventType.EVENT_TYPE_BURN_FT_FROM:
      return "EVENT_TYPE_BURN_FT_FROM";
    case EventType.EVENT_TYPE_BURN_NFT_FROM:
      return "EVENT_TYPE_BURN_NFT_FROM";
    case EventType.EVENT_TYPE_MODIFY_COLLECTION:
      return "EVENT_TYPE_MODIFY_COLLECTION";
    case EventType.EVENT_TYPE_MODIFY_TOKEN_TYPE:
      return "EVENT_TYPE_MODIFY_TOKEN_TYPE";
    case EventType.EVENT_TYPE_MODIFY_TOKEN:
      return "EVENT_TYPE_MODIFY_TOKEN";
    case EventType.EVENT_TYPE_TRANSFER:
      return "EVENT_TYPE_TRANSFER";
    case EventType.EVENT_TYPE_TRANSFER_FT:
      return "EVENT_TYPE_TRANSFER_FT";
    case EventType.EVENT_TYPE_TRANSFER_NFT:
      return "EVENT_TYPE_TRANSFER_NFT";
    case EventType.EVENT_TYPE_TRANSFER_FT_FROM:
      return "EVENT_TYPE_TRANSFER_FT_FROM";
    case EventType.EVENT_TYPE_TRANSFER_NFT_FROM:
      return "EVENT_TYPE_TRANSFER_NFT_FROM";
    case EventType.EVENT_TYPE_GRANT_PERM:
      return "EVENT_TYPE_GRANT_PERM";
    case EventType.EVENT_TYPE_REVOKE_PERM:
      return "EVENT_TYPE_REVOKE_PERM";
    case EventType.EVENT_TYPE_ATTACH:
      return "EVENT_TYPE_ATTACH";
    case EventType.EVENT_TYPE_DETACH:
      return "EVENT_TYPE_DETACH";
    case EventType.EVENT_TYPE_ATTACH_FROM:
      return "EVENT_TYPE_ATTACH_FROM";
    case EventType.EVENT_TYPE_DETACH_FROM:
      return "EVENT_TYPE_DETACH_FROM";
    case EventType.EVENT_TYPE_APPROVE_COLLECTION:
      return "EVENT_TYPE_APPROVE_COLLECTION";
    case EventType.EVENT_TYPE_DISAPPROVE_COLLECTION:
      return "EVENT_TYPE_DISAPPROVE_COLLECTION";
    case EventType.EVENT_TYPE_OPERATION_TRANSFER_NFT:
      return "EVENT_TYPE_OPERATION_TRANSFER_NFT";
    case EventType.EVENT_TYPE_OPERATION_BURN_NFT:
      return "EVENT_TYPE_OPERATION_BURN_NFT";
    case EventType.EVENT_TYPE_OPERATION_ROOT_CHANGED:
      return "EVENT_TYPE_OPERATION_ROOT_CHANGED";
    case EventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Deprecated: use typed events.
 *
 * AttributeKey enumerates the valid attribute keys on x/collection.
 */
export enum AttributeKey {
  ATTRIBUTE_KEY_UNSPECIFIED = 0,
  ATTRIBUTE_KEY_NAME = 1,
  ATTRIBUTE_KEY_META = 2,
  ATTRIBUTE_KEY_CONTRACT_ID = 3,
  ATTRIBUTE_KEY_TOKEN_ID = 4,
  ATTRIBUTE_KEY_OWNER = 5,
  ATTRIBUTE_KEY_AMOUNT = 6,
  ATTRIBUTE_KEY_DECIMALS = 7,
  ATTRIBUTE_KEY_BASE_IMG_URI = 8,
  ATTRIBUTE_KEY_MINTABLE = 9,
  ATTRIBUTE_KEY_TOKEN_TYPE = 10,
  ATTRIBUTE_KEY_FROM = 11,
  ATTRIBUTE_KEY_TO = 12,
  ATTRIBUTE_KEY_PERM = 13,
  ATTRIBUTE_KEY_TO_TOKEN_ID = 14,
  ATTRIBUTE_KEY_FROM_TOKEN_ID = 15,
  ATTRIBUTE_KEY_APPROVER = 16,
  ATTRIBUTE_KEY_PROXY = 17,
  ATTRIBUTE_KEY_OLD_ROOT_TOKEN_ID = 18,
  ATTRIBUTE_KEY_NEW_ROOT_TOKEN_ID = 19,
  UNRECOGNIZED = -1,
}

export function attributeKeyFromJSON(object: any): AttributeKey {
  switch (object) {
    case 0:
    case "ATTRIBUTE_KEY_UNSPECIFIED":
      return AttributeKey.ATTRIBUTE_KEY_UNSPECIFIED;
    case 1:
    case "ATTRIBUTE_KEY_NAME":
      return AttributeKey.ATTRIBUTE_KEY_NAME;
    case 2:
    case "ATTRIBUTE_KEY_META":
      return AttributeKey.ATTRIBUTE_KEY_META;
    case 3:
    case "ATTRIBUTE_KEY_CONTRACT_ID":
      return AttributeKey.ATTRIBUTE_KEY_CONTRACT_ID;
    case 4:
    case "ATTRIBUTE_KEY_TOKEN_ID":
      return AttributeKey.ATTRIBUTE_KEY_TOKEN_ID;
    case 5:
    case "ATTRIBUTE_KEY_OWNER":
      return AttributeKey.ATTRIBUTE_KEY_OWNER;
    case 6:
    case "ATTRIBUTE_KEY_AMOUNT":
      return AttributeKey.ATTRIBUTE_KEY_AMOUNT;
    case 7:
    case "ATTRIBUTE_KEY_DECIMALS":
      return AttributeKey.ATTRIBUTE_KEY_DECIMALS;
    case 8:
    case "ATTRIBUTE_KEY_BASE_IMG_URI":
      return AttributeKey.ATTRIBUTE_KEY_BASE_IMG_URI;
    case 9:
    case "ATTRIBUTE_KEY_MINTABLE":
      return AttributeKey.ATTRIBUTE_KEY_MINTABLE;
    case 10:
    case "ATTRIBUTE_KEY_TOKEN_TYPE":
      return AttributeKey.ATTRIBUTE_KEY_TOKEN_TYPE;
    case 11:
    case "ATTRIBUTE_KEY_FROM":
      return AttributeKey.ATTRIBUTE_KEY_FROM;
    case 12:
    case "ATTRIBUTE_KEY_TO":
      return AttributeKey.ATTRIBUTE_KEY_TO;
    case 13:
    case "ATTRIBUTE_KEY_PERM":
      return AttributeKey.ATTRIBUTE_KEY_PERM;
    case 14:
    case "ATTRIBUTE_KEY_TO_TOKEN_ID":
      return AttributeKey.ATTRIBUTE_KEY_TO_TOKEN_ID;
    case 15:
    case "ATTRIBUTE_KEY_FROM_TOKEN_ID":
      return AttributeKey.ATTRIBUTE_KEY_FROM_TOKEN_ID;
    case 16:
    case "ATTRIBUTE_KEY_APPROVER":
      return AttributeKey.ATTRIBUTE_KEY_APPROVER;
    case 17:
    case "ATTRIBUTE_KEY_PROXY":
      return AttributeKey.ATTRIBUTE_KEY_PROXY;
    case 18:
    case "ATTRIBUTE_KEY_OLD_ROOT_TOKEN_ID":
      return AttributeKey.ATTRIBUTE_KEY_OLD_ROOT_TOKEN_ID;
    case 19:
    case "ATTRIBUTE_KEY_NEW_ROOT_TOKEN_ID":
      return AttributeKey.ATTRIBUTE_KEY_NEW_ROOT_TOKEN_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttributeKey.UNRECOGNIZED;
  }
}

export function attributeKeyToJSON(object: AttributeKey): string {
  switch (object) {
    case AttributeKey.ATTRIBUTE_KEY_UNSPECIFIED:
      return "ATTRIBUTE_KEY_UNSPECIFIED";
    case AttributeKey.ATTRIBUTE_KEY_NAME:
      return "ATTRIBUTE_KEY_NAME";
    case AttributeKey.ATTRIBUTE_KEY_META:
      return "ATTRIBUTE_KEY_META";
    case AttributeKey.ATTRIBUTE_KEY_CONTRACT_ID:
      return "ATTRIBUTE_KEY_CONTRACT_ID";
    case AttributeKey.ATTRIBUTE_KEY_TOKEN_ID:
      return "ATTRIBUTE_KEY_TOKEN_ID";
    case AttributeKey.ATTRIBUTE_KEY_OWNER:
      return "ATTRIBUTE_KEY_OWNER";
    case AttributeKey.ATTRIBUTE_KEY_AMOUNT:
      return "ATTRIBUTE_KEY_AMOUNT";
    case AttributeKey.ATTRIBUTE_KEY_DECIMALS:
      return "ATTRIBUTE_KEY_DECIMALS";
    case AttributeKey.ATTRIBUTE_KEY_BASE_IMG_URI:
      return "ATTRIBUTE_KEY_BASE_IMG_URI";
    case AttributeKey.ATTRIBUTE_KEY_MINTABLE:
      return "ATTRIBUTE_KEY_MINTABLE";
    case AttributeKey.ATTRIBUTE_KEY_TOKEN_TYPE:
      return "ATTRIBUTE_KEY_TOKEN_TYPE";
    case AttributeKey.ATTRIBUTE_KEY_FROM:
      return "ATTRIBUTE_KEY_FROM";
    case AttributeKey.ATTRIBUTE_KEY_TO:
      return "ATTRIBUTE_KEY_TO";
    case AttributeKey.ATTRIBUTE_KEY_PERM:
      return "ATTRIBUTE_KEY_PERM";
    case AttributeKey.ATTRIBUTE_KEY_TO_TOKEN_ID:
      return "ATTRIBUTE_KEY_TO_TOKEN_ID";
    case AttributeKey.ATTRIBUTE_KEY_FROM_TOKEN_ID:
      return "ATTRIBUTE_KEY_FROM_TOKEN_ID";
    case AttributeKey.ATTRIBUTE_KEY_APPROVER:
      return "ATTRIBUTE_KEY_APPROVER";
    case AttributeKey.ATTRIBUTE_KEY_PROXY:
      return "ATTRIBUTE_KEY_PROXY";
    case AttributeKey.ATTRIBUTE_KEY_OLD_ROOT_TOKEN_ID:
      return "ATTRIBUTE_KEY_OLD_ROOT_TOKEN_ID";
    case AttributeKey.ATTRIBUTE_KEY_NEW_ROOT_TOKEN_ID:
      return "ATTRIBUTE_KEY_NEW_ROOT_TOKEN_ID";
    case AttributeKey.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * EventSent is emitted when tokens are transferred.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventSent {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the send. */
  operator: string;
  /** holder whose tokens were sent. */
  from: string;
  /** recipient of the tokens. */
  to: string;
  /** amount of tokens sent. */
  amount: Coin[];
}

/**
 * EventAuthorizedOperator is emitted when a holder authorizes an operator to manipulate its tokens.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventAuthorizedOperator {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of a holder which authorized the `operator` address as an operator. */
  holder: string;
  /** address which became an operator of `holder`. */
  operator: string;
}

/**
 * EventRevokedOperator is emitted when an authorization is revoked.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventRevokedOperator {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of a holder which revoked the `operator` address as an operator. */
  holder: string;
  /** address which was revoked as an operator of `holder`. */
  operator: string;
}

/**
 * EventCreatedContract is emitted when a new contract is created.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventCreatedContract {
  /** contract id associated with the contract. */
  contractId: string;
  /** name of the contract. */
  name: string;
  /** metadata of the contract. */
  meta: string;
  /** uri for the contract image stored off chain. */
  baseImgUri: string;
}

/**
 * EventCreatedFTClass is emitted when a new fungible token class is created.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventCreatedFTClass {
  /** contract id associated with the contract. */
  contractId: string;
  /** class id associated with the token class. */
  classId: string;
  /** name of the token class. */
  name: string;
  /** metadata of the token class. */
  meta: string;
  /** decimals of the token class. */
  decimals: number;
  /** mintable represents whether the token class is allowed to mint or burn its tokens. */
  mintable: boolean;
}

/**
 * EventCreatedNFTClass is emitted when a new non-fungible token class is created.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventCreatedNFTClass {
  /** contract id associated with the contract. */
  contractId: string;
  /** class id associated with the token class. */
  classId: string;
  /** name of the token class. */
  name: string;
  /** metadata of the token class. */
  meta: string;
}

/**
 * EventGrant is emitted when a granter grants its permission to a grantee.
 *
 * Info: `granter` would be empty if the permission is granted by an issuance.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventGrant {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the granter which grants the permission. */
  granter: string;
  /** address of the grantee. */
  grantee: string;
  /** permission on the contract. */
  permission: Permission;
}

/**
 * EventAbandon is emitted when a grantee abandons its permission.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventAbandon {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the grantee which abandons its grant. */
  grantee: string;
  /** permission on the contract. */
  permission: Permission;
}

/**
 * EventMintedFT is emitted when fungible tokens are minted.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventMintedFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the mint. */
  operator: string;
  /** recipient of the tokens. */
  to: string;
  /** amount of tokens minted. */
  amount: Coin[];
}

/**
 * EventMintedNFT is emitted when non-fungible tokens are minted.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventMintedNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the mint. */
  operator: string;
  /** recipient of the tokens. */
  to: string;
  /** tokens minted. */
  tokens: NFT[];
}

/**
 * EventBurned is emitted when tokens are burnt.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventBurned {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the burn. */
  operator: string;
  /** holder whose tokens were burned. */
  from: string;
  /** amount of tokens burned. */
  amount: Coin[];
}

/**
 * EventModifiedContract is emitted when the information of a contract is modified.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventModifiedContract {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the modify. */
  operator: string;
  /** changes of the attributes applied. */
  changes: Attribute[];
}

/**
 * EventModifiedTokenClass is emitted when the information of a token class is modified.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventModifiedTokenClass {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the modify. */
  operator: string;
  /** class id associated with the token class. */
  classId: string;
  /** changes of the attributes applied. */
  changes: Attribute[];
}

/**
 * EventModifiedNFT is emitted when the information of a non-fungible token is modified.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventModifiedNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the modify. */
  operator: string;
  /** token id associated with the non-fungible token. */
  tokenId: string;
  /** changes of the attributes applied. */
  changes: Attribute[];
}

/**
 * EventAttached is emitted when a token is attached to another.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventAttached {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the attach. */
  operator: string;
  /** address which holds the tokens. */
  holder: string;
  /** subject of the attach. */
  subject: string;
  /** target of the attach. */
  target: string;
}

/**
 * EventDetached is emitted when a token is detached from its parent.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventDetached {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the detach. */
  operator: string;
  /** address which holds the token. */
  holder: string;
  /** token being detached. */
  subject: string;
}

function createBaseEventSent(): EventSent {
  return { contractId: "", operator: "", from: "", to: "", amount: [] };
}

export const EventSent = {
  encode(
    message: EventSent,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSent();
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

  fromJSON(object: any): EventSent {
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

  toJSON(message: EventSent): unknown {
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

  fromPartial<I extends Exact<DeepPartial<EventSent>, I>>(
    object: I
  ): EventSent {
    const message = createBaseEventSent();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventAuthorizedOperator(): EventAuthorizedOperator {
  return { contractId: "", holder: "", operator: "" };
}

export const EventAuthorizedOperator = {
  encode(
    message: EventAuthorizedOperator,
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
  ): EventAuthorizedOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAuthorizedOperator();
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

  fromJSON(object: any): EventAuthorizedOperator {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: EventAuthorizedOperator): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.holder !== undefined && (obj.holder = message.holder);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAuthorizedOperator>, I>>(
    object: I
  ): EventAuthorizedOperator {
    const message = createBaseEventAuthorizedOperator();
    message.contractId = object.contractId ?? "";
    message.holder = object.holder ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseEventRevokedOperator(): EventRevokedOperator {
  return { contractId: "", holder: "", operator: "" };
}

export const EventRevokedOperator = {
  encode(
    message: EventRevokedOperator,
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
  ): EventRevokedOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevokedOperator();
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

  fromJSON(object: any): EventRevokedOperator {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: EventRevokedOperator): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.holder !== undefined && (obj.holder = message.holder);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRevokedOperator>, I>>(
    object: I
  ): EventRevokedOperator {
    const message = createBaseEventRevokedOperator();
    message.contractId = object.contractId ?? "";
    message.holder = object.holder ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseEventCreatedContract(): EventCreatedContract {
  return { contractId: "", name: "", meta: "", baseImgUri: "" };
}

export const EventCreatedContract = {
  encode(
    message: EventCreatedContract,
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
    if (message.baseImgUri !== "") {
      writer.uint32(34).string(message.baseImgUri);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventCreatedContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatedContract();
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
          message.baseImgUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreatedContract {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      baseImgUri: isSet(object.baseImgUri) ? String(object.baseImgUri) : "",
    };
  },

  toJSON(message: EventCreatedContract): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.baseImgUri !== undefined && (obj.baseImgUri = message.baseImgUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreatedContract>, I>>(
    object: I
  ): EventCreatedContract {
    const message = createBaseEventCreatedContract();
    message.contractId = object.contractId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.baseImgUri = object.baseImgUri ?? "";
    return message;
  },
};

function createBaseEventCreatedFTClass(): EventCreatedFTClass {
  return {
    contractId: "",
    classId: "",
    name: "",
    meta: "",
    decimals: 0,
    mintable: false,
  };
}

export const EventCreatedFTClass = {
  encode(
    message: EventCreatedFTClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    if (message.decimals !== 0) {
      writer.uint32(40).int32(message.decimals);
    }
    if (message.mintable === true) {
      writer.uint32(48).bool(message.mintable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatedFTClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatedFTClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        case 5:
          message.decimals = reader.int32();
          break;
        case 6:
          message.mintable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreatedFTClass {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
    };
  },

  toJSON(message: EventCreatedFTClass): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.classId !== undefined && (obj.classId = message.classId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreatedFTClass>, I>>(
    object: I
  ): EventCreatedFTClass {
    const message = createBaseEventCreatedFTClass();
    message.contractId = object.contractId ?? "";
    message.classId = object.classId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.decimals = object.decimals ?? 0;
    message.mintable = object.mintable ?? false;
    return message;
  },
};

function createBaseEventCreatedNFTClass(): EventCreatedNFTClass {
  return { contractId: "", classId: "", name: "", meta: "" };
}

export const EventCreatedNFTClass = {
  encode(
    message: EventCreatedNFTClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventCreatedNFTClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatedNFTClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.name = reader.string();
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

  fromJSON(object: any): EventCreatedNFTClass {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: EventCreatedNFTClass): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.classId !== undefined && (obj.classId = message.classId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreatedNFTClass>, I>>(
    object: I
  ): EventCreatedNFTClass {
    const message = createBaseEventCreatedNFTClass();
    message.contractId = object.contractId ?? "";
    message.classId = object.classId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseEventGrant(): EventGrant {
  return { contractId: "", granter: "", grantee: "", permission: 0 };
}

export const EventGrant = {
  encode(
    message: EventGrant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    if (message.permission !== 0) {
      writer.uint32(32).int32(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.grantee = reader.string();
          break;
        case 4:
          message.permission = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventGrant {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permission: isSet(object.permission)
        ? permissionFromJSON(object.permission)
        : 0,
    };
  },

  toJSON(message: EventGrant): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permission !== undefined &&
      (obj.permission = permissionToJSON(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventGrant>, I>>(
    object: I
  ): EventGrant {
    const message = createBaseEventGrant();
    message.contractId = object.contractId ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBaseEventAbandon(): EventAbandon {
  return { contractId: "", grantee: "", permission: 0 };
}

export const EventAbandon = {
  encode(
    message: EventAbandon,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAbandon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAbandon();
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

  fromJSON(object: any): EventAbandon {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permission: isSet(object.permission)
        ? permissionFromJSON(object.permission)
        : 0,
    };
  },

  toJSON(message: EventAbandon): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permission !== undefined &&
      (obj.permission = permissionToJSON(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAbandon>, I>>(
    object: I
  ): EventAbandon {
    const message = createBaseEventAbandon();
    message.contractId = object.contractId ?? "";
    message.grantee = object.grantee ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBaseEventMintedFT(): EventMintedFT {
  return { contractId: "", operator: "", to: "", amount: [] };
}

export const EventMintedFT = {
  encode(
    message: EventMintedFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintedFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintedFT();
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

  fromJSON(object: any): EventMintedFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventMintedFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMintedFT>, I>>(
    object: I
  ): EventMintedFT {
    const message = createBaseEventMintedFT();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventMintedNFT(): EventMintedNFT {
  return { contractId: "", operator: "", to: "", tokens: [] };
}

export const EventMintedNFT = {
  encode(
    message: EventMintedNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.tokens) {
      NFT.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintedNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintedNFT();
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
          message.to = reader.string();
          break;
        case 4:
          message.tokens.push(NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMintedNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      to: isSet(object.to) ? String(object.to) : "",
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => NFT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventMintedNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.to !== undefined && (obj.to = message.to);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMintedNFT>, I>>(
    object: I
  ): EventMintedNFT {
    const message = createBaseEventMintedNFT();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.to = object.to ?? "";
    message.tokens = object.tokens?.map((e) => NFT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventBurned(): EventBurned {
  return { contractId: "", operator: "", from: "", amount: [] };
}

export const EventBurned = {
  encode(
    message: EventBurned,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurned {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurned();
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

  fromJSON(object: any): EventBurned {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventBurned): unknown {
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

  fromPartial<I extends Exact<DeepPartial<EventBurned>, I>>(
    object: I
  ): EventBurned {
    const message = createBaseEventBurned();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventModifiedContract(): EventModifiedContract {
  return { contractId: "", operator: "", changes: [] };
}

export const EventModifiedContract = {
  encode(
    message: EventModifiedContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    for (const v of message.changes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventModifiedContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventModifiedContract();
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
          message.changes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventModifiedContract {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventModifiedContract): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventModifiedContract>, I>>(
    object: I
  ): EventModifiedContract {
    const message = createBaseEventModifiedContract();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.changes =
      object.changes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventModifiedTokenClass(): EventModifiedTokenClass {
  return { contractId: "", operator: "", classId: "", changes: [] };
}

export const EventModifiedTokenClass = {
  encode(
    message: EventModifiedTokenClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }
    for (const v of message.changes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventModifiedTokenClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventModifiedTokenClass();
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
          message.classId = reader.string();
          break;
        case 4:
          message.changes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventModifiedTokenClass {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventModifiedTokenClass): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.classId !== undefined && (obj.classId = message.classId);
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventModifiedTokenClass>, I>>(
    object: I
  ): EventModifiedTokenClass {
    const message = createBaseEventModifiedTokenClass();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.classId = object.classId ?? "";
    message.changes =
      object.changes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventModifiedNFT(): EventModifiedNFT {
  return { contractId: "", operator: "", tokenId: "", changes: [] };
}

export const EventModifiedNFT = {
  encode(
    message: EventModifiedNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    for (const v of message.changes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventModifiedNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventModifiedNFT();
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
          message.tokenId = reader.string();
          break;
        case 4:
          message.changes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventModifiedNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventModifiedNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventModifiedNFT>, I>>(
    object: I
  ): EventModifiedNFT {
    const message = createBaseEventModifiedNFT();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.tokenId = object.tokenId ?? "";
    message.changes =
      object.changes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventAttached(): EventAttached {
  return { contractId: "", operator: "", holder: "", subject: "", target: "" };
}

export const EventAttached = {
  encode(
    message: EventAttached,
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
    if (message.subject !== "") {
      writer.uint32(34).string(message.subject);
    }
    if (message.target !== "") {
      writer.uint32(42).string(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttached {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttached();
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
        case 4:
          message.subject = reader.string();
          break;
        case 5:
          message.target = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAttached {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
      subject: isSet(object.subject) ? String(object.subject) : "",
      target: isSet(object.target) ? String(object.target) : "",
    };
  },

  toJSON(message: EventAttached): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.holder !== undefined && (obj.holder = message.holder);
    message.subject !== undefined && (obj.subject = message.subject);
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAttached>, I>>(
    object: I
  ): EventAttached {
    const message = createBaseEventAttached();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.holder = object.holder ?? "";
    message.subject = object.subject ?? "";
    message.target = object.target ?? "";
    return message;
  },
};

function createBaseEventDetached(): EventDetached {
  return { contractId: "", operator: "", holder: "", subject: "" };
}

export const EventDetached = {
  encode(
    message: EventDetached,
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
    if (message.subject !== "") {
      writer.uint32(34).string(message.subject);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDetached {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDetached();
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
        case 4:
          message.subject = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDetached {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
      subject: isSet(object.subject) ? String(object.subject) : "",
    };
  },

  toJSON(message: EventDetached): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.holder !== undefined && (obj.holder = message.holder);
    message.subject !== undefined && (obj.subject = message.subject);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDetached>, I>>(
    object: I
  ): EventDetached {
    const message = createBaseEventDetached();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.holder = object.holder ?? "";
    message.subject = object.subject ?? "";
    return message;
  },
};

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
