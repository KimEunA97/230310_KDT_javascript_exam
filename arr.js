const root = document.getElementById('root');
const body = document.getElementsByTagName('body');
body[0].style.margin = "0px"


function tagMaker(tagname) {

  let element = document.createElement(tagname);
  return element;
}

const Allmember = _EXAMDATA.teamInformation.teamAllMember;

//멤버별 정보 배열
memberName = [];
memberGit = [];
memberPosit = [];

for (key in Allmember) {

  memberName.push(Allmember[key].name);
  memberGit.push(Allmember[key].githubAddress);
  memberPosit.push(Allmember[key].teamPosition);

}

//이름
const rootChild = root.children[0];

infoArray = [memberName, memberGit, memberPosit];

// title 생성. +버튼까지
const title = tagMaker("div");
root.append(title);

for (let i = 0; i < 3; i++) {
  const div = tagMaker("div");
  root.children[0].append(div);
}


// 타이틀 다음에 올 박스들 생성
for (let i = 0; i < Allmember.length; i++) {
  //멤버 수만큼 박스 만들고
  let memberBox = tagMaker("span");
  root.append(memberBox);

  // 멤버박스 안에 정보 박스 3개씩
  for (let i = 0; i < infoArray.length; i++) {

    let memberInfoBox = tagMaker("div");
    memberBox.append(memberInfoBox);

  }

}


//제일 처음 타이틀 스타일
title.style.display = "flex"
title.style.backgroundColor = "black"
title.style.flexDirection = "row"

title.style.justifyContent = "space-evenly";
title.style.alignItems = "center";
title.style.textAlign = "center";
title.style.fontSize = "100px"
title.style.fontWeight = "bold"

title.style.width = "100vw"
title.style.height = "100vh"
title.style.color = "white"
title.style.flexWrap = "wrap";


// 타이틀에 들어가는 텍스트
title.children[1].textContent = _EXAMDATA.teamInformation.teamName;


//버튼

const leftBtn = root.children[5].children[0];
const rightBtn = root.children[5].children[2]
// leftBtn.style.position = "fixed";

leftBtn.style.width = "50px"
leftBtn.style.height = "50px"
leftBtn.style.backgroundColor = "gray"
leftBtn.style.position = "fixed"
leftBtn.style.top = "50%"
leftBtn.style.left = "1%"



rightBtn.style.width = "50px"
rightBtn.style.height = "50px"
rightBtn.style.backgroundColor = "gray"
rightBtn.style.position = "fixed"
rightBtn.style.top = "50%"
rightBtn.style.right = "1%"






// children 1번부터가 내용. 멤버 박스까지 스타일링
for (let i = 1; i < 5; i++) {

  root.children[i].style.display = "none"
  root.children[i].style.flexDirection = "column";
  root.children[i].style.justifyContent = "center";
  root.children[i].style.alignContent = "center";

  root.children[i].style.width = "100%"
  root.children[i].style.height = "100%"

  root.children[i].style.fontSize = "80px"
  root.children[i].style.fontWeight = "bold"
  root.children[i].style.color = "white"

  root.children[i].children[0].textContent = memberName[i];
  root.children[i].children[1].textContent = memberPosit[i];
  root.children[i].children[2].textContent = memberGit[i];

}


let Btndiv = tagMaker("div");
root.nextElementSibling(Btndiv);

// for (let i = 0; i < 5; i++) {

// }





root.style.display = "flex";
root.style.flexDirection = "column";
root.style.width = "100vw"
root.style.height = "100vh"
root.style.textAlign = "center";
root.style.alignItems = "center";
root.style.justifyContent = "center";




//배경색

root.children[1].style.backgroundColor = "#ff0099"
root.children[2].style.backgroundColor = "#CCCCFF"
root.children[3].style.backgroundColor = "#99ccff"
root.children[4].style.backgroundColor = "#99cc00"
root.children[5].style.backgroundColor = "green"



let index = 0;

leftBtn.addEventListener('click', function () {
  index -= 1;
  console.log(index);

  if (index === -1) {
    index = 0;

  }

  root.children[index + 1].style.display = 'none';
  root.children[index].style.display = 'flex';

})

rightBtn.addEventListener('click', function () {

  index += 1;
  console.log(index);
  if (index === 7) {
    index = 6;

  }

  root.children[index - 1].style.display = 'none';
  root.children[index].style.display = 'flex';

})

