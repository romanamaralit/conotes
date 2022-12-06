
module.exports = {
    create: createUser,
  };
  
  function createUser(req, res) {
    // console.log(req.body) good to use to test and see if object prints out on console
    res.json({
      user: {
        name: req.body.name,
        email: req.body.email
      }
    });
  }
  