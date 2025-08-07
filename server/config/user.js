const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    course_name:"String",
    course_price:"Number",
    course_duration:"Number",
    img_address:"String"
});

module.exports = mongoose.model('courses', userSchema);