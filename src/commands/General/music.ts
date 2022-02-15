import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import { Message, MessageEmbed } from 'discord.js';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'A basic command'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message) {
		const embed = new MessageEmbed()
		.setColor('RANDOM')
		.setTitle('MUSIC')
		.setDescription(`Music commands \n # ${process.env.DEFAULT_PREFIX} stillalive | the still alive song`)
		message.channel.send({ embeds: [embed]})
	}
}
