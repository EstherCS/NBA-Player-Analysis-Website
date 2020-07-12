import nba from 'nba';

const SERVER_URL = 'https://nba.laiprojects.com';
//const SERVER_URL = 'http://35.235.84.235:5000';
export default {
    // export all nba
    ...nba,
    // key value pair. We have a variable stats as key
    stats: {
        ...nba.stats,
        // give a ID, then return player status at the url
        playerInfo: function({ PlayerID }) {
            return fetch(`${SERVER_URL}/players/${PlayerID}`).then(res => res.json())
        },
        shots: function({ PlayerID }) {
            return fetch(`${SERVER_URL}/players/${PlayerID}/shots`).then(res => res.json())
        },
    },
};