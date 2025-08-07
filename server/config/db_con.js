const mongoose = require("mongoose")
require("dotenv").config({path:"./.env"})
const db_url = process.env.db_url
const con = mongoose.connect(db_url)
module.exports = con