/* jshint asi: true */ // Deal with it, Crockford
"lol strict"; //I'm not even sorry
"act casual"; //stay cool

var deck = require('deck')

var subjects = deck.shuffle(require('./subjects'))
var verbs = deck.shuffle(require('./verbs'))
var objects = deck.shuffle(require('./objects'))

function randInt(lt) {
  return Math.floor(Math.random() * lt);
}

module.exports = function ohCrapOhGeez() {
  var template = verbs[randInt(verbs.length)]
  template = template.replace(/%subject%/g, function(match) {
    return subjects.pop()
  })
  template = template.replace(/%object%/g, function(match) {
    return objects.pop().name
  })
  template = template.replace(/%one%/g, function(match) {
    var getOne = function getOne() {
      var result = objects.pop()
      if (result.one) {
        return result.name
      } else {
        objects.unshift(result);
        return getOne()
      }
    }
    return getOne()
  })
  template = template.replace(/%some%/g, function(match) {
    var getSome = function getSome() {
      var result = objects.pop()
      if (result.some) {
        return result.name
      } else {
        objects.unshift(result);
        return getSome()
      }
    }
    return getSome()
  })
  return template
}
