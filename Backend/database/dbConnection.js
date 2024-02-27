import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        dbName: "MERN_STACK_JOB_SEEKING"
    }).then(() => {
        console.log('Database connection successfully')
    }).catch((err)=>{
        console.log(`Some error occured while connecting database: ${err}`);
    })
}
