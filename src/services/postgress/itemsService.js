const { nanoid } = require('nanoid');
const { Pool } = require('pg');

class ItemsService {
  constructor() {
    this.pool = new Pool();
  }

  async addItem(item) {
    const id = `item-${nanoid(16)}`;
    const query = {
      text: 'INSERT into items VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, item.barcode, item.itemName, item.SKU, item.qty, item.storageLocation],
    };

    const result = await this.pool.query(query);

    if (!result.rows[0].id) {
      throw new Error('Gagal menambahkan Item');
    }

    return result.rows[0].id;
  }

  async getItems() {
    const query = {
      text: 'SELECT barcode, item_name, sku, qnt, storage_location FROM items',
    };

    const result = await this.pool.query(query);

    const items = result.rows;

    return items;
  }

  async updateStockItem(itemDetail) {
    const query = {
      text: 'SELECT id, qnt FROM items WHERE barcode = $1',
      values: [itemDetail.barcode],
    };

    const resultSelect = await this.pool.query(query);

    const item = resultSelect.rows[0];

    if (item.qnt < itemDetail.qty) {
      throw new Error('Jumlah tidak tidak cukup');
    }

    const qty = item.qnt - itemDetail.qnt;

    const queryUpdate = {
      text: 'UPDATE items SET qnt = $1 WHERE id = $2 RETURNING id',
      values: [qty, item.id],
    };

    const result = await this.pool.query(queryUpdate);

    if (!result.rows.length) {
      throw new Error('Gagal memperbarui item');
    }

    return result.rows;
  }
}

module.exports = ItemsService;