import express from "express";
const app: express.Express = express();

// サーバ起動
app.listen(3000, () => {
  console.log("Start on port 3000.");
});

// GETテスト
app.get("/test", (req: express.Request, res: express.Response) => {
  res.send("OK");
});
