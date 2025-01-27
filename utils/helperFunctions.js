exports.throwError=(status,message)=>{
    throw new Error(JSON.stringify({status,message}))
}

exports.sendResponse=(status,message,data={})=>{
   return {status:status,message:message,data}
}