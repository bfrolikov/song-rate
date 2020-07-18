const mongoose = require('mongoose')


const mongoURI = `mongodb+srv://bfrolikov:${process.env.MONGO_PASSWORD}@projects.z8u47.mongodb.net/songRate?retryWrites=true&w=majority`

mongoose
.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result=>{
    console.log('connected to the database');
})
.catch(error=>{
    console.log('error connecting');
})

const ratingSchema = new mongoose.Schema({
    rating:{
        type:Map,
        of:Number
    }
})

module.exports = mongoose.model('Rating',ratingSchema);

