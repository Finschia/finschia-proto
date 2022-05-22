/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "lbm.foundation.v1";

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
    default:
      return "UNKNOWN";
  }
}

/** ProposalStatus defines proposal statuses. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when persisted. */
  PROPOSAL_STATUS_SUBMITTED = 1,
  /** PROPOSAL_STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
  PROPOSAL_STATUS_CLOSED = 2,
  /** PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group was modified before the final tally. */
  PROPOSAL_STATUS_ABORTED = 3,
  /**
   * PROPOSAL_STATUS_WITHDRAWN - A proposal can be deleted before the voting start time by the owner. When this happens the final status
   * is Withdrawn.
   */
  PROPOSAL_STATUS_WITHDRAWN = 4,
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
    case "PROPOSAL_STATUS_CLOSED":
      return ProposalStatus.PROPOSAL_STATUS_CLOSED;
    case 3:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;
    case 4:
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
    case ProposalStatus.PROPOSAL_STATUS_CLOSED:
      return "PROPOSAL_STATUS_CLOSED";
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";
    default:
      return "UNKNOWN";
  }
}

/** ProposalResult defines types of proposal results. */
export enum ProposalResult {
  /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
  PROPOSAL_RESULT_UNSPECIFIED = 0,
  /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
  PROPOSAL_RESULT_UNFINALIZED = 1,
  /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
  PROPOSAL_RESULT_ACCEPTED = 2,
  /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
  PROPOSAL_RESULT_REJECTED = 3,
  UNRECOGNIZED = -1,
}

export function proposalResultFromJSON(object: any): ProposalResult {
  switch (object) {
    case 0:
    case "PROPOSAL_RESULT_UNSPECIFIED":
      return ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_RESULT_UNFINALIZED":
      return ProposalResult.PROPOSAL_RESULT_UNFINALIZED;
    case 2:
    case "PROPOSAL_RESULT_ACCEPTED":
      return ProposalResult.PROPOSAL_RESULT_ACCEPTED;
    case 3:
    case "PROPOSAL_RESULT_REJECTED":
      return ProposalResult.PROPOSAL_RESULT_REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalResult.UNRECOGNIZED;
  }
}

export function proposalResultToJSON(object: ProposalResult): string {
  switch (object) {
    case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
      return "PROPOSAL_RESULT_UNSPECIFIED";
    case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
      return "PROPOSAL_RESULT_UNFINALIZED";
    case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
      return "PROPOSAL_RESULT_ACCEPTED";
    case ProposalResult.PROPOSAL_RESULT_REJECTED:
      return "PROPOSAL_RESULT_REJECTED";
    default:
      return "UNKNOWN";
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
    default:
      return "UNKNOWN";
  }
}

/** Params defines the parameters for the foundation module. */
export interface Params {
  enabled: boolean;
  foundationTax: string;
}

/** ValidatorAuth defines authorization info of a validator. */
export interface ValidatorAuth {
  operatorAddress: string;
  creationAllowed: boolean;
}

/** UpdateFoundationParamsProposal details a proposal to update params of foundation module. */
export interface UpdateFoundationParamsProposal {
  title: string;
  description: string;
  params?: Params;
}

/** UpdateValidatorAuthsProposal details a proposal to update validator auths on foundation. */
export interface UpdateValidatorAuthsProposal {
  title: string;
  description: string;
  auths: ValidatorAuth[];
}

/** Member represents a foundation member with an account address and metadata. */
export interface Member {
  /** address is the member's account address. */
  address: string;
  /** participating is the flag which allows one to remove the member by setting the flag to false. */
  participating: boolean;
  /** metadata is any arbitrary metadata to attached to the member. */
  metadata: string;
  /** added_at is a timestamp specifying when a member was added. */
  addedAt?: Timestamp;
}

/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicy {
  /** threshold is the minimum sum of yes votes that must be met or exceeded for a proposal to succeed. */
  threshold: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
}

/** PercentageDecisionPolicy implements the DecisionPolicy interface */
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

/** FoundationInfo represents the high-level on-chain information for the foundation. */
export interface FoundationInfo {
  /** operator is the account address of the foundation's operator. */
  operator: string;
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
   * result is the final result based on the votes and election rule. Initial value is unfinalized.
   * The result is persisted so that clients can always rely on this state and not have to replicate the logic.
   */
  result: ProposalResult;
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

function createBaseParams(): Params {
  return { enabled: false, foundationTax: "" };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.foundationTax !== "") {
      writer.uint32(18).string(message.foundationTax);
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
          message.enabled = reader.bool();
          break;
        case 2:
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
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      foundationTax: isSet(object.foundationTax)
        ? String(object.foundationTax)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.foundationTax !== undefined &&
      (obj.foundationTax = message.foundationTax);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    message.foundationTax = object.foundationTax ?? "";
    return message;
  },
};

function createBaseValidatorAuth(): ValidatorAuth {
  return { operatorAddress: "", creationAllowed: false };
}

export const ValidatorAuth = {
  encode(
    message: ValidatorAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.creationAllowed === true) {
      writer.uint32(16).bool(message.creationAllowed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.creationAllowed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorAuth {
    return {
      operatorAddress: isSet(object.operatorAddress)
        ? String(object.operatorAddress)
        : "",
      creationAllowed: isSet(object.creationAllowed)
        ? Boolean(object.creationAllowed)
        : false,
    };
  },

  toJSON(message: ValidatorAuth): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.creationAllowed !== undefined &&
      (obj.creationAllowed = message.creationAllowed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorAuth>, I>>(
    object: I
  ): ValidatorAuth {
    const message = createBaseValidatorAuth();
    message.operatorAddress = object.operatorAddress ?? "";
    message.creationAllowed = object.creationAllowed ?? false;
    return message;
  },
};

function createBaseUpdateFoundationParamsProposal(): UpdateFoundationParamsProposal {
  return { title: "", description: "", params: undefined };
}

export const UpdateFoundationParamsProposal = {
  encode(
    message: UpdateFoundationParamsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateFoundationParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFoundationParamsProposal();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateFoundationParamsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: UpdateFoundationParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFoundationParamsProposal>, I>>(
    object: I
  ): UpdateFoundationParamsProposal {
    const message = createBaseUpdateFoundationParamsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseUpdateValidatorAuthsProposal(): UpdateValidatorAuthsProposal {
  return { title: "", description: "", auths: [] };
}

export const UpdateValidatorAuthsProposal = {
  encode(
    message: UpdateValidatorAuthsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.auths) {
      ValidatorAuth.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateValidatorAuthsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateValidatorAuthsProposal();
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
          message.auths.push(ValidatorAuth.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateValidatorAuthsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      auths: Array.isArray(object?.auths)
        ? object.auths.map((e: any) => ValidatorAuth.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateValidatorAuthsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.auths) {
      obj.auths = message.auths.map((e) =>
        e ? ValidatorAuth.toJSON(e) : undefined
      );
    } else {
      obj.auths = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateValidatorAuthsProposal>, I>>(
    object: I
  ): UpdateValidatorAuthsProposal {
    const message = createBaseUpdateValidatorAuthsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.auths =
      object.auths?.map((e) => ValidatorAuth.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMember(): Member {
  return {
    address: "",
    participating: false,
    metadata: "",
    addedAt: undefined,
  };
}

export const Member = {
  encode(
    message: Member,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.participating === true) {
      writer.uint32(16).bool(message.participating);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
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
          message.participating = reader.bool();
          break;
        case 3:
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
      participating: isSet(object.participating)
        ? Boolean(object.participating)
        : false,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      addedAt: isSet(object.addedAt)
        ? fromJsonTimestamp(object.addedAt)
        : undefined,
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.participating !== undefined &&
      (obj.participating = message.participating);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.addedAt !== undefined &&
      (obj.addedAt = fromTimestamp(message.addedAt).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.participating = object.participating ?? false;
    message.metadata = object.metadata ?? "";
    message.addedAt =
      object.addedAt !== undefined && object.addedAt !== null
        ? Timestamp.fromPartial(object.addedAt)
        : undefined;
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

function createBaseFoundationInfo(): FoundationInfo {
  return {
    operator: "",
    version: Long.UZERO,
    totalWeight: "",
    decisionPolicy: undefined,
  };
}

export const FoundationInfo = {
  encode(
    message: FoundationInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (!message.version.isZero()) {
      writer.uint32(16).uint64(message.version);
    }
    if (message.totalWeight !== "") {
      writer.uint32(26).string(message.totalWeight);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
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
          message.operator = reader.string();
          break;
        case 2:
          message.version = reader.uint64() as Long;
          break;
        case 3:
          message.totalWeight = reader.string();
          break;
        case 4:
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
      operator: isSet(object.operator) ? String(object.operator) : "",
      version: isSet(object.version)
        ? Long.fromString(object.version)
        : Long.UZERO,
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      decisionPolicy: isSet(object.decisionPolicy)
        ? Any.fromJSON(object.decisionPolicy)
        : undefined,
    };
  },

  toJSON(message: FoundationInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
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
    message.operator = object.operator ?? "";
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
    result: 0,
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
    if (message.result !== 0) {
      writer.uint32(56).int32(message.result);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(
        message.finalTallyResult,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.votingPeriodEnd !== undefined) {
      Timestamp.encode(
        message.votingPeriodEnd,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.executorResult !== 0) {
      writer.uint32(80).int32(message.executorResult);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(90).fork()).ldelim();
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
          message.result = reader.int32() as any;
          break;
        case 8:
          message.finalTallyResult = TallyResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.votingPeriodEnd = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.executorResult = reader.int32() as any;
          break;
        case 11:
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
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      proposers: Array.isArray(object?.proposers)
        ? object.proposers.map((e: any) => String(e))
        : [],
      submitTime: isSet(object.submitTime)
        ? fromJsonTimestamp(object.submitTime)
        : undefined,
      foundationVersion: isSet(object.foundationVersion)
        ? Long.fromString(object.foundationVersion)
        : Long.UZERO,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      result: isSet(object.result) ? proposalResultFromJSON(object.result) : 0,
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
    message.result !== undefined &&
      (obj.result = proposalResultToJSON(message.result));
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
    message.result = object.result ?? 0;
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
        ? Long.fromString(object.proposalId)
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
