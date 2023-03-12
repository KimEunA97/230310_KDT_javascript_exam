const root = document.getElementById('root');

function tagMaker(tagname) {


  let element = document.createElement(tagname);

  return element;

}



const Allmember = _EXAMDATA.teamInformation.teamAllMember;

//멤버 문자열 배열에 담기
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



if (memberName.length > 0) {

  memberName.forEach(function (child) {

    if (typeof (child) === "string") {

      child = document.createTextNode(child);


    }

    for (let i = memberName.length; i > 0;) {

      .append(child)
    }

  })

}







// function predicate(key, value){

//   return item => item[key] === value;
// }

// let cc = predicate(Allmember,name)
// console.log(cc)


// console.log(Allmember[0].name);
// console.log(Allmember[1].name);
// console.log(Allmember[2].name);
// console.log(Allmember[3].name);
// console.log(Allmember[4].name);

// let NAME = Allmember.filter(Allmember=>Allmember===Allmember.name)


// class namesPush {

//   AllmemberNameArray = [];

//   multiply(arr) {

//     arr.forEach(function (item) {

//       this.AllmemberNameArray.push(item);
//     }, this);
//   }
// }

// const names = new namesPush();
// names.multiply(Allmember);
// console.log(names)




// Allmember.forEach((memberName, memberPosit, memberGit) => {

//   console.log()

// })





for (let i = 0; i < Allmember.length; i++) {
  const div = tagMaker('div');
  root.append(div);

}