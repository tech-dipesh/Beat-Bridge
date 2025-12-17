import { index } from "../index.js";
// let bookMarkList=JSON.parse(localStorage.getItem("bookmark")) || [];
let bookMarkList=JSON.parse(localStorage.getItem("bookmark")) || [];


const storeonLocalStorage=()=>{
   if(!bookMarkList.includes(index)){
      bookMarkList.push(index)
    }
  localStorage.setItem("bookmark",JSON.stringify(bookMarkList));
}


const ifBookMarkHaveRemoveFromLocalStorage=()=>{
    const indexToRemove = bookMarkList.indexOf(index); 
if (indexToRemove !== -1) {
  bookMarkList.splice(index, 1);
}
}

export default function exportBookMarkFeature(){
  storeonLocalStorage();
  let bookmark=document.getElementById('bookmark');
  let loop=document.getElementById('loop');

let isbook=false, isloop=false;


bookmark.onclick=()=>{
  if(isbook==false){
    bookmark.style.color="red"
    isbook=true;
    storeonLocalStorage()
    audiobtn.loop=true;
  }
  else{
    ifBookMarkHaveRemoveFromLocalStorage
    bookmark.style.color="#ffffff"
    isbook=false;
  }
}


loop.onclick=()=>{
  if(isloop==false){
    audiobtn.loop=true;
    loop.style.color="#ff8787"
        isloop=true;
      }
      else{
        isloop=false;
        audiobtn.loop=false;
        loop.style.color="#ffffff"
      }
    }
    
  }