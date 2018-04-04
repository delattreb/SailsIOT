module.exports = function (req, res, next) {
    let whitelist = ["www.linkt.com"]; // Add values if needed

    if (whitelist.includes(req.host)) {
        next();
    } else {
        console.log(req.host);
        res.status(400).json("Not allowed");
    }
};