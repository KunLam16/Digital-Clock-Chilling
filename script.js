// Cập nhật đồng hồ hiện tại theo thời gian thực
function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('vi-VN');
    document.getElementById('clock').textContent = timeStr;
  }
  
  // Cập nhật đồng hồ mỗi giây
  setInterval(updateClock, 1000);
  updateClock(); // Gọi lần đầu để không bị chậm 1s
  
  let countdownInterval;
  
  // Hàm định dạng giây thành hh:mm:ss
  function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  
  // Bắt đầu đếm ngược tới thời điểm được chọn
  function startCountdown() {
    clearInterval(countdownInterval); // Dừng bất kỳ đếm ngược cũ nào
  
    const input = document.getElementById('targetTime').value;
    if (!input) {
      alert('Bạn vui lòng nhập thời điểm cần đếm ngược tới đó!');
      return;
    }
  
    const target = new Date(input);
  
    countdownInterval = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((target - now) / 1000); // thời gian còn lại tính bằng giây
  
      if (diff <= 0) {
        document.getElementById('countdown').textContent = "Đã đến thời gian đích!";
        clearInterval(countdownInterval);
        document.getElementById("alarm-sound").play(); // 🔔 Phát âm thanh "ting"
       // 🎊 BẮN PHÁO GIẤY TÙM LUM
        let duration = 3000;
        let animationEnd = Date.now() + duration;

        let confettiInterval = setInterval(function () {
          if (Date.now() > animationEnd) {
            clearInterval(confettiInterval);
            return;
          }

      confetti({
        particleCount: 30,
        startVelocity: 40,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.6
        }
      });
    }, 200);
      } else {
        document.getElementById('countdown').textContent = `Thời gian còn lại: ${formatTime(diff)}`;
      }
    }, 1000);
  }
  
  //Thông báo cần nhập thời gian đích
  function NoticeCountDown(){
    alert(`Bạn hãy nhập một mốc thời gian để có thể bắt đầu đếm ngược!`)
  }
  
  let music = new Audio();

  const songs = [
    {
    id:'1',
    songname:`Giày Cao Gót Màu Đỏ
    <div class="subtitle">Luân Tang</div>`,
    poster:"Covers/1.png",
    hitname: `Giày Cao Gót Màu Đỏ`,

    },
    {
        id:'2',
        songname:`Tháp Rơi Tự Do
        <div class="subtitle">LBI Lợi Bỉ</div>`,
        poster:"Covers/2.png",
        hitname: `Tháp Rơi Tự Do`,
    },
    {
        id:'3',
        songname:`Gói Gọn Hồi Ức Trao Anh
        <div class="subtitle">Vương Nhị Lãng</div>`,
        poster:"Covers/3.png",
        hitname: `Gói Gọn Hồi Ức Trao Anh`,
    },
     {
        id:'4',
        songname:`Đợi Đến Tháng 13
        <div class="subtitle">Trần Tiểu Mãn</div>`,
        poster:"Covers/4.png",
        hitname: `Đợi Đến Tháng 13`,
    },
      { id:'5',
        songname:`Là Anh
        <div class="subtitle">Mộng Nhiên</div>`,
        poster:"Covers/5.png",
        hitname: `Là Anh`,
     },
     { id:'6',
        songname:`Đông Miên 2023
        <div class="subtitle">A Nguyệt Nguyệt, Lưu Triệu Vũ</div>`,
        poster:"Covers/6.png",
        hitname: `Đông Miên 2023`,
     },
     { id:'7',
        songname:`Nếu Ánh Trăng Không Đến
        <div class="subtitle">Vương Vũ Trụ Leto</div>`,
        poster:"Covers/7.png",
        hitname: `Nếu Ánh Trăng Không Đến`,
     },
     { id:'8',
        songname:`Phi Điểu Và Ve Sầu
        <div class="subtitle">Nhậm Nhiên</div>`,
        poster:"Covers/8.png",
        hitname: `Phi Điểu Và Ve Sầu`,
     },
     { id:'9',
        songname:`Gặp Em Đúng Lúc
        <div class="subtitle">Luân Tang</div>`,
        poster:"Covers/9.png",
        hitname: `Gặp Em Đúng Lúc`,
     },
     { id:'10',
        songname:`Một Triệu Khả Năng
        <div class="subtitle">Christine Welch </div>`,
        poster:"Covers/10.png",
        hitname: `Một Triệu Khả Năng`,
     },
     { id:'11',
        songname:`Nếu Ví Anh Như
        <div class="subtitle">Kirsty Lưu Cẩn Duệ </div>`,
        poster:"Covers/11.png",
        hitname: `Nếu Ví Anh Như`,
     },
      { id:'12',
        songname:`Sứ Thanh Hoa
        <div class="subtitle">Châu Kiệt Luân </div>`,
        poster:"Covers/12.png",
        hitname: `Sứ Thanh Hoa`,
     },
    
  ]



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',(e)=>{
   if (!music.src) {
    // Nếu chưa phát bài nào thì load bài đầu tiên
    index = 1;
    music.src = `Musics/${index}.mp3`;
    poster_master_play.src = `Covers/${index}.png`;
    music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
      wave.classList.add('active2');
    
    let song_title = songs.find(ele => ele.id == index);
    if (song_title) {
      title.innerHTML = song_title.songname;
      title_album.innerHTML = song_title.songname;
      poster_album.src = `Covers/${song_title.id}.png`;
    }
  }

    if(music.paused || music.currentTime<=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
        
    }

})

document.addEventListener('keydown', function (e) {
  // Nếu đang focus vào input hoặc textarea thì không làm gì
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  // Nếu phím là Space (phím cách)
  if (e.code === 'Space') {
    e.preventDefault(); // ngăn trình duyệt cuộn trang
    masterPlay.click(); // gọi click giống như ấn nút play
  }
});



let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seekbar = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if(sec<10){
        sec = `0${sec}`;
    }

    currentEnd.innerText = `${min}:${sec}`;
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if(sec1<10){
        sec1 = `0${sec1}`;
    }

    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
})
music.addEventListener('ended',()=>{
    
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index ++;
    if(index > songs.length){
        index = 1;
    }
    
    music.src = `Musics/${index}.mp3`;
    poster_master_play.src = `Covers/${index}.png`;
    music.play();

    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })
    song_title.forEach(ele=>{
        let {songname} = ele;
        title.innerHTML = songname;
        
    })
    
    song_title.forEach(ele=>{
        let {lyrics} = ele;
        lyrical.innerHTML = lyrics;
        let {songname} = ele;
        title_album.innerHTML = songname;
        poster_album.src = `Covers/${ele.id}.png`;
    })
    
   
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
    
    
    
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value>0 ){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value>50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');


back.addEventListener('click',()=>{
    index -=1;
    if(index < 1){
        index = songs.length;
    }

    music.src = `Musics/${index}.mp3`;
        poster_master_play.src = `Covers/${index}.png`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele=>{
            let {songname} = ele;
            title.innerHTML = songname;
        })
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');

        
})


next.addEventListener('click',()=>{
    index -= 0;
    index +=1;
    if(index > songs.length){
        index = 1;
    }
    music.src = `Musics/${index}.mp3`;
        poster_master_play.src = `Covers/${index}.png`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele=>{
            let {songname} = ele;
            title.innerHTML = songname;
        })
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        
})

const bgList = ['url("BG/bg1.jpg")',
                'url("BG/bg2.jpg")',
                'url("BG/bg3.jpg")',
                'url("BG/bg4.jpg")',
                'url("BG/bg5.jpg")',
                'url("BG/bg6.jpg")',
                'url("BG/bg7.jpg")',
                'url("BG/bg8.jpg")',
                'url("BG/bg9.jpg")',
                'url("BG/bg10.jpg")',
                'url("BG/bg11.jpg")',
                'url("BG/bg12.jpg")',
                'url("BG/bg13.jpg")',
                'url("BG/bg14.jpg")',
                'url("BG/bg15.jpg")',
                'url("BG/bg16.jpg")',
                'url("BG/bg17.jpg")',
                'url("BG/bg18.jpg")',
                'url("BG/bg19.jpg")',
                'url("BG/bg20.jpg")',
              ];

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * bgList.length);
  document.body.style.backgroundImage = bgList[randomIndex];
}

changeBackground(); // Khởi tạo
setInterval(changeBackground, 30000); // Đổi mỗi 30 giây

function resizeTitleFont() {
  const titleEl = document.getElementById('title');
  const subtitleEl = document.getElementById('subtitle');

  if (!titleEl || !subtitleEl) return; // tránh lỗi nếu ko tìm thấy

  let titleText = '';
  titleEl.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      titleText += node.textContent.trim() + ' ';
    }
  });
  titleText = titleText.trim();

  const subtitleText = subtitleEl.textContent.trim();

  const titleWordCount = titleText.split(/\s+/).filter(Boolean).length;
  const subtitleWordCount = subtitleText.split(/\s+/).filter(Boolean).length;

  if (titleWordCount > 5) {
    titleEl.style.setProperty('font-size', '12px', 'important');
  } else {
    titleEl.style.fontSize = '16px';
  }

  if (subtitleWordCount > 6) {
    subtitleEl.style.fontSize = '10px';
  } else {
    subtitleEl.style.fontSize = '12px';
  }
}

window.addEventListener('DOMContentLoaded', resizeTitleFont);


function setGreeting() {
  const greetingEl = document.getElementById('greeting');
  const hour = new Date().getHours();

  let greetingText = '';

  if (hour >= 5 && hour < 12) {
    greetingText = 'Chào buổi sáng 🌞';
  } else if (hour >= 12 && hour < 18) {
    greetingText = 'Chào buổi chiều 🌤️';
  } else {
    greetingText = 'Chào buổi tối 🌙';
  }

  greetingEl.textContent = greetingText;
}

// Gọi tự động khi trang tải xong (nếu muốn)
window.addEventListener('DOMContentLoaded', setGreeting);