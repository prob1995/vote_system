function sign(){
  Parse.initialize("YBo3QxylVRUED5bJxAybNNDatL6ZHLnUnygydfob", "r30jVj6RkTEpJ3DCmdN5W3jU05mg0XdNKGzfGUup");
  var username = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var email = document.getElementById('email').value;
  var companyid = document.getElementById('companyId').value;
  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);
  
  // other fields can be set just like with Parse.Object
  user.set("CompanyId", companyid);
  
  user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
      alert('耶！註冊成功!')
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
};

function logIn(){
  Parse.initialize("YBo3QxylVRUED5bJxAybNNDatL6ZHLnUnygydfob", "r30jVj6RkTEpJ3DCmdN5W3jU05mg0XdNKGzfGUup");
  var Lusername = document.getElementById('Lemail').value;
  var Lpassword = document.getElementById('Lpassword').value;
  Parse.User.logIn(Lusername, Lpassword, {
    success: function(user) {
    // Do stuff after successful login.
    alert('耶！登入成功!');
    window.location = "/member";
    },
    error: function(user, error) {
    // The login failed. Check error to see why.
    alert("嗚！"+ error.code + " " + error.message)
    }
  });
};

function logOut(){
  alert("??ya");
  Parse.initialize("YBo3QxylVRUED5bJxAybNNDatL6ZHLnUnygydfob", "r30jVj6RkTEpJ3DCmdN5W3jU05mg0XdNKGzfGUup");
  Parse.User.logOut();

};

function submit(){
  alert("ya?");
//  Parse.initialize("YBo3QxylVRUED5bJxAybNNDatL6ZHLnUnygydfob", "r30jVj6RkTEpJ3DCmdN5W3jU05mg0XdNKGzfGUup"");
//  var x = document.getElementsByTagName("item");
};

