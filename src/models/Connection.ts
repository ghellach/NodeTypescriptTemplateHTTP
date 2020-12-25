import mongoose from 'mongoose';
import * as commonFields from './.commonFields';

export default new mongoose.Schema({
    appId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "App"
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    },
    ...commonFields
});