import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected :", connect.connection.name);
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
