import User from '../models/User'

const Query = {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
}

const Mutation = {
    createUser: (_, { name, email }) => User.create({ name, email })
}

export default { Query, Mutation }