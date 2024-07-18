const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const { body, validationResult } = require('express-validator');
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const jwtSecret = "MynameisEndtoEndYoutubeChannel$#"
// const mongoose = require('mongoose')
const mongodb = require('mongodb');
const UserManagement = require('../models/UserManagement');

router.delete('/deleteuser/:_id',
    async (req, resp) => {
        try {

            let value = await UserManagement.deleteOne({ _id: new mongodb.ObjectId(req.params._id) });
            return resp.json({ success: true });

        } catch (error) {
            console.log(error)
            return resp.json({ success: false });


        }
    })


module.exports = router;