const todosRouter = require('./todos');

module.exports = (app) => {
  todosRouter(app);
  
};