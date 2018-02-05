//establish a database object to firebase db
var DB = firebase.database();



function writeFirebase(gameToWrite) {
  //DB.ref("users/username").set({
    DB.ref("users").set({
    // username: "Anya",
    // email: "test@bbg.org",
    // profile_picture: "imageURL"
    currentGame: gameToWrite
  });
}

function readFirebase() {
  // DB.ref('users/').get({
  //the value in the ref object gets the specific value
  DB.ref("/users/currentGame/users")
    .once("value")
    // .then(function(name) {
    //   console.log(name.val()); //the whole array gets printed
    //   // console.log(myName['email']); //this doesn't work
    // });
    .then(function(users){
      users.forEach(function(user, index){
        //whole user  object
        fbUser = user.val();
        
        console.log("printing name or each user in Firebase:");
        console.log(fbUser.name + " index: "+ index); //the whole array gets printed
      })
      
    });
   
    

  // DB.ref("/users/username/email")
  //   .once("value")
  //   .then(function(myEmail) {
  //     console.log(myEmail.val()); //prints only the email
  //   });
}
