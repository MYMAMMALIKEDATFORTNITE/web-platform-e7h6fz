console.log('hello!')
const ids = ["a","b","c","d","e"];
const names = ["","","","",""];

function populateTable(){
  for (i = 0; i < ids.length; i++){
    const curId = ids[i]; //ids[3] == "d"
    //const curName = you do this;

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerHTML= "td1";
    const td2 = document.createElement("td");
    td2.innerHTML = "td2";

    //const td3 = create a button;
    //td3.innerHTML = button name;
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    //tr.appendChild(td3);

    document.getElementById('tbl').appendChild(tr)
  
  }
  
  //---------------------------------------
  const b1 = document.createElement("button");
  b1.innerHTML="Free Robux";
  function jhello(){
    alert("POTATOE");
  }
  document.getElementById('1').appendChild(b1)
  //---------------------------------------
  for (i = 100; i < 99; i++){
    console.log("hello");
  }
}


function POTATOE(){
alert("FORTNITE BATTLE PASS!");
}