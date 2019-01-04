import path from 'path';
import fs from 'fs'

const routes =   (app) => {
    app.get('/', (req,res) => {
        res.status(200).send({message:"working on it"})
    })
    
    app.get('/google', (req,res) => {
        res.status(302).redirect('https://www.google.com/')
    })
    
    app.post('/write', (req,res) => {
        const body = []
        req.on('data', chunk => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFile('fs/message.txt', parsedBody, (err) => {
                if(err){
                 return res.status(404).send({message:"file not save"})   
                }
                res.status(200).send({message:"file saved"})
            });
        })
    })

    app.get('/html', (req,res) => {
        res.status(200).sendFile(path.join(__dirname,'view', 'index.html'))
    })

    app.get('/bigtext', (req,res) => {
        const ReadStream = fs.createReadStream(path.join(__dirname, '../','fs','big.txt'),{
            encoding:'utf8',
            highWaterMark:256 * 1024
        })
        const WriteStream  = fs.createWriteStream(path.join(__dirname, '../','fs','copy.txt'))

        // const body = []
        // // same as ReadStream.pipe(WriteStream).pipe(res)
        // ReadStream.on('data', chunk => {
        //     body.push(chunk)
        //     WriteStream.write(chunk)
        // })
        // ReadStream.on('close', () => {
        //     res.status(200).send(body)
        // })
        // // ReadStream.pipe(WriteStream)
        // // ReadStream.pipe(res)


        ReadStream.on('close', () => {
            res.end()
        })
    
        // Stream chunks to response
        ReadStream.pipe(res)
    })

    app.post('/image', (req,res) => {
        const body = []
        console.log(req.headers)
        req.on('data', chunk => {
            body.push(chunk)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            fs.writeFile('image.png', parsedBody, err => {
                if(err){
                    return res.status(404).send({message:"failed"})
                }
                res.status(200).send({message:"saved"})
            })
        })
    })
    
    
}

exports.routes = routes;
exports.routesText = 'yesssss from routes'