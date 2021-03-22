import axios from 'axios';

export const swapiService = {
    async lookupItem(type: string, num: string) {
        const root = 'https://swapi.dev/api';
        const url = `${root}/${type}/${num}`;
        const result = await axios.get(url);
        return result.data;
    },
};
