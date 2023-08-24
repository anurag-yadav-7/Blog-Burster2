var jwt = require('jsonwebtoken')

const fetchuser = (req,res,next) => {

    //  Get the user from the token and add it to req object
    const token = req.header('auth-token');
    // console.log("token: "+token);
    if(!token)
    {
        console.log("Auth token not found!!");
        res.status(401).send({error: "Please authenticate using a valid token!"});
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        // console.log(data.user);
        next();

    } catch (error) {
        console.log("Couldn't verify!");
        res.status(401).send({error: "Please authenticate using a valid token!"});
    }
}

module.exports = fetchuser;