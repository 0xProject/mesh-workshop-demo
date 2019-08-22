import { WSClient } from '@0x/mesh-rpc-client';

(async () => {
    const c = new WSClient("http://localhost:60557");

    const stats = await c.getStatsAsync();

    console.log(JSON.stringify(stats, null, '\t'));

    process.exit(0);
})()
