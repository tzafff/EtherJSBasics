const {ethers} = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/8236d0cc2d524459b992fcf226ae3a69`);

const queryBlockchain = async () =>{
    //const block = await provider.getBlockNumber();
    //console.log(block);

    const balance = await provider.getBalance("0x8D85e590D1109CCc55e54A9e495b023E543b521E");
    console.log("Account Balance in BN: ",balance);

    const balanceEther = ethers.utils.formatEther(balance)
    console.log("Account Balance in Ether: ",balanceEther)

    const balanceWei = ethers.utils.parseEther(balanceEther)
    console.log("Account Balance in Ether: ",balanceWei.toString())
}
queryBlockchain();
//console.log(provider);