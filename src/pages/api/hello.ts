import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { log } from "console";
import { connectMongo } from "@/utills/connectMongo";
import Test from "@/model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
  console.log("connected");
  const test = await connection.collection("Test").insertOne({
    email: req.body.email,
    address: req.body.address,
  });

  res.send("done");
}
