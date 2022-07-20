/* eslint-disable */
import {
  Permission,
  Coin,
  Attribute,
  Change,
  permissionFromJSON,
  permissionToJSON,
} from "./collection";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lbm.collection.v1";

/**
 * MsgSend is the Msg/Send request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 *   - `to` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `amount` is not positive.
 *
 * Signer: `from`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgSend {
  /** contract id associated with the contract. */
  contractId: string;
  /** holder whose tokens are being sent. */
  from: string;
  /** recipient of the tokens. */
  to: string;
  /** amount of tokens to send. */
  amount: Coin[];
}

/**
 * MsgSendResponse is the Msg/Send response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgSendResponse {}

/**
 * MsgOperatorSend is the Msg/OperatorSend request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `operator` is of invalid format.
 *   - `from` is of invalid format.
 *   - `to` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `amount` is not positive.
 *
 * Signer: `operator`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgOperatorSend {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggers the send. */
  operator: string;
  /** holder whose tokens are being sent. */
  from: string;
  /** recipient of the tokens. */
  to: string;
  /** amount of tokens to send. */
  amount: Coin[];
}

/**
 * MsgOperatorSendResponse is the Msg/OperatorSend response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgOperatorSendResponse {}

/**
 * Deprecated: use MsgSend
 *
 * MsgTransferFT is the Msg/TransferFT request type.
 */
export interface MsgTransferFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /**
   * the amount of the transfer.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/**
 * Deprecated: do not use
 *
 * MsgTransferFTResponse is the Msg/TransferFT response type.
 */
export interface MsgTransferFTResponse {}

/**
 * Deprecated: use MsgOperatorSend
 *
 * MsgTransferFTFrom is the Msg/TransferFTFrom request type.
 */
export interface MsgTransferFTFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the operator. */
  proxy: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /**
   * the amount of the transfer.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/**
 * Deprecated: do not use
 *
 * MsgTransferFTFromResponse is the Msg/TransferFTFrom response type.
 */
export interface MsgTransferFTFromResponse {}

/**
 * Deprecated: use MsgSend
 *
 * MsgTransferNFT is the Msg/TransferNFT request type.
 */
export interface MsgTransferNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /** the token ids to transfer. */
  tokenIds: string[];
}

/**
 * Deprecated: do not use
 *
 * MsgTransferNFTResponse is the Msg/TransferNFT response type.
 */
export interface MsgTransferNFTResponse {}

/**
 * Deprecated: use MsgOperatorSend
 *
 * MsgTransferNFTFrom is the Msg/TransferNFTFrom request type.
 */
export interface MsgTransferNFTFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the operator. */
  proxy: string;
  /** the address which the transfer is from. */
  from: string;
  /** the address which the transfer is to. */
  to: string;
  /** the token ids to transfer. */
  tokenIds: string[];
}

/**
 * Deprecated: do not use
 *
 * MsgTransferNFTFromResponse is the Msg/TransferNFTFrom response type.
 */
export interface MsgTransferNFTFromResponse {}

/**
 * MsgAuthorizeOperator is the Msg/AuthorizeOperator request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `holder` is of invalid format.
 *   - `operator` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *
 * Signer: `holder`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgAuthorizeOperator {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of a holder which authorizes the `operator` address as an operator. */
  holder: string;
  /** address to set as an operator for `holder`. */
  operator: string;
}

/**
 * MsgAuthorizeOperatorResponse is the Msg/AuthorizeOperator response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgAuthorizeOperatorResponse {}

/**
 * MsgRevokeOperator is the Msg/RevokeOperator request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `holder` is of invalid format.
 *   - `operator` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *
 * Signer: `holder`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgRevokeOperator {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of a holder which revokes the `operator` address as an operator. */
  holder: string;
  /** address to rescind as an operator for `holder`. */
  operator: string;
}

/**
 * MsgRevokeOperatorResponse is the Msg/RevokeOperator response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgRevokeOperatorResponse {}

/**
 * Deprecated: use MsgAuthorizeOperator
 *
 * MsgApprove is the Msg/Approve request type.
 */
export interface MsgApprove {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the holder who allows the manipulation of its token. */
  approver: string;
  /** address which the manipulation is allowed to. */
  proxy: string;
}

/**
 * Deprecated: do not use
 *
 * MsgApproveResponse is the Msg/Approve response type.
 */
export interface MsgApproveResponse {}

/**
 * Deprecated: use MsgRevokeOperator
 *
 * MsgDisapprove is the Msg/Disapprove request type.
 */
export interface MsgDisapprove {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the holder who allows the manipulation of its token. */
  approver: string;
  /** address which the manipulation is allowed to. */
  proxy: string;
}

/**
 * Deprecated: do not use
 *
 * MsgDisapproveResponse is the Msg/Disapprove response type.
 */
export interface MsgDisapproveResponse {}

/**
 * MsgCreateContract is the Msg/CreateContract request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `owner` is of invalid format.
 * - ErrInvalidRequest
 *   - `name` exceeds the app-specific limit in length.
 *   - `base_img_uri` exceeds the app-specific limit in length.
 *   - `meta` exceeds the app-specific limit in length.
 *
 * Signer: `owner`
 */
export interface MsgCreateContract {
  /** address which all the permissions on the contract will be granted to (not a permanent property). */
  owner: string;
  /** name defines the human-readable name of the contract. */
  name: string;
  /** base img uri is an uri for the contract image stored off chain. */
  baseImgUri: string;
  /** meta is a brief description of the contract. */
  meta: string;
}

/** MsgCreateContractResponse is the Msg/CreateContract response type. */
export interface MsgCreateContractResponse {
  /** id of the new contract. */
  id: string;
}

/**
 * MsgCreateFTClass is the Msg/CreateFTClass request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `operator` is of invalid format.
 *   - `to` is not empty and is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `name` exceeds the app-specific limit in length.
 *   - `meta` exceeds the app-specific limit in length.
 *   - `decimals` is lesser than 0 or greater than 18.
 *   - `supply` is positive and `to` is of invalid format.
 *
 * Signer: `operator`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgCreateFTClass {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggers the create. */
  operator: string;
  /** name defines the human-readable name of the token class. */
  name: string;
  /** meta is a brief description of the token class. */
  meta: string;
  /** decimals is the number of decimals which one must divide the amount by to get its user representation. */
  decimals: number;
  /** recipient of the minted tokens. */
  to: string;
  /**
   * amount of tokens to mint on the create.
   * Note: supply may be zero.
   */
  supply: string;
}

/**
 * MsgCreateFTClassResponse is the Msg/CreateFTClass response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgCreateFTClassResponse {
  /** id of the new token class. */
  id: string;
}

/**
 * MsgCreateNFTClass is the Msg/CreateNFTClass request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `operator` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `name` exceeds the app-specific limit in length.
 *   - `meta` exceeds the app-specific limit in length.
 *
 * Signer: `operator`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgCreateNFTClass {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggers the create. */
  operator: string;
  /** name defines the human-readable name of the token class. */
  name: string;
  /** meta is a brief description of the token class. */
  meta: string;
}

/**
 * MsgCreateNFTClassResponse is the Msg/CreateNFTClass response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgCreateNFTClassResponse {
  /** id of the new token class. */
  id: string;
}

/**
 * Deprecated: use MsgCreateFTClass
 *
 * MsgIssueFT is the Msg/IssueFT request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `owner` is of invalid format.
 *   - `to` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `name` is empty.
 *   - `name` exceeds the app-specific limit in length.
 *   - `meta` exceeds the app-specific limit in length.
 *   - `decimals` is lesser than 0 or greater than 18.
 *   - `amount` is not positive.
 *   - `mintable` == false, amount == 1 and decimals == 0 (weird, but for the backward compatibility).
 *
 * Signer: `owner`
 */
export interface MsgIssueFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** name defines the human-readable name of the token class. */
  name: string;
  /** meta is a brief description of the token class. */
  meta: string;
  /** decimals is the number of decimals which one must divide the amount by to get its user representation. */
  decimals: number;
  /** mintable represents whether the token is allowed to be minted or burnt. */
  mintable: boolean;
  /** the address of the grantee which must have the permission to issue a token. */
  owner: string;
  /** the address to send the minted tokens to. mandatory. */
  to: string;
  /**
   * the amount of tokens to mint on the issuance.
   * Note: if you provide negative amount, a panic may result.
   * Note: amount may be zero.
   */
  amount: string;
}

/**
 * Deprecated: do not use
 *
 * MsgIssueFTResponse is the Msg/IssueFT response type.
 */
export interface MsgIssueFTResponse {
  /** id of the new token class. */
  id: string;
}

/**
 * Deprecated: use MsgCreateNFTClass
 *
 * MsgIssueNFT is the Msg/IssueNFT request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `owner` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `name` exceeds the app-specific limit in length.
 *   - `meta` exceeds the app-specific limit in length.
 *
 * Signer: `owner`
 */
export interface MsgIssueNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** name defines the human-readable name of the token class. */
  name: string;
  /** meta is a brief description of the token class. */
  meta: string;
  /** the address of the grantee which must have the permission to issue a token. */
  owner: string;
}

/**
 * Deprecated: do not use
 *
 * MsgIssueNFTResponse is the Msg/IssueNFT response type.
 */
export interface MsgIssueNFTResponse {
  /** id of the new token class. */
  id: string;
}

/**
 * MsgMintFT is the Msg/MintFT request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 *   - `to` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `amount` is not positive.
 *
 * Signer: `from`
 */
export interface MsgMintFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the grantee which has the permission for the mint. */
  from: string;
  /** address which the minted tokens will be sent to. */
  to: string;
  /**
   * the amount of the mint.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/** MsgMintFTResponse is the Msg/MintFT response type. */
export interface MsgMintFTResponse {}

/**
 * MsgMintNFT is the Msg/MintNFT request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 *   - `to` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `params` is empty.
 *   - `params` has an invalid element.
 *
 * Signer: `from`
 */
export interface MsgMintNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the grantee which has the permission for the mint. */
  from: string;
  /** address which the minted token will be sent to. */
  to: string;
  /** parameters for the minted tokens. */
  params: MintNFTParam[];
}

/** MsgMintNFTResponse is the Msg/MintNFT response type. */
export interface MsgMintNFTResponse {
  /** ids of the new non-fungible tokens. */
  ids: string[];
}

/** MintNFTParam defines a parameter for minting nft. */
export interface MintNFTParam {
  /**
   * token type or class id of the nft.
   * Note: it cannot start with zero.
   */
  tokenType: string;
  /**
   * name defines the human-readable name of the nft (mandatory).
   * Note: it has an app-specific limit in length.
   */
  name: string;
  /**
   * meta is a brief description of the nft.
   * Note: it has an app-specific limit in length.
   */
  meta: string;
}

/**
 * MsgBurn is the Msg/Burn request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `amount` is not positive.
 *
 * Signer: `from`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgBurn {
  /** contract id associated with the contract. */
  contractId: string;
  /** holder whose tokens are being burned. */
  from: string;
  /** amount of tokens to burn. */
  amount: Coin[];
}

/**
 * MsgBurnResponse is the Msg/Burn response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgBurnResponse {}

/**
 * MsgOperatorBurn is the Msg/OperatorBurn request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `operator` is of invalid format.
 *   - `from` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `amount` is not positive.
 *
 * Signer: `from`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgOperatorBurn {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggers the burn. */
  operator: string;
  /** holder whose tokens are being burned. */
  from: string;
  /** amount of tokens to burn. */
  amount: Coin[];
}

/**
 * MsgOperatorBurnResponse is the Msg/OperatorBurn response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgOperatorBurnResponse {}

/**
 * Deprecated: use MsgBurn
 *
 * MsgBurnFT is the Msg/BurnFT request type.
 */
export interface MsgBurnFT {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which the tokens will be burnt from.
   * Note: it must have the permission for the burn.
   */
  from: string;
  /**
   * the amount of the burn.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/**
 * Deprecated: do not use
 *
 * MsgBurnFTResponse is the Msg/BurnFT response type.
 */
export interface MsgBurnFTResponse {}

/**
 * Deprecated: use MsgOperatorBurn
 *
 * MsgBurnFTFrom is the Msg/BurnFTFrom request type.
 */
export interface MsgBurnFTFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which triggers the burn.
   * Note: it must have the permission for the burn.
   * Note: it must have been authorized by from.
   */
  proxy: string;
  /** address which the tokens will be burnt from. */
  from: string;
  /**
   * the amount of the burn.
   * Note: amount may be empty.
   */
  amount: Coin[];
}

/**
 * Deprecated: do not use
 *
 * MsgBurnFTFromResponse is the Msg/BurnFTFrom response type.
 */
export interface MsgBurnFTFromResponse {}

/**
 * Deprecated: use MsgBurn
 *
 * MsgBurnNFT is the Msg/BurnNFT request type.
 */
export interface MsgBurnNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which the tokens will be burnt from.
   * Note: it must have the permission for the burn.
   */
  from: string;
  /**
   * the token ids to burn.
   * Note: id cannot start with zero.
   */
  tokenIds: string[];
}

/**
 * Deprecated: do not use
 *
 * MsgBurnNFTResponse is the Msg/BurnNFT response type.
 */
export interface MsgBurnNFTResponse {}

/**
 * Deprecated: use MsgOperatorBurn
 *
 * MsgBurnNFTFrom is the Msg/BurnNFTFrom request type.
 */
export interface MsgBurnNFTFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /**
   * address which triggers the burn.
   * Note: it must have the permission for the burn.
   * Note: it must have been authorized by from.
   */
  proxy: string;
  /** address which the tokens will be burnt from. */
  from: string;
  /**
   * the token ids to burn.
   * Note: id cannot start with zero.
   */
  tokenIds: string[];
}

/**
 * Deprecated: do not use
 *
 * MsgBurnNFTFromResponse is the Msg/BurnNFTFrom response type.
 */
export interface MsgBurnNFTFromResponse {}

/**
 * MsgModifyContract is the Msg/ModifyContract request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `operator` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `changes` has duplicate keys.
 *   - `changes` has a key which is not allowed to modify.
 *   - `changes` is empty.
 *
 * Signer: `operator`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgModifyContract {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggers the modify. */
  operator: string;
  /** attributes to apply. */
  changes: Attribute[];
}

/**
 * MsgModifyContractResponse is the Msg/ModifyContract response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgModifyContractResponse {}

/**
 * MsgModifyTokenClass is the Msg/ModifyTokenClass request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `operator` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `class_id` is of invalid format.
 *   - `changes` has duplicate keys.
 *   - `changes` has a key which is not allowed to modify.
 *   - `changes` is empty.
 *
 * Signer: `operator`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgModifyTokenClass {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggers the modify. */
  operator: string;
  /** class id associated with the token class. */
  classId: string;
  /** attributes to apply. */
  changes: Attribute[];
}

/**
 * MsgModifyTokenClassResponse is the Msg/ModifyTokenClass response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgModifyTokenClassResponse {}

/**
 * MsgModifyNFT is the Msg/ModifyNFT request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `operator` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `token_id` is of invalid format.
 *   - `changes` has duplicate keys.
 *   - `changes` has a key which is not allowed to modify.
 *   - `changes` is empty.
 *
 * Signer: `operator`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgModifyNFT {
  /** contract id associated with the contract. */
  contractId: string;
  /** address which triggers the modify. */
  operator: string;
  /** token id associated with the non-fungible token. */
  tokenId: string;
  /** attributes to apply. */
  changes: Attribute[];
}

/**
 * MsgModifyNFTResponse is the Msg/ModifyNFT response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgModifyNFTResponse {}

/**
 * Deprecated: use MsgModifyContract, MsgModifyTokenClass or MsgModifyNFT
 *
 * MsgModify is the Msg/Modify request type.
 */
export interface MsgModify {
  /** contract id associated with the contract. */
  contractId: string;
  /** the address of the grantee which must have modify permission. */
  owner: string;
  /** token type of the token. */
  tokenType: string;
  /**
   * token index of the token.
   * if index is empty, it would modify the corresponding token type.
   * if index is not empty, it would modify the corresponding nft.
   * Note: if token type is of FTs, the index cannot be empty.
   */
  tokenIndex: string;
  /**
   * changes to apply.
   * on modifying collection: name, base_img_uri, meta.
   * on modifying token type and token: name, meta.
   */
  changes: Change[];
}

/**
 * Deprecated: do not use
 *
 * MsgModifyResponse is the Msg/Modify response type.
 */
export interface MsgModifyResponse {}

/**
 * MsgGrant is the Msg/Grant request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `granter` is of invalid format.
 *   - `grantee` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `permission` is not a valid permission.
 *
 * Signer: `granter`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgGrant {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the granter which must have the permission to give. */
  granter: string;
  /** address of the grantee. */
  grantee: string;
  /** permission on the contract. */
  permission: Permission;
}

/**
 * MsgGrantResponse is the Msg/Grant response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgGrantResponse {}

/**
 * MsgAbandon is the Msg/Abandon request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `grantee` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `permission` is not a valid permission.
 *
 * Signer: `grantee`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgAbandon {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the grantee which abandons the permission. */
  grantee: string;
  /** permission on the contract. */
  permission: Permission;
}

/**
 * MsgAbandonResponse is the Msg/Abandon response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgAbandonResponse {}

/**
 * Deprecated: use MsgGrant
 *
 * MsgGrantPermission is the Msg/GrantPermission request type.
 */
export interface MsgGrantPermission {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the granter which must have the permission to give. */
  from: string;
  /** address of the grantee. */
  to: string;
  /** permission on the contract. */
  permission: string;
}

/**
 * Deprecated: do not use
 *
 * MsgGrantPermissionResponse is the Msg/GrantPermission response type.
 */
export interface MsgGrantPermissionResponse {}

/**
 * Deprecated: use MsgAbandon
 *
 * MsgRevokePermission is the Msg/RevokePermission request type.
 */
export interface MsgRevokePermission {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the grantee which abandons the permission. */
  from: string;
  /** permission on the contract. */
  permission: string;
}

/**
 * Deprecated: do not use
 *
 * MsgRevokePermissionResponse is the Msg/RevokePermission response type.
 */
export interface MsgRevokePermissionResponse {}

/**
 * MsgAttach is the Msg/Attach request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `token_id` is of invalid format.
 *   - `to_token_id` is of invalid format.
 *   - `token_id` is equal to `to_token_id`.
 *
 * Signer: `from`
 *
 * TODO: revisit the field names
 */
export interface MsgAttach {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to attach. */
  tokenId: string;
  /** to token id which one attachs the token to. */
  toTokenId: string;
}

/** MsgAttachResponse is the Msg/Attach response type. */
export interface MsgAttachResponse {}

/**
 * MsgDetach is the Msg/Detach request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `from` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `token_id` is of invalid format.
 *
 * Signer: `from`
 *
 * TODO: revisit the field names
 */
export interface MsgDetach {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to detach. */
  tokenId: string;
}

/** MsgDetachResponse is the Msg/Detach response type. */
export interface MsgDetachResponse {}

/**
 * MsgOperatorAttach is the Msg/OperatorAttach request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `operator` is of invalid format.
 *   - `owner` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `subject` is of invalid format.
 *   - `target` is of invalid format.
 *   - `subject` is equal to `target`.
 *
 * Signer: `operator`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgOperatorAttach {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator. */
  operator: string;
  /** address of the owner of the token. */
  owner: string;
  /** token id of the token to attach. */
  subject: string;
  /** token id which one attachs the token to. */
  target: string;
}

/**
 * MsgOperatorAttachResponse is the Msg/OperatorAttach response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgOperatorAttachResponse {}

/**
 * MsgOperatorDetach is the Msg/OperatorDetach request type.
 *
 * Throws:
 * - ErrInvalidAddress
 *   - `operator` is of invalid format.
 *   - `owner` is of invalid format.
 * - ErrInvalidRequest
 *   - `contract_id` is of invalid format.
 *   - `subject` is of invalid format.
 *
 * Signer: `operator`
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgOperatorDetach {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator. */
  operator: string;
  /** address of the holder of the token. */
  owner: string;
  /** token id of the token to detach. */
  subject: string;
}

/**
 * MsgOperatorDetachResponse is the Msg/OperatorDetach response type.
 *
 * Since: 0.46.0 (finschia)
 */
export interface MsgOperatorDetachResponse {}

/**
 * Deprecated: use MsgOperatorAttach
 *
 * MsgAttachFrom is the Msg/AttachFrom request type.
 */
export interface MsgAttachFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator. */
  proxy: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to attach. */
  tokenId: string;
  /** to token id which one attachs the token to. */
  toTokenId: string;
}

/**
 * Deprecated: do not use
 *
 * MsgAttachFromResponse is the Msg/AttachFrom response type.
 */
export interface MsgAttachFromResponse {}

/**
 * Deprecated: use MsgOperatorDetach
 *
 * MsgDetachFrom is the Msg/DetachFrom request type.
 */
export interface MsgDetachFrom {
  /** contract id associated with the contract. */
  contractId: string;
  /** address of the operator. */
  proxy: string;
  /** address of the owner of the token. */
  from: string;
  /** token id of the token to detach. */
  tokenId: string;
}

/**
 * Deprecated: do not use
 *
 * MsgDetachFromResponse is the Msg/DetachFrom response type.
 */
export interface MsgDetachFromResponse {}

function createBaseMsgSend(): MsgSend {
  return { contractId: "", from: "", to: "", amount: [] };
}

export const MsgSend = {
  encode(
    message: MsgSend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
    const message = createBaseMsgSend();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}

export const MsgSendResponse = {
  encode(
    _: MsgSendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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

  fromJSON(_: any): MsgSendResponse {
    return {};
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(
    _: I
  ): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
};

function createBaseMsgOperatorSend(): MsgOperatorSend {
  return { contractId: "", operator: "", from: "", to: "", amount: [] };
}

export const MsgOperatorSend = {
  encode(
    message: MsgOperatorSend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorSend {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgOperatorSend): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorSend>, I>>(
    object: I
  ): MsgOperatorSend {
    const message = createBaseMsgOperatorSend();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgOperatorSendResponse(): MsgOperatorSendResponse {
  return {};
}

export const MsgOperatorSendResponse = {
  encode(
    _: MsgOperatorSendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorSendResponse();
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

  fromJSON(_: any): MsgOperatorSendResponse {
    return {};
  },

  toJSON(_: MsgOperatorSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorSendResponse>, I>>(
    _: I
  ): MsgOperatorSendResponse {
    const message = createBaseMsgOperatorSendResponse();
    return message;
  },
};

function createBaseMsgTransferFT(): MsgTransferFT {
  return { contractId: "", from: "", to: "", amount: [] };
}

export const MsgTransferFT = {
  encode(
    message: MsgTransferFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgTransferFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferFT>, I>>(
    object: I
  ): MsgTransferFT {
    const message = createBaseMsgTransferFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgTransferFTResponse(): MsgTransferFTResponse {
  return {};
}

export const MsgTransferFTResponse = {
  encode(
    _: MsgTransferFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFTResponse();
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

  fromJSON(_: any): MsgTransferFTResponse {
    return {};
  },

  toJSON(_: MsgTransferFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferFTResponse>, I>>(
    _: I
  ): MsgTransferFTResponse {
    const message = createBaseMsgTransferFTResponse();
    return message;
  },
};

function createBaseMsgTransferFTFrom(): MsgTransferFTFrom {
  return { contractId: "", proxy: "", from: "", to: "", amount: [] };
}

export const MsgTransferFTFrom = {
  encode(
    message: MsgTransferFTFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferFTFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFTFrom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.proxy = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferFTFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgTransferFTFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferFTFrom>, I>>(
    object: I
  ): MsgTransferFTFrom {
    const message = createBaseMsgTransferFTFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgTransferFTFromResponse(): MsgTransferFTFromResponse {
  return {};
}

export const MsgTransferFTFromResponse = {
  encode(
    _: MsgTransferFTFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferFTFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferFTFromResponse();
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

  fromJSON(_: any): MsgTransferFTFromResponse {
    return {};
  },

  toJSON(_: MsgTransferFTFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferFTFromResponse>, I>>(
    _: I
  ): MsgTransferFTFromResponse {
    const message = createBaseMsgTransferFTFromResponse();
    return message;
  },
};

function createBaseMsgTransferNFT(): MsgTransferNFT {
  return { contractId: "", from: "", to: "", tokenIds: [] };
}

export const MsgTransferNFT = {
  encode(
    message: MsgTransferNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.tokenIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgTransferNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFT>, I>>(
    object: I
  ): MsgTransferNFT {
    const message = createBaseMsgTransferNFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgTransferNFTResponse(): MsgTransferNFTResponse {
  return {};
}

export const MsgTransferNFTResponse = {
  encode(
    _: MsgTransferNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTResponse();
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

  fromJSON(_: any): MsgTransferNFTResponse {
    return {};
  },

  toJSON(_: MsgTransferNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTResponse>, I>>(
    _: I
  ): MsgTransferNFTResponse {
    const message = createBaseMsgTransferNFTResponse();
    return message;
  },
};

function createBaseMsgTransferNFTFrom(): MsgTransferNFTFrom {
  return { contractId: "", proxy: "", from: "", to: "", tokenIds: [] };
}

export const MsgTransferNFTFrom = {
  encode(
    message: MsgTransferNFTFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    for (const v of message.tokenIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFTFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTFrom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.proxy = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferNFTFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgTransferNFTFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTFrom>, I>>(
    object: I
  ): MsgTransferNFTFrom {
    const message = createBaseMsgTransferNFTFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgTransferNFTFromResponse(): MsgTransferNFTFromResponse {
  return {};
}

export const MsgTransferNFTFromResponse = {
  encode(
    _: MsgTransferNFTFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferNFTFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTFromResponse();
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

  fromJSON(_: any): MsgTransferNFTFromResponse {
    return {};
  },

  toJSON(_: MsgTransferNFTFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTFromResponse>, I>>(
    _: I
  ): MsgTransferNFTFromResponse {
    const message = createBaseMsgTransferNFTFromResponse();
    return message;
  },
};

function createBaseMsgAuthorizeOperator(): MsgAuthorizeOperator {
  return { contractId: "", holder: "", operator: "" };
}

export const MsgAuthorizeOperator = {
  encode(
    message: MsgAuthorizeOperator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.holder !== "") {
      writer.uint32(18).string(message.holder);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAuthorizeOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.holder = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAuthorizeOperator {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: MsgAuthorizeOperator): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.holder !== undefined && (obj.holder = message.holder);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAuthorizeOperator>, I>>(
    object: I
  ): MsgAuthorizeOperator {
    const message = createBaseMsgAuthorizeOperator();
    message.contractId = object.contractId ?? "";
    message.holder = object.holder ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseMsgAuthorizeOperatorResponse(): MsgAuthorizeOperatorResponse {
  return {};
}

export const MsgAuthorizeOperatorResponse = {
  encode(
    _: MsgAuthorizeOperatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAuthorizeOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeOperatorResponse();
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

  fromJSON(_: any): MsgAuthorizeOperatorResponse {
    return {};
  },

  toJSON(_: MsgAuthorizeOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAuthorizeOperatorResponse>, I>>(
    _: I
  ): MsgAuthorizeOperatorResponse {
    const message = createBaseMsgAuthorizeOperatorResponse();
    return message;
  },
};

function createBaseMsgRevokeOperator(): MsgRevokeOperator {
  return { contractId: "", holder: "", operator: "" };
}

export const MsgRevokeOperator = {
  encode(
    message: MsgRevokeOperator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.holder !== "") {
      writer.uint32(18).string(message.holder);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.holder = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeOperator {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      holder: isSet(object.holder) ? String(object.holder) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
    };
  },

  toJSON(message: MsgRevokeOperator): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.holder !== undefined && (obj.holder = message.holder);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeOperator>, I>>(
    object: I
  ): MsgRevokeOperator {
    const message = createBaseMsgRevokeOperator();
    message.contractId = object.contractId ?? "";
    message.holder = object.holder ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
};

function createBaseMsgRevokeOperatorResponse(): MsgRevokeOperatorResponse {
  return {};
}

export const MsgRevokeOperatorResponse = {
  encode(
    _: MsgRevokeOperatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeOperatorResponse();
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

  fromJSON(_: any): MsgRevokeOperatorResponse {
    return {};
  },

  toJSON(_: MsgRevokeOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeOperatorResponse>, I>>(
    _: I
  ): MsgRevokeOperatorResponse {
    const message = createBaseMsgRevokeOperatorResponse();
    return message;
  },
};

function createBaseMsgApprove(): MsgApprove {
  return { contractId: "", approver: "", proxy: "" };
}

export const MsgApprove = {
  encode(
    message: MsgApprove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.approver !== "") {
      writer.uint32(18).string(message.approver);
    }
    if (message.proxy !== "") {
      writer.uint32(26).string(message.proxy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApprove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
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

  fromJSON(object: any): MsgApprove {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      approver: isSet(object.approver) ? String(object.approver) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
    };
  },

  toJSON(message: MsgApprove): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.approver !== undefined && (obj.approver = message.approver);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApprove>, I>>(
    object: I
  ): MsgApprove {
    const message = createBaseMsgApprove();
    message.contractId = object.contractId ?? "";
    message.approver = object.approver ?? "";
    message.proxy = object.proxy ?? "";
    return message;
  },
};

function createBaseMsgApproveResponse(): MsgApproveResponse {
  return {};
}

export const MsgApproveResponse = {
  encode(
    _: MsgApproveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveResponse();
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

  fromJSON(_: any): MsgApproveResponse {
    return {};
  },

  toJSON(_: MsgApproveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveResponse>, I>>(
    _: I
  ): MsgApproveResponse {
    const message = createBaseMsgApproveResponse();
    return message;
  },
};

function createBaseMsgDisapprove(): MsgDisapprove {
  return { contractId: "", approver: "", proxy: "" };
}

export const MsgDisapprove = {
  encode(
    message: MsgDisapprove,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.approver !== "") {
      writer.uint32(18).string(message.approver);
    }
    if (message.proxy !== "") {
      writer.uint32(26).string(message.proxy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisapprove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisapprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
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

  fromJSON(object: any): MsgDisapprove {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      approver: isSet(object.approver) ? String(object.approver) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
    };
  },

  toJSON(message: MsgDisapprove): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.approver !== undefined && (obj.approver = message.approver);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisapprove>, I>>(
    object: I
  ): MsgDisapprove {
    const message = createBaseMsgDisapprove();
    message.contractId = object.contractId ?? "";
    message.approver = object.approver ?? "";
    message.proxy = object.proxy ?? "";
    return message;
  },
};

function createBaseMsgDisapproveResponse(): MsgDisapproveResponse {
  return {};
}

export const MsgDisapproveResponse = {
  encode(
    _: MsgDisapproveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisapproveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisapproveResponse();
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

  fromJSON(_: any): MsgDisapproveResponse {
    return {};
  },

  toJSON(_: MsgDisapproveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisapproveResponse>, I>>(
    _: I
  ): MsgDisapproveResponse {
    const message = createBaseMsgDisapproveResponse();
    return message;
  },
};

function createBaseMsgCreateContract(): MsgCreateContract {
  return { owner: "", name: "", baseImgUri: "", meta: "" };
}

export const MsgCreateContract = {
  encode(
    message: MsgCreateContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.baseImgUri !== "") {
      writer.uint32(26).string(message.baseImgUri);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.baseImgUri = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateContract {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      baseImgUri: isSet(object.baseImgUri) ? String(object.baseImgUri) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: MsgCreateContract): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.baseImgUri !== undefined && (obj.baseImgUri = message.baseImgUri);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateContract>, I>>(
    object: I
  ): MsgCreateContract {
    const message = createBaseMsgCreateContract();
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.baseImgUri = object.baseImgUri ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseMsgCreateContractResponse(): MsgCreateContractResponse {
  return { id: "" };
}

export const MsgCreateContractResponse = {
  encode(
    message: MsgCreateContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateContractResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgCreateContractResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateContractResponse>, I>>(
    object: I
  ): MsgCreateContractResponse {
    const message = createBaseMsgCreateContractResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgCreateFTClass(): MsgCreateFTClass {
  return {
    contractId: "",
    operator: "",
    name: "",
    meta: "",
    decimals: 0,
    to: "",
    supply: "",
  };
}

export const MsgCreateFTClass = {
  encode(
    message: MsgCreateFTClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    if (message.decimals !== 0) {
      writer.uint32(40).int32(message.decimals);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.supply !== "") {
      writer.uint32(58).string(message.supply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFTClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFTClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        case 5:
          message.decimals = reader.int32();
          break;
        case 6:
          message.to = reader.string();
          break;
        case 7:
          message.supply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFTClass {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      to: isSet(object.to) ? String(object.to) : "",
      supply: isSet(object.supply) ? String(object.supply) : "",
    };
  },

  toJSON(message: MsgCreateFTClass): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.to !== undefined && (obj.to = message.to);
    message.supply !== undefined && (obj.supply = message.supply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFTClass>, I>>(
    object: I
  ): MsgCreateFTClass {
    const message = createBaseMsgCreateFTClass();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.decimals = object.decimals ?? 0;
    message.to = object.to ?? "";
    message.supply = object.supply ?? "";
    return message;
  },
};

function createBaseMsgCreateFTClassResponse(): MsgCreateFTClassResponse {
  return { id: "" };
}

export const MsgCreateFTClassResponse = {
  encode(
    message: MsgCreateFTClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateFTClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFTClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFTClassResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgCreateFTClassResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFTClassResponse>, I>>(
    object: I
  ): MsgCreateFTClassResponse {
    const message = createBaseMsgCreateFTClassResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgCreateNFTClass(): MsgCreateNFTClass {
  return { contractId: "", operator: "", name: "", meta: "" };
}

export const MsgCreateNFTClass = {
  encode(
    message: MsgCreateNFTClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(34).string(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNFTClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNFTClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.meta = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNFTClass {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: MsgCreateNFTClass): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateNFTClass>, I>>(
    object: I
  ): MsgCreateNFTClass {
    const message = createBaseMsgCreateNFTClass();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseMsgCreateNFTClassResponse(): MsgCreateNFTClassResponse {
  return { id: "" };
}

export const MsgCreateNFTClassResponse = {
  encode(
    message: MsgCreateNFTClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateNFTClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNFTClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNFTClassResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgCreateNFTClassResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateNFTClassResponse>, I>>(
    object: I
  ): MsgCreateNFTClassResponse {
    const message = createBaseMsgCreateNFTClassResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgIssueFT(): MsgIssueFT {
  return {
    contractId: "",
    name: "",
    meta: "",
    decimals: 0,
    mintable: false,
    owner: "",
    to: "",
    amount: "",
  };
}

export const MsgIssueFT = {
  encode(
    message: MsgIssueFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    if (message.decimals !== 0) {
      writer.uint32(32).int32(message.decimals);
    }
    if (message.mintable === true) {
      writer.uint32(40).bool(message.mintable);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    if (message.to !== "") {
      writer.uint32(58).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(66).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        case 4:
          message.decimals = reader.int32();
          break;
        case 5:
          message.mintable = reader.bool();
          break;
        case 6:
          message.owner = reader.string();
          break;
        case 7:
          message.to = reader.string();
          break;
        case 8:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgIssueFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.decimals !== undefined &&
      (obj.decimals = Math.round(message.decimals));
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.owner !== undefined && (obj.owner = message.owner);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueFT>, I>>(
    object: I
  ): MsgIssueFT {
    const message = createBaseMsgIssueFT();
    message.contractId = object.contractId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.decimals = object.decimals ?? 0;
    message.mintable = object.mintable ?? false;
    message.owner = object.owner ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgIssueFTResponse(): MsgIssueFTResponse {
  return { id: "" };
}

export const MsgIssueFTResponse = {
  encode(
    message: MsgIssueFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueFTResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgIssueFTResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueFTResponse>, I>>(
    object: I
  ): MsgIssueFTResponse {
    const message = createBaseMsgIssueFTResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgIssueNFT(): MsgIssueNFT {
  return { contractId: "", name: "", meta: "", owner: "" };
}

export const MsgIssueNFT = {
  encode(
    message: MsgIssueNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgIssueNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueNFT>, I>>(
    object: I
  ): MsgIssueNFT {
    const message = createBaseMsgIssueNFT();
    message.contractId = object.contractId ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgIssueNFTResponse(): MsgIssueNFTResponse {
  return { id: "" };
}

export const MsgIssueNFTResponse = {
  encode(
    message: MsgIssueNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueNFTResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgIssueNFTResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueNFTResponse>, I>>(
    object: I
  ): MsgIssueNFTResponse {
    const message = createBaseMsgIssueNFTResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgMintFT(): MsgMintFT {
  return { contractId: "", from: "", to: "", amount: [] };
}

export const MsgMintFT = {
  encode(
    message: MsgMintFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgMintFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintFT>, I>>(
    object: I
  ): MsgMintFT {
    const message = createBaseMsgMintFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgMintFTResponse(): MsgMintFTResponse {
  return {};
}

export const MsgMintFTResponse = {
  encode(
    _: MsgMintFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintFTResponse();
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

  fromJSON(_: any): MsgMintFTResponse {
    return {};
  },

  toJSON(_: MsgMintFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintFTResponse>, I>>(
    _: I
  ): MsgMintFTResponse {
    const message = createBaseMsgMintFTResponse();
    return message;
  },
};

function createBaseMsgMintNFT(): MsgMintNFT {
  return { contractId: "", from: "", to: "", params: [] };
}

export const MsgMintNFT = {
  encode(
    message: MsgMintNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    for (const v of message.params) {
      MintNFTParam.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.params.push(MintNFTParam.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      params: Array.isArray(object?.params)
        ? object.params.map((e: any) => MintNFTParam.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    if (message.params) {
      obj.params = message.params.map((e) =>
        e ? MintNFTParam.toJSON(e) : undefined
      );
    } else {
      obj.params = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFT>, I>>(
    object: I
  ): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.params =
      object.params?.map((e) => MintNFTParam.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return { ids: [] };
}

export const MsgMintNFTResponse = {
  encode(
    message: MsgMintNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFTResponse {
    return {
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgMintNFTResponse): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTResponse>, I>>(
    object: I
  ): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseMintNFTParam(): MintNFTParam {
  return { tokenType: "", name: "", meta: "" };
}

export const MintNFTParam = {
  encode(
    message: MintNFTParam,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenType !== "") {
      writer.uint32(10).string(message.tokenType);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.meta !== "") {
      writer.uint32(26).string(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintNFTParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintNFTParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenType = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.meta = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintNFTParam {
    return {
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
      name: isSet(object.name) ? String(object.name) : "",
      meta: isSet(object.meta) ? String(object.meta) : "",
    };
  },

  toJSON(message: MintNFTParam): unknown {
    const obj: any = {};
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.name !== undefined && (obj.name = message.name);
    message.meta !== undefined && (obj.meta = message.meta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MintNFTParam>, I>>(
    object: I
  ): MintNFTParam {
    const message = createBaseMintNFTParam();
    message.tokenType = object.tokenType ?? "";
    message.name = object.name ?? "";
    message.meta = object.meta ?? "";
    return message;
  },
};

function createBaseMsgBurn(): MsgBurn {
  return { contractId: "", from: "", amount: [] };
}

export const MsgBurn = {
  encode(
    message: MsgBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}

export const MsgBurnResponse = {
  encode(
    _: MsgBurnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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

  fromJSON(_: any): MsgBurnResponse {
    return {};
  },

  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(
    _: I
  ): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
};

function createBaseMsgOperatorBurn(): MsgOperatorBurn {
  return { contractId: "", operator: "", from: "", amount: [] };
}

export const MsgOperatorBurn = {
  encode(
    message: MsgOperatorBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorBurn {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgOperatorBurn): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.from !== undefined && (obj.from = message.from);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorBurn>, I>>(
    object: I
  ): MsgOperatorBurn {
    const message = createBaseMsgOperatorBurn();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgOperatorBurnResponse(): MsgOperatorBurnResponse {
  return {};
}

export const MsgOperatorBurnResponse = {
  encode(
    _: MsgOperatorBurnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorBurnResponse();
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

  fromJSON(_: any): MsgOperatorBurnResponse {
    return {};
  },

  toJSON(_: MsgOperatorBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorBurnResponse>, I>>(
    _: I
  ): MsgOperatorBurnResponse {
    const message = createBaseMsgOperatorBurnResponse();
    return message;
  },
};

function createBaseMsgBurnFT(): MsgBurnFT {
  return { contractId: "", from: "", amount: [] };
}

export const MsgBurnFT = {
  encode(
    message: MsgBurnFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgBurnFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFT>, I>>(
    object: I
  ): MsgBurnFT {
    const message = createBaseMsgBurnFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgBurnFTResponse(): MsgBurnFTResponse {
  return {};
}

export const MsgBurnFTResponse = {
  encode(
    _: MsgBurnFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFTResponse();
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

  fromJSON(_: any): MsgBurnFTResponse {
    return {};
  },

  toJSON(_: MsgBurnFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFTResponse>, I>>(
    _: I
  ): MsgBurnFTResponse {
    const message = createBaseMsgBurnFTResponse();
    return message;
  },
};

function createBaseMsgBurnFTFrom(): MsgBurnFTFrom {
  return { contractId: "", proxy: "", from: "", amount: [] };
}

export const MsgBurnFTFrom = {
  encode(
    message: MsgBurnFTFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFTFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFTFrom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.proxy = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnFTFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgBurnFTFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFTFrom>, I>>(
    object: I
  ): MsgBurnFTFrom {
    const message = createBaseMsgBurnFTFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgBurnFTFromResponse(): MsgBurnFTFromResponse {
  return {};
}

export const MsgBurnFTFromResponse = {
  encode(
    _: MsgBurnFTFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBurnFTFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnFTFromResponse();
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

  fromJSON(_: any): MsgBurnFTFromResponse {
    return {};
  },

  toJSON(_: MsgBurnFTFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnFTFromResponse>, I>>(
    _: I
  ): MsgBurnFTFromResponse {
    const message = createBaseMsgBurnFTFromResponse();
    return message;
  },
};

function createBaseMsgBurnNFT(): MsgBurnNFT {
  return { contractId: "", from: "", tokenIds: [] };
}

export const MsgBurnNFT = {
  encode(
    message: MsgBurnNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    for (const v of message.tokenIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgBurnNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFT>, I>>(
    object: I
  ): MsgBurnNFT {
    const message = createBaseMsgBurnNFT();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}

export const MsgBurnNFTResponse = {
  encode(
    _: MsgBurnNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTResponse();
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

  fromJSON(_: any): MsgBurnNFTResponse {
    return {};
  },

  toJSON(_: MsgBurnNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFTResponse>, I>>(
    _: I
  ): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  },
};

function createBaseMsgBurnNFTFrom(): MsgBurnNFTFrom {
  return { contractId: "", proxy: "", from: "", tokenIds: [] };
}

export const MsgBurnNFTFrom = {
  encode(
    message: MsgBurnNFTFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    for (const v of message.tokenIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTFrom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.proxy = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.tokenIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnNFTFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenIds: Array.isArray(object?.tokenIds)
        ? object.tokenIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgBurnNFTFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    if (message.tokenIds) {
      obj.tokenIds = message.tokenIds.map((e) => e);
    } else {
      obj.tokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFTFrom>, I>>(
    object: I
  ): MsgBurnNFTFrom {
    const message = createBaseMsgBurnNFTFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.tokenIds = object.tokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgBurnNFTFromResponse(): MsgBurnNFTFromResponse {
  return {};
}

export const MsgBurnNFTFromResponse = {
  encode(
    _: MsgBurnNFTFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBurnNFTFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTFromResponse();
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

  fromJSON(_: any): MsgBurnNFTFromResponse {
    return {};
  },

  toJSON(_: MsgBurnNFTFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFTFromResponse>, I>>(
    _: I
  ): MsgBurnNFTFromResponse {
    const message = createBaseMsgBurnNFTFromResponse();
    return message;
  },
};

function createBaseMsgModifyContract(): MsgModifyContract {
  return { contractId: "", operator: "", changes: [] };
}

export const MsgModifyContract = {
  encode(
    message: MsgModifyContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    for (const v of message.changes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.changes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgModifyContract {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgModifyContract): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModifyContract>, I>>(
    object: I
  ): MsgModifyContract {
    const message = createBaseMsgModifyContract();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.changes =
      object.changes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgModifyContractResponse(): MsgModifyContractResponse {
  return {};
}

export const MsgModifyContractResponse = {
  encode(
    _: MsgModifyContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgModifyContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyContractResponse();
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

  fromJSON(_: any): MsgModifyContractResponse {
    return {};
  },

  toJSON(_: MsgModifyContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModifyContractResponse>, I>>(
    _: I
  ): MsgModifyContractResponse {
    const message = createBaseMsgModifyContractResponse();
    return message;
  },
};

function createBaseMsgModifyTokenClass(): MsgModifyTokenClass {
  return { contractId: "", operator: "", classId: "", changes: [] };
}

export const MsgModifyTokenClass = {
  encode(
    message: MsgModifyTokenClass,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }
    for (const v of message.changes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyTokenClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyTokenClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.classId = reader.string();
          break;
        case 4:
          message.changes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgModifyTokenClass {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgModifyTokenClass): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.classId !== undefined && (obj.classId = message.classId);
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModifyTokenClass>, I>>(
    object: I
  ): MsgModifyTokenClass {
    const message = createBaseMsgModifyTokenClass();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.classId = object.classId ?? "";
    message.changes =
      object.changes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgModifyTokenClassResponse(): MsgModifyTokenClassResponse {
  return {};
}

export const MsgModifyTokenClassResponse = {
  encode(
    _: MsgModifyTokenClassResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgModifyTokenClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyTokenClassResponse();
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

  fromJSON(_: any): MsgModifyTokenClassResponse {
    return {};
  },

  toJSON(_: MsgModifyTokenClassResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModifyTokenClassResponse>, I>>(
    _: I
  ): MsgModifyTokenClassResponse {
    const message = createBaseMsgModifyTokenClassResponse();
    return message;
  },
};

function createBaseMsgModifyNFT(): MsgModifyNFT {
  return { contractId: "", operator: "", tokenId: "", changes: [] };
}

export const MsgModifyNFT = {
  encode(
    message: MsgModifyNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    for (const v of message.changes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.changes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgModifyNFT {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgModifyNFT): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModifyNFT>, I>>(
    object: I
  ): MsgModifyNFT {
    const message = createBaseMsgModifyNFT();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.tokenId = object.tokenId ?? "";
    message.changes =
      object.changes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgModifyNFTResponse(): MsgModifyNFTResponse {
  return {};
}

export const MsgModifyNFTResponse = {
  encode(
    _: MsgModifyNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgModifyNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyNFTResponse();
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

  fromJSON(_: any): MsgModifyNFTResponse {
    return {};
  },

  toJSON(_: MsgModifyNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModifyNFTResponse>, I>>(
    _: I
  ): MsgModifyNFTResponse {
    const message = createBaseMsgModifyNFTResponse();
    return message;
  },
};

function createBaseMsgModify(): MsgModify {
  return {
    contractId: "",
    owner: "",
    tokenType: "",
    tokenIndex: "",
    changes: [],
  };
}

export const MsgModify = {
  encode(
    message: MsgModify,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.tokenType !== "") {
      writer.uint32(26).string(message.tokenType);
    }
    if (message.tokenIndex !== "") {
      writer.uint32(34).string(message.tokenIndex);
    }
    for (const v of message.changes) {
      Change.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModify {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.tokenType = reader.string();
          break;
        case 4:
          message.tokenIndex = reader.string();
          break;
        case 5:
          message.changes.push(Change.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgModify {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
      tokenIndex: isSet(object.tokenIndex) ? String(object.tokenIndex) : "",
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => Change.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgModify): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.tokenIndex !== undefined && (obj.tokenIndex = message.tokenIndex);
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? Change.toJSON(e) : undefined
      );
    } else {
      obj.changes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModify>, I>>(
    object: I
  ): MsgModify {
    const message = createBaseMsgModify();
    message.contractId = object.contractId ?? "";
    message.owner = object.owner ?? "";
    message.tokenType = object.tokenType ?? "";
    message.tokenIndex = object.tokenIndex ?? "";
    message.changes = object.changes?.map((e) => Change.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgModifyResponse(): MsgModifyResponse {
  return {};
}

export const MsgModifyResponse = {
  encode(
    _: MsgModifyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyResponse();
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

  fromJSON(_: any): MsgModifyResponse {
    return {};
  },

  toJSON(_: MsgModifyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgModifyResponse>, I>>(
    _: I
  ): MsgModifyResponse {
    const message = createBaseMsgModifyResponse();
    return message;
  },
};

function createBaseMsgGrant(): MsgGrant {
  return { contractId: "", granter: "", grantee: "", permission: 0 };
}

export const MsgGrant = {
  encode(
    message: MsgGrant,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    if (message.permission !== 0) {
      writer.uint32(32).int32(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.grantee = reader.string();
          break;
        case 4:
          message.permission = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGrant {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permission: isSet(object.permission)
        ? permissionFromJSON(object.permission)
        : 0,
    };
  },

  toJSON(message: MsgGrant): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permission !== undefined &&
      (obj.permission = permissionToJSON(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrant>, I>>(object: I): MsgGrant {
    const message = createBaseMsgGrant();
    message.contractId = object.contractId ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}

export const MsgGrantResponse = {
  encode(
    _: MsgGrantResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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

  fromJSON(_: any): MsgGrantResponse {
    return {};
  },

  toJSON(_: MsgGrantResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantResponse>, I>>(
    _: I
  ): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
};

function createBaseMsgAbandon(): MsgAbandon {
  return { contractId: "", grantee: "", permission: 0 };
}

export const MsgAbandon = {
  encode(
    message: MsgAbandon,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.permission !== 0) {
      writer.uint32(24).int32(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAbandon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbandon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.permission = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAbandon {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permission: isSet(object.permission)
        ? permissionFromJSON(object.permission)
        : 0,
    };
  },

  toJSON(message: MsgAbandon): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permission !== undefined &&
      (obj.permission = permissionToJSON(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAbandon>, I>>(
    object: I
  ): MsgAbandon {
    const message = createBaseMsgAbandon();
    message.contractId = object.contractId ?? "";
    message.grantee = object.grantee ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBaseMsgAbandonResponse(): MsgAbandonResponse {
  return {};
}

export const MsgAbandonResponse = {
  encode(
    _: MsgAbandonResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAbandonResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbandonResponse();
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

  fromJSON(_: any): MsgAbandonResponse {
    return {};
  },

  toJSON(_: MsgAbandonResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAbandonResponse>, I>>(
    _: I
  ): MsgAbandonResponse {
    const message = createBaseMsgAbandonResponse();
    return message;
  },
};

function createBaseMsgGrantPermission(): MsgGrantPermission {
  return { contractId: "", from: "", to: "", permission: "" };
}

export const MsgGrantPermission = {
  encode(
    message: MsgGrantPermission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.permission !== "") {
      writer.uint32(34).string(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.permission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGrantPermission {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      permission: isSet(object.permission) ? String(object.permission) : "",
    };
  },

  toJSON(message: MsgGrantPermission): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.permission !== undefined && (obj.permission = message.permission);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantPermission>, I>>(
    object: I
  ): MsgGrantPermission {
    const message = createBaseMsgGrantPermission();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.permission = object.permission ?? "";
    return message;
  },
};

function createBaseMsgGrantPermissionResponse(): MsgGrantPermissionResponse {
  return {};
}

export const MsgGrantPermissionResponse = {
  encode(
    _: MsgGrantPermissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgGrantPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantPermissionResponse();
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

  fromJSON(_: any): MsgGrantPermissionResponse {
    return {};
  },

  toJSON(_: MsgGrantPermissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantPermissionResponse>, I>>(
    _: I
  ): MsgGrantPermissionResponse {
    const message = createBaseMsgGrantPermissionResponse();
    return message;
  },
};

function createBaseMsgRevokePermission(): MsgRevokePermission {
  return { contractId: "", from: "", permission: "" };
}

export const MsgRevokePermission = {
  encode(
    message: MsgRevokePermission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.permission !== "") {
      writer.uint32(26).string(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokePermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.permission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokePermission {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      permission: isSet(object.permission) ? String(object.permission) : "",
    };
  },

  toJSON(message: MsgRevokePermission): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.permission !== undefined && (obj.permission = message.permission);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokePermission>, I>>(
    object: I
  ): MsgRevokePermission {
    const message = createBaseMsgRevokePermission();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.permission = object.permission ?? "";
    return message;
  },
};

function createBaseMsgRevokePermissionResponse(): MsgRevokePermissionResponse {
  return {};
}

export const MsgRevokePermissionResponse = {
  encode(
    _: MsgRevokePermissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokePermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokePermissionResponse();
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

  fromJSON(_: any): MsgRevokePermissionResponse {
    return {};
  },

  toJSON(_: MsgRevokePermissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokePermissionResponse>, I>>(
    _: I
  ): MsgRevokePermissionResponse {
    const message = createBaseMsgRevokePermissionResponse();
    return message;
  },
};

function createBaseMsgAttach(): MsgAttach {
  return { contractId: "", from: "", tokenId: "", toTokenId: "" };
}

export const MsgAttach = {
  encode(
    message: MsgAttach,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.toTokenId !== "") {
      writer.uint32(34).string(message.toTokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttach {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.toTokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAttach {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      toTokenId: isSet(object.toTokenId) ? String(object.toTokenId) : "",
    };
  },

  toJSON(message: MsgAttach): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.toTokenId !== undefined && (obj.toTokenId = message.toTokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttach>, I>>(
    object: I
  ): MsgAttach {
    const message = createBaseMsgAttach();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    message.toTokenId = object.toTokenId ?? "";
    return message;
  },
};

function createBaseMsgAttachResponse(): MsgAttachResponse {
  return {};
}

export const MsgAttachResponse = {
  encode(
    _: MsgAttachResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttachResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttachResponse();
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

  fromJSON(_: any): MsgAttachResponse {
    return {};
  },

  toJSON(_: MsgAttachResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttachResponse>, I>>(
    _: I
  ): MsgAttachResponse {
    const message = createBaseMsgAttachResponse();
    return message;
  },
};

function createBaseMsgDetach(): MsgDetach {
  return { contractId: "", from: "", tokenId: "" };
}

export const MsgDetach = {
  encode(
    message: MsgDetach,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetach {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDetach {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: MsgDetach): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDetach>, I>>(
    object: I
  ): MsgDetach {
    const message = createBaseMsgDetach();
    message.contractId = object.contractId ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseMsgDetachResponse(): MsgDetachResponse {
  return {};
}

export const MsgDetachResponse = {
  encode(
    _: MsgDetachResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetachResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetachResponse();
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

  fromJSON(_: any): MsgDetachResponse {
    return {};
  },

  toJSON(_: MsgDetachResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDetachResponse>, I>>(
    _: I
  ): MsgDetachResponse {
    const message = createBaseMsgDetachResponse();
    return message;
  },
};

function createBaseMsgOperatorAttach(): MsgOperatorAttach {
  return { contractId: "", operator: "", owner: "", subject: "", target: "" };
}

export const MsgOperatorAttach = {
  encode(
    message: MsgOperatorAttach,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.subject !== "") {
      writer.uint32(34).string(message.subject);
    }
    if (message.target !== "") {
      writer.uint32(42).string(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorAttach {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorAttach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.subject = reader.string();
          break;
        case 5:
          message.target = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorAttach {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      subject: isSet(object.subject) ? String(object.subject) : "",
      target: isSet(object.target) ? String(object.target) : "",
    };
  },

  toJSON(message: MsgOperatorAttach): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.subject !== undefined && (obj.subject = message.subject);
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorAttach>, I>>(
    object: I
  ): MsgOperatorAttach {
    const message = createBaseMsgOperatorAttach();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.owner = object.owner ?? "";
    message.subject = object.subject ?? "";
    message.target = object.target ?? "";
    return message;
  },
};

function createBaseMsgOperatorAttachResponse(): MsgOperatorAttachResponse {
  return {};
}

export const MsgOperatorAttachResponse = {
  encode(
    _: MsgOperatorAttachResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorAttachResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorAttachResponse();
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

  fromJSON(_: any): MsgOperatorAttachResponse {
    return {};
  },

  toJSON(_: MsgOperatorAttachResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorAttachResponse>, I>>(
    _: I
  ): MsgOperatorAttachResponse {
    const message = createBaseMsgOperatorAttachResponse();
    return message;
  },
};

function createBaseMsgOperatorDetach(): MsgOperatorDetach {
  return { contractId: "", operator: "", owner: "", subject: "" };
}

export const MsgOperatorDetach = {
  encode(
    message: MsgOperatorDetach,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.subject !== "") {
      writer.uint32(34).string(message.subject);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOperatorDetach {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorDetach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.subject = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOperatorDetach {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      operator: isSet(object.operator) ? String(object.operator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      subject: isSet(object.subject) ? String(object.subject) : "",
    };
  },

  toJSON(message: MsgOperatorDetach): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.operator !== undefined && (obj.operator = message.operator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.subject !== undefined && (obj.subject = message.subject);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorDetach>, I>>(
    object: I
  ): MsgOperatorDetach {
    const message = createBaseMsgOperatorDetach();
    message.contractId = object.contractId ?? "";
    message.operator = object.operator ?? "";
    message.owner = object.owner ?? "";
    message.subject = object.subject ?? "";
    return message;
  },
};

function createBaseMsgOperatorDetachResponse(): MsgOperatorDetachResponse {
  return {};
}

export const MsgOperatorDetachResponse = {
  encode(
    _: MsgOperatorDetachResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgOperatorDetachResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOperatorDetachResponse();
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

  fromJSON(_: any): MsgOperatorDetachResponse {
    return {};
  },

  toJSON(_: MsgOperatorDetachResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOperatorDetachResponse>, I>>(
    _: I
  ): MsgOperatorDetachResponse {
    const message = createBaseMsgOperatorDetachResponse();
    return message;
  },
};

function createBaseMsgAttachFrom(): MsgAttachFrom {
  return { contractId: "", proxy: "", from: "", tokenId: "", toTokenId: "" };
}

export const MsgAttachFrom = {
  encode(
    message: MsgAttachFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.tokenId !== "") {
      writer.uint32(34).string(message.tokenId);
    }
    if (message.toTokenId !== "") {
      writer.uint32(42).string(message.toTokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttachFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttachFrom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.proxy = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.tokenId = reader.string();
          break;
        case 5:
          message.toTokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAttachFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      toTokenId: isSet(object.toTokenId) ? String(object.toTokenId) : "",
    };
  },

  toJSON(message: MsgAttachFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.toTokenId !== undefined && (obj.toTokenId = message.toTokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttachFrom>, I>>(
    object: I
  ): MsgAttachFrom {
    const message = createBaseMsgAttachFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    message.toTokenId = object.toTokenId ?? "";
    return message;
  },
};

function createBaseMsgAttachFromResponse(): MsgAttachFromResponse {
  return {};
}

export const MsgAttachFromResponse = {
  encode(
    _: MsgAttachFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAttachFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttachFromResponse();
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

  fromJSON(_: any): MsgAttachFromResponse {
    return {};
  },

  toJSON(_: MsgAttachFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttachFromResponse>, I>>(
    _: I
  ): MsgAttachFromResponse {
    const message = createBaseMsgAttachFromResponse();
    return message;
  },
};

function createBaseMsgDetachFrom(): MsgDetachFrom {
  return { contractId: "", proxy: "", from: "", tokenId: "" };
}

export const MsgDetachFrom = {
  encode(
    message: MsgDetachFrom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractId !== "") {
      writer.uint32(10).string(message.contractId);
    }
    if (message.proxy !== "") {
      writer.uint32(18).string(message.proxy);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.tokenId !== "") {
      writer.uint32(34).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetachFrom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetachFrom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractId = reader.string();
          break;
        case 2:
          message.proxy = reader.string();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDetachFrom {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "",
      proxy: isSet(object.proxy) ? String(object.proxy) : "",
      from: isSet(object.from) ? String(object.from) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: MsgDetachFrom): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.proxy !== undefined && (obj.proxy = message.proxy);
    message.from !== undefined && (obj.from = message.from);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDetachFrom>, I>>(
    object: I
  ): MsgDetachFrom {
    const message = createBaseMsgDetachFrom();
    message.contractId = object.contractId ?? "";
    message.proxy = object.proxy ?? "";
    message.from = object.from ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseMsgDetachFromResponse(): MsgDetachFromResponse {
  return {};
}

export const MsgDetachFromResponse = {
  encode(
    _: MsgDetachFromResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDetachFromResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetachFromResponse();
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

  fromJSON(_: any): MsgDetachFromResponse {
    return {};
  },

  toJSON(_: MsgDetachFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDetachFromResponse>, I>>(
    _: I
  ): MsgDetachFromResponse {
    const message = createBaseMsgDetachFromResponse();
    return message;
  },
};

/** Msg defines the collection Msg service. */
export interface Msg {
  /**
   * Send defines a method to send tokens from one account to another account.
   * Fires:
   * - EventSent
   * - transfer_ft (deprecated, not typed)
   * - transfer_nft (deprecated, not typed)
   * - operation_transfer_nft (deprecated, not typed)
   * Throws:
   * - ErrInsufficientFunds:
   *   - the balance of `from` does not have enough tokens to spend.
   * Info: one can send both fungible tokens and non-fungible tokens.
   * Since: 0.46.0 (finschia)
   */
  Send(request: MsgSend): Promise<MsgSendResponse>;
  /**
   * OperatorSend defines a method to send tokens from one account to another account by the operator.
   * Fires:
   * - EventSent
   * - transfer_ft_from (deprecated, not typed)
   * - transfer_nft_from (deprecated, not typed)
   * - operation_transfer_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized:
   *   - the holder has not authorized the operator.
   * - ErrInsufficientFunds:
   *   - the balance of `from` does not have enough tokens to spend.
   * Info: one can send both fungible tokens and non-fungible tokens.
   * Since: 0.46.0 (finschia)
   */
  OperatorSend(request: MsgOperatorSend): Promise<MsgOperatorSendResponse>;
  /**
   * Deprecated: use Send
   * TransferFT defines a method to send fungible tokens from one account to another account.
   */
  TransferFT(request: MsgTransferFT): Promise<MsgTransferFTResponse>;
  /**
   * Deprecated: use OperatorSend
   * TransferFTFrom defines a method to send fungible tokens from one account to another account by the operator.
   */
  TransferFTFrom(
    request: MsgTransferFTFrom
  ): Promise<MsgTransferFTFromResponse>;
  /**
   * Deprecated: use Send
   * TransferNFT defines a method to send non-fungible tokens from one account to another account.
   */
  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
  /**
   * Deprecated: use OperatorSend
   * TransferNFTFrom defines a method to send non-fungible tokens from one account to another account by the operator.
   */
  TransferNFTFrom(
    request: MsgTransferNFTFrom
  ): Promise<MsgTransferNFTFromResponse>;
  /**
   * AuthorizeOperator allows one to send tokens on behalf of the approver.
   * Fires:
   * - EventAuthorizedOperator
   * - approve_collection (deprecated, not typed)
   * Throws:
   * - ErrNotFound:
   *   - there is no contract of `contract_id`.
   * - ErrInvalidRequest:
   *   - `holder` has already authorized `operator`.
   * Since: 0.46.0 (finschia)
   */
  AuthorizeOperator(
    request: MsgAuthorizeOperator
  ): Promise<MsgAuthorizeOperatorResponse>;
  /**
   * RevokeOperator revokes the authorization of the operator to send the approver's token.
   * Fires:
   * - EventRevokedOperator
   * - disapprove_collection (deprecated, not typed)
   * Throws:
   * - ErrNotFound:
   *   - there is no contract of `contract_id`.
   *   - there is no authorization by `holder` to `operator`.
   * Since: 0.46.0 (finschia)
   */
  RevokeOperator(
    request: MsgRevokeOperator
  ): Promise<MsgRevokeOperatorResponse>;
  /**
   * Deprecated: use AuthorizeOperator
   * Approve allows one to send tokens on behalf of the approver.
   */
  Approve(request: MsgApprove): Promise<MsgApproveResponse>;
  /**
   * Deprecated: use RevokeOperator
   * Disapprove revokes the authorization of the operator to send the approver's token.
   */
  Disapprove(request: MsgDisapprove): Promise<MsgDisapproveResponse>;
  /**
   * CreateContract defines a method to create a contract for collection.
   * it grants `mint`, `burn`, `modify` and `issue` permissions on the contract to its creator.
   * Fires:
   * - EventCreatedContract
   * - create_collection (deprecated, not typed)
   */
  CreateContract(
    request: MsgCreateContract
  ): Promise<MsgCreateContractResponse>;
  /**
   * CreateFTClass defines a method to create a class of fungible token.
   * one may set the supply on the creation, then no one can change the supply, which means no more mints and burns.
   * Fires:
   * - EventCreatedFTClass
   * - EventMintedFT
   * - issue_ft (deprecated, not typed)
   * Since: 0.46.0 (finschia)
   */
  CreateFTClass(request: MsgCreateFTClass): Promise<MsgCreateFTClassResponse>;
  /**
   * CreateNFTClass defines a method to create a class of non-fungible token.
   * Fires:
   * - EventCreatedNFTClass
   * - issue_nft (deprecated, not typed)
   * Since: 0.46.0 (finschia)
   */
  CreateNFTClass(
    request: MsgCreateNFTClass
  ): Promise<MsgCreateNFTClassResponse>;
  /**
   * Deprecated: use CreateFTClass
   * IssueFT defines a method to create a class of fungible token.
   * Fires:
   * - EventIssueFT
   * - EventMintedFT
   * - issue_ft (deprecated, not typed)
   * Note: it does not grant any permissions to its issuer.
   */
  IssueFT(request: MsgIssueFT): Promise<MsgIssueFTResponse>;
  /**
   * Deprecated: use CreateNFTClass
   * IssueNFT defines a method to create a class of non-fungible token.
   * Fires:
   * - EventIssueNFT
   * - issue_nft (deprecated, not typed)
   * Note: it DOES grant `mint` and `burn` permissions to its issuer.
   */
  IssueNFT(request: MsgIssueNFT): Promise<MsgIssueNFTResponse>;
  /**
   * MintFT defines a method to mint fungible tokens.
   * Fires:
   * - EventMintedFT
   * - mint_ft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `from` does not have `mint` permission.
   */
  MintFT(request: MsgMintFT): Promise<MsgMintFTResponse>;
  /**
   * MintNFT defines a method to mint non-fungible tokens.
   * Fires:
   * - EventMintedNFT
   * - mint_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `from` does not have `mint` permission.
   */
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  /**
   * Burn defines a method to burn tokens.
   * Fires:
   * - EventBurned
   * - burn_ft (deprecated, not typed)
   * - burn_nft (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `from` does not have `burn` permission.
   * - ErrInsufficientFunds:
   *   - the balance of `from` does not have enough tokens to burn.
   * Info: one can burn both fungible tokens and non-fungible tokens.
   * Since: 0.46.0 (finschia)
   */
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
  /**
   * OperatorBurn defines a method to burn tokens of the holder by the operator.
   * Fires:
   * - EventBurned
   * - burn_ft_from (deprecated, not typed)
   * - burn_nft_from (deprecated, not typed)
   * - operation_burn_nft (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `operator` does not have `burn` permission.
   *   - the holder has not authorized `operator`.
   * - ErrInsufficientFunds:
   *   - the balance of `from` does not have enough tokens to burn.
   * Info: one can burn both fungible tokens and non-fungible tokens.
   * Since: 0.46.0 (finschia)
   */
  OperatorBurn(request: MsgOperatorBurn): Promise<MsgOperatorBurnResponse>;
  /**
   * Deprecated: use Burn
   * BurnFT defines a method to burn fungible tokens.
   */
  BurnFT(request: MsgBurnFT): Promise<MsgBurnFTResponse>;
  /**
   * Deprecated: use OperatorBurn
   * BurnFTFrom defines a method to burn fungible tokens of the holder by the proxy.
   */
  BurnFTFrom(request: MsgBurnFTFrom): Promise<MsgBurnFTFromResponse>;
  /**
   * Deprecated: use Burn
   * BurnNFT defines a method to burn non-fungible tokens.
   */
  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
  /**
   * Deprecated: use OperatorBurn
   * BurnNFTFrom defines a method to burn non-fungible tokens of the holder by the proxy.
   */
  BurnNFTFrom(request: MsgBurnNFTFrom): Promise<MsgBurnNFTFromResponse>;
  /**
   * ModifyContract defines a method to modify the attributes of a contract.
   * Fires:
   * - EventModifiedContract
   * - modify_collection (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - the operator does not have `modify` permission.
   * - ErrNotFound
   *   - there is no token class of `contract_id`.
   * Since: 0.46.0 (finschia)
   */
  ModifyContract(
    request: MsgModifyContract
  ): Promise<MsgModifyContractResponse>;
  /**
   * ModifyTokenClass defines a method to modify the attributes of a token class.
   * Fires:
   * - EventModifiedTokenClass
   * - modify_token_type (deprecated, not typed)
   * - modify_token (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - the operator does not have `modify` permission.
   * - ErrNotFound
   *   - there is no token class of `contract_id`.
   * Since: 0.46.0 (finschia)
   */
  ModifyTokenClass(
    request: MsgModifyTokenClass
  ): Promise<MsgModifyTokenClassResponse>;
  /**
   * ModifyNFT defines a method to modify the attributes of a non-fungible token.
   * Fires:
   * - EventModifiedNFT
   * - modify_token (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - the operator does not have `modify` permission.
   * - ErrNotFound
   *   - there is no token class of `contract_id`.
   * Since: 0.46.0 (finschia)
   */
  ModifyNFT(request: MsgModifyNFT): Promise<MsgModifyNFTResponse>;
  /**
   * Deprecated: use ModifyContract, ModifyTokenClass or ModifyNFT
   * Modify defines a method to modify metadata.
   */
  Modify(request: MsgModify): Promise<MsgModifyResponse>;
  /**
   * Grant allows one to mint or burn tokens or modify metadata.
   * Fires:
   * - EventGrant
   * - grant_perm (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `granter` does not have `permission`.
   * - ErrInvalidRequest
   *   - `grantee` already has `permission`.
   * Since: 0.46.0 (finschia)
   */
  Grant(request: MsgGrant): Promise<MsgGrantResponse>;
  /**
   * Abandon abandons a permission.
   * Fires:
   * - EventAbandon
   * - revoke_perm (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - `grantee` does not have `permission`.
   * Since: 0.46.0 (finschia)
   */
  Abandon(request: MsgAbandon): Promise<MsgAbandonResponse>;
  /**
   * Deprecated: use Grant
   * GrantPermission allows one to mint or burn tokens or modify metadata.
   */
  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse>;
  /**
   * Deprecated: use Abandon
   * RevokePermission abandons a permission.
   */
  RevokePermission(
    request: MsgRevokePermission
  ): Promise<MsgRevokePermissionResponse>;
  /**
   * Attach defines a method to attach a token to another token.
   * Fires:
   * - EventAttach
   * - attach (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   * Throws:
   * - ErrInvalidRequest
   *   - `owner` does not owns `id`.
   *   - `owner` does not owns `to`.
   *   - `token_id` is not root.
   *   - `token_id` is an ancestor of `to_token_id`, which creates a cycle as a result.
   *   - depth of `to_token_id` exceeds an app-specific limit.
   */
  Attach(request: MsgAttach): Promise<MsgAttachResponse>;
  /**
   * Detach defines a method to detach a token from another token.
   * Fires:
   * - EventDetach
   * - detach (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   * Throws:
   * - ErrInvalidRequest
   *   - `owner` does not owns `token_id`.
   */
  Detach(request: MsgDetach): Promise<MsgDetachResponse>;
  /**
   * OperatorAttach defines a method to attach a token to another token by operator.
   * Fires:
   * - EventAttach
   * - attach_from (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - the holder has not authorized `operator`.
   * - ErrInvalidRequest
   *   - `owner` does not owns `subject`.
   *   - `owner` does not owns `target`.
   *   - `subject` is not root.
   *   - `subject` is an ancestor of `target`, which creates a cycle as a result.
   *   - depth of `to` exceeds an app-specific limit.
   * Since: 0.46.0 (finschia)
   */
  OperatorAttach(
    request: MsgOperatorAttach
  ): Promise<MsgOperatorAttachResponse>;
  /**
   * OperatorDetach defines a method to detach a token from another token by operator.
   * Fires:
   * - EventDetach
   * - detach_from (deprecated, not typed)
   * - operation_root_changed (deprecated, not typed)
   * Throws:
   * - ErrUnauthorized
   *   - the holder has not authorized `operator`.
   * - ErrInvalidRequest
   *   - `owner` does not owns `subject`.
   * Since: 0.46.0 (finschia)
   */
  OperatorDetach(
    request: MsgOperatorDetach
  ): Promise<MsgOperatorDetachResponse>;
  /**
   * Deprecated: use OperatorAttach
   * AttachFrom defines a method to attach a token to another token by operator.
   */
  AttachFrom(request: MsgAttachFrom): Promise<MsgAttachFromResponse>;
  /**
   * Deprecated: use OperatorDetach
   * DetachFrom defines a method to detach a token from another token by operator.
   */
  DetachFrom(request: MsgDetachFrom): Promise<MsgDetachFromResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Send = this.Send.bind(this);
    this.OperatorSend = this.OperatorSend.bind(this);
    this.TransferFT = this.TransferFT.bind(this);
    this.TransferFTFrom = this.TransferFTFrom.bind(this);
    this.TransferNFT = this.TransferNFT.bind(this);
    this.TransferNFTFrom = this.TransferNFTFrom.bind(this);
    this.AuthorizeOperator = this.AuthorizeOperator.bind(this);
    this.RevokeOperator = this.RevokeOperator.bind(this);
    this.Approve = this.Approve.bind(this);
    this.Disapprove = this.Disapprove.bind(this);
    this.CreateContract = this.CreateContract.bind(this);
    this.CreateFTClass = this.CreateFTClass.bind(this);
    this.CreateNFTClass = this.CreateNFTClass.bind(this);
    this.IssueFT = this.IssueFT.bind(this);
    this.IssueNFT = this.IssueNFT.bind(this);
    this.MintFT = this.MintFT.bind(this);
    this.MintNFT = this.MintNFT.bind(this);
    this.Burn = this.Burn.bind(this);
    this.OperatorBurn = this.OperatorBurn.bind(this);
    this.BurnFT = this.BurnFT.bind(this);
    this.BurnFTFrom = this.BurnFTFrom.bind(this);
    this.BurnNFT = this.BurnNFT.bind(this);
    this.BurnNFTFrom = this.BurnNFTFrom.bind(this);
    this.ModifyContract = this.ModifyContract.bind(this);
    this.ModifyTokenClass = this.ModifyTokenClass.bind(this);
    this.ModifyNFT = this.ModifyNFT.bind(this);
    this.Modify = this.Modify.bind(this);
    this.Grant = this.Grant.bind(this);
    this.Abandon = this.Abandon.bind(this);
    this.GrantPermission = this.GrantPermission.bind(this);
    this.RevokePermission = this.RevokePermission.bind(this);
    this.Attach = this.Attach.bind(this);
    this.Detach = this.Detach.bind(this);
    this.OperatorAttach = this.OperatorAttach.bind(this);
    this.OperatorDetach = this.OperatorDetach.bind(this);
    this.AttachFrom = this.AttachFrom.bind(this);
    this.DetachFrom = this.DetachFrom.bind(this);
  }
  Send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Send", data);
    return promise.then((data) => MsgSendResponse.decode(new _m0.Reader(data)));
  }

  OperatorSend(request: MsgOperatorSend): Promise<MsgOperatorSendResponse> {
    const data = MsgOperatorSend.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorSend",
      data
    );
    return promise.then((data) =>
      MsgOperatorSendResponse.decode(new _m0.Reader(data))
    );
  }

  TransferFT(request: MsgTransferFT): Promise<MsgTransferFTResponse> {
    const data = MsgTransferFT.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "TransferFT",
      data
    );
    return promise.then((data) =>
      MsgTransferFTResponse.decode(new _m0.Reader(data))
    );
  }

  TransferFTFrom(
    request: MsgTransferFTFrom
  ): Promise<MsgTransferFTFromResponse> {
    const data = MsgTransferFTFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "TransferFTFrom",
      data
    );
    return promise.then((data) =>
      MsgTransferFTFromResponse.decode(new _m0.Reader(data))
    );
  }

  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "TransferNFT",
      data
    );
    return promise.then((data) =>
      MsgTransferNFTResponse.decode(new _m0.Reader(data))
    );
  }

  TransferNFTFrom(
    request: MsgTransferNFTFrom
  ): Promise<MsgTransferNFTFromResponse> {
    const data = MsgTransferNFTFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "TransferNFTFrom",
      data
    );
    return promise.then((data) =>
      MsgTransferNFTFromResponse.decode(new _m0.Reader(data))
    );
  }

  AuthorizeOperator(
    request: MsgAuthorizeOperator
  ): Promise<MsgAuthorizeOperatorResponse> {
    const data = MsgAuthorizeOperator.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "AuthorizeOperator",
      data
    );
    return promise.then((data) =>
      MsgAuthorizeOperatorResponse.decode(new _m0.Reader(data))
    );
  }

  RevokeOperator(
    request: MsgRevokeOperator
  ): Promise<MsgRevokeOperatorResponse> {
    const data = MsgRevokeOperator.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "RevokeOperator",
      data
    );
    return promise.then((data) =>
      MsgRevokeOperatorResponse.decode(new _m0.Reader(data))
    );
  }

  Approve(request: MsgApprove): Promise<MsgApproveResponse> {
    const data = MsgApprove.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Approve", data);
    return promise.then((data) =>
      MsgApproveResponse.decode(new _m0.Reader(data))
    );
  }

  Disapprove(request: MsgDisapprove): Promise<MsgDisapproveResponse> {
    const data = MsgDisapprove.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "Disapprove",
      data
    );
    return promise.then((data) =>
      MsgDisapproveResponse.decode(new _m0.Reader(data))
    );
  }

  CreateContract(
    request: MsgCreateContract
  ): Promise<MsgCreateContractResponse> {
    const data = MsgCreateContract.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "CreateContract",
      data
    );
    return promise.then((data) =>
      MsgCreateContractResponse.decode(new _m0.Reader(data))
    );
  }

  CreateFTClass(request: MsgCreateFTClass): Promise<MsgCreateFTClassResponse> {
    const data = MsgCreateFTClass.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "CreateFTClass",
      data
    );
    return promise.then((data) =>
      MsgCreateFTClassResponse.decode(new _m0.Reader(data))
    );
  }

  CreateNFTClass(
    request: MsgCreateNFTClass
  ): Promise<MsgCreateNFTClassResponse> {
    const data = MsgCreateNFTClass.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "CreateNFTClass",
      data
    );
    return promise.then((data) =>
      MsgCreateNFTClassResponse.decode(new _m0.Reader(data))
    );
  }

  IssueFT(request: MsgIssueFT): Promise<MsgIssueFTResponse> {
    const data = MsgIssueFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "IssueFT", data);
    return promise.then((data) =>
      MsgIssueFTResponse.decode(new _m0.Reader(data))
    );
  }

  IssueNFT(request: MsgIssueNFT): Promise<MsgIssueNFTResponse> {
    const data = MsgIssueNFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "IssueNFT", data);
    return promise.then((data) =>
      MsgIssueNFTResponse.decode(new _m0.Reader(data))
    );
  }

  MintFT(request: MsgMintFT): Promise<MsgMintFTResponse> {
    const data = MsgMintFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "MintFT", data);
    return promise.then((data) =>
      MsgMintFTResponse.decode(new _m0.Reader(data))
    );
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "MintNFT", data);
    return promise.then((data) =>
      MsgMintNFTResponse.decode(new _m0.Reader(data))
    );
  }

  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Burn", data);
    return promise.then((data) => MsgBurnResponse.decode(new _m0.Reader(data)));
  }

  OperatorBurn(request: MsgOperatorBurn): Promise<MsgOperatorBurnResponse> {
    const data = MsgOperatorBurn.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorBurn",
      data
    );
    return promise.then((data) =>
      MsgOperatorBurnResponse.decode(new _m0.Reader(data))
    );
  }

  BurnFT(request: MsgBurnFT): Promise<MsgBurnFTResponse> {
    const data = MsgBurnFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "BurnFT", data);
    return promise.then((data) =>
      MsgBurnFTResponse.decode(new _m0.Reader(data))
    );
  }

  BurnFTFrom(request: MsgBurnFTFrom): Promise<MsgBurnFTFromResponse> {
    const data = MsgBurnFTFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "BurnFTFrom",
      data
    );
    return promise.then((data) =>
      MsgBurnFTFromResponse.decode(new _m0.Reader(data))
    );
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "BurnNFT", data);
    return promise.then((data) =>
      MsgBurnNFTResponse.decode(new _m0.Reader(data))
    );
  }

  BurnNFTFrom(request: MsgBurnNFTFrom): Promise<MsgBurnNFTFromResponse> {
    const data = MsgBurnNFTFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "BurnNFTFrom",
      data
    );
    return promise.then((data) =>
      MsgBurnNFTFromResponse.decode(new _m0.Reader(data))
    );
  }

  ModifyContract(
    request: MsgModifyContract
  ): Promise<MsgModifyContractResponse> {
    const data = MsgModifyContract.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "ModifyContract",
      data
    );
    return promise.then((data) =>
      MsgModifyContractResponse.decode(new _m0.Reader(data))
    );
  }

  ModifyTokenClass(
    request: MsgModifyTokenClass
  ): Promise<MsgModifyTokenClassResponse> {
    const data = MsgModifyTokenClass.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "ModifyTokenClass",
      data
    );
    return promise.then((data) =>
      MsgModifyTokenClassResponse.decode(new _m0.Reader(data))
    );
  }

  ModifyNFT(request: MsgModifyNFT): Promise<MsgModifyNFTResponse> {
    const data = MsgModifyNFT.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "ModifyNFT",
      data
    );
    return promise.then((data) =>
      MsgModifyNFTResponse.decode(new _m0.Reader(data))
    );
  }

  Modify(request: MsgModify): Promise<MsgModifyResponse> {
    const data = MsgModify.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Modify", data);
    return promise.then((data) =>
      MsgModifyResponse.decode(new _m0.Reader(data))
    );
  }

  Grant(request: MsgGrant): Promise<MsgGrantResponse> {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Grant", data);
    return promise.then((data) =>
      MsgGrantResponse.decode(new _m0.Reader(data))
    );
  }

  Abandon(request: MsgAbandon): Promise<MsgAbandonResponse> {
    const data = MsgAbandon.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Abandon", data);
    return promise.then((data) =>
      MsgAbandonResponse.decode(new _m0.Reader(data))
    );
  }

  GrantPermission(
    request: MsgGrantPermission
  ): Promise<MsgGrantPermissionResponse> {
    const data = MsgGrantPermission.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "GrantPermission",
      data
    );
    return promise.then((data) =>
      MsgGrantPermissionResponse.decode(new _m0.Reader(data))
    );
  }

  RevokePermission(
    request: MsgRevokePermission
  ): Promise<MsgRevokePermissionResponse> {
    const data = MsgRevokePermission.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "RevokePermission",
      data
    );
    return promise.then((data) =>
      MsgRevokePermissionResponse.decode(new _m0.Reader(data))
    );
  }

  Attach(request: MsgAttach): Promise<MsgAttachResponse> {
    const data = MsgAttach.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Attach", data);
    return promise.then((data) =>
      MsgAttachResponse.decode(new _m0.Reader(data))
    );
  }

  Detach(request: MsgDetach): Promise<MsgDetachResponse> {
    const data = MsgDetach.encode(request).finish();
    const promise = this.rpc.request("lbm.collection.v1.Msg", "Detach", data);
    return promise.then((data) =>
      MsgDetachResponse.decode(new _m0.Reader(data))
    );
  }

  OperatorAttach(
    request: MsgOperatorAttach
  ): Promise<MsgOperatorAttachResponse> {
    const data = MsgOperatorAttach.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorAttach",
      data
    );
    return promise.then((data) =>
      MsgOperatorAttachResponse.decode(new _m0.Reader(data))
    );
  }

  OperatorDetach(
    request: MsgOperatorDetach
  ): Promise<MsgOperatorDetachResponse> {
    const data = MsgOperatorDetach.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "OperatorDetach",
      data
    );
    return promise.then((data) =>
      MsgOperatorDetachResponse.decode(new _m0.Reader(data))
    );
  }

  AttachFrom(request: MsgAttachFrom): Promise<MsgAttachFromResponse> {
    const data = MsgAttachFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "AttachFrom",
      data
    );
    return promise.then((data) =>
      MsgAttachFromResponse.decode(new _m0.Reader(data))
    );
  }

  DetachFrom(request: MsgDetachFrom): Promise<MsgDetachFromResponse> {
    const data = MsgDetachFrom.encode(request).finish();
    const promise = this.rpc.request(
      "lbm.collection.v1.Msg",
      "DetachFrom",
      data
    );
    return promise.then((data) =>
      MsgDetachFromResponse.decode(new _m0.Reader(data))
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
