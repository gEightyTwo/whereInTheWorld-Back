const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
require('dotenv').config()
const app = express();
app.use(bodyParser.json());


// const authController = require('./routes/auth')
// app.use(cors())
// app.use('/api', require('./routes/snacks'));
// app.use('/auth', authController)
// app.use('/users', require('./routes/users'))
// app.use('/reviews', require('./routes/reviews'))


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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port', port);
});
