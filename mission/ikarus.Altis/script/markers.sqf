player createDiaryRecord ["Diary", ["Credits", 
  'Ikarus made possible by these third party mods and scripts:<br/>'
  + '<br/>Community Upgrade Project - Weapons Pack by CUP Team'
  + '<br/>Unlocked Uniforms by Pepe Hal'
  + '<br/>Authentic Gameplay Modification by BWMod Team'
  + '<br/>Civilian Vehicles by zealot111'
  + '<br/>SHK pos by Shuko'
  + '<br/> Node.js Extension for Arma 3 by micovery'
]];

markers_createHideoutMarker = {
  private ["_building, _marker"];
  _building = _this select 0;
 
  _marker = createMarkerLocal ["hideout", getPos _building];
  _marker setMarkerTypeLocal "hd_start";
  
  player createDiaryRecord ["Diary", ["Hideout", 
    'Your hideout is <marker name="hideout">here</marker>'
    + '<br/><br/>Hideout is both the starting and ending position for the mission.'
    + ' All loot gathered during the mission will be preserved if you bring them back to the hideout.'
  ]];
};

markers_createGuardMarker = {
  private ["_position"];
  _position = _this select 0;
 
  _name = "guard" + str _position;
  _marker = createMarkerLocal [_name, _position];
  _marker setMarkerTypeLocal "hd_objective";
  
  player createDiaryRecord ["Diary", ["Guard", 
    'You are tasked to guard this <marker name="'+_name+'">depot</marker>'
    + '<br/><br/>You will get rewards for each enemy player you kill on 1km radius of the depot.'
    + ' You will get extra rewards for each kill, if you get back to your hideout alive.'
    + '<br/><br/>NOTE: You will not get any loot from loot backpacks you bring to your hideout!'
  ]];
};

markers_createSupplyDropMarker = {
  private ["_position"];
  _position = _this select 0;
 
  _name = "drop" + str _position;
  _marker = createMarkerLocal [_name, _position];
  _marker setMarkerTypeLocal "hd_objective";
  
  player createDiaryRecord ["Diary", ["Air drop", 
    'A supply drop is happening in next 10 minutes at <marker name="'+_name+'">this location.</marker>'
    + '<br/><br/>A helicopter will drop a weapon cache you are free to loot.'
    + ' Remember to bring loot back you your hideout.'
  ]];
};

markers_supplyMarkerNames = [];

markers_createSupplyMarker = {
  private ["_position", "_radius", "_name"];
  _position = _this select 0;
  _radius = _this select 1;
 
  _name = "depot" + str _position;
  _marker = createMarkerLocal [_name, _position];
  _marker setMarkerBrushLocal "SOLID";
  _marker setMarkerColorLocal "ColorBlack";
  _marker setMarkerShape "ELLIPSE";
  _marker setMarkerSize [_radius, _radius];
  _marker setMarkerAlpha 0.8;
  
  markers_supplyMarkerNames pushBack _name;
};

markers_holdMarkerNames = [];

markers_createHoldMarker = {
  private ["_position", "_radius", "_name"];
  _position = _this select 0;
  _radius = _this select 1;
 
  _name = "hold" + str _position;
  _marker = createMarkerLocal [_name, _position];
  _marker setMarkerBrushLocal "SOLID";
  _marker setMarkerColorLocal "ColorRed";
  _marker setMarkerShape "ELLIPSE";
  _marker setMarkerSize [_radius, _radius];
  _marker setMarkerAlpha 0.8;
  
  markers_holdMarkerNames pushBack _name;
};


markers_createSupplyBriefring = {
  private ["_markersText", "_number"];
  
  if (count markers_supplyMarkerNames == 0) exitWith {};
  _markersText = "";
  _number = 0;
  {
    _number = _number + 1;
    _markersText = _markersText + '<br/><marker name="' + _x + '">Depot ' + str _number +'</marker>';
  } forEach markers_supplyMarkerNames;
  
  player createDiaryRecord ["Diary", ["Supply", 
    'There are one or more supply depots on the map. These depots will contain boxes, that can be opened by waiting next to them.'
    + ' Opened boxes contain loot backpacks that will be converted to usable loot when brought back to the hideout.'
    + '<br/><br/>NOTE: Boxes in the supply depot can not be opened before 20 minutes of game has elapsed. When 30 minutes has elapsed, the boxes will open faster.'
    + ' When 50 to 55 minutes has elapsed the depot will be destroyed by an airstrike. First plane will by a fly over, next one a bombing run.'
    + '<br/><br/>Following areas contain a supply depot somewhere inside:<br/>'
    + _markersText
  ]];
};

markers_createHoldBriefing = {
  private ["_markersText", "_number"];
  
  if (count markers_holdMarkerNames == 0) exitWith {};

  _markersText = "";
  _number = 0;
  {
    _number = _number + 1;
    _markersText = _markersText + '<br/><marker name="' + _x + '">Depot ' + str _number +'</marker>';
  } forEach markers_holdMarkerNames;
  
  player createDiaryRecord ["Diary", ["Hold", 
    'There are one or more depots on the map, marked with a red circle. '
    + 'If you hold a depot for 10 minutes, you will get location for a supply drop.'
    + '<br/><br/>NOTE: You cannot hold depot before 25 minutes has elapsed.'
    + ' When 45 to 50 minutes has elapsed the depot will self destruct.'
    + '<br/><br/>Following areas contain a depot somewhere inside:<br/>'
    + _markersText
  ]];
};

markers_textMessage = {
  [_this select 0] call BIS_fnc_dynamicText;
};