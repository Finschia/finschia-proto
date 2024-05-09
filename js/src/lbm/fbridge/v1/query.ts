/* eslint-disable */
import {
  Params,
  ProvisionData,
  ProvisionStatus,
  RoleProposal,
  Vote,
  BridgeStatus,
  BridgeStatusMetadata,
  bridgeStatusFromJSON,
  bridgeStatusToJSON,
} from "./fbridge";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.fbridge.v1";

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryNextSeqSendRequest {}

export interface QueryNextSeqSendResponse {
  seq: Long;
}

export interface QuerySeqToBlocknumsRequest {
  /** list of sequence number of the bridge request */
  seqs: Long[];
}

export interface QuerySeqToBlocknumsResponse {
  blocknums: Long[];
}

export interface QueryGreatestSeqByOperatorRequest {
  /** the address of the operator */
  operator: string;
}

export interface QueryGreatestSeqByOperatorResponse {
  seq: Long;
}

export interface QueryGreatestConsecutiveConfirmedSeqRequest {}

export interface QueryGreatestConsecutiveConfirmedSeqResponse {
  seq: Long;
}

export interface QuerySubmittedProvisionRequest {
  /** the address of the operator */
  operator: string;
  /** the sequence number of the bridge request */
  seq: Long;
}

export interface QuerySubmittedProvisionResponse {
  data?: ProvisionData;
  status?: ProvisionStatus;
}

export interface QueryNeededSubmissionSeqsRequest {
  /** the address of the operator */
  operator: string;
  /** range specifies the size of the range to search */
  range: Long;
}

export interface QueryNeededSubmissionSeqsResponse {
  seqs: Long[];
}

export interface QueryConfirmedProvisionRequest {
  /** the sequence number of the bridge request */
  seq: Long;
}

export interface QueryConfirmedProvisionResponse {
  data?: ProvisionData;
  status?: ProvisionStatus;
}

export interface QueryCommitmentsRequest {
  /** the sequence number of the bridge request */
  seq: Long;
}

export interface QueryCommitmentsResponse {
  commitments: string[];
}

export interface QueryMembersRequest {
  /** the role name (guardian, operator, judge) */
  role: string;
}

export interface QueryMembersResponse {
  members: string[];
}

export interface QueryMemberRequest {
  address: string;
}

export interface QueryMemberResponse {
  role: string;
}

export interface QueryProposalsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

export interface QueryProposalsResponse {
  proposals: RoleProposal[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

export interface QueryProposalRequest {
  /** the proposal id */
  proposalId: Long;
}

export interface QueryProposalResponse {
  proposal?: RoleProposal;
}

export interface QueryVoteRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** voter defines the oter address for the proposals. */
  voter: string;
}

export interface QueryVoteResponse {
  /** vote defined the queried vote. */
  vote?: Vote;
}

export interface QueryVotesRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
}

export interface QueryVotesResponse {
  /** votes defined the queried votes. */
  votes: Vote[];
}

export interface QueryBridgeStatusRequest {}

export interface QueryBridgeStatusResponse {
  status: BridgeStatus;
  metadata?: BridgeStatusMetadata;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryNextSeqSendRequest(): QueryNextSeqSendRequest {
  return {};
}

export const QueryNextSeqSendRequest = {
  encode(
    _: QueryNextSeqSendRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNextSeqSendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSeqSendRequest();
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

  fromJSON(_: any): QueryNextSeqSendRequest {
    return {};
  },

  toJSON(_: QueryNextSeqSendRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNextSeqSendRequest>, I>>(
    _: I
  ): QueryNextSeqSendRequest {
    const message = createBaseQueryNextSeqSendRequest();
    return message;
  },
};

function createBaseQueryNextSeqSendResponse(): QueryNextSeqSendResponse {
  return { seq: Long.UZERO };
}

export const QueryNextSeqSendResponse = {
  encode(
    message: QueryNextSeqSendResponse,
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
  ): QueryNextSeqSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSeqSendResponse();
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

  fromJSON(object: any): QueryNextSeqSendResponse {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: QueryNextSeqSendResponse): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNextSeqSendResponse>, I>>(
    object: I
  ): QueryNextSeqSendResponse {
    const message = createBaseQueryNextSeqSendResponse();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseQuerySeqToBlocknumsRequest(): QuerySeqToBlocknumsRequest {
  return { seqs: [] };
}

export const QuerySeqToBlocknumsRequest = {
  encode(
    message: QuerySeqToBlocknumsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.seqs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySeqToBlocknumsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySeqToBlocknumsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.seqs.push(reader.uint64() as Long);
            }
          } else {
            message.seqs.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySeqToBlocknumsRequest {
    return {
      seqs: Array.isArray(object?.seqs)
        ? object.seqs.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: QuerySeqToBlocknumsRequest): unknown {
    const obj: any = {};
    if (message.seqs) {
      obj.seqs = message.seqs.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.seqs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySeqToBlocknumsRequest>, I>>(
    object: I
  ): QuerySeqToBlocknumsRequest {
    const message = createBaseQuerySeqToBlocknumsRequest();
    message.seqs = object.seqs?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseQuerySeqToBlocknumsResponse(): QuerySeqToBlocknumsResponse {
  return { blocknums: [] };
}

export const QuerySeqToBlocknumsResponse = {
  encode(
    message: QuerySeqToBlocknumsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.blocknums) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySeqToBlocknumsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySeqToBlocknumsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.blocknums.push(reader.uint64() as Long);
            }
          } else {
            message.blocknums.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySeqToBlocknumsResponse {
    return {
      blocknums: Array.isArray(object?.blocknums)
        ? object.blocknums.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: QuerySeqToBlocknumsResponse): unknown {
    const obj: any = {};
    if (message.blocknums) {
      obj.blocknums = message.blocknums.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.blocknums = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySeqToBlocknumsResponse>, I>>(
    object: I
  ): QuerySeqToBlocknumsResponse {
    const message = createBaseQuerySeqToBlocknumsResponse();
    message.blocknums = object.blocknums?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseQueryGreatestSeqByOperatorRequest(): QueryGreatestSeqByOperatorRequest {
  return { operator: "" };
}

export const QueryGreatestSeqByOperatorRequest = {
  encode(
    message: QueryGreatestSeqByOperatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGreatestSeqByOperatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGreatestSeqByOperatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGreatestSeqByOperatorRequest {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: QueryGreatestSeqByOperatorRequest): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGreatestSeqByOperatorRequest>, I>
  >(object: I): QueryGreatestSeqByOperatorRequest {
    const message = createBaseQueryGreatestSeqByOperatorRequest();
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseQueryGreatestSeqByOperatorResponse(): QueryGreatestSeqByOperatorResponse {
  return { seq: Long.UZERO };
}

export const QueryGreatestSeqByOperatorResponse = {
  encode(
    message: QueryGreatestSeqByOperatorResponse,
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
  ): QueryGreatestSeqByOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGreatestSeqByOperatorResponse();
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

  fromJSON(object: any): QueryGreatestSeqByOperatorResponse {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: QueryGreatestSeqByOperatorResponse): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGreatestSeqByOperatorResponse>, I>
  >(object: I): QueryGreatestSeqByOperatorResponse {
    const message = createBaseQueryGreatestSeqByOperatorResponse();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryGreatestConsecutiveConfirmedSeqRequest(): QueryGreatestConsecutiveConfirmedSeqRequest {
  return {};
}

export const QueryGreatestConsecutiveConfirmedSeqRequest = {
  encode(
    _: QueryGreatestConsecutiveConfirmedSeqRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGreatestConsecutiveConfirmedSeqRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGreatestConsecutiveConfirmedSeqRequest();
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

  fromJSON(_: any): QueryGreatestConsecutiveConfirmedSeqRequest {
    return {};
  },

  toJSON(_: QueryGreatestConsecutiveConfirmedSeqRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGreatestConsecutiveConfirmedSeqRequest>, I>
  >(_: I): QueryGreatestConsecutiveConfirmedSeqRequest {
    const message = createBaseQueryGreatestConsecutiveConfirmedSeqRequest();
    return message;
  },
};

function createBaseQueryGreatestConsecutiveConfirmedSeqResponse(): QueryGreatestConsecutiveConfirmedSeqResponse {
  return { seq: Long.UZERO };
}

export const QueryGreatestConsecutiveConfirmedSeqResponse = {
  encode(
    message: QueryGreatestConsecutiveConfirmedSeqResponse,
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
  ): QueryGreatestConsecutiveConfirmedSeqResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGreatestConsecutiveConfirmedSeqResponse();
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

  fromJSON(object: any): QueryGreatestConsecutiveConfirmedSeqResponse {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: QueryGreatestConsecutiveConfirmedSeqResponse): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryGreatestConsecutiveConfirmedSeqResponse>,
      I
    >
  >(object: I): QueryGreatestConsecutiveConfirmedSeqResponse {
    const message = createBaseQueryGreatestConsecutiveConfirmedSeqResponse();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseQuerySubmittedProvisionRequest(): QuerySubmittedProvisionRequest {
  return { operator: "", seq: Long.UZERO };
}

export const QuerySubmittedProvisionRequest = {
  encode(
    message: QuerySubmittedProvisionRequest,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubmittedProvisionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubmittedProvisionRequest();
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

  fromJSON(object: any): QuerySubmittedProvisionRequest {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: QuerySubmittedProvisionRequest): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubmittedProvisionRequest>, I>>(
    object: I
  ): QuerySubmittedProvisionRequest {
    const message = createBaseQuerySubmittedProvisionRequest();
    message.operator = object.operator ?? "";
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseQuerySubmittedProvisionResponse(): QuerySubmittedProvisionResponse {
  return { data: undefined, status: undefined };
}

export const QuerySubmittedProvisionResponse = {
  encode(
    message: QuerySubmittedProvisionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ProvisionData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      ProvisionStatus.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubmittedProvisionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubmittedProvisionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ProvisionData.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = ProvisionStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubmittedProvisionResponse {
    return {
      data: isSet(object.data)
        ? ProvisionData.fromJSON(object.data)
        : undefined,
      status: isSet(object.status)
        ? ProvisionStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: QuerySubmittedProvisionResponse): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<QuerySubmittedProvisionResponse>, I>>(
    object: I
  ): QuerySubmittedProvisionResponse {
    const message = createBaseQuerySubmittedProvisionResponse();
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

function createBaseQueryNeededSubmissionSeqsRequest(): QueryNeededSubmissionSeqsRequest {
  return { operator: "", range: Long.UZERO };
}

export const QueryNeededSubmissionSeqsRequest = {
  encode(
    message: QueryNeededSubmissionSeqsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (!message.range.isZero()) {
      writer.uint32(16).uint64(message.range);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNeededSubmissionSeqsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNeededSubmissionSeqsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.range = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNeededSubmissionSeqsRequest {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      range: isSet(object.range) ? Long.fromValue(object.range) : Long.UZERO,
    };
  },

  toJSON(message: QueryNeededSubmissionSeqsRequest): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.range !== undefined &&
      (obj.range = (message.range || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryNeededSubmissionSeqsRequest>, I>
  >(object: I): QueryNeededSubmissionSeqsRequest {
    const message = createBaseQueryNeededSubmissionSeqsRequest();
    message.operator = object.operator ?? "";
    message.range =
      object.range !== undefined && object.range !== null
        ? Long.fromValue(object.range)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryNeededSubmissionSeqsResponse(): QueryNeededSubmissionSeqsResponse {
  return { seqs: [] };
}

export const QueryNeededSubmissionSeqsResponse = {
  encode(
    message: QueryNeededSubmissionSeqsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.seqs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNeededSubmissionSeqsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNeededSubmissionSeqsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.seqs.push(reader.uint64() as Long);
            }
          } else {
            message.seqs.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNeededSubmissionSeqsResponse {
    return {
      seqs: Array.isArray(object?.seqs)
        ? object.seqs.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: QueryNeededSubmissionSeqsResponse): unknown {
    const obj: any = {};
    if (message.seqs) {
      obj.seqs = message.seqs.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.seqs = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryNeededSubmissionSeqsResponse>, I>
  >(object: I): QueryNeededSubmissionSeqsResponse {
    const message = createBaseQueryNeededSubmissionSeqsResponse();
    message.seqs = object.seqs?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseQueryConfirmedProvisionRequest(): QueryConfirmedProvisionRequest {
  return { seq: Long.UZERO };
}

export const QueryConfirmedProvisionRequest = {
  encode(
    message: QueryConfirmedProvisionRequest,
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
  ): QueryConfirmedProvisionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfirmedProvisionRequest();
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

  fromJSON(object: any): QueryConfirmedProvisionRequest {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: QueryConfirmedProvisionRequest): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConfirmedProvisionRequest>, I>>(
    object: I
  ): QueryConfirmedProvisionRequest {
    const message = createBaseQueryConfirmedProvisionRequest();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryConfirmedProvisionResponse(): QueryConfirmedProvisionResponse {
  return { data: undefined, status: undefined };
}

export const QueryConfirmedProvisionResponse = {
  encode(
    message: QueryConfirmedProvisionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ProvisionData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      ProvisionStatus.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryConfirmedProvisionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfirmedProvisionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ProvisionData.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = ProvisionStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConfirmedProvisionResponse {
    return {
      data: isSet(object.data)
        ? ProvisionData.fromJSON(object.data)
        : undefined,
      status: isSet(object.status)
        ? ProvisionStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: QueryConfirmedProvisionResponse): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<QueryConfirmedProvisionResponse>, I>>(
    object: I
  ): QueryConfirmedProvisionResponse {
    const message = createBaseQueryConfirmedProvisionResponse();
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

function createBaseQueryCommitmentsRequest(): QueryCommitmentsRequest {
  return { seq: Long.UZERO };
}

export const QueryCommitmentsRequest = {
  encode(
    message: QueryCommitmentsRequest,
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
  ): QueryCommitmentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentsRequest();
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

  fromJSON(object: any): QueryCommitmentsRequest {
    return {
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
    };
  },

  toJSON(message: QueryCommitmentsRequest): unknown {
    const obj: any = {};
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommitmentsRequest>, I>>(
    object: I
  ): QueryCommitmentsRequest {
    const message = createBaseQueryCommitmentsRequest();
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryCommitmentsResponse(): QueryCommitmentsResponse {
  return { commitments: [] };
}

export const QueryCommitmentsResponse = {
  encode(
    message: QueryCommitmentsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.commitments) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommitmentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommitmentsResponse {
    return {
      commitments: Array.isArray(object?.commitments)
        ? object.commitments.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryCommitmentsResponse): unknown {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => e);
    } else {
      obj.commitments = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommitmentsResponse>, I>>(
    object: I
  ): QueryCommitmentsResponse {
    const message = createBaseQueryCommitmentsResponse();
    message.commitments = object.commitments?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryMembersRequest(): QueryMembersRequest {
  return { role: "" };
}

export const QueryMembersRequest = {
  encode(
    message: QueryMembersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMembersRequest {
    return {
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: QueryMembersRequest): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMembersRequest>, I>>(
    object: I
  ): QueryMembersRequest {
    const message = createBaseQueryMembersRequest();
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseQueryMembersResponse(): QueryMembersResponse {
  return { members: [] };
}

export const QueryMembersResponse = {
  encode(
    message: QueryMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.members) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMembersResponse {
    return {
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) => e);
    } else {
      obj.members = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMembersResponse>, I>>(
    object: I
  ): QueryMembersResponse {
    const message = createBaseQueryMembersResponse();
    message.members = object.members?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryMemberRequest(): QueryMemberRequest {
  return { address: "" };
}

export const QueryMemberRequest = {
  encode(
    message: QueryMemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberRequest();
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

  fromJSON(object: any): QueryMemberRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryMemberRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMemberRequest>, I>>(
    object: I
  ): QueryMemberRequest {
    const message = createBaseQueryMemberRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryMemberResponse(): QueryMemberResponse {
  return { role: "" };
}

export const QueryMemberResponse = {
  encode(
    message: QueryMemberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMemberResponse {
    return {
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: QueryMemberResponse): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMemberResponse>, I>>(
    object: I
  ): QueryMemberResponse {
    const message = createBaseQueryMemberResponse();
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return { pagination: undefined };
}

export const QueryProposalsRequest = {
  encode(
    message: QueryProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProposalsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalsRequest>, I>>(
    object: I
  ): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return { proposals: [], pagination: undefined };
}

export const QueryProposalsResponse = {
  encode(
    message: QueryProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.proposals) {
      RoleProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(RoleProposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => RoleProposal.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProposalsResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? RoleProposal.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalsResponse>, I>>(
    object: I
  ): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals =
      object.proposals?.map((e) => RoleProposal.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryProposalRequest(): QueryProposalRequest {
  return { proposalId: Long.UZERO };
}

export const QueryProposalRequest = {
  encode(
    message: QueryProposalRequest,
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
  ): QueryProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
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

  fromJSON(object: any): QueryProposalRequest {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromValue(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalRequest>, I>>(
    object: I
  ): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryProposalResponse(): QueryProposalResponse {
  return { proposal: undefined };
}

export const QueryProposalResponse = {
  encode(
    message: QueryProposalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      RoleProposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
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

  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal)
        ? RoleProposal.fromJSON(object.proposal)
        : undefined,
    };
  },

  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? RoleProposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalResponse>, I>>(
    object: I
  ): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? RoleProposal.fromPartial(object.proposal)
        : undefined;
    return message;
  },
};

function createBaseQueryVoteRequest(): QueryVoteRequest {
  return { proposalId: Long.UZERO, voter: "" };
}

export const QueryVoteRequest = {
  encode(
    message: QueryVoteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoteRequest {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromValue(object.proposalId)
        : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
    };
  },

  toJSON(message: QueryVoteRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoteRequest>, I>>(
    object: I
  ): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.voter = object.voter ?? "";
    return message;
  },
};

function createBaseQueryVoteResponse(): QueryVoteResponse {
  return { vote: undefined };
}

export const QueryVoteResponse = {
  encode(
    message: QueryVoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
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

  fromJSON(object: any): QueryVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
    };
  },

  toJSON(message: QueryVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoteResponse>, I>>(
    object: I
  ): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.vote =
      object.vote !== undefined && object.vote !== null
        ? Vote.fromPartial(object.vote)
        : undefined;
    return message;
  },
};

function createBaseQueryVotesRequest(): QueryVotesRequest {
  return { proposalId: Long.UZERO };
}

export const QueryVotesRequest = {
  encode(
    message: QueryVotesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
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

  fromJSON(object: any): QueryVotesRequest {
    return {
      proposalId: isSet(object.proposalId)
        ? Long.fromValue(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryVotesRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotesRequest>, I>>(
    object: I
  ): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryVotesResponse(): QueryVotesResponse {
  return { votes: [] };
}

export const QueryVotesResponse = {
  encode(
    message: QueryVotesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryVotesResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotesResponse>, I>>(
    object: I
  ): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBridgeStatusRequest(): QueryBridgeStatusRequest {
  return {};
}

export const QueryBridgeStatusRequest = {
  encode(
    _: QueryBridgeStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBridgeStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBridgeStatusRequest();
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

  fromJSON(_: any): QueryBridgeStatusRequest {
    return {};
  },

  toJSON(_: QueryBridgeStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBridgeStatusRequest>, I>>(
    _: I
  ): QueryBridgeStatusRequest {
    const message = createBaseQueryBridgeStatusRequest();
    return message;
  },
};

function createBaseQueryBridgeStatusResponse(): QueryBridgeStatusResponse {
  return { status: 0, metadata: undefined };
}

export const QueryBridgeStatusResponse = {
  encode(
    message: QueryBridgeStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.metadata !== undefined) {
      BridgeStatusMetadata.encode(
        message.metadata,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBridgeStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBridgeStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.metadata = BridgeStatusMetadata.decode(
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

  fromJSON(object: any): QueryBridgeStatusResponse {
    return {
      status: isSet(object.status) ? bridgeStatusFromJSON(object.status) : 0,
      metadata: isSet(object.metadata)
        ? BridgeStatusMetadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: QueryBridgeStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = bridgeStatusToJSON(message.status));
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? BridgeStatusMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBridgeStatusResponse>, I>>(
    object: I
  ): QueryBridgeStatusResponse {
    const message = createBaseQueryBridgeStatusResponse();
    message.status = object.status ?? 0;
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? BridgeStatusMetadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

export interface Query {
  /** Params queries the parameters of x/fbridge module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** NextSeqSend queries the sequence of next bridge request */
  NextSeqSend(
    request: QueryNextSeqSendRequest
  ): Promise<QueryNextSeqSendResponse>;
  /** BlocknumToSeqs queries a list of block numbers for which each sequence has been confirmed. */
  SeqToBlocknums(
    request: QuerySeqToBlocknumsRequest
  ): Promise<QuerySeqToBlocknumsResponse>;
  /** GreatestSeqByOperator queries a greatest sequence number confirmed by a particular operator */
  GreatestSeqByOperator(
    request: QueryGreatestSeqByOperatorRequest
  ): Promise<QueryGreatestSeqByOperatorResponse>;
  /** GreatestConsecutiveConfirmedSeq queries a greatest consecutive sequence number confirmed by n-of-m operators */
  GreatestConsecutiveConfirmedSeq(
    request: QueryGreatestConsecutiveConfirmedSeqRequest
  ): Promise<QueryGreatestConsecutiveConfirmedSeqResponse>;
  /** SubmittedProvision queries a provision submitted by a particular operator */
  SubmittedProvision(
    request: QuerySubmittedProvisionRequest
  ): Promise<QuerySubmittedProvisionResponse>;
  /** ConfirmedProvision queries a particular sequence of confirmed provisions */
  ConfirmedProvision(
    request: QueryConfirmedProvisionRequest
  ): Promise<QueryConfirmedProvisionResponse>;
  /**
   * NeededSubmissionSeqs queries a list of sequence numbers that need to be submitted by a particular operator
   * The search scope is [greatest_consecutive_seq_by_operator, min(greatest_consecutive_seq_by_operator + range,
   * greatest_seq_by_operator)] greatest_consecutive_seq_by_operator can be replaced with greatest_consecutive_seq if
   * the operator is newly added
   */
  NeededSubmissionSeqs(
    request: QueryNeededSubmissionSeqsRequest
  ): Promise<QueryNeededSubmissionSeqsResponse>;
  /** Commitments queries commitments of a specific sequence number */
  Commitments(
    request: QueryCommitmentsRequest
  ): Promise<QueryCommitmentsResponse>;
  /** Members queries the members of spcific group registered on the bridge */
  Members(request: QueryMembersRequest): Promise<QueryMembersResponse>;
  /** Member queries the role of a specific member */
  Member(request: QueryMemberRequest): Promise<QueryMemberResponse>;
  /** Proposals queries a list of SuggestRole Proposals */
  Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
  /** Proposal queries a SuggestRole Proposal */
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** Vote queries voted information based on proposalID, voterAddr. */
  Vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
  /** Votes queries votes of a given proposal. */
  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
  /** BridgeStatus queries the status of the bridge */
  BridgeStatus(
    request: QueryBridgeStatusRequest
  ): Promise<QueryBridgeStatusResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.NextSeqSend = this.NextSeqSend.bind(this);
    this.SeqToBlocknums = this.SeqToBlocknums.bind(this);
    this.GreatestSeqByOperator = this.GreatestSeqByOperator.bind(this);
    this.GreatestConsecutiveConfirmedSeq =
      this.GreatestConsecutiveConfirmedSeq.bind(this);
    this.SubmittedProvision = this.SubmittedProvision.bind(this);
    this.ConfirmedProvision = this.ConfirmedProvision.bind(this);
    this.NeededSubmissionSeqs = this.NeededSubmissionSeqs.bind(this);
    this.Commitments = this.Commitments.bind(this);
    this.Members = this.Members.bind(this);
    this.Member = this.Member.bind(this);
    this.Proposals = this.Proposals.bind(this);
    this.Proposal = this.Proposal.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Votes = this.Votes.bind(this);
    this.BridgeStatus = this.BridgeStatus.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  NextSeqSend(
    request: QueryNextSeqSendRequest
  ): Promise<QueryNextSeqSendResponse> {
    const data = QueryNextSeqSendRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Query",
      "NextSeqSend",
      data
    );
    return promise.then((data) =>
      QueryNextSeqSendResponse.decode(new _m0.Reader(data))
    );
  }

  SeqToBlocknums(
    request: QuerySeqToBlocknumsRequest
  ): Promise<QuerySeqToBlocknumsResponse> {
    const data = QuerySeqToBlocknumsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Query",
      "SeqToBlocknums",
      data
    );
    return promise.then((data) =>
      QuerySeqToBlocknumsResponse.decode(new _m0.Reader(data))
    );
  }

  GreatestSeqByOperator(
    request: QueryGreatestSeqByOperatorRequest
  ): Promise<QueryGreatestSeqByOperatorResponse> {
    const data = QueryGreatestSeqByOperatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Query",
      "GreatestSeqByOperator",
      data
    );
    return promise.then((data) =>
      QueryGreatestSeqByOperatorResponse.decode(new _m0.Reader(data))
    );
  }

  GreatestConsecutiveConfirmedSeq(
    request: QueryGreatestConsecutiveConfirmedSeqRequest
  ): Promise<QueryGreatestConsecutiveConfirmedSeqResponse> {
    const data =
      QueryGreatestConsecutiveConfirmedSeqRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Query",
      "GreatestConsecutiveConfirmedSeq",
      data
    );
    return promise.then((data) =>
      QueryGreatestConsecutiveConfirmedSeqResponse.decode(new _m0.Reader(data))
    );
  }

  SubmittedProvision(
    request: QuerySubmittedProvisionRequest
  ): Promise<QuerySubmittedProvisionResponse> {
    const data = QuerySubmittedProvisionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Query",
      "SubmittedProvision",
      data
    );
    return promise.then((data) =>
      QuerySubmittedProvisionResponse.decode(new _m0.Reader(data))
    );
  }

  ConfirmedProvision(
    request: QueryConfirmedProvisionRequest
  ): Promise<QueryConfirmedProvisionResponse> {
    const data = QueryConfirmedProvisionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Query",
      "ConfirmedProvision",
      data
    );
    return promise.then((data) =>
      QueryConfirmedProvisionResponse.decode(new _m0.Reader(data))
    );
  }

  NeededSubmissionSeqs(
    request: QueryNeededSubmissionSeqsRequest
  ): Promise<QueryNeededSubmissionSeqsResponse> {
    const data = QueryNeededSubmissionSeqsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Query",
      "NeededSubmissionSeqs",
      data
    );
    return promise.then((data) =>
      QueryNeededSubmissionSeqsResponse.decode(new _m0.Reader(data))
    );
  }

  Commitments(
    request: QueryCommitmentsRequest
  ): Promise<QueryCommitmentsResponse> {
    const data = QueryCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Query",
      "Commitments",
      data
    );
    return promise.then((data) =>
      QueryCommitmentsResponse.decode(new _m0.Reader(data))
    );
  }

  Members(request: QueryMembersRequest): Promise<QueryMembersResponse> {
    const data = QueryMembersRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Query", "Members", data);
    return promise.then((data) =>
      QueryMembersResponse.decode(new _m0.Reader(data))
    );
  }

  Member(request: QueryMemberRequest): Promise<QueryMemberResponse> {
    const data = QueryMemberRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Query", "Member", data);
    return promise.then((data) =>
      QueryMemberResponse.decode(new _m0.Reader(data))
    );
  }

  Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Query", "Proposals", data);
    return promise.then((data) =>
      QueryProposalsResponse.decode(new _m0.Reader(data))
    );
  }

  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Query", "Proposal", data);
    return promise.then((data) =>
      QueryProposalResponse.decode(new _m0.Reader(data))
    );
  }

  Vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Query", "Vote", data);
    return promise.then((data) =>
      QueryVoteResponse.decode(new _m0.Reader(data))
    );
  }

  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("lbm.fbridge.v1.Query", "Votes", data);
    return promise.then((data) =>
      QueryVotesResponse.decode(new _m0.Reader(data))
    );
  }

  BridgeStatus(
    request: QueryBridgeStatusRequest
  ): Promise<QueryBridgeStatusResponse> {
    const data = QueryBridgeStatusRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.fbridge.v1.Query",
      "BridgeStatus",
      data
    );
    return promise.then((data) =>
      QueryBridgeStatusResponse.decode(new _m0.Reader(data))
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
