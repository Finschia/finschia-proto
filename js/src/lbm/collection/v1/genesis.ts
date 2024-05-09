/* eslint-disable */
import {
  Params,
  Contract,
  Coin,
  NFT,
  Authorization,
  Grant,
} from "./collection";
import Long from "long";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.collection.v1";

/** GenesisState defines the collection module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  /** contracts defines the metadata of the contracts. */
  contracts: Contract[];
  /** next ids for token classes. */
  nextClassIds: NextClassIDs[];
  /** classes defines the metadata of the tokens. */
  classes: ContractClasses[];
  /** next ids for (non-fungible) tokens. */
  nextTokenIds: ContractNextTokenIDs[];
  /** balances is an array containing the balances of all the accounts. */
  balances: ContractBalances[];
  /** nfts is an array containing the nfts. */
  nfts: ContractNFTs[];
  /**
   * parents represents the parents of (non-fungible) tokens.
   *
   * @deprecated
   */
  parents: ContractTokenRelations[];
  /** grants defines the grant information. */
  grants: ContractGrants[];
  /** authorizations defines the approve information. */
  authorizations: ContractAuthorizations[];
  /** supplies represents the total supplies of tokens. */
  supplies: ContractStatistics[];
  /** burnts represents the total amount of burnt tokens. */
  burnts: ContractStatistics[];
}

/**
 * ContractBalances defines balances belong to a contract.
 * genesis state.
 */
export interface ContractBalances {
  /** contract id associated with the contract. */
  contractId: string;
  /** balances */
  balances: Balance[];
}

/** ContractStatistics defines statistics belong to a contract. */
export interface ContractStatistics {
  /** contract id associated with the contract. */
  contractId: string;
  /** statistics */
  statistics: ClassStatistics[];
}

/** ClassStatistics defines statistics belong to a token class. */
export interface ClassStatistics {
  /** class id associated with the token class. */
  classId: string;
  /** statistics */
  amount: string;
}

/** Balance defines a balance of an address. */
export interface Balance {
  address: string;
  amount: Coin[];
}

/** ContractClasses defines token classes belong to a contract. */
export interface ContractClasses {
  /** contract id associated with the contract. */
  contractId: string;
  /** classes */
  classes: Any[];
}

/** ContractNFTs defines token classes belong to a contract. */
export interface ContractNFTs {
  /** contract id associated with the contract. */
  contractId: string;
  /** nfts */
  nfts: NFT[];
}

/** ContractAuthorizations defines authorizations belong to a contract. */
export interface ContractAuthorizations {
  /** contract id associated with the contract. */
  contractId: string;
  /** authorizations */
  authorizations: Authorization[];
}

/** ContractGrant defines grants belong to a contract. */
export interface ContractGrants {
  /** contract id associated with the contract. */
  contractId: string;
  /** grants */
  grants: Grant[];
}

/** NextClassIDs defines the next class ids of the contract. */
export interface NextClassIDs {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * id for the fungible tokens.
   *
   * @deprecated
   */
  fungible: string;
  /** id for the non-fungible tokens. */
  nonFungible: string;
}

/** ContractNextTokenIDs defines the next token ids belong to a contract. */
export interface ContractNextTokenIDs {
  contractId: string;
  tokenIds: NextTokenID[];
}

/** NextTokenID defines the next (non-fungible) token id of the token class. */
export interface NextTokenID {
  /** class id associated with the token class. */
  classId: string;
  /** id for the token. */
  id: string;
}

/**
 * ContractTokenRelations defines token relations belong to a contract.
 *
 * @deprecated
 */
export interface ContractTokenRelations {
  /** contract id associated with the contract. */
  contractId: string;
  /** relations */
  relations: TokenRelation[];
}

/**
 * TokenRelation defines relations between two tokens.
 *
 * @deprecated
 */
export interface TokenRelation {
  /** self */
  self: string;
  /** other */
  other: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    contracts: [],
    nextClassIds: [],
    classes: [],
    nextTokenIds: [],
    balances: [],
    nfts: [],
    parents: [],
    grants: [],
    authorizations: [],
    supplies: [],
    burnts: [],
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
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.nextClassIds) {
      NextClassIDs.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.classes) {
      ContractClasses.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.nextTokenIds) {
      ContractNextTokenIDs.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.balances) {
      ContractBalances.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nfts) {
      ContractNFTs.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.parents) {
      ContractTokenRelations.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.grants) {
      ContractGrants.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.authorizations) {
      ContractAuthorizations.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.supplies) {
      ContractStatistics.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.burnts) {
      ContractStatistics.encode(v!, writer.uint32(98).fork()).ldelim();
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
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nextClassIds.push(
            NextClassIDs.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.classes.push(ContractClasses.decode(reader, reader.uint32()));
          break;
        case 5:
          message.nextTokenIds.push(
            ContractNextTokenIDs.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.balances.push(
            ContractBalances.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.nfts.push(ContractNFTs.decode(reader, reader.uint32()));
          break;
        case 8:
          message.parents.push(
            ContractTokenRelations.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.grants.push(ContractGrants.decode(reader, reader.uint32()));
          break;
        case 10:
          message.authorizations.push(
            ContractAuthorizations.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.supplies.push(
            ContractStatistics.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.burnts.push(
            ContractStatistics.decode(reader, reader.uint32())
          );
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
      contracts: Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => Contract.fromJSON(e))
        : [],
      nextClassIds: Array.isArray(object?.nextClassIds)
        ? object.nextClassIds.map((e: any) => NextClassIDs.fromJSON(e))
        : [],
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => ContractClasses.fromJSON(e))
        : [],
      nextTokenIds: Array.isArray(object?.nextTokenIds)
        ? object.nextTokenIds.map((e: any) => ContractNextTokenIDs.fromJSON(e))
        : [],
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => ContractBalances.fromJSON(e))
        : [],
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => ContractNFTs.fromJSON(e))
        : [],
      parents: Array.isArray(object?.parents)
        ? object.parents.map((e: any) => ContractTokenRelations.fromJSON(e))
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
        ? object.supplies.map((e: any) => ContractStatistics.fromJSON(e))
        : [],
      burnts: Array.isArray(object?.burnts)
        ? object.burnts.map((e: any) => ContractStatistics.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) =>
        e ? Contract.toJSON(e) : undefined
      );
    } else {
      obj.contracts = [];
    }
    if (message.nextClassIds) {
      obj.nextClassIds = message.nextClassIds.map((e) =>
        e ? NextClassIDs.toJSON(e) : undefined
      );
    } else {
      obj.nextClassIds = [];
    }
    if (message.classes) {
      obj.classes = message.classes.map((e) =>
        e ? ContractClasses.toJSON(e) : undefined
      );
    } else {
      obj.classes = [];
    }
    if (message.nextTokenIds) {
      obj.nextTokenIds = message.nextTokenIds.map((e) =>
        e ? ContractNextTokenIDs.toJSON(e) : undefined
      );
    } else {
      obj.nextTokenIds = [];
    }
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? ContractBalances.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) =>
        e ? ContractNFTs.toJSON(e) : undefined
      );
    } else {
      obj.nfts = [];
    }
    if (message.parents) {
      obj.parents = message.parents.map((e) =>
        e ? ContractTokenRelations.toJSON(e) : undefined
      );
    } else {
      obj.parents = [];
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
        e ? ContractStatistics.toJSON(e) : undefined
      );
    } else {
      obj.supplies = [];
    }
    if (message.burnts) {
      obj.burnts = message.burnts.map((e) =>
        e ? ContractStatistics.toJSON(e) : undefined
      );
    } else {
      obj.burnts = [];
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
    message.contracts =
      object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    message.nextClassIds =
      object.nextClassIds?.map((e) => NextClassIDs.fromPartial(e)) || [];
    message.classes =
      object.classes?.map((e) => ContractClasses.fromPartial(e)) || [];
    message.nextTokenIds =
      object.nextTokenIds?.map((e) => ContractNextTokenIDs.fromPartial(e)) ||
      [];
    message.balances =
      object.balances?.map((e) => ContractBalances.fromPartial(e)) || [];
    message.nfts = object.nfts?.map((e) => ContractNFTs.fromPartial(e)) || [];
    message.parents =
      object.parents?.map((e) => ContractTokenRelations.fromPartial(e)) || [];
    message.grants =
      object.grants?.map((e) => ContractGrants.fromPartial(e)) || [];
    message.authorizations =
      object.authorizations?.map((e) =>
        ContractAuthorizations.fromPartial(e)
      ) || [];
    message.supplies =
      object.supplies?.map((e) => ContractStatistics.fromPartial(e)) || [];
    message.burnts =
      object.burnts?.map((e) => ContractStatistics.fromPartial(e)) || [];
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

function createBaseContractStatistics(): ContractStatistics {
  return { contractId: "", statistics: [] };
}

export const ContractStatistics = {
  encode(
    message: ContractStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    for (const v of message.statistics) {
      ClassStatistics.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.statistics.push(
            ClassStatistics.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractStatistics {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      statistics: Array.isArray(object?.statistics)
        ? object.statistics.map((e: any) => ClassStatistics.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractStatistics): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    if (message.statistics) {
      obj.statistics = message.statistics.map((e) =>
        e ? ClassStatistics.toJSON(e) : undefined
      );
    } else {
      obj.statistics = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractStatistics>, I>>(
    object: I
  ): ContractStatistics {
    const message = createBaseContractStatistics();
    message.contractId = object.contractId ?? "";
    message.statistics =
      object.statistics?.map((e) => ClassStatistics.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClassStatistics(): ClassStatistics {
  return { classId: "", amount: "" };
}

export const ClassStatistics = {
  encode(
    message: ClassStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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

  fromJSON(object: any): ClassStatistics {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: ClassStatistics): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClassStatistics>, I>>(
    object: I
  ): ClassStatistics {
    const message = createBaseClassStatistics();
    message.classId = object.classId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseBalance(): Balance {
  return { address: "", amount: [] };
}

export const Balance = {
  encode(
    message: Balance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.amount.push(Coin.decode(reader, reader.uint32()));
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
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Balance>, I>>(object: I): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContractClasses(): ContractClasses {
  return { contractId: "", classes: [] };
}

export const ContractClasses = {
  encode(
    message: ContractClasses,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    for (const v of message.classes) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractClasses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractClasses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.classes.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractClasses {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractClasses): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    if (message.classes) {
      obj.classes = message.classes.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.classes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractClasses>, I>>(
    object: I
  ): ContractClasses {
    const message = createBaseContractClasses();
    message.contractId = object.contractId ?? "";
    message.classes = object.classes?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContractNFTs(): ContractNFTs {
  return { contractId: "", nfts: [] };
}

export const ContractNFTs = {
  encode(
    message: ContractNFTs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractNFTs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractNFTs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractNFTs {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => NFT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractNFTs): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractNFTs>, I>>(
    object: I
  ): ContractNFTs {
    const message = createBaseContractNFTs();
    message.contractId = object.contractId ?? "";
    message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
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

function createBaseNextClassIDs(): NextClassIDs {
  return { contractId: "", fungible: "", nonFungible: "" };
}

export const NextClassIDs = {
  encode(
    message: NextClassIDs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.fungible !== "") {
      writer.uint32(18).string(message.fungible);
    }
    if (message.nonFungible !== "") {
      writer.uint32(26).string(message.nonFungible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextClassIDs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextClassIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.fungible = reader.string();
          break;
        case 3:
          message.nonFungible = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NextClassIDs {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      fungible: isSet(object.fungible) ? String(object.fungible) : "",
      nonFungible: isSet(object.nonFungible) ? String(object.nonFungible) : "",
    };
  },

  toJSON(message: NextClassIDs): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.fungible !== undefined && (obj.fungible = message.fungible);
    message.nonFungible !== undefined &&
      (obj.nonFungible = message.nonFungible);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NextClassIDs>, I>>(
    object: I
  ): NextClassIDs {
    const message = createBaseNextClassIDs();
    message.contractId = object.contractId ?? "";
    message.fungible = object.fungible ?? "";
    message.nonFungible = object.nonFungible ?? "";
    return message;
  },
};

function createBaseContractNextTokenIDs(): ContractNextTokenIDs {
  return { contractId: "", tokenIds: [] };
}

export const ContractNextTokenIDs = {
  encode(
    message: ContractNextTokenIDs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    for (const v of message.tokenIds) {
      NextTokenID.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ContractNextTokenIDs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractNextTokenIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.tokenIds.push(NextTokenID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractNextTokenIDs {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => NextTokenID.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractNextTokenIDs): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) =>
        e ? NextTokenID.toJSON(e) : undefined
      );
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractNextTokenIDs>, I>>(
    object: I
  ): ContractNextTokenIDs {
    const message = createBaseContractNextTokenIDs();
    message.contractId = object.contractId ?? "";
    message.tokenIds =
      object.tokenIds?.map((e) => NextTokenID.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNextTokenID(): NextTokenID {
  return { classId: "", id: "" };
}

export const NextTokenID = {
  encode(
    message: NextTokenID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextTokenID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextTokenID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NextTokenID {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: NextTokenID): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NextTokenID>, I>>(
    object: I
  ): NextTokenID {
    const message = createBaseNextTokenID();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseContractTokenRelations(): ContractTokenRelations {
  return { contractId: "", relations: [] };
}

export const ContractTokenRelations = {
  encode(
    message: ContractTokenRelations,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    for (const v of message.relations) {
      TokenRelation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ContractTokenRelations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractTokenRelations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.relations.push(TokenRelation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractTokenRelations {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) => TokenRelation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractTokenRelations): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    if (message.relations) {
      obj.relations = message.relations.map((e) =>
        e ? TokenRelation.toJSON(e) : undefined
      );
    } else {
      obj.relations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractTokenRelations>, I>>(
    object: I
  ): ContractTokenRelations {
    const message = createBaseContractTokenRelations();
    message.contractId = object.contractId ?? "";
    message.relations =
      object.relations?.map((e) => TokenRelation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTokenRelation(): TokenRelation {
  return { self: "", other: "" };
}

export const TokenRelation = {
  encode(
    message: TokenRelation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.self !== "") {
      writer.uint32(10).string(message.self);
    }
    if (message.other !== "") {
      writer.uint32(18).string(message.other);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenRelation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.self = reader.string();
          break;
        case 2:
          message.other = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenRelation {
    return {
      self: isSet(object.self) ? String(object.self) : "",
      other: isSet(object.other) ? String(object.other) : "",
    };
  },

  toJSON(message: TokenRelation): unknown {
    const obj: any = {};
    message.self !== undefined && (obj.self = message.self);
    message.other !== undefined && (obj.other = message.other);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenRelation>, I>>(
    object: I
  ): TokenRelation {
    const message = createBaseTokenRelation();
    message.self = object.self ?? "";
    message.other = object.other ?? "";
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
