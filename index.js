var express = require('express')
var path = require('path')
var app = express();
const fs = require('fs');
// const bodyParser = require('body-parser');


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'html')));
	
app.use(express.json());  


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Recycler.html');
});

app.post('/', function (req, res) {
    console.log(req.body);
    fs.writeFile("ajax_info.txt", JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    res.end(); 
});

app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port 3000!')
})