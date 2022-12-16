const {ethers} =  require("ethers");

0x07Db059C52a8DDA4443FbE6650a2704c1D0A5272

const RPC = 'https://goerli.infura.io/v3/6ca3fa2786f942e2beaabc797f62a43f' ;
const account = '0x7dB8269Cb39709D9889FfD9B3a82690fA982b0cd';

const provider = new ethers.providers.JsonRpcProvider(
    RPC 
)

async function call() {
  const bal = await provider.getBalance(account);
  console.log(ethers.utils.formatEther(bal));
}

call();


