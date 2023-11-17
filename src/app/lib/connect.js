import mongoose from 'mongoose'

const connectMongoDB = async () => {
    try{
await mongoose.connect(process.env.MONGO_URI)
console.log('connected')
    }
    catch (err) {
return Promise.reject (err)
console.log('error')
    }
}

export default connectMongoDB;