import * as Hapi from '@hapi/hapi';
import axios from 'axios';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });
    server.route({
        path: '/',
        method: 'get',
        async handler(req, res) {
            try {
                const { type, num } = req.query;
                if (!type || !num) {
                    return res.response(`Bad request - The parameters 'type' and 'name' are both required.`).code(400);
                }
                const root = 'https://swapi.dev/api';
                const url = `${root}/${type}/${num}`;
                const result = await axios.get(url);
                const data = result.data;
                const transformedData = {
                    nameAndSize: `${data.name}-${data.mass || data.length || 'unknown'}`,
                    hasStarships: !!data.starships && data.starships.length > 0,
                };
                return transformedData;
            } catch (error) {
                return res.response(`Internal Server Error: ${error.message}`).code(500);
            }
        },
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
