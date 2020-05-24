let tweetList = [];
let news_1 = {
    id: tweetList.length ? tweetList.length : 0,
    title: "NBA on ESPN",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/NBA_on_ESPN_logo_2016%E2%80%93present.jpg/200px-NBA_on_ESPN_logo_2016%E2%80%93present.jpg",
    content: { description: 'A little hair can make a big difference &#128077 &#128130', images: ['https://pbs.twimg.com/media/EYvsUEaXkAEmHdV?format=jpg&name=medium', 'https://pbs.twimg.com/media/EYvsUOrXgAA7cYE?format=jpg&name=medium', 'https://pbs.twimg.com/media/EYvsUZSXsAA-LQP?format=jpg&name=medium', 'https://pbs.twimg.com/media/EYvsUjTWAAAUAz3?format=jpg&name=medium'], videoLink: "" },
    time: new Date().toISOString(),
    retweet: "6",
    likes: "20",
    comments: "10",
    parent: null,
    at: "@ESPNNBA",
    hashTags: ["#NBA", "#FunFacts"]
}
tweetList.push(news_1);
let news_2 = {
    id: tweetList.length ? tweetList.length : 0,
    title: "AusOpen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Australian_Open_Logo_2017.png",
    content: { description: 'We should be sliding into #rolandgarros right now, thinking of our mates in Paris &#128079 &#127881', images: ['https://pbs.twimg.com/media/EYv0V4dUwAA8ZaP?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/EYv0aypUEAE6-6t?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/EYv0db9UEAUWrNa?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/EYv0ffNUwAEJwZF?format=jpg&name=4096x4096'], videoLink: "" },
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
    content: { description: 'Son Doong cave(Vietnamese: Hang Son Doong) is world\'s largest cave, located in Quang Binh province, Vietnam. It is found by a local man named Ho Khanh in 1991 and was recently discovered in 2009 by British cavers, led by Howard Limbert &#128563 &#128664 &#128755', images: [], videoLink: "https://www.youtube.com/embed/bTqVqk7FSmY?autoplay=1&mute=1&start=22" },
    time: new Date().toISOString(),
    retweet: "7",
    likes: "20",
    comments: "10",
    parent: null,
    at: "@Discovery",
    hashTags: ["#sonDoong", "#largestCave"]
}

tweetList.push(news_3);