import { client } from '..';
export function status() {
    client.user?.setActivity('Portal 1 & 2', { type: 'PLAYING' });
}