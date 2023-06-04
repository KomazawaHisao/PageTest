"use client";

//フレームワーク
import { NextPage } from "next";
//コンポーネントライブラリ
import Button from "@mui/material/Button";
import { InputLabel } from "@mui/material";
//自作コンポーネント
import { ComMainBar } from "../CommonTS/styles/ComMainBar";
import { useRestCall } from "./hooks/useRestCall";

const Page: NextPage = () => {
  const { responseStr, restCall } = useRestCall();

  const onClickButton = () => {
    restCall();
  };

  console.log(responseStr);

  return (
    <div>
      <ComMainBar>サンプルページ</ComMainBar>
      <p />
      <Button variant="contained" onClick={onClickButton}>
        実行
      </Button>
      <p />
      <InputLabel>{responseStr}</InputLabel>
    </div>
  );
};

export default Page;
