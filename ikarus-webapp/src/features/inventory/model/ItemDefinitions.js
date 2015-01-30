ItemDefinitions = [
  createWeapon('Lee Einfield rifle', 'CUP_srifle_LeeEnfield', ['CUP_10x_303_M']),
  createMagazine('10rnd .303', 'CUP_10x_303_M', 10),

  createWeapon('CZ 550 hunting rifle', 'CUP_srifle_CZ550', ['CUP_5x_22_LR_17_HMR_M']),
  createMagazine('5rnd 22Lr', 'CUP_5x_22_LR_17_HMR_M', 5),

  createWeapon('AK-74 assault rifle', 'CUP_arifle_AK74', ['CUP_30Rnd_545x39_AK_M']),
  createMagazine('30rnd 5.45x39mm', 'CUP_30Rnd_545x39_AK_M', 30),

  createWeapon('M249 lmg', 'CUP_lmg_M249', ['CUP_200Rnd_TE4_Red_Tracer_556x45_M249', 'CUP_30Rnd_556x45_Stanag']),
  createMagazine('200rnd box 5.56x45mm', 'CUP_200Rnd_TE4_Red_Tracer_556x45_M249', 30),

  createWeapon('M14 battle rifle', 'CUP_srifle_M14', ['20Rnd_762x51_Mag']),
  createMagazine('20rnd 7.62x51mm NATO', '20Rnd_762x51_Mag', 20),

  createWeapon('FN FAL (no rail)', 'CUP_arifle_FNFAL', ['CUP_20Rnd_762x51_FNFAL_M']),
  createMagazine('20rnd 7.62x51mm FN FAL', 'CUP_20Rnd_762x51_FNFAL_M', 20),

  createWeapon('M16A2 assault rifle (no rail)', 'CUP_arifle_M16A2', ['CUP_30Rnd_556x45_Stanag']),
  createMagazine('30rnd 5.56x45mm', 'CUP_30Rnd_556x45_Stanag', 30),

  createWeapon('M16A4 assault rifle', 'CUP_arifle_M16A4_Base', ['CUP_30Rnd_556x45_Stanag']),

  createWeapon('M4A1 assault rifle', 'CUP_arifle_M4A1_black', ['CUP_30Rnd_556x45_Stanag']),

  createWeapon('Dragunov SVD sniper rifle', 'CUP_srifle_SVD', ['CUP_10Rnd_762x54_SVD_M']),
  createMagazine('10rnd 7.62x51mm', 'CUP_10Rnd_762x54_SVD_M', 10),

  createWeapon('AKM assault rifle', 'CUP_arifle_AKM', ['CUP_30Rnd_762x39_AK47_M']),
  createMagazine('30rnd 7.62x39mm', 'CUP_30Rnd_762x39_AK47_M', 30),

  createWeapon('RPK-74 lmg', 'CUP_arifle_RPK74', ['CUP_75Rnd_TE4_LRT4_Green_Tracer_545x39_RPK_M', 'CUP_30Rnd_545x39_AK_M']),
  createMagazine('75rnd 5.45x39mm', 'CUP_75Rnd_TE4_LRT4_Green_Tracer_545x39_RPK_M', 75),

  createWeapon('PKM mmg', 'CUP_lmg_PKM', ['CUP_100Rnd_TE4_LRT4_762x54_PK_Tracer_Green_M']),
  createMagazine('100rnd 7.62x54mm', 'CUP_100Rnd_TE4_LRT4_762x54_PK_Tracer_Green_M', 100),

  createWeapon('AK-107 assault rifle', 'CUP_arifle_AK107', ['CUP_30Rnd_545x39_AK_M']),

  createWeapon('RPG-7V launcher', 'CUP_launch_RPG7V', ['CUP_PG7V_M']),
  createMagazine('RPG-7 AT rocket', 'CUP_PG7V_M', 1),

  createWeapon('M24 sniper rifle', 'CUP_srifle_M24_wdl', ['CUP_5Rnd_762x51_M24']),
  createMagazine('5rnd 762x51mm NATO', 'CUP_5Rnd_762x51_M24', 1),

  createGeneric('Binoculars', 'Binocular'),

  createGeneric('Kobra Reflex Sight', 'CUP_optic_Kobra'),
  createGeneric('PSO-1 Scope', 'CUP_optic_PSO_1'),
  createGeneric('M68 CCO red dot optic', 'CUP_optic_CompM2_Black'),
  createGeneric('Leupold Mark 4 10x40mm LR/T', 'CUP_optic_LeupoldMk4_10x40_LRT_Woodland'),

  createGeneric('Trijicon ACOG optic', 'CUP_optic_RCO'),
  createGeneric('Aimpoint CompM4 optic', 'CUP_optic_CompM4'),

  createBackpack('Assault Pack (Khaki)', 'B_AssaultPack_khk', true),

  createGeneric('Tactical vest (camo)', 'V_TacVest_camo'),
  createGeneric('Tactical vest (black)', 'V_TacVest_blk'),
  createGeneric('Tactical vest (olive)', 'V_TacVest_oli'),

  createGeneric('GA carrier lite (digi)', 'V_PlateCarrierIA1_dgtl'),
  createGeneric('GA carrier rig (digi)', 'V_PlateCarrierIA2_dgtl'),

  createGeneric('Carrier lite (green, US)', 'V_PlateCarrier1_rgr'),
  createGeneric('Carrier rig (green, US)', 'V_PlateCarrier2_rgr'),

  createGeneric('ECH helmet', 'H_HelmetB'),
  createGeneric('MICH helmet', 'H_HelmetIA'),

  createGeneric('RGO Hand grenade', 'HandGrenade'),
  createGeneric('Smoke grenade', 'SmokeShell'),


  createWeapon('M79 Grenadelauncher', 'CUP_glaunch_M79', ['CUP_1Rnd_HE_M203', 'CUP_1Rnd_Smoke_M203', 'CUP_1Rnd_SmokeRed_M203']),
  createMagazine('HE M203 grenade', 'CUP_1Rnd_HE_M203', 1),
  createMagazine('Smoke M203 grenade', 'CUP_1Rnd_Smoke_M203', 1),
  createMagazine('Red smoke M203 grenade', 'CUP_1Rnd_SmokeRed_M203', 1),

  createWeapon('Makarov handgun', 'CUP_hgun_Makarov', ['CUP_8Rnd_9x18_Makarov_M']),
  createMagazine('8rnd 9x18mm', 'CUP_8Rnd_9x18_Makarov_M', 8),

  createWeapon('Saiga12K shotgun', 'CUP_sgun_Saiga12K', ['CUP_8Rnd_B_Saiga12_74Slug_M']),
  createMagazine('8rnd Saiga 74 slug', 'CUP_8Rnd_B_Saiga12_74Slug_M', 8),

  createWeapon('CZ 75 P-07 Duty handgun', 'CUP_hgun_Duty', ['16Rnd_9x21_Mag']),
  createMagazine('16rnd 9x21mm', '16Rnd_9x21_Mag', 16),

  createWeapon('MP5 SD6', 'CUP_smg_MP5SD6', ['16Rnd_9x21_Mag']),
  createMagazine('30rnd 9x19mm', 'CUP_30Rnd_9x19_MP5', 30, true),

  createWeapon('Glock 17 handgun', 'CUP_hgun_Glock17', ['CUP_17Rnd_9x19_glock17']),
  createMagazine('17rnd 9x19mm', 'CUP_17Rnd_9x19_glock17', 17),

  createWeapon('AA-12 shotgun', 'CUP_sgun_AA12', ['CUP_20Rnd_B_AA12_Pellets']),
  createMagazine('20rnd pellets', 'CUP_20Rnd_B_AA12_Pellets', 20),

  createWeapon('Zubr .45 revolver', 'hgun_Pistol_heavy_02_F', ['6Rnd_45ACP_Cylinder']),
  createMagazine('6rnd .45 ACP cylinder', '6Rnd_45ACP_Cylinder', 6),

  createWeapon('Vermin SMG .45 ACP', 'SMG_01_F', ['30Rnd_45ACP_Mag_SMG_01']),
  createMagazine('30rnd .45 ACP', '30Rnd_45ACP_Mag_SMG_01', 30),

  createWeapon('Micro UZI PDW', 'CUP_hgun_MicroUzi', ['CUP_30Rnd_9x19_UZI']),
  createMagazine('30rnd 9x19mm', 'CUP_30Rnd_9x19_UZI', 10),

  createWeapon('M32 Grenadelauncher', 'CUP_glaunch_M32', ['CUP_6Rnd_HE_M203', 'CUP_6Rnd_Smoke_M203']),
  createMagazine('HE M203 grenade', 'CUP_6Rnd_HE_M203', 6),
  createMagazine('Smoke M203 grenade', 'CUP_6Rnd_Smoke_M203', 6),

  createWeapon('NLAW launcher', 'CUP_launch_NLAW', ['CUP_NLAW_M']),
  createMagazine('NLAW AT rocket', 'CUP_NLAW_M', 1),

  createLoot(
    'Civilian Weapons',
    'IKRS_loot_civilian_weapons',
    {
      'Binocular': 'd3-1',
      'CUP_srifle_LeeEnfield': 1,
      'CUP_10x_303_M': 'd5+2',
      'CUP_srifle_CZ550': 'd40-39',
      'CUP_5x_22_LR_17_HMR_M': 'd3-2',
      'H_HelmetB': 'd5-4',
      'SmokeShell': 'd3+1',
      'HandGrenade': 'd5-4',

      'CUP_glaunch_M79': 'd40-39',
      'CUP_1Rnd_HE_M203': 'd3-2',
      'CUP_1Rnd_Smoke_M203': 'd3-2',
      'CUP_1Rnd_SmokeRed_M203': 'd3-2',

      'CUP_hgun_Makarov': 1,
      'CUP_8Rnd_9x18_Makarov_M' : 'd3'
    }
  ),

  createLoot(
    'Old Russian Weapons',
    'IKRS_loot_old_RU_weapons',
    {
      'CUP_arifle_AK74': 'd2',
      'CUP_30Rnd_545x39_AK_M': '2d5+5',
      'CUP_optic_Kobra': 'd10-8',
      'CUP_optic_PSO_1': 'd10-9',
      'CUP_srifle_SVD': 'd40-39',
      'CUP_10Rnd_762x54_SVD_M': 'd6-5',
      'CUP_30Rnd_762x39_AK47_M': 'd3-1',
      'CUP_arifle_AKM': 'd5-4',
      'CUP_75Rnd_TE4_LRT4_Green_Tracer_545x39_RPK_M': 'd5-4',
      'V_TacVest_camo': 'd3-1',
      'V_TacVest_oli': 'd3-1',
      'V_TacVest_blk': 'd3-1',
      'V_PlateCarrierIA1_dgtl': 'd5-4',
      'H_HelmetIA': 'd3',
      'SmokeShell': '3d3',
      'HandGrenade': 'd3',

      'CUP_sgun_Saiga12K': 'd2-1',
      'CUP_8Rnd_B_Saiga12_74Slug_M': 'd3-1',

      'CUP_hgun_Duty': 2,
      '16Rnd_9x21_Mag' : 'd6'
    }
  ),

  createLoot(
    'Old NATO weapons',
    'IKRS_loot_old_nato_weapons',
    {
      'CUP_arifle_M16A2': 'd2',
      'CUP_30Rnd_556x45_Stanag': 'd5+3',
      'CUP_arifle_M16A4_Base': 'd5-4',
      'CUP_optic_CompM2_Black': 'd5-4',
      'CUP_optic_RCO': 'd20-18',
      'V_TacVest_camo': 'd3-1',
      'V_TacVest_oli': 'd3-1',
      'V_TacVest_blk': 'd3-1',
      'V_PlateCarrier1_rgr': 'd5-4',
      'CUP_srifle_M14': 'd10-9',
      '20Rnd_762x51_Mag': 'd2-1',
      'H_HelmetB': 'd3-1',
      'SmokeShell': '3d3',
      'HandGrenade': '2d3',

      'CUP_smg_MP5SD6': 'd3-2',

      'CUP_hgun_Glock17': 2,
      'CUP_17Rnd_9x19_glock17' : 'd6'
    }
  ),

  createLoot(
    'Common NATO weapons',
    'IKRS_loot_common_nato_weapons',
    {
      'CUP_arifle_M4A1_black': 'd2',
      'CUP_optic_CompM4': 'd10-8',
      'CUP_optic_CompM2_Black': 'd2',
      'CUP_optic_RCO': 'd10-8',
      'CUP_200Rnd_TE4_Red_Tracer_556x45_M249': 'd3-2',
      'CUP_launch_NLAW': 'd10-9',
      'CUP_NLAW_M': 'd5-4',
      'V_TacVest_camo': 'd3-1',
      'V_TacVest_oli': 'd3-1',
      'V_TacVest_blk': 'd3-1',
      'V_PlateCarrier1_rgr': 'd2',
      'V_PlateCarrier2_rgr': 'd5-4',
      'CUP_srifle_M24_wdl': 'd20-19',
      'CUP_5Rnd_762x51_M24': 'd3-2',
      'H_HelmetB': 'd3+1',
      'SmokeShell': '3d3',
      'HandGrenade': '2d3',

      'CUP_sgun_AA12': 'd3-2',
      'CUP_20Rnd_B_AA12_Pellets': 'd2-1',

      'hgun_Pistol_heavy_02_F': 'd2-1',
      '6Rnd_45ACP_Cylinder': 'd3-1'
    }
  ),

  createLoot(
    'Common Russian weapons',
    'IKRS_loot_common_RU_weapons',
    {
      'CUP_arifle_AK107': 'd2+1',
      'CUP_optic_Kobra': 'd2+1',
      'CUP_optic_PSO_1': 'd5-4',
      'CUP_srifle_SVD': 'd20-19',
      'CUP_10Rnd_762x54_SVD_M': 'd3-2',
      'CUP_30Rnd_545x39_AK_M': '2d5+5',
      'V_TacVest_camo': 'd3-1',
      'V_TacVest_oli': 'd3-1',
      'V_TacVest_blk': 'd3-1',
      'V_PlateCarrierIA1_dgtl': 'd2',
      'V_PlateCarrierIA2_dgtl': 'd5-4',
      'CUP_lmg_PKM': 'd10-9',
      'CUP_100Rnd_TE4_LRT4_762x54_PK_Tracer_Green_M': 'd5-3',
      'CUP_launch_RPG7V': 'd10-9',
      'CUP_PG7V_M': 'd2-1',
      'H_HelmetIA': 'd3+2',
      'SmokeShell': '3d3',
      'HandGrenade': '2d3',
      'CUP_arifle_FNFAL': 'd10-9',
      'CUP_20Rnd_762x51_FNFAL_M': 'd3+1',

      'SMG_01_F': 'd2-1',
      '30Rnd_45ACP_Mag_SMG_01': 'd4-1',

      'CUP_hgun_MicroUzi' : 'd2-1',
      'CUP_30Rnd_9x19_UZI' : 'd3-1'
    }
  ),

  createLoot(
    'NATO heavy weapons',
    'IKRS_loot_heavy_nato_weapons',
    {
      'CUP_launch_NLAW': 'd10-9',
      'CUP_NLAW_M': 'd5-4',
      'CUP_optic_LeupoldMk4_10x40_LRT_Woodland': 'd20-19',
      'CUP_srifle_M24_wdl': 'd20-19',
      'CUP_5Rnd_762x51_M24': 'd2',
      'CUP_lmg_M249': 'd2-1',
      'CUP_200Rnd_TE4_Red_Tracer_556x45_M249': 'd3+2',
      'CUP_glaunch_M32': 'd3-2',
      'CUP_6Rnd_HE_M203': 'd2-1',
      'CUP_6Rnd_Smoke_M203': 'd2-1',
    }
  ),

  createLoot(
    'Russian heavy weapons',
    'IKRS_loot_heavy_RU_weapons',
    {
      'CUP_launch_RPG7V': 'd3-1',
      'CUP_PG7V_M': 'd3+2',
      'CUP_lmg_PKM': 'd4-3',
      'CUP_100Rnd_TE4_LRT4_762x54_PK_Tracer_Green_M': 'd3',
      'CUP_arifle_RPK74': 'd2',
      'CUP_75Rnd_TE4_LRT4_Green_Tracer_545x39_RPK_M': '2d3+5',
      'CUP_optic_PSO_1': 'd2-1',
      'CUP_srifle_SVD': 'd20-19',
      'CUP_10Rnd_762x54_SVD_M': 'd3-2'
    }
  ),
];

function createLoot(name, armaClass, loot){
  return new ItemLoot({
    armaClass: armaClass,
    name: name,
    loot: loot
  })
};

function createWeapon(name, armaClass, magazines, unlimited){
  return new ItemWeapon({
    armaClass: armaClass,
    name: name,
    combatibleMagazines: magazines,
    unlimited: unlimited
  })
};

function createMagazine(name, armaClass, ammo, unlimited){
  return new ItemMagazine({
    armaClass: armaClass,
    name: name,
    ammo: ammo,
    unlimited: unlimited
  })
};

function createGeneric(name, armaClass, unlimited){
  return new ItemGeneric({
    armaClass: armaClass,
    name: name,
    unlimited: unlimited
  })
};

function createBackpack(name, armaClass, unlimited){
  return new ItemBackpack({
    armaClass: armaClass,
    name: name,
    unlimited: unlimited
  })
}