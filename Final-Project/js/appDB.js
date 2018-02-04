//establish a database object to firebase db
var DB = firebase.database();



function writeFirebase(gameToWrite) {
  DB.ref("users/username").set({
    // username: "Anya",
    // email: "test@bbg.org",
    // profile_picture: "imageURL"
    newGame: gameToWrite
  });
}

function readFirebase() {
  // DB.ref('users/').get({
  //the value in the ref object gets the specific value
  DB.ref("/users/username/")
    .once("value")
    .then(function(myName) {
      console.log(myName.val()); //the whole array gets printed
      // console.log(myName['email']); //this doesn't work
    });

  DB.ref("/users/username/email")
    .once("value")
    .then(function(myEmail) {
      console.log(myEmail.val()); //prints only the email
    });
}
