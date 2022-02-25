require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food fire cram nominee coffee hen light army gesture'; 
let testAccounts = [
"0x0ff963a866dcabc2762116e1c689866fb6aa362f64d736b45f76f495ff7ed7cd",
"0x879af60f0b2d973c5627341a08d7cc82a46a52bd580b0998fd9aee6824289178",
"0x4e8d870ddeaaf54015982494225b5f5f3e33644ca443414695ddac35f0153d34",
"0x346394e81ba121decab5615f779f8232a1d1c29b438019c00e7475eb4497c04e",
"0xa14f895bb76a9ed81e3f48a1a09fadf5ab78938beb4efedbd8b4f371388ec960",
"0x5238cd0babee6774f6edd63028c66b8d7413bca3aa8d91a038d8c95fb9f5717b",
"0x4001a65ddbf64a92ab69755e493b8ceb80fceb87328ce3a4520e64f560138fc6",
"0xb258d9c912f65109309a570e9417d74494a7ad2629797cf9de73f2d3aa4a229a",
"0xce5b14ed6b4c698a0ea60cf9e2470daa0f272f3922f1dc04442d0fbc76c0464c",
"0x88727d42ff95c0b7edc245379a10bcfe2e62b4f1fb12beb5c27a6ff18d7db8d1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


