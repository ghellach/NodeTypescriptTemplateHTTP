import express, {Application} from 'express';
import morgan from 'morgan';
import * as config from './config';
import routes from './routes';

config.env();
config.mongoDB();
const app: Application = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes)

app.listen(process.env.PORT, () => {
    console.log(Date(), `| Server is up and running successfully on port ${process.env.PORT} !`);
});