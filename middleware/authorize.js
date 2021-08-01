const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    //GET THE FROM REQUEST HEADER
    let token = req.header('Authorization')
    if (!token) return res.status(401).send("Access Denied!!")
    token = token.split(" ")[1].trim();

    //VERIFY TOKEN
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        //ERROR MESSAGE
        return res.status(400).send("invalid Token");
    }


}