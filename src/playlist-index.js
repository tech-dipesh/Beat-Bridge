import movieList from "./list/music-list.js";
import {
  audiobtn,
  title,
  selectmusicCount,
  length,
  changeCommandWhenverClick,
  playlist, selectUl
} from "../index.js";

const playThatIndiexMusic = (index) => {
  const checkisPlay=audiobtn.play();
  audiobtn.setAttribute("src", movieList[index].file);
  audiobtn.play();
  play.setAttribute("class", "fa-solid fa-pause");
  title.forEach((e) => {
    e.innerText = movieList[index].title;
  });
  selectmusicCount.innerText = `Song ${index + 1} of ${length}`;
  localStorage.setItem("index", index)
};

// let index=0;
const playListExport = () => {
  
  let isclick = false;
  
  const nextQueueEvent = (newindex) => {
    // audiobtn.play()
    return () => {
      let indexComing = newindex % length;
      audiobtn.setAttribute("src", movieList[indexComing].file);
      audiobtn.currentTime = 0;
      console.log("now the next music player is", movieList[indexComing].file);
      play.setAttribute("class", "fa-solid fa-pause")
      audiobtn.play();
      selectmusicCount.innerText=`Song ${indexComing+1} of ${length}`
      title.forEach(t=>t.innerText=movieList[indexComing].title)
    localStorage.setItem("index", indexComing)
      iClassNextQueue(indexComing);
    };
  };
  
  const iClassNextQueue = (index) => {
    // First Remove previous next video and make new video.
    // audiobtn.removeEventListener("ended", nextQueueEvent);
    audiobtn.addEventListener("ended", nextQueueEvent(index));
  };
  
  
  playlist.onclick = (event) => {
      selectUl.innerText='';
      if (isclick == false) {
        movieList.forEach((e) => {
        // now don't need the split a title.
        // let getName=e.title.split(' ').slice(0, 3).join(' ');
        let createUi = document.createElement("li");
        createUi.setAttribute("id", "playlist-li")
        createUi.innerText = e.title;
        let createButton = document.createElement("i");
        createButton.setAttribute("class", "fa-solid fa-hourglass");
        createUi.appendChild(createButton);
        selectUl.appendChild(createUi);
      });
      
      selectUl.style.display = "contents";
      isclick = true;
    } else {
      isclick = false;
      selectUl.style.display = "none";
    }}

  
  const getThatIndexFromParent = (e) => {
    const parentUl = e.parentNode;
    const liElements = Array.from(parentUl.children);
    const index = liElements.indexOf(e);
    return index;
  };

    selectUl.addEventListener("click", (e) => {
      const LiClicked = e.target.closest("LI");
      if (LiClicked) {
        let indexParent = getThatIndexFromParent(LiClicked);
      if (e.target.tagName == "I") iClassNextQueue(indexParent);
      else if (e.target.tagName == "LI")  playThatIndiexMusic(indexParent);
      selectUl.style.display = "none";
    }
  })



};

export { playThatIndiexMusic, playListExport };
