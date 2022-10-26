import {MongoClient} from "mongodb";
const uri = 'mongodb+srv://myApplications:Aa123456!@myapplications.buj8sux.mongodb.net/myorganizer?retryWrites=true&w=majority';
let db = null

export async function connectDB(){
    if(db) return db;
    let client = await MongoClient.connect(uri,{userNewUrlParser: true});
    db = client.db();
    return db;
}