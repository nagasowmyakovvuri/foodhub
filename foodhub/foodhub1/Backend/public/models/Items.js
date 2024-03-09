import mongoose ,{Mongoose} from "mongoose";
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  // id:{
  //   type:Number,
  //   required:true
  // },
  items: [
    {
      title: String,
      quantity: Number,
      price: Number,
      total:Number
    },
  ],
//   title: {
//     type: String,
//     required: true,
//   },
//  quantity: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: String,
//     required: true,
//   },
  // itemimage:{
  //   type:String,
  // }
});

export default mongoose.model("items",ProductSchema);
