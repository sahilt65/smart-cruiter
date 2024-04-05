const mongoose = require("mongoose")
const connection = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://sahil:sahil@cluster0.pw55sh4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database connected");
    }

    catch (e) {
        console.log("DB Error: " + e);
    }
}

module.exports = connection;