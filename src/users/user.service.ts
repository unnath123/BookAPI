import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";


@Injectable()
export class UserService{
    public users : User[] = [
        {
            username : "user1",
            password : "user1123",
            email: "user1@gmail.com"
        },
        {
            username : "user2",
            password : "user2123",
            email: "user2@gmail.com"
        },
        {
            username : "user3",
            password : "user3123",
            email: "user3@gmail.com"
        },
        {
            username : "user4",
            password : "user4123",
            email: "user4@gmail.com"
        }
    ]

    getUserByUserName(username : string) : User{
        return this.users.find((user)=>user.username === username)
    }
}