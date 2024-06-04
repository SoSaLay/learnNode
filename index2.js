const express = require('express')
const fs = require('fs')

//import node functionallity to create a server & read files

const app = express()
const port= 3250




const readEmployees= ()=>{

    const data= fs.readFileSync('employ.json','utf8');
    return JSON.parse(data)
    // turn string data read from file into a object
}


//get is a method to define a route for handling HTTP GET requests.
// When someone accesses the /employ URL on your server,  Node.js 
//knows to run the callback function you defined for that route

//route to define the url
app.get('/', (req,res)=>{
    const employ= readEmployees()
    res.send('Welcome to employee API')
})



app.get('/employ', (req,res)=>{
    const employ= readEmployees()
    res.send(employ)
})


app.get('/employ/:employeID', (req,res)=>{
    const employ= readEmployees()
    //ParseInt will ensure the string from the object is treated like a number
   

    const employID= parseInt(req.params.employeID,10);

    const employees= employ.find(e=> e.employeID === employID)

    //find searches through an array to locate the first element that meets  condition
    //By assing the paramter e to key value of employId, we can search for a specific employee object within the employ array based on the employID
    
   employees? res.json(employees) : res.status(404).json({error:'Employee not found'});
     // the value of employees either register searched value or undefinned
})

app.listen(port, ()=>{


console.log(`Server us running on http://localhost:${port}`)

})