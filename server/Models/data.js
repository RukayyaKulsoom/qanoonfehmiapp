
const mongoose = require('mongoose');

const volumesSchema = new mongoose.Schema({
  
  name: {
    type: String,
   
  },
  content: {
    type: String,
     required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const volumes = mongoose.model('volumes', volumesSchema);

module.exports = volumes;

