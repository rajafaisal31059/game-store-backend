import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { routerV1 } from "./routes";


const main = express();

main.use(express.json());
main.use(express.urlencoded({extended: true}));
main.use("/api/v1", routerV1);

// Function:1
export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebaseee!");
});



//Function:2
export const gamesapi = onRequest({timeoutSeconds: 150}, main);
