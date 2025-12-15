import  movieList  from "../src/music-list.js";
// import {searchHeadTop} from "../src/search.js"
let selecttable=document.getElementById("table-table")
movieList.forEach(e => {
  let createtableBody=document.createElement("tbody")
  let createTr=document.createElement("tr")
  let createIdTd=document.createElement("td")
  createIdTd.innerText=e.id
  let createTitleTd=document.createElement("td")
  createTitleTd.innerText=e.title
  let createArtistTd=document.createElement("td")
  createArtistTd.innerText=e.artist;
  
  let firstCreatA=document.createElement("a")
  firstCreatA.href="../index.html";
  firstCreatA.innerText="Link"
  firstCreatA.setAttribute("id", e.id)
  let createLinkTd=document.createElement("td")
  createLinkTd.appendChild(firstCreatA)
  
  createTr.append(createIdTd, createTitleTd, createArtistTd, createLinkTd)
  createtableBody.appendChild(createTr);
  selecttable.appendChild(createtableBody);
});

selecttable.addEventListener("click", (e)=>{
  if(e.target.tagName=="A"){
    sessionStorage.setItem("playlist-id", e.target.id)
    window.location.href("../index.js");
  }
})


// When user click on the search header redirect to the homepage:
document.getElementById("search-header").addEventListener("click", ()=>{
  // location.href("../index.js")
  location.href="../index.html"
  searchHeadTop();
})