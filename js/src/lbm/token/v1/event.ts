/* eslint-disable */
import {
  Permission,
  Attribute,
  permissionFromJSON,
  permissionToJSON,
} from "./token";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.token.v1";

/** AttributeKey enumerates the valid attribute keys on x/token. */
export enum AttributeKey {
  ATTRIBUTE_KEY_UNSPECIFIED = 0,
  ATTRIBUTE_KEY_NAME = 1,
  ATTRIBUTE_KEY_META = 3,
  /** ATTRIBUTE_KEY_IMG_URI - deprecated: use ATTRIBUTE_KEY_URI */
  ATTRIBUTE_KEY_IMG_URI = 8,
  ATTRIBUTE_KEY_URI = 15,
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
    case 3:
    case "ATTRIBUTE_KEY_META":
      return AttributeKey.ATTRIBUTE_KEY_META;
    case 8:
    case "ATTRIBUTE_KEY_IMG_URI":
      return AttributeKey.ATTRIBUTE_KEY_IMG_URI;
    case 15:
    case "ATTRIBUTE_KEY_URI":
      return AttributeKey.ATTRIBUTE_KEY_URI;
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
    case AttributeKey.ATTRIBUTE_KEY_IMG_URI:
      return "ATTRIBUTE_KEY_IMG_URI";
    case AttributeKey.ATTRIBUTE_KEY_URI:
      return "ATTRIBUTE_KEY_URI";
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
  /** recipient of the tokens */
  to: string;
  /** number of tokens sent. */
  amount: string;
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
 * EventIssued is emitted when a new contract is created.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventIssued {
  /** address which created the contract. */
  creator: string;
  /** contract id associated with the contract. */
  contractId: string;
  /** name defines the human-readable name of the contract. */
  name: string;
  /** symbol is an abbreviated name for contract. */
  symbol: string;
  /** uri is an uri for the resource of the contract stored off chain. */
  uri: string;
  /** meta is a brief description of contract. */
  meta: string;
  /** decimals is the number of decimals which one must divide the amount by to get its user representation. */
  decimals: number;
  /** mintable represents whether the token is allowed to mint. */
  mintable: boolean;
}

/**
 * EventGranted is emitted when a granter grants its permission to a grantee.
 *
 * Info: `granter` would be empty if the permission is granted by an issuance.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventGranted {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which granted the permission to `grantee`.
   * it would be empty where the event is triggered by the issuance.
   */
  granter: string;
  /** address of the grantee. */
  grantee: string;
  /** permission on the contract. */
  permission: Permission;
}

/**
 * EventRenounced is emitted when a grantee renounces its permission.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventRenounced {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the grantee which abandons its grant. */
  grantee: string;
  /** permission on the contract. */
  permission: Permission;
}

/**
 * EventMinted is emitted when tokens are minted.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventMinted {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the mint. */
  operator: string;
  /** recipient of the tokens. */
  to: string;
  /** number of tokens minted. */
  amount: string;
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
  /** number of tokens burned. */
  amount: string;
}

/**
 * EventModified is emitted when the information of a contract is modified.
 *
 * Since: 0.46.0 (finschia)
 */
export interface EventModified {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggered the modify. */
  operator: string;
  /**
   * changes on the metadata of the class.
   * possible attribute keys are same as those of MsgModify.
   * deprecated "img_uri" has been replaced by "uri" in the events.
   */
  changes: Attribute[];
}

function createBaseEventSent(): EventSent {
  return { contractId: "", operator: "", from: "", to: "", amount: "" };
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
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
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
          message.amount = reader.string();
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
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventSent): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
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
    message.amount = object.amount ?? "";
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

function createBaseEventIssued(): EventIssued {
  return {
    creator: "",
    contractId: "",
    name: "",
    symbol: "",
    uri: "",
    meta: "",
    decimals: 0,
    mintable: false,
  };
}

export const EventIssued = {
  encode(
    message: EventIssued,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractId !== "") {
      writer.uint32(18).string(message.contractId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.meta !== "") {
      writer.uint32(50).string(message.meta);
    }
    if (message.decimals !== 0) {
      writer.uint32(56).int32(message.decimals);
    }
    if (message.mintable === true) {
      writer.uint32(64).bool(message.mintable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventIssued {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssued();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contractId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.meta = reader.string();
          break;
        case 7:
          message.decimals = reader.int32();
          break;
        case 8:
          message.mintable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventIssued {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
    };
  },

  toJSON(message: EventIssued): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.uri !== undefined && (obj.uri = message.uri);
    message.meta !== undefined && (obj.meta = message.meta);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventIssued>, I>>(
    object: I
  ): EventIssued {
    const message = createBaseEventIssued();
    message.creator = object.creator ?? "";
    message.contractId = object.contractId ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.uri = object.uri ?? "";
    message.meta = object.meta ?? "";
    message.decimals = object.decimals ?? 0;
    message.mintable = object.mintable ?? false;
    return message;
  },
};

function createBaseEventGranted(): EventGranted {
  return { contractId: "", granter: "", grantee: "", permission: 0 };
}

export const EventGranted = {
  encode(
    message: EventGranted,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGranted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGranted();
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

  fromJSON(object: any): EventGranted {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permission: isSet(object.permission)
        ? permissionFromJSON(object.permission)
        : 0,
    };
  },

  toJSON(message: EventGranted): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permission !== undefined &&
      (obj.permission = permissionToJSON(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventGranted>, I>>(
    object: I
  ): EventGranted {
    const message = createBaseEventGranted();
    message.contractId = object.contractId ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBaseEventRenounced(): EventRenounced {
  return { contractId: "", grantee: "", permission: 0 };
}

export const EventRenounced = {
  encode(
    message: EventRenounced,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRenounced {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRenounced();
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

  fromJSON(object: any): EventRenounced {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permission: isSet(object.permission)
        ? permissionFromJSON(object.permission)
        : 0,
    };
  },

  toJSON(message: EventRenounced): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permission !== undefined &&
      (obj.permission = permissionToJSON(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRenounced>, I>>(
    object: I
  ): EventRenounced {
    const message = createBaseEventRenounced();
    message.contractId = object.contractId ?? "";
    message.grantee = object.grantee ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBaseEventMinted(): EventMinted {
  return { contractId: "", operator: "", to: "", amount: "" };
}

export const EventMinted = {
  encode(
    message: EventMinted,
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
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMinted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMinted();
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
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMinted {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventMinted): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMinted>, I>>(
    object: I
  ): EventMinted {
    const message = createBaseEventMinted();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventBurned(): EventBurned {
  return { contractId: "", operator: "", from: "", amount: "" };
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
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
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
          message.amount = reader.string();
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
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventBurned): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBurned>, I>>(
    object: I
  ): EventBurned {
    const message = createBaseEventBurned();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventModified(): EventModified {
  return { contractId: "", operator: "", changes: [] };
}

export const EventModified = {
  encode(
    message: EventModified,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventModified {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventModified();
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

  fromJSON(object: any): EventModified {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventModified): unknown {
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

  fromPartial<I extends Exact<DeepPartial<EventModified>, I>>(
    object: I
  ): EventModified {
    const message = createBaseEventModified();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.changes =
      object.changes?.map((e) => Attribute.fromPartial(e)) || [];
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
