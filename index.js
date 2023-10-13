import { addClothes, getAllClothes, updateClothes } from "./src/clothes.js";
import { closeClient } from "./src/connectDb.js";


// await addClothes();
await updateClothes();
await getAllClothes();
closeClient();