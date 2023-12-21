import {Router} from 'express'
import MessagesControllers from '../controllers/messages.js'

const MessagesRoutes = Router();
const MessagesActionsRoutes = Router();

MessagesActionsRoutes
    .get('/list/keys', MessagesControllers.listKeys)
    .post('/message/', MessagesControllers.getSingleMessage)

MessagesRoutes.use('/', MessagesActionsRoutes)

export default MessagesRoutes
