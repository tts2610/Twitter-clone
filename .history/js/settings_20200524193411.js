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
    title: "AusOpen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Australian_Open_Logo_2017.png",
    content: { description: 'We should be sliding into #rolandgarros right now, thinking of our mates in Paris', images: ['https://pbs.twimg.com/media/EYv0V4dUwAA8ZaP?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/EYv0aypUEAE6-6t?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/EYv0db9UEAUWrNa?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/EYv0ffNUwAEJwZF?format=jpg&name=4096x4096'], videoLink: "" },
    time: new Date().toISOString(),
    retweet: "7",
    likes: "20",
    comments: "10",
    parent: null,
    at: "@AustralianOpen",
    hashTags: ["#Rafa", "#RolandGarros"]
}

tweetList.push(news_2);

let news_3 = {
    id: tweetList.length ? tweetList.length : 0,
    title: "Discovery",
    logo: "https://logosvector.net/wp-content/uploads/2014/10/discovery-channel-logo.png",
    content: { description: 'Son Doong cave(Vietnamese: Hang Son Doong) is world\'s largest cave, located in Quang Binh province, Vietnam. It is found by a local man named Ho Khanh in 1991 and was recently discovered in 2009 by British cavers, led by Howard Limbert', images: [], videoLink: "https://www.youtube.com/embed/bTqVqk7FSmY?autoplay=1&mute=1" },
    time: new Date().toISOString(),
    retweet: "7",
    likes: "20",
    comments: "10",
    parent: null,
    at: "@Discovery",
    hashTags: ["#sonDoong", "#largestCave"]
}

tweetList.push(news_3);