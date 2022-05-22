/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.foundation.v1";

/**
 * ReceiveFromTreasuryAuthorization allows the grantee to receive coins
 * up to receive_limit from the treasury.
 */
export interface ReceiveFromTreasuryAuthorization {}

function createBaseReceiveFromTreasuryAuthorization(): ReceiveFromTreasuryAuthorization {
  return {};
}

export const ReceiveFromTreasuryAuthorization = {
  encode(
    _: ReceiveFromTreasuryAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReceiveFromTreasuryAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiveFromTreasuryAuthorization();
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

  fromJSON(_: any): ReceiveFromTreasuryAuthorization {
    return {};
  },

  toJSON(_: ReceiveFromTreasuryAuthorization): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ReceiveFromTreasuryAuthorization>, I>
  >(_: I): ReceiveFromTreasuryAuthorization {
    const message = createBaseReceiveFromTreasuryAuthorization();
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
