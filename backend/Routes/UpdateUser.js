const express = require('express');
const router = express.Router();
const UserManagement = require('../models/UserManagement')
const { body, validationResult } = require('express-validator');
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const jwtSecret = "MynameisEndtoEndYoutubeChannel$#"
const mongoose = require('mongoose')

router.put('/updateuser/:email', [
    body('email').isEmail(),
]
    ,
    async (req, resp) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() })
        }

        try {
            let data = await UserManagement.updateOne(
                { email: req.params.email },
                { $set: req.body })
            // return resp.send(data);
            return resp.json({ success: true });



        } catch (error) {
            console.log(error)
            return resp.json({ success: false });


        }


    })



router.post('/addnewuser',
    [
        body('email').isEmail(),
    ]
    ,
    async (req, resp) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() })
        }
        let email = req.body.email;
        try {
            let userData = await UserManagement.findOne({ email });
            if (userData) {
                return resp.status(400).json({ errors: "Email Alredy in Use !! Try SingUp with Other Email" });

            }
            else {

                await UserManagement.create({
                    name: req.body.name,
                    email: req.body.email,
                    date: req.body.date,
                    github: req.body.github,
                    website: req.body.website,
                    location: req.body.location,
                    bio: req.body.bio,
                    fieldofinterest: req.body.fieldofinterest,
                    seeking: req.body.seeking,
                    techstack: req.body.techstack,


                })
                return resp.json({ success: true });
            }

        } catch (error) {
            console.log(error)
            return resp.json({ success: false });

        }


    })


router.post('/userprofile/:email', async (req, resp) => {
    try {
        const user_profile = await mongoose.connection.db.collection('usermanagements')
        await user_profile.find({email : req.params.email}).toArray().then(
            async (data, err) => {
                if (err) {
                    console.log("---", err);
                } else {
                    if (data.length > 0) {
                        console.log(data)
                        // return resp.json({success:true});
                        return resp.send([data]);
                    }
                    else {
                        return resp.json({ success: false });
                    }
                }
            })

    } catch (error) {
        console.error(error.message);
        resp.send("Server Error")
    }
})






module.exports = router;