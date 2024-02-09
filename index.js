let songsUL = document.querySelector(".songs").getElementsByTagName("ul")[0];


let currentsong = new Audio();


let allsong=[];
// console.log("sCREEN WIDTH: " + screen.width)

let screenWidth = screen.width;

let playing = false;





// write a javasc?ript function to convert seconds to minits???
function convertSecondsToMinutesAndSeconds(seconds) {






    if (isNaN(seconds) || seconds < 0) {
        return "Invalid input";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0').slice(0, 2);
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    let ss = parseInt(formattedSeconds)
    return `${formattedMinutes}:${ss}`;






}
let currentFolder="songs";
async function getSongs(folder) {
currentFolder=folder;
    let a = await fetch("https://github.com/ItsSubhoo/Spotify.me/tree/main/songs");
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {

            // a.replaceAll("%20%"," ");
            songs.push(element);
        }

    }

    for (const song of songs) {
        // console.log("THis is the song");


        songurl = song.href;
        allsong.push(songurl);
        // console.log(songurl);
        let a = song.href.split(`/${currentFolder}/`)[1];

        let a1 = a.replaceAll("%20", " ");
        let b = a1.replaceAll("%2C", " ");

        if (screenWidth > 1250) {





            songsUL.innerHTML = songsUL.innerHTML + `  <li class="songname rounded ">
                                
            <div class="info " data-songurl="${songurl}">
                <img width="32px" src="musicicn.svg" class="invert albumImage" />
                <div class="name ">
                    <h4  style="padding: 5px 5px;  width: 173px;">${b}</h4>
                    <p  style="padding: 0px 5px;  width: 173px;">albatross</p>
                </div>
            </div>
                <div class="playsvg flex " style="align-items:center;">
                    <p style="width: 60px;" >play now</p><img style=" width:  18px;" class=" " src="play.svg" alt="">
    
                </div>
    
    
           
        </li>`;
        }
        else {
            

        //   console.log(removedc);
        //   document.querySelectorAll(".right").setAttribute("class",removedc);


            songsUL.innerHTML = songsUL.innerHTML + `  <li class="songname rounded ">
                            
        <div class="info " data-songurl="${songurl}">
            <img width="32px" src="musicicn.svg" class="invert albumImage" />
            <div class="name ">
                <h4  style="padding: 5px 5px;  width: 173px;">${b}</h4>
                <p  style="padding: 0px 5px;  width: 173px;">albatross</p>
            </div>
        </div>
            <div class="playsvg flex " style="align-items:center;">
                <img style=" width:  18px;" class=" " src="play.svg" alt="">
    
            </div>
    
    
       
    </li>`;
        }




    }




    Array.from(document.querySelector(".songs").getElementsByTagName("li")).forEach(e => {

        
        let songinfo = e.getElementsByClassName("info")[0];
        let song = songinfo.getAttribute('data-songurl');


        

        e.addEventListener("click", element => {

            if (playing == false) {
                let className = e.getAttribute('class');
                let newclassname = className + "highlightedsong";
                e.setAttribute('class', newclassname);
                playing = true;

            }
            // else{
            // }
            currentsong.src = song;
            greenplaybtn.src = "pause.svg"
            greenplaybtn.style.border = "2px solid #25d8649c";
            greenplaybtn.style.borderRadius = "60%";
            playing = true;
            currentsong.play();

            // let songname = song.split("/songs/")[1];
            // let a1 = songname.replaceAll("%20", " ");
            // let b = a1.replaceAll("%2C", " ");
            // let c=b.replaceAll(".mp3", "");
            // document.querySelector(".songnameonbar").innerHTML = `${c}`;




     



        })



    })

    return songs;


}
var songurl;
async function main() {


    let songs = await getSongs("songs");


    currentsong.src = "/songs/Animal%20BGM%20.mp3";


    // let songsUL = document.querySelector(".songs").getElementsByTagName("ul")[0];

    // for (const song of songs) {
    //     // console.log("THis is the song");


    //     songurl = song.href;
    //     allsong.push(songurl);
    //     // console.log(songurl);
    //     let a = song.href.split(`/${currentFolder}/`)[1];

    //     let a1 = a.replaceAll("%20", " ");
    //     let b = a1.replaceAll("%2C", " ");

    //     if (screenWidth > 1250) {





    //         songsUL.innerHTML = songsUL.innerHTML + `  <li class="songname rounded ">
                                
    //         <div class="info " data-songurl="${songurl}">
    //             <img width="32px" src="musicicn.svg" class="invert albumImage" />
    //             <div class="name ">
    //                 <h4  style="padding: 5px 5px;  width: 173px;">${b}</h4>
    //                 <p  style="padding: 0px 5px;  width: 173px;">albatross</p>
    //             </div>
    //         </div>
    //             <div class="playsvg flex " style="align-items:center;">
    //                 <p style="width: 60px;" >play now</p><img style=" width:  18px;" class=" " src="play.svg" alt="">
    
    //             </div>
    
    
           
    //     </li>`;
    //     }
    //     else {
            

    //     //   console.log(removedc);
    //     //   document.querySelectorAll(".right").setAttribute("class",removedc);


    //         songsUL.innerHTML = songsUL.innerHTML + `  <li class="songname rounded ">
                            
    //     <div class="info " data-songurl="${songurl}">
    //         <img width="32px" src="musicicn.svg" class="invert albumImage" />
    //         <div class="name ">
    //             <h4  style="padding: 5px 5px;  width: 173px;">${b}</h4>
    //             <p  style="padding: 0px 5px;  width: 173px;">albatross</p>
    //         </div>
    //     </div>
    //         <div class="playsvg flex " style="align-items:center;">
    //             <img style=" width:  18px;" class=" " src="play.svg" alt="">
    
    //         </div>
    
    
       
    // </li>`;
    //     }




    // }




    // Array.from(document.querySelector(".songs").getElementsByTagName("li")).forEach(e => {

        
    //     let songinfo = e.getElementsByClassName("info")[0];
    //     let song = songinfo.getAttribute('data-songurl');


        

    //     e.addEventListener("click", element => {

    //         if (playing == false) {
    //             let className = e.getAttribute('class');
    //             let newclassname = className + "highlightedsong";
    //             e.setAttribute('class', newclassname);
    //             playing = true;

    //         }
    //         // else{



    //         // }



         

  
    //         currentsong.src = song;
    //         greenplaybtn.src = "pause.svg"
    //         greenplaybtn.style.border = "2px solid #25d8649c";
    //         greenplaybtn.style.borderRadius = "60%";
    //         playing = true;
    //         currentsong.play();

    //         // let songname = song.split("/songs/")[1];
    //         // let a1 = songname.replaceAll("%20", " ");
    //         // let b = a1.replaceAll("%2C", " ");
    //         // let c=b.replaceAll(".mp3", "");
    //         // document.querySelector(".songnameonbar").innerHTML = `${c}`;




     



    //     })



    // })
    // let play=document.getElementsByClassName("green-playbtn");

    


    currentsong.addEventListener("timeupdate", () => {

        

        let songtime = convertSecondsToMinutesAndSeconds(currentsong.currentTime) + "/" + convertSecondsToMinutesAndSeconds(currentsong.duration);


        songtimeonbar.innerHTML = `${songtime}`;

        document.querySelector('.circle').style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";



        let song=currentsong.src;

console.log(song);
        let songname = song.split(`/${currentFolder}/`)[1];
        let a1 = songname.replaceAll("%20", " ");
        let b = a1.replaceAll("%2C", " ");
        let c=b.replaceAll(".mp3", "");
        document.querySelector(".songnameonbar").innerHTML = `${c}`;







    })
    let seekbar = document.querySelector(".seekbar");
    seekbar.addEventListener("click", e => {
        let percent = e.offsetX / e.target.getBoundingClientRect().width * 100;
        let position = (e.offsetX / e.target.getBoundingClientRect().width * 100) + "%";
        document.querySelector('.circle').style.left = position;




        let x = (currentsong.duration * percent) / 100;
        currentsong.currentTime = x;
        


       



    })

    document.querySelector('.menu').addEventListener("click", () => {


        document.querySelector(".left").style.left = "0px"

        closebtn.style.visibility = "visible";
    })
    closebtn.addEventListener("click", () => {


        document.querySelector(".left").style.left = "-100%"

    });



    previousbtn.addEventListener("click", () => {
        greenplaybtn.src = "pause.svg";
                greenplaybtn.style.border = "2px solid #25d8649c";
                greenplaybtn.style.borderRadius = "60%";

        let csongurl=currentsong.src;

        let position = allsong.indexOf(csongurl);


        if(position >0){


            currentsong.src=allsong[position-1];
            currentsong.play();

            playing=true;
        } 
        else{

            currentsong.src=allsong[0];
            currentsong.play();
            playing=true;
        }
        
        
    });
    
    
        greenplaybtn.addEventListener("click", () => {
            
    
    
            if (playing == true) {
                currentsong.pause();
                playing = false;
                greenplaybtn.src = "play-button.png"
                greenplaybtn.style.border = "2px solid rgba(93, 38, 38, 0)"
    
    
    
    
    
            }
            else {
    
                greenplaybtn.src = "pause.svg";
                greenplaybtn.style.border = "2px solid #25d8649c";
                greenplaybtn.style.borderRadius = "60%";
                playing = true;
                thisplaying = true;
                currentsong.play();
    
            }
        });
    
    
    
    
    nextbtn.addEventListener("click", () => {

        let csongurl=currentsong.src;

        let position = allsong.indexOf(csongurl);
        greenplaybtn.src = "pause.svg";
        greenplaybtn.style.border = "2px solid #25d8649c";
        greenplaybtn.style.borderRadius = "60%";
        // console.log("length: " + allsong.length);

        if(position <allsong.length  -1){


            currentsong.src=allsong[position+1];
            playing=true;
            thisplaying=true;
            currentsong.play();

            
        } 
        else{
            let pp=(allsong.length) - 1;

            currentsong.src=allsong[pp];
            playing=true;
            thisplaying=true;
         
            currentsong.play();
           
        }


    });

let vol=.40;


currentsong.volume=vol;
    let volbtn=document.querySelector(".volbtn");
    let volbar=document.querySelector(".volbar").getElementsByTagName("input")[0];
    volbar.addEventListener("change",e=>{


        volbtn.src="volumes.svg";
        vol=e.target.value/100;
        currentsong.volume=vol;
        
        if(vol==0){
            volbtn.src="mutebtn.svg";
        }        
    })
    
    
    
    volbtn.addEventListener("click",e=>{ 
        
        
        if(currentsong.volume==0){
            volbtn.src="volumes.svg";

            currentsong.volume=vol;

            volbar.value=vol*100;




        }
        else{


            volbtn.src="mutebtn.svg";
            currentsong.volume=0;
            volbar.value=0;
        }


        
    })
    Array.from(document.getElementsByClassName("card")).forEach(e=>{



        e.addEventListener("click", async item=>{
            songsUL.innerHTML="";




            yourliaberytext.innerHTML=item.currentTarget.getElementsByTagName("h3")[0].innerHTML;



            let foll=item.currentTarget.dataset.folder;

            currentFolder=foll;
            songs=await getSongs(`${currentFolder}`);

  



    


        })







    })
 

    
        // if(playing == true) {
           
        //     console.log("Playing");


        //     greenplaybtn.src = "pause.svg";
        //     greenplaybtn.style.border = "2px solid #25d8649c";
        //     greenplaybtn.style.borderRadius = "60%";           
            
        // }
        // else {
        //     console.log("Paused");

        //     greenplaybtn.src = "play-button.png"
        //     greenplaybtn.style.border = "2px solid rgba(93, 38, 38, 0)"            
        // }







}








main();

