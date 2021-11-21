const http = require('http');
const URL = require('url');

const myUrl ='http://localhost:3000/order?query=sound=90'
const myUrlObj = URL.parse(myUrl, true)
console.log(myUrlObj)


const server = http.createServer(function (req, res) {

    if(req.url=='/'){
        res.writeHead(200, {
            "content-type":"text/html"
        })
        res.write('<h1>i am home</h1>')
        res.write(myUrlObj.hostname)
        res.end()
    }
    else if(req.url =='/about'){
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.write('<p>i am about page</p>')
        res.end()
    }
    else{
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.write('<p>i am not Found page</p>')
        res.end()
        
    }

  

})




server.listen('5000', ()=> {
    console.log(1)
})