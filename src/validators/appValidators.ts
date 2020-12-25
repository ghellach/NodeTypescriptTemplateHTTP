import Joi from 'joi';

export const activateSessionValidator = (body: Joi.ObjectSchema<any>): any => {
    const schema = Joi.object({
        token: Joi.string().required(),
        appId: Joi.string().required(),
        appSecret: Joi.string().required()
    });
    const result: any = schema.validate(body);
    return result;
}