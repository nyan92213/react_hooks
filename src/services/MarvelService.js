

class MarvelService {
    getResoure = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status ${res.status}`)
        }
        return await res.json()
    }

    getAllCharacters = () => {
        return this.getResoure('https://gateway.marvel.com:443/v1/public/characters?apikey=49cf50974e36d6fbc26c8729936c2e12')
    }
}

export default MarvelService