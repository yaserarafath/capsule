import * as express from "express";
import {Application} from "express";
import {getAllTasks} from "./tasks";
import {getAllUsers, addUser} from "./users";

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

app.route("/api/users/add").post(addUser);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
