"use client";

//フレームワーク
import { NextPage } from "next";
//コンポーネントライブラリ
import Button from "@mui/material/Button";
import { InputLabel } from "@mui/material";
//自作コンポーネント
import { ComMainBar } from "../CommonTS/styles/ComMainBar";
import { useRestCall } from "./hooks/useRestCall";
import { createClient } from "@vercel/postgres";

const Page: NextPage = () => {
  const { responseStr, restCall } = useRestCall();

  async function queryPosts() {
    const client = createClient();
    await client.connect();

    try {
      const likes = 100;
      const { rows, fields } =
        await client.sql`SELECT * FROM posts WHERE likes > ${likes};`;
    } finally {
      await client.end();
    }
  }

  const onClickButton = () => {
    queryPosts();
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
