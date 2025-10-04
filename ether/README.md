# Ethers.js Sepolia测试网连接演示

这个项目演示了如何使用ethers.js连接Sepolia测试网。

## 功能特性

- ✅ 连接Sepolia测试网
- ✅ 获取网络信息（链ID、网络名称）
- ✅ 查询最新区块信息
- ✅ 查询ETH余额
- ✅ 获取Gas价格信息
- ✅ 连接状态检查

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 运行演示

```bash
node demo.js
```

## RPC端点配置

### 公共RPC端点（免费，无需注册）

```javascript
const SEPOLIA_RPC_URL = 'https://ethereum-sepolia.publicnode.com';
```

### Alchemy RPC端点（推荐）

1. 注册 [Alchemy](https://www.alchemy.com/) 账户
2. 创建新项目，选择Sepolia测试网
3. 获取API密钥
4. 更新配置：

```javascript
const SEPOLIA_RPC_URL = 'https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY';
```

### Infura RPC端点

1. 注册 [Infura](https://infura.io/) 账户
2. 创建新项目
3. 获取项目ID
4. 更新配置：

```javascript
const SEPOLIA_RPC_URL = 'https://sepolia.infura.io/v3/YOUR_PROJECT_ID';
```

## 其他可用的公共RPC端点

- `https://sepolia.drpc.org`
- `https://ethereum-sepolia.publicnode.com`

## 配置文件

查看 `config.example.js` 文件了解如何配置你的RPC端点。

## 输出示例

```
=== Sepolia测试网连接演示 ===

1. 检查Sepolia网络信息:
   网络名称: sepolia
   链ID: 11155111
   是否为测试网: true

2. 获取最新区块信息:
   最新区块号: 12345678
   区块哈希: 0x...
   区块时间戳: 2024/1/1 12:00:00

3. 查询Vitalik的Sepolia ETH余额:
   Vitalik地址: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
   Sepolia ETH余额: 0.0 ETH

4. 获取当前Gas价格:
   Gas价格: 0.1 Gwei
   Max Fee: 0.1 Gwei
   Max Priority Fee: 0.1 Gwei

5. 连接状态检查:
   Sepolia网络连接状态: ✅ 已连接
```

## 故障排除

如果连接失败，请检查：

1. 网络连接是否正常
2. RPC端点URL是否正确
3. 如果使用Alchemy或Infura，请确保API密钥正确
4. 尝试使用其他公共RPC端点
