const {ethers} =  require("ethers");

const RPC = 'https://goerli.infura.io/v3/6ca3fa2786f942e2beaabc797f62a43f' ;

const account1 = '0x04Db1d54dbBDd3a69163898c7233E7b2Ba8Cd36B';
const privateKey = 'd9d05f47e76ebabc21a64dfea1b213f320bdb1c39d72ef3435a08098ec410236' ;

const provider = new ethers.providers.JsonRpcProvider(
    RPC 
)

const wallet = new ethers.Wallet(privateKey , provider);

const contractAddress = '0x3Df24B9A362F4De204b0E67425e9ebDF662135A5';

const ABI = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "_transfer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transaction",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "callOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "num",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sum",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
    

async function call(){
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        wallet
    )
  console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`);
  console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`)

  const tx = await contract._transfer(account1 ,{
        value : ethers.utils.parseEther('0.05')
    })

  await tx.wait();

  console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`);

  console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`)
}
call();
