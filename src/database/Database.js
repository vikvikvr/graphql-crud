const { remove, merge, findIndex } = require('lodash');

class Database {
  data;

  constructor(data = { users: [], posts: [] }) {
    this.data = data;
  }

  addIdToData(data = {}, prefixChar = 'id') {
    const id = prefixChar + '_' + Date.now().toString(16);
    return { ...data, id };
  }

  addUser(userData = {}) {
    const newUser = this.addIdToData(userData, 'u');
    this.data.users.push(newUser);
    return Promise.resolve(newUser);
  }

  addPost(postData = {}) {
    const newPost = this.addIdToData(postData, 'p');
    this.data.posts.push(newPost);
    return Promise.resolve(newPost);
  }

  updateUser(newData = {}, id = '') {
    const index = findIndex(this.data.users, { id });
    const updated = merge(this.data.users[index], newData);
    this.data.users[index] = updated;
    return Promise.resolve(updated);
  }

  updatePost(newData = {}, id = '') {
    const index = findIndex(this.data.posts, { id });
    const updated = merge(this.data.posts[index], newData);
    this.data.posts[index] = updated;
    return Promise.resolve(updated);
  }

  deleteUser(id = '') {
    remove(this.data.users, { id });
    return Promise.resolve(this.data.users);
  }

  deletePost(id = '') {
    remove(this.data.posts, { id });
    return Promise.resolve(this.data.posts);
  }

  getUsers() {
    return Promise.resolve(this.data.users);
  }

  getPosts() {
    return Promise.resolve(this.data.posts);
  }
}

module.exports = Database;
