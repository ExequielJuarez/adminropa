require('dotenv').config();

const base  ={
  "development": {
    
      "username": "ufqfhzsudzkxsjq3",
      "password": "7I3G2RcqAlsQFfMRshrp",
      "database": "bhrqzuxz4ngcvc9dyxnq",
      "host": "bhrqzuxz4ngcvc9dyxnq-mysql.services.clever-cloud.com",
      "dialect": "mysql",
      "port": 3306
    
    
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
      "dialect": "mysql",
      "port": 3306
  }
}

module.exports = base
