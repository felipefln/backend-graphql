const generateUniqueId = require('../utils/generateUniqueId')
const Apartmant = require('../models/Apartmant.js')

module.exports = {
    async add(request, response) {
        const { number, blc, member } = request.body;
        const id = generateUniqueId();

        const apartmant = await Apartmant.create({
            id,
            number,
            blc,
            member
        })

        return response.json(apartmant)
    },

    async list(request, response) {
        const apartmant = await Apartmant.find()
        return response.json(apartmant)
    }
}