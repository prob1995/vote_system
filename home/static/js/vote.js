function vote1(){
  Parse.initialize("YBo3QxylVRUED5bJxAybNNDatL6ZHLnUnygydfob", "r30jVj6RkTEpJ3DCmdN5W3jU05mg0XdNKGzfGUup");
  var Vote= Parse.Object.extend("vote");
  var vote = new Vote();
  vote.save({
  vote: 1
  }, {
  success: function(vote) {
    // The object was saved successfully.
    alert("您投了1");
  },
  error: function(vote, error) {
    // The save failed.
    // error is a Parse.Error with an error code and description.
    alert("oops! 投票失敗，那ㄟ阿捏")
  }
  });
};

function vote2(){
  Parse.initialize("YBo3QxylVRUED5bJxAybNNDatL6ZHLnUnygydfob", "r30jVj6RkTEpJ3DCmdN5W3jU05mg0XdNKGzfGUup");
  var Vote= Parse.Object.extend("vote");
  var vote = new Vote();
  vote.save({
  vote: 2
  }, {
  success: function(vote) {
    // The object was saved successfully.
    alert("您投了2");
  },
  error: function(vote, error) {
    // The save failed.
    // error is a Parse.Error with an error code and description.
    alert("oops! 投票失敗，那ㄟ阿捏")
  }
  });
};

function vote3(){
  Parse.initialize("YBo3QxylVRUED5bJxAybNNDatL6ZHLnUnygydfob", "r30jVj6RkTEpJ3DCmdN5W3jU05mg0XdNKGzfGUup");
  var Vote= Parse.Object.extend("vote");
  var vote = new Vote();
  vote.save({
  vote: 3
  }, {
  success: function(vote) {
    // The object was saved successfully.
    alert("您投了3");
  },
  error: function(vote, error) {
    // The save failed.
    // error is a Parse.Error with an error code and description.
    alert("oops! 投票失敗，那ㄟ阿捏")
  }
  });
};