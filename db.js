const mongoose= require('mongoose');


// const mongoURI ="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%directConnection=true&ssl=false"

const connectToMongo = () =>{
    mongoose.connect("mongodb://0.0.0.0:27017/authorization?directConnection=true").then(() => {
  console.log("database cnnected");}).catch((err) => {
  console.log("error while connecting to database",err)
})
}
    module.exports = connectToMongo;