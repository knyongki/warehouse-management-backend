const ItemsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'items',
  version: '1.0.0',
  register: (server, { service }) => {
    const itemsHandler = new ItemsHandler(service);
    server.route(routes(itemsHandler));
  },
};
