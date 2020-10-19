export const userParam = {
    name: "user",
    in: "body",
    description: "User with new values of properties",
    schema: {
      $ref: "#/definitions/updateUser"
    }
  }

export const idParam = {
    name: "id",
    in: "path",
    required: true,
    description: "ID of user that we want to find",
    type: "string"
}

export const getUsers = {

    tags: [
        "Users"
    ],
    summary: "Get all users in system",
    responses: {
        200: {
            description: "OK",
            schema: {
                $ref: "#/definitions/Users"
            }
        }
    }
}

export const addUser = {
    tags: [
        "Users"
    ],
    summary: "Add a user"
    ,
    description: "Create new user in system",
    parameters: [
        {
            "name": "user",
            "in": "body",
            "description": "User that we want to create",
            "schema": {
                "$ref": "#/definitions/User"
            }
        }
    ],
    produces: [
        "application/json"
    ],
    responses: {
        "201": {
            "description": "New user is created",
            "schema": {
                "$ref": "#/definitions/User"
            }
        }
    }
}

export const deleteUser = {
    summary: "Delete user with given ID",
    tags: [
      "Users"
    ],
    responses: {
      200: {
        description: "User is deleted",
        schema: {
          $ref: "#/definitions/User"
        }
      }
    }
}

export const getUserById = {
  summary: "Find user with give ID",
    tags: [
      "Users"
    ],
    parameters: [
      idParam
    ],
    responses: {
      200: {
        description: "This user",
        schema: {
          $ref: "#/definitions/User"
        }
      }
    }
}

export const updateUser = {
    summary: "Update user with give ID",
    tags: [
      "Users"
    ],
    parameters: [
      userParam
    ],
    responses: {
      200: {
        description: "User is updated",
        schema: {
          $ref: "#/definitions/User"
        }
      }
    }
  }


