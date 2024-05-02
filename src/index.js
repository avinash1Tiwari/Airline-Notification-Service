const express = require('express');


const { ServerConfig ,mailsender} = require('./config');
const apiRoutes = require('./routes');


const app = express();

console.log("inside api Routes")
// parsing
app.use(express.json());
// read urlencoded char
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);
// Logger.info("succesfully started the server ",{})





// app.listen(ServerConfig.PORT, () => {
//     console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

// });




app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    // just checking mail service working ? 
    try{

        // const response = await mailsender.sendMail({
        //     from : ServerConfig.GMAIL_EMAIL,
        //     to:"avinashtiwari2405@gmail.com",
        //     subject : "Is the service working ? ",
        //     text : "Yes it is working."
        // });



        const response = await mailsender.sendMail({
            from : ServerConfig.GMAIL_EMAIL,
            to:ServerConfig.SENDER_EMAIL,
            subject : "Is the service working ?? ",
            text : "Yes it is working !!."
        });

        console.log(response)
    }
    catch(error){
        console.log(error)
    }

});
