const User = require("../User")

const singleUserGetController = (req,res) =>{

    const { userName } = req.params

  User.findOne({_userName:userName})
        .then(result =>{
            res.status(200).json({
                message:" one user ",
                result
            })
        })
        .catch( error =>{
            res.status(400).json({
                message:" No user yet",
                error
            })
        })
}

module.exports = singleUserGetController
