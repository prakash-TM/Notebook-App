import { userModel } from "./model";
import{Request,Response} from "express"
const addNewUser=async(req:Request,res:Response)=>{
    const{
        userName,
        name,
        email,
        jobDetails:{
            title,
            designation,
            organization,
            isWorking
        },
        contactNumber,
        dob,
        gender,
        password,
        isActive,
        isVerified,
        roles:[{
            r_id,
            r_isActive
        }],
        group:[{
            g_id,
            g_isActive
        }],
        lastActive

    }=req.body



const userPayload={
    userName,
        name,
        email,
        jobDetails:{
            title,
            designation,
            organization,
            isWorking
        },
        contactNumber,
        dob,
        gender,
        password,
        isActive,
        isVerified,
        roles:[{
            r_id,
            r_isActive
        }],
        group:[{
            g_id,
            g_isActive
        }],
        lastActive
}

const response=await userModel.create(userPayload)
if(!response){
    res.send({message:"User is not created"})
}
res.send({message:"User created successfully"})
}


const getUser=async(req:Request,res:Response)=>{
    const response=await userModel.find()
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send({response})
}

const getSingleUser=async(req:Request,res:Response)=>{
    const response=await userModel.find({name:"prakash"})
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send({response})
}

const removeSingleUser=async(req:Request,res:Response)=>{
    const response=await userModel.remove({name:"prakash"})
    if(!response){
        res.send({message:"not able to delete record"})
    }
    res.send({message:"records deleted successfully"})
}

const removeUser=async(req:Request,res:Response)=>{
    const response=await userModel.remove()
    if(!response){
        res.send({message:"not able to delete records"})
    }
    res.send({message:"records deleted successfully"})
}

export{addNewUser,getUser,getSingleUser,removeSingleUser,removeUser}