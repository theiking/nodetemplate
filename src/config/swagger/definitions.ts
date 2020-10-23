export const definitions = {
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
    signInUser: {
        required: [
          "email",
          "password",
        ],
        properties: {
          email: {type: "string"},
          password: {type: "string"}
        }
    },
    Users: {
      type: "array",
      $ref: "#/definitions/User"
    }
  }