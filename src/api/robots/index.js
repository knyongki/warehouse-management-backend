const RobotsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'robot',
  version: '1.0.0',
  register: (server) => {
    const robotsHandler = new RobotsHandler();
    server.route(routes(robotsHandler));
  },
};
