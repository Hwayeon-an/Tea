/* 🛫 검색 아이콘 클릭 시 검색창 보여주기 */
const searchIcon = document.querySelector(".searchIcon");
let searchBox = document.querySelector("#search");

searchIcon.addEventListener("click", ()=>{
  searchBox.classList.toggle("view");
  if(searchBox.classList.contains("view")){
    searchBox.focus();
  }
});


/* 🛫 nav 기획전 메가 서브메뉴 */
let subMega = document.querySelector(".nav_mega_wrap");
let megaLi = document.querySelector(".megaLi"); // 기획전

megaLi.addEventListener("click", (event) => {
  //event.stopPropagation(); // 이벤트 버블링 금지
  subMega.style.opacity = "1";
  subMega.style.visibility = "visible";
  subMega.style.transform = "translateY(0px)";
});

// 바깥 영역 클릭 시 닫기
document.body.addEventListener("click", (event) => {
  if (!subMega.contains(event.target) && !megaLi.contains(event.target)) {
    subMega.style.opacity = "0";
    subMega.style.visibility = "hidden";
    subMega.style.transform = "translateY(-10px)";
  }
});
/*
  document.body.addEventListener("click", (event) => { -> 홈페이지를 아무곳이나 클릭 시 클릭한 곳을 가져옴(event)
  if (!subMega.contains(event.target) && !megaLi.contains(event.target))
    - event.target == document.body -> 전체 화면에서 선택한 요소
    - contains는 포함하는가.
    - subMega.contains == subMega는 포함하는가?        --       event.target == 현재 선택한 요소
    - 풀이(1) !subMega.contains(event.target) == subMega가 현재 클릭한 요소를 포함하지 않는다.

    - !megaLi.contains(event.target)
    - 풀이(2) == =기획전 li이 클릭한 요소를 포함하지 않는다.

    - 풀이(1) (2)가 다 true해야 한다.
*/




/* 🛫 차(Tea)는 몸을 안정시켜줘요. */
// let teaIsDivs = document.querySelectorAll(".teaIs_con_wrap");
// let teaIsImg = document.querySelector(".teaIs_img_wrap");
let teaIsWraps = document.querySelectorAll(".teaIs_img_wrap");
//let firstTeaIsWrap = teaIsWraps[0]; // 첫 번째 요소 저장

// 이미지를 호버하면 모든 것에 .hover을 지우고, 호버한 곳에만 .hover 부여
// 이미지를 떠나면 첫번째 아이에게 .hover다시 부여(디폴트)
// teaIsDiv.addEventListener("mouseenter", (e)=>{
//   console.log(e.target);
// });

// teaIsDivs.forEach((teaIsDiv, i)=>{
//   teaIsDiv.addEventListener("mouseenter", (e)=>{

//     console.log(e.target);
//   });
// });

// 모든 teaIs_img_wrap에서 .hover 제거하는 함수
// function removeHoverClass() {
//   teaIsWraps.forEach(el => el.classList.remove("hover"));
// }


teaIsWraps.forEach(teaIsWrap => {
  // #1 마우스를 올렸을 때
  teaIsWrap.addEventListener("mouseenter", (e) => {
    //removeHoverClass(); // 모든 .hover 제거

    teaIsWraps.forEach((removeel)=>{
      removeel.classList.remove("hover");
      removeel.classList.remove("h_hover");
    }); 

    e.target.classList.add("hover"); // 현재 요소에만 .hover 추가
    e.target.classList.add("h_hover"); // 현재 요소에만 .hover 추가
  });

  // #2 마우스를 벗어났을 때
  teaIsWrap.addEventListener("mouseleave", () => {
    //removeHoverClass(); // 모든 .hover 제거

    teaIsWraps.forEach(removeel =>{
      removeel.classList.remove("hover");
      removeel.classList.remove("h_hover");
    });


    teaIsWraps[0].classList.add("hover"); // 첫 번째 요소에 .hover 추가 (디폴트)
    teaIsWraps[0].classList.add("h_hover"); // 첫 번째 요소에 .hover 추가 (디폴트)
  });
});




// 

// opacity:0;되면 setTimeout으로 display:none;을 1로할꽈 그리고 이게 끝나면 contains(.nNb_view)는 opacity:1; 되는거지
// 미래의 나 ^| 위에 너무 어렵게 짰나,, 생각 중 position 방법이 있었따!
/* 🛫 new and best 탭메뉴 */
let nNb_tabs = document.querySelectorAll(".nNb_tab_wrap > button");
let nNb_productsBox = document.querySelectorAll(".nNb_right_wrap > .nNb_new_contents_wrap");

nNb_tabs.forEach((tab, index)=>{
  tab.addEventListener("click", (choiceTab)=>{
    // remove
    nNb_tabs.forEach((remove)=>{ 
      remove.classList.remove("choice");
    });
    // add Class
    choiceTab.target.classList.add("choice");


    // product Box view :: contanis
    nNb_productsBox.forEach((box, boxIndex) => {
      if (index === boxIndex) {
        box.classList.add("nNb_view"); // 선택된 탭과 연결된 박스 표시
      } else {
        box.classList.remove("nNb_view"); // 나머지 박스 숨기기
      }
    });

    // if(choiceTab.target.classList.add("choice")){
    //   nNb_productsBox[0].classList.add("nNb_view");
    //   nNb_productsBox[1].classList.remove("nNb_view");
    // }else{
    //   nNb_productsBox[0].classList.remove("nNb_view");
    //   nNb_productsBox[1].classList.add("nNb_view");
    // }
  });
});






/* 🛫 Since 2000 rotate / setIneterval */
let sinceTxt = document.querySelector(".since_txt");
let sinceRotate = 0;
if(sinceTxt){
  setInterval(()=>{
    sinceTxt.style.transform = `rotate(${sinceRotate}deg)`;
    sinceRotate += 1;
  }, 100);
}



/* w768 modal menu Open button */
// (1) 메뉴 아이콘 클릭 시
// (2) .w768_modal_menu_container 보여짐 근데!
// (3) .w768_modal_menu_container width:100%;로 해서 오른쪽에서 쭈루룩 되게!
// (4) 아니면 .w768_modal_menu_container를 opacity 1로 하고 그 바로 안에 박스를 width:@%하던가!
let menuIcons = document.querySelectorAll(".ban_menu");
let menuBox = document.querySelector(".w768_modal_menu_container"); // Fixed BG
let menuCon_box = document.querySelector(".w768_menu_box");

menuIcons.forEach((menuIcon)=>{
  menuIcon.addEventListener("click", ()=>{
    menuBox.style.width = "100%";
    menuBox.style.opacity = "1";
    
    if(window.innerWidth <= 600){ // window.innerWidth = 브라우저 현재 가로
      menuCon_box.style.width = "100%";

    }else if(window.innerWidth > 600){
      menuCon_box.style.width = "90%";
    }
    // menuBox.style.width = "100%";
    // menuCon_box.style.width = "90%";
    // menuBox.style.opacity = "1";
    // console.log(window.innerWidth);
  });
});


/* w768 modal menu close button */
let closeBtn = document.querySelector(".w768_close_btn");

closeBtn.addEventListener("click", ()=>{
  menuBox.style.width = "0";
  menuBox.style.opacity = "0";
  menuCon_box.style.width = "0";
});


// 브라우저가 768이 넘어가면 w768_menu_box width/opacity:0
window.addEventListener("resize", ()=>{
  if(window.innerWidth > 768){
    menuBox.style.width = "0";
    menuBox.style.opacity = "0";
    menuCon_box.style.width = "0";
  }

  if(getComputedStyle(menuBox).opacity == "1" ){
    if(window.innerWidth <= 600){
      menuCon_box.style.width = "100%";
    }else{
      menuCon_box.style.width = "90%";
    }
  }
});














let prevBtn = document.querySelector(".slide_prev");
let nextBtn = document.querySelector(".slide_next");

let dots = document.querySelectorAll(".dot > li"); // .on

let slideImgsWrap = document.querySelector(".imgSlide_wrap");
let index = 0;
let moveLeft = 0;

if(nextBtn){
// 🧀 슬라이드 다음버튼
nextBtn.addEventListener("click", ()=>{
  //prevBtn.style.opacity = "1"; // 화연이의 노가다 시작~
  // (아래) 얘는 그냥 비활성화 ver
  // if(index >= 3) return //nextBtn.style.opacity = "0.5";
  //index++;
  if(index >= 3){
    index = 0;
    moveLeft = 0;
    slideImgsWrap.style.marginLeft = moveLeft+"%";
    dotsRemoveAdd();
    opacityBtn();
    return;
  }
  index++;
  

  moveLeft -= 95;
  console.log(moveLeft);
  slideImgsWrap.style.marginLeft = moveLeft+"%";
  console.log(slideImgsWrap.style.marginLeft);

  dotsRemoveAdd();
  opacityBtn();

});

// 🧀 슬라이드 이전버튼
prevBtn.addEventListener("click", ()=>{
  //nextBtn.style.opacity = "1";
  // (아래) 얘는 그냥 비활성화 ver
  //if(index <= 0) return //prevBtn.style.opacity = "0.5";
  //index--;
  if(index <= 0){
    index = 3;
    moveLeft = -285;
    slideImgsWrap.style.marginLeft = moveLeft+"%";
    dotsRemoveAdd();
    opacityBtn();
    return;
  }
  index--;

  moveLeft += 95;
  slideImgsWrap.style.marginLeft = moveLeft+'%';

  dotsRemoveAdd();
  opacityBtn();
});

// 🧀 슬라이드 호출함수 :: 버튼 opacity, dot
function opacityBtn(){
  prevBtn.style.opacity = index === 0 ? "0.5" : "1";
  nextBtn.style.opacity = index === 3 ? "0.5" : "1";
}
function dotsRemoveAdd(){
  dots.forEach(()=>{
    dots.forEach((dot, i)=>{ dot.classList.remove("on"); });
    dots[index].classList.add("on");
  });
}

// 🧀 dot
dots.forEach((dot, i)=>{
  dot.addEventListener("click", (e)=>{
    dots.forEach((dot)=>{ dot.classList.remove("on"); });
    dot.classList.add("on");

    
    //console.log(i*95);
    moveLeft = i * -95;
    slideImgsWrap.style.marginLeft = moveLeft+'%';
  });
});
}