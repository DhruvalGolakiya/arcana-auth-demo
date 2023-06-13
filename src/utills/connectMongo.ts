import mongoose from "mongoose";

mongoose.pluralize(null);

export const connectMongo: any = async () => {
  mongoose.connect(
    "mongodb+srv://dhruval:i3IHTkAOqWMihtEc@cluster0.xj3iu32.mongodb.net/test"
  );

  const connection = mongoose.connection;

  connection.on("open", () => {
    console.log("CONNECTED");
  });

  connection.on("error", (error) => {
    console.log("DB CONNECTION ERROR");
    console.log(error);
    process.exit(1);
  });
};
