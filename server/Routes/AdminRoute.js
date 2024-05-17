import express from 'express';
import {AdminLogin , AdminSatup} from "../Controllers/Coneect.js";
const Adminroute = express.Router();

Adminroute.post('/AdminSatup',AdminSatup);
Adminroute.post('/Adminlogin',AdminLogin);

export default Adminroute;