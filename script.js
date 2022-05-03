if(localStorage.getItem("darkmode") === null)
{
  localStorage.setItem("darkmode", "off");
}

function toggleMode()
{
  if(localStorage.getItem("darkmode") === "on")
  {
    document.body.classList.toggle("darkmode");
    localStorage.setItem("darkmode", "off");
  }
  else if (localStorage.getItem("darkmode") === "off")
  {
    document.body.classList.toggle("darkmode");
    localStorage.setItem("darkmode", "on");
  }
}

function getMode()
{
  if(localStorage.getItem("darkmode") === "on") 
  {
    document.body.classList.toggle("darkmode");
  }
  else if (localStorage.getItem("darkmode") === "off")
  {
  }
}

//-----------------------------------------------------------------------------------------------------------

let apexT = [{
  Name: "Team SoloMid", Earnings: 616465
  },{
  Name: "SCARZ", Earnings: 299700
  },{
  Name: "Kungarna", Earnings: 269821
  },{
  Name: "NRG Esports", Earnings: 258820
  },{
  Name: "FENNEL", Earnings: 255032
  },{
  Name: "Sentinels", Earnings: 250434
  },{
  Name: "WOLFPACK", Earnings: 224117
  },{
  Name: "Rogue", Earnings: 177787
  },{
  Name: "T1", Earnings: 169829
  },{
  Name: "Natus Vincere", Earnings: 153019
  }];

let apexP = [{
  Name: "ImperialHal", Earnings: 174901
  },{
  Name: "Reps", Earnings: 139122
  },{
  Name: "Albralelie", Earnings: 121023
  },{
  Name: "rpr", Earnings: 119627
  },{
  Name: "Taisheen", Earnings: 117568
  },{
  Name: "Mande", Earnings: 117427
  },{
  Name: "Sweetdreams", Earnings: 99626
  },{
  Name: "Snipedown", Earnings: 95314
  },{
  Name: "Onmuu", Earnings: 95275
  },{
  Name: "Vein", Earnings: 92573
  }];

let leagueT = [{
  Name: "T1", Earnings: 7631028
  },{
  Name: "Samsung", Earnings: 4252048
  },{
  Name: "Invictus Gaming", Earnings: 4189145
  },{
  Name: "Royal Never Give Up", Earnings: 3963358
  },{
  Name: "EDward Gaming", Earnings: 3619001
  },{
  Name: "Fnatic", Earnings: 3090640
  },{
  Name: "G2 Esports", Earnings: 2584729
  },{
  Name: "Cloud9", Earnings: 2122341
  },{
  Name: "World Elite", Earnings: 1887745
  },{
  Name: "Team SoloMid", Earnings: 1756475
  }];

let leagueP = [{
  Name: "Faker", Earnings: 1342521
  },{
  Name: "Duke", Earnings: 954620
  },{
  Name: "Bang", Earnings: 915911
  },{
  Name: "Wolf", Earnings: 913084
  },{
  Name: "Bengi", Earnings: 810683
  },{
  Name: "JackeyLove", Earnings: 726522
  },{
  Name: "xiaohu", Earnings: 668866
  },{
  Name: "CoreJJ", Earnings: 627073
  },{
  Name: "Rookie", Earnings: 625955
  },{
  Name: "Ruler", Earnings: 591552
  }];


let CST = [{
  Name: "Astralis", Earnings: 9307784
  },{
  Name: "Natus Vincere", Earnings: 8358301
  },{
  Name: "Team Liquid", Earnings: 5205091
  },{
  Name: "Fnatic", Earnings: 4938089
  },{
  Name: "FaZe Clan", Earnings: 4541778
  },{
  Name: "Virtus.pro", Earnings: 4348190
  },{
  Name: "Gambit Esports", Earnings: 3554377
  },{
  Name: "Ninjas in Pyjamas", Earnings: 3394435
  },{
  Name: "mousesports", Earnings: 3367572
  },{
  Name: "G2 Esports", Earnings: 3362354
  }];


let CSP = [{
  Name: "dupreeh", Earnings: 1950081
  },{
  Name: "Xyp9x", Earnings: 1938480
  },{
  Name: "dev1ce", Earnings: 1921931
  },{
  Name: "gla1ve", Earnings: 1790642
  },{
  Name: "s1mple", Earnings: 1546721
  },{
  Name: "Magisk", Earnings: 1543540
  },{
  Name: "electronic", Earnings: 1400458
  },{
  Name: "Stewie2k", Earnings: 1186173
  },{
  Name: "FalleN", Earnings: 1140136
  },{
  Name: "karrigan", Earnings: 1122152
  }];

const createList = function(array)
{
  var list = document.createElement("ol");
  for(var i = 0; i < array.length; i++) 
  {
    var item = document.createElement("li");
    var text = document.createTextNode(array[i].Name + " | $" + array[i].Earnings);
    item.appendChild(text);
    list.appendChild(item);
  }
  return list;
}

const removeList = function(id)
{
  var list = document.getElementById(id);
  while (list.firstChild) 
  {
    list.removeChild(list.firstChild);
  }
}

function loadEarnings()
{
  document.getElementById("ApexTeams").appendChild(createList(apexT));
  document.getElementById("ApexPlayers").appendChild(createList(apexP));
  document.getElementById("CSTeams").appendChild(createList(CST));
  document.getElementById("CSPlayers").appendChild(createList(CSP));
  document.getElementById("LeagueTeams").appendChild(createList(leagueT));
  document.getElementById("LeaguePlayers").appendChild(createList(leagueP));
}

function removeListF(id)
{
    document.getElementById(id).appendChild(removeList(id));
}

function SortNames(arrayname, id)
{
  arrayname.sort(SortABC);
  document.getElementById(id).appendChild(createList(arrayname));
}

function SortABC(x, y){
    if (x.Name.toLowerCase() < y.Name.toLowerCase()) {return -1;}
    if (x.Name.toLowerCase() > y.Name.toLowerCase()) {return 1;}
    return 0;
}

function SortHighest(arrayname, id)
{
  arrayname.sort(SortHigh);
  document.getElementById(id).appendChild(createList(arrayname));
}

function SortHigh(x, y){
    return y.Earnings - x.Earnings;  
}

function SortLowest(arrayname, id)
{
  arrayname.sort(SortLow);
  document.getElementById(id).appendChild(createList(arrayname));
}

function SortLow(x, y){
    return x.Earnings - y.Earnings;  
}

//-----------------------------------------------------------------------------------------------------------

function showInput() 
{
  document.getElementById("display").innerHTML = document.getElementById("fname").value;
  document.getElementById("display1").innerHTML = document.getElementById("lname").value;
  document.getElementById("display2").innerHTML = document.getElementById("email").value;
  document.getElementById("display3").innerHTML = document.getElementById("username").value;
  document.getElementById("display4").innerHTML = document.getElementById("password").value;
  document.getElementById("display5").innerHTML = document.getElementById("phoneNumber").value;
}

function getData() 
{
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var phoneNumber = document.getElementById("phoneNumber").value;

  localStorage.setItem("textValue", fname);
  localStorage.setItem("textValue1", lname);
  localStorage.setItem("textValue2", email);
  localStorage.setItem("textValue3", username);
  localStorage.setItem("textValue4", password);
  localStorage.setItem("textValue5", phoneNumber);
}

function addValues() 
{
  document.getElementById("data").innerHTML = localStorage.getItem("textValue");
  document.getElementById("data1").innerHTML = localStorage.getItem("textValue1");
  document.getElementById("data2").innerHTML = localStorage.getItem("textValue2");
  document.getElementById("data3").innerHTML = localStorage.getItem("textValue3");
  document.getElementById("data4").innerHTML = localStorage.getItem("textValue4");
  document.getElementById("data5").innerHTML = localStorage.getItem("textValue5");
}

function loadUser() 
{
  let text = document.getElementById("signup").innerHTML;
  if(localStorage.getItem("textValue3") === null) 
  {
    document.getElementById("signup").innerHTML = text.replace("Sign Up", "Sign Up");
  }
  else{
    document.getElementById("signup").innerHTML = text.replace("Sign Up", localStorage.getItem("textValue3"));
  }
}

function nameRequirement() 
{
  var x = document.getElementById("fname").value;
  var y = document.getElementById("lname").value;
  if(x.length >= 2 && y.length >= 2) 
  {
    return true
  }
  else 
  {
    return false;
  }
}

function emailRequirement() 
{
  var x = document.getElementById("email").value;
  if(x.match(/[^a-zA-Z\d]/g)) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}


function usernameRequirement() 
{
  var x = document.getElementById("username").value;
  if (x.match(/[a-z]/g) && x.match(/[A-Z]/g) && x.match(/[0-9]/g) && x.length >= 8) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}

function passwordRequirement() 
{
  var x = document.getElementById("password").value;
  if (x.match(/[a-z]/g) && x.match(/[A-Z]/g) && x.match(/[0-9]/g) && x.match(/[^a-zA-Z\d]/g) && x.length >= 8) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}

function phoneRequirement() 
{
  var x = document.getElementById("phoneNumber").value;
  if(x.match(/^\(?([0-9]{3})\)?[-]?([0-9]{3})?[-]?([0-9]{4})/)) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}

function validateForm() 
{
  let x = document.forms["myForm"]["password"].value
  let y = document.forms["myForm"]["confirmPassword"].value
  if(this.nameRequirement() == false) 
  {
    alert("First and Last name must have a minimum of 2 characters")
    return false;
  }
  else if(this.emailRequirement() == false) 
  {
    alert("Email must be entered correctly")
    return false;
  }
  else if(this.usernameRequirement() == false) 
  { 
    alert("Username must have at least one uppercase, one lowercase and one digit with a minimum of 8 characters")
    return false;
  }
  else if(this.passwordRequirement() == false) 
  {
    alert("Password must have at least one uppercase, one lowercase, one digit and 1 special character with a minimum of 8 characters")
    return false;
  }
  else if (x != y) 
  {
    alert("Password must match");
    return false;
  }
  else if (this.phoneRequirement() == false) 
  {
    alert("Phone Number must be entered correctly using this (###-###-####)");
    return false;
  }
  else 
  {
    this.showInput();
    this.getData();
    document.getElementById("signup").innerHTML = localStorage.getItem("textValue3");
    this.disableLink();
    return true;
  }
}

if(localStorage.getItem("isSignedIn") === null)
{
  localStorage.setItem("isSignedIn", "off");
}

function disableLink()
{
  if(localStorage.getItem("isSignedIn") === "on")
  {
  }
  else if (localStorage.getItem("darkmode") === "off")
  {
    document.getElementById("link").classList.remove("active");
    document.getElementById("link").classList.add("disabled");
    localStorage.setItem("isSignedIn", "on");
  }
}

function checkIfSignedIn()
{
  if(localStorage.getItem("isSignedIn") === "on") 
  {
    document.getElementById("link").classList.remove("active");
    document.getElementById("link").classList.add("disabled");
  }
  else if (localStorage.getItem("isSignedIn") === "off")
  {
  }
}

function continueToAction() 
{
  if(validateForm() == true) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}