import simple from "./config/simple.js";
import pluginUi from "./config/pluginUi.js";
import windowUI from "./config/windowUI.js";
import shortcuts from "./config/shortcuts.js";
import contextMenu from "./config/contextMenu.js";
import state from "./config/state.js";

const configs = new Map([
  ["simple", simple],
  ["pluginUi", pluginUi],
  ["windowUI", windowUI],
  ["shortcuts", shortcuts],
  ["contextMenu", contextMenu],
  ["state", state],
]);

function makeViewer(config, id) {
  if (configs.has(config)) {
    return configs.get(config)(id);
  } else {
    throw new Error(
      `Impossible to make viewer because a config named ${config} does not exist.`
    );
  }
}

export default makeViewer;