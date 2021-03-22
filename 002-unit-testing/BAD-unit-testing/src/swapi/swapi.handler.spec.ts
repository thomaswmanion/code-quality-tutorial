import 'mocha';
import { swapiHandler } from './swapi.handler';
import { expect } from 'chai';

describe('swapiHandler', () => {
    it('should respond to a request with type "people" and num "1"', async () => {
        const req = {
            query: {
                type: 'people',
                num: '1',
            },
        };
        const res = {
            response() {},
        };
        const result = await swapiHandler.handle(req, res);
        expect(result).to.deep.equal({
            hasStarships: true,
            nameAndSize: 'Luke Skywalker-77',
        });
    }).timeout(5000);
});
