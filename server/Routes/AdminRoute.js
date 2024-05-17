import express from 'express';
import {AdminLogin , AdminSatup , AdminAllUser} from "../Controllers/Coneect.js";
const Adminroute = express.Router();

Adminroute.post('/AdminSatup',AdminSatup);
Adminroute.post('/Adminlogin',AdminLogin);
Adminroute.get('/AdminUsers',AdminAllUser);

export default Adminroute;