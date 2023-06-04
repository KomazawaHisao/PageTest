//フレームワーク
import { useState } from "react";
import axios from "axios";
//自作コンポーネント
import { Defines } from "./prodDefines";

export const useRestCall = () => {
  const [responseStr, setResponseStr] = useState<string>("");
  const restCall = () => {
    axios
      .get(Defines.restURL + ".callRest")
      .then((result) => {
        setResponseStr(result.data.response);
      })
      .catch(() => {
        alert("error");
      })
      .finally(() => {});
  };
  return { responseStr, restCall };
};
