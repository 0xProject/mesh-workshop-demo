import { WSClient, OrderEvent } from '@0x/mesh-rpc-client';

(async () => {
    const c = new WSClient("ws://localhost:60557");

    await c.subscribeToOrdersAsync((orderEvents: OrderEvent[]) => {
        orderEvents.forEach(orderEvent => {
            console.log(orderEvent);
        })
    });
})()
