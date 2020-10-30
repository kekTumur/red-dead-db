export default class ReaddeadService {
    _apiBase = 'https://raw.githubusercontent.com/kekTumur/red-dead-data/master/data.json';


    getResource = async() => {
        const res = await fetch(this._apiBase);
        if (!res.ok) {
            throw new Error('Could not fetch');
        }

        return await res.json();
    }

    getItems = async (selector) => {
        const res = await this.getResource();
        return res[selector];
    }
};

