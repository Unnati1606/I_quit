
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBjs2BzKdZOXesUZx2Iz3feARz3WIs8yH8",
      authDomain: "quitting-tersely.firebaseapp.com",
      databaseURL: "https://quitting-tersely-default-rtdb.firebaseio.com",
      projectId: "quitting-tersely",
      storageBucket: "quitting-tersely.appspot.com",
      messagingSenderId: "553112630283",
      appId: "1:553112630283:web:0678192fe245bd8800430e"
    };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Weeelcooome"+user_name+"?";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<dive class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});

localStorage.setItem("room_name", room_name);

window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
