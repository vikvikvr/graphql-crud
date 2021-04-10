const db = require('../database/db');
const { filter, find } = require('lodash');

const resolversMap = {
  Query: {
    users: function () {
      return db.getUsers();
    },
    user: async function (parent, { id }) {
      var users = await db.getUsers();

      return find(users, { id });
    },
    post: async function (parent, { id }) {
      const posts = await db.getPosts();

      return find(posts, { id });
    },
    posts: function () {
      return db.getPosts();
    }
  },
  Mutation: {
    addUser: function (parent, { input }) {
      return db.addUser(input);
    },
    addPost: function (parent, { input }) {
      return db.addPost(input);
    },
    updateUser: function (parent, { input, id }) {
      return db.updateUser(input, id);
    },
    updatePost: function (parent, { input, id }) {
      return db.updatePost(input, id);
    },
    deleteUser: function (parent, { id }) {
      return db.deleteUser(id);
    },
    deletePost: function (parent, { id }) {
      return db.deletePost(id);
    }
  },
  User: {
    posts: async function (user) {
      const posts = await db.getPosts();

      return filter(posts, { author: user.id });
    }
  },
  Post: {
    author: async function (post) {
      const users = await db.getUsers();

      return find(users, { id: post.author });
    }
  }
};

module.exports = resolversMap;
