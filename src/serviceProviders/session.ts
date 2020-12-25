import Mongo from '../models/.interface';
import JWT from './jwt';

export async function issue(app: any, connection: any, user: any): Promise<String> {
    const token: string = JWT({
        appId: app.appId,
        userId: user.userId 
    });
    const session = new Mongo.Session({
        connectionId: connection._id,
        token
    });
    await session.save();
    return token
}