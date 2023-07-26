import express from "express";
import { getUsers , getUserById, saveUser, deleteUser, updateUser} from "../controllers/userController.js";

const router = express.Router();

router.get('/user' , getUsers);
router.get('/user/:id' , getUserById);
router.post('/user' , saveUser);
router.patch('/user/:id' , updateUser);
router.delete('/user/:id' , deleteUser);


export default router;