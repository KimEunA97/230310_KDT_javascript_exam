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

for (let i = 0; i < Allmember.length; i++) {
  const div = tagMaker('div');
  root.append(div);

}

//이름
const rootChild = root.children[0];
for (let i = 0; i < Allmember.length; i++) {

  let memberTag = tagMaker("span");
  rootChild.append(memberTag);

}

console.log(memberTag)

infoArray = [memberName, memberGit, memberPosit];
console.dir(memberBox[0].children);


//멤버 박스 만들고 안에 인포 넣기
for (let i = 0; i < infoArray.length; i++) {

  for (let i = 0; i < memberBox.length; i++) {

    const memberInfo = tagMaker("div");
    memberBox[i].append(memberInfo);

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



