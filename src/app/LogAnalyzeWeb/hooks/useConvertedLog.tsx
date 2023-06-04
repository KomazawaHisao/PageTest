//フレームワーク
import { useState } from "react";
import axios from "axios";
//自作コンポーネント
import { Defines } from "./prodDefines";

//型宣言
type ConvertLogT = {
  converted: string;
};

export const useConvertedLog = () => {
  const [convertedLog, setConvertedLog] = useState<ConvertLogT>({
    converted: "",
  });
  const convertLog = (text: string) => {
    axios
      .get(Defines.restURL + ".convertLog", {
        params: { text: text },
      })
      .then((result) => {
        setConvertedLog(result.data);
      })
      .catch(() => {
        alert("error");
      })
      .finally(() => {});
  };
  return { convertedLog, convertLog };
};
