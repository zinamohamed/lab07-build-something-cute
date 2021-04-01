const pool = require('../utils/pool');

module.exports = class Email {
  id;
  message;

  constructor(row) {
    this.id = row.id;
    this.message = row.message;
  }

  static async insert({message}) {
    console.log(message)
    const {
      rows,
    } = await pool.query(
      'INSERT INTO emails (message) VALUES ($1) RETURNING *',
      [ message ]
    );
    return new Email(rows[0]);
  }

  static async getAll() {
    const {
      rows,
    } = await pool.query(
      'SELECT * FROM emails'
    );

    return rows.map( row => new Email(row));
  }

};