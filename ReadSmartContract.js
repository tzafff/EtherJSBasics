const {ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/8236d0cc2d524459b992fcf226ae3a69`);


const walletAddress =  "0x4bE9EB7732b649563583E7bc09C12A77E9A56475";
const walletAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contractRead = async() =>{
    const wallerContract = new ethers.Contract(
        walletAddress,
        walletAbi,
        provider
    )
    //console.log(wallerContract)

    // const contractName = await wallerContract.name();
    // console.log(contractName);

    // const num = await wallerContract.getValue();
    // console.log(num.toString());

    const contractBalance = await wallerContract.contractBalance()
    const balethContract = ethers.utils.formatEther(contractBalance);
    console.log("Contract Balance: ", balethContract);

    // const userBalance = await wallerContract.accountBalance("0x8D85e590D1109CCc55e54A9e495b023E543b521E");
    // const userBalanceEth = ethers.utils.formatEther(userBalance);
    // console.log("User Balance", userBalanceEth);
}

contractRead();