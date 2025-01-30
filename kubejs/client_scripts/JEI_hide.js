/** /kjs inventory will be your friend. */

JEIEvents.hideItems(event => {
    //Cleanup
    event.hide('enderio:broken_spawner')
    event.hide('chiselsandbits:block_bit')
    event.hide(/ae2:facade/)
})

JEIEvents.addItems(event => {
    event.add(Item.of('ae2:facade', { item: "minecraft:iron_block" }))
    event.add('enderio:broken_spawner')
    event.add('enderio:reinforced_obsidian_block')
})
