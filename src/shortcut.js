import { selectForward, selectPrevious, playPause, backSec, forSec, shortCutDiv,  audiobtn } from "../index.js";
const keyWordShortcut=()=>{
  let isKeywordclick=false;

  document.addEventListener("click", (e)=>{
    if(e.target.id=="keyword-cut-button"){
      shortCutDiv.style.display="none"
      isKeywordclick=false;
    }
  })

  document.addEventListener("keydown", (e)=>{
    // When the user is on input made skip that..
    if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA"){
      return;
    }

    if(e.key=="/" && e.ctrlKey){
      if(isKeywordclick==false){
        shortCutDiv.style.display="block"
        isKeywordclick=true;
      }
      else{
        shortCutDiv.style.display="none"
        isKeywordclick=false;
      }
    }
    // Two way to get any value:
    if(e.key=="k" || e.code=="k" || e.key==" " || e.key=="Space"){
      playPause.click();
    }
    
    if(e.key=="j" || e.code=="j"){
      backSec.click();
    }
  if(e.key=="l" || e.code=="l"){
    forSec.click();
  }
  

  if(e.key=="m"){
    selectMute.click();
  }

  if(e.key=="ArrowLeft"){
    audiobtn.currentTime>5?audiobtn.currentTime-=5:audiobtn.currentTime=0;
  }
  if(e.key=="ArrowRight"){
     audiobtn.currentTime+5<=audiobtn.duration?audiobtn.currentTime+=5:selectForward.onclick();
  }


  // volume increase decrease:
  if(e.key=="ArrowUp"){
    let currentVolume=parseInt(volumerange.value);
    volumerange.value=currentVolume+1;
    volumerange.onchange(volumerange.value)
  }
  if(e.key=="ArrowDown"){
   let currentVolume=parseInt(volumerange.value);
    volumerange.value=currentVolume-1;
    volumerange.onchange(volumerange.value)
  }



  if(e.key=="." && e.ctrlKey){
    let currentSpeed=parseInt(volumeRange.value);
    volumeRange.value=currentSpeed+1;
    volumeRange.onchange(volumeRange.value)
  }
  if(e.key=="," && e.ctrlKey){
    let currentSpeed=parseInt(volumeRange.value);
    volumeRange.value=currentSpeed-1;
    volumeRange.onchange(volumeRange.value)
  }


  // go to next and previous
  if(e.key=="ArrowRight" && e.ctrlKey){
    selectForward.click();
  }
  if(e.key=="ArrowLeft" && e.ctrlKey){
    selectPrevious.click()
  }
})


}

export default keyWordShortcut;