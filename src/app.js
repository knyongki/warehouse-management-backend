require('dotenv').config();
const Hapi = require('@hapi/hapi');

const company = require('./api/company');

const robot = require('./api/robots');

const items = require('./api/items');
const ItemsService = require('./services/postgress/itemsService');

const init = async () => {
  const itemsService = new ItemsService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  await server.register([
    {
      plugin: company,
    },
    {
      plugin: robot,
    },
    {
      plugin: items,
      options: {
        service: itemsService,
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();