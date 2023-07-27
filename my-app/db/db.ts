import mongoose from "mongoose";

export async function connect() {
  try {
    // won't always resolve, so put a ! at the end, to specify that it will always be available.
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("Connection error" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong...");
    console.log(error);
  }
}
