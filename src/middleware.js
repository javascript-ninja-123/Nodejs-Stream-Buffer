import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';




const middleware = app => {
    app.use(helmet())
    app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({extended:true}))
    app.use(morgan('dev'))
    app.use((req,res,next) => {
        if(req.method === 'GET'){
            console.log('GET',req.url)
        }
        next();
    })
}

exports.middleware = middleware;