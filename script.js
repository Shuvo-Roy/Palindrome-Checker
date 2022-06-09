const textInput= document.querySelector(".inputs input"),
checkbtn=document.querySelector(".inputs button");
textInfo=document.querySelector(".info-text");
let filterInput;

checkbtn.addEventListener("click",() => {
    //spliting the input characters and reversing them
    //join them a single word
    let reverseInput = filterInput?.split("").reverse().join("");
    textInfo.style.display = "block";
    if(filterInput != reverseInput){
        return textInfo.innerHTML=`No, <span>'${textInput.value}'</span> isn't palindrome !`;
    }
    textInfo.innerHTML=`Yes, <span>'${textInput.value}'</span> is palindrome !`;
});

textInput.addEventListener("keyup",()=>{
    //removing space and special characters
    filterInput=textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    if(filterInput){
        return checkbtn.classList.add("active");
    }
    textInfo.style.display = "none";
    checkbtn.classList.remove("active");
});

