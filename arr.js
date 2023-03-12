const root = document.getElementById('root');

function tagMaker(tagname) {


  let element = document.createElement(tagname);

  return element;

}


const Allmember = _EXAMDATA.teamInformation.teamAllMember;

//멤버별 정보 문자열 배열에 담기
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
console.log(rootChild);

infoArray = [memberName, memberGit, memberPosit];


for (let i = 0; i < Allmember.length; i++) {
  //멤버 수만큼 박스 만들고
  let memberBox = tagMaker("span");
  root.append(memberBox);

  // 멤버 수 안에 정보 박스 3개
  for (let i = 0; i < infoArray.length; i++) {

    let memberInfoBox = tagMaker("div");
    memberBox.append(memberInfoBox);

  }

}


if (memberName.length > 0) {

  memberName.forEach(function (child) {

    if (typeof (child) === "string") {

      child = document.createTextNode(child);


    }

    for (let i = memberName.length; i > 0;) {

      memberTag.append(child)
    }

  })

}



