let tweetList = [];
let news_1 = {
    id: tweetList.length ? tweetList.length : 0,
    title: "CNN Politics",
    logo: "img/profileImages/talkSport.jpg",
    content: { description: 'After false claims about Michigan and voting, President Trump repeats another false claim that he was Michigan\'s \"Man of the Year\"', images: ['https://pbs.twimg.com/media/EYw6Zw-XYAEbg4S?format=jpg&name=small'], videoLink: "" },
    time: (new Date() - 1).toISOString(),
    retweet: "6",
    likes: "20",
    comments: "10",
    parent: null,
    at: "@CNNPolitics",
    hashTags: tweetArea.text().split(' ').filter(x => x.startsWith("#"))
}

tweetList.push(news_1);