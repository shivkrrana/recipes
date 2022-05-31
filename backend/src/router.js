const express = require("express");
const router = new express.Router();



const User = require("./model");
router.use(express.json());


router.post("/signup", async (req, res) => {


    try {
        const userExist = await User.findOne({
            email: req.body.email
        })

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" })
        }
        else if (req.body.password != req.body.cpassword) {
            return res.status(401).send("Password not Matched");
        }

        else {
            const document = new User(req.body);
            console.log(req.body);
            const result = await document.save();
            res.status(201).send(result);
        }


    } catch (error) {
        res.status(400).send(error);
        console.log(error)
    }



});

router.post("/signin", async (req, res) => {
    try {
        const userExist = await User.findOne({
            email: req.body.email
        })

        console.log(userExist);
        if (userExist) {
            if (req.body.password == userExist.password) {
                return res.status(200).send("Login Successful")
            }
         }
        else res.status(400).send(error);
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;