function tagMaker(tagName, shift) {

  let element = document.createElement(tagName);


  return element;

}

const body = document.getElementsByTagName("body");
body[0].style.margin = "0px";


const member = {

  //멤버 이름 변수
  PARK: root.children[0],
  KANG: root.children[1],
  JUNG: root.children[2],
  HAN: root.children[3],
  KIM: root.children[4],


}

const Allmember = _EXAMDATA.teamInformation.teamAllMember;
const memberName = _EXAMDATA.teamInformation.teamAllMember[0].name;
const memberGit = _EXAMDATA.teamInformation.teamAllMember[0].githubAddress;
const memberPosit = _EXAMDATA.teamInformation.teamAllMember[0].teamPosition;



//팀명
const teamTitle = tagMaker("div");
root.append(teamTitle);
teamTitle.style.width = "100vw"
teamTitle.style.height = "100vh"
teamTitle.style.backgroundColor = "green"
teamTitle.style.width = "100vw"


//이름

  const memberNameTag1 = tagMaker("div");
  teamTitle.append(memberNameTag1);
  const memberNameTag2 = tagMaker("div");
  teamTitle.append(memberNameTag2);
  const memberNameTag3 = tagMaker("div");
  teamTitle.append(memberNameTag3);
  const memberNameTag4 = tagMaker("div");
  teamTitle.append(memberNameTag4);
  const memberNameTag5 = tagMaker("div");
  teamTitle.append(memberNameTag5);



//정보
const nameText1 = tagMaker("div");
memberNameTag1.append(nameText1);
const nameText2 = tagMaker("div");
memberNameTag1.append(nameText2);
const nameText3 = tagMaker("div");
memberNameTag1.append(nameText3);


console.dir(nameText1);


nameText1.textContent = memberName;
nameText2.textContent = memberPosit;
nameText3.textContent = memberGit;





Allmember.forEach(function () {



})

