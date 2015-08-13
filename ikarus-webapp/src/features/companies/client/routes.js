Router.map(function () {
  this.route('/company/sellout', {
    name: 'company sellout',
    template: 'companies_sellout',
    layoutTemplate: 'ikarus_default',

    action: function() {
      if (this.ready()) {
        if (! Company.getCurrent()) {
          Router.go('home');
          return;
        }

        this.render();
      }
    },

    subscriptions: function () {
      return [
        Meteor.subscribe('MyCompanyAndSquads')
      ];
    }
  });

  this.route('/company', {
    name: 'my-company',
    template: 'companies_company',
    layoutTemplate: 'ikarus_default'
  });

  this.route('/companies', {
    name: 'companies',
    template: 'companies_list',
    layoutTemplate: 'ikarus_default'
  });

  this.route('/companies/:_id', {
    name: 'company',
    template: 'companies_status',
    layoutTemplate: 'ikarus_default',
    data: function() {
      return {
        companyId: this.params._id
      }
    },

    subscriptions: function () {
      return [
        Meteor.subscribe('MyCompanyAndSquads'),
        Meteor.subscribe('Company', this.params._id),
        Meteor.subscribe('UserData')
      ];
    }
  });
});