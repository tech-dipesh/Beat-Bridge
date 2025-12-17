import {audiobtn} from "../index.js"
let getSleepPart=document.getElementById("sleepPart");
let getPlay=document.getElementById("play")
let selectHour=document.getElementById("hour-custom-sleep")
let selectMinute=document.getElementById("minute-custom-sleep")
let selectSecond=document.getElementById("second-custom-sleep")


const ifUserEscapeFromThere=()=>{
  selectHour.value=""
  selectMinute.value=""
  selectSecond.value=""
}
const entireLogicSleepAndCustom=()=>{
// user can't click above given time.
document.getElementById("hour-custom-sleep").addEventListener("input", (e) => {
  if(e.target.value > 23) e.target.value = 23;
  if(e.target.value < 0) e.target.value = 0;
});

document.getElementById("minute-custom-sleep").addEventListener("input", (e) => {
  if(e.target.value > 59) e.target.value = 59;
  if(e.target.value < 0) e.target.value = 0;
});

document.getElementById("second-custom-sleep").addEventListener("input", (e) => {
  if(e.target.value > 59) e.target.value = 59;
  if(e.target.value < 0) e.target.value = 0;
});


let selectOkSpeed=document.getElementById("ok-speed")

let selectSleepPart=document.getElementById("sleepPart")
let selectUlHead=document.getElementById("list-speed")
let oneSpeed=document.createElement("li")
let selectError=document.getElementById("error")
oneSpeed.innerText="1.00";
oneSpeed.setAttribute("id", "60")
let fiveSpeed=document.createElement("li")
fiveSpeed.innerText="05: 00"
fiveSpeed.setAttribute("id", "300")
let tenSpeed=document.createElement("li")
tenSpeed.innerText="10: 00"
tenSpeed.id="600"
let thirtySpeed=document.createElement("li")
thirtySpeed.innerText="30: 00"
thirtySpeed.id="1800"

let customSpeed=document.createElement("li")
customSpeed.innerText="Custom"
customSpeed.setAttribute("id", "custom-speed")
selectUlHead.append(oneSpeed, fiveSpeed, tenSpeed, thirtySpeed, customSpeed)

let selectCustomCard=document.getElementById("custom-input-card")

let totalSecondFromInput=0;

const isCorrectCustomSpeed=(h, m, s)=>{
  let hour=parseInt(h)|| 0;
  let minute=parseInt(m) || 0;
  let  second=parseInt(s) || 0;
  if(hour==0 && minute==0 && second==0){
            selectError.innerText="Please enter a time."
            selectError.style.display="block"
            selectError.style.color="red";
            return false;
          }
          
          if(hour>23 || hour<0){
            selectError.innerText="Please enter correct hour."
            selectError.style.display="block"
            selectError.style.color="red";
              return false;
            }
            else if( minute>60 || minute<0){
              selectError.innerText="Please enter correct Minute."
              selectError.style.display="block"
              selectError.style.color="red";
              return false;
            }
            else if(second>60 || second<0){
              selectError.innerText="Please enter correct Second."
              selectError.style.display="block"
              selectError.style.color="red";
              return false;
          }
          return true;
        }
        
        
        
        
        const customSpeedFunction=()=>{
          selectCustomCard.style.display="flow"
    selectError.style.display = "none"; 
    
    // let checkingCorrectSpeed=isCorrectCustomSpeed(selectHour, selectMinute, selectSecond);
    // console.log(checkingCorrectSpeed);
    if(isCorrectCustomSpeed(selectHour.value, selectMinute.value, selectSecond.value)==true){
      let totalSecond = (parseInt(selectHour.value) || 0) * 3600 + 
      (parseInt(selectMinute.value) || 0) * 60 + 
      (parseInt(selectSecond.value) || 0);
      return totalSecond;
    }
    else{
      return false;
    }
  }
  
  
  const runTimeOutForThatSecond=(timeinSecond)=>{
    setTimeout(() => {
      console.log("Stop this button.");
      audiobtn.pause()
      play.setAttribute("class", "fa-solid fa-play")
      // now here we play pause the audio button.
    }, timeinSecond*1000);
  }
  
  
  
  let selectThatId=0;
  let isAnySleected=false, isFromManulaOrCustom=true;;
  selectSleepPart.addEventListener("click", (e)=>{
    if(e.target.tagName=="LI"){
      let selectAllLi=document.querySelectorAll("li")
      selectAllLi.forEach(f =>f.style.backgroundColor="")
      selectCustomCard.style.display="none"
      selectThatId=e.target.id
      totalSecondFromInput=e.target.id;
      isFromManulaOrCustom=true;
      if(e.target.id=="custom-speed"){
        selectCustomCard.style.display="block"; 
        isFromManulaOrCustom=false;
      }
      
      e.target.style.backgroundColor="green"
      isAnySleected=true;
    }
    
    
    
    
    if(e.target.id=="ok-speed"){
      if(isFromManulaOrCustom==false){
        totalSecondFromInput=customSpeedFunction()
        if(totalSecondFromInput === false){  
          return;
        }
      }
      if(isAnySleected==false){
        selectError.style.display="block"
        selectError.innerText="Please select any of one";
        selectError.style.color="red";
        return;
      }
      selectError.style.display="none";
          runTimeOutForThatSecond(totalSecondFromInput);
        getSleepPart.style.display="none"    
        ifUserEscapeFromThere()
        }
        
        
        if(e.target.id=="cancel-speed"){
            getSleepPart.style.display="none";
            ifUserEscapeFromThere()
        }
        
      })
    }
      

    const SleepFunctionality=()=>{
      entireLogicSleepAndCustom()
        let getSleepButton=document.getElementById("sleep");
        let isSleepButtonClicked=false;
        getSleepButton.addEventListener("click", ()=>{
              if(isSleepButtonClicked==false){
                getSleepPart.style.display="flex";
                isSleepButtonClicked=true;
              }
              else{
                getSleepPart.style.display="none";
                isSleepButtonClicked=false;
              }
        })

    }

export default SleepFunctionality
    
    