import config from "../config/config";

import  { Client, Account, ID } from "appwrite";

// const client = new Client()
// .setEndpoint(config.appwriteURL)
// .setProject(config.appwriteProjectId)

// const account = new Account(client)

// const user = await account.create(
//     ID.unique(),
//     "email@example.com",
//     "password"
// )

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client) 
    }

    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if(userAccount){
                return this.login({email,password})
            }
            else{
                return userAccount
            }
        }
        catch(error){
            console.log("AUTHSERVICE :: CREATE ACCOUNT ERROR" , error);
            
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }
        catch(error){
            console.log("AUTHSERVICE :: LOGIN ERROR" , error);
        }
    }

    async getUser(){
        try{
            return await this.account.get();
            
        }
        catch(error){
            console.log("AUTHSERVICE :: GET CURRENT USER ERROR" , error);
        }
        
    }

    async logOut(){
        try{
            await this.account.deleteSessions()
        }
        catch(error){
            console.log("AUTHSERVICE :: LOGOUT ERROR" , error);
            
        }
        
    }
}

const authService = new AuthService()

export default authService