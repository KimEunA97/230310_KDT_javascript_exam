const root = document.getElementById('root');

function tagMaker(tagName, shift) {

  let element = document.createElement(tagName);


  Object.keys(shift).forEach(function (style) {

    element[style] = shift[style];

  })

  return element;

}

let nameStyle = {

  display: "flex",
  align : "center",


  size : "20px"


}




function teamCreater() {

  let Allmember = _EXAMDATA.teamInformation.teamAllMember;

  for (let i = 0; i < Allmember.length; i++) {

    let div = tagMaker("div", nameStyle);
    root.append(div)

    let teamMate = Allmember[i].name;
    div.append(teamMate);

  }

}

teamCreater();

