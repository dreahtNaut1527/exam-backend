const Hapi = require('hapi')
const routers = require('./routes/router')

const serverConnection = {
    port: 8000,
    host: 'localhost'
}

const init = async () => {
    const server = Hapi.server(serverConnection)

    server.route(routers)
    await server.start()
    console.log(`Server running at port: ${server.info.port}`);
}


init()