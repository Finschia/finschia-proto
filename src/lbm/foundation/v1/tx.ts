/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import {
  VoteOption,
  Member,
  voteOptionFromJSON,
  voteOptionToJSON,
} from "../../../lbm/foundation/v1/foundation";
import { Coin } from "../../../lbm/base/v1/coin";

export const protobufPackage = "lbm.foundation.v1";

/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,
  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}

export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}

export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    default:
      return "UNKNOWN";
  }
}

/** MsgFundTreasury represents a message to fund the treasury. */
export interface MsgFundTreasury {
  from: string;
  amount: Coin[];
}

/** MsgFundTreasuryResponse defines the Msg/FundTreasury response type. */
export interface MsgFundTreasuryResponse {}

/** MsgWithdrawFromTreasury represents a message to withdraw coins from the treasury. */
export interface MsgWithdrawFromTreasury {
  operator: string;
  to: string;
  amount: Coin[];
}

/** MsgWithdrawFromTreasuryResponse defines the Msg/WithdrawFromTreasury response type. */
export interface MsgWithdrawFromTreasuryResponse {}

/** MsgUpdateMembers is the Msg/UpdateMembers request type. */
export interface MsgUpdateMembers {
  /** operator is the account address of the foundation operator. */
  operator: string;
  /**
   * member_updates is the list of members to update,
   * set participating to false to remove a member.
   */
  memberUpdates: Member[];
}

/** MsgUpdateMembersResponse is the Msg/UpdateMembers response type. */
export interface MsgUpdateMembersResponse {}

/** MsgUpdateDecisionPolicy is the Msg/UpdateDecisionPolicy request type. */
export interface MsgUpdateDecisionPolicy {
  /** operator is the account address of the foundation operator. */
  operator: string;
  /** decision_policy is the updated decision policy. */
  decisionPolicy?: Any;
}

/** MsgUpdateDecisionPolicyResponse is the Msg/UpdateDecisionPolicy response type. */
export interface MsgUpdateDecisionPolicyResponse {}

/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: string;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
}

/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
}

/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** address of one of the proposer of the proposal. */
  address: string;
}

/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {}

/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** voter is the voter account address. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}

/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {}

/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** signer is the account address used to execute the proposal. */
  signer: string;
}

/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {}

/** MsgLeaveFoundation is the Msg/LeaveFoundation request type. */
export interface MsgLeaveFoundation {
  /** address is the account address of the foundation member. */
  address: string;
}

/** MsgLeaveFoundationResponse is the Msg/LeaveFoundation response type. */
export interface MsgLeaveFoundationResponse {}

/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the foundation.
 */
export interface MsgGrant {
  operator: string;
  grantee: string;
  authorization?: Any;
}

/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {}

/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type
 * to the grantee on behalf of the foundation.
 */
export interface MsgRevoke {
  operator: string;
  grantee: string;
  msgTypeUrl: string;
}

/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {}

function createBaseMsgFundTreasury(): MsgFundTreasury {
  return { from: "", amount: [] };
}

export const MsgFundTreasury = {
  encode(
    message: MsgFundTreasury,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundTreasury {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundTreasury();
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

  fromJSON(object: any): MsgFundTreasury {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgFundTreasury): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundTreasury>, I>>(
    object: I
  ): MsgFundTreasury {
    const message = createBaseMsgFundTreasury();
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgFundTreasuryResponse(): MsgFundTreasuryResponse {
  return {};
}

export const MsgFundTreasuryResponse = {
  encode(
    _: MsgFundTreasuryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgFundTreasuryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundTreasuryResponse();
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

  fromJSON(_: any): MsgFundTreasuryResponse {
    return {};
  },

  toJSON(_: MsgFundTreasuryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundTreasuryResponse>, I>>(
    _: I
  ): MsgFundTreasuryResponse {
    const message = createBaseMsgFundTreasuryResponse();
    return message;
  },
};

function createBaseMsgWithdrawFromTreasury(): MsgWithdrawFromTreasury {
  return { operator: "", to: "", amount: [] };
}

export const MsgWithdrawFromTreasury = {
  encode(
    message: MsgWithdrawFromTreasury,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawFromTreasury {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromTreasury();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.to = reader.string();
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

  fromJSON(object: any): MsgWithdrawFromTreasury {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgWithdrawFromTreasury): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawFromTreasury>, I>>(
    object: I
  ): MsgWithdrawFromTreasury {
    const message = createBaseMsgWithdrawFromTreasury();
    message.operator = object.operator ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgWithdrawFromTreasuryResponse(): MsgWithdrawFromTreasuryResponse {
  return {};
}

export const MsgWithdrawFromTreasuryResponse = {
  encode(
    _: MsgWithdrawFromTreasuryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawFromTreasuryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromTreasuryResponse();
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

  fromJSON(_: any): MsgWithdrawFromTreasuryResponse {
    return {};
  },

  toJSON(_: MsgWithdrawFromTreasuryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawFromTreasuryResponse>, I>>(
    _: I
  ): MsgWithdrawFromTreasuryResponse {
    const message = createBaseMsgWithdrawFromTreasuryResponse();
    return message;
  },
};

function createBaseMsgUpdateMembers(): MsgUpdateMembers {
  return { operator: "", memberUpdates: [] };
}

export const MsgUpdateMembers = {
  encode(
    message: MsgUpdateMembers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    for (const v of message.memberUpdates) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMembers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.memberUpdates.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMembers {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      memberUpdates: Array.isArray(object?.memberUpdates)
        ? object.memberUpdates.map((e: any) => Member.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgUpdateMembers): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map((e) =>
        e ? Member.toJSON(e) : undefined
      );
    } else {
      obj.memberUpdates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMembers>, I>>(
    object: I
  ): MsgUpdateMembers {
    const message = createBaseMsgUpdateMembers();
    message.operator = object.operator ?? "";
    message.memberUpdates =
      object.memberUpdates?.map((e) => Member.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUpdateMembersResponse(): MsgUpdateMembersResponse {
  return {};
}

export const MsgUpdateMembersResponse = {
  encode(
    _: MsgUpdateMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMembersResponse();
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

  fromJSON(_: any): MsgUpdateMembersResponse {
    return {};
  },

  toJSON(_: MsgUpdateMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMembersResponse>, I>>(
    _: I
  ): MsgUpdateMembersResponse {
    const message = createBaseMsgUpdateMembersResponse();
    return message;
  },
};

function createBaseMsgUpdateDecisionPolicy(): MsgUpdateDecisionPolicy {
  return { operator: "", decisionPolicy: undefined };
}

export const MsgUpdateDecisionPolicy = {
  encode(
    message: MsgUpdateDecisionPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDecisionPolicy {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      decisionPolicy: isSet(object.decisionPolicy)
        ? Any.fromJSON(object.decisionPolicy)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateDecisionPolicy): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDecisionPolicy>, I>>(
    object: I
  ): MsgUpdateDecisionPolicy {
    const message = createBaseMsgUpdateDecisionPolicy();
    message.operator = object.operator ?? "";
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromPartial(object.decisionPolicy)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateDecisionPolicyResponse(): MsgUpdateDecisionPolicyResponse {
  return {};
}

export const MsgUpdateDecisionPolicyResponse = {
  encode(
    _: MsgUpdateDecisionPolicyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateDecisionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDecisionPolicyResponse();
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

  fromJSON(_: any): MsgUpdateDecisionPolicyResponse {
    return {};
  },

  toJSON(_: MsgUpdateDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDecisionPolicyResponse>, I>>(
    _: I
  ): MsgUpdateDecisionPolicyResponse {
    const message = createBaseMsgUpdateDecisionPolicyResponse();
    return message;
  },
};

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return { proposers: [], metadata: "", messages: [], exec: 0 };
}

export const MsgSubmitProposal = {
  encode(
    message: MsgSubmitProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.proposers) {
      writer.uint32(10).string(v!);
    }
    if (message.metadata !== "") {
      writer.uint32(18).string(message.metadata);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(32).int32(message.exec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposers.push(reader.string());
          break;
        case 2:
          message.metadata = reader.string();
          break;
        case 3:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 4:
          message.exec = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    return {
      proposers: Array.isArray(object?.proposers)
        ? object.proposers.map((e: any) => String(e))
        : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Any.fromJSON(e))
        : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
    };
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(
    object: I
  ): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.proposers = object.proposers?.map((e) => e) || [];
    message.metadata = object.metadata ?? "";
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    return message;
  },
};

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return { proposalId: Long.UZERO };
}

export const MsgSubmitProposalResponse = {
  encode(
    message: MsgSubmitProposalResponse,
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
  ): MsgSubmitProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
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

  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(
    object: I
  ): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgWithdrawProposal(): MsgWithdrawProposal {
  return { proposalId: Long.UZERO, address: "" };
}

export const MsgWithdrawProposal = {
  encode(
    message: MsgWithdrawProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawProposal {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawProposal>, I>>(
    object: I
  ): MsgWithdrawProposal {
    const message = createBaseMsgWithdrawProposal();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgWithdrawProposalResponse(): MsgWithdrawProposalResponse {
  return {};
}

export const MsgWithdrawProposalResponse = {
  encode(
    _: MsgWithdrawProposalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();
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

  fromJSON(_: any): MsgWithdrawProposalResponse {
    return {};
  },

  toJSON(_: MsgWithdrawProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawProposalResponse>, I>>(
    _: I
  ): MsgWithdrawProposalResponse {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },
};

function createBaseMsgVote(): MsgVote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    exec: 0,
  };
}

export const MsgVote = {
  encode(
    message: MsgVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
    };
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVote>, I>>(object: I): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.exec = object.exec ?? 0;
    return message;
  },
};

function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}

export const MsgVoteResponse = {
  encode(
    _: MsgVoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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

  fromJSON(_: any): MsgVoteResponse {
    return {};
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteResponse>, I>>(
    _: I
  ): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
};

function createBaseMsgExec(): MsgExec {
  return { proposalId: Long.UZERO, signer: "" };
}

export const MsgExec = {
  encode(
    message: MsgExec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExec {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExec>, I>>(object: I): MsgExec {
    const message = createBaseMsgExec();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgExecResponse(): MsgExecResponse {
  return {};
}

export const MsgExecResponse = {
  encode(
    _: MsgExecResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
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

  fromJSON(_: any): MsgExecResponse {
    return {};
  },

  toJSON(_: MsgExecResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecResponse>, I>>(
    _: I
  ): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    return message;
  },
};

function createBaseMsgLeaveFoundation(): MsgLeaveFoundation {
  return { address: "" };
}

export const MsgLeaveFoundation = {
  encode(
    message: MsgLeaveFoundation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveFoundation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveFoundation();
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

  fromJSON(object: any): MsgLeaveFoundation {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgLeaveFoundation): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaveFoundation>, I>>(
    object: I
  ): MsgLeaveFoundation {
    const message = createBaseMsgLeaveFoundation();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgLeaveFoundationResponse(): MsgLeaveFoundationResponse {
  return {};
}

export const MsgLeaveFoundationResponse = {
  encode(
    _: MsgLeaveFoundationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLeaveFoundationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveFoundationResponse();
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

  fromJSON(_: any): MsgLeaveFoundationResponse {
    return {};
  },

  toJSON(_: MsgLeaveFoundationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaveFoundationResponse>, I>>(
    _: I
  ): MsgLeaveFoundationResponse {
    const message = createBaseMsgLeaveFoundationResponse();
    return message;
  },
};

function createBaseMsgGrant(): MsgGrant {
  return { operator: "", grantee: "", authorization: undefined };
}

export const MsgGrant = {
  encode(
    message: MsgGrant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
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
          message.operator = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.authorization = Any.decode(reader, reader.uint32());
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
      operator: isSet(object.operator) ? String(object.operator) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      authorization: isSet(object.authorization)
        ? Any.fromJSON(object.authorization)
        : undefined,
    };
  },

  toJSON(message: MsgGrant): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Any.toJSON(message.authorization)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrant>, I>>(object: I): MsgGrant {
    const message = createBaseMsgGrant();
    message.operator = object.operator ?? "";
    message.grantee = object.grantee ?? "";
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Any.fromPartial(object.authorization)
        : undefined;
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
  return { operator: "", grantee: "", msgTypeUrl: "" };
}

export const MsgRevoke = {
  encode(
    message: MsgRevoke,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
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
          message.operator = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
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
      operator: isSet(object.operator) ? String(object.operator) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
    };
  },

  toJSON(message: MsgRevoke): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevoke>, I>>(
    object: I
  ): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.operator = object.operator ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
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

/** Msg defines the foundation Msg service. */
export interface Msg {
  /** FundTreasury defines a method to fund the treasury. */
  FundTreasury(request: MsgFundTreasury): Promise<MsgFundTreasuryResponse>;
  /** WithdrawFromTreasury defines a method to withdraw coins from the treasury. */
  WithdrawFromTreasury(
    request: MsgWithdrawFromTreasury
  ): Promise<MsgWithdrawFromTreasuryResponse>;
  /** UpdateMembers updates the foundation members. */
  UpdateMembers(request: MsgUpdateMembers): Promise<MsgUpdateMembersResponse>;
  /** UpdateDecisionPolicy allows a group policy's decision policy to be updated. */
  UpdateDecisionPolicy(
    request: MsgUpdateDecisionPolicy
  ): Promise<MsgUpdateDecisionPolicyResponse>;
  /** SubmitProposal submits a new proposal. */
  SubmitProposal(
    request: MsgSubmitProposal
  ): Promise<MsgSubmitProposalResponse>;
  /** WithdrawProposal aborts a proposal. */
  WithdrawProposal(
    request: MsgWithdrawProposal
  ): Promise<MsgWithdrawProposalResponse>;
  /** Vote allows a voter to vote on a proposal. */
  Vote(request: MsgVote): Promise<MsgVoteResponse>;
  /** Exec executes a proposal. */
  Exec(request: MsgExec): Promise<MsgExecResponse>;
  /** LeaveFoundation allows a member to leave the foundation. */
  LeaveFoundation(
    request: MsgLeaveFoundation
  ): Promise<MsgLeaveFoundationResponse>;
  /**
   * Grant grants the provided authorization to the grantee with authority of
   * the foundation. If there is already a grant for the given
   * (granter, grantee, Authorization) tuple, then the grant will be overwritten.
   */
  Grant(request: MsgGrant): Promise<MsgGrantResponse>;
  /**
   * Revoke revokes any authorization corresponding to the provided method name on the
   * granter that has been granted to the grantee.
   */
  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FundTreasury = this.FundTreasury.bind(this);
    this.WithdrawFromTreasury = this.WithdrawFromTreasury.bind(this);
    this.UpdateMembers = this.UpdateMembers.bind(this);
    this.UpdateDecisionPolicy = this.UpdateDecisionPolicy.bind(this);
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.WithdrawProposal = this.WithdrawProposal.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Exec = this.Exec.bind(this);
    this.LeaveFoundation = this.LeaveFoundation.bind(this);
    this.Grant = this.Grant.bind(this);
    this.Revoke = this.Revoke.bind(this);
  }
  FundTreasury(request: MsgFundTreasury): Promise<MsgFundTreasuryResponse> {
    const data = MsgFundTreasury.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.foundation.v1.Msg",
      "FundTreasury",
      data
    );
    return promise.then((data) =>
      MsgFundTreasuryResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawFromTreasury(
    request: MsgWithdrawFromTreasury
  ): Promise<MsgWithdrawFromTreasuryResponse> {
    const data = MsgWithdrawFromTreasury.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.foundation.v1.Msg",
      "WithdrawFromTreasury",
      data
    );
    return promise.then((data) =>
      MsgWithdrawFromTreasuryResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMembers(request: MsgUpdateMembers): Promise<MsgUpdateMembersResponse> {
    const data = MsgUpdateMembers.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.foundation.v1.Msg",
      "UpdateMembers",
      data
    );
    return promise.then((data) =>
      MsgUpdateMembersResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateDecisionPolicy(
    request: MsgUpdateDecisionPolicy
  ): Promise<MsgUpdateDecisionPolicyResponse> {
    const data = MsgUpdateDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.foundation.v1.Msg",
      "UpdateDecisionPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateDecisionPolicyResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitProposal(
    request: MsgSubmitProposal
  ): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.foundation.v1.Msg",
      "SubmitProposal",
      data
    );
    return promise.then((data) =>
      MsgSubmitProposalResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawProposal(
    request: MsgWithdrawProposal
  ): Promise<MsgWithdrawProposalResponse> {
    const data = MsgWithdrawProposal.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.foundation.v1.Msg",
      "WithdrawProposal",
      data
    );
    return promise.then((data) =>
      MsgWithdrawProposalResponse.decode(new _m0.Reader(data))
    );
  }

  Vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("lbm.foundation.v1.Msg", "Vote", data);
    return promise.then((data) => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

  Exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("lbm.foundation.v1.Msg", "Exec", data);
    return promise.then((data) => MsgExecResponse.decode(new _m0.Reader(data)));
  }

  LeaveFoundation(
    request: MsgLeaveFoundation
  ): Promise<MsgLeaveFoundationResponse> {
    const data = MsgLeaveFoundation.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.foundation.v1.Msg",
      "LeaveFoundation",
      data
    );
    return promise.then((data) =>
      MsgLeaveFoundationResponse.decode(new _m0.Reader(data))
    );
  }

  Grant(request: MsgGrant): Promise<MsgGrantResponse> {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("lbm.foundation.v1.Msg", "Grant", data);
    return promise.then((data) =>
      MsgGrantResponse.decode(new _m0.Reader(data))
    );
  }

  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse> {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("lbm.foundation.v1.Msg", "Revoke", data);
    return promise.then((data) =>
      MsgRevokeResponse.decode(new _m0.Reader(data))
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
