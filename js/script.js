// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; // user entered data
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = `Pokemon/${userData}/Weakness/index.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data) => {
            // filtering array value and user characters to lowercase and return only those words which start with user entered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing returned data inside li tag
            return data = `<li><div class="fle"><img src="ico/${data}.png" class="iconepic">${data}</div></li>`;
        });
        searchWrapper.classList.add("active"); // show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            // adding onclick attribute to all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); // hide autocomplete box
    }
}

// Listen for "Enter" key press and redirect to Pokémon page
inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        // Check if there are any suggestions
        let firstSuggestion = suggBox.querySelector("li");
        if (firstSuggestion) {
            // Get the text of the first suggestion
            let selectData = firstSuggestion.textContent.trim();
            // Redirect to the page of the first suggestion
            webLink = `Pokemon/${selectData}/Weakness/index.html`;
            window.location.href = webLink; // Redirect directly
        } else {
            // If no suggestions, redirect based on inputBox value
            let userData = inputBox.value;
            if (userData) {
                webLink = `Pokemon/${userData}/Weakness/index.html`;
                window.location.href = webLink;
            }
        }
    }
});

function select(element) {
    let selectData = element.textContent.trim();
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = `Pokemon/${selectData}/Weakness/index.html`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
