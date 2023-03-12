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


console.log(infoArray)


root.children[0].children[0].textContent = memberName[0]
root.children[1].children[0].textContent = memberName[1]
root.children[2].children[0].textContent = memberName[2]
root.children[3].children[0].textContent = memberName[3]
root.children[4].children[0].textContent = memberName[4]


root.children[0].children[1].textContent = memberPosit[0]
root.children[1].children[1].textContent = memberPosit[1]
root.children[2].children[1].textContent = memberPosit[2]
root.children[3].children[1].textContent = memberPosit[3]
root.children[4].children[1].textContent = memberPosit[4]


root.children[0].children[2].textContent = memberGit[0]
root.children[1].children[2].textContent = memberGit[1]
root.children[2].children[2].textContent = memberGit[2]
root.children[3].children[2].textContent = memberGit[3]
root.children[4].children[2].textContent = memberGit[4]











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


