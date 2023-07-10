import { AppState } from "../../interfaces";

export const getPathname = (state: AppState) => state.router?.location.pathname;
