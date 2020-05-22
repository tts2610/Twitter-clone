let tweetArea = document.getElementById("tweetArea");
const MAX_LETTER = 140;

let tweetList = [];




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
        id: tweetList.length ? tweetList.length : 0,
        title: "Sean",
        logo: "img/profileImages/talkSport.jpg",
        content: "Pro-democracy activists warn that the new legislation could mean “the end of Hong Kong”",
        time: "8mins",
        retweet: "6",
        likes: "20",
        comments: "10",
        isTweet: false,
        parent: null,
        hashtag: "@Sean"
    };

    // get value of input text
    let input = tweetArea.value;
    myTweet.content = input;

    tweetList.push(myTweet);
    renderFromList();

}

tweetArea.addEventListener("input", countLetter);


function renderFromList() {
    let html = tweetList.map(x => {
        return `<div class="row">
        <div class="col-2">
            <img src="${x.logo}" id="moreToFollowImg" alt="Avatar">
        </div>
        <div class="col-10">
            <div>
                <span id="tweetTitle">${x.title}</span>
                <span><i class="ml-1 fas fa-badge-check"></i></span>
                <span>${x.hashtag}</span>
                <span>${x.time}</span>
            </div>
            <div>
                ${x.content}
            </div>
            <div>
                link
            </div>
            <div>
                <i class="fal fa-comment"></i>
                <i class="far fa-retweet" onclick="retweet(${x.id})" style="cursor:pointer;"></i>
                <i class="fal fa-heart"></i>
                <i class="fal fa-upload"></i>
            </div>
        </div>
    </div>`

    }).join('')
    $('#content').empty();
    $('#content').append(html);
}

function retweet(id) {
    let original = tweetList.find(x => x.id == id);
    let child = {
        id: tweetList.length ? tweetList.length : 0,
        title: "Child",
        logo: "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/643x481/bwpUoL-J_400x400_ckOpi7f_4RVQqqi_ZPjpFJN_cnPYP1e_202004.jpg",
        content: original.content,
        time: "8mins",
        retweet: "6",
        likes: "20",
        comments: "10",
        isTweet: true,
        parent: original.id,
        hashtag: "@Child"
    }

    tweetList.push(child);
    console.log(tweetList);
    renderFromList();
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