import { RootState } from "@/redux/store";
import type { EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";

export interface AppAdditionalProps {
  emotionCache?: EmotionCache;
}

export interface IPageSettings {
  initialReduxState?: RootState;
}

export type MyAppProps<
  P extends { internal?: IPageSettings } = { internal?: IPageSettings }
> = AppProps<P> & AppAdditionalProps;
