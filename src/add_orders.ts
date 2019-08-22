import { WSClient, SignedOrder, BigNumber } from '@0x/mesh-rpc-client';

(async () => {
    const c = new WSClient("http://localhost:60557");

    const signedOrder: SignedOrder = {
		"senderAddress": "0x0000000000000000000000000000000000000000",
		"makerAddress": "0xa3ece5d5b6319fa785efc10d3112769a46c6e149",
		"takerAddress": "0x0000000000000000000000000000000000000000",
		"makerFee": new BigNumber("0"),
		"takerFee": new BigNumber("0"),
		"makerAssetAmount": new BigNumber("1000000000000000000"),
		"takerAssetAmount": new BigNumber("5000000000000000000000"),
		"makerAssetData": "0xf47261b0000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498",
		"takerAssetData": "0xf47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
		"expirationTimeSeconds": new BigNumber("1582930800"),
		"feeRecipientAddress": "0x0000000000000000000000000000000000000000",
		"salt": new BigNumber("79647192857412995785862481550606049296443569911800580243943709886869665391255"),
		"signature": "0x1b9bfa1f0e692af37ac402833a43e87ce9f46b945d861875683b3c4c80805a75da04428dd9e59c622bfdf7eec2a86a861e3b10f647f63ff0990b651b8048340c4503",
		"exchangeAddress": "0x080bf510fcbf18b91105470639e9561022937712"
	};

    const result = await c.addOrdersAsync([signedOrder]);

    console.log(JSON.stringify(result, null, '\t'));

    process.exit(0);
})()
