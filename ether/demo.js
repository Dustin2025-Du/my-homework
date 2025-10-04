import { ethers } from "ethers";

// 使用公共RPC端点连接Sepolia测试网
// 你也可以使用Alchemy、Infura等服务提供的免费RPC端点
const SEPOLIA_RPC_URL = 'https://ethereum-sepolia.publicnode.com'; // 公共RPC端点
// 或者使用Alchemy: 'https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY'
// 或者使用Infura: 'https://sepolia.infura.io/v3/YOUR_PROJECT_ID'

const providerSepolia = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);

// 如果你有配置文件，可以这样导入：
// import { SEPOLIA_CONFIG } from './config.js';
// const providerSepolia = new ethers.JsonRpcProvider(SEPOLIA_CONFIG.rpcUrl);
async function checkSepoliaNetwork() {
    console.log("=== Sepolia测试网连接演示 ===\n");
    
    try {
        // 1. 检查网络信息
        console.log("1. 检查Sepolia网络信息:");
        const network = await providerSepolia.getNetwork();
        console.log(`   网络名称: ${network.name}`);
        console.log(`   链ID: ${network.chainId}`);
        console.log(`   是否为测试网: ${network.name === 'sepolia'}\n`);

        // 2. 获取最新区块信息
        console.log("2. 获取最新区块信息:");
        const blockNumber = await providerSepolia.getBlockNumber();
        console.log(`   最新区块号: ${blockNumber}`);
        
        const block = await providerSepolia.getBlock(blockNumber);
        console.log(`   区块哈希: ${block.hash}`);
        console.log(`   区块时间戳: ${new Date(block.timestamp * 1000).toLocaleString()}\n`);

        // 3. 查询Vitalik的ETH余额
        console.log("3. 查询Vitalik的Sepolia ETH余额:");
        const vitalikAddress = '0xe7a798c65a419Fcb343C537dF80dbB94b999baA0';
        const balanceSepolia = await providerSepolia.getBalance(vitalikAddress);
        console.log(`   Vitalik地址: ${vitalikAddress}`);
        console.log(`   Sepolia ETH余额: ${ethers.formatEther(balanceSepolia)} ETH\n`);

        // 4. 获取Gas价格
        console.log("4. 获取当前Gas价格:");
        const feeData = await providerSepolia.getFeeData();
        console.log(`   Gas价格: ${ethers.formatUnits(feeData.gasPrice, 'gwei')} Gwei`);
        console.log(`   Max Fee: ${ethers.formatUnits(feeData.maxFeePerGas, 'gwei')} Gwei`);
        console.log(`   Max Priority Fee: ${ethers.formatUnits(feeData.maxPriorityFeePerGas, 'gwei')} Gwei\n`);

        // 5. 检查连接状态
        console.log("5. 连接状态检查:");
        const isConnected = await providerSepolia.getNetwork().then(() => true).catch(() => false);
        console.log(`   Sepolia网络连接状态: ${isConnected ? '✅ 已连接' : '❌ 连接失败'}`);

    } catch (error) {
        console.error("❌ 连接Sepolia网络时出错:", error.message);
        console.log("\n💡 提示:");
        console.log("   - 请检查网络连接");
        console.log("   - 如果使用Alchemy或Infura，请确保API密钥正确");
        console.log("   - 可以尝试使用其他公共RPC端点");
    }
}

// 运行演示
checkSepoliaNetwork();