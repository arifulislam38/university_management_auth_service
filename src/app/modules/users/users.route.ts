import express from 'express'
import { createUserController } from './users.controller'

const router = express.Router()
router.get('/create-user', createUserController)

export default router
