require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRoutes');
const { Eureka } = require('eureka-js-client');
const cors = require('cors'); // Ajoutez cette ligne

const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// // Use project routes
 app.use('/projects', projectRoutes);
 const instanceInfo = {
  app: 'projects-ms',
  hostName: 'localhost',
  ipAddr: '127.0.0.1',
  port: {
    $: 8565,
    '@enabled': true,
  },
  vipAddress: 'projects-ms',
  dataCenterInfo: {
    '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
    name: 'MyOwn',
  },
};

// Configurer les informations de Eureka
const eurekaConfig = {
  host: 'localhost', // Adresse IP ou nom d'hôte du serveur Eureka
  port: 8761, // Port du serveur Eureka
  servicePath: '/eureka/apps/',
};

// Créer une instance de Eureka
const client = new Eureka({
  instance: instanceInfo,
  eureka: eurekaConfig,
});

// Démarrer la découverte de services Eureka
client.start((error) => {
  if (error) {
    console.log(`Error in registering with Eureka: ${error.message}`);
    process.exit(1);
  }
  console.log('Registered with Eureka');
});

// Démarrer le serveur de notre application
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/projects`);
});
