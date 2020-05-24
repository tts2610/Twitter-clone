let tweetList = [];
let news_1 = {
    id: tweetList.length ? tweetList.length : 0,
    title: "CNN Politics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/1200px-CNN_International_logo.svg.png",
    content: { description: 'After false claims about Michigan and voting, President Trump repeats another false claim that he was Michigan\'s \"Man of the Year\"', images: ['https://media.newyorker.com/photos/5e90deb7fe3260000878c2a5/4:3/w_2444,h_1833,c_limit/Borowitz-TrumpsMouth.jpg', 'https://cdn.theatlantic.com/thumbor/ET0exgN8WCotCb9DV2DCHqlaS4o=/0x250:4806x2953/720x405/media/img/mt/2016/09/RTX1GZCO/original.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQLcpEqQ5yRGElmREiP8S0vDYizFRFs2HnEaR6xqSwSCndTTUV&usqp=CAU', 'https://media.salon.com/2016/06/donald_trump174.jpg'], videoLink: "" },
    time: new Date().toISOString(),
    retweet: "6",
    likes: "20",
    comments: "10",
    parent: null,
    at: "@CNNPolitics",
    hashTags: ["#ManOfTheYear", "Triumph"]
}
tweetList.push(news_1);
let news_2 = {
    id: tweetList.length ? tweetList.length : 0,
    title: "Dwayne Johnson",
    logo: "data:image/jpeg;base64,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",
    content: { description: '<i class="fas fa-heart"></i>', images: ['https://i.pinimg.com/originals/6d/45/d7/6d45d73608e79566da7e402ae4f943bd.jpg'], videoLink: "" },
    time: new Date().toISOString(),
    retweet: "7",
    likes: "20",
    comments: "10",
    parent: null,
    at: "@TheRock",
    hashTags: ["#scb", "#love"]
}


tweetList.push(news_2);

console.log(tweetList);