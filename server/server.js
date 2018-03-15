let express = require('express');
let app = express();
const PORT = 4001;
let bodyParser = require('body-parser');

//Configures bodyParser for jQuery
app.use(bodyParser.urlencoded({extended:true}));

//Serve static files
app.use(express.static('server/public'));

app.post('/game', (req, res) => {
    console.log(req.body);
    let gamToAdd = req.body;
    res.sendStatus(200);
})

//Spin up the server
app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
})

