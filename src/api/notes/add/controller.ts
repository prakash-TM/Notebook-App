import {  notesModel } from "./model";
import { Request,Response } from "express";
const addNewNotes=async(req:Request,res:Response)=>{
    const{ 
        title ,
        authorId ,
        authorName ,
        email ,        
        tags:[{name}],
        place,       
        location:{type,coordinates,required},
        content,
        category,      
        thumbnails:[{path,createdAt,updatedAt,deviceType}],       
        video:{titleV,creditedByV},
        soundClips:{titleS,creditedByS},
        status,
        isActive,
        accessType,
        isPrivate,
        contributors:[{userId,userAccess}],
        noteBookId
    }=req.body


const requestPayload={
    title ,
    authorId ,
    authorName ,
    email ,
    tags:[{name}],
    place,
    location:{type,coordinates,required},
    content,
    category,
    thumbnails:[{path,createdAt,updatedAt,deviceType}],
    video:{titleV,creditedByV},
    soundClips:{titleS,creditedByS},
    status,
    isActive,
    accessType,
    isPrivate,
    contributors:[{userId,userAccess}],
    noteBookId
}
const response=await notesModel.create(requestPayload)
if(!response){
    res.send({message : "Notes is not created"})
}
res.send({message :"Notes created successfully"})
}


const getNotes=async(req:Request,res:Response)=>{
    const response=await notesModel.find()
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send({response})
}

const getSingleNotes=async(req:Request,res:Response)=>{
    const response=await notesModel.find({title:"iron man"})
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send({response})
}

const removeSingleNotes=async(req:Request,res:Response)=>{
    const response=await notesModel.remove({title:"iron man"})
    if(!response){
        res.send({message:"not able to delete record"})
    }
    res.send({message:"records deleted successfully"})
}

const removeNotes=async(req:Request,res:Response)=>{
    const response=await notesModel.remove()
    if(!response){
        res.send({message:"not able to delete records"})
    }
    res.send({message:"records deleted successfully"})
}

export{addNewNotes,getNotes,getSingleNotes,removeSingleNotes,removeNotes}