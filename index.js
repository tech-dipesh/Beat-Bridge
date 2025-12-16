// For making a title infinite:
import movieList from "./src/list/music-list.js";
import {playListExport} from "./src/playlist-index.js"
import LoadingStates from "./src/loading.js";
import keyWordShortcut from "./src/shortcut.js";
import {searchFunctionality} from "./src/search.js";
import SleepFunctionality from "./src/sleep.js"
import exportBookMarkFeature from "./src/bookmark.js"
import speedAndVolume from "./src/volume-speed.js";
// LoadingStates();
let index= 0;
let audiobtn=document.getElementById("audiobtn");



let totaltime=document.getElementById('totaltime');
let currenttime=document.getElementById('currenttime');
let selectProgressBar=document.getElementById("videoProgress");
let title=document.querySelectorAll('#Title');
let selectmusicCount=document.getElementById("song-count")
let shortCutDiv=document.getElementById("head-keyword")
let shorcutCutButton=document.getElementById("keyword-cut-button")
let playlist = document.getElementById("playlist-icon");
let selectUl = document.getElementById("playlist-ul");
let bookmark=document.getElementById("bookmark");
let selectMute=document.getElementById("mute")
let selectSpeed=document.getElementById("speed")

// let hostName=window.href;
// if(hostName=="http://127.0.0.1:3000/html/index.html")   playListExport();




playListExport()
SleepFunctionality()
exportBookMarkFeature();
speedAndVolume()
// For head title.
let headTitle=document.getElementById("headTitle")
let playPause=document.getElementById('play');

let infiniteMakeTitle = 0;
let x = title.offsetWidth;
setInterval(() => {
  x--; headTitle.style.transform = `translateX(${x}px)`;
  if (x < -headTitle.offsetWidth) x =  title.offsetWidth;
}, 16);



let changeCommandWhenverClick=()=>{
  play.setAttribute("class", "fa-solid fa-pause")
  audiobtn.play();
  let convertIndex=parseInt(index);
  selectmusicCount.innerText=`Song ${convertIndex+1} of ${length}`
  title.forEach(t=>t.innerText=movieList[index].title)
  localStorage.setItem("index", index)



  let getAllLocalStorageItem=localStorage.getItem("bookmark") || [];
  let checkIsThatIndexHaveBookMark= getAllLocalStorageItem.includes(index)
  if(checkIsThatIndexHaveBookMark==true){
    bookmark.style.color="red";
  }
  else{
    bookmark.style.color="white"
  }
}


// every second it runs.
audiobtn.ontimeupdate=()=>{
  let percent = (audiobtn.currentTime / audiobtn.duration) * 100;
  currenttime.style.marginLeft = `${percent}%`;
  let minute=Math.floor(audiobtn.currentTime/60), second=Math.floor(audiobtn.currentTime%60)
  let padSecond=String(second).padStart(2, '0'), padMinute=String(minute).padStart(2, '0')
  currenttime.innerText=`${padMinute}: ${padSecond}`;
  selectProgressBar.value = audiobtn.currentTime;
}


selectProgressBar.oninput = () => {
  // currenttime.style.marginLeft = `${selectProgressBar.value}%`;
  if(audiobtn.duration){

    currenttime.style.marginLeft =
    (selectProgressBar.value / audiobtn.duration) * 100 + "%";
    audiobtn.currentTime=selectProgressBar.value
    play.setAttribute("class", "fa-solid fa-pause")
    audiobtn.play()
  }
};

let length=movieList.length;
document.addEventListener("DOMContentLoaded", (e)=>{
  index=localStorage.getItem("index")
  let isFromPlaylistPage=sessionStorage.getItem("playlist-id")
  if(isFromPlaylistPage!==null){
      index=isFromPlaylistPage;
  }

  // audiobtn.setAttribute("src", movieList[index].title);
  audiobtn.src=movieList[index].file;
  title.forEach(element => element.innerText=`${movieList[index].title}`)
  document.title=`Music: ${movieList[index].title}`
})


audiobtn.onloadedmetadata=()=>{
  index=localStorage.getItem("index")
  let minute=Math.floor(audiobtn.duration/60), second=Math.floor(audiobtn.duration%60);
  selectProgressBar.setAttribute("max", Math.floor(audiobtn.duration))
  totaltime.innerText=`${minute}: ${second}`
  title.innerText=movieList[index].name
  let convertIndex=parseInt(index);
  selectmusicCount.innerText=`Song ${convertIndex+1} of ${length}`
}



    
    // when audio is ended just move to the next.
    audiobtn.onended=()=>{ selectForward.click();};
    
    
    
    
    
   
    
    let isPlay=false;
    let backSec=document.getElementById("back-sec")
    let forSec=document.getElementById("for-sec")
    let random=document.getElementById("random")
    let selectPrevious=document.getElementById("backward")
    let selectForward=document.getElementById("forward");
    let speedCurrent=document.getElementById("speedCurrent");
    
        let volumerange=document.getElementById("volumerange")
    let volumevalue=document.getElementById('volumevalue');

    // Going back and forward by 10 second.
    backSec.onclick=()=>{
      audiobtn.currentTime>10?audiobtn.currentTime-=10:audiobtn.currentTime=0;
    }
    forSec.onclick=()=>{
      audiobtn.currentTime+10<=audiobtn.duration?audiobtn.currentTime+=10:selectForward.onclick();
    }
    
    
    // Going to the random Movie Choice:
    random.onclick=()=>{
      let randValue=Math.floor(Math.random()*length)%length;
      audiobtn.setAttribute("src", movieList[randValue].file)
      changeCommandWhenverClick()
    }
    
    // Make play pause with condition:
    playPause.addEventListener("click", (e)=>{
      // audiobtn.src=encodeURI(movieList[index].file);
      // audiobtn.src=movieList[index].file

      if(isPlay==false){
        play.setAttribute("class", "fa-solid fa-pause");
        audiobtn.play();
        isPlay=true;
        
        // changeCommandWhenverClick();
      }
      else{
        audiobtn.pause();
        play.setAttribute("class", "fa-solid fa-play");
        isPlay=false;
      }

      localStorage.setItem("index", index)
    })
    
    
    
    
    selectPrevious.onclick=()=>{
      play.setAttribute("class", "fa-solid fa-pause");
      index=(index%length);
      if(index==0) index=length;
      // index-1;
      index--;
      audiobtn.setAttribute("src", movieList[index].file)
      audiobtn.currentTime=selectProgressBar.value;
      changeCommandWhenverClick()
    }
    
    
    selectForward.onclick=()=>{
      play.setAttribute("class", "fa-solid fa-pause");
      index=(index%(length-1))+1;
      audiobtn.setAttribute("src", movieList[index].file)
      audiobtn.currentTime=0;
      changeCommandWhenverClick()
    }
    
  
searchFunctionality()
    
export {audiobtn, title, selectForward, selectPrevious, playPause, backSec, forSec, shortCutDiv, shorcutCutButton, changeCommandWhenverClick, selectProgressBar, selectmusicCount, length, playlist, selectUl, index, selectMute, selectSpeed};