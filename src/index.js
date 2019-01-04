require("@babel/polyfill");
import express from 'express';
import {routes, routesText} from './routes'
import {middleware} from './middleware'; 
import path from 'path'
const app = express();
const PORT = process.env.PORT || 5000;

middleware(app)
routes(app)


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'))
})

app.listen(PORT, () => console.log(`listening to port ${PORT}`))
