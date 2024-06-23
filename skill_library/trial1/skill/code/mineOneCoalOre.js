async function craftWoodenPickaxe(bot) {
  // Check if there are enough resources to craft a wooden pickaxe
  const stickCount = bot.inventory.count(mcData.itemsByName.stick.id);
  const plankCount = bot.inventory.count(mcData.itemsByName.oak_planks.id);
  if (stickCount < 2 || plankCount < 3) {
    bot.chat("Not enough resources to craft a wooden pickaxe.");
    return;
  }
  // Craft a wooden pickaxe
  await craftItem(bot, "wooden_pickaxe", 1);
}

async function mineOneCoalOre(bot) {
  // Check if the bot has a pickaxe in the inventory
  const pickaxe = bot.inventory.items().find(item => item.name.endsWith("_pickaxe"));

  // If not, craft a wooden pickaxe using the available resources in the inventory
  if (!pickaxe) {
    await craftWoodenPickaxe(bot);
  } else {
    // Equip the pickaxe
    await bot.equip(pickaxe, "hand");
  }

  // Use the exploreUntil function to find a coal_ore block
  const coalOre = await exploreUntil(bot, new Vec3(1, 0, 1), 60, () => {
    const coalOre = bot.findBlock({
      matching: block => block.name === "coal_ore",
      maxDistance: 32
    });
    return coalOre;
  });
  if (!coalOre) {
    bot.chat("Could not find a coal ore.");
    return;
  }

  // Mine the coal_ore block using the mineBlock function
  await mineBlock(bot, "coal_ore", 1);
  bot.chat("1 coal ore mined.");
}