Template.base_status.created = function () {
};

Template.base_status.helpers({
  company: function () {
    return Company.getById(this.companyId);
  },
  ownCompany: function () {
    var player = Player.getCurrent();

    if (player) {
      var company = Company.getById(this.companyId);
      return player.isMemberOf(company);
    }

    return false;
  },
  companyInventoryView: function() {
    var companyInventoryView = dic.get('CompanyInventoryView');
    companyInventoryView.refresh();
    return companyInventoryView;
  }
});

Template.base_status.events({
  'click .js-rename-company': function(event, template) {
    var newName = prompt('New name?', Company.getCurrent().getName());
    Meteor.call(
      'renameCurrentCompany',
      newName,
      function (error, result) {
        if (error) {
          alert(error)
        }
      }
    );
  },
  'click .js-leave-company': function(event, template) {
    if (confirm('Are you sure? (If last player leaves, company is deleted)')) {
      var player = Player.getCurrent();
      var company = player.getCompany();

      Meteor.call(
        'leaveCompany',
        function (error, result) {
          if (error) {
            alert(error)
          }
        }
      );
    }
  }
});
