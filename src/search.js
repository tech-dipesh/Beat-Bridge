
import {audiobtn, title, changeCommandWhenverClick} from "../index.js";

import movieList from "./list/music-list.js";
import { playThatIndiexMusic } from "./playlist-index.js";
let searchHeader=document.getElementById("search-header");
let searchValue=document.getElementById("music-search-value")
const searchFunctionality=()=>{


let musicSearchJs=document.getElementById("music-search")
let searchResult=document.getElementById("search-result");


searchValue.addEventListener("input", (e)=>{
    // i must clear preivous element:
    searchResult.innerText=""
    let valueInput=((searchValue.value).toLowerCase()).replaceAll(' ', '');
    let storeAllMatchMovie=movieList.filter(f=>{
      let storeName=((f.title).toLowerCase()).replaceAll(' ', '');
      return storeName.includes(valueInput)
    })


    if(storeAllMatchMovie.length==0){
      return;
    }
    // Showing all search rsult, 
    storeAllMatchMovie.forEach((f)=>{
      let createnewH4=document.createElement("h4")
      createnewH4.innerText=f.title;
      createnewH4.setAttribute('music-index', f.id-1)
      searchResult.append(createnewH4)
    })
  })
  
const clickOnThatSameIndexMusic=(tagIndex)=>{
  localStorage.setItem("index", tagIndex)
  searchResult.innerText=""
  playThatIndiexMusic(tagIndex)
  searchValue.value="";
}


  searchResult.addEventListener("click", (e)=>{
    if(e.target.tagName=="H4"){
      // console.log(e.target)
      clickOnThatSameIndexMusic(e.target.getAttribute('music-index'))
    }
  })
  

}



const searchHeadTop=()=>{
  searchValue.focus()
}
searchHeader.addEventListener("click", searchHeadTop)

export {searchFunctionality, searchHeadTop};