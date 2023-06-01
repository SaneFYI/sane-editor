import {
  HyperlinkToolbar,
  HyperlinkToolbarDynamicParams,
  HyperlinkToolbarFactory,
  HyperlinkToolbarStaticParams,
} from "@sanefyi/sane-editor-core";
import { HyperlinkToolbar as ReactHyperlinkToolbar } from "./components/HyperlinkToolbar";
import { ReactElementFactory } from "../ElementFactory/components/ReactElementFactory";
import { MantineThemeOverride } from "@mantine/core";

export const createReactHyperlinkToolbarFactory =
  (theme: MantineThemeOverride): HyperlinkToolbarFactory =>
  (staticParams): HyperlinkToolbar =>
    ReactElementFactory<
      HyperlinkToolbarStaticParams,
      HyperlinkToolbarDynamicParams
    >(staticParams, ReactHyperlinkToolbar, theme, {
      animation: "fade",
      placement: "top-start",
    });
