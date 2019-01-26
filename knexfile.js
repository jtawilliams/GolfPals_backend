// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/golf_pals_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
