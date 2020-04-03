const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./DB');
memberRoute = require('./routes/member.route');
contactRoute = require('./routes/contact.route');
connexionRoute = require('./routes/connexion.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/members', memberRoute);
app.use('/contact', contactRoute);
app.use('/connexion', connexionRoute);
const port = process.env.PORT || 4000;
const server = app.listen(port, function () {

  console.log('Listening on port ' + port);
});
