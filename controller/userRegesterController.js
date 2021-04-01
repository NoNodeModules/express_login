const User = require("../User")

const userRegesterController = (req,res) =>{

const { firstName, lastName, userName, email, phone, password } = req.body
//  create a new object 
    const user = new User({
                        firstName,
                        lastName,
                        userName, 
                        email, 
                        phone, 
                        password
                    });

    user.save()
    .then(user =>{
        res.status(400).json({
            message:'User save successfully',
            user
    })
})
    .catch(error =>{
        res.status(400).json({
        error
    })
    })
}

module.exports = userRegesterController
