import express from "express";
import morgan from "morgan";
import TicketRouter from "./routes/Ticket.routes.js"
import { config } from "dotenv";
config();

const app = express();  // Aquí defines la variable 'app'

// SETTINGS
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', TicketRouter);

export default app;  // Aquí exportas la variable 'app'
