import express from "express";
import * as clasServices from "../services/clasServices";

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(clasServices.getClas());
});

router.get('/:id', (req, res) => {
    const id = clasServices.findClasById(+req.params.id);

    if (id != null) {
        res.send(id);
    } else {
        res.sendStatus(404);
    }
});

export default router;