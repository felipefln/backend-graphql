import mongoose from 'mongoose';

const ApartmantSchema = new mongoose.Schema(
    {
        number: Number,
        blc: Number,
        member: [
            {
                name: String,
                dateBirth: String,
                phone: String,
                document: String,
                email: String,
                resp: Boolean,
            }
        ]
    }
);

module.exports = mongoose.model('Apartmant', ApartmantSchema)