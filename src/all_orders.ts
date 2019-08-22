import { WSClient } from '@0x/mesh-rpc-client';

(async () => {
    const c = new WSClient("http://localhost:60557");

    const orders = await c.getOrdersAsync();

    console.log(`Got ${orders.length} orders!`);

    process.exit(0);
})()
