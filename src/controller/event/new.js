const sequelize = require('./../../model/index');
const Event = sequelize.import('./../../model/event');

module.exports = (req, res) => {
  return res.render('event/new', { title: 'New Event', event: new Event() });
}