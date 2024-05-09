/* eslint-disable */
import {
  Params,
  RoleProposal,
  VoteOption,
  BridgeStatus,
  voteOptionFromJSON,
  voteOptionToJSON,
  bridgeStatusFromJSON,
  bridgeStatusToJSON,
} from "./fbridge";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fbridge.v1";

export interface EventUpdateParams {
  params?: Params;
}

export interface EventTransfer {
  /** the sequence number of the bridge request */
  seq: Long;
  /** the sender address on the source chain */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** the amount of token to be transferred */
  amount: string;
}

export interface EventSuggestRole {
  proposal?: RoleProposal;
}

export interface EventAddVoteForRole {
  /** the voter address */
  voter: string;
  /** the role proposal id */
  proposalId: Long;
  /** the vote option */
  option: VoteOption;
}

export interface EventProvision {
  /** the sequence number of the bridge request */
  seq: Long;
  /** the sender address on the source chain */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** the amount of token to be claimed */
  amount: string;
  /** the address of the operator */
  operator: string;
}

export interface EventConfirmProvision {
  /** the sequence number of the bridge request */
  seq: Long;
}

export interface EventClaim {
  /** the sequence number of the bridge request */
  seq: Long;
  /** the sender address on the source chain */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** the amount of token to be claimed */
  amount: string;
}

export interface EventSetBridgeStatus {
  /** the guardian address who modifies the bridge status (a.k.a. bridge switch) */
  guardian: string;
  /** the new status of the guardian's bridge switch */
  status: BridgeStatus;
}

function createBaseEventUpdateParams(): EventUpdateParams {
  return { params: undefined };
}

export const EventUpdateParams = {
  encode(
    message: EventUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: EventUpdateParams): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateParams>, I>>(
    object: I
  ): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseEventTransfer(): EventTransfer {
  return { seq: Long.UZERO, sender: "", receiver: "", amount: "" };
}

export const EventTransfer = {
  encode(
    message: EventTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.seq.isZero()) {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
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

  fromJSON(object: any): EventTransfer {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventTransfer): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTransfer>, I>>(
    object: I
  ): EventTransfer {
    const message = createBaseEventTransfer();
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

function createBaseEventSuggestRole(): EventSuggestRole {
  return { proposal: undefined };
}

export const EventSuggestRole = {
  encode(
    message: EventSuggestRole,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      RoleProposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSuggestRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSuggestRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = RoleProposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSuggestRole {
    return {
      proposal: isSet(object.proposal)
        ? RoleProposal.fromJSON(object.proposal)
        : undefined,
    };
  },

  toJSON(message: EventSuggestRole): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? RoleProposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSuggestRole>, I>>(
    object: I
  ): EventSuggestRole {
    const message = createBaseEventSuggestRole();
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? RoleProposal.fromPartial(object.proposal)
        : undefined;
    return message;
  },
};

function createBaseEventAddVoteForRole(): EventAddVoteForRole {
  return { voter: "", proposalId: Long.UZERO, option: 0 };
}

export const EventAddVoteForRole = {
  encode(
    message: EventAddVoteForRole,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (!message.proposalId.isZero()) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddVoteForRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddVoteForRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
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

  fromJSON(object: any): EventAddVoteForRole {
    return {
      voter: isSet(object.voter) ? String(object.voter) : "",
      proposalId: isSet(object.proposalId)
        ? Long.fromValue(object.proposalId)
        : Long.UZERO,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
    };
  },

  toJSON(message: EventAddVoteForRole): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAddVoteForRole>, I>>(
    object: I
  ): EventAddVoteForRole {
    const message = createBaseEventAddVoteForRole();
    message.voter = object.voter ?? "";
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.option = object.option ?? 0;
    return message;
  },
};

function createBaseEventProvision(): EventProvision {
  return {
    seq: Long.UZERO,
    sender: "",
    receiver: "",
    amount: "",
    operator: "",
  };
}

export const EventProvision = {
  encode(
    message: EventProvision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.seq.isZero()) {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.operator !== "") {
      writer.uint32(42).string(message.operator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProvision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProvision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventProvision {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: EventProvision): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventProvision>, I>>(
    object: I
  ): EventProvision {
    const message = createBaseEventProvision();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseEventConfirmProvision(): EventConfirmProvision {
  return { seq: Long.UZERO };
}

export const EventConfirmProvision = {
  encode(
    message: EventConfirmProvision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.seq.isZero()) {
      writer.uint32(8).uint64(message.seq);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventConfirmProvision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConfirmProvision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventConfirmProvision {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: EventConfirmProvision): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventConfirmProvision>, I>>(
    object: I
  ): EventConfirmProvision {
    const message = createBaseEventConfirmProvision();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseEventClaim(): EventClaim {
  return { seq: Long.UZERO, sender: "", receiver: "", amount: "" };
}

export const EventClaim = {
  encode(
    message: EventClaim,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.seq.isZero()) {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
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

  fromJSON(object: any): EventClaim {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventClaim): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventClaim>, I>>(
    object: I
  ): EventClaim {
    const message = createBaseEventClaim();
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

function createBaseEventSetBridgeStatus(): EventSetBridgeStatus {
  return { guardian: "", status: 0 };
}

export const EventSetBridgeStatus = {
  encode(
    message: EventSetBridgeStatus,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventSetBridgeStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetBridgeStatus();
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

  fromJSON(object: any): EventSetBridgeStatus {
    return {
      guardian: isSet(object.guardian) ? String(object.guardian) : "",
      status: isSet(object.status) ? bridgeStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: EventSetBridgeStatus): unknown {
    const obj: any = {};
    message.guardian !== undefined && (obj.guardian = message.guardian);
    message.status !== undefined &&
      (obj.status = bridgeStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetBridgeStatus>, I>>(
    object: I
  ): EventSetBridgeStatus {
    const message = createBaseEventSetBridgeStatus();
    message.guardian = object.guardian ?? "";
    message.status = object.status ?? 0;
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
