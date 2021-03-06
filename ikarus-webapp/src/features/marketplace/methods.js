Meteor.methods({
  buyFromMarket: function(category, marketId, amount)  {

    var company = Company.getCurrent();

    if (! company) {
      return;
    }

    var player = Player.getCurrent();
    if (! player || ! company.canManage(player)) {
      return;
    }

    var armory = Inventory.getByCompany(company);
    var marketContext = new MarketContext(category, dic.get('ItemFactory'), amount, marketId);

    var costs = marketContext.getTotalCosts();
    var paid = [];

    costs.forEach(function (cost) {
      var success = Inventory.removeFromInventory(armory, cost.item, cost.amount);

      if (! success) {
        reimburse(armory, paid);
        throw new Meteor.Error('Failed', 'Unable to buy item');
      } else {
        paid.push(cost);
      }
    });

    Inventory.addToInventory(
      armory,
      marketContext.getSelectedItem().getItem(),
      marketContext.getAmountToBuy()
    );
  }
});

function reimburse (armory, costs) {
  costs.forEach(function (cost) {
    Inventory.addToInventory(armory, cost.item, cost.amount);
  });
};