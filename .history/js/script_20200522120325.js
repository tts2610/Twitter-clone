let tweetArea = document.getElementById("tweetArea");
let contentArea = document.getElementById("content");
const MAX_LETTER = 140;

let tweetList = [];

let num = 0;




const countLetter = () => {
    let lengthOfSentence = tweetArea.value.length;

    let remain = MAX_LETTER - lengthOfSentence;



    if (remain < 0) {
        //  Disable button after 140 characters
        document.getElementById("tweetBtn").disabled = true;

        document.getElementById("remain").innerHTML = `${remain} left`;
        document.getElementById("remain").style.color = "red";
    } else {
        document.getElementById("remain").innerHTML = `${remain} left`;
        document.getElementById("remain").style.color = "black";
    }
}

const post = () => {

    let myTweet = {
        id: num,
        name: "Hugo",
        logo: "mylogo.png",
        content: "",
        time: "8mins",
        retweet: "6",
        likes: "20",
        comments: "10",
        isTweet: false,
        parent: null,
        hastags: ["#teamMember", "#French"]
    };

    // get value of input text
    let input = tweetArea.value;

    my
    myTweet.content = input;

    tweetList.push(myTweet);

    // create new div
    let div = document.createElement("div");

    // create div's value
    let text = document.createTextNode(input);

    // append that value to div
    div.appendChild(text);

    let reTweetA = document.createElement("a");
    reTweetA.href = "#";
    reTweetA.setAttribute("onclick", `retweet(${myTweet.id})`);

    // <a></a>
    let aText = document.createTextNode("Retweet");

    reTweetA.appendChild(aText);

    // <div>input</div>

    // append that div to the content Area
    contentArea.appendChild(div);

    contentArea.appendChild(reTweetA);
}

tweetArea.addEventListener("input", countLetter);


function retweet(id) {
    let original = tweetList.find(x => x.id == id);
    console.log(tweetList[tweetList.length - 1].id);
    let child = {
        id: tweetList.pop().id,
        name: "testChild",
        logo: "mylogo.png",
        content: original.content,
        time: "8mins",
        retweet: "6",
        likes: "20",
        comments: "10",
        isTweet: true,
        parent: original.id,
        hastags: ["#teamMember", "#French"]
    }

    tweetList.push(child);


}



// var aPost = {
//   name: "Hugo",
//   logo: "mylogo.png",
//   time: "8mins",
//   retweet: "6",
//   likes: "20",
//   comments: "10"
// isTweet: true,
// parent:
hastags: ["#teamMember", "#French"]
    // };

// let myList = [aPost,aPost,aPost,aPost]