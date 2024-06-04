const fs= require('fs')
// create a variable that import node file system, which allows you to 
// read and work with files on you computer



// Pass a callback function through readFile methods to handle result 
// of the file reading. When working with Node you should always  use 
// a callback function to process any errors properly

fs.readFile('planets.txt', 'utf8', (err,data)=>{


if(err){
    console.error('Error reading the file',err)
    // display text & type of error
} else{

const planets= data.split(',').map(planet=> planet.trim())
planets.forEach( planet=> console.log(planet))
}

   


})