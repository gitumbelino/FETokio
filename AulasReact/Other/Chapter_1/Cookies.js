// =============================================================================
// COOKIE MANAGEMENT FUNCTIONS
// These functions handle storing, reading, and deleting cookies in the browser
// =============================================================================

function setCookie(cname, cvalue, exdays) { 
    // Create a new Date object to calculate when the cookie should expire
    const d = new Date();
    
    // Set the expiration time: current time + (days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    // This converts days to milliseconds and adds to current timestamp
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    
    // Convert the date to UTC string format required for cookie expires attribute
    // Example: "Mon, 21 Sep 2026 13:07:21 GMT"
    let expires = "expires=" + d.toUTCString();
    
    // Build the complete cookie string with name=value, expiration, and path
    // path=/ means the cookie is available to all pages on the domain
    // Removed "Secure" flag so it works on local development (http://)
    let cookieString = cname + "=" + cvalue + ";" + expires + ";path=/;";
    
    // Debug: Show what cookie string we're trying to set
    console.log("Trying to set cookie:", cookieString);
    
    // Actually set the cookie in the browser
    document.cookie = cookieString;
    
    // Debug: Verify the cookie was set by checking document.cookie
    console.log("After setting, document.cookie is:", document.cookie);
}

function getCookie(cname) {
    // Create the search pattern: "cookieName="
    let name = cname + "=";
    
    // Get all cookies and split them by semicolon (cookies are separated by "; ")
    // Example: "cookie1=value1; cookie2=value2; cookie3=value3"
    let ca = document.cookie.split(';');
    
    // Loop through each cookie to find the one we want
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]; // Current cookie string
        
        // Remove any leading spaces (cookies might have " cookieName=value")
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        
        // Check if this cookie starts with our search pattern
        if (c.indexOf(name) == 0) {
            // Found it! Return everything after "cookieName="
            // Example: if cookie is "favourites=cosmetics,news", return "cosmetics,news"
            return c.substring(name.length, c.length);
        }
    }
    
    // Cookie not found, return empty string
    return "";
}

function eraseCookie(name) {
    // To delete a cookie, set it with a past expiration date
    // Max-Age=-99999999 sets it to expire immediately
    document.cookie = name + '=; Max-Age=-99999999;';
}

// =============================================================================
// MAIN BUSINESS LOGIC FUNCTIONS
// These functions handle the core functionality of the ad recommendation system
// =============================================================================

let openArticle = (article) => {
    // This function runs when user clicks an article button in index.html
    // Parameter 'article' is a number (1, 2, or 3) representing which article was clicked
    
    console.log("openArticle called with:", article);

    // Get existing favourites from cookie (might be empty on first visit)
    let favouritesCookie = getCookie("favourites");
    
    // Create array to hold all favourite categories (existing + new)
    let favouritesArray = [];

    // Get the categories from the clicked article
    // articles[article - 1] because: article=1 means articles[0], article=2 means articles[1], etc.
    // .forEach loops through each category in the article's categories array
    articles[article - 1].categories.forEach((category, index) => {
        // Only add category if it's not already in our favourites
        // This prevents duplicates like ["cosmetics", "cosmetics", "news"]
        if (!favouritesArray.includes(category))
            favouritesArray.push(category)
    })

    // Add existing favourite categories from the cookie (if any exist)
    // Check if cookie exists and isn't empty before trying to split it
    if (favouritesCookie) {
        // Split the cookie string by commas to get individual categories
        // Example: "cosmetics,news" becomes ["cosmetics", "news"]
        favouritesCookie.split(",").forEach((category, index) => {
            // Again, avoid duplicates when merging old and new categories
            if (!favouritesArray.includes(category))
                favouritesArray.push(category)
        })
    }

    // Convert the array back to a comma-separated string for storage
    // Example: ["cosmetics", "news", "recipes"] becomes "cosmetics,news,recipes"
    let newCookies = favouritesArray.join(",")
    
    // Debug: Show what categories we're about to store
    console.log(newCookies)

    // Store the updated categories in the cookie for 365 days
    setCookie("favourites", newCookies, 365)

    // Navigate to the article page after processing
    // This will load article.html which automatically calls loadAd()
    setTimeout(() => {
        window.location = "article.html";
    }, 5000); // 5 second delay for debugging - can be removed in production
}

let loadAd = () => {
    // This function runs automatically when article.html loads
    // It reads stored preferences and displays matching ads
    
    // Debug: Show raw cookie data to verify cookies are working
    console.log("Raw document.cookie:", document.cookie);
    console.log("getCookie('favourites') returns:", getCookie("favourites"));
    
    // Get the stored favourite categories and convert to array
    // getCookie returns a string like "cosmetics,news,recipes"
    // .split(',') converts it to ["cosmetics", "news", "recipes"]
    let favourites = getCookie("favourites").split(',');

    // Array to store ads that match the user's interests
    let favouritesAds = [];

    // Get the HTML element where we'll display the ads
    // This corresponds to <div id="ads"></div> in article.html
    let adsDOM = document.getElementById("ads")

    // Loop through all available ads to find matches
    ads.filter((ad) => {
        // For each ad, check if any of its categories match user's favourites
        favourites.forEach(favourite => {
            // Debug: Show each comparison being made
            console.log(`Checking favourite: "${favourite}"`);
            console.log(`Against ad categories:`, ad.categories);
            console.log(`Match found:`, ad.categories.includes(favourite));

            // If this ad's categories include the user's favourite category
            if (ad.categories.includes(favourite)) {
                // Only add the ad if we haven't already added it
                // This prevents showing the same ad multiple times if it matches multiple categories
                if (!favouritesAds.includes(ad)) {
                    favouritesAds.push(ad)
                }
            }
        })
    })

    // Display each matching ad on the webpage
    favouritesAds.forEach(ad => {
        // Create a new div element for this ad
        let adDOM = document.createElement("div")
        
        // Set the HTML content of the ad div
        // This creates the text that appears on the webpage
        adDOM.innerHTML = `Title: ${ad.title} Content:${ad.text} Categories: ${ad.categories}`

        // Add this ad div to the ads container in the HTML
        // This makes it visible on the webpage
        adsDOM.appendChild(adDOM)
    })

    // Debug: Show final array of ads that will be displayed
    console.log(favouritesAds)
}

// =============================================================================
// DATA ARRAYS
// These define the available ads and articles with their categories
// =============================================================================

// Available advertisements with their targeting categories
let ads = [
    {
        title: "ad A",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["cosmetics", "news"] // This ad targets users interested in cosmetics or news
    },
    {
        title: "ad B", 
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["recipes", "footbal"] // This ad targets users interested in recipes or football
    },
    {
        title: "ad C",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["cars", "nature"] // This ad targets users interested in cars or nature
    }
]

// Available articles that users can click on
let articles = [
    {
        title: "article A",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["cosmetics", "news"] // Reading this article indicates interest in cosmetics and news
    },
    {
        title: "article B",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?", 
        categories: ["recipes", "footbal"] // Reading this article indicates interest in recipes and football
    },
    {
        title: "article C",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["cars", "nature"] // Reading this article indicates interest in cars and nature
    }
]

// =============================================================================
// HTML CONNECTION POINTS
// =============================================================================

/* 
HTML STRUCTURE AND CONNECTIONS:

index.html:
- Contains buttons that call openArticle(1), openArticle(2), openArticle(3)
- Each button corresponds to an article in the articles array
- Button 1 -> articles[0], Button 2 -> articles[1], Button 3 -> articles[2]
- When clicked, these buttons trigger the interest tracking system

article.html: 
- Contains <div id="ads"></div> where matching ads will be displayed
- Automatically calls loadAd() when the page loads
- The loadAd() function populates the ads div with relevant advertisements

FLOW:
1. User on index.html clicks "Article A" button
2. openArticle(1) executes:
   - Gets categories from articles[0]: ["cosmetics", "news"]
   - Merges with existing favourites cookie
   - Stores updated favourites: "cosmetics,news" (or adds to existing)
   - Navigates to article.html
3. article.html loads and calls loadAd():
   - Reads favourites cookie: "cosmetics,news"
   - Finds ads matching these categories
   - Displays matching ads in the ads div
4. User sees personalized ads based on their reading history

COOKIE PERSISTENCE:
- Favourites accumulate across sessions
- Each article click adds its categories to the user's profile
- Ads become more targeted as user clicks more articles
- Cookie expires after 365 days
*/