# GraphQL CRUD

Simple [express](https://www.npmjs.com/package/express) server that implements CRUD operations on a [graphQL](https://graphql.org/) endpoint. A non-persistent JSON database is used for mock data.

### Try it out

<<<<<<< HEAD
App is live on [Heroku](https://vikvikvr-graphql-crud.herokuapp.com/graphql).
=======
App is live on [Heroku]([Heroku](https://vikvikvr-graphql-crud.herokuapp.com/graphql)).
>>>>>>> fb5a4a49fd0dda46e93cb8c67aff88b4395bed1c


### Local usage

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