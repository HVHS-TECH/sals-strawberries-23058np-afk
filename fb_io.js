/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
function fb_authenticate() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        user = result.user;
        console.log(`Welcome ${user["displayName"]}`);
        console.log(user);
    })
}

function fb_write() {
    var name = document.getElementById("name").value
    console.log(name);
}
function fb_error(){
    // Don't forget your error handling!
}