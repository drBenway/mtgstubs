// scryfall.js
// Fetch all MTG sets and their release dates from the Scryfall API

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const https = require('https');
const fs = require('fs');

/**
 * Fetch all Magic: The Gathering sets and their release dates from Scryfall API.
 * @returns {Promise<Array<{code: string, name: string, released_at: string}>>}
 */
async function fetchAllSets() {
  const url = 'https://api.scryfall.com/sets';
  const options = {
    headers: {
      'User-Agent': 'mtgstubs-bot/1.0 (https://github.com/PeeterY4/mtgstubs)',
      'Accept': 'application/json'
    }
  };
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (!json.data) return reject(new Error('No data field in Scryfall response'));
          // Only return code, name, and released_at
          const sets = json.data.map(set => ({
            code: set.code,
            name: set.name,
            released_at: set.released_at
          }));
          resolve(sets);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Example usage (uncomment to test):
fetchAllSets().then(sets => {
  fs.writeFileSync('setinfo.json', JSON.stringify(sets, null, 2), 'utf8');
  console.log('Wrote setinfo.json');
}).catch(console.error);

module.exports = { fetchAllSets };
