dic.register('GameController', function (dic) {
  return new GameController(
    dic.get('PlayerRepository'),
    dic.get('ServerRepository'),
    dic.get('CompanyRepository'),
    dic.get('SquadRepository')
  );
}, {shared: true});
