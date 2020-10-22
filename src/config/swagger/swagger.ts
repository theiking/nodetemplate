import * as User from './user'
import * as Auth from './auth';
import { definitions} from './definitions';

export const swaggerDocument = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Food app api documentation",
    description: "Food app Application API",
    license: {
      name: "Baemin",
      url: "http://192.168.1.140:3000/api/docs"
    }
  },
  host: "192.168.1.140:3000",
  basePath: "/",
  tags: [
    {
      name: "Users",
      description: "API for users in the system"
    },
    {
      name: "Auth",
      description: "API for signup and signin"
    }
  ],
  schemes: [
    "http"
  ],
  consumes: [
    "application/json"
  ],
  produces: [
    "application/json"
  ],
  paths: {
    "/api/user": {
      post: User.addUser,
      get: User.getUsers
    },
    "/api/user/{id}": {
      parameters: [
        User.idParam
      ],
      get: User.getUserById,
      delete: User.deleteUser,
      put: User.updateUser
    },
    "/api/auth/signin": {
      post: Auth.signIn,
    },
    "/api/auth/signup": {
      post: Auth.signUp
    }
  },
  definitions: definitions,
}

