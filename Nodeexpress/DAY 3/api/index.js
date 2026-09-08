///==NODE JS >>USING FRAMEWORK>> EXPRESS JS -- NEST JS
const express = require("express");
const { userRouter } = require("./routes/users.route.js");
const { doctRouter } = require("./routes/doctors.route.js");
const { myMiddleware } = require("./middlewares/looged.middleware.js");
const app = express();
const { connectDB } = require("./config/db.config.js");
const { PORT } = require("./config/env.config.js");
//*---MIDDLEWARES--//built in -- custom >>functions >>recive req from front && send res to front
app.use(express.json()); //middleware
app.use(myMiddleware);

//*--ROUTES--(path)//endpoints-->>collection of routes
//users >>userRouter
// app.use("path",router)
app.use("/users", userRouter);
app.use("/doctors", doctRouter);
// app.use("/patients", patientRouter);
// app.use("/rooms", roomRouter);

//*--CONNECT DB-->>send query to db && recive res from db
connectDB();

app.listen(PORT, () => {
  //logic
  console.log(`my app listening on port 5000 successfully`);
});

/////====day 3
// FOLDER STRUC >> MVC>MODEL VIEW CONTROLLER --- CONNECT DB >> CRUD OPERATION
//--PRPOCESS

//TASK >> DAY3 >> EVERY MEMBER APLLY CRUD OPERATIONS ON ITS COLLECTIONS(MODELS)
