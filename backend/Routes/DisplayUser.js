const express = require('express')
const router = express.Router()


router.post('/usermanagement', (req, resp) => {
    try {
        console.log([global.user_management_data])
        resp.send([global.user_management_data])

    } catch (error) {
        console.error(error.message);
        resp.send("Server Error")
    }
})


module.exports = router;