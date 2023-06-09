import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || "localhost";
export const USER = process.env.USER || "root";
export const PASSWORD = process.env.PASSWORD || "Educa2023*";
export const DATABASE = process.env.DATABASE || "AppAuthentication";
export const DB_PORT = process.env.DB_PORT || 3306;