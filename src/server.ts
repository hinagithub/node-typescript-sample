import express from "express"
import { add, getAll } from "./driver/elasticsearch"
const app: express.Express = express()

// サーバ起動
app.listen(3000, () => {
  console.log("Start on port 3000.")
})

// GETテスト
app.get("/test", (req: express.Request, res: express.Response) => {
  res.send("OK")
})

// POST elasticsearch
app.post("/es/users", async (req: express.Request, res: express.Response) => {
  await add({
    ID: "003",
    Name: "Shiro",
    Created_at: "2023/11/01 09:00 JST",
  })
  res.send("OK")
})

// GET elasticsearch list
app.get("/es/users", async (req: express.Request, res: express.Response) => {
  const result = await getAll()
  res.send(result)
})
