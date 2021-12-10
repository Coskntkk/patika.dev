const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const app = express();
const pageRoute = require('./routes/pageRoute');
const postRoute = require('./routes/postRoute');

mongoose.connect('mongodb://localhost:27017/freelancer-project-db', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.use(function (req, res, next) {
  console.log('Request:', req.path);
  next();
});
app.set('view engine', 'ejs');

app.use("/", pageRoute);
app.use("/posts", postRoute);

// Server Configuration
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server is on at Port: 3000");
});