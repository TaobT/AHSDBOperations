const fs = require('fs');
const AWS = require("aws-sdk")

exports.upload = (req, res) =>{
    if(!req.body.dir || !req.body.uploadName){
        res.status(400).send({message: "El contenido no puede estar vacio!"});
        console.log(req.body)
        return;        
    }
    s3 = new AWS.S3({
        accessKeyId: 'AKIA2I4MRNG6GVWNKUPD',
        secretAccessKey: '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'
    })
    const fileName = req.body.dir;
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: 'ahysimages',
        Key: req.body.uploadName,
        Body: fileContent
    }
    s3.upload(params, function(err, data){
        if(err){
            console.log(`Error al subir imagen! ${err}`)
            res.status(500).send({
                message:
                  err.message || `Error al subir imagen! ${err}`
            });
        }
        res.send(data);
    })
}