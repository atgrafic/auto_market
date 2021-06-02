
const path = require('path');

const express = require('express');



const app = express();


// app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.static( 'dist/index.html'));

// app.get('*', function (req, res) {
//     res.sendFile( 'dist/index.html')
// });

app.get('/', function (req, res) {
    res.sendFile( 'dist/index.html')
});

app.listen(9000, function () {
    console.log('app listening on port 9000!')
})