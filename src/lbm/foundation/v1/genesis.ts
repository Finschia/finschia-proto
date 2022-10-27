/* eslint-disable */
import {
  Params,
  FoundationInfo,
  Pool,
  Member,
  Proposal,
  Vote,
} from "./foundation";
import { Any } from "../../../google/protobuf/any";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.foundation.v1";

/** GenesisState defines the foundation module's genesis state. */
export interface GenesisState {
  /** params defines the module parameters at genesis. */
  params?: Params;
  /** foundation is the foundation info. */
  foundation?: FoundationInfo;
  /** members is the list of the foundation members. */
  members: Member[];
  /** it is used to get the next proposal ID. */
  previousProposalId: Long;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
  /** grants */
  authorizations: GrantAuthorization[];
  /** pool */
  pool?: Pool;
  /** govMintLeftCount is gov mint max count */
  govMintLeftCount: number;
}

/** GrantAuthorization defines authorization grant to grantee via route. */
export interface GrantAuthorization {
  grantee: string;
  authorization?: Any;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    foundation: undefined,
    members: [],
    previousProposalId: Long.UZERO,
    proposals: [],
    votes: [],
    authorizations: [],
    pool: undefined,
    govMintLeftCount: 0,
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
    if (message.foundation !== undefined) {
      FoundationInfo.encode(
        message.foundation,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.previousProposalId.isZero()) {
      writer.uint32(32).uint64(message.previousProposalId);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.authorizations) {
      GrantAuthorization.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(66).fork()).ldelim();
    }
    if (message.govMintLeftCount !== 0) {
      writer.uint32(72).uint32(message.govMintLeftCount);
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
          message.foundation = FoundationInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previousProposalId = reader.uint64() as Long;
          break;
        case 5:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 6:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 7:
          message.authorizations.push(
            GrantAuthorization.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 9:
          message.govMintLeftCount = reader.uint32();
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
      foundation: isSet(object.foundation)
        ? FoundationInfo.fromJSON(object.foundation)
        : undefined,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => Member.fromJSON(e))
        : [],
      previousProposalId: isSet(object.previousProposalId)
        ? Long.fromValue(object.previousProposalId)
        : Long.UZERO,
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
      authorizations: Array.isArray(object?.authorizations)
        ? object.authorizations.map((e: any) => GrantAuthorization.fromJSON(e))
        : [],
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      govMintLeftCount: isSet(object.govMintLeftCount)
        ? Number(object.govMintLeftCount)
        : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.foundation !== undefined &&
      (obj.foundation = message.foundation
        ? FoundationInfo.toJSON(message.foundation)
        : undefined);
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? Member.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.previousProposalId !== undefined &&
      (obj.previousProposalId = (
        message.previousProposalId || Long.UZERO
      ).toString());
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    if (message.authorizations) {
      obj.authorizations = message.authorizations.map((e) =>
        e ? GrantAuthorization.toJSON(e) : undefined
      );
    } else {
      obj.authorizations = [];
    }
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.govMintLeftCount !== undefined &&
      (obj.govMintLeftCount = Math.round(message.govMintLeftCount));
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
    message.foundation =
      object.foundation !== undefined && object.foundation !== null
        ? FoundationInfo.fromPartial(object.foundation)
        : undefined;
    message.members = object.members?.map((e) => Member.fromPartial(e)) || [];
    message.previousProposalId =
      object.previousProposalId !== undefined &&
      object.previousProposalId !== null
        ? Long.fromValue(object.previousProposalId)
        : Long.UZERO;
    message.proposals =
      object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    message.authorizations =
      object.authorizations?.map((e) => GrantAuthorization.fromPartial(e)) ||
      [];
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.govMintLeftCount = object.govMintLeftCount ?? 0;
    return message;
  },
};

function createBaseGrantAuthorization(): GrantAuthorization {
  return { grantee: "", authorization: undefined };
}

export const GrantAuthorization = {
  encode(
    message: GrantAuthorization,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
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

  fromJSON(object: any): GrantAuthorization {
    return {
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      authorization: isSet(object.authorization)
        ? Any.fromJSON(object.authorization)
        : undefined,
    };
  },

  toJSON(message: GrantAuthorization): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Any.toJSON(message.authorization)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrantAuthorization>, I>>(
    object: I
  ): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.grantee = object.grantee ?? "";
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Any.fromPartial(object.authorization)
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
