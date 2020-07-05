require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rifle noise arrow half praise army ghost'; 
let testAccounts = [
"0xf7102907f5eba837fb5e3207609c52a5df7dd680e279d2d022614368cfe3cf40",
"0xbad742779fdc6b16c5d1c98b9c3fe8fcddd3035ad3b47e68eb49e61ca2ea6509",
"0xfa00a5500e46e92024823a6ad1f9582d4dc54bfcad2a39fffb5b766262dd9a8a",
"0x4cd168379df9311c58c116395f21402b6883ec600baaff3cc12ec68b7bfb24f5",
"0x3c9b0de8ba2bd79ae5064e1b5296c7632df4252b0e1ae474c6c9fe58a18c3116",
"0xaba680e155e0ce335a779a5f624870c250f3b0ac3a0a903e58654b68c2f8c511",
"0x94f4b4e61e42349f2b565f1abb908b32af048ba46b57067d0a9125502997d900",
"0xb61200b074f8e8a1a25a6c65c1e4c9e674eedbe0a6a57e7f0a5b107927ca2034",
"0x5b0db80bb42854662e7ba5e6c2e8c0b35e674f2c1411d8f91aa5bf4019c2e334",
"0x50330c949c0df026592d8915392479cb50914f2352aa8cf01797967a7f9fe0bb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
