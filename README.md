# GraphQL CRUD

Simple [express](https://www.npmjs.com/package/express) server that implements CRUD operations on a [graphQL](https://graphql.org/) endpoint. A non-persistent JSON database is used for mock data.


### Usage

```bash
git clone https://github.com/vikvikvr/graphql-crud.git
cd graphql-crud
npm install
npm start
```

Now open the browser and visit `http://localhost:5000/graphql` to start interacting with [GraphiQL](https://github.com/graphql/graphiql).



### API

##### Types

```graphql
type User {
  id: ID
  firstname: String
  lastname: String
  username: String
  posts: [Post]
}
type Post {
  id: ID
  title: String
  content: String
  author: User
}
```

##### Queries

```graphql
type Query {
  users: [User]
  user(id: ID): User
  posts: [Post]
  post(id: ID): Post
}
```

##### Mutations

```graphql
type Mutation {
  addUser(input: UserInput): User
  addPost(input: PostInput): Post
  updateUser(input: UserInput, id: ID): User
  updatePost(input: PostInput, id: ID): Post
  deleteUser(id: ID): [User]
  deletePost(id: ID): [Post]
}
```

Use the `docs` on the top right of the graphiQL interface to get help while trying these out.