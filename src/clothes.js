import { db } from "./connectDb.js";
import { ObjectId } from "mongodb";

const clothesdb = db.collection('clothes');
const clothes = {
    type: 'pants',
    color: 'blue',
    thread: 'canvas',
    size: 'M',
    season: 'Fall',
    brand: 'American Eagle'
}
// add clothes
export async function addClothes() {
    const clothesAdded = await clothesdb.insertOne(clothes)
    console.log('Clothing was added-->, ', clothesAdded);
}
//get all clothes
export async function getAllClothes() {
    const allClothes = await clothesdb.find({}).toArray();
    console.table(allClothes);
}
const cleanId = new ObjectId('652964697c85ee787b098c0f')
export async function updateClothes() {
    //1. Define the clothes
    //2. decide what attributes we want updated
    //3. find the item
    //4. update the clothes
    const updatedClothes = await clothesdb.findOneAndUpdate({_id: cleanId}, {$set: {color: 'black'}});
    console.log('ClothesUpdated-->', updatedClothes)
}