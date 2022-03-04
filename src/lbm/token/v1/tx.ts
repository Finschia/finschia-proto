/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pair } from "../../../lbm/token/v1/token";

export const protobufPackage = "lbm.token.v1";

/** MsgTransfer represents a message to transfer tokens from one account to another. */
export interface MsgTransfer {
  classId: string;
  from: string;
  to: string;
  amount: string;
}

/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {}

/** MsgTransferFrom represents a message to transfer tokens from one account to another by the proxy. */
export interface MsgTransferFrom {
  classId: string;
  proxy: string;
  from: string;
  to: string;
  amount: string;
}

/** MsgTransferFromResponse defines the Msg/TransferFrom response type. */
export interface MsgTransferFromResponse {}

/** MsgApprove represents a message to transfer tokens on behalf of the approver */
export interface MsgApprove {
  classId: string;
  approver: string;
  proxy: string;
}

/** MsgApproveResponse defines the Msg/Approve response type. */
export interface MsgApproveResponse {}

/** MsgIssue represents a message to issue a token. */
export interface MsgIssue {
  owner: string;
  to: string;
  name: string;
  symbol: string;
  imageUri: string;
  meta: string;
  amount: string;
  mintable: boolean;
  decimals: number;
}

/** MsgIssueResponse defines the Msg/Issue response type. */
export interface MsgIssueResponse {}

/** MsgGrant represents a message to allow one to mint or burn tokens or modify a token metadata */
export interface MsgGrant {
  classId: string;
  granter: string;
  grantee: string;
  action: string;
}

/** MsgGrantResponse defines the Msg/Grant response type. */
export interface MsgGrantResponse {}

/** MsgRevoke represents a message to revoke a grant. */
export interface MsgRevoke {
  classId: string;
  grantee: string;
  action: string;
}

/** MsgRevokeResponse defines the Msg/Revoke response type. */
export interface MsgRevokeResponse {}

/** MsgMint represents a message to mint tokens. */
export interface MsgMint {
  classId: string;
  grantee: string;
  to: string;
  amount: string;
}

/** MsgMintResponse defines the Msg/Mint response type. */
export interface MsgMintResponse {}

/** MsgBurn represents a message to burn tokens. */
export interface MsgBurn {
  classId: string;
  from: string;
  amount: string;
}

/** MsgBurnResponse defines the Msg/Burn response type. */
export interface MsgBurnResponse {}

/** MsgBurnFrom represents a message to burn tokens. */
export interface MsgBurnFrom {
  classId: string;
  grantee: string;
  from: string;
  amount: string;
}

/** MsgBurnFromResponse defines the Msg/BurnFrom response type. */
export interface MsgBurnFromResponse {}

/** MsgModify represents a message to modify a token metadata. */
export interface MsgModify {
  classId: string;
  grantee: string;
  changes: Pair[];
}

/** MsgModifyResponse defines the Msg/Modify response type. */
export interface MsgModifyResponse {}

function createBaseMsgTransfer(): MsgTransfer {
  return { classId: "", from: "", to: "", amount: "" };
}

export const MsgTransfer = {
  encode(
    message: MsgTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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

  fromJSON(object: any): MsgTransfer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgTransfer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransfer>, I>>(
    object: I
  ): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.classId = object.classId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {};
}

export const MsgTransferResponse = {
  encode(
    _: MsgTransferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
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

  fromJSON(_: any): MsgTransferResponse {
    return {};
  },

  toJSON(_: MsgTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferResponse>, I>>(
    _: I
  ): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    return message;
  },
};

function createBaseMsgTransferFrom(): MsgTransferFrom {
  return { classId: "", proxy: "", from: "", to: "", amount: "" };
}

export const MsgTransferFrom = {
  encode(
    message: MsgTransferFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
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
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFrom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferFrom {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgTransferFrom): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferFrom>, I>>(
    object: I
  ): MsgTransferFrom {
    const message = createBaseMsgTransferFrom();
    message.classId = object.classId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgTransferFromResponse(): MsgTransferFromResponse {
  return {};
}

export const MsgTransferFromResponse = {
  encode(
    _: MsgTransferFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFromResponse();
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

  fromJSON(_: any): MsgTransferFromResponse {
    return {};
  },

  toJSON(_: MsgTransferFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferFromResponse>, I>>(
    _: I
  ): MsgTransferFromResponse {
    const message = createBaseMsgTransferFromResponse();
    return message;
  },
};

function createBaseMsgApprove(): MsgApprove {
  return { classId: "", approver: "", proxy: "" };
}

export const MsgApprove = {
  encode(
    message: MsgApprove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
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
          message.classId = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      approver: isSet(object.approver) ? String(object.approver) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
    };
  },

  toJSON(message: MsgApprove): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.approver !== undefined && (obj.approver = message.approver);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApprove>, I>>(
    object: I
  ): MsgApprove {
    const message = createBaseMsgApprove();
    message.classId = object.classId ?? "";
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

function createBaseMsgIssue(): MsgIssue {
  return {
    owner: "",
    to: "",
    name: "",
    symbol: "",
    imageUri: "",
    meta: "",
    amount: "",
    mintable: false,
    decimals: 0,
  };
}

export const MsgIssue = {
  encode(
    message: MsgIssue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.imageUri !== "") {
      writer.uint32(42).string(message.imageUri);
    }
    if (message.meta !== "") {
      writer.uint32(50).string(message.meta);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.mintable === true) {
      writer.uint32(64).bool(message.mintable);
    }
    if (message.decimals !== 0) {
      writer.uint32(72).int32(message.decimals);
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
          message.owner = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.imageUri = reader.string();
          break;
        case 6:
          message.meta = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.mintable = reader.bool();
          break;
        case 9:
          message.decimals = reader.int32();
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      to: isSet(object.to) ? String(object.to) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      imageUri: isSet(object.imageUri) ? String(object.imageUri) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
    };
  },

  toJSON(message: MsgIssue): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.to !== undefined && (obj.to = message.to);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.imageUri !== undefined && (obj.imageUri = message.imageUri);
    message.meta !== undefined && (obj.meta = message.meta);
    message.amount !== undefined && (obj.amount = message.amount);
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssue>, I>>(object: I): MsgIssue {
    const message = createBaseMsgIssue();
    message.owner = object.owner ?? "";
    message.to = object.to ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.imageUri = object.imageUri ?? "";
    message.meta = object.meta ?? "";
    message.amount = object.amount ?? "";
    message.mintable = object.mintable ?? false;
    message.decimals = object.decimals ?? 0;
    return message;
  },
};

function createBaseMsgIssueResponse(): MsgIssueResponse {
  return {};
}

export const MsgIssueResponse = {
  encode(
    _: MsgIssueResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueResponse();
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

  fromJSON(_: any): MsgIssueResponse {
    return {};
  },

  toJSON(_: MsgIssueResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueResponse>, I>>(
    _: I
  ): MsgIssueResponse {
    const message = createBaseMsgIssueResponse();
    return message;
  },
};

function createBaseMsgGrant(): MsgGrant {
  return { classId: "", granter: "", grantee: "", action: "" };
}

export const MsgGrant = {
  encode(
    message: MsgGrant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.grantee = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGrant {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: MsgGrant): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrant>, I>>(object: I): MsgGrant {
    const message = createBaseMsgGrant();
    message.classId = object.classId ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}

export const MsgGrantResponse = {
  encode(
    _: MsgGrantResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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

  fromJSON(_: any): MsgGrantResponse {
    return {};
  },

  toJSON(_: MsgGrantResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantResponse>, I>>(
    _: I
  ): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
};

function createBaseMsgRevoke(): MsgRevoke {
  return { classId: "", grantee: "", action: "" };
}

export const MsgRevoke = {
  encode(
    message: MsgRevoke,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevoke {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: MsgRevoke): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevoke>, I>>(
    object: I
  ): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.classId = object.classId ?? "";
    message.grantee = object.grantee ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}

export const MsgRevokeResponse = {
  encode(
    _: MsgRevokeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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

  fromJSON(_: any): MsgRevokeResponse {
    return {};
  },

  toJSON(_: MsgRevokeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeResponse>, I>>(
    _: I
  ): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
};

function createBaseMsgMint(): MsgMint {
  return { classId: "", grantee: "", to: "", amount: "" };
}

export const MsgMint = {
  encode(
    message: MsgMint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
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
          message.classId = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.classId = object.classId ?? "";
    message.grantee = object.grantee ?? "";
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
  return { classId: "", from: "", amount: "" };
}

export const MsgBurn = {
  encode(
    message: MsgBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
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
          message.classId = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.from !== undefined && (obj.from = message.from);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.classId = object.classId ?? "";
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

function createBaseMsgBurnFrom(): MsgBurnFrom {
  return { classId: "", grantee: "", from: "", amount: "" };
}

export const MsgBurnFrom = {
  encode(
    message: MsgBurnFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFrom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
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

  fromJSON(object: any): MsgBurnFrom {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgBurnFrom): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.from !== undefined && (obj.from = message.from);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFrom>, I>>(
    object: I
  ): MsgBurnFrom {
    const message = createBaseMsgBurnFrom();
    message.classId = object.classId ?? "";
    message.grantee = object.grantee ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgBurnFromResponse(): MsgBurnFromResponse {
  return {};
}

export const MsgBurnFromResponse = {
  encode(
    _: MsgBurnFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFromResponse();
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

  fromJSON(_: any): MsgBurnFromResponse {
    return {};
  },

  toJSON(_: MsgBurnFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFromResponse>, I>>(
    _: I
  ): MsgBurnFromResponse {
    const message = createBaseMsgBurnFromResponse();
    return message;
  },
};

function createBaseMsgModify(): MsgModify {
  return { classId: "", grantee: "", changes: [] };
}

export const MsgModify = {
  encode(
    message: MsgModify,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    for (const v of message.changes) {
      Pair.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.classId = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.changes.push(Pair.decode(reader, reader.uint32()));
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Pair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgModify): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? Pair.toJSON(e) : undefined
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
    message.classId = object.classId ?? "";
    message.grantee = object.grantee ?? "";
    message.changes = object.changes?.map((e) => Pair.fromPartial(e)) || [];
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

/** Msg defines the token Msg service. */
export interface Msg {
  /** Transfer defines a method to transfer tokens from one account to another account */
  Transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
  /** TransferFrom defines a method to transfer tokens from one account to another account by the proxy */
  TransferFrom(request: MsgTransferFrom): Promise<MsgTransferFromResponse>;
  /** Approve allows one to transfer tokens on behalf of the approver */
  Approve(request: MsgApprove): Promise<MsgApproveResponse>;
  /** Issue defines a method to issue a token */
  Issue(request: MsgIssue): Promise<MsgIssueResponse>;
  /** Grant allows one to mint or burn tokens or modify a token metadata */
  Grant(request: MsgGrant): Promise<MsgGrantResponse>;
  /** Revoke revokes the grant */
  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
  /** Mint defines a method to mint tokens */
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  /** Burn defines a method to burn tokens */
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
  /** BurnFrom defines a method to burn tokens */
  BurnFrom(request: MsgBurnFrom): Promise<MsgBurnFromResponse>;
  /** Modify defines a method to modify a token metadata */
  Modify(request: MsgModify): Promise<MsgModifyResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Transfer = this.Transfer.bind(this);
    this.TransferFrom = this.TransferFrom.bind(this);
    this.Approve = this.Approve.bind(this);
    this.Issue = this.Issue.bind(this);
    this.Grant = this.Grant.bind(this);
    this.Revoke = this.Revoke.bind(this);
    this.Mint = this.Mint.bind(this);
    this.Burn = this.Burn.bind(this);
    this.BurnFrom = this.BurnFrom.bind(this);
    this.Modify = this.Modify.bind(this);
  }
  Transfer(request: MsgTransfer): Promise<MsgTransferResponse> {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Transfer", data);
    return promise.then((data) =>
      MsgTransferResponse.decode(new _m0.Reader(data))
    );
  }

  TransferFrom(request: MsgTransferFrom): Promise<MsgTransferFromResponse> {
    const data = MsgTransferFrom.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "TransferFrom", data);
    return promise.then((data) =>
      MsgTransferFromResponse.decode(new _m0.Reader(data))
    );
  }

  Approve(request: MsgApprove): Promise<MsgApproveResponse> {
    const data = MsgApprove.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Approve", data);
    return promise.then((data) =>
      MsgApproveResponse.decode(new _m0.Reader(data))
    );
  }

  Issue(request: MsgIssue): Promise<MsgIssueResponse> {
    const data = MsgIssue.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Issue", data);
    return promise.then((data) =>
      MsgIssueResponse.decode(new _m0.Reader(data))
    );
  }

  Grant(request: MsgGrant): Promise<MsgGrantResponse> {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Grant", data);
    return promise.then((data) =>
      MsgGrantResponse.decode(new _m0.Reader(data))
    );
  }

  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse> {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "Revoke", data);
    return promise.then((data) =>
      MsgRevokeResponse.decode(new _m0.Reader(data))
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

  BurnFrom(request: MsgBurnFrom): Promise<MsgBurnFromResponse> {
    const data = MsgBurnFrom.encode(request).finish();
    const promise = this.rpc.request("lbm.token.v1.Msg", "BurnFrom", data);
    return promise.then((data) =>
      MsgBurnFromResponse.decode(new _m0.Reader(data))
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
