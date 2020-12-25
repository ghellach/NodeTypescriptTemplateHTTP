import mongoose from 'mongoose';
import Connection from './Connection';
import Session from './Session';
import User from './User';

export default {
    Connection: mongoose.model("Connection", Connection), 
    Session: mongoose.model("Session", Session), 
    User: mongoose.model("User", User),
}