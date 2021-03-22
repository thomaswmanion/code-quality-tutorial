import { swapiHandler } from '../handlers/swapi.handler';
import { ServerRoute } from '@hapi/hapi';

export const swapiRouter = {
    getRoutes(): ServerRoute[] {
        return [
            {
                path: '/',
                method: 'get',
                handler: (req, res) => swapiHandler.handle(req, res),
            },
        ];
    },
};
