//  I decided to try and make my project look as close as I could to the real
//  twitter site as it looks today. I tried to match all the hover effects and
//  used all the same icons and whatnot. In the process of making this, I ended
//  up changing a few things in the provided data. For example, my site mimics
//  the number formatting that real twitter uses for large numbers and dates. In
//  an effort to make sure those were working correctly, I added new data
//  categories for tweets and users, as well as changed some of the provided
//  numbers to check all the different scenarios. 

// Some issues I had while figuring this all out: 

// 1 - It took me forever to figure out how to sort out the tweets by date. I
// spent an entire day trying a bunch of different things. To be completely
// honest, I don't even really understand how my code works. I just got lucky
// after modifying some code I found on Stack Overflow. But, it sorts out my
// dates exactly how I want and I had spent too much time on that part, so I
// took the win and moved on. My final solution works, but it is not efficient
// at all. I like to try to write all my code so that it'd work with any given
// number of users but I know if I had millions of tweets to print out, it'd
// break my computer doing it my way. As of right now, I have not watched the
// solution video (if there is one). I'm interested in better ways to tackle
// this. 

// 2 - Date stuff in general. I had a hard time with the date format provided in
// the project (no issues with that - I know that its my job to manage data
// however is given to me. For all I know, you guys did that on purpose to make
// us figure it out). Its not in the standard JS Date Object format so when I
// would pass these timestamps into "new Date()" and then try to sort that
// array, it wouldn't do anything (mayby becuase sort() won't sort objects?). On
// my main page, I break the provided timestamp up and feed it back into a Date
// Object in the order that it wants and then use that new Date to perform
// calculations. While doing the Bonus Project, I fed the timestamps directly
// into a new Date and it worked just fine. I tried to make the same change to
// the main project and it broke - so I left it alone. I don't know why one
// works and the other doesn't.

// 3 - I ended up putting the icons I got from the real twitter site into my JS.
// I'm almost positive that is not the right spot for those. I tried to make
// individual SVG files and put them in my assets folder but I couldn't get the
// images to display correctly doing that. As it is, having them in my JS was
// really convienient since I could just use string literals and call them like
// variables. I'd love to learn how to do that the right way though. While it
// worked for this small project, I don't see that scaling well.

// There were more, but don't want this to turn into a novel. 

// As always, I'm open to any and all feedback.



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
                timestamp: '15/12/2022 09:34:23',
                commentCount: 44321,
                retweetCount: 21342,
                likeCount: 3456275,
            },
            {
                text: 'Starship to the moon',
                timestamp: '17/04/2021 20:15:18',
                commentCount: 12353,
                retweetCount: 231,
                likeCount: 24542,
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51',
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
                timestamp: '7/03/2021 00:01:20',
                commentCount: 1234543,
                retweetCount: 3253145,
                likeCount: 4324,
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '14/11/2021 18:37:12',
                commentCount: 123,
                retweetCount: 34564,
                likeCount: 3243,
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '23/06/2021 10:42:51',
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
let calendarIcon = `<svg id="calendar-icon" role="img" viewBox="0 0 24 24">
                    <g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12
                    21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3
                    19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27
                    0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0
                    .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0
                    6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0
                    4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g>
                    </svg>`;
let locationIcon = `<svg id="location-icon" role="img" viewBox="0 0 24 24">
                    <g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07
                    14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0
                    5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673
                    1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5
                    3.813-8.5 8.5 0 5.967 7.621 11.116 7.945
                    11.332l.555.37.555-.37c.324-.216 7.945-5.365
                    7.945-11.332C20.5 5.813 16.687 2 12 2zm0
                    17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916
                    8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835
                    8.028-6.5 9.27z"></path></g>
                    </svg>`;
let linkIcon = `<svg id="link-icon" role="img" viewBox="0 0 24 24">
                <g><path d="M18.36
                5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46
                5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73
                2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42
                1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12
                3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41
                1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41
                1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11
                1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73
                2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17
                0-9.9z"></path></g>
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

// < 24h, returns 'x'h, 
// > 24 hrs, returns month/day, 
// different numerical year, returns month day, year
function tweetDateCalculator (dateTime) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // break up provided timestamp
    var dateTime = dateTime.split(" ");
    var date = dateTime[0].split("/");
    var time = dateTime[1].split(":");

    // place provided data into JS Date format
    let tweetDate =  new Date(date[2], date[1]-1, date[0], time[0], time[1], time[2], 0);
    
    // Calculate number of hours since tweet 
    const hrsTimeDifference = (new Date() - tweetDate) / (60 * 60 * 1000);
    
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

// removes added tweets so new ones can be loaded
function deleteOldTweets () {
    const oldTweets = document.querySelectorAll('.tweet-container');
    oldTweets.forEach(oldTweet => {
        oldTweet.remove();
    })
}

function loadTwitterProfile(activeUser){
    
    //Change Names
    let userNames = document.getElementsByClassName('display-name');
    for (let userName of userNames) {
        userName.innerHTML = `${activeUser.displayName} ${blueCheckIcon}`;
    }
    // Change Handles
    let handles = document.getElementsByClassName('handle');
    for (let handle of handles) {
        handle.innerHTML = activeUser.userName;
    }
    // Change Tweet Count
    document.getElementById('tweet-count').innerHTML = `${numberFormatter(activeUser.tweetCount)} Tweets`;
    // Change Profile Picture
    document.getElementById('profile-image').setAttribute('src', `${activeUser.avatarURL}`);
    // Change Cover Photo
    document.getElementById('cover-image').setAttribute('src', `${activeUser.coverPhotoURL}`);


    // Add location info if any
    if (activeUser.location) {
        let location = document.getElementById('location-item');
        location.innerHTML = `${locationIcon} <p id='location'>${activeUser.location}</p>`
        location.style.display = "flex";
    } else {
        let location = document.getElementById('location-item');
        location.style.display = "none";
    }
    
    // Add link info if any
    if (activeUser.link) {
        let link = document.getElementById('link-item');
        link.innerHTML = `${locationIcon} <a href="${activeUser.link} "id='link'>${activeUser.link}</a>`
        link.style.display = "flex";
    } else {
        let link = document.getElementById('link-item');
        link.style.display = "none";
    }
    
    // add joined date if any
    if (activeUser.joinedDate) {
        let joinedDate = document.getElementById('joined-item');
        joinedDate.innerHTML = `${calendarIcon} <p id="joined">Joined</p><p id="joined-date">${activeUser.joinedDate}</p>`
        joinedDate.style.display = "flex";
    } else {
        let joinedDate = document.getElementById('joined-item');
        joinedDate.style.display = "none";
    }

    // Change Following Number
    document.getElementById('following-count').innerHTML = `${numberFormatter(activeUser.followingCount)}`;
    
    // Change Followers Number
    document.getElementById('follower-count').innerHTML = `${numberFormatter(activeUser.followerCount)}`;
    
    // Load Each Tweet for currently active user.
    for (let tweet of activeUser.tweets){
        let tweets = document.getElementsByClassName('tweets-section')[0];
        let newTweet = document.createElement('div');
        newTweet.classList.add('tweet-container');
        newTweet.classList.add('content-body');
        // I incorporated some feedback from last project here...
        // I hope I didn't go overboard, I'm still trying to figure
        // out where to draw the line with this... 
        newTweet.innerHTML = `
        <img id="tweet-profile-image" src="${activeUser.avatarURL}" alt="">
        <div class="tweet-content">
            <div id="tweet-title">
                <h3 class="display-name">${activeUser.displayName}${blueCheckIcon}</h3>
                <p class="handle">${activeUser.userName}</p>
                <p>·</p>
                <p>${tweetDateCalculator(tweet.timestamp)}</p>
                <button type="submit" id="tweet-more-btn">${tweetMoreDots}</button>
            </div> 
            <div class="tweet-text">
                <p>${tweet.text}</p>
            </div>
            <div id="tweet-footer-menu">
                <div class="footer-item">
                    <div id="comment" class="footer-image-container">
                        ${commentIcon}
                    </div>
                    <p id="comment-count">${numberFormatter(tweet.commentCount)}</p>
                </div>
                <div class="footer-item">
                    <div id="retweet" class="footer-image-container">
                        ${retweetIcon}
                    </div>
                    <p id="retweet-count">${numberFormatter(tweet.retweetCount)}</p>
                </div>
                <div class="footer-item">
                    <div id="like" class="footer-image-container">
                        ${likeIcon}
                    </div>
                    <p id="like-count">${numberFormatter(tweet.likeCount)}</p>
                </div>
                <div class="footer-item">
                    <div id="share" class="footer-image-container">
                        ${shareIcon}
                    </div>
                </div>
            </div>
        </div>`;
        tweets.appendChild(newTweet);
    }
}

// initialize some user data so an empty page doesn't load...
// On a real site, would be logged in users profile
activeUser = users.user1;

// provides window search string to activeUser variable
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
const searchValue = params.user;

// if data provded in search bar, then use it
if (searchValue){
    activeUser = users[params.user];
}

loadTwitterProfile(activeUser);

// Buttons allow cycling between user1 and user2
document.getElementById('elon').addEventListener('click', function(){
    activeUser = users.user1;
    deleteOldTweets();
    loadTwitterProfile(activeUser);
});

document.getElementById('bill').addEventListener('click', function(){
    activeUser = users.user2;
    deleteOldTweets();
    loadTwitterProfile(activeUser);
});

// Adds and removes CSS classes for Tweet Menu functionality
function changeActive (clickedTab) {
    const contentBodies = document.getElementsByClassName('content-body');
    for (let contentBody of contentBodies){
        contentBody.classList.remove('show-active');
    }
    const textContent = document.getElementById(clickedTab.textContent);
    textContent.classList.add('show-active');
    const tabs = document.getElementsByClassName('tab');
    for (let tab of tabs) {
        tab.classList.remove('tab-active');
    }
    clickedTab.classList.add('tab-active');

}

const tabs = document.getElementsByClassName('tab');


for (let tab of tabs) {
    tab.addEventListener('click', function(e){
        changeActive(e.currentTarget);
    })
}



// Update Tweet Menu Toggle


// Steps 

// ✅ 1. Right now we just have a JS file, let's create an HTML file (with
// boilerplate), a CSS file, and then import everything correctly.


// ✅2. Now let's create our non-dynamic elements with HTML and CSS. Focus on the
//containers, or main sections we see on the page. Specifically...

// ✅a single content column we can "center" inside body, 
// ✅A header container 
// ✅A cover photo container (we can set with a background image) 
// ✅profile details container 
// ✅tweets container 

// ✅💡 These containers are the same HTML and CSS we've been doing for quite a
// while now. You've already done projects with this!



// 4. Once your containers are done (or entire page with placeholder elements,
//    depending on your approach) it's time to start rendering dynamic DOM
//    elements

// ✅Choose a single user object -- either user1 or user2

// ✅Start from the dynamic elements in the header -- where it says...

// ✅Elon Musk 13.6k tweets

// ✅...and work you way down from there.

// ✅For each element, you'll need to: 

// ✅Select a container to append to

// ✅Get the "value" from your mock JSON. (ex. user1.userName)

// ✅create a new element, and set its textContent (alternatively you can use
// ✅`back ticks` and set a big innerHTML string, as we did in the last project)

// ✅append the element to the page, and test that it's working!


// ✅💡 This is the hard part, remember, you can reference your code from the
// project we just did

// ✅💡 Create the styles for dynamic elements as you go. Remember you can create
// a class in style.css and then classList.add when you create the element.

// ✅💡 How about the .length property to get the number of tweets?

// ✅💡 Remember, use a loop to render one tweet at a time, and then append it to
// your tweet container

// ✅💡 The rest is up to you, just go through the dynamic elements one by one
// until the design is complete



// 5. Good job... take a break, get a coffee, and then come back for the final
//    challenge

// Now, we want to make things fully dynamic. 

// Take a look at the URL of your live server in the browser, now paste the
// following query string at the end of it, and watch what happens:

// ?user=user1

// That's right: nothing. But we can use this in our JavaScript code to
// dynamically load profiles.

// So, refactor your code to do the following:

// ✅Read the query string from the URL (Google how to do this)

// ✅Based on the query string value, render the User Object of that profile

// ✅If the query string is ?user=user1, render the user1 object

// ✅If the query string is ?user=user2, render the user2 object

// ✅Both profiles should load with no issues, including all profile data, images,
// ✅and tweets.

 

// 💡 ✅ You will need to both user objects into a larger object called "users" --
// this will allow you to retrieve a specific user with its name as a key ( ex
// users[userName] )

// 💡 This new large users object is functioning the same way as a database! Our
// query is the key and our database gives us back user data. Pretty cool right? 

// Congratulations, you have complete your first real, dynamic web app! 
 


// ✅ BONUS CHALLENGE
// - Can you create a third page -- a timeline that shows all tweets from both
//   users sorted in order of posted date?

// 💡 Create a new HTML file called timeline.html to do this in.

// 💡 To sort dates, you will have to use new Date( ) -- Google it for more
// details

 

// Finished? After watching the video above and improving your code accordingly,
// you can submit your project here for a code review if you would like feedback
// (this is optional)