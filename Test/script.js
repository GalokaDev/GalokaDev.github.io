

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user presses any key and releases
inputBox.onkeyup = (e) => {
    let userData = e.target.value; // user entered data
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = `Pokemon/${userData}/Weakness/index.html`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        };
        emptyArray = suggestions.filter((data) => {
            // filtering array value and user characters to lowercase
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
            // adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); // hide autocomplete box
    }
};

// Handling enter key press to search
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let userData = inputBox.value; // user entered data
        webLink = `Pokemon/${userData}/Weakness/index.html`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
});

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = `Pokemon/${selectData}/Weakness/index.html`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    };
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


function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `Pokemon/${selectData}/Weakness/index.html`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
