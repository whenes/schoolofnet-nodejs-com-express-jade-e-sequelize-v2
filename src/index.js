module.exports = (app) => {
  app.use('/', require('./controller/home'));
  app.use('/events', require('./controller/event/index'));
}