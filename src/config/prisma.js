
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"]
});

module.exports = prisma;







//const { Prisma } = require("@prisma/client")
//const {PrismaClient} = require("@prisma/cliente")

//const prisma = new PrismaClient({

    //log:["query","info", "warn", "error"]
//});

//module.exports = prisma

