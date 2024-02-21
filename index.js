const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/",(req,res) =>{

});

app.get("/slow",async (req,res) =>{
    try{
        const timeTaken = await doSomeHeavyTask();
        return res.json({
            status : "success",
            message: `Heavy task complete in ${timeTaken}ms`,
        });

    }catch(e){
        return res 
        .status(500)
        .json({status:"Error",e: "Internal server"})
    }
});


app.listen(PORT, () =>
    console.log(`Express server Started at http://localhost:${PORT}`)

);