/* eslint-disable */
import { Params, TokenClass, Authorization, Grant } from "./token";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.token.v1";

/** GenesisState defines the token module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  /** class_state is the class keeper's genesis state. */
  classState?: ClassGenesisState;
  /** balances is an array containing the balances of all the accounts. */
  balances: ContractBalances[];
  /** classes defines the metadata of the differents tokens. */
  classes: TokenClass[];
  /** grants defines the grant information. */
  grants: ContractGrants[];
  /** authorizations defines the approve information. */
  authorizations: ContractAuthorizations[];
  /** supplies represents the total supplies of tokens. */
  supplies: ContractCoin[];
  /** mints represents the total mints of tokens. */
  mints: ContractCoin[];
  /** burns represents the total burns of tokens. */
  burns: ContractCoin[];
}

/** ClassGenesisState defines the classs keeper's genesis state. */
export interface ClassGenesisState {
  /** nonce is the next class nonce to issue. */
  nonce: string;
  /** ids represents the issued ids. */
  ids: string[];
}

/**
 * ContractBalances defines balances belong to a contract.
 * genesis state.
 */
export interface ContractBalances {
  /** contract id associated with the token class. */
  contractId: string;
  /** balances of the contract. */
  balances: Balance[];
}

/** Balance defines a balance of an address. */
export interface Balance {
  /** address of the holder. */
  address: string;
  /** amount of the balance. */
  amount: string;
}

/** ContractAuthorizations defines authorizations belong to a contract. */
export interface ContractAuthorizations {
  /** contract id associated with the token class. */
  contractId: string;
  /** authorizations of the contract. */
  authorizations: Authorization[];
}

/** ContractGrant defines grants belong to a contract. */
export interface ContractGrants {
  /** contract id associated with the token class. */
  contractId: string;
  /** grants of the contract. */
  grants: Grant[];
}

export interface ContractCoin {
  /** contract id associated with the token class. */
  contractId: string;
  /** amount of the token. */
  amount: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    classState: undefined,
    balances: [],
    classes: [],
    grants: [],
    authorizations: [],
    supplies: [],
    mints: [],
    burns: [],
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
    if (message.classState !== undefined) {
      ClassGenesisState.encode(
        message.classState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.balances) {
      ContractBalances.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.classes) {
      TokenClass.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.grants) {
      ContractGrants.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.authorizations) {
      ContractAuthorizations.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.supplies) {
      ContractCoin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.mints) {
      ContractCoin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.burns) {
      ContractCoin.encode(v!, writer.uint32(74).fork()).ldelim();
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
          message.classState = ClassGenesisState.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.balances.push(
            ContractBalances.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.classes.push(TokenClass.decode(reader, reader.uint32()));
          break;
        case 5:
          message.grants.push(ContractGrants.decode(reader, reader.uint32()));
          break;
        case 6:
          message.authorizations.push(
            ContractAuthorizations.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.supplies.push(ContractCoin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.mints.push(ContractCoin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.burns.push(ContractCoin.decode(reader, reader.uint32()));
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
      classState: isSet(object.classState)
        ? ClassGenesisState.fromJSON(object.classState)
        : undefined,
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => ContractBalances.fromJSON(e))
        : [],
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => TokenClass.fromJSON(e))
        : [],
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => ContractGrants.fromJSON(e))
        : [],
      authorizations: Array.isArray(object?.authorizations)
        ? object.authorizations.map((e: any) =>
            ContractAuthorizations.fromJSON(e)
          )
        : [],
      supplies: Array.isArray(object?.supplies)
        ? object.supplies.map((e: any) => ContractCoin.fromJSON(e))
        : [],
      mints: Array.isArray(object?.mints)
        ? object.mints.map((e: any) => ContractCoin.fromJSON(e))
        : [],
      burns: Array.isArray(object?.burns)
        ? object.burns.map((e: any) => ContractCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.classState !== undefined &&
      (obj.classState = message.classState
        ? ClassGenesisState.toJSON(message.classState)
        : undefined);
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? ContractBalances.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    if (message.classes) {
      obj.classes = message.classes.map((e) =>
        e ? TokenClass.toJSON(e) : undefined
      );
    } else {
      obj.classes = [];
    }
    if (message.grants) {
      obj.grants = message.grants.map((e) =>
        e ? ContractGrants.toJSON(e) : undefined
      );
    } else {
      obj.grants = [];
    }
    if (message.authorizations) {
      obj.authorizations = message.authorizations.map((e) =>
        e ? ContractAuthorizations.toJSON(e) : undefined
      );
    } else {
      obj.authorizations = [];
    }
    if (message.supplies) {
      obj.supplies = message.supplies.map((e) =>
        e ? ContractCoin.toJSON(e) : undefined
      );
    } else {
      obj.supplies = [];
    }
    if (message.mints) {
      obj.mints = message.mints.map((e) =>
        e ? ContractCoin.toJSON(e) : undefined
      );
    } else {
      obj.mints = [];
    }
    if (message.burns) {
      obj.burns = message.burns.map((e) =>
        e ? ContractCoin.toJSON(e) : undefined
      );
    } else {
      obj.burns = [];
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
    message.classState =
      object.classState !== undefined && object.classState !== null
        ? ClassGenesisState.fromPartial(object.classState)
        : undefined;
    message.balances =
      object.balances?.map((e) => ContractBalances.fromPartial(e)) || [];
    message.classes =
      object.classes?.map((e) => TokenClass.fromPartial(e)) || [];
    message.grants =
      object.grants?.map((e) => ContractGrants.fromPartial(e)) || [];
    message.authorizations =
      object.authorizations?.map((e) =>
        ContractAuthorizations.fromPartial(e)
      ) || [];
    message.supplies =
      object.supplies?.map((e) => ContractCoin.fromPartial(e)) || [];
    message.mints = object.mints?.map((e) => ContractCoin.fromPartial(e)) || [];
    message.burns = object.burns?.map((e) => ContractCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClassGenesisState(): ClassGenesisState {
  return { nonce: "", ids: [] };
}

export const ClassGenesisState = {
  encode(
    message: ClassGenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.string();
          break;
        case 2:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassGenesisState {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ClassGenesisState): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClassGenesisState>, I>>(
    object: I
  ): ClassGenesisState {
    const message = createBaseClassGenesisState();
    message.nonce = object.nonce ?? "";
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseContractBalances(): ContractBalances {
  return { contractId: "", balances: [] };
}

export const ContractBalances = {
  encode(
    message: ContractBalances,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractBalances {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractBalances();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractBalances {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Balance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractBalances): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Balance.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractBalances>, I>>(
    object: I
  ): ContractBalances {
    const message = createBaseContractBalances();
    message.contractId = object.contractId ?? "";
    message.balances =
      object.balances?.map((e) => Balance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBalance(): Balance {
  return { address: "", amount: "" };
}

export const Balance = {
  encode(
    message: Balance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Balance {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Balance>, I>>(object: I): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseContractAuthorizations(): ContractAuthorizations {
  return { contractId: "", authorizations: [] };
}

export const ContractAuthorizations = {
  encode(
    message: ContractAuthorizations,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    for (const v of message.authorizations) {
      Authorization.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ContractAuthorizations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.authorizations.push(
            Authorization.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractAuthorizations {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      authorizations: Array.isArray(object?.authorizations)
        ? object.authorizations.map((e: any) => Authorization.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractAuthorizations): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    if (message.authorizations) {
      obj.authorizations = message.authorizations.map((e) =>
        e ? Authorization.toJSON(e) : undefined
      );
    } else {
      obj.authorizations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractAuthorizations>, I>>(
    object: I
  ): ContractAuthorizations {
    const message = createBaseContractAuthorizations();
    message.contractId = object.contractId ?? "";
    message.authorizations =
      object.authorizations?.map((e) => Authorization.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContractGrants(): ContractGrants {
  return { contractId: "", grants: [] };
}

export const ContractGrants = {
  encode(
    message: ContractGrants,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractGrants {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractGrants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.grants.push(Grant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractGrants {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractGrants): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    if (message.grants) {
      obj.grants = message.grants.map((e) => (e ? Grant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractGrants>, I>>(
    object: I
  ): ContractGrants {
    const message = createBaseContractGrants();
    message.contractId = object.contractId ?? "";
    message.grants = object.grants?.map((e) => Grant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContractCoin(): ContractCoin {
  return { contractId: "", amount: "" };
}

export const ContractCoin = {
  encode(
    message: ContractCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractCoin {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: ContractCoin): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractCoin>, I>>(
    object: I
  ): ContractCoin {
    const message = createBaseContractCoin();
    message.contractId = object.contractId ?? "";
    message.amount = object.amount ?? "";
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
