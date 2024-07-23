import { Request, Response } from 'express';
import { employeeService } from '../services/employeeService';

export const createEmployee = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    
    const newEmployee = await employeeService.addEmployee(req.body, req.file);
    if (newEmployee) {
      res.status(201).json(newEmployee);
    } else {
      res.status(404).json({ message: 'Algo salio mal' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
