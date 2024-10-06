import React from "react";
import { Radio } from "react-loader-spinner";

function Loader() {
  return (
    <Radio
      visible={true}
      height="140"
      width="140"
      ariaLabel="radio-loading"
      wrapperStyle={{}}
      wrapperClass="radio-wrapper"
    />
  );
}

export default Loader;
