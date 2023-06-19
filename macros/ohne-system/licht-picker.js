function tokenUpdate(data) {
  canvas.tokens.controlled.map(token => token.document.update({light: data}));
}

let torchAnimation = {"type": "torch", "speed": 1, "intensity": 1, "reverse": false};

let dialogEditor = new Dialog({
  title: `Token Light Picker`,
  content: `Pick the light source the selected token is holding.`,
  buttons: {
    none: {
      label: `None`,
      callback: () => {
        tokenUpdate({"dim": 0, "bright": 0, "angle": 360, "luminosity": 0.5});
        dialogEditor.render(true);
      }
    },
    torch: {
      label: `Torch`,
      callback: () => {
        tokenUpdate({"dim": 12, "bright": 6, "angle": 360, "luminosity": 0.5, "color": "#d17a29", "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    light: {
      label: `Light cantrip`,
      callback: () => {
        tokenUpdate({"dim": 12, "bright": 6, "angle": 360, "luminosity": 0.5, "color": "#3c86b4", "coloration": 0.5, "animation": {"type": "none"}});
        dialogEditor.render(true);
      }
    },
    lamp: {
      label: `Lamp`,
      callback: () => {
        tokenUpdate({"dim": 12, "bright": 6, "angle": 360, "luminosity": 0.5, "color": "#d17a29", "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    bullseye: {
      label: `Bullseye Lantern`,
      callback: () => {
        tokenUpdate({"dim": 36, "bright": 18, "angle": 45, "luminosity": 0.5, "color": "#d17a29", "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    hoodedOpen: {
      label: `Hooded Lantern (Open)`,
      callback: () => {
        tokenUpdate({"dim": 18, "bright": 9, "angle": 360, "luminosity": 0.5, "color": "#d17a29", "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    hoodedClosed: {
      label: `Hooded Lantern (Closed)`,
      callback: () => {
        tokenUpdate({"dim": 1.5, "bright": 0, "angle": 360, "luminosity": 0.5, "color": "#d17a29", "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    darkness: {
      label: `Darkness spell`,
      callback: () => {
        tokenUpdate({"dim": 0, "bright": 4.5, "angle": 360, "luminosity": -0.5, "animation": {"type": "none"}});
        dialogEditor.render(true);
      }
    },
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Close`
    },
  },
  default: "close",
  close: () => {}
});

dialogEditor.render(true)
