import Logger from "./logger.js"
import Test from "./test.js"

let RELEASE = {
    level: Logger.Low,
    name: "Release"
}

let DEVEL = {
    logLevel: Logger.High,
    name: "Debug"
}

let Target = DEVEL;

function init() {
    Logger.init("Advanced Initiative", Target.logLevel);
    Logger.log(Logger.Low, `Advanced Initiative is initialized (${Target.name} target`);
}

function ready() {
    Logger.log(Logger.Low, "Advanced Initiative is ready");
    Test();
}

Hooks.on('init', init);
Hooks.on('ready', ready);
