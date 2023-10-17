var volume = require("../Models/data")
var message=require("../Models/msg")
var fb=require("../Models/feedback")

const Allvolume = async (req, res) => {
    const volumedata = await volume.find()
    if (volumedata !== []) {
        console.log(volumedata)
        res.json(volumedata)
    }
    else {
        console.log("No volume data")
        res.json("No volume data");
        
    }
}

const getonemessage = async (req, res) => {
  try {
    // Find the latest message in the database
    const latestMessage = await message.findOne().sort({ _id: -1 }).limit(1);

    if (!latestMessage) {
      return res.status(404).json({ error: 'No messages found' });
    }

    res.status(200).json(latestMessage);
  } catch (error) {
    console.error('Error retrieving latest message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const Allmessages= async (req, res) => {
  const messagedata = await message.find()
  if (messagedata !== []) {
      console.log(messagedata)
      res.json(messagedata)
  }
  else {
      console.log("No message data")
      res.json("No message data");
      
  }
}

const Createvolume = async (req, res) => {
    const { name, content} = req.body;
    
    const volumedata = await volume.create({ name, content })

  if (volumedata) {
    console.log(volumedata);
    res.json(volumedata);
  } else {
      console.log("volume Not Created");
      res.json("volume Not Created");
  }
};
const Createfeedback = async (req, res) => {
  const { id,email,feedback} = req.body;
  const feedbackdata = await fb.create({ id,email, feedback })

if (feedbackdata) {
  console.log(feedbackdata);
  res.json(feedbackdata);
} else {
    console.log("feedback Not Created");
    res.json("feedback Not Created");
}
};
const Createmessage= async (req, res) => {
  const { msg} = req.body;
 
  const timestamp = new Date(); // Get the current timestamp
  const chatMessage = new message({ msg, timestamp });
  await chatMessage.save();
  const messagedata = await message.create({ msg })

if (messagedata) {
  console.log(messagedata);
  res.json(messagedata);
} else {
    console.log("message Not Created");
    res.json("message Not Created");
}
};

const GetOnevolume = async (req, res) => {
  const id = req.params.id;
  const volumedata = await volume.findById(id);
    if (volumedata) {
      
    console.log("volume Found");
    res.json(volumedata);
  } else {
    console.log("volume Not Found");
  }
};


const Updatevolume = async (req, res) => {
    const {  content } = req.body;
    const id =req.params.id
  const volumedata = await volume.findById(id);
  if (volumedata) {
   
      volumedata.content = content
    
      const updatevolume = await volumedata.save()
      res.json(updatevolume)
  } else {
      console.log("volume Not Updated");
       res.json("volume Not Updated");
  }
};



const Deletevolume = async (req, res) => {
  
  const id = req.params.id;
  const volumedata = await volume.findById(id);
  if (volumedata) {
    await volumedata.remove()
      console.log("volume has been removed")
      res.json("volume has been removed")
  } else {
      console.log("volume Not Found");
      res.json("volume Not Found");
  }
};
const Deletefeedback = async (req, res) => {
  
  const id = req.params.id;
  const feedbackdata = await fb.findById(id);
  if (feedbackdata) {
    await feedbackdata.remove()
      console.log("feedback has been removed")
      res.json("feedback has been removed")
  } else {
      console.log("feedback Not Found");
      res.json("feedback Not Found");
  }
};

module.exports = {
  Allvolume,
  Createvolume,
  GetOnevolume,
  Updatevolume,
  Deletevolume,
  Createmessage,
  Allmessages,
  Createfeedback,
  Deletefeedback,
  getonemessage,
};