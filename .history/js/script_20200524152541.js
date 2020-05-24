let tweetArea = $("#tweetArea");
const MAX_LETTER = 140;
let srcImgList = [];


const fileInput = document.getElementById("file-input");
const img = document.getElementById("my-img");
let classImgList;
let hasImgs = false;

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
    checkInputFields();

    if (remain < 0) {
        //  Disable button after 140 characters
        $("#inputArea .inputArea-tweetbtn").attr("disabled", true);
        $("#inputArea .inputArea-tweetbtn").css("opacity", 0.5);

        document.getElementById("remain").innerHTML = `${remain} left`;
        document.getElementById("remain").style.color = "red";
    } else {
        $("#inputArea .inputArea-tweetbtn").attr("disabled", false);
        $("#inputArea .inputArea-tweetbtn").css("opacity", 1.0);
        document.getElementById("remain").innerHTML = `${remain} left`;
        document.getElementById("remain").style.color = "black";
    }
}

const post = () => {
    // https://www.youtube.com/embed/bTqVqk7FSmY?autoplay=1
    let myTweet = {
        id: tweetList.length ? tweetList.length : 0,
        title: "Sean",
        logo: "img/profileImages/talkSport.jpg",
        content: { description: "", images: [], videoLink: "" },
        time: new Date().toISOString(),
        retweet: "6",
        likes: "20",
        comments: "10",
        parent: null,
        at: "@Sean",
        hashTags: tweetArea.text().split(' ').filter(x => x.startsWith("#"))
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
    renderFromList();
    console.log(tweetList);
    $("#inputArea #tweetArea").empty();
    // $("#inputArea .col-11 .jqueryHashtags").remove();
    // $("#inputArea .col-11").prepend(`<div class="theSelector" contenteditable="true" placeholder="What's happening" id="tweetArea"></div>`)
    // $("#tweetArea").hashtags();
    $("#inputArea .jqueryHashtags .hashtag").remove();
    $("#remain").empty();
    checkInputFields();
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
    renderFromList()
}

function renderDescription(id) {
    alert(typeof id);
    alert(typeof tweetList[0].id);
    let element = tweetList.filter(x => x.id == id);

    let desArr = element.content.description.split(' ');
    let html = '';
    desArr.forEach(element => {
        if (element.startsWith("#")) {
            html += `<a class="mx-3" onclick="renderHashTags('${element}')" href="#">${element}</a>`
        } else {
            html += ` ${element}`
        }
    });

    if (element.hashTags.length != 0) {
        element.hashTags.forEach(element => {
            html += `<a class="mx-3" onclick="renderHashTags('${element}')" href="#">${element}</a>`
        });
    }

    return html;
}

function renderHashTags(hashTag) {
    $('#retweetModal').modal('hide');
    let hashTagList = tweetList.filter(x => x.hashTags.includes(hashTag))
    renderHashtagFilter(hashTagList);

}

function retweet(id) {
    let original = tweetList.find(x => x.id == id);
    let child = {
        id: tweetList.length ? tweetList.length : 0,
        title: original.title,
        logo: "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/643x481/bwpUoL-J_400x400_ckOpi7f_4RVQqqi_ZPjpFJN_cnPYP1e_202004.jpg",
        content: { description: $("#tweetArea-modal").text(), images: [] },
        time: new Date().toISOString(),
        retweet: "6",
        likes: "20",
        comments: "10",
        parent: original.id,
        at: "@Sean",
        hashTags: [],
    }

    tweetList.push(child);

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
    $("#tweetArea").hashtags();
    setTimeout(() => {
        tweetArea.focus();
    })

    checkInputFields();
    tweetArea.on('input propertychange', countLetter);
    $.fn.outerHTML = function() {
        return $(this).clone().wrap('<div></div>').parent().html();
    }
    setTimeout(ranking, 2000);

    var element = $("#tweetArea");
    if (!element.text().trim().length) {
        element.empty();
    }

    renderFromList();

})

jQuery(function($) {

});

function checkInputFields() {
    if ($("#tweetArea").text() === '') {
        $("#inputArea .inputArea-tweetbtn").attr("disabled", true);
        $('#retweetModal .inputArea-tweetbtn').attr("disabled", true);

        $("#inputArea .inputArea-tweetbtn").css("opacity", 0.5);
        $('#retweetModal .inputArea-tweetbtn').css("opacity", 0.5);
    } else {
        $("#inputArea .inputArea-tweetbtn").removeAttr("disabled");
        $('#retweetModal .inputArea-tweetbtn').removeAttr("disabled");

        $("#inputArea .inputArea-tweetbtn").css("opacity", 1);
        $('#retweetModal .inputArea-tweetbtn').css("opacity", 1);
    }
}