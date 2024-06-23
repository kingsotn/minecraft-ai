async function mineWoodLog(bot) {
  const woodLogNames = ["oak_log", "birch_log", "spruce_log", "jungle_log", "acacia_log", "dark_oak_log", "mangrove_log"];

  // Find a wood log block
  const woodLogBlock = await exploreUntil(bot, new Vec3(1, 0, 1), 120, () => {
    return bot.findBlock({
      matching: block => woodLogNames.includes(block.name),
      maxDistance: 32
    });
  });
  if (!woodLogBlock) {
    bot.chat("Could not find a wood log.");
    return;
  }

  // Mine the wood log block
  await mineBlock(bot, woodLogBlock.name, 1);
  bot.chat("Wood log mined.");

  // Check the inventory to ensure that the bot has mined a wood log
  const finalWoodLogs = bot.inventory.count(mcData.itemsByName[woodLogBlock.name].id);
  if (finalWoodLogs >= 1) {
    bot.chat("Successfully mined a wood log.");
  } else {
    bot.chat("Failed to mine a wood log.");
  }
}