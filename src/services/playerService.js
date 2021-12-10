const baseUrl = 'http://localhost:3030/jsonstore/players'

export const getAll = async () => {
    let response = await fetch(baseUrl)
    let players = await response.json()
    let result = Object.values(players)
    return result
}