const express = require('express');
const app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
	res.sendFile('/index.html')
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
	};
	
    res.end(JSON.stringify(response));
});

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/store', function (req, res) {
    res.send('To jest sklep')
});

const server = app.listen(3000, 'localhost', function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});