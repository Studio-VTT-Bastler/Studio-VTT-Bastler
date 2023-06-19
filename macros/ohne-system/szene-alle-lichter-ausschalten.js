let dialogEditor = new Dialog({
    title: `Light Switch`,
    content: `Turn Lights on the Scene on/off`,
    buttons: {
      off: {
        label: `off`,
        callback: () => {
            canvas.lighting.updateAll({hidden: false});
          dialogEditor.render(true);
        }
      },
      on: {
        label: `on`,
        callback: () => {
            canvas.lighting.updateAll({hidden: true});
          dialogEditor.render(true);
        }
      },
    },
    default: "close",
    close: () => {}
  });
dialogEditor.render(true)
