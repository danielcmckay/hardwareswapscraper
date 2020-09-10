const snoowrap = require('snoowrap');
const nodemailer = require('nodemailer');
const mailer = require('./mailer')
const htmlCreator = require('./htmlCreator');
require('dotenv').config();

const token = '-QQt2kE7lK1idZWu6Z4mj1C96xsQ'

  async function scrapeSubreddit() {
    // This all needs to be remade and put in .env!!!
    const r = new snoowrap({
        userAgent: 'hardwareswap_scrape_v1.0',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      });
  
    const subreddit = await r.getSubreddit('hardwareswap');
    const topPosts = await subreddit.getNew({time: 'day', limit: 25});
    let data = [];
    let dataToSend = []
  
    topPosts.forEach((post) => {
      data.push({
        title: post.title,
        link: post.url,
        text: post.title,
        flair: post.link_flair_richtext[0].t
      })
    });

    console.log(data)
    data.forEach(post => {
        if(post.title.includes("intel") && post.flair === 'SELLING') {
            dataToSend.push(post)
        }
    })
    
    // mailer('dcmckay10@gmail.com', htmlCreator(dataToSend[0].title, dataToSend[0].link))
  };

  scrapeSubreddit()
