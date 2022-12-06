const mongoose = require('mongoose');
const {MongoClient}= require('mongodb');

async function connect()
{
    const url='mongodb+srv://user:user@cluster0.kqoiiqf.mongodb.net/test?retryWrites=true&w=majority';
    const client = new MongoClient(url);

    try{
        await client.connect();
        console.log('Connect successfully!!!');
    }
    catch(error)
    {
        console.log('Connect unsuccessfully!!!');
    }
}

module.exports={connect};