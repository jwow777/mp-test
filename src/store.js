import { makeAutoObservable, runInAction } from "mobx";

import { createContext } from "react";
import sample from "./data.json";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  isLoaded = false;
  locations = [];
  envs = [];
  servers = [];

  fetchData = async () => {
    await sleep(3000);
    runInAction(() => {
      this.locations = sample.locations;
      this.envs = sample.envs;
      this.servers = sample.servers;
      this.isLoaded = true;
    });
  };
}

export const store = new Store();
store.fetchData();
export const storeContext = createContext(store);
