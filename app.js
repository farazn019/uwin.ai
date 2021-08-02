/*
const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');*/
import express from 'express';
import http from 'http';
import fs from 'fs';
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

router.get('/news', (request, response) => {
	response.send({message: "This is for the news endpoint"});
})

router.get('/events', (request, response) => {
	response.send({message: "This is for the events endpoint"});
})

router.get('/projects', (request, response) => {
	response.send({message: "This is for the projects endpoint"});
})

router.get('/members', (request, response) => {
	response.send({message: "This is for the members endpoint"});
})

router.get('/join', (request, response) => {
	response.send({message: "This is for the join endpoint"});
})


app.use('/', router);

app.listen(port, () => {
	//console.log("This app is running on 127.0.0.1, on port number " + port + '.\n');
});



