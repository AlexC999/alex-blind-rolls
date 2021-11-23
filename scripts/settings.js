export const registerSettings = function() {

  game.settings.register("voidus-blind-roll-skills", "showHelpCards", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingShowHelpCards"),
    hint: game.i18n.localize("BLINDROLLSKILLS.SettingShowHelpCardsHint"),
    scope: "client",
    config: true,
    default: true,
    type: Boolean
  });

  // TODO: Implement once modules adopt functionality
  // game.settings.register("voidus-blind-roll-skills", "hideAttacks", {
  //   name: game.i18n.localize("BLINDROLLSKILLS.SettingHideAttackRolls"),
  //   scope: "world",
  //   config: true,
  //   default: false,
  //   type: Boolean
  // });

  //TODO: Implement once modules adopt functionality
   game.settings.register("voidus-blind-roll-skills", "hideSaves", {
     name: game.i18n.localize("BLINDROLLSKILLS.SettingHideSaves"),
     hint: game.i18n.localize("BLINDROLLSKILLS.SettingHideSavesHint"),
     scope: "world",
     config: true,
     default: false,
     type: Boolean
   });

  game.settings.register("voidus-blind-roll-skills", "hideDeathSaves", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideDeathSaves"),
    hint: game.i18n.localize("BLINDROLLSKILLS.SettingHideDeathSavesHint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("voidus-blind-roll-skills", "hideInitiative", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideInitiative"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hidePerception", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHidePerception"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("voidus-blind-roll-skills", "hideAcrobatics", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideAcrobatics"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideArcana", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideArcana"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideAthletics", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideAthletics"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideCrafting", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideCrafting"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideDeception", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideDeception"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideDiplomacy", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideDiplomacy"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideIntimidation", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideIntimidation"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideLore", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideLore"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideMedicine", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideMedicine"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideNature", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideNature"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideOccultism", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideOccultism"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hidePerformance", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHidePerformance"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideReligion", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideReligion"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideSociety", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideSociety"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideStealth", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideStealth"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideSurvival", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideSurvival"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("voidus-blind-roll-skills", "hideThievery", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideThievery"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
}
