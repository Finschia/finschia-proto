/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Validator } from "../../ostracon/types/validator";

export const protobufPackage = "ostracon.types";

export interface VoterSet {
  voters: Validator[];
  totalVotingPower: Long;
}

function createBaseVoterSet(): VoterSet {
  return { voters: [], totalVotingPower: Long.ZERO };
}

export const VoterSet = {
  encode(
    message: VoterSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.voters) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.totalVotingPower.isZero()) {
      writer.uint32(16).int64(message.totalVotingPower);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoterSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoterSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voters.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalVotingPower = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoterSet {
    return {
      voters: Array.isArray(object?.voters)
        ? object.voters.map((e: any) => Validator.fromJSON(e))
        : [],
      totalVotingPower: isSet(object.totalVotingPower)
        ? Long.fromString(object.totalVotingPower)
        : Long.ZERO,
    };
  },

  toJSON(message: VoterSet): unknown {
    const obj: any = {};
    if (message.voters) {
      obj.voters = message.voters.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.voters = [];
    }
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = (
        message.totalVotingPower || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoterSet>, I>>(object: I): VoterSet {
    const message = createBaseVoterSet();
    message.voters = object.voters?.map((e) => Validator.fromPartial(e)) || [];
    message.totalVotingPower =
      object.totalVotingPower !== undefined && object.totalVotingPower !== null
        ? Long.fromValue(object.totalVotingPower)
        : Long.ZERO;
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
