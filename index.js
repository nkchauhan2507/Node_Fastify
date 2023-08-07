'use strict'

const fastify = require('fastify')
const fileUpload = require('fastify-file-upload')
const app = fastify()
app.register(fileUpload)

app.post('/upload', function (req, reply) {
  // some code to handle file
  const files = req.raw.files
  console.log(files)
  let fileArr = []
  for(let key in files){
    fileArr.push({
      name: files[key].name,
      mimetype: files[key].mimetype
    })
  }
  reply.send(fileArr)
})
app.listen(5000, (err,address) => {
  if (err) throw err
  console.log(`server listening on ${address}`)
})
