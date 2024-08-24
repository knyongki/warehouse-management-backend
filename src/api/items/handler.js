const axios = require('axios');

class ItemsHandler {
  constructor(service) {
    this._service = service;

    this.postItemHandler = this.postItemHandler.bind(this);
    this.getItemsHandler = this.getItemsHandler.bind(this);
    this.putStockHandler = this.putStockHandler.bind(this);
  }

  async postItemHandler(request, h) {
    try {
      const { item } = request.payload;
      const itemId = await this._service.addItem(item);

      const response = h.response({
        status: 'success',
        message: 'Item berhasil ditambahkan',
        data: {
          itemId,
        },
      });
      response.code(201);
      return response;
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

  async getItemsHandler(request, h) {
    try {
      const items = await this._service.getItems();

      const response = h.response({
        status: 'success',
        data: {
          items,
        },
      });
      response.code(201);
      return response;
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

  async putStockHandler(request, h) {
    try {
      const { itemDetail } = request.payload;
      
      const itemId = await this._service.updateStockItem(itemDetail);

      const response = h.response({
        status: 'success',
        message: 'Stock item berhasil di perbarui',
        data: {
          itemId,
        },
      });
      response.code(201);
      return response;
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

module.exports = ItemsHandler;
