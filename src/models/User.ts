import mongoose from 'mongoose';
import * as commonFields from './.commonFields';

export default new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 255,
    },
    lastName: {
        type: String,
        required: true,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    ...commonFields
});