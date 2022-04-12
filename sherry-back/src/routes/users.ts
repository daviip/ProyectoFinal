import express from 'express';
import * as userServices from '../services/usersServices';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(userServices.getUser());
});


router.get('/:id', (req, res) => {
    const id = userServices.findUserById(+req.params.id);

    if (id != null) {
        res.send(id);
    } else {
        res.sendStatus(404);
    }
});


export default router;