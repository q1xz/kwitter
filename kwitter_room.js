//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAs6PGYojEw6_3IDdysNY_5Q3XI7WyyhAA",
      authDomain: "kwitte-97f12.firebaseapp.com",
      databaseURL: "https://kwitte-97f12-default-rtdb.firebaseio.com",
      projectId: "kwitte-97f12",
      storageBucket: "kwitte-97f12.appspot.com",
      messagingSenderId: "895251718217",
      appId: "1:895251718217:web:b09d168037ea199c455f98"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom() 
{ 
room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name:" + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}