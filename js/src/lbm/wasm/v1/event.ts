/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.wasm.v1";

/** EventDeactivateContractProposal is the event that is emitted when the contract is deactivate. */
export interface EventDeactivateContractProposal {
  /** contract is the smart contract's address */
  contract: string;
}

/** EventActivateContractProposal is the event that is emitted when the contract is activates. */
export interface EventActivateContractProposal {
  /** contract is the smart contract's address */
  contract: string;
}

function createBaseEventDeactivateContractProposal(): EventDeactivateContractProposal {
  return { contract: "" };
}

export const EventDeactivateContractProposal = {
  encode(
    message: EventDeactivateContractProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventDeactivateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeactivateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeactivateContractProposal {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: EventDeactivateContractProposal): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeactivateContractProposal>, I>>(
    object: I
  ): EventDeactivateContractProposal {
    const message = createBaseEventDeactivateContractProposal();
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseEventActivateContractProposal(): EventActivateContractProposal {
  return { contract: "" };
}

export const EventActivateContractProposal = {
  encode(
    message: EventActivateContractProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventActivateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventActivateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventActivateContractProposal {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: EventActivateContractProposal): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventActivateContractProposal>, I>>(
    object: I
  ): EventActivateContractProposal {
    const message = createBaseEventActivateContractProposal();
    message.contract = object.contract ?? "";
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
