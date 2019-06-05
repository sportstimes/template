/* Pseudo code 
for each .fixtures__match-wrapper {
    unixTime = this[data-match-time];
    id = this[data-match-id];
    summary = .fixtures__teams;
    description = .fixtures__event-phase;
    locationName = .fixtures__venue;
}

https://stackabuse.com/web-scraping-with-node-js/
npm install --save request request-promise cheerio 

How to request deeper data

const name = e.children[0].data;
const innerHtml = await rp(link);
const emailAddress = cheerio('a.email-business', innerHtml).prop('href');

*/

const rp = require('request-promise'); 
const cheerio = require('cheerio');

const baseURL = 'https://www.rugbyworldcup.com';  
const searchURL = '/matches'; 

const getEvents = async () => {  
    const html = await rp(baseURL + searchURL);
    const eventMap = cheerio('div.fixtures__match-wrapper', html).map(async (i, e) => {
      const unixTime = e.attribs.data-match-time;
      const eventId = e.attribs.data-match-id;
      const summary = cheerio('.fixtures__teams', e).children[0].data;

      return {
        unixTime,
        eventId,
        summary,
      }
    }).get();
    return Promise.all(eventMap);
  };