import express from 'express';
import {Login} from "../Controllers/authController.js";
const Authroute = express.Router();

Authroute.post('/login',Login);

export default Authroute;