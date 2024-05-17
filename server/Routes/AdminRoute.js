import express from 'express';
import {AdminLogin , AdminSatup , AdminAllUser ,AdminLoginUser} from "../Controllers/Coneect.js";
const Adminroute = express.Router();

Adminroute.post('/AdminSatup',AdminSatup);
Adminroute.post('/Adminlogin',AdminLogin);
Adminroute.get('/AdminUsers',AdminAllUser);
Adminroute.get('/AdminLogin/:id',AdminLoginUser);

export default Adminroute;