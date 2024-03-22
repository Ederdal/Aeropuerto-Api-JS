import { Router } from "express";
import { getAll, getOne, insertOne, deleteOne, updateOne } from "../controllers/Ticket.controller.js";

const router = Router();

router.get("/", getAll);
router.get("/:folio", getOne);
router.post("/", insertOne);

router.delete("/:folio", deleteOne);

router.put("/:folio", updateOne);

export default router;
