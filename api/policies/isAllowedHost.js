module.exports = function (req, res, next) {
    let whitelist = ["www.linkt.com", "anotherdomain.com"];

    if (whitelist.includes(req.host)) {
        next();
    } else {
        console.log(req.host);
        res.status(400).json("Not allowed");
    }
};