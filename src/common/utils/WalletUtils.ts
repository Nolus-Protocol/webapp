import type { Keplr } from "@keplr-wallet/types";
import type { Window as KeplrWindow } from "@keplr-wallet/types/build/window";

import { KeyUtils } from "@nolus/nolusjs";
import { WalletManager } from ".";
import { Wallet, NETWORK_DATA } from "@/networks";
import { AppUtils } from "./AppUtils";

export class WalletUtils {
  public static async getKeplr(): Promise<Keplr | undefined> {
    const keplrWindow = window as KeplrWindow;

    if (keplrWindow.keplr) {
      return keplrWindow.keplr;
    }

    if (document.readyState === "complete") {
      return keplrWindow.keplr;
    }

    return new Promise((resolve) => {
      const documentStateChange = (event: Event) => {
        if (event.target && (event.target as Document).readyState === "complete") {
          resolve(keplrWindow.keplr);
          document.removeEventListener("readystatechange", documentStateChange);
        }
      };

      document.addEventListener("readystatechange", documentStateChange);
    });
  }

  public static async getLeap(): Promise<Keplr | undefined> {
    const leapWindow = window as any;

    if (leapWindow.leap) {
      return leapWindow.leap;
    }

    if (document.readyState === "complete") {
      return leapWindow.leap;
    }

    return new Promise((resolve) => {
      const documentStateChange = (event: Event) => {
        if (event.target && (event.target as Document).readyState === "complete") {
          resolve(leapWindow.leap);
          document.removeEventListener("readystatechange", documentStateChange);
        }
      };

      document.addEventListener("readystatechange", documentStateChange);
    });
  }

  public static isAuth(): boolean {
    return (
      KeyUtils.isAddressValid(WalletManager.getWalletAddress()) && WalletManager.getWalletConnectMechanism() !== null
    );
  }

  public static async getWallet(key: string): Promise<Wallet> {
    const network = NETWORK_DATA;
    const node = await AppUtils.fetchEndpoints(network.supportedNetworks[key].key);
    const client = await Wallet.getInstance(node.rpc, node.api);
    return client;
  }
}
