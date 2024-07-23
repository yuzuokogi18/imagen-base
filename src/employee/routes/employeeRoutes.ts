import { Router } from 'express';
import { createEmployee } from '../controllers/employeeController';
import upload from '../../shared/middlewares/uploadMiddleware';

const employeeRoutes: Router = Router();

//Aquí se coloca el Middleware V----------V----Este es el atributo del req que se recibirá
employeeRoutes.post('/', upload.single('employeeImage'), createEmployee);

export default employeeRoutes;
