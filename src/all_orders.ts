import { WSClient } from '@0x/mesh-rpc-client';

(async () => {
    const c = new WSClient("ws://localhost:60557");

    const getOrdersResponse = await c.getOrdersAsync();

    console.log(`Got ${getOrdersResponse.ordersInfos.length} orders!`);

    process.exit(0);
})()
