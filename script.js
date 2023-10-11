console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let previousindex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
//console.log(songItems)
let store=Array.from(document.getElementsByClassName('songItemPlay'));
//console.log(store)
let songs = [
    {songName:"let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Perfect Ed sheeran", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Yummy Justin Bieber", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "What makes you beautiful", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Cheap thrills", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Snap", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Midnight Rain", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Blank space", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Gorgeous", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "London Boy", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    /*console.log(element);*/
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', (e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        //changeicon(songIndex);
        let story=store[songIndex];
        story.classList.remove('fa-play-circle');
        story.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        makeAllPlays();
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100,16); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
/*const changeicon=(index)=>{
    let store=Array.from(document.getElementsByClassName('songItemPlay'))[index];
    store.classList.remove('fa-play-circle');
    store.classList.add('fa-pause-circle')
    };
const changeiconnext=(index)=>{
    let store=Array.from(document.getElementsByClassName('songItemPlay'))[index];
    if(index==0)
    {
        index=9;
    }
    else{
        index=index-1;
    }
    let store2=Array.from(document.getElementsByClassName('songItemPlay'))[index];
    store.classList.remove('fa-play-circle');
    store.classList.add('fa-pause-circle')
    store2.classList.remove('fa-pause-circle');
    store2.classList.add('fa-play-circle')};
const changeiconprevious=(index)=>{
        let store=Array.from(document.getElementsByClassName('songItemPlay'))[index];
        if(index==9)
        {
            index=0;
        }
        else{
            index=index+1;
        }
        let store2=Array.from(document.getElementsByClassName('songItemPlay'))[index];
        store.classList.remove('fa-play-circle');
        store.classList.add('fa-pause-circle')
        store2.classList.remove('fa-pause-circle');
        store2.classList.add('fa-play-circle')};
        */
    /*................................35 lines reduced to 16 lines of code..................................*/


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    //console.log(element)
    element.addEventListener('click', (e)=>{ 
        console.log(e);
        if(audioElement.paused || audioElement.currentTime<=0){
            makeAllPlays()
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
        }
        else{
            makeAllPlays();
            previousindex=songIndex;
            songIndex = parseInt(e.target.id);
            if(previousindex===songIndex)
            {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle'); 
            }
            else{
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                audioElement.src = `songs/${songIndex+1}.mp3`;
                masterSongName.innerText = songs[songIndex].songName;
                audioElement.currentTime = 0;
                audioElement.play();
                gif.style.opacity = 1;
            }
        }
        /*makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        */
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    let sto=store[songIndex];
    sto.classList.remove('fa-pause-circle');
    sto.classList.add('fa-play-circle');
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    sto=store[songIndex];
    sto.classList.remove('fa-play-circle');
    sto.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    let sto=store[songIndex];
   sto.classList.remove('fa-pause-circle');
   sto.classList.add('fa-play-circle');
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    sto=store[songIndex];
    sto.classList.remove('fa-play-circle');
    sto.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    /*if(masterPlay.classList.contains('fa-play-circle'))
    {
        gif.style.opacity=0;
        audioElement.pause()
    }
    else{
    audioElement.play();
    gif.style.opacity = 1;
    }
    */
})
/*if(audioElement.currentTime==audioElement.duration)
{
    audioElement.currentTime=0;
    audioElement.play();
    myProgressBar.value=0;
}
*/
