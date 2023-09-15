import express from "express";
import { getUser , getUsersFriends , addRemoveFriend } from "../controllers/users.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// Read Routes
router.get("/:id" , verifyToken , getUser);
router.get("/:id/friends" , verifyToken , getUsersFriends);

// update Routes
router.patch("/:id/:friendId" ,verifyToken , addRemoveFriend);

export default router;