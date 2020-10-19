import * as User from './user'

export const swaggerDocument = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "My User Project CRUD",
    description: "My User Project Application API",
    license: {
      name: "Baemin",
      url: "http://localhost:3000/api/docs"
    }
  },
  host: "localhost:3000",
  basePath: "/",
  tags: [
    {
      name: "Users",
      description: "API for users in the system"
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
    }
  },
  definitions: {
    User: {
      required: [
        "fullName",
        "_id",
        "email",
        "password",
        "phone",
        "address",
        "location",
      ],
      properties: {
        _id: {
          type: "integer",
          uniqueItems: true
        },
        fullName: {
          type: "string"
        },
        email: {
          type: "string"
        },
        password: {
          type: "string"
        },
        phone: {
          type: "string"
        },
        address: {
          type: "string"
        },
        location: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }

    },
    UpdateUser: {
      required: [
        "fullName",
        "email",
        "password",
        "phone",
        "address",
        "location",
      ],
      properties: {
        fullName: {
          type: "string"
        },
        email: {
          type: "string"
        },
        password: {
          type: "string"
        },
        phone: {
          type: "string"
        },
        address: {
          type: "string"
        },
        location: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }


    },
    Users: {
      type: "array",
      $ref: "#/definitions/User"
    }
  }
}

