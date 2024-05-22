import express from "express";
import { deleteUser, getAllUsers, getUser, newUser, } from "../controllers/userController.js";
import { isAdminAuth } from "../middlewares/auth.js";
const app = express.Router();
app.post("/new", newUser);
app.get("/all", isAdminAuth, getAllUsers);
app.route("/:id").get(getUser).delete(isAdminAuth, deleteUser);
export default app;
