

const body = document.getElementsByTagName("body");
body[0].style.margin = "0px";

const root = document.getElementById('root');
root.style.width = "100vw"
root.style.height = "100vh"

const title = root.children[0];
const memberBox = document.getElementsByTagName('span');


function tagMaker(tagName, shift) {

  let element = document.createElement(tagName);


  return element;

}


const Allmember = _EXAMDATA.teamInformation.teamAllMember;
const memberName = _EXAMDATA.teamInformation.teamAllMember[0].name;
const memberGit = _EXAMDATA.teamInformation.teamAllMember[0].githubAddress;
const memberPosit = _EXAMDATA.teamInformation.teamAllMember[0].teamPosition;



//팀명
const teamTitle = tagMaker("div");
root.append(teamTitle);

teamTitle.style.display = "flex"
teamTitle.style.width = "100%"
teamTitle.style.height = "100%"
teamTitle.style.backgroundColor = "green"
teamTitle.style.textalign = "center"
teamTitle.style.alignContent = "center"
teamTitle.style.justifyContent = "center"
teamTitle.style.flexWrap = "wrap"

teamTitle.textContent = "강지민과 소녀들";





const member = {

  //멤버 이름 변수
  PARK: root.children[0],
  KANG: root.children[1],
  JUNG: root.children[2],
  HAN: root.children[3],
  KIM: root.children[4],


}

memberArray = [];
for (key in member) {

  memberArray.push(key);

}
// console.log(memberArray);

// for (let i = 0; i < memberArray.length; i++) {


// }
// console.log(member);






//이름
const rootChild = root.children[0];
for (let i = 0; i < memberArray.length; i++) {

  let memberTag = tagMaker("span");
  rootChild.append(memberTag);

}


infoArray = [memberName, memberGit, memberPosit];
console.dir(memberBox[0].children);


//멤버 박스 만들고 안에 인포 넣기
for (let i = 0; i < infoArray.length; i++) {

  for (let i = 0; i < memberBox.length; i++) {

    const memberInfo = tagMaker("div");
    memberBox[i].append(memberInfo);

  }

}

console.log(Allmember.children)



if (infoArray.length > 0) {

  Allmember.forEach(function (go) {

    if (typeof (go) === "string") {

      go = document.createTextNode(go);

    }

    member[0].children.append(go);

  })

}


// for (let i = 0; i < Allmember.length; i++) {


//   for (let i = 0; i < infoArray.length; i++) {

//     let j = 0 
//     memberBox[j].children[i].textContent =  Allmember[i];

//     j++

//   }
// }






//정보
const nameText1 = tagMaker("div");
const nameText2 = tagMaker("div");
const nameText3 = tagMaker("div");
memberNameTag1.append(infoArray[0]);
memberNameTag1.append(nameText2);
memberNameTag1.append(nameText3);


console.dir(nameText1);







Allmember.forEach(function () {



})

