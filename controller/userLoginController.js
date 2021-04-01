const bcrypt = require('bcrypt')

const userLoginController = (req,res) =>{

    const {userName, email, password } = req.body

    bcrypt.hash(myPlaintextPassword, 10, (err, hash)=>{
        // Store hash in your password DB.
    });

    // Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, (err, result)=>{

});
} 

module.exports = userLoginController