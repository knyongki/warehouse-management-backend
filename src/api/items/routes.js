const routes = (handler) => [
  {
    method: 'POST',
    path: '/items',
    handler: handler.postItemHandler,
  },
  {
    method: 'GET',
    path: '/items',
    handler: handler.getItemsHandler,
  },
  {
    method: 'PUT',
    path: '/items',
    handler: handler.putStockHandler,
  },
];

module.exports = routes;
