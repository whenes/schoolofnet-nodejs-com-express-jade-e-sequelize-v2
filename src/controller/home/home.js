module.exports = (req, res) => {
  return res.render('home', { title: 'Home Param', msg: 'Welcome to events app' });
}
 