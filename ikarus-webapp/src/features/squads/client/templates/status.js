Template.squads_status.helpers({
  companyHasSquad: function () {
    return getCompanysSquads().length > 0;
  },

  companysSquads: function () {
    return getCompanysSquads();
  },

  joinableSquads: function () {
    return getCompanysSquads().filter(function(squad){
      return ! squad.isLocked();
    })
  }
});

Template.squads_status.events({
  'click .createSquad' : function () {
    Meteor.call('createSquad');
  },
  'click .joinSquad' : function () {
    var squadId = jQuery(event.target).attr("data-squadId");
    console.log(squadId);
    Meteor.call('joinSquad', squadId);
  }
});

Template.squad_queue_status.helpers({
  inQueueServer: function() {
    return Server.getByQueuingSquad(Squad.getCurrent());
  },

  inGameServer: function() {
    return Server.getByInGameSquad(Squad.getCurrent());
  },

  notInQueueOrGame: function(){
    var squad = Squad.getCurrent();
    console.log("hi,", Server.getByQueuingSquad(squad), Server.getByInGameSquad(squad));
    return ! Server.getByQueuingSquad(squad) && ! Server.getByInGameSquad(squad);
  }
});

Template.squad_queue_status.events({
  'click .joinQueue' : function () {
    Meteor.call('enterSquadQueue');
  },
  'click .leaveQueue' : function () {
    Meteor.call('leaveSquadQueue');
  }
});

Template.squad_players.events({
  'click .leaveSquad' : function () {
    Meteor.call('leaveSquad');
  }
});


function getCompanysSquads () {
  var company = Company.getCurrent();

  if (! company) {
    return [];
  }

  return Squad.getByCompany(company);
}