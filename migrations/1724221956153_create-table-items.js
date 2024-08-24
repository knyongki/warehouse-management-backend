/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable('items', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    barcode: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    item_name: {
      type: 'TEXT',
      notNull: true,
    },
    sku: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    qnt: {
      type: 'INTEGER',
      notNull: true,
    },
    storage_location: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable('items');
};
