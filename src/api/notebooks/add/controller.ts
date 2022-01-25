import { Request, Response } from "express";
import { noteBookModel } from "./model";
/**
 * Add / Create a new Notebbok
 */

/**
 *
 * @param _req
 * @param res
 *
 * Step 1 - Obtain payload from the request / Obtaning a data from the request
 * Step 2 - Prepare request for creating a notebook / What we need to insert in the database
 * Step 3 - Create a new Notebook
 * Step 3.1 - Handle if it's getting failed
 * Step 4 - Return success response
 */

// Defining a routes
const addNewNotebook = async(req: Request, res: Response) => {
    const { title, description, userId } = req.body;

    // To store in the db
    const requestPayload = {
        title,
        description,
        userId,
    };

    // Calling the noteBookModel
    const response = await noteBookModel.create(requestPayload);
    if (!response) {
        res.send({ message: "Notebook is not created" });
    }
    res.send({ message: "Notebook created successfully" });
};

const getNotebook=async(req:Request,res:Response)=>{
    const response=await noteBookModel.find()
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send({response})
}

const getSingleNotebook=async(req:Request,res:Response)=>{
    const response=await noteBookModel.find({title:"iron man"})
    if(!response){
        res.send({message:"can't find user"})
    }
    res.send({response})
}

const removeSingleNotebook=async(req:Request,res:Response)=>{
    const response=await noteBookModel.remove({title:"iron man"})
    if(!response){
        res.send({message:"not able to delete record"})
    }
    res.send({message:"records deleted successfully"})
}

const removeNotebook=async(req:Request,res:Response)=>{
    const response=await noteBookModel.remove()
    if(!response){
        res.send({message:"not able to delete records"})
    }
    res.send({message:"records deleted successfully"})
}

export{addNewNotebook,getNotebook,getSingleNotebook,removeSingleNotebook,removeNotebook}