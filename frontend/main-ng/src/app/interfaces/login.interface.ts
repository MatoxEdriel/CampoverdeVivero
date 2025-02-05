export interface ILogin {
    user: string,
    password: string,
    logged: boolean
}

export interface ISignUp {
    firstname: string,
    lastname: string,
    email: string,
    birthdate: string,
    password: string
}