const routes = (handler) => [
  {
    method: 'POST',
    path: '/robot/sendInboundTask',
    handler: handler.InboundHandler,
  },
  {
    method: 'POST',
    path: '/robot/sendOutboundTask',
    handler: handler.OutboundHandler,
  },
];

module.exports = routes;