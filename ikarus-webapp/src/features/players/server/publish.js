Meteor.publish('Users', function () {
  return Meteor.users.find(
    {},
    {
      fields: {
        'companyId': 1,
        'profile.name': 1,
        'services.steam.id': 1,
        'services.steam.avatar': 1,
        'services.steam.username': 1,
      }
    }
  );
});

Meteor.publish('UserData', function () {
  if (this.userId) {
    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {
        'services.steam': 1,
        'invites': 1,
        'companyId': 1,
        'steamId': 1
      }
    });
  } else {
    this.ready();
    return;
  }
});