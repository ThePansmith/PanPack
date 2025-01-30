/** Bounty board recipes only accept oak. The dev has stated this is intended. https://github.com/ejektaflex/Bountiful/issues/271 */
if (Platform.isLoaded('compactmachines')) {
ServerEvents.recipes(event => {
        event.replaceInput({ id: "bountiful:crafting/bountyboard" }, "minecraft:oak_log", "#minecraft:logs")
        event.replaceInput({ id: "bountiful:crafting/bountyboard" }, "minecraft:oak_planks", "#minecraft:planks")
})
}
