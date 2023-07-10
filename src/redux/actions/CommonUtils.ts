import { ActionTypes } from "./ActionTypes";

interface IResponse {
  type: ActionTypes;
  payload: { data: any; loading: boolean };
}
export const setValue = (type: ActionTypes, data: any): IResponse => {
  return {
    type,
    payload: {
      data,
      loading: data ? false : true,
    },
  };
};
