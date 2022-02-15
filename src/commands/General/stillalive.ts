import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message, TextChannel, ThreadChannel } from 'discord.js';

@ApplyOptions<SubCommandPluginCommandOptions>({
	description: 'A basic command'
})
export class UserCommand extends SubCommandPluginCommand {
	public async messageRun(message: Message) {
		function StillAliveRepeated(thread: ThreadChannel) {
			thread.send('**Still alive**')
		}
		if (message.channel.type === "DM") return;
		await message.channel.send('**Still alive**')
		const thread = await (message.channel as TextChannel).threads.create({
			name: 'StillAlive',
			autoArchiveDuration: 60,
			reason: 'StillAlive',
		});
		thread.send('This was a triumph')
		thread.send(`I'm making a note here; "Huge success"`)
		thread.send(`It's hard to overstate`)
		thread.send('My satisfaction')
		thread.send('Aperture Science:')
		thread.send('We do what we must')
		thread.send('Because we can')
		thread.send('For the good of all of us')
		thread.send('Except the ones who are dead')
		thread.send(`But there's no sense crying`)
		thread.send('Over every mistake')
		thread.send('You just keep on trying')
		thread.send('Till you run out of cake')
		thread.send('And the science gets done')
		thread.send('And you make a neat gun')
		thread.send('For the people who are')
		thread.send('Still alive')
		thread.send(`I'm not even angry`)
		thread.send(`I'm being so sincere right now`)
		thread.send('Even though you broke my heart,')
		thread.send('And killed me')
		thread.send('And tore me to pieces')
		thread.send('And threw every piece into a fire')
		thread.send('As they burned it hurt because')
		thread.send('I was so happy for you')
		thread.send('Now, these points of data')
		thread.send('Make a beautiful line')
		thread.send(`And we're out of beta`)
		thread.send(`We're releasing on time`)
		thread.send(`So I'm GLaD I got burned`)
		thread.send('Think of all the things we learned-')
		thread.send('For the people who are')
		thread.send('Still alive')
		thread.send('Go ahead and leave me')
		thread.send(`I think I'd prefer to stay inside`)
		thread.send(`Maybe you'll find someone else`)
		thread.send('To help you?')
		thread.send('Maybe Black Mesa?')
		thread.send('That was a joke *Haha - Fat Chance*')
		thread.send('Anyway this cake is great')
		thread.send(`It's so delicious and moist`)
		thread.send('Look at me: still talking')
		thread.send(`When there's science to do`)
		thread.send('When I look out there,')
		thread.send(`It makes me GLaD I'm not you`)
		thread.send(`I've experiments to run`)
		thread.send('There is research to be done')
		thread.send('On the people who are')
		StillAliveRepeated(thread)
		thread.send('And believe me I am')
		StillAliveRepeated(thread)
		thread.send(`I'm doing science and I'm`)
		StillAliveRepeated(thread)
		thread.send(`I feel fantastic and I'm`)
		StillAliveRepeated(thread)
		thread.send(`While you're dying I'll be`)
		StillAliveRepeated(thread)
		thread.send(`And when you're dead I will be`)
		StillAliveRepeated(thread)
		StillAliveRepeated(thread)
	}
}
