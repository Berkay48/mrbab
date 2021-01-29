const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
let tag = "is comeback?";
const aktif = message.guild.members.cache.filter(aktif => aktif.presence.status != "offline").size
const toplam = message.guild.memberCount
const ses = message.guild.channels.cache.filter(channel => channel.type === "voice").map(channel => channel.members.size).reduce((a, b) => a + b)
const tagli = message.guild.members.cache.filter(t => t.user.username.includes(tag)).size
const booster = message.guild.roles.cache.get('800871636151566376').members.size


const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setDescription(`**Toplam Üye ・ \`${toplam}\`
Aktif Üye ・ \`${aktif}\`
Sesteki Üye ・ \`${ses}\`
Taglı Üye・ \`${tagli}\`
Booster Üye ・ \`${booster}\`**`)
message.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};