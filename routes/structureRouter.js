import express from "express";
import { getStructures, getStructuresById, saveStructures, updateStrucktures } from "../controllers/structureController.js";


const router = express.Router();

router.get('/structure' , getStructures);
router.get('/structure/:id' , getStructuresById);
router.post('/structure' , saveStructures);
router.patch('/structure/:id' , updateStrucktures);


export default router;