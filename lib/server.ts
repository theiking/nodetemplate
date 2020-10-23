import app from "./config/app";
import env from './environment';
// import * as https from 'https';
// import * as fs from 'fs';

const PORT = env.getPort();

// const httpsOptions = {
//    key: fs.readFileSync('./lib/config/key.pem'),
//    cert: fs.readFileSync('./lib/config/certificate.pem')
// }
   
// https.createServer(httpsOptions, app).listen(PORT, () => { 
//    console.log('Express server listening on port ' + PORT);
// });


app.listen(PORT, () => {
   console.log('Express server listening on port ' + PORT);
});