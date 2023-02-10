/* eslint-disable */
import { Header } from "../../tendermint/types/types";
import {
  LastCommitInfo,
  RequestEcho,
  RequestFlush,
  RequestInfo,
  RequestSetOption,
  RequestInitChain,
  RequestQuery,
  RequestCheckTx,
  RequestDeliverTx,
  RequestEndBlock,
  RequestCommit,
  RequestListSnapshots,
  RequestOfferSnapshot,
  RequestLoadSnapshotChunk,
  RequestApplySnapshotChunk,
  Evidence,
  ResponseException,
  ResponseEcho,
  ResponseFlush,
  ResponseInfo,
  ResponseSetOption,
  ResponseInitChain,
  ResponseQuery,
  ResponseBeginBlock,
  ResponseDeliverTx,
  ResponseEndBlock,
  ResponseCommit,
  ResponseListSnapshots,
  ResponseOfferSnapshot,
  ResponseLoadSnapshotChunk,
  ResponseApplySnapshotChunk,
  Event,
} from "../../tendermint/abci/types";
import { Entropy } from "../types/types";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "ostracon.abci";

export interface Request {
  echo?: RequestEcho | undefined;
  flush?: RequestFlush | undefined;
  info?: RequestInfo | undefined;
  setOption?: RequestSetOption | undefined;
  initChain?: RequestInitChain | undefined;
  query?: RequestQuery | undefined;
  beginBlock?: RequestBeginBlock | undefined;
  checkTx?: RequestCheckTx | undefined;
  deliverTx?: RequestDeliverTx | undefined;
  endBlock?: RequestEndBlock | undefined;
  commit?: RequestCommit | undefined;
  listSnapshots?: RequestListSnapshots | undefined;
  offerSnapshot?: RequestOfferSnapshot | undefined;
  loadSnapshotChunk?: RequestLoadSnapshotChunk | undefined;
  applySnapshotChunk?: RequestApplySnapshotChunk | undefined;
  /** 16~99 are reserved for merging original tendermint */
  beginRecheckTx?: RequestBeginRecheckTx | undefined;
  endRecheckTx?: RequestEndRecheckTx | undefined;
}

export interface RequestBeginBlock {
  hash: Uint8Array;
  header?: Header;
  lastCommitInfo?: LastCommitInfo;
  byzantineValidators: Evidence[];
  /** ** Ostracon Extended Fields *** */
  entropy?: Entropy;
}

export interface RequestBeginRecheckTx {
  header?: Header;
}

export interface RequestEndRecheckTx {
  height: Long;
}

export interface Response {
  exception?: ResponseException | undefined;
  echo?: ResponseEcho | undefined;
  flush?: ResponseFlush | undefined;
  info?: ResponseInfo | undefined;
  setOption?: ResponseSetOption | undefined;
  initChain?: ResponseInitChain | undefined;
  query?: ResponseQuery | undefined;
  beginBlock?: ResponseBeginBlock | undefined;
  checkTx?: ResponseCheckTx | undefined;
  deliverTx?: ResponseDeliverTx | undefined;
  endBlock?: ResponseEndBlock | undefined;
  commit?: ResponseCommit | undefined;
  listSnapshots?: ResponseListSnapshots | undefined;
  offerSnapshot?: ResponseOfferSnapshot | undefined;
  loadSnapshotChunk?: ResponseLoadSnapshotChunk | undefined;
  applySnapshotChunk?: ResponseApplySnapshotChunk | undefined;
  /** 17~99 are reserved for merging original tendermint */
  beginRecheckTx?: ResponseBeginRecheckTx | undefined;
  endRecheckTx?: ResponseEndRecheckTx | undefined;
}

export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
  /** MEMO: not used, just reservation to implement https://github.com/tendermint/tendermint/pull/6740 first */
  sender: string;
  /** MEMO: not used, just reservation to implement https://github.com/tendermint/tendermint/pull/6740 first */
  priority: Long;
  /**
   * mempool_error is set by Ostracon.
   * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
   */
  mempoolError: string;
}

export interface ResponseBeginRecheckTx {
  code: number;
}

export interface ResponseEndRecheckTx {
  code: number;
}

function createBaseRequest(): Request {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    beginRecheckTx: undefined,
    endRecheckTx: undefined,
  };
}

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      RequestSetOption.encode(
        message.setOption,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(
        message.initChain,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      RequestBeginBlock.encode(
        message.beginBlock,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      RequestDeliverTx.encode(
        message.deliverTx,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.endBlock !== undefined) {
      RequestEndBlock.encode(
        message.endBlock,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(
        message.listSnapshots,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(
        message.offerSnapshot,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(
        message.loadSnapshotChunk,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(
        message.applySnapshotChunk,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.beginRecheckTx !== undefined) {
      RequestBeginRecheckTx.encode(
        message.beginRecheckTx,
        writer.uint32(8002).fork()
      ).ldelim();
    }
    if (message.endRecheckTx !== undefined) {
      RequestEndRecheckTx.encode(
        message.endRecheckTx,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.setOption = RequestSetOption.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.beginBlock = RequestBeginBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1000:
          message.beginRecheckTx = RequestBeginRecheckTx.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1001:
          message.endRecheckTx = RequestEndRecheckTx.decode(
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

  fromJSON(object: any): Request {
    return {
      echo: isSet(object.echo) ? RequestEcho.fromJSON(object.echo) : undefined,
      flush: isSet(object.flush)
        ? RequestFlush.fromJSON(object.flush)
        : undefined,
      info: isSet(object.info) ? RequestInfo.fromJSON(object.info) : undefined,
      setOption: isSet(object.setOption)
        ? RequestSetOption.fromJSON(object.setOption)
        : undefined,
      initChain: isSet(object.initChain)
        ? RequestInitChain.fromJSON(object.initChain)
        : undefined,
      query: isSet(object.query)
        ? RequestQuery.fromJSON(object.query)
        : undefined,
      beginBlock: isSet(object.beginBlock)
        ? RequestBeginBlock.fromJSON(object.beginBlock)
        : undefined,
      checkTx: isSet(object.checkTx)
        ? RequestCheckTx.fromJSON(object.checkTx)
        : undefined,
      deliverTx: isSet(object.deliverTx)
        ? RequestDeliverTx.fromJSON(object.deliverTx)
        : undefined,
      endBlock: isSet(object.endBlock)
        ? RequestEndBlock.fromJSON(object.endBlock)
        : undefined,
      commit: isSet(object.commit)
        ? RequestCommit.fromJSON(object.commit)
        : undefined,
      listSnapshots: isSet(object.listSnapshots)
        ? RequestListSnapshots.fromJSON(object.listSnapshots)
        : undefined,
      offerSnapshot: isSet(object.offerSnapshot)
        ? RequestOfferSnapshot.fromJSON(object.offerSnapshot)
        : undefined,
      loadSnapshotChunk: isSet(object.loadSnapshotChunk)
        ? RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk)
        : undefined,
      applySnapshotChunk: isSet(object.applySnapshotChunk)
        ? RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk)
        : undefined,
      beginRecheckTx: isSet(object.beginRecheckTx)
        ? RequestBeginRecheckTx.fromJSON(object.beginRecheckTx)
        : undefined,
      endRecheckTx: isSet(object.endRecheckTx)
        ? RequestEndRecheckTx.fromJSON(object.endRecheckTx)
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.echo !== undefined &&
      (obj.echo = message.echo ? RequestEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined &&
      (obj.flush = message.flush
        ? RequestFlush.toJSON(message.flush)
        : undefined);
    message.info !== undefined &&
      (obj.info = message.info ? RequestInfo.toJSON(message.info) : undefined);
    message.setOption !== undefined &&
      (obj.setOption = message.setOption
        ? RequestSetOption.toJSON(message.setOption)
        : undefined);
    message.initChain !== undefined &&
      (obj.initChain = message.initChain
        ? RequestInitChain.toJSON(message.initChain)
        : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? RequestQuery.toJSON(message.query)
        : undefined);
    message.beginBlock !== undefined &&
      (obj.beginBlock = message.beginBlock
        ? RequestBeginBlock.toJSON(message.beginBlock)
        : undefined);
    message.checkTx !== undefined &&
      (obj.checkTx = message.checkTx
        ? RequestCheckTx.toJSON(message.checkTx)
        : undefined);
    message.deliverTx !== undefined &&
      (obj.deliverTx = message.deliverTx
        ? RequestDeliverTx.toJSON(message.deliverTx)
        : undefined);
    message.endBlock !== undefined &&
      (obj.endBlock = message.endBlock
        ? RequestEndBlock.toJSON(message.endBlock)
        : undefined);
    message.commit !== undefined &&
      (obj.commit = message.commit
        ? RequestCommit.toJSON(message.commit)
        : undefined);
    message.listSnapshots !== undefined &&
      (obj.listSnapshots = message.listSnapshots
        ? RequestListSnapshots.toJSON(message.listSnapshots)
        : undefined);
    message.offerSnapshot !== undefined &&
      (obj.offerSnapshot = message.offerSnapshot
        ? RequestOfferSnapshot.toJSON(message.offerSnapshot)
        : undefined);
    message.loadSnapshotChunk !== undefined &&
      (obj.loadSnapshotChunk = message.loadSnapshotChunk
        ? RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
        : undefined);
    message.applySnapshotChunk !== undefined &&
      (obj.applySnapshotChunk = message.applySnapshotChunk
        ? RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk)
        : undefined);
    message.beginRecheckTx !== undefined &&
      (obj.beginRecheckTx = message.beginRecheckTx
        ? RequestBeginRecheckTx.toJSON(message.beginRecheckTx)
        : undefined);
    message.endRecheckTx !== undefined &&
      (obj.endRecheckTx = message.endRecheckTx
        ? RequestEndRecheckTx.toJSON(message.endRecheckTx)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.echo =
      object.echo !== undefined && object.echo !== null
        ? RequestEcho.fromPartial(object.echo)
        : undefined;
    message.flush =
      object.flush !== undefined && object.flush !== null
        ? RequestFlush.fromPartial(object.flush)
        : undefined;
    message.info =
      object.info !== undefined && object.info !== null
        ? RequestInfo.fromPartial(object.info)
        : undefined;
    message.setOption =
      object.setOption !== undefined && object.setOption !== null
        ? RequestSetOption.fromPartial(object.setOption)
        : undefined;
    message.initChain =
      object.initChain !== undefined && object.initChain !== null
        ? RequestInitChain.fromPartial(object.initChain)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? RequestQuery.fromPartial(object.query)
        : undefined;
    message.beginBlock =
      object.beginBlock !== undefined && object.beginBlock !== null
        ? RequestBeginBlock.fromPartial(object.beginBlock)
        : undefined;
    message.checkTx =
      object.checkTx !== undefined && object.checkTx !== null
        ? RequestCheckTx.fromPartial(object.checkTx)
        : undefined;
    message.deliverTx =
      object.deliverTx !== undefined && object.deliverTx !== null
        ? RequestDeliverTx.fromPartial(object.deliverTx)
        : undefined;
    message.endBlock =
      object.endBlock !== undefined && object.endBlock !== null
        ? RequestEndBlock.fromPartial(object.endBlock)
        : undefined;
    message.commit =
      object.commit !== undefined && object.commit !== null
        ? RequestCommit.fromPartial(object.commit)
        : undefined;
    message.listSnapshots =
      object.listSnapshots !== undefined && object.listSnapshots !== null
        ? RequestListSnapshots.fromPartial(object.listSnapshots)
        : undefined;
    message.offerSnapshot =
      object.offerSnapshot !== undefined && object.offerSnapshot !== null
        ? RequestOfferSnapshot.fromPartial(object.offerSnapshot)
        : undefined;
    message.loadSnapshotChunk =
      object.loadSnapshotChunk !== undefined &&
      object.loadSnapshotChunk !== null
        ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
        : undefined;
    message.applySnapshotChunk =
      object.applySnapshotChunk !== undefined &&
      object.applySnapshotChunk !== null
        ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
        : undefined;
    message.beginRecheckTx =
      object.beginRecheckTx !== undefined && object.beginRecheckTx !== null
        ? RequestBeginRecheckTx.fromPartial(object.beginRecheckTx)
        : undefined;
    message.endRecheckTx =
      object.endRecheckTx !== undefined && object.endRecheckTx !== null
        ? RequestEndRecheckTx.fromPartial(object.endRecheckTx)
        : undefined;
    return message;
  },
};

function createBaseRequestBeginBlock(): RequestBeginBlock {
  return {
    hash: new Uint8Array(),
    header: undefined,
    lastCommitInfo: undefined,
    byzantineValidators: [],
    entropy: undefined,
  };
}

export const RequestBeginBlock = {
  encode(
    message: RequestBeginBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== undefined) {
      LastCommitInfo.encode(
        message.lastCommitInfo,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.byzantineValidators) {
      Evidence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.entropy !== undefined) {
      Entropy.encode(message.entropy, writer.uint32(8002).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastCommitInfo = LastCommitInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.byzantineValidators.push(
            Evidence.decode(reader, reader.uint32())
          );
          break;
        case 1000:
          message.entropy = Entropy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestBeginBlock {
    return {
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      lastCommitInfo: isSet(object.lastCommitInfo)
        ? LastCommitInfo.fromJSON(object.lastCommitInfo)
        : undefined,
      byzantineValidators: Array.isArray(object?.byzantineValidators)
        ? object.byzantineValidators.map((e: any) => Evidence.fromJSON(e))
        : [],
      entropy: isSet(object.entropy)
        ? Entropy.fromJSON(object.entropy)
        : undefined,
    };
  },

  toJSON(message: RequestBeginBlock): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.header !== undefined &&
      (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.lastCommitInfo !== undefined &&
      (obj.lastCommitInfo = message.lastCommitInfo
        ? LastCommitInfo.toJSON(message.lastCommitInfo)
        : undefined);
    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map((e) =>
        e ? Evidence.toJSON(e) : undefined
      );
    } else {
      obj.byzantineValidators = [];
    }
    message.entropy !== undefined &&
      (obj.entropy = message.entropy
        ? Entropy.toJSON(message.entropy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestBeginBlock>, I>>(
    object: I
  ): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    message.hash = object.hash ?? new Uint8Array();
    message.header =
      object.header !== undefined && object.header !== null
        ? Header.fromPartial(object.header)
        : undefined;
    message.lastCommitInfo =
      object.lastCommitInfo !== undefined && object.lastCommitInfo !== null
        ? LastCommitInfo.fromPartial(object.lastCommitInfo)
        : undefined;
    message.byzantineValidators =
      object.byzantineValidators?.map((e) => Evidence.fromPartial(e)) || [];
    message.entropy =
      object.entropy !== undefined && object.entropy !== null
        ? Entropy.fromPartial(object.entropy)
        : undefined;
    return message;
  },
};

function createBaseRequestBeginRecheckTx(): RequestBeginRecheckTx {
  return { header: undefined };
}

export const RequestBeginRecheckTx = {
  encode(
    message: RequestBeginRecheckTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestBeginRecheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginRecheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestBeginRecheckTx {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
    };
  },

  toJSON(message: RequestBeginRecheckTx): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestBeginRecheckTx>, I>>(
    object: I
  ): RequestBeginRecheckTx {
    const message = createBaseRequestBeginRecheckTx();
    message.header =
      object.header !== undefined && object.header !== null
        ? Header.fromPartial(object.header)
        : undefined;
    return message;
  },
};

function createBaseRequestEndRecheckTx(): RequestEndRecheckTx {
  return { height: Long.ZERO };
}

export const RequestEndRecheckTx = {
  encode(
    message: RequestEndRecheckTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndRecheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEndRecheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestEndRecheckTx {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
    };
  },

  toJSON(message: RequestEndRecheckTx): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestEndRecheckTx>, I>>(
    object: I
  ): RequestEndRecheckTx {
    const message = createBaseRequestEndRecheckTx();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    beginRecheckTx: undefined,
    endRecheckTx: undefined,
  };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exception !== undefined) {
      ResponseException.encode(
        message.exception,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      ResponseSetOption.encode(
        message.setOption,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(
        message.initChain,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(
        message.beginBlock,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(
        message.checkTx,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(
        message.deliverTx,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(
        message.endBlock,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(
        message.listSnapshots,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(
        message.offerSnapshot,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(
        message.loadSnapshotChunk,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(
        message.applySnapshotChunk,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.beginRecheckTx !== undefined) {
      ResponseBeginRecheckTx.encode(
        message.beginRecheckTx,
        writer.uint32(8002).fork()
      ).ldelim();
    }
    if (message.endRecheckTx !== undefined) {
      ResponseEndRecheckTx.encode(
        message.endRecheckTx,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.setOption = ResponseSetOption.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.beginBlock = ResponseBeginBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.deliverTx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1000:
          message.beginRecheckTx = ResponseBeginRecheckTx.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1001:
          message.endRecheckTx = ResponseEndRecheckTx.decode(
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

  fromJSON(object: any): Response {
    return {
      exception: isSet(object.exception)
        ? ResponseException.fromJSON(object.exception)
        : undefined,
      echo: isSet(object.echo) ? ResponseEcho.fromJSON(object.echo) : undefined,
      flush: isSet(object.flush)
        ? ResponseFlush.fromJSON(object.flush)
        : undefined,
      info: isSet(object.info) ? ResponseInfo.fromJSON(object.info) : undefined,
      setOption: isSet(object.setOption)
        ? ResponseSetOption.fromJSON(object.setOption)
        : undefined,
      initChain: isSet(object.initChain)
        ? ResponseInitChain.fromJSON(object.initChain)
        : undefined,
      query: isSet(object.query)
        ? ResponseQuery.fromJSON(object.query)
        : undefined,
      beginBlock: isSet(object.beginBlock)
        ? ResponseBeginBlock.fromJSON(object.beginBlock)
        : undefined,
      checkTx: isSet(object.checkTx)
        ? ResponseCheckTx.fromJSON(object.checkTx)
        : undefined,
      deliverTx: isSet(object.deliverTx)
        ? ResponseDeliverTx.fromJSON(object.deliverTx)
        : undefined,
      endBlock: isSet(object.endBlock)
        ? ResponseEndBlock.fromJSON(object.endBlock)
        : undefined,
      commit: isSet(object.commit)
        ? ResponseCommit.fromJSON(object.commit)
        : undefined,
      listSnapshots: isSet(object.listSnapshots)
        ? ResponseListSnapshots.fromJSON(object.listSnapshots)
        : undefined,
      offerSnapshot: isSet(object.offerSnapshot)
        ? ResponseOfferSnapshot.fromJSON(object.offerSnapshot)
        : undefined,
      loadSnapshotChunk: isSet(object.loadSnapshotChunk)
        ? ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk)
        : undefined,
      applySnapshotChunk: isSet(object.applySnapshotChunk)
        ? ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk)
        : undefined,
      beginRecheckTx: isSet(object.beginRecheckTx)
        ? ResponseBeginRecheckTx.fromJSON(object.beginRecheckTx)
        : undefined,
      endRecheckTx: isSet(object.endRecheckTx)
        ? ResponseEndRecheckTx.fromJSON(object.endRecheckTx)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.exception !== undefined &&
      (obj.exception = message.exception
        ? ResponseException.toJSON(message.exception)
        : undefined);
    message.echo !== undefined &&
      (obj.echo = message.echo ? ResponseEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined &&
      (obj.flush = message.flush
        ? ResponseFlush.toJSON(message.flush)
        : undefined);
    message.info !== undefined &&
      (obj.info = message.info ? ResponseInfo.toJSON(message.info) : undefined);
    message.setOption !== undefined &&
      (obj.setOption = message.setOption
        ? ResponseSetOption.toJSON(message.setOption)
        : undefined);
    message.initChain !== undefined &&
      (obj.initChain = message.initChain
        ? ResponseInitChain.toJSON(message.initChain)
        : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? ResponseQuery.toJSON(message.query)
        : undefined);
    message.beginBlock !== undefined &&
      (obj.beginBlock = message.beginBlock
        ? ResponseBeginBlock.toJSON(message.beginBlock)
        : undefined);
    message.checkTx !== undefined &&
      (obj.checkTx = message.checkTx
        ? ResponseCheckTx.toJSON(message.checkTx)
        : undefined);
    message.deliverTx !== undefined &&
      (obj.deliverTx = message.deliverTx
        ? ResponseDeliverTx.toJSON(message.deliverTx)
        : undefined);
    message.endBlock !== undefined &&
      (obj.endBlock = message.endBlock
        ? ResponseEndBlock.toJSON(message.endBlock)
        : undefined);
    message.commit !== undefined &&
      (obj.commit = message.commit
        ? ResponseCommit.toJSON(message.commit)
        : undefined);
    message.listSnapshots !== undefined &&
      (obj.listSnapshots = message.listSnapshots
        ? ResponseListSnapshots.toJSON(message.listSnapshots)
        : undefined);
    message.offerSnapshot !== undefined &&
      (obj.offerSnapshot = message.offerSnapshot
        ? ResponseOfferSnapshot.toJSON(message.offerSnapshot)
        : undefined);
    message.loadSnapshotChunk !== undefined &&
      (obj.loadSnapshotChunk = message.loadSnapshotChunk
        ? ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
        : undefined);
    message.applySnapshotChunk !== undefined &&
      (obj.applySnapshotChunk = message.applySnapshotChunk
        ? ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk)
        : undefined);
    message.beginRecheckTx !== undefined &&
      (obj.beginRecheckTx = message.beginRecheckTx
        ? ResponseBeginRecheckTx.toJSON(message.beginRecheckTx)
        : undefined);
    message.endRecheckTx !== undefined &&
      (obj.endRecheckTx = message.endRecheckTx
        ? ResponseEndRecheckTx.toJSON(message.endRecheckTx)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.exception =
      object.exception !== undefined && object.exception !== null
        ? ResponseException.fromPartial(object.exception)
        : undefined;
    message.echo =
      object.echo !== undefined && object.echo !== null
        ? ResponseEcho.fromPartial(object.echo)
        : undefined;
    message.flush =
      object.flush !== undefined && object.flush !== null
        ? ResponseFlush.fromPartial(object.flush)
        : undefined;
    message.info =
      object.info !== undefined && object.info !== null
        ? ResponseInfo.fromPartial(object.info)
        : undefined;
    message.setOption =
      object.setOption !== undefined && object.setOption !== null
        ? ResponseSetOption.fromPartial(object.setOption)
        : undefined;
    message.initChain =
      object.initChain !== undefined && object.initChain !== null
        ? ResponseInitChain.fromPartial(object.initChain)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? ResponseQuery.fromPartial(object.query)
        : undefined;
    message.beginBlock =
      object.beginBlock !== undefined && object.beginBlock !== null
        ? ResponseBeginBlock.fromPartial(object.beginBlock)
        : undefined;
    message.checkTx =
      object.checkTx !== undefined && object.checkTx !== null
        ? ResponseCheckTx.fromPartial(object.checkTx)
        : undefined;
    message.deliverTx =
      object.deliverTx !== undefined && object.deliverTx !== null
        ? ResponseDeliverTx.fromPartial(object.deliverTx)
        : undefined;
    message.endBlock =
      object.endBlock !== undefined && object.endBlock !== null
        ? ResponseEndBlock.fromPartial(object.endBlock)
        : undefined;
    message.commit =
      object.commit !== undefined && object.commit !== null
        ? ResponseCommit.fromPartial(object.commit)
        : undefined;
    message.listSnapshots =
      object.listSnapshots !== undefined && object.listSnapshots !== null
        ? ResponseListSnapshots.fromPartial(object.listSnapshots)
        : undefined;
    message.offerSnapshot =
      object.offerSnapshot !== undefined && object.offerSnapshot !== null
        ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot)
        : undefined;
    message.loadSnapshotChunk =
      object.loadSnapshotChunk !== undefined &&
      object.loadSnapshotChunk !== null
        ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
        : undefined;
    message.applySnapshotChunk =
      object.applySnapshotChunk !== undefined &&
      object.applySnapshotChunk !== null
        ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
        : undefined;
    message.beginRecheckTx =
      object.beginRecheckTx !== undefined && object.beginRecheckTx !== null
        ? ResponseBeginRecheckTx.fromPartial(object.beginRecheckTx)
        : undefined;
    message.endRecheckTx =
      object.endRecheckTx !== undefined && object.endRecheckTx !== null
        ? ResponseEndRecheckTx.fromPartial(object.endRecheckTx)
        : undefined;
    return message;
  },
};

function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    events: [],
    codespace: "",
    sender: "",
    priority: Long.ZERO,
    mempoolError: "",
  };
}

export const ResponseCheckTx = {
  encode(
    message: ResponseCheckTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (!message.priority.isZero()) {
      writer.uint32(80).int64(message.priority);
    }
    if (message.mempoolError !== "") {
      writer.uint32(90).string(message.mempoolError);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64() as Long;
          break;
        case 6:
          message.gasUsed = reader.int64() as Long;
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        case 9:
          message.sender = reader.string();
          break;
        case 10:
          message.priority = reader.int64() as Long;
          break;
        case 11:
          message.mempoolError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseCheckTx {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gas_wanted)
        ? Long.fromValue(object.gas_wanted)
        : Long.ZERO,
      gasUsed: isSet(object.gas_used)
        ? Long.fromValue(object.gas_used)
        : Long.ZERO,
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Event.fromJSON(e))
        : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      priority: isSet(object.priority)
        ? Long.fromValue(object.priority)
        : Long.ZERO,
      mempoolError: isSet(object.mempoolError)
        ? String(object.mempoolError)
        : "",
    };
  },

  toJSON(message: ResponseCheckTx): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined &&
      (obj.gas_wanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined &&
      (obj.gas_used = (message.gasUsed || Long.ZERO).toString());
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.codespace !== undefined && (obj.codespace = message.codespace);
    message.sender !== undefined && (obj.sender = message.sender);
    message.priority !== undefined &&
      (obj.priority = (message.priority || Long.ZERO).toString());
    message.mempoolError !== undefined &&
      (obj.mempoolError = message.mempoolError);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseCheckTx>, I>>(
    object: I
  ): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : Long.ZERO;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.ZERO;
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    message.sender = object.sender ?? "";
    message.priority =
      object.priority !== undefined && object.priority !== null
        ? Long.fromValue(object.priority)
        : Long.ZERO;
    message.mempoolError = object.mempoolError ?? "";
    return message;
  },
};

function createBaseResponseBeginRecheckTx(): ResponseBeginRecheckTx {
  return { code: 0 };
}

export const ResponseBeginRecheckTx = {
  encode(
    message: ResponseBeginRecheckTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponseBeginRecheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginRecheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseBeginRecheckTx {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
    };
  },

  toJSON(message: ResponseBeginRecheckTx): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseBeginRecheckTx>, I>>(
    object: I
  ): ResponseBeginRecheckTx {
    const message = createBaseResponseBeginRecheckTx();
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseResponseEndRecheckTx(): ResponseEndRecheckTx {
  return { code: 0 };
}

export const ResponseEndRecheckTx = {
  encode(
    message: ResponseEndRecheckTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponseEndRecheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEndRecheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseEndRecheckTx {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
    };
  },

  toJSON(message: ResponseEndRecheckTx): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseEndRecheckTx>, I>>(
    object: I
  ): ResponseEndRecheckTx {
    const message = createBaseResponseEndRecheckTx();
    message.code = object.code ?? 0;
    return message;
  },
};

export interface ABCIApplication {
  Echo(request: RequestEcho): Promise<ResponseEcho>;
  Flush(request: RequestFlush): Promise<ResponseFlush>;
  Info(request: RequestInfo): Promise<ResponseInfo>;
  SetOption(request: RequestSetOption): Promise<ResponseSetOption>;
  DeliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx>;
  CheckTx(request: RequestCheckTx): Promise<ResponseCheckTx>;
  Query(request: RequestQuery): Promise<ResponseQuery>;
  Commit(request: RequestCommit): Promise<ResponseCommit>;
  InitChain(request: RequestInitChain): Promise<ResponseInitChain>;
  BeginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock>;
  EndBlock(request: RequestEndBlock): Promise<ResponseEndBlock>;
  ListSnapshots(request: RequestListSnapshots): Promise<ResponseListSnapshots>;
  OfferSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot>;
  LoadSnapshotChunk(
    request: RequestLoadSnapshotChunk
  ): Promise<ResponseLoadSnapshotChunk>;
  ApplySnapshotChunk(
    request: RequestApplySnapshotChunk
  ): Promise<ResponseApplySnapshotChunk>;
  BeginRecheckTx(
    request: RequestBeginRecheckTx
  ): Promise<ResponseBeginRecheckTx>;
  EndRecheckTx(request: RequestEndRecheckTx): Promise<ResponseEndRecheckTx>;
}

export class ABCIApplicationClientImpl implements ABCIApplication {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Echo = this.Echo.bind(this);
    this.Flush = this.Flush.bind(this);
    this.Info = this.Info.bind(this);
    this.SetOption = this.SetOption.bind(this);
    this.DeliverTx = this.DeliverTx.bind(this);
    this.CheckTx = this.CheckTx.bind(this);
    this.Query = this.Query.bind(this);
    this.Commit = this.Commit.bind(this);
    this.InitChain = this.InitChain.bind(this);
    this.BeginBlock = this.BeginBlock.bind(this);
    this.EndBlock = this.EndBlock.bind(this);
    this.ListSnapshots = this.ListSnapshots.bind(this);
    this.OfferSnapshot = this.OfferSnapshot.bind(this);
    this.LoadSnapshotChunk = this.LoadSnapshotChunk.bind(this);
    this.ApplySnapshotChunk = this.ApplySnapshotChunk.bind(this);
    this.BeginRecheckTx = this.BeginRecheckTx.bind(this);
    this.EndRecheckTx = this.EndRecheckTx.bind(this);
  }
  Echo(request: RequestEcho): Promise<ResponseEcho> {
    const data = RequestEcho.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "Echo",
      data
    );
    return promise.then((data) => ResponseEcho.decode(new _m0.Reader(data)));
  }

  Flush(request: RequestFlush): Promise<ResponseFlush> {
    const data = RequestFlush.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "Flush",
      data
    );
    return promise.then((data) => ResponseFlush.decode(new _m0.Reader(data)));
  }

  Info(request: RequestInfo): Promise<ResponseInfo> {
    const data = RequestInfo.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "Info",
      data
    );
    return promise.then((data) => ResponseInfo.decode(new _m0.Reader(data)));
  }

  SetOption(request: RequestSetOption): Promise<ResponseSetOption> {
    const data = RequestSetOption.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "SetOption",
      data
    );
    return promise.then((data) =>
      ResponseSetOption.decode(new _m0.Reader(data))
    );
  }

  DeliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx> {
    const data = RequestDeliverTx.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "DeliverTx",
      data
    );
    return promise.then((data) =>
      ResponseDeliverTx.decode(new _m0.Reader(data))
    );
  }

  CheckTx(request: RequestCheckTx): Promise<ResponseCheckTx> {
    const data = RequestCheckTx.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "CheckTx",
      data
    );
    return promise.then((data) => ResponseCheckTx.decode(new _m0.Reader(data)));
  }

  Query(request: RequestQuery): Promise<ResponseQuery> {
    const data = RequestQuery.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "Query",
      data
    );
    return promise.then((data) => ResponseQuery.decode(new _m0.Reader(data)));
  }

  Commit(request: RequestCommit): Promise<ResponseCommit> {
    const data = RequestCommit.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "Commit",
      data
    );
    return promise.then((data) => ResponseCommit.decode(new _m0.Reader(data)));
  }

  InitChain(request: RequestInitChain): Promise<ResponseInitChain> {
    const data = RequestInitChain.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "InitChain",
      data
    );
    return promise.then((data) =>
      ResponseInitChain.decode(new _m0.Reader(data))
    );
  }

  BeginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock> {
    const data = RequestBeginBlock.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "BeginBlock",
      data
    );
    return promise.then((data) =>
      ResponseBeginBlock.decode(new _m0.Reader(data))
    );
  }

  EndBlock(request: RequestEndBlock): Promise<ResponseEndBlock> {
    const data = RequestEndBlock.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "EndBlock",
      data
    );
    return promise.then((data) =>
      ResponseEndBlock.decode(new _m0.Reader(data))
    );
  }

  ListSnapshots(request: RequestListSnapshots): Promise<ResponseListSnapshots> {
    const data = RequestListSnapshots.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "ListSnapshots",
      data
    );
    return promise.then((data) =>
      ResponseListSnapshots.decode(new _m0.Reader(data))
    );
  }

  OfferSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot> {
    const data = RequestOfferSnapshot.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "OfferSnapshot",
      data
    );
    return promise.then((data) =>
      ResponseOfferSnapshot.decode(new _m0.Reader(data))
    );
  }

  LoadSnapshotChunk(
    request: RequestLoadSnapshotChunk
  ): Promise<ResponseLoadSnapshotChunk> {
    const data = RequestLoadSnapshotChunk.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "LoadSnapshotChunk",
      data
    );
    return promise.then((data) =>
      ResponseLoadSnapshotChunk.decode(new _m0.Reader(data))
    );
  }

  ApplySnapshotChunk(
    request: RequestApplySnapshotChunk
  ): Promise<ResponseApplySnapshotChunk> {
    const data = RequestApplySnapshotChunk.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "ApplySnapshotChunk",
      data
    );
    return promise.then((data) =>
      ResponseApplySnapshotChunk.decode(new _m0.Reader(data))
    );
  }

  BeginRecheckTx(
    request: RequestBeginRecheckTx
  ): Promise<ResponseBeginRecheckTx> {
    const data = RequestBeginRecheckTx.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "BeginRecheckTx",
      data
    );
    return promise.then((data) =>
      ResponseBeginRecheckTx.decode(new _m0.Reader(data))
    );
  }

  EndRecheckTx(request: RequestEndRecheckTx): Promise<ResponseEndRecheckTx> {
    const data = RequestEndRecheckTx.encode(request).finish();
    const promise = this.rpc.request(
      "ostracon.abci.ABCIApplication",
      "EndRecheckTx",
      data
    );
    return promise.then((data) =>
      ResponseEndRecheckTx.decode(new _m0.Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
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
