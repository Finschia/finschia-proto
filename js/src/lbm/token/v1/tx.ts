/* eslint-disable */
import Long from "long";
import { Attribute } from "./token";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.token.v1";

/**
 * MsgSend defines the Msg/Send request type.
 *
 * Signer: `from`
 *
 * @deprecated
 */
export interface MsgSend {
  /** contract id associated with the token class. */
  contractId: string;
  /** holder whose tokens are being sent. */
  from: string;
  /** recipient of the tokens. */
  to: string;
  /** number of tokens to send. */
  amount: string;
}

/**
 * MsgSendResponse defines the Msg/Send response type.
 *
 * @deprecated
 */
export interface MsgSendResponse {}

/**
 * MsgOperatorSend defines the Msg/OperatorSend request type.
 *
 * Signer: `operator`
 *
 * @deprecated
 */
export interface MsgOperatorSend {
  /** contract id associated with the token class. */
  contractId: string;
  /** the address of the operator. */
  operator: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /** the amount of the transfer. */
  amount: string;
}

/**
 * MsgOperatorSendResponse defines the Msg/OperatorSend response type.
 *
 * @deprecated
 */
export interface MsgOperatorSendResponse {}

/**
 * MsgRevokeOperator defines the Msg/RevokeOperator request type.
 *
 * Signer: `holder`
 *
 * Since: 0.46.0 (finschia)
 *
 * @deprecated
 */
export interface MsgRevokeOperator {
  /** contract id associated with the token class. */
  contractId: string;
  /** address of a holder which revokes the `operator` address as an operator. */
  holder: string;
  /** address to rescind as an operator for `holder`. */
  operator: string;
}

/**
 * MsgRevokeOperatorResponse defines the Msg/RevokeOperator response type.
 *
 * Since: 0.46.0 (finschia)
 *
 * @deprecated
 */
export interface MsgRevokeOperatorResponse {}

/**
 * MsgAuthorizeOperator defines the Msg/AuthorizeOperator request type.
 *
 * Signer: `holder`
 *
 * @deprecated
 */
export interface MsgAuthorizeOperator {
  /** contract id associated with the token class. */
  contractId: string;
  /** address of the token holder which approves the authorization. */
  holder: string;
  /** address of the operator which the authorization is granted to. */
  operator: string;
}

/**
 * MsgAuthorizeOperatorResponse defines the Msg/AuthorizeOperator response type.
 *
 * @deprecated
 */
export interface MsgAuthorizeOperatorResponse {}

/**
 * MsgIssue defines the Msg/Issue request type.
 *
 * Signer: `owner`
 *
 * @deprecated
 */
export interface MsgIssue {
  /** name defines the human-readable name of the token class. mandatory (not ERC20 compliant). */
  name: string;
  /** symbol is an abbreviated name for token class. mandatory (not ERC20 compliant). */
  symbol: string;
  /** uri for the image of the token class stored off chain. */
  uri: string;
  /** meta is a brief description of token class. */
  meta: string;
  /** decimals is the number of decimals which one must divide the amount by to get its user representation. */
  decimals: number;
  /** mintable represents whether the token is allowed to mint. */
  mintable: boolean;
  /** the address which all permissions on the token class will be granted to (not a permanent property). */
  owner: string;
  /** the address to send the minted token to. mandatory. */
  to: string;
  /** amount of tokens to mint on issuance. mandatory. */
  amount: string;
}

/**
 * MsgIssueResponse defines the Msg/Issue response type.
 *
 * @deprecated
 */
export interface MsgIssueResponse {
  /** id of the new contract. */
  contractId: string;
}

/**
 * MsgGrantPermission defines the Msg/GrantPermission request type.
 *
 * Signer: `granter`
 *
 * @deprecated
 */
export interface MsgGrantPermission {
  /** contract id associated with the token class. */
  contractId: string;
  /** address of the granter which must have the permission to give. */
  from: string;
  /** address of the grantee. */
  to: string;
  /** permission on the token class. */
  permission: string;
}

/**
 * MsgGrantPermissionResponse defines the Msg/GrantPermission response type.
 *
 * @deprecated
 */
export interface MsgGrantPermissionResponse {}

/**
 * MsgRevokePermission defines the Msg/RevokePermission request type.
 *
 * Signer: `grantee`
 *
 * @deprecated
 */
export interface MsgRevokePermission {
  /** contract id associated with the token class. */
  contractId: string;
  /** address of the grantee which abandons the permission. */
  from: string;
  /** permission on the token class. */
  permission: string;
}

/**
 * MsgRevokePermissionResponse defines the Msg/RevokePermission response type.
 *
 * @deprecated
 */
export interface MsgRevokePermissionResponse {}

/**
 * MsgMint defines the Msg/Mint request type.
 *
 * Signer: `from`
 *
 * @deprecated
 */
export interface MsgMint {
  /** contract id associated with the token class. */
  contractId: string;
  /** address which triggers the mint. */
  from: string;
  /** recipient of the tokens. */
  to: string;
  /** number of tokens to mint. */
  amount: string;
}

/**
 * MsgMintResponse defines the Msg/Mint response type.
 *
 * @deprecated
 */
export interface MsgMintResponse {}

/**
 * MsgBurn defines the Msg/Burn request type.
 *
 * Signer: `from`
 *
 * @deprecated
 */
export interface MsgBurn {
  /** contract id associated with the token class. */
  contractId: string;
  /** address whose tokens are being burned. */
  from: string;
  /** number of tokens to burn. */
  amount: string;
}

/**
 * MsgBurnResponse defines the Msg/Burn response type.
 *
 * @deprecated
 */
export interface MsgBurnResponse {}

/**
 * MsgOperatorBurn defines the Msg/OperatorBurn request type.
 *
 * Signer: `operator`
 *
 * @deprecated
 */
export interface MsgOperatorBurn {
  /** contract id associated with the token class. */
  contractId: string;
  /** address which triggers the burn. */
  operator: string;
  /** address which the tokens will be burnt from. */
  from: string;
  /** the amount of the burn. */
  amount: string;
}

/**
 * MsgOperatorBurnResponse defines the Msg/OperatorBurn response type.
 *
 * @deprecated
 */
export interface MsgOperatorBurnResponse {}

/**
 * MsgModify defines the Msg/Modify request type.
 *
 * Signer: `owner`
 *
 * @deprecated
 */
export interface MsgModify {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the grantee which must have modify permission. */
  owner: string;
  /**
   * changes to apply.
   * possible attribute keys are: name, uri, img_uri (deprecated), meta
   */
  changes: Attribute[];
}

/**
 * MsgModifyResponse defines the Msg/Modify response type.
 *
 * @deprecated
 */
export interface MsgModifyResponse {}

function createBaseMsgSend(): MsgSend {
  return { contractId: "", from: "", to: "", amount: "" };
}

export const MsgSend = {
  encode(
    message: MsgSend,
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
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
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
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
    const message = createBaseMsgSend();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}

export const MsgSendResponse = {
  encode(
    _: MsgSendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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

  fromJSON(_: any): MsgSendResponse {
    return {};
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(
    _: I
  ): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
};

function createBaseMsgOperatorSend(): MsgOperatorSend {
  return { contractId: "", operator: "", from: "", to: "", amount: "" };
}

export const MsgOperatorSend = {
  encode(
    message: MsgOperatorSend,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorSend();
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

  fromJSON(object: any): MsgOperatorSend {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgOperatorSend): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorSend>, I>>(
    object: I
  ): MsgOperatorSend {
    const message = createBaseMsgOperatorSend();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgOperatorSendResponse(): MsgOperatorSendResponse {
  return {};
}

export const MsgOperatorSendResponse = {
  encode(
    _: MsgOperatorSendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorSendResponse();
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

  fromJSON(_: any): MsgOperatorSendResponse {
    return {};
  },

  toJSON(_: MsgOperatorSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorSendResponse>, I>>(
    _: I
  ): MsgOperatorSendResponse {
    const message = createBaseMsgOperatorSendResponse();
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

function createBaseMsgIssue(): MsgIssue {
  return {
    name: "",
    symbol: "",
    uri: "",
    meta: "",
    decimals: 0,
    mintable: false,
    owner: "",
    to: "",
    amount: "",
  };
}

export const MsgIssue = {
  encode(
    message: MsgIssue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
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
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    if (message.to !== "") {
      writer.uint32(66).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(74).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.uri = reader.string();
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
        case 7:
          message.owner = reader.string();
          break;
        case 8:
          message.to = reader.string();
          break;
        case 9:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssue {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgIssue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.uri !== undefined && (obj.uri = message.uri);
    message.meta !== undefined && (obj.meta = message.meta);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.owner !== undefined && (obj.owner = message.owner);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssue>, I>>(object: I): MsgIssue {
    const message = createBaseMsgIssue();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.uri = object.uri ?? "";
    message.meta = object.meta ?? "";
    message.decimals = object.decimals ?? 0;
    message.mintable = object.mintable ?? false;
    message.owner = object.owner ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgIssueResponse(): MsgIssueResponse {
  return { contractId: "" };
}

export const MsgIssueResponse = {
  encode(
    message: MsgIssueResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueResponse();
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

  fromJSON(object: any): MsgIssueResponse {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
    };
  },

  toJSON(message: MsgIssueResponse): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueResponse>, I>>(
    object: I
  ): MsgIssueResponse {
    const message = createBaseMsgIssueResponse();
    message.contractId = object.contractId ?? "";
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

function createBaseMsgMint(): MsgMint {
  return { contractId: "", from: "", to: "", amount: "" };
}

export const MsgMint = {
  encode(
    message: MsgMint,
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
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
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
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}

export const MsgMintResponse = {
  encode(
    _: MsgMintResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
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

  fromJSON(_: any): MsgMintResponse {
    return {};
  },

  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintResponse>, I>>(
    _: I
  ): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
};

function createBaseMsgBurn(): MsgBurn {
  return { contractId: "", from: "", amount: "" };
}

export const MsgBurn = {
  encode(
    message: MsgBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
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
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}

export const MsgBurnResponse = {
  encode(
    _: MsgBurnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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

  fromJSON(_: any): MsgBurnResponse {
    return {};
  },

  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(
    _: I
  ): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
};

function createBaseMsgOperatorBurn(): MsgOperatorBurn {
  return { contractId: "", operator: "", from: "", amount: "" };
}

export const MsgOperatorBurn = {
  encode(
    message: MsgOperatorBurn,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorBurn();
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

  fromJSON(object: any): MsgOperatorBurn {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgOperatorBurn): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorBurn>, I>>(
    object: I
  ): MsgOperatorBurn {
    const message = createBaseMsgOperatorBurn();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgOperatorBurnResponse(): MsgOperatorBurnResponse {
  return {};
}

export const MsgOperatorBurnResponse = {
  encode(
    _: MsgOperatorBurnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorBurnResponse();
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

  fromJSON(_: any): MsgOperatorBurnResponse {
    return {};
  },

  toJSON(_: MsgOperatorBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorBurnResponse>, I>>(
    _: I
  ): MsgOperatorBurnResponse {
    const message = createBaseMsgOperatorBurnResponse();
    return message;
  },
};

function createBaseMsgModify(): MsgModify {
  return { contractId: "", owner: "", changes: [] };
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
    for (const v of message.changes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
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
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgModify): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.owner !== undefined && (obj.owner = message.owner);
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

/**
 * Msg defines the token Msg service.
 *
 * @deprecated
 */
export interface Msg {
  /**
   * Send defines a method to send tokens from one account to another account.
   * Fires:
   * - EventSent
   * - transfer (deprecated, not typed)
   */
  Send(request: MsgSend): Promise<MsgSendResponse>;
  /**
   * OperatorSend defines a method to send tokens from one account to another account by the operator.
   * Fires:
   * - EventSent
   * - transfer_from (deprecated, not typed)
   * Note: the approval has no value of limit (not ERC20 compliant).
   */
  OperatorSend(request: MsgOperatorSend): Promise<MsgOperatorSendResponse>;
  /**
   * RevokeOperator revoke the authorization of the operator to send the holder's tokens.
   * Fires:
   * - EventRevokedOperator
   * Note: it introduces breaking change, because the legacy clients cannot track this revocation.
   * Since: 0.46.0 (finschia)
   */
  RevokeOperator(
    request: MsgRevokeOperator
  ): Promise<MsgRevokeOperatorResponse>;
  /**
   * AuthorizeOperator allows one to send tokens on behalf of the holder.
   * Fires:
   * - EventAuthorizedOperator
   * - approve_token (deprecated, not typed)
   */
  AuthorizeOperator(
    request: MsgAuthorizeOperator
  ): Promise<MsgAuthorizeOperatorResponse>;
  /**
   * Issue defines a method to create a class of token.
   * it grants `mint`, `burn` and `modify` permissions on the token class to its creator (see also `mintable`).
   * Fires:
   * - EventIssue
   * - EventMinted
   * - issue (deprecated, not typed)
   */
  Issue(request: MsgIssue): Promise<MsgIssueResponse>;
  /**
   * GrantPermission allows one to mint or burn tokens or modify a token metadata.
   * Fires:
   * - EventGrant
   * - grant_perm (deprecated, not typed)
   */
  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse>;
  /**
   * RevokePermission abandons a permission.
   * Fires:
   * - EventAbandon
   * - revoke_perm (deprecated, not typed)
   */
  RevokePermission(
    request: MsgRevokePermission
  ): Promise<MsgRevokePermissionResponse>;
  /**
   * Mint defines a method to mint tokens.
   * Fires:
   * - EventMinted
   * - mint (deprecated, not typed)
   */
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  /**
   * Burn defines a method to burn tokens.
   * Fires:
   * - EventBurned
   * - burn (deprecated, not typed)
   */
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
  /**
   * OperatorBurn defines a method to burn tokens by the operator.
   * Fires:
   * - EventBurned
   * - burn_from (deprecated, not typed)
   */
  OperatorBurn(request: MsgOperatorBurn): Promise<MsgOperatorBurnResponse>;
  /**
   * Modify defines a method to modify a token class.
   * Fires:
   * - EventModified
   * - modify_token (deprecated, not typed)
   */
  Modify(request: MsgModify): Promise<MsgModifyResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Send = this.Send.bind(this);
    this.OperatorSend = this.OperatorSend.bind(this);
    this.RevokeOperator = this.RevokeOperator.bind(this);
    this.AuthorizeOperator = this.AuthorizeOperator.bind(this);
    this.Issue = this.Issue.bind(this);
    this.GrantPermission = this.GrantPermission.bind(this);
    this.RevokePermission = this.RevokePermission.bind(this);
    this.Mint = this.Mint.bind(this);
    this.Burn = this.Burn.bind(this);
    this.OperatorBurn = this.OperatorBurn.bind(this);
    this.Modify = this.Modify.bind(this);
  }
  Send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Send", data);
    return promise.then((data) => MsgSendResponse.decode(new _m0.Reader(data)));
  }

  OperatorSend(request: MsgOperatorSend): Promise<MsgOperatorSendResponse> {
    const data = MsgOperatorSend.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "OperatorSend", data);
    return promise.then((data) =>
      MsgOperatorSendResponse.decode(new _m0.Reader(data))
    );
  }

  RevokeOperator(
    request: MsgRevokeOperator
  ): Promise<MsgRevokeOperatorResponse> {
    const data = MsgRevokeOperator.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.token.v1.Msg",
      "RevokeOperator",
      data
    );
    return promise.then((data) =>
      MsgRevokeOperatorResponse.decode(new _m0.Reader(data))
    );
  }

  AuthorizeOperator(
    request: MsgAuthorizeOperator
  ): Promise<MsgAuthorizeOperatorResponse> {
    const data = MsgAuthorizeOperator.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.token.v1.Msg",
      "AuthorizeOperator",
      data
    );
    return promise.then((data) =>
      MsgAuthorizeOperatorResponse.decode(new _m0.Reader(data))
    );
  }

  Issue(request: MsgIssue): Promise<MsgIssueResponse> {
    const data = MsgIssue.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Issue", data);
    return promise.then((data) =>
      MsgIssueResponse.decode(new _m0.Reader(data))
    );
  }

  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse> {
    const data = MsgGrantPermission.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.token.v1.Msg",
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
      "lbm.token.v1.Msg",
      "RevokePermission",
      data
    );
    return promise.then((data) =>
      MsgRevokePermissionResponse.decode(new _m0.Reader(data))
    );
  }

  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Mint", data);
    return promise.then((data) => MsgMintResponse.decode(new _m0.Reader(data)));
  }

  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Burn", data);
    return promise.then((data) => MsgBurnResponse.decode(new _m0.Reader(data)));
  }

  OperatorBurn(request: MsgOperatorBurn): Promise<MsgOperatorBurnResponse> {
    const data = MsgOperatorBurn.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "OperatorBurn", data);
    return promise.then((data) =>
      MsgOperatorBurnResponse.decode(new _m0.Reader(data))
    );
  }

  Modify(request: MsgModify): Promise<MsgModifyResponse> {
    const data = MsgModify.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Modify", data);
    return promise.then((data) =>
      MsgModifyResponse.decode(new _m0.Reader(data))
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
