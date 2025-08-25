let express = require('express');
let cors = require('cors');
let app = express();


app.use(cors());
app.use(express.json());

let port = 8000;
let fileName = (filename) =>{
    return require(`./dev/${filename}.json`)
}
app.listen(port, () => { console.log(`Server is running on port ${port}`)});

app.post('/dev/upload',(req, res)=>{res.send(fileName('upload'))});
app.put('/dev/upload',(req, res)=>{res.send(fileName('upload'))});