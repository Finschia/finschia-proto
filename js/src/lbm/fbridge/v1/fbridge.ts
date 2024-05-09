/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fbridge.v1";

/** Role defines the role of the operator, guardian, and judge. */
export enum Role {
  UNSPECIFIED = 0,
  GUARDIAN = 1,
  OPERATOR = 2,
  JUDGE = 3,
  UNRECOGNIZED = -1,
}

export function roleFromJSON(object: any): Role {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return Role.UNSPECIFIED;
    case 1:
    case "GUARDIAN":
      return Role.GUARDIAN;
    case 2:
    case "OPERATOR":
      return Role.OPERATOR;
    case 3:
    case "JUDGE":
      return Role.JUDGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Role.UNRECOGNIZED;
  }
}

export function roleToJSON(object: Role): string {
  switch (object) {
    case Role.UNSPECIFIED:
      return "UNSPECIFIED";
    case Role.GUARDIAN:
      return "GUARDIAN";
    case Role.OPERATOR:
      return "OPERATOR";
    case Role.JUDGE:
      return "JUDGE";
    case Role.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** VoteOption enumerates the valid vote options for a given role proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 2,
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
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
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
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BridgeStatus {
  /** BRIDGE_STATUS_UNSPECIFIED - BRIDGE_STATUS_UNSPECIFIED defines an unspecified bridge status. */
  BRIDGE_STATUS_UNSPECIFIED = 0,
  /** BRIDGE_STATUS_ACTIVE - BRIDGE_STATUS_ACTIVE defines an active bridge status. */
  BRIDGE_STATUS_ACTIVE = 1,
  /** BRIDGE_STATUS_INACTIVE - BRIDGE_STATUS_INACTIVE defines an inactive bridge status. */
  BRIDGE_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function bridgeStatusFromJSON(object: any): BridgeStatus {
  switch (object) {
    case 0:
    case "BRIDGE_STATUS_UNSPECIFIED":
      return BridgeStatus.BRIDGE_STATUS_UNSPECIFIED;
    case 1:
    case "BRIDGE_STATUS_ACTIVE":
      return BridgeStatus.BRIDGE_STATUS_ACTIVE;
    case 2:
    case "BRIDGE_STATUS_INACTIVE":
      return BridgeStatus.BRIDGE_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BridgeStatus.UNRECOGNIZED;
  }
}

export function bridgeStatusToJSON(object: BridgeStatus): string {
  switch (object) {
    case BridgeStatus.BRIDGE_STATUS_UNSPECIFIED:
      return "BRIDGE_STATUS_UNSPECIFIED";
    case BridgeStatus.BRIDGE_STATUS_ACTIVE:
      return "BRIDGE_STATUS_ACTIVE";
    case BridgeStatus.BRIDGE_STATUS_INACTIVE:
      return "BRIDGE_STATUS_INACTIVE";
    case BridgeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Params {
  /** ratio of how many operators' confirmations are needed to be valid. */
  operatorTrustLevel?: Fraction;
  /** ratio of how many guardians' confirmations are needed to be valid. */
  guardianTrustLevel?: Fraction;
  /** ratio of how many judges' confirmations are needed to be valid. */
  judgeTrustLevel?: Fraction;
  /** default timelock period for each provision (unix timestamp) */
  timelockPeriod: Long;
  /** default period of the proposal to update the role */
  proposalPeriod: Long;
  /** target denom of the bridge module. This is the base denom of Finschia normally. */
  targetDenom: string;
}

/** Provision is a struct that represents a provision internally. */
export interface ProvisionData {
  /** the sequence number of the bridge request */
  seq: Long;
  /** the amount of token to be claimed */
  amount: string;
  /** the sender address on the source chain */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
}

/**
 * ProvisionStatus is a struct that represents the status of a provision.
 * To optimize computational cost, we have collected frequently changing values from provision.
 */
export interface ProvisionStatus {
  /** the unix timestamp the provision will be able to be claimed (unix timestamp) */
  timelockEnd: Long;
  /** a value that tells how many operators have submitted this provision */
  confirmCounts: number;
  /** whether the provision has been claimed */
  isClaimed: boolean;
}

/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
  numerator: Long;
  denominator: Long;
}

export interface RolePair {
  address: string;
  role: Role;
}

export interface RoleProposal {
  id: Long;
  /** the proposer address */
  proposer: string;
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
  /** the unix timestamp the proposal will be expired (unix timestamp) */
  expiredAt?: Timestamp;
}

/** Vote defines a vote on a role proposal. */
export interface Vote {
  proposalId: Long;
  voter: string;
  option: VoteOption;
}

/** RoleMetadata defines the metadata of the role. */
export interface RoleMetadata {
  /** the number of registered guardians */
  guardian: Long;
  /** the number of the operators */
  operator: Long;
  /** the number of the judges */
  judge: Long;
}

/** BridgeStatusMetadata defines the metadata of the bridge status. */
export interface BridgeStatusMetadata {
  /** the number of inactived bridge switch */
  inactive: Long;
  /** the number of activated bridge switch */
  active: Long;
}

function createBaseParams(): Params {
  return {
    operatorTrustLevel: undefined,
    guardianTrustLevel: undefined,
    judgeTrustLevel: undefined,
    timelockPeriod: Long.UZERO,
    proposalPeriod: Long.UZERO,
    targetDenom: "",
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operatorTrustLevel !== undefined) {
      Fraction.encode(
        message.operatorTrustLevel,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.guardianTrustLevel !== undefined) {
      Fraction.encode(
        message.guardianTrustLevel,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.judgeTrustLevel !== undefined) {
      Fraction.encode(
        message.judgeTrustLevel,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (!message.timelockPeriod.isZero()) {
      writer.uint32(32).uint64(message.timelockPeriod);
    }
    if (!message.proposalPeriod.isZero()) {
      writer.uint32(40).uint64(message.proposalPeriod);
    }
    if (message.targetDenom !== "") {
      writer.uint32(50).string(message.targetDenom);
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
          message.operatorTrustLevel = Fraction.decode(reader, reader.uint32());
          break;
        case 2:
          message.guardianTrustLevel = Fraction.decode(reader, reader.uint32());
          break;
        case 3:
          message.judgeTrustLevel = Fraction.decode(reader, reader.uint32());
          break;
        case 4:
          message.timelockPeriod = reader.uint64() as Long;
          break;
        case 5:
          message.proposalPeriod = reader.uint64() as Long;
          break;
        case 6:
          message.targetDenom = reader.string();
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
      operatorTrustLevel: isSet(object.operatorTrustLevel)
        ? Fraction.fromJSON(object.operatorTrustLevel)
        : undefined,
      guardianTrustLevel: isSet(object.guardianTrustLevel)
        ? Fraction.fromJSON(object.guardianTrustLevel)
        : undefined,
      judgeTrustLevel: isSet(object.judgeTrustLevel)
        ? Fraction.fromJSON(object.judgeTrustLevel)
        : undefined,
      timelockPeriod: isSet(object.timelockPeriod)
        ? Long.fromValue(object.timelockPeriod)
        : Long.UZERO,
      proposalPeriod: isSet(object.proposalPeriod)
        ? Long.fromValue(object.proposalPeriod)
        : Long.UZERO,
      targetDenom: isSet(object.targetDenom) ? String(object.targetDenom) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.operatorTrustLevel !== undefined &&
      (obj.operatorTrustLevel = message.operatorTrustLevel
        ? Fraction.toJSON(message.operatorTrustLevel)
        : undefined);
    message.guardianTrustLevel !== undefined &&
      (obj.guardianTrustLevel = message.guardianTrustLevel
        ? Fraction.toJSON(message.guardianTrustLevel)
        : undefined);
    message.judgeTrustLevel !== undefined &&
      (obj.judgeTrustLevel = message.judgeTrustLevel
        ? Fraction.toJSON(message.judgeTrustLevel)
        : undefined);
    message.timelockPeriod !== undefined &&
      (obj.timelockPeriod = (message.timelockPeriod || Long.UZERO).toString());
    message.proposalPeriod !== undefined &&
      (obj.proposalPeriod = (message.proposalPeriod || Long.UZERO).toString());
    message.targetDenom !== undefined &&
      (obj.targetDenom = message.targetDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.operatorTrustLevel =
      object.operatorTrustLevel !== undefined &&
      object.operatorTrustLevel !== null
        ? Fraction.fromPartial(object.operatorTrustLevel)
        : undefined;
    message.guardianTrustLevel =
      object.guardianTrustLevel !== undefined &&
      object.guardianTrustLevel !== null
        ? Fraction.fromPartial(object.guardianTrustLevel)
        : undefined;
    message.judgeTrustLevel =
      object.judgeTrustLevel !== undefined && object.judgeTrustLevel !== null
        ? Fraction.fromPartial(object.judgeTrustLevel)
        : undefined;
    message.timelockPeriod =
      object.timelockPeriod !== undefined && object.timelockPeriod !== null
        ? Long.fromValue(object.timelockPeriod)
        : Long.UZERO;
    message.proposalPeriod =
      object.proposalPeriod !== undefined && object.proposalPeriod !== null
        ? Long.fromValue(object.proposalPeriod)
        : Long.UZERO;
    message.targetDenom = object.targetDenom ?? "";
    return message;
  },
};

function createBaseProvisionData(): ProvisionData {
  return { seq: Long.UZERO, amount: "", sender: "", receiver: "" };
}

export const ProvisionData = {
  encode(
    message: ProvisionData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.seq.isZero()) {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProvisionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvisionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = reader.uint64() as Long;
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProvisionData {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },

  toJSON(message: ProvisionData): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProvisionData>, I>>(
    object: I
  ): ProvisionData {
    const message = createBaseProvisionData();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};

function createBaseProvisionStatus(): ProvisionStatus {
  return { timelockEnd: Long.UZERO, confirmCounts: 0, isClaimed: false };
}

export const ProvisionStatus = {
  encode(
    message: ProvisionStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.timelockEnd.isZero()) {
      writer.uint32(8).uint64(message.timelockEnd);
    }
    if (message.confirmCounts !== 0) {
      writer.uint32(16).int32(message.confirmCounts);
    }
    if (message.isClaimed === true) {
      writer.uint32(24).bool(message.isClaimed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProvisionStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvisionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timelockEnd = reader.uint64() as Long;
          break;
        case 2:
          message.confirmCounts = reader.int32();
          break;
        case 3:
          message.isClaimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProvisionStatus {
    return {
      timelockEnd: isSet(object.timelockEnd)
        ? Long.fromValue(object.timelockEnd)
        : Long.UZERO,
      confirmCounts: isSet(object.confirmCounts)
        ? Number(object.confirmCounts)
        : 0,
      isClaimed: isSet(object.isClaimed) ? Boolean(object.isClaimed) : false,
    };
  },

  toJSON(message: ProvisionStatus): unknown {
    const obj: any = {};
    message.timelockEnd !== undefined &&
      (obj.timelockEnd = (message.timelockEnd || Long.UZERO).toString());
    message.confirmCounts !== undefined &&
      (obj.confirmCounts = Math.round(message.confirmCounts));
    message.isClaimed !== undefined && (obj.isClaimed = message.isClaimed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProvisionStatus>, I>>(
    object: I
  ): ProvisionStatus {
    const message = createBaseProvisionStatus();
    message.timelockEnd =
      object.timelockEnd !== undefined && object.timelockEnd !== null
        ? Long.fromValue(object.timelockEnd)
        : Long.UZERO;
    message.confirmCounts = object.confirmCounts ?? 0;
    message.isClaimed = object.isClaimed ?? false;
    return message;
  },
};

function createBaseFraction(): Fraction {
  return { numerator: Long.UZERO, denominator: Long.UZERO };
}

export const Fraction = {
  encode(
    message: Fraction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.numerator.isZero()) {
      writer.uint32(8).uint64(message.numerator);
    }
    if (!message.denominator.isZero()) {
      writer.uint32(16).uint64(message.denominator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fraction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numerator = reader.uint64() as Long;
          break;
        case 2:
          message.denominator = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fraction {
    return {
      numerator: isSet(object.numerator)
        ? Long.fromValue(object.numerator)
        : Long.UZERO,
      denominator: isSet(object.denominator)
        ? Long.fromValue(object.denominator)
        : Long.UZERO,
    };
  },

  toJSON(message: Fraction): unknown {
    const obj: any = {};
    message.numerator !== undefined &&
      (obj.numerator = (message.numerator || Long.UZERO).toString());
    message.denominator !== undefined &&
      (obj.denominator = (message.denominator || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fraction>, I>>(object: I): Fraction {
    const message = createBaseFraction();
    message.numerator =
      object.numerator !== undefined && object.numerator !== null
        ? Long.fromValue(object.numerator)
        : Long.UZERO;
    message.denominator =
      object.denominator !== undefined && object.denominator !== null
        ? Long.fromValue(object.denominator)
        : Long.UZERO;
    return message;
  },
};

function createBaseRolePair(): RolePair {
  return { address: "", role: 0 };
}

export const RolePair = {
  encode(
    message: RolePair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.role !== 0) {
      writer.uint32(16).int32(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RolePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRolePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.role = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RolePair {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      role: isSet(object.role) ? roleFromJSON(object.role) : 0,
    };
  },

  toJSON(message: RolePair): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.role !== undefined && (obj.role = roleToJSON(message.role));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RolePair>, I>>(object: I): RolePair {
    const message = createBaseRolePair();
    message.address = object.address ?? "";
    message.role = object.role ?? 0;
    return message;
  },
};

function createBaseRoleProposal(): RoleProposal {
  return {
    id: Long.UZERO,
    proposer: "",
    target: "",
    role: 0,
    expiredAt: undefined,
  };
}

export const RoleProposal = {
  encode(
    message: RoleProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (message.target !== "") {
      writer.uint32(26).string(message.target);
    }
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    if (message.expiredAt !== undefined) {
      Timestamp.encode(message.expiredAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.proposer = reader.string();
          break;
        case 3:
          message.target = reader.string();
          break;
        case 4:
          message.role = reader.int32() as any;
          break;
        case 5:
          message.expiredAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleProposal {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      target: isSet(object.target) ? String(object.target) : "",
      role: isSet(object.role) ? roleFromJSON(object.role) : 0,
      expiredAt: isSet(object.expiredAt)
        ? fromJsonTimestamp(object.expiredAt)
        : undefined,
    };
  },

  toJSON(message: RoleProposal): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.target !== undefined && (obj.target = message.target);
    message.role !== undefined && (obj.role = roleToJSON(message.role));
    message.expiredAt !== undefined &&
      (obj.expiredAt = fromTimestamp(message.expiredAt).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoleProposal>, I>>(
    object: I
  ): RoleProposal {
    const message = createBaseRoleProposal();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.proposer = object.proposer ?? "";
    message.target = object.target ?? "";
    message.role = object.role ?? 0;
    message.expiredAt =
      object.expiredAt !== undefined && object.expiredAt !== null
        ? Timestamp.fromPartial(object.expiredAt)
        : undefined;
    return message;
  },
};

function createBaseVote(): Vote {
  return { proposalId: Long.UZERO, voter: "", option: 0 };
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
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
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
    return message;
  },
};

function createBaseRoleMetadata(): RoleMetadata {
  return { guardian: Long.UZERO, operator: Long.UZERO, judge: Long.UZERO };
}

export const RoleMetadata = {
  encode(
    message: RoleMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.guardian.isZero()) {
      writer.uint32(8).uint64(message.guardian);
    }
    if (!message.operator.isZero()) {
      writer.uint32(16).uint64(message.operator);
    }
    if (!message.judge.isZero()) {
      writer.uint32(24).uint64(message.judge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guardian = reader.uint64() as Long;
          break;
        case 2:
          message.operator = reader.uint64() as Long;
          break;
        case 3:
          message.judge = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoleMetadata {
    return {
      guardian: isSet(object.guardian)
        ? Long.fromValue(object.guardian)
        : Long.UZERO,
      operator: isSet(object.operator)
        ? Long.fromValue(object.operator)
        : Long.UZERO,
      judge: isSet(object.judge) ? Long.fromValue(object.judge) : Long.UZERO,
    };
  },

  toJSON(message: RoleMetadata): unknown {
    const obj: any = {};
    message.guardian !== undefined &&
      (obj.guardian = (message.guardian || Long.UZERO).toString());
    message.operator !== undefined &&
      (obj.operator = (message.operator || Long.UZERO).toString());
    message.judge !== undefined &&
      (obj.judge = (message.judge || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoleMetadata>, I>>(
    object: I
  ): RoleMetadata {
    const message = createBaseRoleMetadata();
    message.guardian =
      object.guardian !== undefined && object.guardian !== null
        ? Long.fromValue(object.guardian)
        : Long.UZERO;
    message.operator =
      object.operator !== undefined && object.operator !== null
        ? Long.fromValue(object.operator)
        : Long.UZERO;
    message.judge =
      object.judge !== undefined && object.judge !== null
        ? Long.fromValue(object.judge)
        : Long.UZERO;
    return message;
  },
};

function createBaseBridgeStatusMetadata(): BridgeStatusMetadata {
  return { inactive: Long.UZERO, active: Long.UZERO };
}

export const BridgeStatusMetadata = {
  encode(
    message: BridgeStatusMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.inactive.isZero()) {
      writer.uint32(8).uint64(message.inactive);
    }
    if (!message.active.isZero()) {
      writer.uint32(16).uint64(message.active);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BridgeStatusMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeStatusMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inactive = reader.uint64() as Long;
          break;
        case 2:
          message.active = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BridgeStatusMetadata {
    return {
      inactive: isSet(object.inactive)
        ? Long.fromValue(object.inactive)
        : Long.UZERO,
      active: isSet(object.active) ? Long.fromValue(object.active) : Long.UZERO,
    };
  },

  toJSON(message: BridgeStatusMetadata): unknown {
    const obj: any = {};
    message.inactive !== undefined &&
      (obj.inactive = (message.inactive || Long.UZERO).toString());
    message.active !== undefined &&
      (obj.active = (message.active || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BridgeStatusMetadata>, I>>(
    object: I
  ): BridgeStatusMetadata {
    const message = createBaseBridgeStatusMetadata();
    message.inactive =
      object.inactive !== undefined && object.inactive !== null
        ? Long.fromValue(object.inactive)
        : Long.UZERO;
    message.active =
      object.active !== undefined && object.active !== null
        ? Long.fromValue(object.active)
        : Long.UZERO;
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
