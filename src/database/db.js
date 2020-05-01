import mongoose from 'mongoose'

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

mongoose.connection.on('error', () => console.error('connection failed'))
mongoose.connection.once('open', () => console.log('database connected'))