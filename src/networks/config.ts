import { NATIVE_NETWORK, isDev } from "@/config/global";

import { NETWORK as OSMO_NETWORK } from "./list/osmosis/network";
import { embedChainInfo as osmoChainInfo } from "./list/osmosis/contants";

import { NETWORK as ATOM_NETWORK } from "./list/cosmos/network";
import { embedChainInfo as atomChainInfo } from "./list/cosmos/contants";

import { NETWORK as AXELAR_NETWORK } from "./list/axelar/network";
import { embedChainInfo as alexarChainInfo } from "./list/axelar/contants";

import { NETWORK as STRIDE_NETWORK } from "./list/stride/network";
import { embedChainInfo as strideChainInfo } from "./list/stride/contants";

import { NETWORK as JUNO_NETWORK } from "./list/juno/network";
import { embedChainInfo as junoChainInfo } from "./list/juno/contants";

import { NETWORK as EVMOS_NETWORK } from "./list/evmos/network";
import { embedChainInfo as evmosChainInfo } from "./list/evmos/contants";

import { NETWORK as PERSISTENCE_NETWORK } from "./list/persistence/network";
import { embedChainInfo as persistenceChainInfo } from "./list/persistence/contants";

import { NETWORK as SECRET_NETWORK } from "./list/secret/network";
import { embedChainInfo as secretChainInfo } from "./list/secret/contants";

import { NETWORK as CELESTIA_NETWORK } from "./list/celestia/network";
import { embedChainInfo as celestiaChainInfo } from "./list/celestia/contants";

import { NETWORK as STARGAZE_NETWORK } from "./list/stargaze/network";
import { embedChainInfo as stargazeChainInfo } from "./list/stargaze/contants";

import { NETWORK as QUICKSILVER_NETWORK } from "./list/quicksilver/network";
import { embedChainInfo as quicksilverChainInfo } from "./list/quicksilver/contants";

import { NETWORK as NEUTRON_NETWORK } from "./list/neutron/network";
import { embedChainInfo as neutronChainInfo } from "./list/neutron/contants";

import { NETWORK as DYMENSION_NETWORK } from "./list/dymension/network";
import { embedChainInfo as dymensionChainInfo } from "./list/dymension/contants";

import { NETWORK as JACKAL_NETWORK } from "./list/jackal/network";
import { embedChainInfo as jackalChainInfo } from "./list/jackal/contants";

import { NETWORK as INJECTIVE_NETWORK } from "./list/injective/network";
import { embedChainInfo as injectiveChainInfo } from "./list/injective/contants";

import { NETWORK as COMPOSABLE_NETWORK } from "./list/composable/network";
import { embedChainInfo as composableChainInfo } from "./list/composable/contants";

import { NETWORK as NOBLE_NETWORK } from "./list/noble/network";
import { embedChainInfo as nobleChainInfo } from "./list/noble/contants";

import { NETWORK as ETHEREUM_NETWORK } from "./list/ethereum/network";
import { NETWORK as BINANCE_NETWORK } from "./list/binance/network";
import { NETWORK as ARBITRUM_NETWORK } from "./list/arbitrum/network";

import { useApplicationStore } from "@/common/stores/application";
import type { ExternalCurrencies, NetworkData } from "@/common/types";
import { ChainType, type EvmNetwork, type Network } from "@/common/types/Network";

import { NETWORK as CUDOS_NETWORK } from "./cudos/network";
import { embedChainInfo as cudosChainInfo } from "./cudos/contants";

export const PROOBUF_ONLY_NETWORK = [ARBITRUM_NETWORK.key];

export const SUPPORTED_NETWORKS_DATA: {
  [key: string]: Network | EvmNetwork;
} = {
  NOLUS: { ...NATIVE_NETWORK },
  OSMOSIS: {
    prefix: OSMO_NETWORK.prefix,
    key: OSMO_NETWORK.key,
    symbol: OSMO_NETWORK.ticker,
    value: "osmosis",
    label: "Osmosis",
    estimation: 20,
    native: false,
    chain_type: ChainType.cosmos
  },
  COSMOS_HUB: {
    prefix: ATOM_NETWORK.prefix,
    key: ATOM_NETWORK.key,
    symbol: ATOM_NETWORK.ticker,
    value: "cosmoshub",
    label: "Cosmos Hub",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  AXELAR: {
    prefix: AXELAR_NETWORK.prefix,
    key: AXELAR_NETWORK.key,
    symbol: AXELAR_NETWORK.ticker,
    value: "axelar",
    label: "Axelar",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  STRIDE: {
    prefix: STRIDE_NETWORK.prefix,
    key: STRIDE_NETWORK.key,
    symbol: STRIDE_NETWORK.ticker,
    value: "stride",
    label: "Stride",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  JUNO: {
    prefix: JUNO_NETWORK.prefix,
    key: JUNO_NETWORK.key,
    symbol: JUNO_NETWORK.ticker,
    value: "juno",
    label: "Juno",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  EVMOS: {
    prefix: EVMOS_NETWORK.prefix,
    key: EVMOS_NETWORK.key,
    symbol: EVMOS_NETWORK.ticker,
    value: "evmos",
    label: "Evmos",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  PERSISTENCE: {
    prefix: PERSISTENCE_NETWORK.prefix,
    key: PERSISTENCE_NETWORK.key,
    symbol: PERSISTENCE_NETWORK.ticker,
    value: "persistence",
    label: "Persistence",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  SECRET: {
    prefix: SECRET_NETWORK.prefix,
    key: SECRET_NETWORK.key,
    symbol: SECRET_NETWORK.ticker,
    value: "secret",
    label: "Secret",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  CELESTIA: {
    prefix: CELESTIA_NETWORK.prefix,
    key: CELESTIA_NETWORK.key,
    symbol: CELESTIA_NETWORK.ticker,
    value: "celestia",
    label: "Celestia",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  STARGAZE: {
    prefix: STARGAZE_NETWORK.prefix,
    key: STARGAZE_NETWORK.key,
    symbol: STARGAZE_NETWORK.ticker,
    value: "stargaze",
    label: "Stargaze",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  QUICKSILVER: {
    prefix: QUICKSILVER_NETWORK.prefix,
    key: QUICKSILVER_NETWORK.key,
    symbol: QUICKSILVER_NETWORK.ticker,
    value: "quicksilver",
    label: "Quicksilver",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  NEUTRON: {
    prefix: NEUTRON_NETWORK.prefix,
    key: NEUTRON_NETWORK.key,
    symbol: NEUTRON_NETWORK.ticker,
    value: "neutron",
    label: "Neutron",
    native: false,
    estimation: 20,
    forward: false,
    chain_type: ChainType.cosmos
  },
  DYMENSION: {
    prefix: DYMENSION_NETWORK.prefix,
    key: DYMENSION_NETWORK.key,
    symbol: DYMENSION_NETWORK.ticker,
    value: "dymension",
    label: "Dymension",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  JACKAL: {
    prefix: JACKAL_NETWORK.prefix,
    key: JACKAL_NETWORK.key,
    symbol: JACKAL_NETWORK.ticker,
    value: "jackal",
    label: "Jackal",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  INJECTIVE: {
    prefix: INJECTIVE_NETWORK.prefix,
    key: INJECTIVE_NETWORK.key,
    symbol: INJECTIVE_NETWORK.ticker,
    value: "injective",
    label: "Injective",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  COMPOSABLE: {
    prefix: COMPOSABLE_NETWORK.prefix,
    key: COMPOSABLE_NETWORK.key,
    symbol: COMPOSABLE_NETWORK.ticker,
    value: "composable",
    label: "Composable",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  NOBLE: {
    prefix: NOBLE_NETWORK.prefix,
    key: NOBLE_NETWORK.key,
    symbol: NOBLE_NETWORK.ticker,
    value: "noble",
    label: "Noble",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  CUDOS: {
    prefix: CUDOS_NETWORK.prefix,
    key: CUDOS_NETWORK.key,
    symbol: CUDOS_NETWORK.ticker,
    value: "cudos",
    label: "Cudos",
    native: false,
    estimation: 20,
    forward: true,
    chain_type: ChainType.cosmos
  },
  ETHEREUM: {
    ...ETHEREUM_NETWORK,
    value: "ethereum",
    native: false,
    chain_type: ChainType.evm
  },
  ARBITRUM: {
    ...ARBITRUM_NETWORK,
    value: "arbitrum",
    native: false,
    chain_type: ChainType.evm
  },
  BINANCE: {
    ...BINANCE_NETWORK,
    value: "binance",
    native: false,
    chain_type: ChainType.evm
  }
};

const APP_DEV_LIST = isDev() ? [SUPPORTED_NETWORKS_DATA.ETHEREUM, SUPPORTED_NETWORKS_DATA.ARBITRUM] : [];

export const NETWORKS_DATA: {
  [key: string]: {
    list: {
      prefix: string;
      value: string;
      label: string;
      native: boolean;
      estimation:
        | number
        | {
            duration: number;
            type: string;
          };
      key: string;
      symbol: string;
    }[];
    supportedNetworks: {
      [key: string]: NetworkData;
    };
  };
} = {
  testnet: {
    list: [
      SUPPORTED_NETWORKS_DATA.NOLUS,
      SUPPORTED_NETWORKS_DATA.OSMOSIS,
      SUPPORTED_NETWORKS_DATA.COSMOS_HUB,
      SUPPORTED_NETWORKS_DATA.AXELAR,
      SUPPORTED_NETWORKS_DATA.JUNO,
      SUPPORTED_NETWORKS_DATA.NEUTRON
    ],
    supportedNetworks: {
      OSMOSIS: {
        ...OSMO_NETWORK,
        explorer: "https://testnet.mintscan.io/osmosis-testnet/txs",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[OSMO_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: osmoChainInfo
      },
      COSMOS_HUB: {
        ...ATOM_NETWORK,
        explorer: "https://testnet.mintscan.io/cosmoshub-testnet/txs",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[ATOM_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: atomChainInfo
      },
      AXELAR: {
        ...AXELAR_NETWORK,
        explorer: "https://testnet.mintscan.io/axelar-testnet/txs",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[AXELAR_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: alexarChainInfo
      },
      JUNO: {
        ...JUNO_NETWORK,
        explorer: "https://testnet.mintscan.io/juno-testnet/txs",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[JUNO_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: junoChainInfo
      },
      NEUTRON: {
        ...NEUTRON_NETWORK,
        explorer: "https://testnet.mintscan.io/neutron-testnet/txs",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[NEUTRON_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: neutronChainInfo
      }
    }
  },
  mainnet: {
    list: [
      SUPPORTED_NETWORKS_DATA.NOLUS,
      SUPPORTED_NETWORKS_DATA.OSMOSIS,
      SUPPORTED_NETWORKS_DATA.COSMOS_HUB,
      SUPPORTED_NETWORKS_DATA.AXELAR,
      SUPPORTED_NETWORKS_DATA.STRIDE,
      SUPPORTED_NETWORKS_DATA.JUNO,
      SUPPORTED_NETWORKS_DATA.SECRET,
      SUPPORTED_NETWORKS_DATA.STARGAZE,
      SUPPORTED_NETWORKS_DATA.CELESTIA,
      SUPPORTED_NETWORKS_DATA.QUICKSILVER,
      SUPPORTED_NETWORKS_DATA.NEUTRON,
      SUPPORTED_NETWORKS_DATA.DYMENSION,
      SUPPORTED_NETWORKS_DATA.EVMOS,
      SUPPORTED_NETWORKS_DATA.JACKAL,
      SUPPORTED_NETWORKS_DATA.INJECTIVE,
      SUPPORTED_NETWORKS_DATA.COMPOSABLE,
      SUPPORTED_NETWORKS_DATA.NOBLE,
      ...APP_DEV_LIST
      // SUPPORTED_NETWORKS_DATA.CUDOS
      // SUPPORTED_NETWORKS_DATA.ETHEREUM,
      // SUPPORTED_NETWORKS_DATA.ARBITRUM
      // SUPPORTED_NETWORKS_DATA.BINANCE
    ],
    supportedNetworks: {
      OSMOSIS: {
        ...OSMO_NETWORK,
        explorer: "https://mintscan.io/osmosis/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[OSMO_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: osmoChainInfo
      },
      COSMOS_HUB: {
        ...ATOM_NETWORK,
        explorer: "https://mintscan.io/cosmoshub/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[ATOM_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: atomChainInfo
      },
      AXELAR: {
        ...AXELAR_NETWORK,
        explorer: "https://mintscan.io/axelar/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[AXELAR_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: alexarChainInfo
      },
      STRIDE: {
        ...STRIDE_NETWORK,
        explorer: "https://mintscan.io/stride/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[STRIDE_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: strideChainInfo
      },
      JUNO: {
        ...JUNO_NETWORK,
        explorer: "https://mintscan.io/juno/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[JUNO_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: junoChainInfo
      },
      EVMOS: {
        ...EVMOS_NETWORK,
        explorer: "https://mintscan.io/evmos/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[EVMOS_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: evmosChainInfo
      },
      PERSISTENCE: {
        ...PERSISTENCE_NETWORK,
        explorer: "https://mintscan.io/persistence/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[PERSISTENCE_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: persistenceChainInfo
      },
      SECRET: {
        ...SECRET_NETWORK,
        explorer: "https://mintscan.io/secret/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[SECRET_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: secretChainInfo
      },
      STARGAZE: {
        ...STARGAZE_NETWORK,
        explorer: "https://mintscan.io/stargaze/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[STARGAZE_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: stargazeChainInfo
      },
      CELESTIA: {
        ...CELESTIA_NETWORK,
        explorer: "https://mintscan.io/celestia/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[CELESTIA_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: celestiaChainInfo
      },
      QUICKSILVER: {
        ...QUICKSILVER_NETWORK,
        explorer: "https://mintscan.io/quicksilver/transactions",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[QUICKSILVER_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: quicksilverChainInfo
      },
      NEUTRON: {
        ...NEUTRON_NETWORK,
        explorer: "https://mintscan.io/neutron/txs",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[NEUTRON_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: neutronChainInfo
      },
      DYMENSION: {
        ...DYMENSION_NETWORK,
        explorer: "https://mintscan.io/dymension/txs",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[DYMENSION_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: dymensionChainInfo
      },
      JACKAL: {
        ...JACKAL_NETWORK,
        explorer: "https://ping.pub/jackal/tx",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[JACKAL_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: jackalChainInfo
      },
      INJECTIVE: {
        ...INJECTIVE_NETWORK,
        explorer: "https://ping.pub/injective/tx",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[INJECTIVE_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: injectiveChainInfo
      },
      COMPOSABLE: {
        ...COMPOSABLE_NETWORK,
        explorer: "https://ping.pub/picasso/tx",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[COMPOSABLE_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: composableChainInfo
      },
      NOBLE: {
        ...NOBLE_NETWORK,
        explorer: "https://ping.pub/noble/tx",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[NOBLE_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: nobleChainInfo
      },
      CUDOS: {
        ...CUDOS_NETWORK,
        explorer: "https://ping.pub/cudos/tx",
        currencies: () => {
          const app = useApplicationStore();
          return app?.networks?.[CUDOS_NETWORK.key] as ExternalCurrencies;
        },
        embedChainInfo: cudosChainInfo
      }
    }
  }
};
