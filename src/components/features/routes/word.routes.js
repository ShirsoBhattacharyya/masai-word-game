const express = require("express");
const router = express.Router();

const makeRandomWord = (length) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

router.get('/random',async(req,res)=>{
    let randomWordLength=Math.floor((Math.random()+1)*10-5);
    // console.log(randomWordLength);
    let word=makeRandomWord(randomWordLength);
    try{
        res.json({message:'success',response:word});
    }catch(e){
        res.status(401).json({message:'error',response:e.message});
    }
})
module.exports=router;