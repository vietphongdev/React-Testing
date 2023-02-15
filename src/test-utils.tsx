import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { AppProviders } from "./providers/AppProviders";

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProviders, ...options });
