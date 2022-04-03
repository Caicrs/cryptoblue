import express from 'express'
import { routes } from './src/routes/routes.js'
import path from 'path'
import dotenv from 'dotenv'



const app = express();
const __dirname = path.resolve(path.dirname(''));


app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes);


const port = 3001;

app.listen(port,() => console.log(`Servidor rodando em ${port}`) )