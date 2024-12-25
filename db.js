const mongoose= require('mongoose');


// const mongoURI ="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%directConnection=true&ssl=false"

const connectToMongo = () =>{
    mongoose.connect("mongodb+srv://userauthenticate:6E9wKGx-r3Qz7Z6@cluster0.i1dux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000, }).then(() => {
  console.log("database cnnected");}).catch((err) => {
  console.log("error while connecting to database",err)
})
}
    module.exports = connectToMongo;
