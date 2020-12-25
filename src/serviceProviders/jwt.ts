import jwt from 'jsonwebtoken';

export default (payload: Object): string => jwt.sign(
    {
        ...payload
    },
    String(process.env.JWT)
)
