const CompanyHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'company',
  version: '1.0.0',
  register: (server) => {
    const companyHandler = new CompanyHandler();
    server.route(routes(companyHandler));
  },
};
