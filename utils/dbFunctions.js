const { sendResponse, throwError } = require("./helperFunctions")


exports.insertData=async(modelName,data)=>{
    try {
        const value=await modelName.create({...data})
        return sendResponse(200,"created data")
    } catch (error) {
        console.log(error)
    }
}

exports.updateData=async(modelName,id,newData)=>{
    try {
        const value=await modelName.findByIdAndUpdate(id,newData)
        return sendResponse(200,"created data")
    } catch (error) {
        console.log(error)
    }
}

exports.deleteDataById=async(modelName,id)=>{
    try {
        const value=await modelName.findByIdAndDelete(id)
        return sendResponse(200,"deleted data")
    } catch (error) {
        console.log(error)
    }
}

exports.getDataById=async(modelName,id)=>{
    try {
        const value=await modelName.findById(id)
        return sendResponse(200,"fetched data",data)
    } catch (error) {
        console.log(error)
    }
}