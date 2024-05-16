import User from "../model/userModel.js"
import upload from "../model/upload.js"

router.post('/users', upload.single('image'), async (req, res) => {
  try {
    const { name, summary } = req.body;
    const image = req.file.path;

    const newUser = new User({ name, image, summary });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
});
      
export const fetch = async (req,res)=>{
    try {
        const users = await User.find();
        if(users.length ===0){
                  return res.status(404).json({message: "User Not Found"});
        }
         res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
};

export const update = async (req,res) => {
  try{
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if (!userExist){
          return res.status(404).json({message:"User Not Found"})
        }
        const updateUser = await User.findByIdAndUpdate(id,req.body, {new:true})
        res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({error: "Internal Server error"});

  }
};

export const deleteUser = async (req, res) => {
  try {
         const id = red.params.id;
         const userExist = await User.findById({ _id: id});
         if (!userExist) {
          return res.status(404).json({message: "User Not Found"});
         }
         await User.findByIdAndDelete(id);
         res.status(201).json({message: "User Deleted Successfully"});
  }     catch (error) {
    res.status(500).json({error: "Internal Server Error"});
  }
};

module.exports = router;