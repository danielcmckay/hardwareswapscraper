const htmlCreator = (title, link) => {
    let htmlString = `<h1>I found ${title}</h1><p>Someone posted a new <a href=${link} target=_blank>${title}</a></p>`;
    return htmlString;
}

module.exports = htmlCreator;