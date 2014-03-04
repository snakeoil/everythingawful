var subjects = [
  "Nodejitsu",
  "npm, inc",
  "izs",
  "substack",
  "tjfontaine",
  "Strongloop",
  "Tom Dale",
  "nexxy",
  "mikeal",
  "TC39",
  "tjhollowaychuk",
  "ashkenas",
  "Douglas Crockford",
  "Mozilla",
  "Chrome team"
]

var verbs = [
  "tried to trademark",
  "denounced",
  "left",
  "quit",
  "reverted",
  "forked",
  "blogged a tirade about",
  "wrote on Medium about",
  "got involved in a dispute over ownership of",
  "raised 2.9m in capital for",
  "made the Grunt of"
]

var objects = [
  "npm",
  "Node core",
  "promises",
  "semicolons",
  "GitHub issues",
  "CoffeeScript",
  "Ember",
  "Express",
  "frameworks",
  "gender neutral pronouns",
  "npm, inc",
  "build tools",
  "Grunt"
]

function randInt(lt) {
  return Math.floor(Math.random() * lt);
}

module.exports = function ohCrapOhGeez() {
  return subjects[randInt(subjects.length)] + " " +
  verbs[randInt(verbs.length)] + " " +
  objects[randInt(objects.length)]
}
