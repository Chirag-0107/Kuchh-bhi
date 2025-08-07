const User = require('../config/user'); // Adjust path if needed
// const connectDB = require('../config/dbConn');
exports.getData = async(req, res) => {
    let data=await User.find()
    res.json(data)
};
exports.putData=async(req, res)=>{
    let data =await User.find()
    res.send(data[0]._id)
}
exports.updateData = async (req, res) => {
   let data=await User.updateOne(
    req.params,{
        $set:req.body
    }
)
res.send(data)
};
exports.deleteData=async(req,res)=>{
    let data=await User.deleteOne(
        req.params
    )
}

exports.sendData = async (req, res) => {
        const usera = new User({
            course_name: req.body.course_name,
            course_price: req.body.course_price,
            course_duration: req.body.course_duration,
            img_address: req.body.img_address
        });
     usera.save();
};  