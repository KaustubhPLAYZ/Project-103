//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration

const firebaseConfig = {

      apiKey: "AIzaSyCCSNUyjE0Fr3Wvb-KIT6imyJB95uP1D1A",
    
      authDomain: "chat-app-38231.firebaseapp.com",
    
      databaseURL: "https://chat-app-38231-default-rtdb.firebaseio.com",
    
      projectId: "chat-app-38231",
    
      storageBucket: "chat-app-38231.appspot.com",
    
      messagingSenderId: "1079808909744",
    
      appId: "1:1079808909744:web:f0e96675d028b9f0077675"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -"+ Room_names);
                  row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
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
            window.location = "kwitter.html";
}