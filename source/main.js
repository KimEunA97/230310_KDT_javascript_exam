


function teamNameCreater() {

  let Allmember = _EXAMDATA.teamInformation.teamAllMember;
  console.log(Allmember);



  for (let i = 0; i < Allmember.length; i++) {

    let teamMate = Allmember[i].name;
    root.append(teamMate);

  }


  return teamMate;


}

