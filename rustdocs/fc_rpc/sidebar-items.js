initSidebarItems({"enum":[["EthereumTransaction",""],["TransactionMessage",""]],"fn":[["error_on_execution_failure",""],["internal_err",""],["public_key",""]],"mod":[["frontier_backend_client",""]],"struct":[["EthApi",""],["EthBlockDataCache","Stores an LRU cache for block data and their transaction statuses. These are large and take a lot of time to fetch from the database. Storing them in an LRU cache will allow to reduce database accesses when many subsequent requests are related to the same blocks."],["EthDevSigner",""],["EthFilterApi",""],["EthPubSubApi",""],["EthTask",""],["HexEncodedIdProvider",""],["NetApi",""],["OverrideHandle",""],["RuntimeApiStorageOverride","A wrapper type for the Runtime API. This type implements `StorageOverride`, so it can be used when calling the runtime API is desired but a `dyn StorageOverride` is required."],["SchemaV1Override","An override for runtimes that use Schema V1"],["SchemaV2Override","An override for runtimes that use Schema V1"],["Web3Api",""]],"trait":[["EthApiServer","Eth rpc interface."],["EthFilterApiServer","Eth filters rpc api (polling)."],["EthPubSubApiServer","Eth PUB-SUB rpc interface."],["EthSigner","A generic Ethereum signer."],["NetApiServer","Net rpc interface."],["StorageOverride","Something that can fetch Ethereum-related data. This trait is quite similar to the runtime API, and indeed oe implementation of it uses the runtime API. Having this trait is useful because it allows optimized implementations that fetch data from a State Backend with some assumptions about pallet-ethereum’s storage schema. Using such an optimized implementation avoids spawning a runtime and the overhead associated with it."],["Web3ApiServer","Web3 rpc interface."]]});