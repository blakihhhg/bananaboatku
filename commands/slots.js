const slots = ["🍎", "🍋", "🍇", "🍅", "7⃣"];

exports.run = async (client, message, args) => {
  
  const slotOne = slots[Math.floor(Math.random() * slots.length)];
  const slotTwo = slots[Math.floor(Math.random() * slots.length)];
  const slotThree = slots[Math.floor(Math.random() * slots.length)];
  const slotFour = slots[Math.floor(Math.random() * slots.length)];
  const slotFive = slots[Math.floor(Math.random() * slots.length)];
  const slotSix = slots[Math.floor(Math.random() * slots.length)];
  const slotSeven = slots[Math.floor(Math.random() * slots.length)];
  const slotEight = slots[Math.floor(Math.random() * slots.length)];
  const slotNine = slots[Math.floor(Math.random() * slots.length)];
  
  message.channel.send(`**[  :slot_machine: l SLOTS ]**\n------------------\n ${slotFive} : ${slotFour} : ${slotSix}\n\n ${slotTwo} : ${slotThree} : ${slotOne}  **<<**\n\n ${slotEight} : ${slotEight} : ${slotNine}\n------------------`).then(async m => {
    setTimeout(() => {
      m.edit(`**[  :slot_machine: l SLOTS ]**\n------------------\n ${slotEight} : ${slotNine} : ${slotFive}\n\n ${slotThree} : ${slotOne} : ${slotTwo}  **<<**\n\n ${slotFour} : ${slotSeven} : ${slotSix}\n------------------`)
    }, 1000)
        
  
  if (slotOne === slotTwo && slotOne === slotThree) {
    return setTimeout(() => {
      m.edit(`**[  :slot_machine: l SLOTS ]**\n------------------\n ${slotFour} : ${slotFive} : ${slotSix}\n\n ${slotOne} : ${slotTwo} : ${slotThree}  **<<**\n\n ${slotSeven} : ${slotEight} : ${slotNine}\n------------------\n| : : :  **WIN**  : : : |`)
    }, 2000)
  }
  return setTimeout(() => {
    m.edit(`**[  :slot_machine: l SLOTS ]**\n------------------\n ${slotFour} : ${slotFive} : ${slotSix}\n\n ${slotOne} : ${slotTwo} : ${slotThree}  **<<**\n\n ${slotSeven} : ${slotEight} : ${slotNine}\n------------------\n| : : :  **LOSE**  : : : |`)
  }, 2000)
  })
}