import config from '../../../config'
import { generateUserId } from './user.utills'
import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const generateId = await generateUserId()
  user.id = generateId

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
