const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.post("/bfhl", (req,res) => {
    try{
        const data = req.body.data;

        const num = [];
        const alp = [];

        data.forEach((k) => {
            if(!isNaN(k))
                num.push(k);
            else
                alp.push(k);
        })
        const result = {
            is_success: true,
            user_id: "john_doe_17091999",
       
           email : "john@xyz.com",
            roll_number:"ABCD123",
            numbers: num,
            alphabets: alp
        }

        console.log(result);

        res.send(JSON.stringify(result));
    } catch (err) {
        console.log(err);
    }
    
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})