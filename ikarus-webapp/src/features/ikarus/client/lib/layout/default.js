Template.ikarus_default.onCreated(function() {
  this.subscribe('UserData');
  this.subscribe('MyCompanyAndSquads');
  this.subscribe('Servers');
  this.subscribe('latestCombatLog');
});

Template.ikarus_default.onRendered(function() {
  if (! Notification) {
    return;
  }

  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
});

Template.ikarus_default.helpers({
  noSteamConfigured: function() {
    return Accounts.loginServiceConfiguration.find({ service: 'steam' }).count() === 0;
  },

  gamesActive: function () {
    return Server.getAllPlaying().length;
  }
});

Template.ikarus_default.events({
  'click .js-reset': function() {
    Meteor.call('testing_removeFixtures');
    Meteor.call('testing_createDataSet');
  },

  'click .js-login-test-user': function() {
    Meteor.call('testing_login', 'Panthallas');
    Meteor.connection.setUserId('123');
  },

  'click .js-login-test-user2': function() {
    Meteor.call('testing_login', 'Innocent-Victim');
    Meteor.connection.setUserId('000');
  },

  'click .js-generate-combat-log': function() {
    Meteor.call('testing_createCombatLogForCurrentCompany');
  },

  'click .imageset-small': showImage,
  'click .imageset': showImage,

  'mouseenter .show-item-tooltip-small': showItem,
  'mouseleave .show-item-tooltip-small': hideItem,
  'mouseenter .itemTooltip': hideItem
});

var itemTooltip = null;

function showImage (event, template) {
  var $elem = jQuery(event.target);
  var src = jQuery($elem).attr("src");
  window.location = src;
}

function showItem(event, template) {

  if (itemTooltip) {
    return;
  }

  var $elem = jQuery(event.target);
  var armaClass = event.target.attributes.getNamedItem('data-armaclass').value;

  itemTooltip = Blaze.renderWithData(
    Template.itemTooltipSmall,
    {armaClass: armaClass, parent: $elem[0]},
    $elem[0]
  );
}

function hideItem(event, template) {
  if (itemTooltip) {
    Blaze.remove(itemTooltip);
    itemTooltip = null;
  }
}