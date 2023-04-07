/* eslint-disable */
import { Params } from "../../../cosmwasm/wasm/v1/types";
import Long from "long";
import {
  Code,
  Contract,
  Sequence,
  GenesisState_GenMsgs,
} from "../../../cosmwasm/wasm/v1/genesis";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.wasm.v1";

/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params?: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
  genMsgs: GenesisState_GenMsgs[];
  /** InactiveContractAddresses is a list of contract address that set inactive */
  inactiveContractAddresses: string[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    codes: [],
    contracts: [],
    sequences: [],
    genMsgs: [],
    inactiveContractAddresses: [],
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
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.genMsgs) {
      GenesisState_GenMsgs.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.inactiveContractAddresses) {
      writer.uint32(50).string(v!);
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
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;
        case 5:
          message.genMsgs.push(
            GenesisState_GenMsgs.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.inactiveContractAddresses.push(reader.string());
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
      codes: Array.isArray(object?.codes)
        ? object.codes.map((e: any) => Code.fromJSON(e))
        : [],
      contracts: Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => Contract.fromJSON(e))
        : [],
      sequences: Array.isArray(object?.sequences)
        ? object.sequences.map((e: any) => Sequence.fromJSON(e))
        : [],
      genMsgs: Array.isArray(object?.genMsgs)
        ? object.genMsgs.map((e: any) => GenesisState_GenMsgs.fromJSON(e))
        : [],
      inactiveContractAddresses: Array.isArray(
        object?.inactiveContractAddresses
      )
        ? object.inactiveContractAddresses.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.codes) {
      obj.codes = message.codes.map((e) => (e ? Code.toJSON(e) : undefined));
    } else {
      obj.codes = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) =>
        e ? Contract.toJSON(e) : undefined
      );
    } else {
      obj.contracts = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) =>
        e ? Sequence.toJSON(e) : undefined
      );
    } else {
      obj.sequences = [];
    }
    if (message.genMsgs) {
      obj.genMsgs = message.genMsgs.map((e) =>
        e ? GenesisState_GenMsgs.toJSON(e) : undefined
      );
    } else {
      obj.genMsgs = [];
    }
    if (message.inactiveContractAddresses) {
      obj.inactiveContractAddresses = message.inactiveContractAddresses.map(
        (e) => e
      );
    } else {
      obj.inactiveContractAddresses = [];
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
    message.codes = object.codes?.map((e) => Code.fromPartial(e)) || [];
    message.contracts =
      object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    message.sequences =
      object.sequences?.map((e) => Sequence.fromPartial(e)) || [];
    message.genMsgs =
      object.genMsgs?.map((e) => GenesisState_GenMsgs.fromPartial(e)) || [];
    message.inactiveContractAddresses =
      object.inactiveContractAddresses?.map((e) => e) || [];
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
