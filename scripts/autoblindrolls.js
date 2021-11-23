// Import Stuff
import { registerSettings } from "./settings.js";
import { getSkillModifierName } from "./skills.js";

// Register Game Settings & Listeners
Hooks.once("init", () => {
  registerSettings();

  $(document).on(
    "click",
    ".voidus-blind-roll-skills-help-card-toggle-btn",
    (ev) => {
      ev.preventDefault();
      game.settings.set("voidus-blind-roll-skills", "showHelpCards", false);
      ui.notifications.notify(
        "Voidus's Automatic Blind Rolls (2e): " +
          game.i18n.localize("BLINDROLLSKILLS.HelpCardsDisabled")
      );
    }
  );
});

// Make API available to others
Hooks.on(`ready`, () => {
  globalThis.AutoBlindRolls = autoBlindRolls();
});

// Catch chat message creations and make em blind if we need to
Hooks.on("preCreateChatMessage", (msg, options, userId) => {
  let makeRollBlind = false;
  let skillId = null;
  let saveId = null;
  let isInitiative = false;
  let isDeathSave = false;
  let isAttack = false;

  if (msg.data.flags) {
    skillId = msg.data.flags.pf2e?.modifierName;
    isInitiative = msg.data.flags.core?.initiativeRoll;
    isDeathSave = msg.data.flags.pf2e?.context?.type === "death";
    isAttack = msg.data.flags.pf2e?.context?.type === "attack-roll";
  }

  // Blind-ify Default 5e & MARS 5e Roll Cards
  // We check the dnd5e flags in the msg to see if it contains any of the skills,
  // or is a death save, or is an initiative roll, and hide accordingly
  if (skillId) {
    makeRollBlind = AutoBlindRolls.makeSkillBlind(skillId);
  } else if (isInitiative) {
    makeRollBlind = AutoBlindRolls.makeInitiativeBlind();
  } else if (isDeathSave) {
    makeRollBlind = AutoBlindRolls.makeDeathSaveBlind();
  } else if (isAttack) {
    makeRollBlind = AutoBlindRolls.makeAttackBlind();
  }

  // If we need to make the roll blindly, do it.
  if (makeRollBlind) {
    let gmUsers = ChatMessage.getWhisperRecipients("GM");
    let gmUserIds = gmUsers.map((u) => u.data._id);
    let updates = {
      blind: true,
      whisper: gmUserIds,
    };
    msg.data.update(updates);

    createAlertMsg();
  }
});

// Creates a chat message that explains to the user why the roll was made blindly.
// Does not display if the Show Help Cards client setting is disabled.
function createAlertMsg() {
  if (game.settings.get("voidus-blind-roll-skills", "showHelpCards")) {
    renderTemplate(
      "modules/voidus-blind-roll-skills/templates/helpCard.html",
      {}
    ).then((html) => {
      let options = {
        whisper: [game.user.id],
        speaker: {
          alias: game.i18n.localize("BLINDROLLSKILLS.ChatCardSpeaker"),
        },
        content: html,
      };
      ChatMessage.create(options);
    });
  }
}

// Open up for other people to use
export function autoBlindRolls() {
  // skill is a string, abbreviation for the skill. Ex: 'acr', 'ste', etc
  function makeSkillBlind(skill) {
    if (!skill) {
      console.error(
        "Voidus's Automatic Blind Rolls (2e): No skill abbreviation provided to AutoBlindRolls.makeSkillBlind"
      );
      return false;
    }
    let skillsToBlind = getSkillModifierName();
    return skillsToBlind.includes(skill);
  }

  // Hiding saves isn't a currently available feature; its existence here is purely so module authors
  // who wish to support the feature when it does go live can implement it ahead of time.
  // The bulk of what this method will do upon release is commented out here for your viewing pleasure.
  function makeSaveBlind() {
    // return game.settings.get("blind-roll-skills", "hideSaves");
    return false;
  }

  function makeDeathSaveBlind() {
    return game.settings.get("voidus-blind-roll-skills", "hideDeathSaves");
  }

  function makeInitiativeBlind() {
    return game.settings.get("voidus-blind-roll-skills", "hideInitiative");
  }

  // Hiding attacks isn't a currently available feature; its existence here is purely so module authors
  // who wish to support the feature when it does go live can implement it ahead of time.
  // The bulk of what this method will do upon release is commented out here for your viewing pleasure.
  function makeAttackBlind() {
    //return game.settings.get("blind-roll-skills", "hideAttacks");
    return false;
  }

  return {
    makeSkillBlind: makeSkillBlind,
    makeSaveBlind: makeSaveBlind,
    makeDeathSaveBlind: makeDeathSaveBlind,
    makeInitiativeBlind: makeInitiativeBlind,
    makeAttackBlind: makeAttackBlind,
  };
}
