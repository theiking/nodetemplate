export const signIn = {
    tags: [
        "Auth"
    ],
    summary: "signIn"
    ,
    description: "signIn and receive token",
    parameters: [
        {
            name: "signInUser",
            in: "body",
            description: "Email and password",
            schema: {
                "$ref": "#/definitions/signInUser"
            }
        }
    ],
    produces: [
        "application/json"
    ],
    responses: {
        "200": {
            description: "Signin successfully and receive token"
        },
        "400": {
            description: "Signin failure!"
        }
    }
}

export const signUp = {
    tags: [
        "Auth"
    ],
    summary: "Signup"
    ,
    description: "Signup and create a account",
    parameters: [
        {
            "name": "User",
            "in": "body",
            description: "User information",
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
            description: "Signup successfully",
            
        },
        "400": {
            description: "Signup failure cause of invalid data!"
        },
        "409": {
        description: "Email has already been taken!"
        }
    }
}