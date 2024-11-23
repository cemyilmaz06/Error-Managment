'use strict'

const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8000;


// app.get('/', (req, res, next)=>{
//     console.log('Midlleware Started');

//     next();
// })

// app.get('/', (req, res)=> {
//     console.log('Route Started');

//     res.send({
//         message:'Welcome'
//     })
// })



// app.get('/', (req, res ,next) => {
//     if(req.query.username == 'Cem'){
//         req.username = 'Cem'

//     res.message = 'Username is Cem'

//     next();
//     }else {
//         res.send({
//             messsage: 'Error:  Username is wrong'
//         })
//     }
// })

// app.get('/', (req, res) => {

//     res.send({
     
//  username: req.username,
//         message: res.message
//     })

// })




app.get('/', (req, res, next) => {
req.message1 = 'midlleware-1 started'
next();
})
app.get('/', (req, res, next) => {

    req.message2 = 'middleware-2 started'
    next()
    
})
app.get('/', (req, res, next) => {

    req.message3 = 'middleware-3 started'
    next()
    
})

app.get('/', (req, res) => {

    res.send({
        message1: req.message1,
        message2: req.message2,
        message3: req.message3,
       
       
        message: 'Finished'
    })
})

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

