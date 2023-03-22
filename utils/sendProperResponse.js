const sendProperResponse = (status = "unknown", message = "", data = []) =>{
    return {
        status: status,
        message: message,
        data: data
    }
}


module.exports = sendProperResponse ;
