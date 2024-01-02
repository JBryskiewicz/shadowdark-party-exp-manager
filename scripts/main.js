import { experiencePanel } from "./experiencePanel.js";

console.log("Shadowdark RPG - Party experience manager");

Hooks.on("init", function () {
  addTokenControlsButton();
});

function addTokenControlsButton() {
  const addButton = (controls, button) => {
    controls.push(button);
    return controls;
  };

  Hooks.on("getSceneControlButtons", (controls) => {
    const tokenControlsButton = controls.find(
      (button) => button.name === "token"
    );

    if (tokenControlsButton) {
      addButton(tokenControlsButton.tools, {
        name: "expButton",
        title: "Exp manager",
        icon: "fas fa-star",
        onClick: () => {
          experiencePanel();
        },
        button: true,
        visible: game.user.isGM,
      });
    }
  });
}
