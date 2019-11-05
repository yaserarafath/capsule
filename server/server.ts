import * as express from 'express';
import * as cors from "cors";
import {Application} from "express";
<<<<<<< HEAD
import {getAllTasks} from "./tasks";
import {getAllUsers, addUser} from "./users"
=======
import {getAllTasks} from "./get-tasks";
import {getAllUsers} from "./get-users"
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66

const bodyParser = require('body-parser');

const app: Application = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.route("/api/tasks").get(getAllTasks);

app.route("/api/users").get(getAllUsers);

<<<<<<< HEAD
app.route("/api/users/add").post(addUser);

=======
>>>>>>> 1e2a514c29d421342d38d3999a7155b551ac9b66
const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});