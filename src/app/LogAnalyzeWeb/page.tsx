"use client";

//フレームワーク
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
//コンポーネントライブラリ
import { TextareaAutosize } from "@mui/base";
import Button from "@mui/material/Button";
//自作コンポーネント
import { ComMainBar } from "../CommonTS/styles/ComMainBar";
import { useConvertedLog } from "./hooks/useConvertedLog";

const Page: NextPage = () => {
  const [inputStr, setInputStr] = useState<string>("");
  const { convertedLog, convertLog } = useConvertedLog();

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputStr(e.target.value);
  };

  const onClickConvert = () => {
    convertLog(inputStr);
  };

  return (
    <div>
      <ComMainBar>ログ解析</ComMainBar>
      <p />
      <TextareaAutosize id="inputText" onChange={onChangeText} />
      <p />
      <Button variant="contained" onClick={onClickConvert}>
        変換
      </Button>
      <p />
      <TextareaAutosize readOnly value={convertedLog.converted} />
    </div>
  );
};

export default Page;
