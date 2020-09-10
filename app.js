const snoowrap = require('snoowrap');
const nodemailer = require('nodemailer');
const mailer = require('./mailer')




const token = '-QQt2kE7lK1idZWu6Z4mj1C96xsQ'

  async function scrapeSubreddit() {
    const r = new snoowrap({
        userAgent: 'hardwareswap_scrape_v1.0',
        clientId: '0Xl5IAK6B-A31w',
        clientSecret: 'vjTH4E8NE0CnLGyvlWQG7TEwEjM',
        refreshToken: '50197984-UlOyek83IvYo2uuCHv9_8LZTKek'
      });
  
    const subreddit = await r.getSubreddit('hardwareswap');
    const topPosts = await subreddit.getTop({time: 'day', limit: 3});
  
    let data = [];
  
    topPosts.forEach((post) => {
      data.push({
        link: post.url,
        text: post.title,
        score: post.score
      })
    });
    
    console.log(data);
  };

  mailer('dcmckay10@gmail.com', 'Hello world')