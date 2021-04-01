const User = require("../User")

const alluserGetController = (req,res) =>{

    const { userName, email, password } = req.body

  User.find()
        .then(result =>{
            res.status(200).json({
                message:" all user ",
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

module.exports = alluserGetController
