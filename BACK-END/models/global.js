const mongoose = require('mongoose')
const global = new mongoose.Schema({
    room_id : {
        // default : null,
        type : String
    },
    seatcount : {
        type : String
    }
})
module.exports=mongoose.model('Room',global);
