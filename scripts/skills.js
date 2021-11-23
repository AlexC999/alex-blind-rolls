export function getSkillModifierName() {
  let skills = [];
  if(game.settings.get("voidus-blind-roll-skills", "hideAcrobatics")){ skills.push("Skill Check: Acrobatics");}
  if(game.settings.get("voidus-blind-roll-skills", "hideArcana")){ skills.push("Skill Check: Arcana");}
  if(game.settings.get("voidus-blind-roll-skills", "hideAthletics")){ skills.push("Skill Check: Athletics");}
  if(game.settings.get("voidus-blind-roll-skills", "hideCrafting")){ skills.push("Skill Check: Crafting");}
  if(game.settings.get("voidus-blind-roll-skills", "hideDeception")){ skills.push("Skill Check: Deception");}
  if(game.settings.get("voidus-blind-roll-skills", "hideDiplomacy")){ skills.push("Skill Check: Diplomacy");}
  if(game.settings.get("voidus-blind-roll-skills", "hideIntimidation")){ skills.push("Skill Check: Intimidation");}
  if(game.settings.get("voidus-blind-roll-skills", "hideLore")){ skills.push("Skill Check: Lore");}
  if(game.settings.get("voidus-blind-roll-skills", "hideMedicine")){ skills.push("Skill Check: Medicine");}
  if(game.settings.get("voidus-blind-roll-skills", "hideNature")){ skills.push("Skill Check: Nature");}
  if(game.settings.get("voidus-blind-roll-skills", "hideOccultism")){ skills.push("Skill Check: Occultism");}
  if(game.settings.get("voidus-blind-roll-skills", "hidePerformance")){ skills.push("Skill Check: Performance");}
  if(game.settings.get("voidus-blind-roll-skills", "hideReligion")){ skills.push("Skill Check: Religion");}
  if(game.settings.get("voidus-blind-roll-skills", "hideSociety")){ skills.push("Skill Check: Society");}
  if(game.settings.get("voidus-blind-roll-skills", "hideStealth")){ skills.push("Skill Check: Stealth");}
  if(game.settings.get("voidus-blind-roll-skills", "hideSurvival")){ skills.push("Skill Check: Survival");}
  if(game.settings.get("voidus-blind-roll-skills", "hideThievery")){ skills.push("Skill Check: Thievery");}
  if(game.settings.get("voidus-blind-roll-skills", "hideOccultism")){ skills.push("Skill Check: Occultism");}
  //Perception
  if(game.settings.get("voidus-blind-roll-skills", "hidePerception")){ skills.push("Perception Check");}
  // saving throws
  if(game.settings.get("voidus-blind-roll-skills", "hideSaves")){ skills.push("Saving Throw: Reflex");}
  if(game.settings.get("voidus-blind-roll-skills", "hideSaves")){ skills.push("Saving Throw: Will");}
  if(game.settings.get("voidus-blind-roll-skills", "hideSaves")){ skills.push("Saving Throw: Fortitude");}
  return skills;
}
