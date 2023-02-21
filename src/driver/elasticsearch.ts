import { Client, estypes } from "@elastic/elasticsearch"

type Document = {
  ID: string
  Name: string
  Created_at: string
}

const client = new Client({
  node: "http://localhost:9200",
})
const INDEX = "user"

export const add = async (document: Document) => {
  const result = await client.index({
    index: INDEX,
    document,
  })
  console.log(result)
}

export const getAll = async (): Promise<any> => {
  const result = await client.search({
    index: INDEX,
    query: {
      match_all: {},
    },
  })
  console.log("検索結果: ", result)
  return result?.hits?.hits
}

// export const get = async () => {
//   const result = await client.get({ index: INDEX, id: 1 })
// }

// async function run() {
//   // Let's start by indexing some data
//   await client.index({
//     index: "game-of-thrones",
//     document: {
//       character: "Ned Stark",
//       quote: "Winter is coming.",
//     },
//   })

//   await client.index({
//     index: "game-of-thrones",
//     document: {
//       character: "Daenerys Targaryen",
//       quote: "I am the blood of the dragon.",
//     },
//   })

//   await client.index({
//     index: "game-of-thrones",
//     document: {
//       character: "Tyrion Lannister",
//       quote: "A mind needs books like a sword needs a whetstone.",
//     },
//   })

//   // here we are forcing an index refresh, otherwise we will not
//   // get any result in the consequent search
//   await client.indices.refresh({ index: "game-of-thrones" })

//   // Let's search!
//   const result = await client.search<Document>({
//     index: "game-of-thrones",
//     query: {
//       match: { quote: "winter" },
//     },
//   })

//   console.log(result.hits.hits)
// }

// run().catch(console.log)
