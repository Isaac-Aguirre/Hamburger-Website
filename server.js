const express = require('express');
const db = require('./models');
const handlebars = require('express-handlebars');

//Express app
const app = express();
app.use(express.static(__dirname + '/public/'));
//Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Routes
app.use('/', require('./routes/html-routes'));
app.use('/api', require('./routes/api-routes'));
//Start the server
const PORT = process.env.PORT || 3000;
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
