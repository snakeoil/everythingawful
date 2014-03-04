var subjects = require('./subjects')
var verbs = require('./verbs')
var objects = require('./objects')

function randInt(lt) {
  return Math.floor(Math.random() * lt);
}

module.exports = function ohCrapOhGeez() {
  return subjects[randInt(subjects.length)] + " " +
  verbs[randInt(verbs.length)] + " " +
  objects[randInt(objects.length)]
}
