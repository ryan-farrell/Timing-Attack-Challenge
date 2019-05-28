const check = require('./timer');
//  83015
// get the users input (node starter.js 123)
// input = 123
let input = process.argv[2];
   
    
async function request(startOfLoop,endOfLoop) {
    
    let loopArray = []
    
    for (i = startOfLoop; i < endOfLoop; i++) {
        
        input = i

        //response is an object now with a key pair value (finish & response)
        let response = await check(input);
        
        // the time variable is now = to finish from the response object
        let time = response.finish
        
        // the result variable is now = to respons from the response object
        let result = response.response
        
        // the time variable is added to the array
        loopArray[i] = time 
        
        // input increments by 1
        input++  
        
        // the formula below is to compare all the values in the array and return the highest value to my variable maxValue
        maxValue = loopArray.reduce(function(a,b){return Math.max(a,b)})
        
        // char is now an integer = to the index place of maxValue  found in my array
        char = loopArray.indexOf(maxValue) //
        
        // input is character multiplied bt 10
        input = (char * 10)
        
        

    // if (startOfLoop = endOfLoop ){
    //         i = startOfLoop
    //         endOfLoop = (input + 10)
    //         console.log(`This is endOfLoop in the if statment a loop= ${endOfLoop}`)
    // }
            
    // } else {
        
        //     console.log("!!!")
        
        // }
        //     console.log(`This is i after a loop = ${i}`)
        
        //     console.log(`This is input after a loop = ${input}`)
        
        //     console.log(`This is startOfLoop after a loop = ${startOfLoop}`)

        //     console.log(`This is endOfLoop after a loop= ${endOfLoop}`)
                
            }
            
            // input is passed back to variable startOfLoop so we can start our next loop iteration at the value just discovered but
            // multiplied by 10 so we can iterate through another 10 digits in the 1s column  
            
        startOfLoop = input    
        endOfLoop = (input + 9)
            
            
            
            //console.log(i)
            // console.log(maxValue)
            //console.log(char)
            //console.log(input)
            console.log(startOfLoop)
            console.log(endOfLoop)
            
            
            
    
}


//request(0,9);
request(80,89);
//request(830,839);
//request(8300,8309);
//request(83010,83019);


//console.log(startOfLoop)
//console.log(endOfLoop)
//console.log(input)
