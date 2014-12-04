(function(){
  'use strict';

  Template.playerStatus.helpers({
    squad: function() {
      return dic.get('SquadService').getSquadForCurrentUser();
    },

    squadOnServer: function() {
      return dic.get('SquadOnServerService').getSquadOnServerForCurrentPlayer();
    },
  });

  Template.squadInGameStatus.helpers({
    squad: function() {
      return dic.get('SquadService').getSquadForCurrentUser();
    },

    server: function() {
      return dic.get('GameServerService').getServerById(this.serverId);
    },
  });

  Template.createOrJoinSquad.helpers({
    invites: function() {
      return [];
    }
  });

  Template.createOrJoinSquad.events({
    'click #create-squad': function(event, template) {
      var name = template.find('#create-squad-name').value.trim();

      if (name.length < 5) {
        alert ("Squad name must be atleast 5 characters");
        return;
      }

      Meteor.call(
        'createSquad',
        name,
        function(error, result){
          console.log(error, result);
        }
      );
    }
  });

})();