import { Employee } from "../models/Employee";
import { DateUtils } from "../../shared/utils/DateUtils";
import * as dotenv from 'dotenv';

dotenv.config();

export class employeeService {

    public static async addEmployee(employee: Employee, file: Express.Multer.File) {
        const urlProject = process.env.URL;
        const portProject = process.env.PORT;
        
        try {
            // Guardar la URL de la imágen en base de datos para poder acceder a la imagen
            employee.url = `${urlProject}:${portProject}/uploads/${file.filename}`;

            employee.created_at = DateUtils.formatDate(new Date());
            employee.updated_at = DateUtils.formatDate(new Date());
            employee.created_by = 'Usuario que crea el registro';
            employee.updated_by = 'Usuario que actualizó por última vez el registro';

            //Despues de todo lo anterior pueden guardar su employee en base de datos con su repository

            //Yo no lo voy a guardar, solo voy a imprimir los datos relevantes
            console.log("Nombre del empleado: " + employee.name)
            console.log("URL de la imagen del empleado: " + employee.url)

            return employee;
        } catch (error: any) {
            throw new Error(`Error al crear empleado: ${error.message}`);
        }
    }

}
