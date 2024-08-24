const routes = (handler) => [
  {
    method: 'POST',
    path: '/company',
    handler: handler.postItemFromCompanyHandler,
  },
];

module.exports = routes;
