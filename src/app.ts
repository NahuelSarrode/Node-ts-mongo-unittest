import express, { Request, Response } from "express"; 
import morgan from "morgan"; 
import passport from "passport"; 
import passportMiddleware from "./middlewares/passport";  

// Initialization
const app = express(); 

// Imports routes
import indexRoutes from "./routes/index.routes";
import authRoutes from "./routes/auth.routes"; 

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
passport.use(passportMiddleware);

// Routes 
app.use(indexRoutes);
app.use('/auth/profile', authRoutes); 

export default app; 