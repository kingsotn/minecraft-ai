async function checkCoalInInventory(bot) {
  const coalCount = bot.inventory.count(mcData.itemsByName.coal.id);
  if (coalCount >= 1) {
    bot.chat("Task completed. Found 1 coal in inventory.");
  } else {
    bot.chat("Task not completed. No coal found in inventory.");
  }
}