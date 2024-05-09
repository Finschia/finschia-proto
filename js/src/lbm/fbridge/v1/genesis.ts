/* eslint-disable */
import {
  Params,
  ProvisionData,
  ProvisionStatus,
  BridgeStatus,
  RoleProposal,
  Vote,
  RolePair,
  bridgeStatusFromJSON,
  bridgeStatusToJSON,
} from "./fbridge";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fbridge.v1";

/** GenesisState defines the fbridge module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  /** sending_state defines status saved when sending tokens to a counterpart chain */
  sendingState?: SendingState;
  /** receiving_state defines status saved when receiving tokens from a counterpart chain */
  receivingState?: ReceivingState;
  /** next_role_proposal_id is the next role proposal ID to be used. */
  nextRoleProposalId: Long;
  /** role_proposals defines all the role proposals present at genesis. */
  roleProposals: RoleProposal[];
  /** votes defines all the votes present for role proposals at genesis. */
  votes: Vote[];
  /** roles defines all addresses assigned roles at genesis. */
  roles: RolePair[];
  /** bridge_switches defines the status of whether each guardian has allowed the bridge to operate. */
  bridgeSwitches: BridgeSwitch[];
}

export interface SendingState {
  /** the next sequence number of the bridge request (greatest sequence number + 1) */
  nextSeq: Long;
  /** sequence-per-block number mapping */
  seqToBlocknum: BlockSeqInfo[];
}

export interface BlockSeqInfo {
  seq: Long;
  blocknum: Long;
}

export interface ReceivingState {
  /** the greatest consecutive sequence number confirmed by each operator */
  greatestConsecutiveSeqByOperator: OperatorSeqInfo[];
  /** the greatest sequence number confirmed by each operator */
  greatestSeqByOperator: OperatorSeqInfo[];
  /**
   * the greatest consecutive sequence numbers confirmed by n-of-m operators
   * consecutiveness is judged starting from the number closest to 0.
   */
  greatestConsecutiveSeq: Long;
  /** the set of sequence numbers to be claimed */
  pendingClaimSeqs: Long[];
  /** commitment is the hash value of a specific provision. */
  commitments: Commitment[];
  /** provision associated with a specific commitment. */
  provisions: Provision[];
  /** map the sequence number confirmed by n-of-m operators with commitment */
  confirmedSeqToCommitment: ConfirmedProvision[];
}

export interface OperatorSeqInfo {
  /** the operator address */
  operator: string;
  /** the sequence number */
  seq: Long;
}

export interface Commitment {
  /** the operator address */
  operator: string;
  /** the sequence number of the bridge request */
  seq: Long;
  /** commitment is the hash value of a provision */
  commitment: string;
}

export interface Provision {
  commitment: string;
  data?: ProvisionData;
  status?: ProvisionStatus;
}

export interface ConfirmedProvision {
  /** the sequence number of the bridge request */
  seq: Long;
  /** commitment is the hash value of a provision */
  commitment: string;
}

export interface BridgeSwitch {
  /** the guardian address */
  guardian: string;
  status: BridgeStatus;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    sendingState: undefined,
    receivingState: undefined,
    nextRoleProposalId: Long.UZERO,
    roleProposals: [],
    votes: [],
    roles: [],
    bridgeSwitches: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.sendingState !== undefined) {
      SendingState.encode(
        message.sendingState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.receivingState !== undefined) {
      ReceivingState.encode(
        message.receivingState,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (!message.nextRoleProposalId.isZero()) {
      writer.uint32(32).uint64(message.nextRoleProposalId);
    }
    for (const v of message.roleProposals) {
      RoleProposal.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.roles) {
      RolePair.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.bridgeSwitches) {
      BridgeSwitch.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.sendingState = SendingState.decode(reader, reader.uint32());
          break;
        case 3:
          message.receivingState = ReceivingState.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.nextRoleProposalId = reader.uint64() as Long;
          break;
        case 5:
          message.roleProposals.push(
            RoleProposal.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 7:
          message.roles.push(RolePair.decode(reader, reader.uint32()));
          break;
        case 8:
          message.bridgeSwitches.push(
            BridgeSwitch.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      sendingState: isSet(object.sendingState)
        ? SendingState.fromJSON(object.sendingState)
        : undefined,
      receivingState: isSet(object.receivingState)
        ? ReceivingState.fromJSON(object.receivingState)
        : undefined,
      nextRoleProposalId: isSet(object.nextRoleProposalId)
        ? Long.fromValue(object.nextRoleProposalId)
        : Long.UZERO,
      roleProposals: Array.isArray(object?.roleProposals)
        ? object.roleProposals.map((e: any) => RoleProposal.fromJSON(e))
        : [],
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => RolePair.fromJSON(e))
        : [],
      bridgeSwitches: Array.isArray(object?.bridgeSwitches)
        ? object.bridgeSwitches.map((e: any) => BridgeSwitch.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.sendingState !== undefined &&
      (obj.sendingState = message.sendingState
        ? SendingState.toJSON(message.sendingState)
        : undefined);
    message.receivingState !== undefined &&
      (obj.receivingState = message.receivingState
        ? ReceivingState.toJSON(message.receivingState)
        : undefined);
    message.nextRoleProposalId !== undefined &&
      (obj.nextRoleProposalId = (
        message.nextRoleProposalId || Long.UZERO
      ).toString());
    if (message.roleProposals) {
      obj.roleProposals = message.roleProposals.map((e) =>
        e ? RoleProposal.toJSON(e) : undefined
      );
    } else {
      obj.roleProposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    if (message.roles) {
      obj.roles = message.roles.map((e) =>
        e ? RolePair.toJSON(e) : undefined
      );
    } else {
      obj.roles = [];
    }
    if (message.bridgeSwitches) {
      obj.bridgeSwitches = message.bridgeSwitches.map((e) =>
        e ? BridgeSwitch.toJSON(e) : undefined
      );
    } else {
      obj.bridgeSwitches = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.sendingState =
      object.sendingState !== undefined && object.sendingState !== null
        ? SendingState.fromPartial(object.sendingState)
        : undefined;
    message.receivingState =
      object.receivingState !== undefined && object.receivingState !== null
        ? ReceivingState.fromPartial(object.receivingState)
        : undefined;
    message.nextRoleProposalId =
      object.nextRoleProposalId !== undefined &&
      object.nextRoleProposalId !== null
        ? Long.fromValue(object.nextRoleProposalId)
        : Long.UZERO;
    message.roleProposals =
      object.roleProposals?.map((e) => RoleProposal.fromPartial(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    message.roles = object.roles?.map((e) => RolePair.fromPartial(e)) || [];
    message.bridgeSwitches =
      object.bridgeSwitches?.map((e) => BridgeSwitch.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSendingState(): SendingState {
  return { nextSeq: Long.UZERO, seqToBlocknum: [] };
}

export const SendingState = {
  encode(
    message: SendingState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.nextSeq.isZero()) {
      writer.uint32(8).uint64(message.nextSeq);
    }
    for (const v of message.seqToBlocknum) {
      BlockSeqInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendingState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendingState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextSeq = reader.uint64() as Long;
          break;
        case 2:
          message.seqToBlocknum.push(
            BlockSeqInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendingState {
    return {
      nextSeq: isSet(object.nextSeq)
        ? Long.fromValue(object.nextSeq)
        : Long.UZERO,
      seqToBlocknum: Array.isArray(object?.seqToBlocknum)
        ? object.seqToBlocknum.map((e: any) => BlockSeqInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SendingState): unknown {
    const obj: any = {};
    message.nextSeq !== undefined &&
      (obj.nextSeq = (message.nextSeq || Long.UZERO).toString());
    if (message.seqToBlocknum) {
      obj.seqToBlocknum = message.seqToBlocknum.map((e) =>
        e ? BlockSeqInfo.toJSON(e) : undefined
      );
    } else {
      obj.seqToBlocknum = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendingState>, I>>(
    object: I
  ): SendingState {
    const message = createBaseSendingState();
    message.nextSeq =
      object.nextSeq !== undefined && object.nextSeq !== null
        ? Long.fromValue(object.nextSeq)
        : Long.UZERO;
    message.seqToBlocknum =
      object.seqToBlocknum?.map((e) => BlockSeqInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBlockSeqInfo(): BlockSeqInfo {
  return { seq: Long.UZERO, blocknum: Long.UZERO };
}

export const BlockSeqInfo = {
  encode(
    message: BlockSeqInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.seq.isZero()) {
      writer.uint32(8).uint64(message.seq);
    }
    if (!message.blocknum.isZero()) {
      writer.uint32(16).uint64(message.blocknum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockSeqInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockSeqInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = reader.uint64() as Long;
          break;
        case 2:
          message.blocknum = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockSeqInfo {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      blocknum: isSet(object.blocknum)
        ? Long.fromValue(object.blocknum)
        : Long.UZERO,
    };
  },

  toJSON(message: BlockSeqInfo): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    message.blocknum !== undefined &&
      (obj.blocknum = (message.blocknum || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockSeqInfo>, I>>(
    object: I
  ): BlockSeqInfo {
    const message = createBaseBlockSeqInfo();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    message.blocknum =
      object.blocknum !== undefined && object.blocknum !== null
        ? Long.fromValue(object.blocknum)
        : Long.UZERO;
    return message;
  },
};

function createBaseReceivingState(): ReceivingState {
  return {
    greatestConsecutiveSeqByOperator: [],
    greatestSeqByOperator: [],
    greatestConsecutiveSeq: Long.UZERO,
    pendingClaimSeqs: [],
    commitments: [],
    provisions: [],
    confirmedSeqToCommitment: [],
  };
}

export const ReceivingState = {
  encode(
    message: ReceivingState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.greatestConsecutiveSeqByOperator) {
      OperatorSeqInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.greatestSeqByOperator) {
      OperatorSeqInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.greatestConsecutiveSeq.isZero()) {
      writer.uint32(24).uint64(message.greatestConsecutiveSeq);
    }
    writer.uint32(34).fork();
    for (const v of message.pendingClaimSeqs) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.commitments) {
      Commitment.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.provisions) {
      Provision.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.confirmedSeqToCommitment) {
      ConfirmedProvision.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceivingState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceivingState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.greatestConsecutiveSeqByOperator.push(
            OperatorSeqInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.greatestSeqByOperator.push(
            OperatorSeqInfo.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.greatestConsecutiveSeq = reader.uint64() as Long;
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pendingClaimSeqs.push(reader.uint64() as Long);
            }
          } else {
            message.pendingClaimSeqs.push(reader.uint64() as Long);
          }
          break;
        case 6:
          message.commitments.push(Commitment.decode(reader, reader.uint32()));
          break;
        case 7:
          message.provisions.push(Provision.decode(reader, reader.uint32()));
          break;
        case 8:
          message.confirmedSeqToCommitment.push(
            ConfirmedProvision.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReceivingState {
    return {
      greatestConsecutiveSeqByOperator: Array.isArray(
        object?.greatestConsecutiveSeqByOperator
      )
        ? object.greatestConsecutiveSeqByOperator.map((e: any) =>
            OperatorSeqInfo.fromJSON(e)
          )
        : [],
      greatestSeqByOperator: Array.isArray(object?.greatestSeqByOperator)
        ? object.greatestSeqByOperator.map((e: any) =>
            OperatorSeqInfo.fromJSON(e)
          )
        : [],
      greatestConsecutiveSeq: isSet(object.greatestConsecutiveSeq)
        ? Long.fromValue(object.greatestConsecutiveSeq)
        : Long.UZERO,
      pendingClaimSeqs: Array.isArray(object?.pendingClaimSeqs)
        ? object.pendingClaimSeqs.map((e: any) => Long.fromValue(e))
        : [],
      commitments: Array.isArray(object?.commitments)
        ? object.commitments.map((e: any) => Commitment.fromJSON(e))
        : [],
      provisions: Array.isArray(object?.provisions)
        ? object.provisions.map((e: any) => Provision.fromJSON(e))
        : [],
      confirmedSeqToCommitment: Array.isArray(object?.confirmedSeqToCommitment)
        ? object.confirmedSeqToCommitment.map((e: any) =>
            ConfirmedProvision.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: ReceivingState): unknown {
    const obj: any = {};
    if (message.greatestConsecutiveSeqByOperator) {
      obj.greatestConsecutiveSeqByOperator =
        message.greatestConsecutiveSeqByOperator.map((e) =>
          e ? OperatorSeqInfo.toJSON(e) : undefined
        );
    } else {
      obj.greatestConsecutiveSeqByOperator = [];
    }
    if (message.greatestSeqByOperator) {
      obj.greatestSeqByOperator = message.greatestSeqByOperator.map((e) =>
        e ? OperatorSeqInfo.toJSON(e) : undefined
      );
    } else {
      obj.greatestSeqByOperator = [];
    }
    message.greatestConsecutiveSeq !== undefined &&
      (obj.greatestConsecutiveSeq = (
        message.greatestConsecutiveSeq || Long.UZERO
      ).toString());
    if (message.pendingClaimSeqs) {
      obj.pendingClaimSeqs = message.pendingClaimSeqs.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.pendingClaimSeqs = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) =>
        e ? Commitment.toJSON(e) : undefined
      );
    } else {
      obj.commitments = [];
    }
    if (message.provisions) {
      obj.provisions = message.provisions.map((e) =>
        e ? Provision.toJSON(e) : undefined
      );
    } else {
      obj.provisions = [];
    }
    if (message.confirmedSeqToCommitment) {
      obj.confirmedSeqToCommitment = message.confirmedSeqToCommitment.map((e) =>
        e ? ConfirmedProvision.toJSON(e) : undefined
      );
    } else {
      obj.confirmedSeqToCommitment = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReceivingState>, I>>(
    object: I
  ): ReceivingState {
    const message = createBaseReceivingState();
    message.greatestConsecutiveSeqByOperator =
      object.greatestConsecutiveSeqByOperator?.map((e) =>
        OperatorSeqInfo.fromPartial(e)
      ) || [];
    message.greatestSeqByOperator =
      object.greatestSeqByOperator?.map((e) =>
        OperatorSeqInfo.fromPartial(e)
      ) || [];
    message.greatestConsecutiveSeq =
      object.greatestConsecutiveSeq !== undefined &&
      object.greatestConsecutiveSeq !== null
        ? Long.fromValue(object.greatestConsecutiveSeq)
        : Long.UZERO;
    message.pendingClaimSeqs =
      object.pendingClaimSeqs?.map((e) => Long.fromValue(e)) || [];
    message.commitments =
      object.commitments?.map((e) => Commitment.fromPartial(e)) || [];
    message.provisions =
      object.provisions?.map((e) => Provision.fromPartial(e)) || [];
    message.confirmedSeqToCommitment =
      object.confirmedSeqToCommitment?.map((e) =>
        ConfirmedProvision.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseOperatorSeqInfo(): OperatorSeqInfo {
  return { operator: "", seq: Long.UZERO };
}

export const OperatorSeqInfo = {
  encode(
    message: OperatorSeqInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (!message.seq.isZero()) {
      writer.uint32(16).uint64(message.seq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperatorSeqInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorSeqInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
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

  fromJSON(object: any): OperatorSeqInfo {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: OperatorSeqInfo): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OperatorSeqInfo>, I>>(
    object: I
  ): OperatorSeqInfo {
    const message = createBaseOperatorSeqInfo();
    message.operator = object.operator ?? "";
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseCommitment(): Commitment {
  return { operator: "", seq: Long.UZERO, commitment: "" };
}

export const Commitment = {
  encode(
    message: Commitment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (!message.seq.isZero()) {
      writer.uint32(16).uint64(message.seq);
    }
    if (message.commitment !== "") {
      writer.uint32(26).string(message.commitment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commitment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.seq = reader.uint64() as Long;
          break;
        case 3:
          message.commitment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Commitment {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      commitment: isSet(object.commitment) ? String(object.commitment) : "",
    };
  },

  toJSON(message: Commitment): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    message.commitment !== undefined && (obj.commitment = message.commitment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Commitment>, I>>(
    object: I
  ): Commitment {
    const message = createBaseCommitment();
    message.operator = object.operator ?? "";
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    message.commitment = object.commitment ?? "";
    return message;
  },
};

function createBaseProvision(): Provision {
  return { commitment: "", data: undefined, status: undefined };
}

export const Provision = {
  encode(
    message: Provision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitment !== "") {
      writer.uint32(10).string(message.commitment);
    }
    if (message.data !== undefined) {
      ProvisionData.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      ProvisionStatus.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.string();
          break;
        case 2:
          message.data = ProvisionData.decode(reader, reader.uint32());
          break;
        case 3:
          message.status = ProvisionStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Provision {
    return {
      commitment: isSet(object.commitment) ? String(object.commitment) : "",
      data: isSet(object.data)
        ? ProvisionData.fromJSON(object.data)
        : undefined,
      status: isSet(object.status)
        ? ProvisionStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: Provision): unknown {
    const obj: any = {};
    message.commitment !== undefined && (obj.commitment = message.commitment);
    message.data !== undefined &&
      (obj.data = message.data
        ? ProvisionData.toJSON(message.data)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status
        ? ProvisionStatus.toJSON(message.status)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Provision>, I>>(
    object: I
  ): Provision {
    const message = createBaseProvision();
    message.commitment = object.commitment ?? "";
    message.data =
      object.data !== undefined && object.data !== null
        ? ProvisionData.fromPartial(object.data)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? ProvisionStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseConfirmedProvision(): ConfirmedProvision {
  return { seq: Long.UZERO, commitment: "" };
}

export const ConfirmedProvision = {
  encode(
    message: ConfirmedProvision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.seq.isZero()) {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.commitment !== "") {
      writer.uint32(18).string(message.commitment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmedProvision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmedProvision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = reader.uint64() as Long;
          break;
        case 2:
          message.commitment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfirmedProvision {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      commitment: isSet(object.commitment) ? String(object.commitment) : "",
    };
  },

  toJSON(message: ConfirmedProvision): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    message.commitment !== undefined && (obj.commitment = message.commitment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmedProvision>, I>>(
    object: I
  ): ConfirmedProvision {
    const message = createBaseConfirmedProvision();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    message.commitment = object.commitment ?? "";
    return message;
  },
};

function createBaseBridgeSwitch(): BridgeSwitch {
  return { guardian: "", status: 0 };
}

export const BridgeSwitch = {
  encode(
    message: BridgeSwitch,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BridgeSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeSwitch();
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

  fromJSON(object: any): BridgeSwitch {
    return {
      guardian: isSet(object.guardian) ? String(object.guardian) : "",
      status: isSet(object.status) ? bridgeStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: BridgeSwitch): unknown {
    const obj: any = {};
    message.guardian !== undefined && (obj.guardian = message.guardian);
    message.status !== undefined &&
      (obj.status = bridgeStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BridgeSwitch>, I>>(
    object: I
  ): BridgeSwitch {
    const message = createBaseBridgeSwitch();
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
