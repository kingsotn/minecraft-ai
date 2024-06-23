async function craftCraftingTable(bot) {
  // Craft oak planks from oak logs
  await craftItem(bot, "oak_planks", 1);
  bot.chat("Crafted oak planks.");

  // Craft a crafting table using oak planks
  await craftItem(bot, "crafting_table", 1);
  bot.chat("Crafted a crafting table.");
}