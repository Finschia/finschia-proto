/* eslint-disable */
import {
  Params,
  Proposal,
  Vote,
  ProposalExecutorResult,
  MemberRequest,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
} from "./foundation";
import { Any } from "../../../google/protobuf/any";
import Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.foundation.v1";

/** EventUpdateParams is emitted after updating foundation parameters. */
export interface EventUpdateParams {
  params?: Params;
}

/** EventFundTreasury is an event emitted when one funds the treasury. */
export interface EventFundTreasury {
  from: string;
  amount: Coin[];
}

/** EventWithdrawFromTreasury is an event emitted when coins are withdrawn from the treasury. */
export interface EventWithdrawFromTreasury {
  to: string;
  amount: Coin[];
}

/** EventUpdateMembers is an event emitted when the members have been updated. */
export interface EventUpdateMembers {
  memberUpdates: MemberRequest[];
}

/** EventUpdateDecisionPolicy is an event emitted when the decision policy have been updated. */
export interface EventUpdateDecisionPolicy {
  decisionPolicy?: Any;
}

/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal is the unique ID of the proposal. */
  proposal?: Proposal;
}

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  vote?: Vote;
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}

/** EventLeaveFoundation is an event emitted when a foundation member leaves the foundation. */
export interface EventLeaveFoundation {
  /** address is the account address of the foundation member. */
  address: string;
}

/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
  /** the address of the grantee. */
  grantee: string;
  /** authorization granted. */
  authorization?: Any;
}

/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
  /** address of the grantee. */
  grantee: string;
  /** message type url for which an autorization is revoked. */
  msgTypeUrl: string;
}

/** EventGovMint is an event emitted when the minter mint coins to the treasury. */
export interface EventGovMint {
  amount: Coin[];
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

function createBaseEventFundTreasury(): EventFundTreasury {
  return { from: "", amount: [] };
}

export const EventFundTreasury = {
  encode(
    message: EventFundTreasury,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFundTreasury {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFundTreasury();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventFundTreasury {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventFundTreasury): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventFundTreasury>, I>>(
    object: I
  ): EventFundTreasury {
    const message = createBaseEventFundTreasury();
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventWithdrawFromTreasury(): EventWithdrawFromTreasury {
  return { to: "", amount: [] };
}

export const EventWithdrawFromTreasury = {
  encode(
    message: EventWithdrawFromTreasury,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.to !== "") {
      writer.uint32(10).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventWithdrawFromTreasury {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawFromTreasury();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdrawFromTreasury {
    return {
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventWithdrawFromTreasury): unknown {
    const obj: any = {};
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdrawFromTreasury>, I>>(
    object: I
  ): EventWithdrawFromTreasury {
    const message = createBaseEventWithdrawFromTreasury();
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventUpdateMembers(): EventUpdateMembers {
  return { memberUpdates: [] };
}

export const EventUpdateMembers = {
  encode(
    message: EventUpdateMembers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.memberUpdates) {
      MemberRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateMembers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberUpdates.push(
            MemberRequest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateMembers {
    return {
      memberUpdates: Array.isArray(object?.memberUpdates)
        ? object.memberUpdates.map((e: any) => MemberRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventUpdateMembers): unknown {
    const obj: any = {};
    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map((e) =>
        e ? MemberRequest.toJSON(e) : undefined
      );
    } else {
      obj.memberUpdates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateMembers>, I>>(
    object: I
  ): EventUpdateMembers {
    const message = createBaseEventUpdateMembers();
    message.memberUpdates =
      object.memberUpdates?.map((e) => MemberRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventUpdateDecisionPolicy(): EventUpdateDecisionPolicy {
  return { decisionPolicy: undefined };
}

export const EventUpdateDecisionPolicy = {
  encode(
    message: EventUpdateDecisionPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventUpdateDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateDecisionPolicy {
    return {
      decisionPolicy: isSet(object.decisionPolicy)
        ? Any.fromJSON(object.decisionPolicy)
        : undefined,
    };
  },

  toJSON(message: EventUpdateDecisionPolicy): unknown {
    const obj: any = {};
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateDecisionPolicy>, I>>(
    object: I
  ): EventUpdateDecisionPolicy {
    const message = createBaseEventUpdateDecisionPolicy();
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromPartial(object.decisionPolicy)
        : undefined;
    return message;
  },
};

function createBaseEventSubmitProposal(): EventSubmitProposal {
  return { proposal: undefined };
}

export const EventSubmitProposal = {
  encode(
    message: EventSubmitProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSubmitProposal {
    return {
      proposal: isSet(object.proposal)
        ? Proposal.fromJSON(object.proposal)
        : undefined,
    };
  },

  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSubmitProposal>, I>>(
    object: I
  ): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromPartial(object.proposal)
        : undefined;
    return message;
  },
};

function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return { proposalId: Long.UZERO };
}

export const EventWithdrawProposal = {
  encode(
    message: EventWithdrawProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdrawProposal {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromValue(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdrawProposal>, I>>(
    object: I
  ): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

function createBaseEventVote(): EventVote {
  return { vote: undefined };
}

export const EventVote = {
  encode(
    message: EventVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVote {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
    };
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVote>, I>>(
    object: I
  ): EventVote {
    const message = createBaseEventVote();
    message.vote =
      object.vote !== undefined && object.vote !== null
        ? Vote.fromPartial(object.vote)
        : undefined;
    return message;
  },
};

function createBaseEventExec(): EventExec {
  return { proposalId: Long.UZERO, result: 0, logs: "" };
}

export const EventExec = {
  encode(
    message: EventExec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== "") {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        case 3:
          message.logs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExec {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromValue(object.proposalId)
        : Long.UZERO,
      result: isSet(object.result)
        ? proposalExecutorResultFromJSON(object.result)
        : 0,
      logs: isSet(object.logs) ? String(object.logs) : "",
    };
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.result !== undefined &&
      (obj.result = proposalExecutorResultToJSON(message.result));
    message.logs !== undefined && (obj.logs = message.logs);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExec>, I>>(
    object: I
  ): EventExec {
    const message = createBaseEventExec();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.result = object.result ?? 0;
    message.logs = object.logs ?? "";
    return message;
  },
};

function createBaseEventLeaveFoundation(): EventLeaveFoundation {
  return { address: "" };
}

export const EventLeaveFoundation = {
  encode(
    message: EventLeaveFoundation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventLeaveFoundation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveFoundation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLeaveFoundation {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: EventLeaveFoundation): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLeaveFoundation>, I>>(
    object: I
  ): EventLeaveFoundation {
    const message = createBaseEventLeaveFoundation();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventGrant(): EventGrant {
  return { grantee: "", authorization: undefined };
}

export const EventGrant = {
  encode(
    message: EventGrant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      Any.encode(message.authorization, writer.uint32(18).fork()).ldelim();
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
          message.grantee = reader.string();
          break;
        case 2:
          message.authorization = Any.decode(reader, reader.uint32());
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
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      authorization: isSet(object.authorization)
        ? Any.fromJSON(object.authorization)
        : undefined,
    };
  },

  toJSON(message: EventGrant): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Any.toJSON(message.authorization)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventGrant>, I>>(
    object: I
  ): EventGrant {
    const message = createBaseEventGrant();
    message.grantee = object.grantee ?? "";
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Any.fromPartial(object.authorization)
        : undefined;
    return message;
  },
};

function createBaseEventRevoke(): EventRevoke {
  return { grantee: "", msgTypeUrl: "" };
}

export const EventRevoke = {
  encode(
    message: EventRevoke,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(18).string(message.msgTypeUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRevoke {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRevoke {
    return {
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
    };
  },

  toJSON(message: EventRevoke): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRevoke>, I>>(
    object: I
  ): EventRevoke {
    const message = createBaseEventRevoke();
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
};

function createBaseEventGovMint(): EventGovMint {
  return { amount: [] };
}

export const EventGovMint = {
  encode(
    message: EventGovMint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGovMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGovMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventGovMint {
    return {
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventGovMint): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventGovMint>, I>>(
    object: I
  ): EventGovMint {
    const message = createBaseEventGovMint();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
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
