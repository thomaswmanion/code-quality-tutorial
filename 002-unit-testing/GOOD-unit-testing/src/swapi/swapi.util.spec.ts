import 'mocha';
import { expect } from 'chai';
import { swapiUtil } from './swapi.util';

describe('swapiUtil.validateRequest', () => {
    const testCases = [
        {
            input: {
                type: 'car',
                num: '123',
            },
            expect: {
                type: 'car',
                num: '123',
            },
        },
        {
            input: {
                type: 'car',
            },
            expect: false,
        },
        {
            input: {
                num: '123',
            },
            expect: false,
        },
    ];
    testCases.forEach((testCase, i) => {
        it(`should validate the request for input ${JSON.stringify(testCase.input)} [${i}]`, () => {
            const res = swapiUtil.validateRequest({
                query: testCase.input,
            });
            expect(res).to.deep.equal(testCase.expect);
        });
    });
});

describe('swapiUtil.transformResponse', () => {
    const testCases = [
        {
            input: {
                name: 'name',
                mass: '100',
                starships: [1],
            },
            expect: { nameAndSize: 'name-100', hasStarships: true },
        },
        {
            input: {
                name: 'name',
                length: '200',
            },
            expect: { nameAndSize: 'name-200', hasStarships: false },
        },
    ];
    testCases.forEach((testCase, i) => {
        it(`should transform the response for input ${JSON.stringify(testCase.input)} [${i}]`, () => {
            const res = swapiUtil.transformResponse(testCase.input);
            expect(res).to.deep.equal(testCase.expect);
        });
    });
});
