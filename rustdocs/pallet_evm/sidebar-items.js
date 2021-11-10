initSidebarItems({"enum":[["ExitError","Exit error reason."],["ExitFatal","Exit fatal reason."],["ExitReason","Exit reason."],["ExitRevert","Exit revert reason."],["ExitSucceed","Exit succeed reason."],["PrecompileFailure","Data returned by a precompile in case of failure."]],"mod":[["pallet","The module that hosts all the FRAME types needed to add this pallet to a runtime."],["runner",""]],"struct":[["Account","Basic account information."],["Context","Context of the runtime."],["EVMCurrencyAdapter","Implements the transaction payment for a pallet implementing the `Currency` trait (eg. the pallet_balances) using an unbalance handler (implementing `OnUnbalanced`). Similar to `CurrencyAdapter` of `pallet_transaction_payment`"],["EnsureAddressNever","Ensure that the origin never happens."],["EnsureAddressRoot","Ensure that the origin is root."],["EnsureAddressSame","Ensure that the EVM address is the same as the Substrate address. This only works if the account ID is `H160`."],["EnsureAddressTruncated","Ensure that the address is truncated hash of the origin. Only works if the account id is `AccountId32`."],["ExecutionInfo",""],["GenesisAccount","Account definition used for genesis block construction."],["HashedAddressMapping","Hashed address mapping."],["IdentityAddressMapping","Identity address mapping."],["Log",""],["PrecompileOutput","Data returned by a precompile on success."],["SubstrateBlockHashMapping","Returns the Substrate block hash by number."],["Vicinity","External input from the transaction."]],"trait":[["AddressMapping",""],["BlockHashMapping","A trait for getting a block hash by number."],["EnsureAddressOrigin",""],["FeeCalculator","Trait that outputs the current transaction gas price."],["GasWeightMapping","A mapping function that converts Ethereum gas to Substrate weight"],["LinearCostPrecompile",""],["OnChargeEVMTransaction","Handle withdrawing, refunding and depositing of transaction fees. Similar to `OnChargeTransaction` of `pallet_transaction_payment`"],["Precompile","One single precompile used by EVM engine."],["PrecompileSet","A set of precompiles. Checks of the provided address being in the precompile set should be as cheap as possible since it may be called often."]],"type":[["BalanceOf","Type alias for currency balance."],["CallInfo",""],["CreateInfo",""],["PrecompileResult",""]]});