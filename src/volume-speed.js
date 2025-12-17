import { selectSpeed, selectMute, changeCommandWhenverClick, selectProgressBar } from "../index.js";
import movieList from "./list/music-list.js";

const speedAndVolume=()=>{
     // Increase decrease volume.

    let isMute=false;
    
    volumerange.onchange=()=>{
      audiobtn.volume=volumerange.value/10;
      volumevalue.innerText=volumerange.value*10;
      selectMute.setAttribute("class", "fa-solid fa-volume-xmark");
      changeCommandWhenverClick();
      document.title=`Current Music: ${movieList[index].title}`
    }
 
    let storeOldVolume=audiobtn.volume;
    
    selectMute.onclick=()=>{
      if(isMute==false){
        audiobtn.volume=0;
        volumevalue.innerText=0; 
        volumerange.value=0;
        selectMute.setAttribute("class", "fa-solid fa-volume-off")
        isMute=true;
      }
      else{
        selectMute.setAttribute("class", "fa-solid fa-volume-xmark")
        audiobtn.volume=storeOldVolume;
        volumerange.value=storeOldVolume*100;
        volumevalue.innerText=storeOldVolume*100;
        isMute=false;
      }
      changeCommandWhenverClick() 
    }
    
    
        selectSpeed.onchange=()=>{
          let speedValue=((selectSpeed.value*25)/100).toFixed(2);
          speedCurrent.innerText=`${speedValue}x`
          audiobtn.playbackRate=speedValue;
          // audiobtn.play()
          audiobtn.currentTime=selectProgressBar.value;
          changeCommandWhenverClick()
        }



          
    
    let resetSpeed=document.getElementById("resetspeed")
    resetSpeed.onclick=()=>{
      audiobtn.playbackRate=1;
      speedCurrent.innerText=`Speed: 1.0x`;
      selectSpeed.value=4;
    }
}
export default speedAndVolume;