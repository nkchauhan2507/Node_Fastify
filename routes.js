const app = require('fastify')()
const routes = require('@fastify/routes')

//const app = fastify()

app.register(routes)


app.route({
    method:"GET",
    url:"/",
    schema: null,
    handler: async function(req,res){
        res.send("Hello it's displaying through Route Function...")
    }
})

const listenObject = {
    port:5000,
    address:"127.0.0.1"
}
app.listen(listenObject,(err,address)=>{
    if(err)
        console.log("There is some error in listening...")
    else
    console.log(`Listening on server ${address}`)
})
