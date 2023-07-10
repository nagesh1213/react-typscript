import { ActionTypes } from "./ActionTypes";
import { Dispatch } from "redux";
import { setValue } from "./CommonUtils";
import { api } from "../../api/api";

export const fetchOidInfo =
  (oid: string = "000") =>
  async (dispatch: Dispatch<any>) => {
    try {
      const url = `/user/oidInfo/${oid}`;
      const { data } = await api.get(url);
      dispatch(
        setValue(ActionTypes.FETCH_OID_INFO, {
          orgInfo: data.orgInfo,
        })
      );
    } catch (error) {
      // handle your error
    }
  };
