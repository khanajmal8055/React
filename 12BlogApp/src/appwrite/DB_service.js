import config from "../config/config";

import {Client,ID , Databases,Storage,Query} from "appwrite"


export class DatabaseService{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client)    
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                // ID.unique(),
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )
        }
        catch(error){
            console.log("APPWRIE : CREATE POST ERROR" ,error);
            
        }
    }

    async updatePost (slug,{title,content,featuredImage,status}) {
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status

                }
            )
        }
        catch(error){
            console.log("APPWRIE UPDATE POST ERROR ::" , error);
            
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                
            )
            return true
        }
        catch(error){
            console.log("APPWRITE SERVICE :: DELETE POST ERROR" , error);
            return false
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        }
        catch(error){
            console.log("APPWRITE SERVICE :: GET POST ERROR" ,error);
            return false
            
        }
    }

    async getAllPost(queries = [Query.equal('status','active')]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        }
        catch(error)
        {
            console.log("APPWRITE SERVICE :: GET All POST ERROR" ,error);
            
        }
    }

    // file upload service

    async fileUpload(file){
        try{
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            )
        }
        catch(error){
            console.log("APPWRITE SERVICE :: FILE UPLOAD ERROR " ,error );
            return false
        }
    }

    // file delete service

    async deleteFile(fileId){
        try{
             await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        }
        catch(error){
            console.log("APPWRITE SERVICE :: FILE DELETE ERROR" , error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            config.appwriteBucketId, 
            fileId
        )
    }



}

const databaseService = new DatabaseService()

export default databaseService

