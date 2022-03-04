/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.token.v1";

/** EventTransfer is emitted on Msg/Transfer and Msg/TransferFrom */
export interface EventTransfer {
  /** class id associated with the token. */
  classId: string;
  from: string;
  to: string;
  amount: string;
}

/** EventApprove is emitted on Msg/Approve */
export interface EventApprove {
  /** class id associated with the token. */
  classId: string;
  approver: string;
  proxy: string;
}

/** EventIssue is emitted on Msg/Issue */
export interface EventIssue {
  /** class id associated with the token. */
  classId: string;
}

/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
  /** class id associated with the token. */
  classId: string;
  /** address of the granted account. */
  grantee: string;
  /** action on the token class. Must be one of "mint", "burn" and "modify". */
  action: string;
}

/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
  /** class id associated with the token. */
  classId: string;
  /** address of the revoked account. */
  grantee: string;
  /** action on the token class. Must be one of "mint", "burn" and "modify". */
  action: string;
}

/** EventMint is emitted on Msg/Mint */
export interface EventMint {
  /** class id associated with the token. */
  classId: string;
  to: string;
  amount: string;
}

/** EventBurn is emitted on Msg/Burn */
export interface EventBurn {
  /** class id associated with the token. */
  classId: string;
  from: string;
  amount: string;
}

/** EventModify is emitted on Msg/Modify */
export interface EventModify {
  /** class id associated with the token. */
  classId: string;
  key: string;
  value: string;
}

function createBaseEventTransfer(): EventTransfer {
  return { classId: "", from: "", to: "", amount: "" };
}

export const EventTransfer = {
  encode(
    message: EventTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventTransfer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventTransfer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTransfer>, I>>(
    object: I
  ): EventTransfer {
    const message = createBaseEventTransfer();
    message.classId = object.classId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventApprove(): EventApprove {
  return { classId: "", approver: "", proxy: "" };
}

export const EventApprove = {
  encode(
    message: EventApprove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.approver !== "") {
      writer.uint32(18).string(message.approver);
    }
    if (message.proxy !== "") {
      writer.uint32(26).string(message.proxy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventApprove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventApprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.approver = reader.string();
          break;
        case 3:
          message.proxy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventApprove {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      approver: isSet(object.approver) ? String(object.approver) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
    };
  },

  toJSON(message: EventApprove): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.approver !== undefined && (obj.approver = message.approver);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventApprove>, I>>(
    object: I
  ): EventApprove {
    const message = createBaseEventApprove();
    message.classId = object.classId ?? "";
    message.approver = object.approver ?? "";
    message.proxy = object.proxy ?? "";
    return message;
  },
};

function createBaseEventIssue(): EventIssue {
  return { classId: "" };
}

export const EventIssue = {
  encode(
    message: EventIssue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventIssue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventIssue {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
    };
  },

  toJSON(message: EventIssue): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventIssue>, I>>(
    object: I
  ): EventIssue {
    const message = createBaseEventIssue();
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseEventGrant(): EventGrant {
  return { classId: "", grantee: "", action: "" };
}

export const EventGrant = {
  encode(
    message: EventGrant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventGrant {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: EventGrant): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventGrant>, I>>(
    object: I
  ): EventGrant {
    const message = createBaseEventGrant();
    message.classId = object.classId ?? "";
    message.grantee = object.grantee ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseEventRevoke(): EventRevoke {
  return { classId: "", grantee: "", action: "" };
}

export const EventRevoke = {
  encode(
    message: EventRevoke,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRevoke {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRevoke {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: EventRevoke): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRevoke>, I>>(
    object: I
  ): EventRevoke {
    const message = createBaseEventRevoke();
    message.classId = object.classId ?? "";
    message.grantee = object.grantee ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseEventMint(): EventMint {
  return { classId: "", to: "", amount: "" };
}

export const EventMint = {
  encode(
    message: EventMint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMint {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventMint): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMint>, I>>(
    object: I
  ): EventMint {
    const message = createBaseEventMint();
    message.classId = object.classId ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventBurn(): EventBurn {
  return { classId: "", from: "", amount: "" };
}

export const EventBurn = {
  encode(
    message: EventBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBurn {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventBurn): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.from !== undefined && (obj.from = message.from);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBurn>, I>>(
    object: I
  ): EventBurn {
    const message = createBaseEventBurn();
    message.classId = object.classId ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventModify(): EventModify {
  return { classId: "", key: "", value: "" };
}

export const EventModify = {
  encode(
    message: EventModify,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventModify {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventModify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventModify {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: EventModify): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventModify>, I>>(
    object: I
  ): EventModify {
    const message = createBaseEventModify();
    message.classId = object.classId ?? "";
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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
