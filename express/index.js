const express = require('express');
const app = express();
var birds = require('./router');
app.use(function (req, res, next) {
    next();
})
app.use('/birds', birds)
app.listen(3500, function () {
    console.log('serve start!');
})
