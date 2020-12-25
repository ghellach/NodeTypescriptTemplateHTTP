// modules
import {Request, Response} from 'express';
// Models files
import Mongo from './models/.interface';
import Provider from './serviceProviders/.interface';
import Validator from './validators/.interface';

export async function main(req: Request, res: Response): Promise<any> {
    return res.json({
        app: process.env.NAME,
        version: process.env.VERSION,
        apiVersion: process.env.API_VERSION
    })
}