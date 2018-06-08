const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
require('dotenv').config()
const app = express();
app.use(bodyParser.json());


app.use(cors())
app.use(morgan("dev"))
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'))
app.use('/cities', require('./routes/cities'))
// app.use('/comments', require('./routes/comments'))


// app.get('/protected',
//         authController.isAuthenticated,
//         function(req, res, next){ res.send({ id: req.claim.id, message: "For authenticated eyes only" }) })
//
// app.get('/protected/:userId',
//         authController.isAuthenticated,
//         authController.isSelf,
//         function(req, res, next){ res.send({ id: req.claim.id, message: "For your eyes only"}) })


app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`;
  res.status(status).json({ status, message });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  res.status(status).json({ message, status });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('listening on port', port);
});
