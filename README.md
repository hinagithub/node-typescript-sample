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
http://localhost:5601/app/dev_tools#/console
```

(ホーム画面からはサイドメニューの `dev Tools`押下で移動可能)

- 新規作成

```
POST /user/_doc
{
  "ID": "001",
  "Name":"Taro",
  "Created_at":"2023/11/01 09:00 JST"
}
```

- 編集

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

- 新規登録

```
curl -X POST http://localhost:3000/es/users
```

- 一覧取得

```
http://localhost:3000/es/users

> 実行結果
[
	{
		"_index": "user",
		"_type": "_doc",
		"_id": "xxxxx",
		"_score": 1,
		"_source": {
			"ID": "002",
			"Name": "Taro",
			"Created_at": "2023/11/01 09:00 JST"
		}
	},
	{
		"_index": "user",
		"_type": "_doc",
		"_id": "yyyyy",
		"_score": 1,
		"_source": {
			"ID": "003",
			"Name": "Shiro",
			"Created_at": "2023/11/01 09:00 JST"
		}
	}
]
```
