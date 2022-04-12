import express from "express";
import * as costServices from "../services/costServices";

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(costServices.getCost());
});

export default router;