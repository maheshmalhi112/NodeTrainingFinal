const express = require('express');
const userRoutes = require('./mvc/route/user-route');
const sessionRoutes = require('./mvc/route/session-route');

const app = express();

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

app.use('/user', userRoutes);
app.use('/session', sessionRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});







// //const dotenv = require("./.env");
// //dotenv.config();
// // const express = require("express");
// // const bodyParser = require('body-parser')

// // const port = process.env.PORT || 3001;
// // const app = express();
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: false }))
// // //app.use(bodyParser.json());

// // const routes = require('./mvc/route/user-route');

// // app.use('/', routes);


// // app.listen(port, () => {
// //   console.log(`Server listening on port ${port}`);
// // });
// const express = require('express');
// const bodyParser = require('body-parser')
// const userRoutes = require('./mvc/route/user-route');
// const app = express();
// app.use(express.json());
// app.use(bodyParser.json());

// app.use(userRoutes);

// // Start the server

// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });







// //const customerRouter = require("./routes/customer");
// //app.use("/customer", customerRouter);

// // app.listen(port, () => {
// //   // eslint-disable-next-line no-console
// //   console.log(
// //     `Listening on port ${port}...${process.env.PORT}....${process.env.NODE_ENV}`
// //   );
// // });