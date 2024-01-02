import { experiencePanelForm } from "../templates/experiencePanelForm.js";

const checkLevelUp = (actorLevel, actorXP) => {
  return actorXP >= actorLevel * 10 ? true : false;
};

export const experiencePanel = () => {
  //get only active users
  const activeUsers = game.users.filter((user) => user.active);

  // get characters' id from each player
  const charIDs = activeUsers
    .map((user) => user._source.character)
    .filter((id) => id !== null);
  // get actor list by id
  const actorList = charIDs.map((id) => game.actors.get(id));
  const numberOfActors = actorList.length;

  new Dialog({
    title: "Party's experience Panel",
    content: experiencePanelForm(actorList, numberOfActors),
    buttons: {
      ok: {
        label: "Add EXP",
        callback: (html) => {
          for (let i = 0; i < numberOfActors; i++) {
            const currentLevel = parseInt(actorList[i].system.level.value);
            const currentXP = parseInt(actorList[i].system.level.xp);
            const increaseXP =
              html.find(`#exp${i}`).val() === ""
                ? 0
                : parseInt(html.find(`#exp${i}`).val());
            const totalXP = currentXP + increaseXP;

            if (checkLevelUp(currentLevel, totalXP)) {
              actorList[i].update({
                "system.level.xp": 0,
                "system.level.value": currentLevel + 1,
              });
            }
            if (!checkLevelUp(currentLevel, totalXP)) {
              actorList[i].update({
                "system.level.xp": totalXP,
              });
            }
          }
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
};
