const {Schema, model}  = require('mongoose')

const User = new Schema( {
    username: {type: String, unique: true, requiered: true},
    password: {type: String, requiered: true},
    roles: [{type: String, ref: 'Role'}]
})


module.exports = model('User', User)