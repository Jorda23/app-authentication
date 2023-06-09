import bcryptjs from 'bcryptjs'

export const hasPassword = (password) => {
    return bcryptjs.hashSync(password)
}