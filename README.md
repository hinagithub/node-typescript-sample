# Node.js + Typescript のコーディング色々

## express

```
npm run ts
```

```
curl http://localhost:3000/test

> OK
```

## elasticsearch

```
docker compose up -d
```

ブラウザ

```
http://localhost:5601/app/home#/
```

![image](https://user-images.githubusercontent.com/44778704/220254076-d504b0f9-4b71-42f6-a532-d7c081b5983c.png)

左のメニューから DevTool を選択するとコンソールが開いてクエリを投げることが可能

![image](https://user-images.githubusercontent.com/44778704/220254278-2d85a997-4cc2-403e-9a6a-bf9d5659aaad.png)

- index = database のようなもの
- index/

- 作成

```
PUT /user/_doc/1
{
  "ID": "001",
  "Name":"Taro",
  "Created_at":"2023/11/01 09:00 JST"
}
```

- 一覧取得

```
GET /_aliases
```

- 詳細取得

```
GET /user/_doc/1
```

- 削除

```
DELETE /user/_doc/1
```

※注意: DELETE /user にすると配下のデータ全部消える

#### Node.js で操作
