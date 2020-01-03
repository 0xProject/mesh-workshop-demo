import { WSClient } from '@0x/mesh-rpc-client';

(async () => {
    const c = new WSClient("ws://localhost:60557");

    const orders = await c.getOrdersAsync();

    console.log(`Got ${orders.ordersInfos.length} orders!`);

    process.exit(0);
})()
