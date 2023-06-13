import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  address: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Test = models.Test || model("Test", testSchema);

export default Test;
