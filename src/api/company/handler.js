const axios = require('axios');

class CompanyHandler {
  constructor() {}

  async postItemFromCompanyHandler(request, h) {
    try {
      const { barcode } = request.payload;

      const wipResponse = await axios.post(
        'https://test.sid.airlab.id/api/v1/parts/getDetail',
        { barcode },
        {
          auth: {
            username: 'test_sid',
            password: 't3st_s1d.!',
          },
          timeout: 10000,
        }
      );

      if (wipResponse.status !== 200) {
        return h
          .response({
            status: 'fail',
            message: 'Gagal mendapatkan data dari company server',
          })
          .code(400);
      }

      if (!wipResponse.data) {
        return h
          .response({
            status: 'not found',
            message: 'Data Tidak Ditemukan',
          })
          .code(404);
      }

      return h
        .response({
          status: 'OK',
          data: wipResponse.data,
        })
        .code(200);
    } catch (error) {
      console.error('Error: ', error.message || error);
      return h
        .response({
          status: 'error',
          message: 'Maaf, terjadi kegagalan pada server kami.',
        })
        .code(500);
    }
  }
}

module.exports = CompanyHandler;
