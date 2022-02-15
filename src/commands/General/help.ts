import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'A basic command'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message) {
		return message.channel.send(`Help:\n # Credits: ${process.env.DEFAULT_PREFIX} credits\n # Music: ${process.env.DEFAULT_PREFIX} music\n # Ping:  ${process.env.DEFAULT_PREFIX} ping`);
	}
}
