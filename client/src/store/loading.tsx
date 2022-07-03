import { createContext } from "react";

export interface ILoadingContext {
  loading: boolean;
  setLoading: (l: boolean) => void;
}

export const LoadingContext = createContext({});
