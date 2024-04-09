export interface User {
    exp: number,
    name: string,
    avatar: string,
    chat : Message,
    topic: string,
    education: Array<string>,
    id: number,
    cost: number,
    regalia: string,
    about: string
}

export interface Message {
    author: string
    message: string
    time: string
}