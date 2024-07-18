const mongoose = require('mongoose');
const mongoURI = 'mongodb://ankit2020cs142:Ankit$123456@ac-gitwuzs-shard-00-00.thjgieq.mongodb.net:27017,ac-gitwuzs-shard-00-01.thjgieq.mongodb.net:27017,ac-gitwuzs-shard-00-02.thjgieq.mongodb.net:27017/adminpaneldevelopment?ssl=true&replicaSet=atlas-tr7fnr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';


async function dbConnect() {

    await mongoose.connect(mongoURI).then(async () => {
        console.log("Connected Successfully !!");
        const user_management= await mongoose.connection.db.collection('usermanagements')
        await user_management.find({}).toArray().then(
            async (data, err) => {


                if (err) {
                    console.log("---", err);
                } else {

                    global.user_management_data = data;
                    // global.user_profile_data = userdata;
                }


            })


    }).catch((err) => {
        console.log("---", err);
    });


}

module.exports = dbConnect();