var config = require("../../config.json");
var banco = config.connexaoDB;
const { DB_URL } = process.env;

const { MongoClient } = require("mongodb");

// let conn = new MongoClient(DB_URL, banco.options);

module.exports = {
  async getDbo(req) {
    // Tratando autorização
    
    const reqAuth = req.headers.authorization.split(" ")[1];
    const reqAuthDecode = Buffer.from(reqAuth, "base64").toString("utf-8");

    // console.log(reqAuth);
    // console.log('=========================================================');
    // console.log(Buffer.from(reqAuth, 'base64').toString('utf-8'));
    // console.log(Buffer.from(reqAuth, 'base64').toString('latin1'));
    // console.log(Buffer.from(reqAuth, 'base64').toString('ascii'));
    // console.log(Buffer.from(reqAuth, 'base64').toString('utf16le'));
    // console.log('=========================================================');

    const conn = await MongoClient(`mongodb://${reqAuthDecode}@${banco.host}/Projeto_teste`, banco.options);

    if (!conn.isConnected()) await conn.connect();
    return conn.db();
  },
};
