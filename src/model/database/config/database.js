require('dotenv').config();

const base  ={
  "development": {
    "username": "root",
    "password": "",
    "database": 'shop',
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "ufqfhzsudzkxsjq3",
    "password": "7I3G2RcqAlsQFfMRshrp",
    "database": "bhrqzuxz4ngcvc9dyxnq",
    "host": "bhrqzuxz4ngcvc9dyxnq-mysql.services.clever-cloud.com",
    "dialect": "mysql"
  }
}

module.exports = base
