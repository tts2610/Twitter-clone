let tweetArea = document.getElementById("tweetArea");
let contentArea = document.getElementById("content");
const MAX_LETTER = 140;


const countLetter = () => {
    let lengthOfSentence = tweetArea.value.length;
    console.log("length is ", lengthOfSentence);

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
    // get value of input text
    let input = tweetArea.value;
    // create new div
    let div = document.createElement("div");

    // create div's value
    let text = document.createTextNode(input);

    // append that value to div
    div.appendChild(text);

    // <div>input</div>

    // append that div to the content Area
    contentArea.appendChild(div);
}

tweetArea.addEventListener("input", countLetter);






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