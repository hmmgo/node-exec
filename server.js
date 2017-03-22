// Importing node modules
import express from 'express';

// Importing source files
import routes from './src/route';

// consts
const app = express();

app.use('/', routes);

// listening to port 3000. change it if this port is occupied
  const server = app.listen(3000, () => {

        const {address, port} = server.address();

        // address normaly is localhost
        console.log(`Node Developer Exercise running at http://localhost:${port}`);
  });