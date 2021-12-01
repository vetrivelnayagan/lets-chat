  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCRluSSQxQUIBFNZPlUZSktwtqaFhn1wb4",
      authDomain: "kwitter-project-edc69.firebaseapp.com",
      databaseURL: "https://kwitter-project-edc69-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-edc69",
      storageBucket: "kwitter-project-edc69.appspot.com",
      messagingSenderId: "585673635171",
      appId: "1:585673635171:web:9f16c911dd2d5aeac14f56"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
       purpose: "To add room name"
     });

     localStorage.setItem("room_name", room_name);
     window.location="Let's Chat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class = 'room_name' id = " + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
       document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="Let's Chat_page.html";
}
