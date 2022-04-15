const { UserList, MovieList } = require("../FakeData");

const resolvers = {
  Query: {
    // USER Resolvers
    users: (_parent, _args, context, info) => {
      // console.log("context", context);
      // console.log("info", info);
      // if(UserList)
      //   return { users: UserList };
      
      // return {
      //   message: "An error has occured"
      // }
      return UserList;
    },
    user: (_parent, args) => {
      const found = UserList.find((item) => item.id === Number(args.id));
      return found ? found : null;
    },

    // MOVIE Resolvers
    movies: () => {
      return MovieList;
    },

    movie: (_parent, args) => {
      const found = MovieList.find((item) => item.name === args.name);
      return found;
    },
  },

  Mutation: {
    // Create-User resolver
    createUser: (_parent, args) => {
      const user = args.input;
      user.id = UserList.length + 1;
      UserList.push(user);
      return user;
    },

    // Update-username resolver
    updateUser: (_parent, args) => {
      const { id, newUsername } = args.input;
      const user = UserList.find((item) => item.id === Number(id));
      if (user) {
        user.username = newUsername;
      }
      return user;
    },

    // Delete user resolver
    deleteUser: (_parent, args) => {
      const { id } = args;
      const index = UserList.findIndex((item) => item.id === Number(id));
      if (index >= 0) {
        UserList.splice(index, 1);
      }
      return null;
    },

    addMovie: (_parent, args) => {
      const movie = args.input;
      movie.id = MovieList.length + 1;
      MovieList.push(movie);
      return movie;
    },
  },

  // UsersResult: {
  //   __resolveType(obj) {
  //     if(obj.users) {
  //       return "UsersSuccessfulResult";
  //     }

  //     if(obj.message) {
  //       return "UsersErrorResults";
  //     }

  //     return null;
  //   }
  // }
};

module.exports = { resolvers };
