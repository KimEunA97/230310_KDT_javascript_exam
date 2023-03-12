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

// title 생성
const title = tagMaker("div");
root.append(title);


for (let i = 0; i < 3; i++) {
  const div = tagMaker("div");
  root.children[0].append(div);
}

// 타이틀 다음 생성
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



title.children[1].textContent = _EXAMDATA.teamInformation.teamName;


const leftBtn = title.children[0];
const rightBtn = title.children[2];

leftBtn.style.width = "50px"
leftBtn.style.height = "50px"
leftBtn.style.backgroundColor = "gray"
leftBtn.style.position = "fixed"
leftBtn.style.left = "20px"


rightBtn.style.width = "50px"
rightBtn.style.height = "50px"
rightBtn.style.backgroundColor = "gray"
rightBtn.style.position = "fixed"
rightBtn.style.right = "20px"






// children 1번부터 멤버 박스
function styling() {

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

    root.children[i].style.zIndex = i;


    root.children[i].children[0].textContent = memberName[i]
    root.children[i].children[1].textContent = memberPosit[i]
    root.children[i].children[2].textContent = memberGit[i]

  }

}
styling();


root.style.display = "flex";
root.style.flexDirection = "column";
root.style.width = "100vw"
root.style.height = "100vh"
root.style.textAlign = "center";
root.style.alignItems = "center";
root.style.justifyContent = "center";



console.dir(root.style)





root.children[1].style.backgroundColor = "cyan"
root.children[2].style.backgroundColor = "blue"
root.children[3].style.backgroundColor = "yellow"
root.children[4].style.backgroundColor = "red"
root.children[5].style.backgroundColor = "green"


function btnClick() {

  let index = 0;

  rightBtn.addEventListener('click', function () {

    index += 1;
    console.log(index);
    return index;
  })

  leftBtn.addEventListener('click', function () {

    index -= 1;
    console.log(index);
    return index;
  })



  if (index === 1) {

    console.log("asd");

  }

}

btnClick();


// console.log(memberName)

// if (memberName.length > 0) {

//   memberName.forEach(function (child) {

//     if (typeof (child) === "string") {

//       child = document.createTextNode(child);
//       console.dir(child);

//       if (child.data === "박수연") {

//         root.children[0].children[0].append(child);

//       }

//       if (child.data === "박수연") {

//         root.children[0].children[0].append(child);

//       }
//       if (child.data === "박수연") {

//         root.children[0].children[0].append(child);

//       }
//       if (child.data === "박수연") {

//         root.children[0].children[0].append(child);

//       }
//     }
//   })
// }


