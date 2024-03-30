import {Router as router, Request, Response} from "express";
import { testroutes } from "./testroutes";


const expressRouter = router();

expressRouter.get("/", (req: Request, res: Response) => {
  return res.json("Backend is up and running! ");
});

expressRouter.use("/test", testroutes);


export const routerV1 = expressRouter;