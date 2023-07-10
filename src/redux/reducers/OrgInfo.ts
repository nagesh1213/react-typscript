import { ActionTypes } from "../actions/ActionTypes";

interface IFetchOidInfo {
  type: ActionTypes.FETCH_OID_INFO;
  payload: {
    data: Object;
    loading: boolean;
  };
}

export interface IOrgInfo {
  orgInfo: Object;
  loading: boolean;
}

export const initialConfigState = {
  orgInfo: {},
  loading: false,
};

export function config(
  state: IOrgInfo = initialConfigState,
  action: IFetchOidInfo
): any {
  switch (action.type) {
    case ActionTypes.FETCH_OID_INFO:
      return {
        ...state,
        orgInfo: action.payload.data || state.orgInfo,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}
