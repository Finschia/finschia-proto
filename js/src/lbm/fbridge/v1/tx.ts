/* eslint-disable */
import {
  Params,
  Role,
  VoteOption,
  BridgeStatus,
  roleFromJSON,
  roleToJSON,
  voteOptionFromJSON,
  voteOptionToJSON,
  bridgeStatusFromJSON,
  bridgeStatusToJSON,
} from "./fbridge";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fbridge.v1";

export interface MsgUpdateParams {
  /** the authority address */
  authority: string;
  /**
   * params defines the x/fbridge parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

export interface MsgUpdateParamsResponse {}

/** MsgTransfer is input values required for bridge transfer */
export interface MsgTransfer {
  /** the sender address on the source chain */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** the amount of token to be transferred */
  amount: string;
}

export interface MsgTransferResponse {}

/** MsgProvision is input values required for provisioning */
export interface MsgProvision {
  /** the operator address */
  from: string;
  /** the sequence number of the bridge request */
  seq: Long;
  /** the sender address on the source chain */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** the amount of token to be claimed */
  amount: string;
}

export interface MsgProvisionResponse {}

/** MsgHoldTransfer is input values required for holding transfer */
export interface MsgHoldTransfer {
  /** the judge address */
  from: string;
  /** the sequence number of the bridge request */
  seq: Long;
}

export interface MsgHoldTransferResponse {}

/** MsgReleaseTransfer is input values required for releasing a held transfer by time lock */
export interface MsgReleaseTransfer {
  /** the guardian address */
  from: string;
  /** the sequence number of the bridge request */
  seq: Long;
}

export interface MsgReleaseTransferResponse {}

/** MsgRemoveProvision is input values required for removing a specific confirmed provision */
export interface MsgRemoveProvision {
  /** the judge address */
  from: string;
  /** the sequence number of the bridge request */
  seq: Long;
}

export interface MsgRemoveProvisionResponse {}

/** MsgClaimBatch is input values required for claiming multiple claimable provisions */
export interface MsgClaimBatch {
  /** the claimer address */
  from: string;
  /** the maximum number of claims to be made at once */
  maxClaims: Long;
}

export interface MsgClaimBatchResponse {}

/** MsgClaim is input values required for claiming a provision */
export interface MsgClaim {
  /** the claimer address */
  from: string;
  /** the sequence number of the bridge request */
  seq: Long;
}

export interface MsgClaimResponse {}

/** MsgUpdateRole is input values required for updating the role of an address */
export interface MsgSuggestRole {
  /** the guardian address */
  from: string;
  /** the address to update the role */
  target: string;
  /**
   * the role to be updated
   * - unspecified : 0, used to remove the address from a group
   * - guardian : 1
   * - operator : 2
   * - judge : 3
   */
  role: Role;
}

export interface MsgSuggestRoleResponse {}

export interface MsgAddVoteForRole {
  /** the guardian address */
  from: string;
  /** the proposal ID */
  proposalId: Long;
  /** the vote option */
  option: VoteOption;
}

export interface MsgAddVoteForRoleResponse {}

/** MsgSetBridgeStatus is input values required for setting the status of the bridge module */
export interface MsgSetBridgeStatus {
  /** the guardian address */
  guardian: string;
  status: BridgeStatus;
}

export interface MsgSetBridgeStatusResponse {}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgTransfer(): MsgTransfer {
  return { sender: "", receiver: "", amount: "" };
}

export const MsgTransfer = {
  encode(
    message: MsgTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
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
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
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

  fromJSON(object: any): MsgTransfer {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgTransfer): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransfer>, I>>(
    object: I
  ): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
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

function createBaseMsgProvision(): MsgProvision {
  return { from: "", seq: Long.UZERO, sender: "", receiver: "", amount: "" };
}

export const MsgProvision = {
  encode(
    message: MsgProvision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.seq.isZero()) {
      writer.uint32(16).uint64(message.seq);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.seq = reader.uint64() as Long;
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
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

  fromJSON(object: any): MsgProvision {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgProvision): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProvision>, I>>(
    object: I
  ): MsgProvision {
    const message = createBaseMsgProvision();
    message.from = object.from ?? "";
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgProvisionResponse(): MsgProvisionResponse {
  return {};
}

export const MsgProvisionResponse = {
  encode(
    _: MsgProvisionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgProvisionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvisionResponse();
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

  fromJSON(_: any): MsgProvisionResponse {
    return {};
  },

  toJSON(_: MsgProvisionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProvisionResponse>, I>>(
    _: I
  ): MsgProvisionResponse {
    const message = createBaseMsgProvisionResponse();
    return message;
  },
};

function createBaseMsgHoldTransfer(): MsgHoldTransfer {
  return { from: "", seq: Long.UZERO };
}

export const MsgHoldTransfer = {
  encode(
    message: MsgHoldTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.seq.isZero()) {
      writer.uint32(16).uint64(message.seq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHoldTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHoldTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.seq = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHoldTransfer {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: MsgHoldTransfer): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgHoldTransfer>, I>>(
    object: I
  ): MsgHoldTransfer {
    const message = createBaseMsgHoldTransfer();
    message.from = object.from ?? "";
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgHoldTransferResponse(): MsgHoldTransferResponse {
  return {};
}

export const MsgHoldTransferResponse = {
  encode(
    _: MsgHoldTransferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgHoldTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHoldTransferResponse();
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

  fromJSON(_: any): MsgHoldTransferResponse {
    return {};
  },

  toJSON(_: MsgHoldTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgHoldTransferResponse>, I>>(
    _: I
  ): MsgHoldTransferResponse {
    const message = createBaseMsgHoldTransferResponse();
    return message;
  },
};

function createBaseMsgReleaseTransfer(): MsgReleaseTransfer {
  return { from: "", seq: Long.UZERO };
}

export const MsgReleaseTransfer = {
  encode(
    message: MsgReleaseTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.seq.isZero()) {
      writer.uint32(16).uint64(message.seq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReleaseTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReleaseTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.seq = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReleaseTransfer {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: MsgReleaseTransfer): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReleaseTransfer>, I>>(
    object: I
  ): MsgReleaseTransfer {
    const message = createBaseMsgReleaseTransfer();
    message.from = object.from ?? "";
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgReleaseTransferResponse(): MsgReleaseTransferResponse {
  return {};
}

export const MsgReleaseTransferResponse = {
  encode(
    _: MsgReleaseTransferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgReleaseTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReleaseTransferResponse();
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

  fromJSON(_: any): MsgReleaseTransferResponse {
    return {};
  },

  toJSON(_: MsgReleaseTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReleaseTransferResponse>, I>>(
    _: I
  ): MsgReleaseTransferResponse {
    const message = createBaseMsgReleaseTransferResponse();
    return message;
  },
};

function createBaseMsgRemoveProvision(): MsgRemoveProvision {
  return { from: "", seq: Long.UZERO };
}

export const MsgRemoveProvision = {
  encode(
    message: MsgRemoveProvision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.seq.isZero()) {
      writer.uint32(16).uint64(message.seq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveProvision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveProvision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.seq = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveProvision {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: MsgRemoveProvision): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveProvision>, I>>(
    object: I
  ): MsgRemoveProvision {
    const message = createBaseMsgRemoveProvision();
    message.from = object.from ?? "";
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgRemoveProvisionResponse(): MsgRemoveProvisionResponse {
  return {};
}

export const MsgRemoveProvisionResponse = {
  encode(
    _: MsgRemoveProvisionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveProvisionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveProvisionResponse();
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

  fromJSON(_: any): MsgRemoveProvisionResponse {
    return {};
  },

  toJSON(_: MsgRemoveProvisionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveProvisionResponse>, I>>(
    _: I
  ): MsgRemoveProvisionResponse {
    const message = createBaseMsgRemoveProvisionResponse();
    return message;
  },
};

function createBaseMsgClaimBatch(): MsgClaimBatch {
  return { from: "", maxClaims: Long.UZERO };
}

export const MsgClaimBatch = {
  encode(
    message: MsgClaimBatch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.maxClaims.isZero()) {
      writer.uint32(16).uint64(message.maxClaims);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.maxClaims = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimBatch {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      maxClaims: isSet(object.maxClaims)
        ? Long.fromValue(object.maxClaims)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgClaimBatch): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.maxClaims !== undefined &&
      (obj.maxClaims = (message.maxClaims || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimBatch>, I>>(
    object: I
  ): MsgClaimBatch {
    const message = createBaseMsgClaimBatch();
    message.from = object.from ?? "";
    message.maxClaims =
      object.maxClaims !== undefined && object.maxClaims !== null
        ? Long.fromValue(object.maxClaims)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgClaimBatchResponse(): MsgClaimBatchResponse {
  return {};
}

export const MsgClaimBatchResponse = {
  encode(
    _: MsgClaimBatchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimBatchResponse();
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

  fromJSON(_: any): MsgClaimBatchResponse {
    return {};
  },

  toJSON(_: MsgClaimBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimBatchResponse>, I>>(
    _: I
  ): MsgClaimBatchResponse {
    const message = createBaseMsgClaimBatchResponse();
    return message;
  },
};

function createBaseMsgClaim(): MsgClaim {
  return { from: "", seq: Long.UZERO };
}

export const MsgClaim = {
  encode(
    message: MsgClaim,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.seq.isZero()) {
      writer.uint32(16).uint64(message.seq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.seq = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaim {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    message.from = object.from ?? "";
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}

export const MsgClaimResponse = {
  encode(
    _: MsgClaimResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
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

  fromJSON(_: any): MsgClaimResponse {
    return {};
  },

  toJSON(_: MsgClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimResponse>, I>>(
    _: I
  ): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
};

function createBaseMsgSuggestRole(): MsgSuggestRole {
  return { from: "", target: "", role: 0 };
}

export const MsgSuggestRole = {
  encode(
    message: MsgSuggestRole,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    if (message.role !== 0) {
      writer.uint32(24).int32(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuggestRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuggestRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.target = reader.string();
          break;
        case 3:
          message.role = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSuggestRole {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      target: isSet(object.target) ? String(object.target) : "",
      role: isSet(object.role) ? roleFromJSON(object.role) : 0,
    };
  },

  toJSON(message: MsgSuggestRole): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.target !== undefined && (obj.target = message.target);
    message.role !== undefined && (obj.role = roleToJSON(message.role));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSuggestRole>, I>>(
    object: I
  ): MsgSuggestRole {
    const message = createBaseMsgSuggestRole();
    message.from = object.from ?? "";
    message.target = object.target ?? "";
    message.role = object.role ?? 0;
    return message;
  },
};

function createBaseMsgSuggestRoleResponse(): MsgSuggestRoleResponse {
  return {};
}

export const MsgSuggestRoleResponse = {
  encode(
    _: MsgSuggestRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSuggestRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuggestRoleResponse();
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

  fromJSON(_: any): MsgSuggestRoleResponse {
    return {};
  },

  toJSON(_: MsgSuggestRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSuggestRoleResponse>, I>>(
    _: I
  ): MsgSuggestRoleResponse {
    const message = createBaseMsgSuggestRoleResponse();
    return message;
  },
};

function createBaseMsgAddVoteForRole(): MsgAddVoteForRole {
  return { from: "", proposalId: Long.UZERO, option: 0 };
}

export const MsgAddVoteForRole = {
  encode(
    message: MsgAddVoteForRole,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.proposalId.isZero()) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddVoteForRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddVoteForRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64() as Long;
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddVoteForRole {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      proposalId: isSet(object.proposalId)
        ? Long.fromValue(object.proposalId)
        : Long.UZERO,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
    };
  },

  toJSON(message: MsgAddVoteForRole): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddVoteForRole>, I>>(
    object: I
  ): MsgAddVoteForRole {
    const message = createBaseMsgAddVoteForRole();
    message.from = object.from ?? "";
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.option = object.option ?? 0;
    return message;
  },
};

function createBaseMsgAddVoteForRoleResponse(): MsgAddVoteForRoleResponse {
  return {};
}

export const MsgAddVoteForRoleResponse = {
  encode(
    _: MsgAddVoteForRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddVoteForRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddVoteForRoleResponse();
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

  fromJSON(_: any): MsgAddVoteForRoleResponse {
    return {};
  },

  toJSON(_: MsgAddVoteForRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddVoteForRoleResponse>, I>>(
    _: I
  ): MsgAddVoteForRoleResponse {
    const message = createBaseMsgAddVoteForRoleResponse();
    return message;
  },
};

function createBaseMsgSetBridgeStatus(): MsgSetBridgeStatus {
  return { guardian: "", status: 0 };
}

export const MsgSetBridgeStatus = {
  encode(
    message: MsgSetBridgeStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guardian !== "") {
      writer.uint32(10).string(message.guardian);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBridgeStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBridgeStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guardian = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetBridgeStatus {
    return {
      guardian: isSet(object.guardian) ? String(object.guardian) : "",
      status: isSet(object.status) ? bridgeStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgSetBridgeStatus): unknown {
    const obj: any = {};
    message.guardian !== undefined && (obj.guardian = message.guardian);
    message.status !== undefined &&
      (obj.status = bridgeStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetBridgeStatus>, I>>(
    object: I
  ): MsgSetBridgeStatus {
    const message = createBaseMsgSetBridgeStatus();
    message.guardian = object.guardian ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgSetBridgeStatusResponse(): MsgSetBridgeStatusResponse {
  return {};
}

export const MsgSetBridgeStatusResponse = {
  encode(
    _: MsgSetBridgeStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetBridgeStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBridgeStatusResponse();
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

  fromJSON(_: any): MsgSetBridgeStatusResponse {
    return {};
  },

  toJSON(_: MsgSetBridgeStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetBridgeStatusResponse>, I>>(
    _: I
  ): MsgSetBridgeStatusResponse {
    const message = createBaseMsgSetBridgeStatusResponse();
    return message;
  },
};

export interface Msg {
  /** UpdateParams updates the x/fbridge parameters. */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** Submit a transfer request to the bridge module. */
  Transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
  /** Submit a provision to the bridge module. */
  Provision(request: MsgProvision): Promise<MsgProvisionResponse>;
  /** Set the time lock value from default value to uint64.max for specific confirmed provision. */
  HoldTransfer(request: MsgHoldTransfer): Promise<MsgHoldTransferResponse>;
  /** Set the time lock value to 0 for specific confirmed provision. */
  ReleaseTransfer(
    request: MsgReleaseTransfer
  ): Promise<MsgReleaseTransferResponse>;
  /** Remove a specific confirmed provision (reset for specific sequence number). */
  RemoveProvision(
    request: MsgRemoveProvision
  ): Promise<MsgRemoveProvisionResponse>;
  /** ClaimBatch processes the claiming of multiple claimable provisions in a single operation */
  ClaimBatch(request: MsgClaimBatch): Promise<MsgClaimBatchResponse>;
  /** Claim processes the claiming of a provision with a specific sequence number */
  Claim(request: MsgClaim): Promise<MsgClaimResponse>;
  /**
   * SuggestRole suggests updating the role of an address in the bridge module.
   * The role can be one of the following: guardian, operator, judge.
   * The proposal will be passed only with the consent of +2/3 Guardian members.
   */
  SuggestRole(request: MsgSuggestRole): Promise<MsgSuggestRoleResponse>;
  /** AddVoteForRole adds a vote for a role change proposal. */
  AddVoteForRole(
    request: MsgAddVoteForRole
  ): Promise<MsgAddVoteForRoleResponse>;
  /**
   * SetBridgeStatus operates a switch to halt/resume the bridge module.
   * If the ratio of inactive bridge switches exceed TrustLevel, the bridge module halts.
   */
  SetBridgeStatus(
    request: MsgSetBridgeStatus
  ): Promise<MsgSetBridgeStatusResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.Transfer = this.Transfer.bind(this);
    this.Provision = this.Provision.bind(this);
    this.HoldTransfer = this.HoldTransfer.bind(this);
    this.ReleaseTransfer = this.ReleaseTransfer.bind(this);
    this.RemoveProvision = this.RemoveProvision.bind(this);
    this.ClaimBatch = this.ClaimBatch.bind(this);
    this.Claim = this.Claim.bind(this);
    this.SuggestRole = this.SuggestRole.bind(this);
    this.AddVoteForRole = this.AddVoteForRole.bind(this);
    this.SetBridgeStatus = this.SetBridgeStatus.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Transfer(request: MsgTransfer): Promise<MsgTransferResponse> {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Msg", "Transfer", data);
    return promise.then((data) =>
      MsgTransferResponse.decode(new _m0.Reader(data))
    );
  }

  Provision(request: MsgProvision): Promise<MsgProvisionResponse> {
    const data = MsgProvision.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Msg", "Provision", data);
    return promise.then((data) =>
      MsgProvisionResponse.decode(new _m0.Reader(data))
    );
  }

  HoldTransfer(request: MsgHoldTransfer): Promise<MsgHoldTransferResponse> {
    const data = MsgHoldTransfer.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Msg",
      "HoldTransfer",
      data
    );
    return promise.then((data) =>
      MsgHoldTransferResponse.decode(new _m0.Reader(data))
    );
  }

  ReleaseTransfer(
    request: MsgReleaseTransfer
  ): Promise<MsgReleaseTransferResponse> {
    const data = MsgReleaseTransfer.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Msg",
      "ReleaseTransfer",
      data
    );
    return promise.then((data) =>
      MsgReleaseTransferResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveProvision(
    request: MsgRemoveProvision
  ): Promise<MsgRemoveProvisionResponse> {
    const data = MsgRemoveProvision.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Msg",
      "RemoveProvision",
      data
    );
    return promise.then((data) =>
      MsgRemoveProvisionResponse.decode(new _m0.Reader(data))
    );
  }

  ClaimBatch(request: MsgClaimBatch): Promise<MsgClaimBatchResponse> {
    const data = MsgClaimBatch.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Msg", "ClaimBatch", data);
    return promise.then((data) =>
      MsgClaimBatchResponse.decode(new _m0.Reader(data))
    );
  }

  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Msg", "Claim", data);
    return promise.then((data) =>
      MsgClaimResponse.decode(new _m0.Reader(data))
    );
  }

  SuggestRole(request: MsgSuggestRole): Promise<MsgSuggestRoleResponse> {
    const data = MsgSuggestRole.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Msg", "SuggestRole", data);
    return promise.then((data) =>
      MsgSuggestRoleResponse.decode(new _m0.Reader(data))
    );
  }

  AddVoteForRole(
    request: MsgAddVoteForRole
  ): Promise<MsgAddVoteForRoleResponse> {
    const data = MsgAddVoteForRole.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Msg",
      "AddVoteForRole",
      data
    );
    return promise.then((data) =>
      MsgAddVoteForRoleResponse.decode(new _m0.Reader(data))
    );
  }

  SetBridgeStatus(
    request: MsgSetBridgeStatus
  ): Promise<MsgSetBridgeStatusResponse> {
    const data = MsgSetBridgeStatus.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Msg",
      "SetBridgeStatus",
      data
    );
    return promise.then((data) =>
      MsgSetBridgeStatusResponse.decode(new _m0.Reader(data))
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
