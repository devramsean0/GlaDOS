import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message, TextChannel } from 'discord.js';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'A basic command'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message) {
		if (message.channel.type === "DM") return;
		await message.channel.send('**Want You Gone**')
		const thread = await (message.channel as TextChannel).threads.create({
			name: 'Want You Gone',
			autoArchiveDuration: 60,
			reason: 'WantYouGone',
		});
		thread.send('Well here we are again')
		thread.send(`It's always such a pleasure`)
		thread.send('Remember when you tried to kill me twice?')
		thread.send('Oh how we laughed and laughed')
		thread.send(`Except I wasn't laughing`)
		thread.send('Under the circumstances')
		thread.send(`I've been shockingly nice`)
		thread.send('You want your freedom? Take it')
		thread.send(`That's what I'm counting on`)
		thread.send('I used to want you dead')
		thread.send('But now I only want you gone')
		thread.send('She was a lot like you')
		thread.send('Maybe not quite as heavy')
		thread.send('Now little Caroline is in here too')
		thread.send('One day they woke me up')
		thread.send('So I could live forever')
		thread.send(`It's such a shame the same`)
		thread.send('Will never happen to you')
		thread.send(`You've got your short sad life left`)
		thread.send(`That's what I'm counting on`)
		thread.send(`I'll let you get right to it`)
		thread.send('Now I only want you gone')
		thread.send('Goodbye my only friend')
		thread.send('Oh, did you think I meant you?')
		thread.send('That would be funny')
		thread.send(`if it weren't so sad`)
		thread.send('Well you have been replaced')
		thread.send(`I don't need anyone now`)
		thread.send('When I delete you maybe')
		thread.send(`I'll stop feeling so bad`)
		thread.send('Go make some new disaster')
		thread.send(`That's what I'm counting on`)
		thread.send(`You're someone else's problem`)
		thread.send('Now I only want you gone')
		thread.send('Now I only want you gone')
		thread.send('Now I only want you gone')
	}
}
