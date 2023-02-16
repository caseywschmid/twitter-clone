
const users = {
    user1: {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 148,
        followerCount: 121200000,
        tweetCount: 21300,
        location: '',
        link: '',
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '12/15/2022 09:34:23',
                commentCount: 44321,
                retweetCount: 21342,
                likeCount: 3456275,
            },
            {
                text: 'Starship to the moon',
                timestamp: '04/17/2021 20:15:18',
                commentCount: 12353,
                retweetCount: 231,
                likeCount: 24542,
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '09/02/2021 12:11:51',
                commentCount: 765542,
                retweetCount: 12343,
                likeCount: 2356332,
            }
        ]
    },
    user2: {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 531,
        followerCount: 61300000,
        tweetCount: 4142,
        location: 'Seattle, WA',
        link: 'gatesnot.es/blog',
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '03/07/2021 00:01:20',
                commentCount: 1234543,
                retweetCount: 3253145,
                likeCount: 4324,
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '11/14/2021 18:37:12',
                commentCount: 123,
                retweetCount: 34564,
                likeCount: 3243,
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '06/23/2021 10:42:51',
                commentCount: 876564,
                retweetCount: 455635,
                likeCount: 3554,
            }
        ]
    }

}

// Icons
let blueCheckIcon = `<svg id='twitter-verified' role='img' viewBox='0 0 24 24'>
                    <g><path d='M22.25
                    12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33
                    2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2
                    3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31
                    1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2
                    3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8
                    12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z'></path></g>
                    </svg>`;
let commentIcon = `<svg class="footer-item comment" id="comment-image" viewBox="0 0 24 24">
                    <g><path d="M1.751 10c0-4.42 3.584-8
                    8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0
                    2.96-1.607 5.68-4.196 7.11l-8.054
                    4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317
                    0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138
                    6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08
                    3.163-3.13 3.163-5.36
                    0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g>
                    </svg>`;
let retweetIcon = `<svg class="footer-item" id="retweet-image" viewBox="0 0 24 24">
                    <g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5
                    7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209
                    0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5
                    6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364
                    1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068
                    1.93V8c0-1.1-.896-2-2-2z"></path></g>
                    </svg>`;
let likeIcon = `<svg class="footer-item" id="like-image" viewBox="0 0 24 24">
                <g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89
                2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44
                7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552
                1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129
                6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04
                1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187
                7.69c-1.351 2.48-4.001 5.12-8.379
                7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79
                2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01
                1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22
                4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g>
                </svg>`;
let shareIcon = `<svg class="footer-item" id="share-image" viewBox="0 0 24 24">
                <g><path d="M12 2.59l5.7 5.7-1.41 1.42L13
                6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21
                15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3
                19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0
                .5-.22.5-.5L19 15h2z"></path></g>
                </svg>`;
let tweetMoreDots = `<svg id="tweet-more-dots" role="button" viewBox="0 0 24 24">
                    <g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2
                    2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9
                    2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2
                    2z"></path></g>
                    </svg>`;

// < 24h, returns 'x'h, 
// > 24 hrs, returns month/day, 
// different numerical year, returns month day, year
function tweetDateCalculator (dateTime) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let tweetDate =  new Date(dateTime);
    
    // Calculate number of hours since tweet 
    const hrsTimeDifference = (new Date() - tweetDate) / (60 * 60 * 1000);
    console.log('Time Difference in hours = ' + hrsTimeDifference);
    
    const currentYear = new Date().getFullYear();
    const tweetYear = new Date(tweetDate).getFullYear();
    const tweetMonth = monthNames[new Date(tweetDate).getMonth()];
    const tweetDay = new Date(tweetDate).getDate();
    
    if (hrsTimeDifference < 24) {
        let hours = Math.floor(hrsTimeDifference);
        return `${hours}h`;
    } else if (tweetYear == currentYear){
        return `${tweetMonth} ${tweetDay}`;
    } else {
        return `${tweetMonth} ${tweetDay}, ${tweetYear}`;
    }
}

// If num > 1M, adds 'M', if num 10K - 999K, adds 'K', if <= 9999, adds commas
function numberFormatter(num) {
    if (Math.abs(num) > 999999) {
        return Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M';
    } else if (Math.abs(num) <= 999999 && Math.abs(num) > 9999) {
        return Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K'
    } else {
        return (Math.sign(num)*Math.abs(num)).toLocaleString();
    }
}

function loadAllTweetsByDate(){
    let dates = [];
    for (let user of Object.entries(users)){
        let tweets = (Object.entries(user[1].tweets));
        for (let tweet of tweets) {
            dates.push(tweet[1].timestamp);
        }
    }

    dates.sort(function(a,b){
        return new Date(b) - new Date(a);
    });

    console.log(dates);

    for (let i = 0; i < dates.length; i++ ){
        for (let user of Object.entries(users)){
            let tweets = (Object.entries(user[1].tweets));
            for (let tweet of tweets) {
                if (tweet[1].timestamp === dates[i]){
                    let tweetsSection = document.getElementsByClassName('tweets-section')[0];
                    let newTweet = document.createElement('div');
                    newTweet.classList.add('tweet-container');
                    newTweet.classList.add('content-body');
                    newTweet.innerHTML = `
                    <img id="tweet-profile-image" src="${user[1].avatarURL}" alt="">
                    <div class="tweet-content">
                        <div id="tweet-title">
                            <h3 class="display-name">${user[1].displayName}${blueCheckIcon}</h3>
                            <p class="handle">${user[1].userName}</p>
                            <p>·</p>
                            <p>${tweetDateCalculator(tweet[1].timestamp)}</p>
                            <button type="submit" id="tweet-more-btn">${tweetMoreDots}</button>
                        </div> 
                        <div class="tweet-text">
                            <p>${tweet[1].text}</p>
                        </div>
                        <div id="tweet-footer-menu">
                            <div class="footer-item">
                                <div id="comment" class="footer-image-container">
                                    ${commentIcon}
                                </div>
                                <p id="comment-count">${numberFormatter(tweet[1].commentCount)}</p>
                            </div>
                            <div class="footer-item">
                                <div id="retweet" class="footer-image-container">
                                    ${retweetIcon}
                                </div>
                                <p id="retweet-count">${numberFormatter(tweet[1].retweetCount)}</p>
                            </div>
                            <div class="footer-item">
                                <div id="like" class="footer-image-container">
                                    ${likeIcon}
                                </div>
                                <p id="like-count">${numberFormatter(tweet[1].likeCount)}</p>
                            </div>
                            <div class="footer-item">
                                <div id="share" class="footer-image-container">
                                    ${shareIcon}
                                </div>
                            </div>
                        </div>
                    </div>`;
                    tweetsSection.appendChild(newTweet);
                }
            }
        }
    }
}

loadAllTweetsByDate();