/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import Long from "long";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.foundation.v1";

export enum CensorshipAuthority {
  /** CENSORSHIP_AUTHORITY_UNSPECIFIED - CENSORSHIP_AUTHORITY_UNSPECIFIED defines an invalid authority. */
  CENSORSHIP_AUTHORITY_UNSPECIFIED = 0,
  /** CENSORSHIP_AUTHORITY_GOVERNANCE - CENSORSHIP_AUTHORITY_GOVERNANCE defines x/gov authority. */
  CENSORSHIP_AUTHORITY_GOVERNANCE = 1,
  /** CENSORSHIP_AUTHORITY_FOUNDATION - CENSORSHIP_AUTHORITY_FOUNDATION defines x/foundation authority. */
  CENSORSHIP_AUTHORITY_FOUNDATION = 2,
  UNRECOGNIZED = -1,
}

export function censorshipAuthorityFromJSON(object: any): CensorshipAuthority {
  switch (object) {
    case 0:
    case "CENSORSHIP_AUTHORITY_UNSPECIFIED":
      return CensorshipAuthority.CENSORSHIP_AUTHORITY_UNSPECIFIED;
    case 1:
    case "CENSORSHIP_AUTHORITY_GOVERNANCE":
      return CensorshipAuthority.CENSORSHIP_AUTHORITY_GOVERNANCE;
    case 2:
    case "CENSORSHIP_AUTHORITY_FOUNDATION":
      return CensorshipAuthority.CENSORSHIP_AUTHORITY_FOUNDATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CensorshipAuthority.UNRECOGNIZED;
  }
}

export function censorshipAuthorityToJSON(object: CensorshipAuthority): string {
  switch (object) {
    case CensorshipAuthority.CENSORSHIP_AUTHORITY_UNSPECIFIED:
      return "CENSORSHIP_AUTHORITY_UNSPECIFIED";
    case CensorshipAuthority.CENSORSHIP_AUTHORITY_GOVERNANCE:
      return "CENSORSHIP_AUTHORITY_GOVERNANCE";
    case CensorshipAuthority.CENSORSHIP_AUTHORITY_FOUNDATION:
      return "CENSORSHIP_AUTHORITY_FOUNDATION";
    case CensorshipAuthority.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** VoteOption enumerates the valid vote options for a given proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}

export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}

export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** ProposalStatus defines proposal statuses. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when submitted. */
  PROPOSAL_STATUS_SUBMITTED = 1,
  /**
   * PROPOSAL_STATUS_ACCEPTED - Final status of a proposal when the final tally is done and the outcome
   * passes the foundation's decision policy.
   */
  PROPOSAL_STATUS_ACCEPTED = 2,
  /**
   * PROPOSAL_STATUS_REJECTED - Final status of a proposal when the final tally is done and the outcome
   * is rejected by the foundation's decision policy.
   */
  PROPOSAL_STATUS_REJECTED = 3,
  /**
   * PROPOSAL_STATUS_ABORTED - Final status of a proposal when the decision policy is modified before the
   * final tally.
   */
  PROPOSAL_STATUS_ABORTED = 4,
  /**
   * PROPOSAL_STATUS_WITHDRAWN - A proposal can be withdrawn before the voting start time by the owner.
   * When this happens the final status is Withdrawn.
   */
  PROPOSAL_STATUS_WITHDRAWN = 5,
  UNRECOGNIZED = -1,
}

export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
    case 2:
    case "PROPOSAL_STATUS_ACCEPTED":
      return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;
    case 3:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 4:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;
    case 5:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}

export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";
    case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
      return "PROPOSAL_STATUS_ACCEPTED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** ProposalExecutorResult defines types of proposal executor results. */
export enum ProposalExecutorResult {
  /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,
  /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,
  /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,
  /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
  UNRECOGNIZED = -1,
}

export function proposalExecutorResultFromJSON(
  object: any
): ProposalExecutorResult {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}

export function proposalExecutorResultToJSON(
  object: ProposalExecutorResult
): string {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    case ProposalExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Params defines the parameters for the foundation module. */
export interface Params {
  foundationTax: string;
}

export interface Censorship {
  msgTypeUrl: string;
  authority: CensorshipAuthority;
}

/** Member represents a foundation member with an account address and metadata. */
export interface Member {
  /** address is the member's account address. */
  address: string;
  /** metadata is any arbitrary metadata to attached to the member. */
  metadata: string;
  /** added_at is a timestamp specifying when a member was added. */
  addedAt?: Timestamp;
}

/**
 * MemberRequest represents a foundation member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */
export interface MemberRequest {
  /** address is the member's account address. */
  address: string;
  /** remove is the flag which allows one to remove the member by setting the flag to true. */
  remove: boolean;
  /** metadata is any arbitrary metadata attached to the member. */
  metadata: string;
}

/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voters' weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface ThresholdDecisionPolicy {
  /** threshold is the minimum sum of yes votes that must be met or exceeded for a proposal to succeed. */
  threshold: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
}

/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface PercentageDecisionPolicy {
  /** percentage is the minimum percentage the sum of yes votes must meet for a proposal to succeed. */
  percentage: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
}

/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindows {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   */
  votingPeriod?: Duration;
  /**
   * min_execution_period is the minimum duration after the proposal submission
   * where members can start sending MsgExec. This means that the window for
   * sending a MsgExec transaction is:
   * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
   * where max_execution_period is a app-specific config, defined in the keeper.
   * If not set, min_execution_period will default to 0.
   *
   * Please make sure to set a `min_execution_period` that is smaller than
   * `voting_period + max_execution_period`, or else the above execution window
   * is empty, meaning that all proposals created with this decision policy
   * won't be able to be executed.
   */
  minExecutionPeriod?: Duration;
}

/**
 * OutsourcingDecisionPolicy is a dummy decision policy which is set after
 * the proposal feature has been outsourced to x/group.
 */
export interface OutsourcingDecisionPolicy {
  description: string;
}

/** FoundationInfo represents the high-level on-chain information for the foundation. */
export interface FoundationInfo {
  /**
   * version is used to track changes to the foundation's membership structure that
   * would break existing proposals. Whenever any member is added or removed,
   * this version is incremented and will cause proposals based on older versions
   * of the foundation to fail
   */
  version: Long;
  /** total_weight is the number of the foundation members. */
  totalWeight: string;
  /** decision_policy specifies the foundation's decision policy. */
  decisionPolicy?: Any;
}

/**
 * Proposal defines a foundation proposal. Any member of the foundation can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface Proposal {
  /** id is the unique id of the proposal. */
  id: Long;
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: string;
  /** proposers are the account addresses of the proposers. */
  proposers: string[];
  /** submit_time is a timestamp specifying when a proposal was submitted. */
  submitTime?: Timestamp;
  /**
   * foundation_version tracks the version of the foundation that this proposal corresponds to.
   * When foundation info is changed, existing proposals from previous foundation versions will become invalid.
   */
  foundationVersion: Long;
  /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
  status: ProposalStatus;
  /**
   * final_tally_result contains the sums of all votes for this
   * proposal for each vote option, after tallying. When querying a proposal
   * via gRPC, this field is not populated until the proposal's voting period
   * has ended.
   */
  finalTallyResult?: TallyResult;
  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successfull MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`, as well
   * as `status` and `result` fields will be accordingly updated.
   */
  votingPeriodEnd?: Timestamp;
  /** executor_result is the final result based on the votes and election rule. Initial value is NotRun. */
  executorResult: ProposalExecutorResult;
  /** messages is a list of Msgs that will be executed if the proposal passes. */
  messages: Any[];
}

/** TallyResult represents the sum of votes for each vote option. */
export interface TallyResult {
  /** yes_count is the sum of yes votes. */
  yesCount: string;
  /** abstain_count is the sum of abstainers. */
  abstainCount: string;
  /** no is the sum of no votes. */
  noCount: string;
  /** no_with_veto_count is the sum of veto. */
  noWithVetoCount: string;
}

/** Vote represents a vote for a proposal. */
export interface Vote {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** voter is the account address of the voter. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: string;
  /** submit_time is the timestamp when the vote was submitted. */
  submitTime?: Timestamp;
}

/** Pool is used for tracking treasury. */
export interface Pool {
  treasury: DecCoin[];
}

/** FoundationExecProposal is x/gov proposal to trigger the x/foundation messages on behalf of x/gov. */
export interface FoundationExecProposal {
  title: string;
  description: string;
  /**
   * x/foundation messages to execute
   * all the signers must be x/gov authority.
   */
  messages: Any[];
}

function createBaseParams(): Params {
  return { foundationTax: "" };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.foundationTax !== "") {
      writer.uint32(10).string(message.foundationTax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.foundationTax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      foundationTax: isSet(object.foundationTax)
        ? String(object.foundationTax)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.foundationTax !== undefined &&
      (obj.foundationTax = message.foundationTax);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.foundationTax = object.foundationTax ?? "";
    return message;
  },
};

function createBaseCensorship(): Censorship {
  return { msgTypeUrl: "", authority: 0 };
}

export const Censorship = {
  encode(
    message: Censorship,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    if (message.authority !== 0) {
      writer.uint32(16).int32(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Censorship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensorship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;
        case 2:
          message.authority = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Censorship {
    return {
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
      authority: isSet(object.authority)
        ? censorshipAuthorityFromJSON(object.authority)
        : 0,
    };
  },

  toJSON(message: Censorship): unknown {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    message.authority !== undefined &&
      (obj.authority = censorshipAuthorityToJSON(message.authority));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Censorship>, I>>(
    object: I
  ): Censorship {
    const message = createBaseCensorship();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.authority = object.authority ?? 0;
    return message;
  },
};

function createBaseMember(): Member {
  return { address: "", metadata: "", addedAt: undefined };
}

export const Member = {
  encode(
    message: Member,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.metadata !== "") {
      writer.uint32(18).string(message.metadata);
    }
    if (message.addedAt !== undefined) {
      Timestamp.encode(message.addedAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.metadata = reader.string();
          break;
        case 4:
          message.addedAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Member {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      addedAt: isSet(object.addedAt)
        ? fromJsonTimestamp(object.addedAt)
        : undefined,
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.addedAt !== undefined &&
      (obj.addedAt = fromTimestamp(message.addedAt).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.metadata = object.metadata ?? "";
    message.addedAt =
      object.addedAt !== undefined && object.addedAt !== null
        ? Timestamp.fromPartial(object.addedAt)
        : undefined;
    return message;
  },
};

function createBaseMemberRequest(): MemberRequest {
  return { address: "", remove: false, metadata: "" };
}

export const MemberRequest = {
  encode(
    message: MemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.remove === true) {
      writer.uint32(16).bool(message.remove);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.remove = reader.bool();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      remove: isSet(object.remove) ? Boolean(object.remove) : false,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
    };
  },

  toJSON(message: MemberRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.remove !== undefined && (obj.remove = message.remove);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MemberRequest>, I>>(
    object: I
  ): MemberRequest {
    const message = createBaseMemberRequest();
    message.address = object.address ?? "";
    message.remove = object.remove ?? false;
    message.metadata = object.metadata ?? "";
    return message;
  },
};

function createBaseThresholdDecisionPolicy(): ThresholdDecisionPolicy {
  return { threshold: "", windows: undefined };
}

export const ThresholdDecisionPolicy = {
  encode(
    message: ThresholdDecisionPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(
        message.windows,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ThresholdDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ThresholdDecisionPolicy {
    return {
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      windows: isSet(object.windows)
        ? DecisionPolicyWindows.fromJSON(object.windows)
        : undefined,
    };
  },

  toJSON(message: ThresholdDecisionPolicy): unknown {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.windows !== undefined &&
      (obj.windows = message.windows
        ? DecisionPolicyWindows.toJSON(message.windows)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ThresholdDecisionPolicy>, I>>(
    object: I
  ): ThresholdDecisionPolicy {
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = object.threshold ?? "";
    message.windows =
      object.windows !== undefined && object.windows !== null
        ? DecisionPolicyWindows.fromPartial(object.windows)
        : undefined;
    return message;
  },
};

function createBasePercentageDecisionPolicy(): PercentageDecisionPolicy {
  return { percentage: "", windows: undefined };
}

export const PercentageDecisionPolicy = {
  encode(
    message: PercentageDecisionPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(
        message.windows,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PercentageDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePercentageDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PercentageDecisionPolicy {
    return {
      percentage: isSet(object.percentage) ? String(object.percentage) : "",
      windows: isSet(object.windows)
        ? DecisionPolicyWindows.fromJSON(object.windows)
        : undefined,
    };
  },

  toJSON(message: PercentageDecisionPolicy): unknown {
    const obj: any = {};
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.windows !== undefined &&
      (obj.windows = message.windows
        ? DecisionPolicyWindows.toJSON(message.windows)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PercentageDecisionPolicy>, I>>(
    object: I
  ): PercentageDecisionPolicy {
    const message = createBasePercentageDecisionPolicy();
    message.percentage = object.percentage ?? "";
    message.windows =
      object.windows !== undefined && object.windows !== null
        ? DecisionPolicyWindows.fromPartial(object.windows)
        : undefined;
    return message;
  },
};

function createBaseDecisionPolicyWindows(): DecisionPolicyWindows {
  return { votingPeriod: undefined, minExecutionPeriod: undefined };
}

export const DecisionPolicyWindows = {
  encode(
    message: DecisionPolicyWindows,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.minExecutionPeriod !== undefined) {
      Duration.encode(
        message.minExecutionPeriod,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DecisionPolicyWindows {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionPolicyWindows();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.minExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DecisionPolicyWindows {
    return {
      votingPeriod: isSet(object.votingPeriod)
        ? Duration.fromJSON(object.votingPeriod)
        : undefined,
      minExecutionPeriod: isSet(object.minExecutionPeriod)
        ? Duration.fromJSON(object.minExecutionPeriod)
        : undefined,
    };
  },

  toJSON(message: DecisionPolicyWindows): unknown {
    const obj: any = {};
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod
        ? Duration.toJSON(message.votingPeriod)
        : undefined);
    message.minExecutionPeriod !== undefined &&
      (obj.minExecutionPeriod = message.minExecutionPeriod
        ? Duration.toJSON(message.minExecutionPeriod)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DecisionPolicyWindows>, I>>(
    object: I
  ): DecisionPolicyWindows {
    const message = createBaseDecisionPolicyWindows();
    message.votingPeriod =
      object.votingPeriod !== undefined && object.votingPeriod !== null
        ? Duration.fromPartial(object.votingPeriod)
        : undefined;
    message.minExecutionPeriod =
      object.minExecutionPeriod !== undefined &&
      object.minExecutionPeriod !== null
        ? Duration.fromPartial(object.minExecutionPeriod)
        : undefined;
    return message;
  },
};

function createBaseOutsourcingDecisionPolicy(): OutsourcingDecisionPolicy {
  return { description: "" };
}

export const OutsourcingDecisionPolicy = {
  encode(
    message: OutsourcingDecisionPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OutsourcingDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutsourcingDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OutsourcingDecisionPolicy {
    return {
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: OutsourcingDecisionPolicy): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutsourcingDecisionPolicy>, I>>(
    object: I
  ): OutsourcingDecisionPolicy {
    const message = createBaseOutsourcingDecisionPolicy();
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseFoundationInfo(): FoundationInfo {
  return { version: Long.UZERO, totalWeight: "", decisionPolicy: undefined };
}

export const FoundationInfo = {
  encode(
    message: FoundationInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).uint64(message.version);
    }
    if (message.totalWeight !== "") {
      writer.uint32(18).string(message.totalWeight);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FoundationInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFoundationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint64() as Long;
          break;
        case 2:
          message.totalWeight = reader.string();
          break;
        case 3:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FoundationInfo {
    return {
      version: isSet(object.version)
        ? Long.fromValue(object.version)
        : Long.UZERO,
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      decisionPolicy: isSet(object.decisionPolicy)
        ? Any.fromJSON(object.decisionPolicy)
        : undefined,
    };
  },

  toJSON(message: FoundationInfo): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.totalWeight !== undefined &&
      (obj.totalWeight = message.totalWeight);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FoundationInfo>, I>>(
    object: I
  ): FoundationInfo {
    const message = createBaseFoundationInfo();
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.totalWeight = object.totalWeight ?? "";
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromPartial(object.decisionPolicy)
        : undefined;
    return message;
  },
};

function createBaseProposal(): Proposal {
  return {
    id: Long.UZERO,
    metadata: "",
    proposers: [],
    submitTime: undefined,
    foundationVersion: Long.UZERO,
    status: 0,
    finalTallyResult: undefined,
    votingPeriodEnd: undefined,
    executorResult: 0,
    messages: [],
  };
}

export const Proposal = {
  encode(
    message: Proposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.metadata !== "") {
      writer.uint32(18).string(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(26).string(v!);
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(message.submitTime, writer.uint32(34).fork()).ldelim();
    }
    if (!message.foundationVersion.isZero()) {
      writer.uint32(40).uint64(message.foundationVersion);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(
        message.finalTallyResult,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.votingPeriodEnd !== undefined) {
      Timestamp.encode(
        message.votingPeriodEnd,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.executorResult !== 0) {
      writer.uint32(72).int32(message.executorResult);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.metadata = reader.string();
          break;
        case 3:
          message.proposers.push(reader.string());
          break;
        case 4:
          message.submitTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.foundationVersion = reader.uint64() as Long;
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.finalTallyResult = TallyResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.votingPeriodEnd = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.executorResult = reader.int32() as any;
          break;
        case 10:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      proposers: Array.isArray(object?.proposers)
        ? object.proposers.map((e: any) => String(e))
        : [],
      submitTime: isSet(object.submitTime)
        ? fromJsonTimestamp(object.submitTime)
        : undefined,
      foundationVersion: isSet(object.foundationVersion)
        ? Long.fromValue(object.foundationVersion)
        : Long.UZERO,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      finalTallyResult: isSet(object.finalTallyResult)
        ? TallyResult.fromJSON(object.finalTallyResult)
        : undefined,
      votingPeriodEnd: isSet(object.votingPeriodEnd)
        ? fromJsonTimestamp(object.votingPeriodEnd)
        : undefined,
      executorResult: isSet(object.executorResult)
        ? proposalExecutorResultFromJSON(object.executorResult)
        : 0,
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = [];
    }
    message.submitTime !== undefined &&
      (obj.submitTime = fromTimestamp(message.submitTime).toISOString());
    message.foundationVersion !== undefined &&
      (obj.foundationVersion = (
        message.foundationVersion || Long.UZERO
      ).toString());
    message.status !== undefined &&
      (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined &&
      (obj.finalTallyResult = message.finalTallyResult
        ? TallyResult.toJSON(message.finalTallyResult)
        : undefined);
    message.votingPeriodEnd !== undefined &&
      (obj.votingPeriodEnd = fromTimestamp(
        message.votingPeriodEnd
      ).toISOString());
    message.executorResult !== undefined &&
      (obj.executorResult = proposalExecutorResultToJSON(
        message.executorResult
      ));
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.metadata = object.metadata ?? "";
    message.proposers = object.proposers?.map((e) => e) || [];
    message.submitTime =
      object.submitTime !== undefined && object.submitTime !== null
        ? Timestamp.fromPartial(object.submitTime)
        : undefined;
    message.foundationVersion =
      object.foundationVersion !== undefined &&
      object.foundationVersion !== null
        ? Long.fromValue(object.foundationVersion)
        : Long.UZERO;
    message.status = object.status ?? 0;
    message.finalTallyResult =
      object.finalTallyResult !== undefined && object.finalTallyResult !== null
        ? TallyResult.fromPartial(object.finalTallyResult)
        : undefined;
    message.votingPeriodEnd =
      object.votingPeriodEnd !== undefined && object.votingPeriodEnd !== null
        ? Timestamp.fromPartial(object.votingPeriodEnd)
        : undefined;
    message.executorResult = object.executorResult ?? 0;
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTallyResult(): TallyResult {
  return { yesCount: "", abstainCount: "", noCount: "", noWithVetoCount: "" };
}

export const TallyResult = {
  encode(
    message: TallyResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }
    if (message.noWithVetoCount !== "") {
      writer.uint32(34).string(message.noWithVetoCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        case 4:
          message.noWithVetoCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TallyResult {
    return {
      yesCount: isSet(object.yesCount) ? String(object.yesCount) : "",
      abstainCount: isSet(object.abstainCount)
        ? String(object.abstainCount)
        : "",
      noCount: isSet(object.noCount) ? String(object.noCount) : "",
      noWithVetoCount: isSet(object.noWithVetoCount)
        ? String(object.noWithVetoCount)
        : "",
    };
  },

  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.abstainCount !== undefined &&
      (obj.abstainCount = message.abstainCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    message.noWithVetoCount !== undefined &&
      (obj.noWithVetoCount = message.noWithVetoCount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TallyResult>, I>>(
    object: I
  ): TallyResult {
    const message = createBaseTallyResult();
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    message.noWithVetoCount = object.noWithVetoCount ?? "";
    return message;
  },
};

function createBaseVote(): Vote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    submitTime: undefined,
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.submitTime !== undefined) {
      Timestamp.encode(message.submitTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
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
          message.submitTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromValue(object.proposalId)
        : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      submitTime: isSet(object.submitTime)
        ? fromJsonTimestamp(object.submitTime)
        : undefined,
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.submitTime !== undefined &&
      (obj.submitTime = fromTimestamp(message.submitTime).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.submitTime =
      object.submitTime !== undefined && object.submitTime !== null
        ? Timestamp.fromPartial(object.submitTime)
        : undefined;
    return message;
  },
};

function createBasePool(): Pool {
  return { treasury: [] };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.treasury) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.treasury.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      treasury: Array.isArray(object?.treasury)
        ? object.treasury.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    if (message.treasury) {
      obj.treasury = message.treasury.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.treasury = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.treasury =
      object.treasury?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFoundationExecProposal(): FoundationExecProposal {
  return { title: "", description: "", messages: [] };
}

export const FoundationExecProposal = {
  encode(
    message: FoundationExecProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FoundationExecProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFoundationExecProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FoundationExecProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FoundationExecProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FoundationExecProposal>, I>>(
    object: I
  ): FoundationExecProposal {
    const message = createBaseFoundationExecProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
