//YOUR FIREBASE LINKS
const firebaseConfig = {

      apiKey: "AIzaSyCCSNUyjE0Fr3Wvb-KIT6imyJB95uP1D1A",
    
      authDomain: "chat-app-38231.firebaseapp.com",
    
      databaseURL: "https://chat-app-38231-default-rtdb.firebaseio.com",
    
      projectId: "chat-app-38231",
    
      storageBucket: "chat-app-38231.appspot.com",
    
      messagingSenderId: "1079808909744",
    
      appId: "1:1079808909744:web:f0e96675d028b9f0077675"
    
    };

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}