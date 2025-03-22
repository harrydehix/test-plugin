import { Plugin } from "plugin-architecture-test";

export default Plugin.create({
    author: "harryyyy",
    name: "Test Plugin",
    configurableParameters: {
        p1: {
            label: "Parameter1",
            value: 23,
            choices: [["23", 11], ["1123", 11]],
            description: "A parameter"
        }
    },
    description: "This is a cool plugin!",
}).onInstall(async (ctx, cfg) => {
    console.log(`Installed ${cfg.name} for app ${ctx.getAppName()}!`);
    console.log(`Parameter is ${cfg.configurableParameters.p1}`);
}).onEnabled(async (ctx, cfg) => {
    console.log(`Enabled!`);
}).onDisabled(async (ctx, cfg) => {
    console.log(`Disabled!`);
}).onUninstall(async (ctx, cfg) => {
    console.log(`Uninstalled!`);
})