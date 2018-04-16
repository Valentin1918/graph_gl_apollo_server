const { users } = require('./users');

const resolvers = {
  Query: {
    users(_, args, context, info) {
      return users.find(user => user.id === +args.id);
    },
  },
  User: {
    friends(user, args) {
      return user.friends.filter(friend => friend.alcoholic === args.alcoholic);
    },
  },
  Friend: {
    name(friends) {
      return friends.name;
    },
  },
};

module.exports = resolvers;