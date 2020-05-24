let tweetList = [];
let news_1 = {
    id: tweetList.length ? tweetList.length : 0,
    title: "CNN Politics",
    logo: "img/profileImages/talkSport.jpg",
    content: { description: 'After false claims about Michigan and voting, President Trump repeats another false claim that he was Michigan\'s \"Man of the Year\"', images: ['https://s.abcnews.com/images/WNT/181224_wn_palmeri_hpMain_16x9_992.jpg', 'https://cdn.theatlantic.com/thumbor/ET0exgN8WCotCb9DV2DCHqlaS4o=/0x250:4806x2953/720x405/media/img/mt/2016/09/RTX1GZCO/original.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQLcpEqQ5yRGElmREiP8S0vDYizFRFs2HnEaR6xqSwSCndTTUV&usqp=CAU', 'https://media.salon.com/2016/06/donald_trump174.jpg'], videoLink: "" },
    time: new Date().toISOString(),
    retweet: "6",
    likes: "20",
    comments: "10",
    parent: null,
    at: "@CNNPolitics",
    hashTags: ["#ManOfTheYear", "Triumph"]
}

tweetList.push(news_1);