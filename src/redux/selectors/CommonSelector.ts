import { AppState } from "../../interfaces";
import { createSelector } from "reselect";

const config = (state: AppState) => state.config;

export const getConfig = createSelector(config, (data) => data);
