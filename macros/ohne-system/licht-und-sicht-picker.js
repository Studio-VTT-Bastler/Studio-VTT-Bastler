// A macro for the Foundry virtual tabletop that lets a user configure their token's vision and lighting settings. This script is taken from Sky's foundry repo here: https://github.com/Sky-Captain-13/foundry/blob/master/scriptMacros/tokenVision.js.

let applyChanges = false;
new Dialog({
  title: `Token Vision Configuration`,
  content: `
    <form>
      <div class="form-group">
        <label>Vision Type:</label>
        <select id="vision-type" name="vision-type">
          <option value="nochange">No Change</option>
          <option value="dim0">Self</option>
          <option value="dim30">Darkvision (30 ft)</option>
          <option value="dim60">Darkvision (60 ft)</option>
          <option value="dim90">Darkvision (90 ft)</option>
          <option value="dim120">Darkvision (120 ft)</option>
          <option value="dim150">Darkvision (150 ft)</option>
          <option value="dim180">Darkvision (180 ft)</option>
          <option value="bright120">Devil's Sight (Warlock)</option>
        </select>
      </div>
      <div class="form-group">
        <label>Light Source:</label>
        <select id="light-source" name="light-source">
          <option value="nochange">No Change</option>
          <option value="none">None</option>
          <option value="candle">Candle</option>
          <option value="lamp">Lamp</option>
          <option value="bullseye">Lantern (Bullseye)</option>
          <option value="hooded-dim">Lantern (Hooded - Dim)</option>
          <option value="hooded-bright">Lantern (Hooded - Bright)</option>
          <option value="light">Light (Cantrip)</option>
          <option value="torch">Torch</option>
          <option value="moon-touched">Moon-Touched</option>
          <option value="darkness">Darkness(15-30)</option>
        </select>
      </div>
    </form>
    `,
  buttons: {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Apply Changes`,
      callback: () => applyChanges = true
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel Changes`
    },
  },
  default: "yes",
  close: async (html) => {
    if (applyChanges) {
      let updates = [];
      for ( let token of canvas.tokens.controlled ) {
        let visionType = html.find('[name="vision-type"]')[0].value || "none";
        let lightSource = html.find('[name="light-source"]')[0].value || "none";
        let range = 0;
        let visionMode = 0;
        let saturation = 0;
        let dimLight = 0;
        let brightLight = 0;
        let lightAngle = 360;
        let lockRotation = token.document.lockRotation;
        let lightAnimation = token.document.light.animation;
        let lightAlpha = token.document.light.alpha;
        let lightColor = token.document.light.color;
        let lightLuminosity = token.document.light.luminosity;
        const colorFire = "#f8c377";
        const colorWhite = "#ffffff";
        const colorMoonGlow = "#f4f1c9";
        // Get Vision Type Values
        switch (visionType) {
          case "dim0":
            range = 0;
            saturation = 0;
            visionMode = "basic";
            break;
          case "dim30":
            range = 30;
            saturation = -1;
            visionMode = "darkvision";
            break;
          case "dim60":
            range = 60;
            saturation = -1;
            visionMode = "darkvision";
            break;
          case "dim90":
            range = 90;
            saturation = -1;
            visionMode = "darkvision";
            break;
          case "dim120":
            range = 120;
            saturation = -1;
            visionMode = "darkvision";
            break;
          case "dim150":
            range = 150;
            saturation = -1;
            visionMode = "darkvision";
            break;
          case "dim180":
            range = 180;
            saturation = -1;
            visionMode = "darkvision";
            break;
          case "bright120":
            range = 120;
            saturation = 0;
            visionMode = "basic";
            break;
          case "nochange":
          default:
            range = token.document.sight.range;
            visionMode = token.document.sight.visionMode; 
            saturation = token.document.sight.saturation;
        }
        // Get Light Source Values
        switch (lightSource) {
          case "none":
            dimLight = 0;
            brightLight = 0;
            lightAnimation = {type: "none"};
            lightLuminosity = 0.5;
            break;
          case "candle":
            dimLight = 10;
            brightLight = 5;
            lightAnimation = {type: "flame", speed: 2, intensity: 2};
            lightColor = colorFire;
            lightAlpha = 0.15;
            lightLuminosity = 0.5;
            break;
          case "lamp":
            dimLight = 45;
            brightLight = 15;
            lightAnimation = {type: "flame", speed: 2, intensity: 3};
            lightColor = colorFire;
            lightAlpha = 0.15;
            lightLuminosity = 0.5;
            break;
          case "bullseye":
            dimLight = 120;
            brightLight = 60;
            lockRotation = false;
            lightAngle = 52.5;
            lightAnimation = {type: "flame", speed: 2, intensity: 2};
            lightColor = colorFire;
            lightAlpha = 0.15;
            lightLuminosity = 0.5;
            break;
          case "hooded-dim":
            dimLight = 5;
            brightLight = 0;
            lightAnimation = {type: "flame", speed: 2, intensity: 1};
            lightColor = colorFire;
            lightAlpha = 0.15;
            lightLuminosity = 0.5;
            break;
          case "hooded-bright":
            dimLight = 60;
            brightLight = 30;
            lightAnimation = {type: "flame", speed: 2, intensity: 2};
            lightColor = colorFire;
            lightAlpha = 0.15;
            lightLuminosity = 0.5;
            break;
          case "light":
            dimLight = 40;
            brightLight = 20;
            lightAnimation = {type: "none"};
            lightColor = colorWhite;
            lightAlpha = 0.15;
            lightLuminosity = 0.5;
            break;
          case "torch":
            dimLight = 40;
            brightLight = 20;
            lightAnimation = {type: "flame", speed: 2, intensity: 3};
            lightColor = colorFire;
            lightAlpha = 0.15;
            lightLuminosity = 0.5;
            break;
          case "moon-touched":
            dimLight = 30;
            brightLight = 15;
            lightAnimation = {type: "none"};
            lightColor = colorMoonGlow;
            lightLuminosity = 0.5;
            break;
          case "darkness":
            dimLight = 30;
            brightLight = 15;
            lightLuminosity = -1;
            lightAnimation = {type: "roiling", speed: 5, intensity: 3}
            break;
          case "nochange":
          default:
            dimLight = token.document.light.dim;
            brightLight = token.document.light.bright;
            lightAngle = token.document.light.angle;
            lockRotation = token.document.lockRotation;
            lightAnimation = token.document.light.animation;
            lightAlpha = token.document.light.alpha;
            lightColor = token.document.light.color;
            lightLuminosity = token.document.light.luminosity;
        }
        // Update Token
        updates.push({
          _id: token.id,
          sight: {
            enabled: true,
            range,
            visionMode,
            saturation,
          },
          lockRotation,
          light: {
            dim: dimLight,
            bright:  brightLight,
            angle: lightAngle,
            animation: lightAnimation,
            alpha: lightAlpha,
            color: lightColor,
            luminosity: lightLuminosity
          }
        });
      }
      canvas.scene.updateEmbeddedDocuments("Token", updates);
    }
  }
}).render(true);
