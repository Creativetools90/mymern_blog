import express from 'express';
import {CreateUser ,getOneUser } from "../Controllers/userController.js"
const Route = express.Router();

Route.post('/signup',CreateUser);
Route.get('/user/:id',getOneUser);
export default Route;