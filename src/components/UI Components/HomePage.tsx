import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchOidInfo } from "../../redux/actions/ConfigAction";

const HomePage = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchOidInfo("000"));
    }, 1000);
  }, []);
  return (
    <React.Fragment>
      <div>
        <h1>Its Schedule React App...!</h1>
      </div>
    </React.Fragment>
  );
};
export default HomePage;
