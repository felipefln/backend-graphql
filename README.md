# Backend NODEJS - GraphQL - MongoDB

<p align="center">
Backend criado em NodeJS, GraphQL, e armazenando os dados no MongoDB instanciado em um container Docker

# Stack
- NodeJS
- Express
- GraphQL-GraphQL-Yoga
- Apollo-Client
- Mongoose
- MongoDB
- Docker/Docker-compose
- Restify (in PROD)
- PM2 (in PROD)
- \* [check package.json](/backend-graphql/package.json)

### How to run the development mode
# GraphQL
mutation {
  createUser(name: "felipe", email: "felipe@felipe.com") {
    id
  }
}

query {
  users {
    id
    name
    email
  }
}

POST/apartmant

{
	"number": 206,
	"blc": 2,
	"member": [
		{
			"name": "Felipe",
			"dateBirth": "10/10/2000",
			"phone": "8888888",
			"document": "5555555",
			"email": "felipe@felipe.com",
			"resp": true
		}
	]
}

GET /apartmant

[
  {
    "_id": "5eb1c3673825f8bc0c42244b",
    "number": 206,
    "blc": 2,
    "member": [
      {
        "_id": "5eb1c3673825f8bc0c42244c",
        "name": "Felipe",
        "dateBirth": "10/10/2000",
        "phone": "8888888",
        "document": "5555555",
        "email": "felipe@felipe.com",
        "resp": true
      }
    ],
    "__v": 0
  }
]

DELETE /apartmant/:id


**Example run Backend:**
1. Clone your repository `git clone git@github.com:felipefln/backend-graphql.git`
2. Go to the dir: `cd backend-graphql`
3. Install dependen: `sudo make up`
4. Copy .env.example => .env: 


## More info

By Felipe Weiduschadt de Carvalho