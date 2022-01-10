/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  AccessConfig,
  ContractStatus,
  contractStatusFromJSON,
  contractStatusToJSON,
} from "../../../lbm/wasm/v1/types";
import { Coin } from "../../../lbm/base/v1/coin";

export const protobufPackage = "lbm.wasm.v1";

/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /**
   * Source is a valid absolute HTTPS URI to the contract's source code,
   * optional
   */
  source: string;
  /** Builder is a valid docker image name with tag, optional */
  builder: string;
  /**
   * InstantiatePermission access control to apply on contract creation,
   * optional
   */
  instantiatePermission?: AccessConfig;
}

/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
}

/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** InitMsg json encoded message to be passed to the contract on instantiation */
  initMsg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}

/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}

/** MsgStoreCodeAndInstantiateContract submit Wasm code to the system and instantiate a contract using it. */
export interface MsgStoreCodeAndInstantiateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** Source is a valid absolute HTTPS URI to the contract's source code, optional */
  source: string;
  /** Builder is a valid docker image name with tag, optional */
  builder: string;
  /** InstantiatePermission access control to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** InitMsg json encoded message to be passed to the contract on instantiation */
  initMsg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}

/** MsgStoreCodeAndInstantiateContractResponse returns store and instantiate result data. */
export interface MsgStoreCodeAndInstantiateContractResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}

/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */
  funds: Coin[];
}

/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}

/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  codeId: Long;
  /** MigrateMsg json encoded message to be passed to the contract on migration */
  migrateMsg: Uint8Array;
}

/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
  /**
   * Data contains same raw bytes returned as data from the wasm contract.
   * (May be empty)
   */
  data: Uint8Array;
}

/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {}

/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {}

/** MsgUpdateContractStatus sets a new status for a smart contract */
export interface MsgUpdateContractStatus {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Status to be set */
  status: ContractStatus;
}

/** MsgUpdateContractStatusResponse returns empty data */
export interface MsgUpdateContractStatusResponse {}

function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    source: "",
    builder: "",
    instantiatePermission: undefined,
  };
}

export const MsgStoreCode = {
  encode(
    message: MsgStoreCode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(34).string(message.builder);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(
        message.instantiatePermission,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.builder = reader.string();
          break;
        case 5:
          message.instantiatePermission = AccessConfig.decode(
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

  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode)
        ? bytesFromBase64(object.wasmByteCode)
        : new Uint8Array(),
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      instantiatePermission: isSet(object.instantiatePermission)
        ? AccessConfig.fromJSON(object.instantiatePermission)
        : undefined,
    };
  },

  toJSON(message: MsgStoreCode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined
          ? message.wasmByteCode
          : new Uint8Array()
      ));
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    message.instantiatePermission !== undefined &&
      (obj.instantiatePermission = message.instantiatePermission
        ? AccessConfig.toJSON(message.instantiatePermission)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreCode>, I>>(
    object: I
  ): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.instantiatePermission =
      object.instantiatePermission !== undefined &&
      object.instantiatePermission !== null
        ? AccessConfig.fromPartial(object.instantiatePermission)
        : undefined;
    return message;
  },
};

function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return { codeId: Long.UZERO };
}

export const MsgStoreCodeResponse = {
  encode(
    message: MsgStoreCodeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgStoreCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStoreCodeResponse {
    return {
      codeId: isSet(object.codeId)
        ? Long.fromString(object.codeId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgStoreCodeResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined &&
      (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreCodeResponse>, I>>(
    object: I
  ): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId =
      object.codeId !== undefined && object.codeId !== null
        ? Long.fromValue(object.codeId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    initMsg: new Uint8Array(),
    funds: [],
  };
}

export const MsgInstantiateContract = {
  encode(
    message: MsgInstantiateContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(42).bytes(message.initMsg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgInstantiateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64() as Long;
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.initMsg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId)
        ? Long.fromString(object.codeId)
        : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      initMsg: isSet(object.initMsg)
        ? bytesFromBase64(object.initMsg)
        : new Uint8Array(),
      funds: Array.isArray(object?.funds)
        ? object.funds.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgInstantiateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined &&
      (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.initMsg !== undefined &&
      (obj.initMsg = base64FromBytes(
        message.initMsg !== undefined ? message.initMsg : new Uint8Array()
      ));
    if (message.funds) {
      obj.funds = message.funds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.funds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInstantiateContract>, I>>(
    object: I
  ): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId =
      object.codeId !== undefined && object.codeId !== null
        ? Long.fromValue(object.codeId)
        : Long.UZERO;
    message.label = object.label ?? "";
    message.initMsg = object.initMsg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return { address: "", data: new Uint8Array() };
}

export const MsgInstantiateContractResponse = {
  encode(
    message: MsgInstantiateContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgInstantiateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInstantiateContractResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgInstantiateContractResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInstantiateContractResponse>, I>>(
    object: I
  ): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgStoreCodeAndInstantiateContract(): MsgStoreCodeAndInstantiateContract {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    source: "",
    builder: "",
    instantiatePermission: undefined,
    admin: "",
    label: "",
    initMsg: new Uint8Array(),
    funds: [],
  };
}

export const MsgStoreCodeAndInstantiateContract = {
  encode(
    message: MsgStoreCodeAndInstantiateContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(34).string(message.builder);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(
        message.instantiatePermission,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.admin !== "") {
      writer.uint32(50).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(58).string(message.label);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(66).bytes(message.initMsg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgStoreCodeAndInstantiateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeAndInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.builder = reader.string();
          break;
        case 5:
          message.instantiatePermission = AccessConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.admin = reader.string();
          break;
        case 7:
          message.label = reader.string();
          break;
        case 8:
          message.initMsg = reader.bytes();
          break;
        case 9:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStoreCodeAndInstantiateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode)
        ? bytesFromBase64(object.wasmByteCode)
        : new Uint8Array(),
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      instantiatePermission: isSet(object.instantiatePermission)
        ? AccessConfig.fromJSON(object.instantiatePermission)
        : undefined,
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      initMsg: isSet(object.initMsg)
        ? bytesFromBase64(object.initMsg)
        : new Uint8Array(),
      funds: Array.isArray(object?.funds)
        ? object.funds.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgStoreCodeAndInstantiateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined
          ? message.wasmByteCode
          : new Uint8Array()
      ));
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    message.instantiatePermission !== undefined &&
      (obj.instantiatePermission = message.instantiatePermission
        ? AccessConfig.toJSON(message.instantiatePermission)
        : undefined);
    message.admin !== undefined && (obj.admin = message.admin);
    message.label !== undefined && (obj.label = message.label);
    message.initMsg !== undefined &&
      (obj.initMsg = base64FromBytes(
        message.initMsg !== undefined ? message.initMsg : new Uint8Array()
      ));
    if (message.funds) {
      obj.funds = message.funds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.funds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgStoreCodeAndInstantiateContract>, I>
  >(object: I): MsgStoreCodeAndInstantiateContract {
    const message = createBaseMsgStoreCodeAndInstantiateContract();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.instantiatePermission =
      object.instantiatePermission !== undefined &&
      object.instantiatePermission !== null
        ? AccessConfig.fromPartial(object.instantiatePermission)
        : undefined;
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.initMsg = object.initMsg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgStoreCodeAndInstantiateContractResponse(): MsgStoreCodeAndInstantiateContractResponse {
  return { codeId: Long.UZERO, address: "", data: new Uint8Array() };
}

export const MsgStoreCodeAndInstantiateContractResponse = {
  encode(
    message: MsgStoreCodeAndInstantiateContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgStoreCodeAndInstantiateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeAndInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStoreCodeAndInstantiateContractResponse {
    return {
      codeId: isSet(object.codeId)
        ? Long.fromString(object.codeId)
        : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgStoreCodeAndInstantiateContractResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined &&
      (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgStoreCodeAndInstantiateContractResponse>, I>
  >(object: I): MsgStoreCodeAndInstantiateContractResponse {
    const message = createBaseMsgStoreCodeAndInstantiateContractResponse();
    message.codeId =
      object.codeId !== undefined && object.codeId !== null
        ? Long.fromValue(object.codeId)
        : Long.UZERO;
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgExecuteContract(): MsgExecuteContract {
  return { sender: "", contract: "", msg: new Uint8Array(), funds: [] };
}

export const MsgExecuteContract = {
  encode(
    message: MsgExecuteContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 4:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds)
        ? object.funds.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined &&
      (obj.msg = base64FromBytes(
        message.msg !== undefined ? message.msg : new Uint8Array()
      ));
    if (message.funds) {
      obj.funds = message.funds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.funds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(
    object: I
  ): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return { data: new Uint8Array() };
}

export const MsgExecuteContractResponse = {
  encode(
    message: MsgExecuteContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgExecuteContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteContractResponse {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgExecuteContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteContractResponse>, I>>(
    object: I
  ): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    sender: "",
    contract: "",
    codeId: Long.UZERO,
    migrateMsg: new Uint8Array(),
  };
}

export const MsgMigrateContract = {
  encode(
    message: MsgMigrateContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.migrateMsg.length !== 0) {
      writer.uint32(34).bytes(message.migrateMsg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64() as Long;
          break;
        case 4:
          message.migrateMsg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId)
        ? Long.fromString(object.codeId)
        : Long.UZERO,
      migrateMsg: isSet(object.migrateMsg)
        ? bytesFromBase64(object.migrateMsg)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgMigrateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined &&
      (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.migrateMsg !== undefined &&
      (obj.migrateMsg = base64FromBytes(
        message.migrateMsg !== undefined ? message.migrateMsg : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateContract>, I>>(
    object: I
  ): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.codeId =
      object.codeId !== undefined && object.codeId !== null
        ? Long.fromValue(object.codeId)
        : Long.UZERO;
    message.migrateMsg = object.migrateMsg ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return { data: new Uint8Array() };
}

export const MsgMigrateContractResponse = {
  encode(
    message: MsgMigrateContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMigrateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateContractResponse {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgMigrateContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateContractResponse>, I>>(
    object: I
  ): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgUpdateAdmin(): MsgUpdateAdmin {
  return { sender: "", newAdmin: "", contract: "" };
}

export const MsgUpdateAdmin = {
  encode(
    message: MsgUpdateAdmin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: MsgUpdateAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAdmin>, I>>(
    object: I
  ): MsgUpdateAdmin {
    const message = createBaseMsgUpdateAdmin();
    message.sender = object.sender ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseMsgUpdateAdminResponse(): MsgUpdateAdminResponse {
  return {};
}

export const MsgUpdateAdminResponse = {
  encode(
    _: MsgUpdateAdminResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdminResponse();
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

  fromJSON(_: any): MsgUpdateAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAdminResponse>, I>>(
    _: I
  ): MsgUpdateAdminResponse {
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  },
};

function createBaseMsgClearAdmin(): MsgClearAdmin {
  return { sender: "", contract: "" };
}

export const MsgClearAdmin = {
  encode(
    message: MsgClearAdmin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClearAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: MsgClearAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearAdmin>, I>>(
    object: I
  ): MsgClearAdmin {
    const message = createBaseMsgClearAdmin();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseMsgClearAdminResponse(): MsgClearAdminResponse {
  return {};
}

export const MsgClearAdminResponse = {
  encode(
    _: MsgClearAdminResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClearAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdminResponse();
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

  fromJSON(_: any): MsgClearAdminResponse {
    return {};
  },

  toJSON(_: MsgClearAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearAdminResponse>, I>>(
    _: I
  ): MsgClearAdminResponse {
    const message = createBaseMsgClearAdminResponse();
    return message;
  },
};

function createBaseMsgUpdateContractStatus(): MsgUpdateContractStatus {
  return { sender: "", contract: "", status: 0 };
}

export const MsgUpdateContractStatus = {
  encode(
    message: MsgUpdateContractStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateContractStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContractStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateContractStatus {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      status: isSet(object.status) ? contractStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: MsgUpdateContractStatus): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.status !== undefined &&
      (obj.status = contractStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateContractStatus>, I>>(
    object: I
  ): MsgUpdateContractStatus {
    const message = createBaseMsgUpdateContractStatus();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseMsgUpdateContractStatusResponse(): MsgUpdateContractStatusResponse {
  return {};
}

export const MsgUpdateContractStatusResponse = {
  encode(
    _: MsgUpdateContractStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateContractStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContractStatusResponse();
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

  fromJSON(_: any): MsgUpdateContractStatusResponse {
    return {};
  },

  toJSON(_: MsgUpdateContractStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateContractStatusResponse>, I>>(
    _: I
  ): MsgUpdateContractStatusResponse {
    const message = createBaseMsgUpdateContractStatusResponse();
    return message;
  },
};

/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /** Instantiate creates a new smart contract instance for the given code id. */
  InstantiateContract(
    request: MsgInstantiateContract
  ): Promise<MsgInstantiateContractResponse>;
  /** StoreCodeAndInstantiatecontract upload code and instantiate a contract using it. */
  StoreCodeAndInstantiateContract(
    request: MsgStoreCodeAndInstantiateContract
  ): Promise<MsgStoreCodeAndInstantiateContractResponse>;
  /** Execute submits the given message data to a smart contract */
  ExecuteContract(
    request: MsgExecuteContract
  ): Promise<MsgExecuteContractResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  MigrateContract(
    request: MsgMigrateContract
  ): Promise<MsgMigrateContractResponse>;
  /** UpdateAdmin sets a new   admin for a smart contract */
  UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
  /** ClearAdmin removes any admin stored for a smart contract */
  ClearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
  /** UpdateContractStatus sets a new status for a smart contract */
  UpdateContractStatus(
    request: MsgUpdateContractStatus
  ): Promise<MsgUpdateContractStatusResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.StoreCode = this.StoreCode.bind(this);
    this.InstantiateContract = this.InstantiateContract.bind(this);
    this.StoreCodeAndInstantiateContract =
      this.StoreCodeAndInstantiateContract.bind(this);
    this.ExecuteContract = this.ExecuteContract.bind(this);
    this.MigrateContract = this.MigrateContract.bind(this);
    this.UpdateAdmin = this.UpdateAdmin.bind(this);
    this.ClearAdmin = this.ClearAdmin.bind(this);
    this.UpdateContractStatus = this.UpdateContractStatus.bind(this);
  }
  StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("lbm.wasm.v1.Msg", "StoreCode", data);
    return promise.then((data) =>
      MsgStoreCodeResponse.decode(new _m0.Reader(data))
    );
  }

  InstantiateContract(
    request: MsgInstantiateContract
  ): Promise<MsgInstantiateContractResponse> {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.wasm.v1.Msg",
      "InstantiateContract",
      data
    );
    return promise.then((data) =>
      MsgInstantiateContractResponse.decode(new _m0.Reader(data))
    );
  }

  StoreCodeAndInstantiateContract(
    request: MsgStoreCodeAndInstantiateContract
  ): Promise<MsgStoreCodeAndInstantiateContractResponse> {
    const data = MsgStoreCodeAndInstantiateContract.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.wasm.v1.Msg",
      "StoreCodeAndInstantiateContract",
      data
    );
    return promise.then((data) =>
      MsgStoreCodeAndInstantiateContractResponse.decode(new _m0.Reader(data))
    );
  }

  ExecuteContract(
    request: MsgExecuteContract
  ): Promise<MsgExecuteContractResponse> {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.wasm.v1.Msg",
      "ExecuteContract",
      data
    );
    return promise.then((data) =>
      MsgExecuteContractResponse.decode(new _m0.Reader(data))
    );
  }

  MigrateContract(
    request: MsgMigrateContract
  ): Promise<MsgMigrateContractResponse> {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.wasm.v1.Msg",
      "MigrateContract",
      data
    );
    return promise.then((data) =>
      MsgMigrateContractResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse> {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("lbm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then((data) =>
      MsgUpdateAdminResponse.decode(new _m0.Reader(data))
    );
  }

  ClearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse> {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("lbm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then((data) =>
      MsgClearAdminResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateContractStatus(
    request: MsgUpdateContractStatus
  ): Promise<MsgUpdateContractStatusResponse> {
    const data = MsgUpdateContractStatus.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.wasm.v1.Msg",
      "UpdateContractStatus",
      data
    );
    return promise.then((data) =>
      MsgUpdateContractStatusResponse.decode(new _m0.Reader(data))
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
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
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
