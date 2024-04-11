import express from 'express';
import userRouter from './authRoute';
import contactRouter from './contactRoute';


const mainRouter = express.Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/cont',contactRouter);


export  default mainRouter;
