CombatLog = function CombatLog (args) {

  if (! args) {
    args = {};
  }

  this._id = args._id || null;
  this.companyId = args.companyId;
  this.gameStarted = args.gameStarted;
  this.gameEnded = args.gameEnded;
  this.playersInGame = args.playersInGame;
  this.casualties = args.casualties;
  this.kills = args.kills;
  this.events = args.events;
  this.loot = args.loot;
  this.equipment = args.equipment;
};

CombatLog.prototype.getHeader = function () {
  return "COMBAT REPORT " + moment(this.gameEnded).format("MMMM Do YYYY, H:mm:ss");
};

CombatLog.prototype.getListHeader = function () {
  return moment(this.gameEnded).format("MMMM Do YYYY, H:mm:ss") + " " + this.getParticipantsString();
};

CombatLog.prototype.getLatestHeader = function () {
  return "LATEST COMBAT REPORT: " + moment(this.gameEnded).fromNow();
};

CombatLog.prototype.getParticipantsString = function () {
  return this.playersInGame.map(function (player) {
    return player.name;
  }).join();
};

CombatLog.prototype.getStartedString = function () {
  return moment(this.gameStarted).format("MMMM Do YYYY, H:mm:ss");
};

CombatLog.prototype.getEndedString = function () {
  return moment(this.gameEnded).format("MMMM Do YYYY, H:mm:ss");
};

CombatLog.prototype.getKDRatio = function () {
  var casualties = this.casualties;
  if (casualties == 0) {
    casualties = 1;
  }

  return this.kills/casualties;
};

CombatLog.prototype.getEvents = function () {
  return this.events;
};

CombatLog.prototype.serialize = function () {
  return {
    companyId: this.companyId,
    gameStarted: this.gameStarted,
    gameEnded: this.gameEnded,
    playersInGame: this.playersInGame,
    casualties: this.casualties,
    kills: this.kills,
    events: this.events,
    loot: this.loot,
    equipment: this.equipment
  };
};

CombatLog.deserialize = function (document) {
  if (! document) {
    return null;
  }

  return new CombatLog(document);
};

CombatLog.getLatest = function() {
  return CombatLog.deserialize(collections.CombatLogCollection.findOne({}, {sort: {gameEnded: -1}}));
};

CombatLog.getById = function(id) {
  return CombatLog.deserialize(collections.CombatLogCollection.findOne({_id: id}));
};

CombatLog.getAll = function(id) {
  return collections.CombatLogCollection.find({}, {sort: {gameEnded: -1}}).fetch().map(CombatLog.deserialize);
};



