let tweetArea = $("#tweetArea");
const MAX_LETTER = 140;

let tweetList = [];
let srcImgList = [];

const fileInput = document.getElementById("file-input");
const img = document.getElementById("my-img");
let classImgList;

fileInput.addEventListener('change', e => {
    classImgList = [".firstImg", ".secondImg", ".thirdImg", ".fourthImg"];
    srcImgList = [];
    let myFiles = e.target.files
    for (let index = 0; index < myFiles.length; index++) {
        const reader = new FileReader();
        const element = myFiles[index];
        reader.readAsDataURL(element);
        reader.onload = e => {
            let imgClass = classImgList.shift();
            srcImgList.push(e.target.result);
            $("#image-container " + imgClass).attr("src", e.target.result);
            $("#image-container " + imgClass).css("display", "block");
        }
    }
})






const countLetter = () => {
    let lengthOfSentence = tweetArea.text().length;

    let remain = MAX_LETTER - lengthOfSentence;

    if (remain < 0) {
        //  Disable button after 140 characters
        document.getElementById("tweetbtn").disabled = true;

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
        content: { description: "", images: [] },
        time: new Date().toISOString(),
        retweet: "6",
        likes: "20",
        comments: "10",
        isRetweet: false,
        parent: null,
        hashtag: "@Sean"
    };

    // get value of input text
    let input = tweetArea.text();
    myTweet.content.description = input;
    if (srcImgList.length)
        srcImgList.forEach(file => {
            myTweet.content.images.push(file);
        });

    tweetList.push(myTweet);
    console.log(tweetList);
    renderFromList();

    $("#inputArea #tweetArea").empty();
    removeImages();
}

function removeImages() {
    $("#image-container .firstImg").attr("src", "");
    $("#image-container .firstImg").css("display", "none");

    $("#image-container .secondImg").attr("src", "");
    $("#image-container .secondImg").css("display", "none");

    $("#image-container .thirdImg").attr("src", "");
    $("#image-container .thirdImg").css("display", "none");

    $("#image-container .fourthImg").attr("src", "");
    $("#image-container .fourthImg").css("display", "none");
}



function deleteAll(id) {
    let index = tweetList.findIndex(element => element.id == id)
    tweetList.splice(index, 1)
    console.log(tweetList)
    renderFromList()
}

function renderFromList() {
    tweetList.sort((a, b) => b.id - a.id);
    let html = tweetList.map(element => {
        let imgsHtml = renderImgs(element);
        return `<div class="row">
        <div class="col-2">
            <img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
        </div>
        <div class="col-10">
            <div>
                <span id="tweetTitle">${element.title}</span>
                <span><i class="ml-1 fas fa-badge-check"></i></span>
                <span>${element.hashtag}</span>
                <span>${moment(element.time).fromNow()}</span>
            </div>
            <div id="image-container">${imgsHtml}</div>
            <div>
                link
            </div>
            <div class="functionBar">
                <i class="fal fa-comment"></i>
                <i class="far fa-retweet" onclick="retweet(${element.id})" style="cursor:pointer;"></i>
                <i class="fal fa-heart"></i>
                <i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
            </div>
        </div>
    </div>`

    }).join('')
    $('#content').empty();
    $('#content').append(html);
}

function renderImgs(tweet) {
    let html = "";
    tweet.content.images.forEach((elem, i) => {
        if (i == 0) {
            html += `<div id="first-row"><img id="my-img" style="display: block;" height="250px" src="${elem}" />`
        } else if (i == 1) {
            html += `<img id="my-img" style="display: block;" height="250px" src="${elem}" /></div>`
        } else if (i == 2) {
            html += `<div id="second-row"><img id="my-img" style="display: block;" height="250px" src="${elem}" />`
        } else if (i == 3) {
            html += `<img id="my-img" style="display: block;" height="250px" src="${elem}" /></div>`
        }
    });
    return html;
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

function ranking() {
    let items = ['#trending1', '#trending2', '#trending3', '#trending4'];

    let randomItem = items[Math.floor(Math.random() * items.length)];
    var $myLi = $(randomItem)
    var $myUl = $(randomItem).parent();
    var listHeight = $myUl.innerHeight();
    var elemHeight = $myLi.height();
    var elemTop = $myLi.position().top;

    var moveUp = listHeight - (listHeight - elemTop) - 75;
    // var moveDown = elemHeight + 25;
    var moveDown = elemHeight + 25;
    var liId = $myLi.attr("id");
    var liHtml = $myLi.outerHTML();


    $("li").each(function() {
        if ($(this).attr("id") == liId || $(this).attr("id") == "trendingHeader" || $myLi.is(':first-child')) {
            return false;
        }
        $(this).animate({
            "top": '+=' + moveDown
        }, 1000);
        $myLi.animate({
            "top": '-=' + moveUp
        }, 1000, function() {
            $myLi.remove();
            var oldHtml = $myUl.html();

            $myUl.html(liHtml + oldHtml);
            $myUl.children("li").attr("style", "");
        });
    });


    setTimeout(ranking, 2000);
}

$(document).ready(function() {
    setTimeout(() => {
        tweetArea.focus();
    })

    tweetArea.on('input propertychange', countLetter);
    $.fn.outerHTML = function() {
        return $(this).clone().wrap('<div></div>').parent().html();
    }
    setTimeout(ranking, 2000);

    var element = $("#tweetArea");
    if (!element.text().trim().length) {
        element.empty();
    }

})

jQuery(function($) {

});



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