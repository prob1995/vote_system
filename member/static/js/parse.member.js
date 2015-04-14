function collectionToStrArray(collection)
{
	var ary = [];
	for(var i=0, len = collection.length; i < len; i++)
	{
		ary.push(collection[i].value);
	}
	return ary;
}

function logOut(){
  alert('已登出');
  Parse.initialize("YBo3QxylVRUED5bJxAybNNDatL6ZHLnUnygydfob", "r30jVj6RkTEpJ3DCmdN5W3jU05mg0XdNKGzfGUup");
  Parse.User.logOut();
}

function submit(){
  Parse.initialize("YBo3QxylVRUED5bJxAybNNDatL6ZHLnUnygydfob", "r30jVj6RkTEpJ3DCmdN5W3jU05mg0XdNKGzfGUup");
  var x = document.getElementsByClassName("item");
  var xa = collectionToStrArray(x);
  var c = Parse.User.current();
  var name = c.getUsername();
  var orderObj = Parse.Object.extend("order");
  var order = new orderObj();
  order.save({
  name: name,
  order: xa,
}, {
  success: function(order) {
    // The object was saved successfully.
    alert("已送出，將會有專人與您聯絡");
  },
  error: function(order, error) {
    // The save failed.
    // error is a Parse.Error with an error code and description.
    alert("嗚，有哪裡出了問題，請再試一次" + error.code + " " + error.message);
  }
});
};