
const LoadingStates=(audiobtn)=>{
  // Loading states:
  let Loading=document.getElementById('h-load');
  let Card=document.getElementById('non-loading');
  // audiobtn.addEventListener("loadstart", ()=>{
    //   Loading.style.display="contents";
    //   Card.style.display="none";
    //   console.log("Loading..");
    Loading.style.display="block";
    Card.style.display="none"
    console.log("Loading started.");
    // })
    
    // After finisihing loading:
    audiobtn.addEventListener("canplaythrough", ()=>{
      Loading.style.display="none"
      Card.style.display="block"
      console.log("Loading finished.");
    })
    // When in any case audio is not loading:
    audiobtn.addEventListener("error", ()=>{
      console.log("Error");
      Card.style.display="none"
      Loading.style.display="block"
    })

  }

  export default LoadingStates;