const notesModel = require("../Model/Notes")


const createNotes = async(req,res)=>{     
    const body = req.body//gets data from client
try{
    //checks if message is empty
    if(body.title === "" || body.message === ""){ //send error msg to client
        res.status(404).json({ message: "message shouldn't be empty"})
}
//save data in database
const saveData = await notesModel.create({  //create means inserting
    title: body.title,
    message: body.message,
    category: body.category
})
res.status(200).json({ message: "notes saved  successfully", data: saveData})
} catch(error) {
    res.status(500).json({ message: "server error" })
}
}



const getAllNotes = async(req,res)=>{
    try{
        //find(): if we want to fetch all the data 
    const notes = await notesModel.find() //we want to fetch all the data connections from database and display in frontend(findOne() for finding one data)
    res.json({message: "notes sent successfully", data:notes}) //respond to client by displaying in frontend
}catch(error) {
    res.status(500).json({message: 'error fetching the notes'}) //display if error
}
}



const updateNotes = async(req,res)=>{
    try{
    //http://localhost:8000/api/updateNotes/54896473
    //here (some random id number) id ex:54896473 shown above is mentioned as ' URLSearchParams.id' 
    const updated = await notesModel.findByIdAndUpdate(
        req.params.id, //which document to update
         req.body,          //new data to update
         { new: true })     //return the updated document instead of the old one


if(!updated)
{
    res.status(404).json({ message: 'notes not found!'})
}
res.status(200).json({ message: 'updated successfully', data: updated })
} catch(error) {
    res.status(500).json({message: 'error updating note', error})
}
}


const deleteNotes = async(req,res)=>{
    try{
        const deleted = await notesModel.findByIdAndDelete(req.params.id)

        if(!deleted){
            res.status(404).json({message: "notes not found"})
        }
        res.status(200).json({ message: "notes deletred successfully" })
        } catch(error) {
            res.status(500).json({ message: "error deleting notes",error})
        }
}

module.exports = {
    createNotes,
    getAllNotes,
    updateNotes,
    deleteNotes
}

