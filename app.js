import express from 'express';
import path from 'path';

const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3000;

const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));


router.get('/', (request, response) => {
	response.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);

app.listen(port, () => {
	//console.log("This app is running on 127.0.0.1, on port number " + port + '.\n');
});



