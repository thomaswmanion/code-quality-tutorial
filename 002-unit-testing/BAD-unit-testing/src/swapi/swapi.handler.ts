import { swapiUtil } from './swapi.util';
import { swapiService } from './swapi.service';

export const swapiHandler = {
    async handle(req, res) {
        try {
            const input = swapiUtil.validateRequest(req);
            if (!input) {
                return res.response(`Bad request - The parameters 'type' and 'name' are both required.`).code(400);
            }
            const data = await swapiService.lookupItem(input.type, input.num);
            const transformedData = swapiUtil.transformResponse(data);
            return transformedData;
        } catch (error) {
            return res.response(`Internal Server Error: ${error.message}`).code(500);
        }
    },
};
