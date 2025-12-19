console.log("js reload");
import movieList from "../src/music-list.js";
 let movieName = [
      {name: "A Mai Re new Kuma Sagar", file: "Practice/music-1.mp3"},
      {name: "BHAWANA  Rockheads  Official Music Video - Rockheads Nepal", file: "Practice/music-2.mp3"},
      {name: "Bidhan Shrestha - Yo Naniko Siraima  New Nepali Adhunik Song  Aahana Basnet & Bidhyanchal Bista", file: "Practice/music-3.mp3"}
    ]

let nn="new".toLowerCase();
let storeAllMovie=movieName.filter(f=>{
  let name=(f.name).toLowerCase()
  return name.includes(nn)
})

// console.log(storeAllMovie);


let value=20;
setTimeout(() => {
  console.log(value);
}, 7000);