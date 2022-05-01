// Partial credit: https://w3schools.com/howto/howto_js_filter_elements.asp

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filter-item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        addClass(x[i], "hidden");
        if (x[i].className.indexOf(c) > -1) removeClass(x[i], "hidden");
    }
}

// Get the current hash and set values
if(window.location.hash) {
    var hashCurrentId = window.location.hash.replace("#", "");
    var hashCurrentFilterId = 'filter-' + hashCurrentId;

    // Change the desktop buttons
    var hashCurrentBtnContainer = document.getElementById("filter-nav");
    var hashCurrentBtns = hashCurrentBtnContainer.getElementsByClassName("filter-nav-item");
    var hashCurrent = document.getElementsByClassName("filter-nav-item-active");
    hashCurrent[0].className = hashCurrent[0].className.replace(" filter-nav-item-active", "");
    for (const hashCurrentBtn of hashCurrentBtns) {
        if(hashCurrentBtn.id == hashCurrentFilterId){
            hashCurrentBtn.className += " filter-nav-item-active";
        }
    }

    // Change the mobile dropdown
    var hashCurrentSelectContainer = document.getElementById("tabs");
    var hashCurrentSelects = hashCurrentSelectContainer.getElementsByClassName("tabs-select");
    for (const hashCurrentSelect of hashCurrentSelects) {
        if(hashCurrentSelect.value == hashCurrentId){
            document.getElementById('tabs').value = hashCurrentSelect.value;
        }
    }

    // Filter sections
    filterSelection(hashCurrentId);
}else{
    filterSelection("all")
}

// Monitor hash change and change values
function hashHandler() {
    var hashChangeId = window.location.hash.replace("#", "");
    var hashChangeFilterId = 'filter-' + hashChangeId;

    // Change the desktop buttons
    var hashChangeBtnContainer = document.getElementById("filter-nav");
    var hashChangeBtns = hashChangeBtnContainer.getElementsByClassName("filter-nav-item");
    var hashChangeCurrent = document.getElementsByClassName("filter-nav-item-active");
    hashChangeCurrent[0].className = hashChangeCurrent[0].className.replace(" filter-nav-item-active", "");
    for (const hashChangeBtn of hashChangeBtns) {
        if(hashChangeBtn.id == hashChangeFilterId){
            hashChangeBtn.className += " filter-nav-item-active";
        }
    }

    // Change the mobile dropdown
    var hashChangeSelectContainer = document.getElementById("tabs");
    var hashChangeSelects = hashChangeSelectContainer.getElementsByClassName("tabs-select");
    for (const hashChangeSelect of hashChangeSelects) {
        if(hashChangeSelect.value == hashChangeId){
            document.getElementById('tabs').value = hashChangeSelect.value;
        }
    }
    
    // Filter sections
    filterSelection(hashChangeId)
}
  
window.addEventListener('hashchange', hashHandler, false);