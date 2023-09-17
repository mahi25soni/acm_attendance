const {attendance} = require("../../models/models")

const setRegistration = async (req, res, next) => {
    try {
        const newuser = new attendance(req.body)
        await newuser.save()
        res.status(200).json({sucess : true , "Message" : "Noted!"})
    }
    catch(e){
        next(e)
    }
}

module.exports = {
    setRegistration
}