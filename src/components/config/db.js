const mongoose=require('mongoose');
const dbConnect=()=>{
    return mongoose.connect(`mongodb+srv://masai-word-game:masai-word-game@masai-word-game.rubnhw1.mongodb.net/masai-word-game`)
}
module.exports=dbConnect;