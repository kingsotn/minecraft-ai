async function equipNetheriteSword(bot) {
  // Find the netherite sword in the inventory
  const netheriteSword = bot.inventory.findInventoryItem(mcData.itemsByName.netherite_sword.id);

  // Equip the netherite sword
  if (netheriteSword) {
    await bot.equip(netheriteSword, "hand");
    bot.chat("Equipped netherite sword.");
  } else {
    bot.chat("Netherite sword not found in inventory.");
  }
}