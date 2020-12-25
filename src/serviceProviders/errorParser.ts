import {Response} from 'express';
import path from 'path';
import fs from 'fs';
// core files
import devAlert from './devAlert';

function errorContent(res: Response, status: number, errorCode: string, message: string): void {
    res.status(status).json({
        status, errorCode, message
    });
    return;
}

export default function (res: Response, code: Number|String, message: String): void {
    const errorFile: string = fs.readFileSync(path.join(__dirname, "../data/errors/main.json"), "utf8");
    
    const list: any = JSON.parse(errorFile);

    const error: any = list[String(code)];
    console.log(error)
    if(error){
        res.status(error.status).json({
            status: error.status,
            errorCode: code,
            message: (message !== "") ? message : error.message
        });
        return;
    }else{
        errorContent(res, 500, "9000", (message !== "") ? String(message) : String("server internal error"));
        devAlert("inexistant error", "src/serviceProviders/errorParser");
        return;
    }
} 