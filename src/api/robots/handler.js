const axios = require('axios');

class RobotsHandler {
  constructor() {}

  async InboundHandler(request, h) {
    try {
      const { barcode } = request.payload;

      const wipResponse = await axios.post(
        'https://test.sid.airlab.id/api/v1/robots/sendInboundTask',
        { barcode },
        {
          auth: {
            username: 'test_sid',
            password: 't3st_s1d.!',
          },
        }
      );

      if (wipResponse.statusText !== 'OK') {
        return h
          .response({
            status: 'fail',
            message: 'Gagal mendapatkan data dari company server',
          })
          .code(400);
      }

      return h.response(wipResponse.data);
    } catch (error) {
      return h
        .response({
          status: 'error',
          message: 'Maaf, terjadi kegagalan pada server kami.',
        })
        .code(500);
    }
  }

  async OutboundHandler(request, h) {
    try {
      const { storageLocation } = request.payload;

      const wipResponse = await axios.post(
        'https://test.sid.airlab.id/api/v1/robots/sendOutboundTask',
        { storageLocation },
        {
          auth: {
            username: 'test_sid',
            password: 't3st_s1d.!',
          },
        }
      );

      if (wipResponse.statusText !== 'OK') {
        return h
          .response({
            status: 'fail',
            message: 'Gagal mendapatkan data dari company server',
          })
          .code(400);
      }

      return h.response(wipResponse.data);
    } catch (error) {
      return h
        .response({
          status: 'error',
          message: 'Maaf, terjadi kegagalan pada server kami.',
        })
        .code(500);
    }
  }
}

module.exports = RobotsHandler;
