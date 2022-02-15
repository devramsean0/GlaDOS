import { client } from '..';
export function status() {
    client.user?.setActivity(`Portal 1 & 2 |  ${process.env.DEFAULT_PREFIX} music`, { type: 'PLAYING' });
}