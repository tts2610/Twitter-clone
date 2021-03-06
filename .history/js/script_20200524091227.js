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
    if (srcImgList.length) {
        let end = srcImgList.length;
        let i = 0;
        while (i != end) {
            myTweet.content.images.push(srcImgList.shift());
            i++;
        }
    }

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
        // let myFunc = renderModal(JSON.stringify(element));

        return '<div id="content" class="px-5 py-3">\
        <div class="row"><div class="col-2"><img src="' + element.logo + '" id="moreToFollowImg" alt="Avatar">\
        </div>\
            <div class="col-10">\
                <div>\
                <span id="tweetTitle">' + element.title + '</span>\
                    <span><i class="ml-1 fas fa-badge-check"></i></span>\
                    <span>' + element.hashtag + '</span>\
                    <span>' + moment(element.time).fromNow() + '</span></div>\
                    <div>' + element.content.description + '</div></div>\
                    </div><div class="row pt-3" style="display: flex; justify-content: center;">\
                    <div id="image-container">' + renderImgs(element) + '</div>\
                </div><div class="row pt-3 functionBar">\
                <i class="fal fa-comment"></i>\
                <i class="far fa-retweet" id="reTweetIcon" onclick="renderModal(' + element.id + ')" style="cursor:pointer;"></i>\
                <i class="fal fa-heart"></i>\
                <i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>\
        </div>\
        </div>\
        <hr/>'



        // onclick="retweet(${element.id})" 
    }).join('')
    $('#contentArea').empty();
    $('#contentArea').append(html);



    // 
}


function renderModal(id) {


    $("#retweetModal").remove();

    let thisElement = tweetList.find(x => x.id == id);

    let myModal = `<div class="modal fade" id="retweetModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-1">
                            <img src="https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/643x481/bwpUoL-J_400x400_ckOpi7f_4RVQqqi_ZPjpFJN_cnPYP1e_202004.jpg" id="moreToFollowImg" alt="Avatar">
                        </div>
                        <div class="col-11">
                            <div contenteditable="true" placeholder="What's happening" id="tweetArea" style="padding-left: 34px;"></div>
                            <div>${thisElement.content.description}</div>
                            <div id="image-container">
                                ${renderImgs(thisElement)}
                            </div>
                            <span id="remain"></span>
                            <!--  -->
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="utilityBar">
                        <div class="icons" style="color:#16a2f2; width: 200px;">
                            <div class="img-upload">
                                <label for="file-input">
                                    <i class="fal fa-image-polaroid fa-lg"></i>
                                </label>
                                <input id="file-input" type="file" accept="image/*" multiple />
                            </div>

                            <i class="fal fa-ad fa-lg"></i>
                            <i class="fal fa-tasks-alt fa-lg"></i>
                            <i class="fal fa-smile fa-lg"></i>
                        </div>

                        <button class="tweetbtn inputArea-tweetbtn" href="#" onclick="post()" style="width: 100px; margin-left: 21px;">Retweet</button>

                    </div>

                </div>
            </div>
        </div>
    </div>`
    if (tweet.content.images.length) {
        $('#image-container').css({ "border-color": "#e6ecf0", "border-width": "1px", "border-style": "solid" });
        alert('aaaaa');
    }

    $(document.body).append(myModal);
    $('#retweetModal').modal('show');
}


function renderImgs(tweet) {
    let html = "";
    tweet.content.images.forEach((elem, i) => {
        if (i == 0) {
            html += `<div id="first-row"><img id="tweet-img" class="tweet" style="display: block;" height="250px" src="${elem}" />`
        } else if (i == 1) {
            html += `<img id="tweet-img" style="display: block;" class="tweet" height="250px" src="${elem}" /></div>`
        } else if (i == 2) {
            html += `<div id="second-row"><img id="tweet-img" class="tweet" style="display: block;" height="250px" src="${elem}" />`
        } else if (i == 3) {
            html += `<img id="tweet-img" style="display: block;" class="tweet" height="250px" src="${elem}" /></div>`
        }
    });

    if (tweet.content.images.length != 0 && tweet.content.images.length < 4) {
        html += "</div>"
    }
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