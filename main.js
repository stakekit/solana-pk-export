const bip39 = require("bip39");
const bip32 = require("bip32");
const { Keypair } = require("@solana/web3.js");
const bs58 = require('bs58');

const [, , mnemonic] = process.argv;

const STEAKWALLET_SOLANA_DERIVATION_PATH = "m/44'/501'/0'/0'";


const main = async () =>{
  if (!bip39.validateMnemonic(mnemonic)) {
    console.log("Invalid mnemonic");
    return;
  }

  const seed = await bip39.mnemonicToSeed(mnemonic);

    const node = bip32.fromSeed(seed);
    const base = node.derivePath(STEAKWALLET_SOLANA_DERIVATION_PATH);
    const keyPair = Keypair.fromSeed(base.privateKey)

    console.log(`Account id (Address): ${keyPair.publicKey.toBase58()}`);
    console.log(`Private key: ${bs58.encode(keyPair.secretKey)}`);
  }

main()