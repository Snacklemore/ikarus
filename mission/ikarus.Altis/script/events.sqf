onPlayerKilled = nil;
lastConnectedPlayerUid = nil;


"lastConnectedPlayerUid" addPublicVariableEventHandler {
  _uid = _this select 1;
  diag_log "player connected";
  diag_log _uid;
  
  if (missionControl_gameStarted) exitWith {
    ['playerUnknown', [_uid]] call sock_rpc;
  };

  diag_log "game is NOT started";
  ['playerConnected', [_uid]] call sock_rpc;
};

"onPlayerKilled" addPublicVariableEventHandler {
  private ["_unit", "_killer", "_squad"];
  _unit = _this select 1 select 0;
  _killer = _this select 1 select 1;
  
  diag_log "player killed";
  if (! missionControl_gameStarted) exitWith {};

  diag_log " --- game is started";
  _uid = getPlayerUID _unit;
  diag_log _uid;
  
  _squad = [_unit] call getSquadForUnit;
  [_squad, "onKilled", [_unit, _killer, true]] call objectiveController_callSquadObjective;
  ['playerKilled', [_uid]] call sock_rpc;
};

diag_log "adding event handler";
addMissionEventHandler ["HandleDisconnect", {
  private ["_unit, _uid"];
  _unit = _this select 0;
  _uid = _this select 2;
  
  diag_log "player disconnected";
  diag_log _uid;
  
  if ( ! alive _unit) exitWith {
    diag_log "unit alive, no disconnect event";
  };
  
  if ( ! missionControl_gameStarted) exitWith {
    diag_log "disconnected before game start";
    ['playerDisconnected', [_uid]] call sock_rpc;
  };
  
  if ([_unit, _uid] call hideout_bodyIsInHideout) exitWith {
    diag_log "disconnected in hideout";
    [_unit, _uid] call events_playerDisconnectedInHideout;
  };

  diag_log "disconnected while game is running and not in hideout";
  ['playerKilled', [_uid]] call sock_rpc;
}];

 
 events_playerDisconnectedInHideout = {
  private ["_unit", "_uid", "_loot", "_squad"];
  _unit = _this select 0;
  _uid = _this select 1;
  _loot = [_unit] call loot_checkUnit;
  _squad = [_uid] call getSquadForUid;

  [_squad, _loot] call addDisconnectedLoot;
  [_squad, "onDisconnect", [_squad, _unit, true]] call objectiveController_callSquadObjective;
  
  deleteVehicle _unit;
  ['playerDisconnected', [_uid]] call sock_rpc;
 };
 