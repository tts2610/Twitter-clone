function renderHashtagFilter(filterList) {
    hasImgs = false;
    filterList.sort((a, b) => b.id - a.id);
    let html = filterList.map(element => {
        // let myFunc = renderModal(JSON.stringify(element));
        if (element.parent != null) {
            return renderRetweet(element);
        }
        if (element.content.videoLink !== '') {
            return renderTweetWithVideo(element);
        }
        return `<div id="content" class="px-5 py-3">
        <div class="row"><div class="col-2"><img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
        </div>
            <div class="col-10">
                <div>
                <span id="tweetTitle">${element.title}</span>
                    <span><i class="ml-1 fas fa-badge-check"></i></span>
                    <span>${element.at}</span>
                    <span>${moment(element.time).fromNow()}</span></div>
                    <div>${renderDescription(element.content.description)}</div></div>
                    </div><div class="row pt-3" style="display: flex; justify-content: center;">
                    <div id="image-container-tweet">${renderImgs(element)}</div>
                </div><div class="row pt-3 functionBar">
                <i class="fal fa-comment"></i>
                <i class="far fa-retweet" id="reTweetIcon" onclick="renderModal(${element.id})" style="cursor:pointer;"></i>
                <i class="fal fa-heart"></i>
                <i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
        </div>
        </div>
        <hr/>`

    }).join('')
    $('#retweetModal').modal('hide');
    $('#contentArea').empty();
    $('#contentArea').append(html);

    if (hasImgs) {
        $('#image-container-tweet').css({ "border-color": "#e6ecf0", "border-width": "10px", "border-style": "solid", "border-radius": "20px" });
    }
}



function renderFromList() {
    hasImgs = false;
    tweetList.sort((a, b) => b.id - a.id);
    let html = tweetList.map(element => {
        // let myFunc = renderModal(JSON.stringify(element));
        if (element.parent != null) {
            return renderRetweet(element);
        }
        if (element.content.videoLink !== '') {
            return renderTweetWithVideo(element);
        }
        return `<div id="content" class="px-5 py-3">
        <div class="row"><div class="col-2"><img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
        </div>
            <div class="col-10">
                <div>
                <span id="tweetTitle">${element.title}</span>
                    <span><i class="ml-1 fas fa-badge-check"></i></span>
                    <span>${element.at}</span>
                    <span>${moment(element.time).fromNow()}</span></div>
                    <div>${renderDescription(element.content.description)}</div></div>
                    </div><div class="row pt-3" style="display: flex; justify-content: center;">
                    <div id="image-container-tweet">${renderImgs(element)}</div>
                </div><div class="row pt-3 functionBar">
                <i class="fal fa-comment"></i>
                <i class="far fa-retweet" id="reTweetIcon" onclick="renderModal(${element.id})" style="cursor:pointer;"></i>
                <i class="fal fa-heart"></i>
                <i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
        </div>
        </div>
        <hr/>`

    }).join('')
    $('#retweetModal').modal('hide');
    $('#contentArea').empty();
    $('#contentArea').append(html);

    if (hasImgs) {
        $('#image-container-tweet').css({ "border-color": "#e6ecf0", "border-width": "10px", "border-style": "solid", "border-radius": "20px" });
    }
}




function renderTweetWithVideo(element) {
    return `<div id="content" class="px-5 py-3">
        <div class="row"><div class="col-2"><img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
        </div>
            <div class="col-10">
                <div>
                <span id="tweetTitle">${element.title}</span>
                    <span><i class="ml-1 fas fa-badge-check"></i></span>
                    <span>${element.at}</span>
                    <span>${moment(element.time).fromNow()}</span></div>
                    <div>${renderDescription(element.content.description)}</div></div>
                    </div><div class="row pt-3" style="display: flex; justify-content: center;">
                    <div id="image-container-tweet">${renderImgs(element)}</div>
                    <div id="player" style="width:500px; height:300px;">
                    <iframe
                    src="${element.content.videoLink}"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                    style="width:500px; height:300px;"
                  ></iframe>
                    </div>
                </div><div class="row pt-3 functionBar">
                <i class="fal fa-comment"></i>
                <i class="far fa-retweet" id="reTweetIcon" onclick="renderModal(${element.id})" style="cursor:pointer;"></i>
                <i class="fal fa-heart"></i>
                <i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
        </div>
        </div>
        <hr/>`
}

function renderRetweet(element) {
    let parentTweet = tweetList.find(x => x.id == element.parent);
    return `
    <div id="content" class="px-5 py-3">
        <div class="row">
            <div class="col-2">
                <img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
            </div>
            <div class="col-10">
                <div>
                    <span id="tweetTitle">${element.title}</span>
                    <span><i class="ml-1 fas fa-badge-check"></i></span>
                    <span>${element.at}</span>
                    <span>${moment(element.time).fromNow()}</span>
                    <div>${renderDescription(element.content.description)}</div>
                </div>
            </div>
        </div>
        <div class="row pt-3" style="zoom:0.8; justify-content:center;">
                <div class="px-5 py-3" style="border: 5px solid #e6ecf0;border-radius:20px">
                    <div class="row">
                        <div class="col-2">
                            <img src="img/profileImages/talkSport.jpg" id="moreToFollowImg" alt="Avatar">
                        </div>
                        <div class="col-10">
                            <div>                
                                <span id="tweetTitle">${parentTweet.title }</span>                    
                                <span><i class="ml-1 fas fa-badge-check"></i></span>                    
                                <span>${parentTweet.at}</span>                    
                                <span>${moment(parentTweet.time).fromNow()}</span>
                            </div>                    
                            <div>${renderDescription(element.content.description)}</div>
                        </div>
                    </div>   
                    <div class="row pt-3" style="display: flex; justify-content: center;">
                        <div id="image-container-tweet">${renderImgs(parentTweet)}</div>
                    </div>

                </div>
        </div>
        
        <div class="row pt-3 functionBar">
            <i class="fal fa-comment"></i>
            <i class="far fa-retweet" id="reTweetIcon" onclick="renderModal(${element.id})" style="cursor:pointer;"></i>
            <i class="fal fa-heart"></i>
            <i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
        </div>
        
    </div>
        <hr/>`
}