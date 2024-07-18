const mongoose = require('mongoose');
const UserManagementSchema = new mongoose.Schema({

    name :{
        type : String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    date :{
        type: String,
        required:true
        // default: Date.now
    }
    ,github:{
        type : String,
        required:true
    },website:{
        type : String,
        required:true
    },
    location:{
        type : String,
        required:true
    },
    bio:{
        type : String,
        required:true
    },
    fieldofinterest:{
        type: Array,
        required: true

    }, seeking:{
        type: Array,
        required: true

    }, techstack:{
        type: Array,
        required: true

    }

});


module.exports = mongoose.model('UserManagement',UserManagementSchema);





