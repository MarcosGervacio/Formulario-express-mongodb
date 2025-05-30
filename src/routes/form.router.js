import {Router} from 'express';
import formModel from '../models/form.model.js';

const router = Router();

router.post('/form', async (req, res) => {
  try {
    const {nombre, edad, ciudad, email, telefono, obraSocial, aceptaTerminos} = req.body;
    const newForm = await formModel.create({nombre, edad, ciudad, email, telefono, obraSocial, aceptaTerminos});
    res.status(201).json(newForm);
  } catch (error) {
    console.error('Error creating form:', error);
    res.status(500).json({error: 'Internal server error'});
  }
});

export default router;
