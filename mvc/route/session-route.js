const express = require('express');
const SessionController = require('../controller/session-controller');

const router = express.Router();

router.post('/create-session', SessionController.createSession);
router.put('/update-approval', SessionController.updateSessionApproval);
router.delete('/delete-session', SessionController.deleteSession);
router.get('/session-data', SessionController.searchSessionDateUserName);


module.exports = router;