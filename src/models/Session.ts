import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid';
import * as commonFields from './.commonFields';

export default new mongoose.Schema({
    connectionId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Connection"
    },
    token: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    },
    clientAuthCheck: {
        type: String,
        required: true,
        default: () => uuid()
    },
    ...commonFields,
    clientAuthCheckAt: {
        type: Date,
        required: true,
        default: Date()
    }
});