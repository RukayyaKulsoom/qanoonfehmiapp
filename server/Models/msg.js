const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  
    msg: {
        type: String,
         required: true
      },
    },
    {timestamps:true},

    

);

const message = mongoose.model('message', messageSchema);

module.exports = message;