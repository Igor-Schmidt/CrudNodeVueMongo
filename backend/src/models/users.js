

const database = require('./database.js');
const ObjectId = require('mongodb').ObjectId;

const users = {

    async getAll(req) {
        const dbo = await database.getDbo(req);

        return await dbo.collection('users').find().toArray();
    },

    async search(good,req) {
        const dbo = await database.getDbo(req);

        // const {_id} = good;

        // return await dbo.collection('users').find({_id: new ObjectId(_id)}).toArray();
        return await dbo.collection('users').find({ _id: new ObjectId(good) }).toArray();
    },

    async create(good,req) {
        const dbo = await database.getDbo(req);
        
        delete good._id;
        delete good.id;
        
        return (await dbo.collection('users').insertOne(good)).ops[0];
    },

    async update(good,req) {
        const dbo = await database.getDbo(req);

        const idUser = good.id;
        
        delete good._id;
        delete good.id;

        return await dbo.collection('users').findOneAndUpdate({_id:  new ObjectId(idUser)},{$set: good},{ returnNewDocument: true });
    },

    async delete(good,req) {
        const dbo = await database.getDbo(req);

        const {_id} = good;
        
        // await dbo.collection('users').deleteOne({_id: new ObjectId(_id)});
        await dbo.collection('users').deleteOne({_id: new ObjectId(good) });
    }

}


module.exports = users;