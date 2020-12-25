import {v4 as uuid} from 'uuid';
// local
import * as config from '../config';
import Mongo from '../models/.interface';

async function task1 (): Promise<any> {
    const app = new Mongo.App({
        appId: uuid(),
        appSecret: uuid(),
        userId: "5fbd38b25bdc230f95d6e3f0",
        name: "Maghnify"
    });
    await app.save();
    console.log(app);
    return;
}

async function task2 (): Promise<any> {
    const session = await Mongo.Session.find();
    session.forEach(async s=> {
        await Mongo.Session.findByIdAndDelete(s._id);
    })
    console.log(session);
    return;
}

async function dbTransaction(): Promise<Number> {
    config.env();
    config.mongoDB();
    if(process.argv[2] === "sessions"){
        await task2();
    }else{
        await task1();
    }
    return 0;
}

dbTransaction().then(res => res);