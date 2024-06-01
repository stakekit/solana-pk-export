## Intro

This is a tool to derive a Solana private key and Address from a mnemonic phrase using the Omni/Steakwallet derivation path.

## Prerequisites

You need to have proto tool version manager installed. See: https://moonrepo.dev/proto

```bash
curl -fsSL https://moonrepo.dev/install/proto.sh | bash
```

## Installation

Open up your terminal and CD into a place where you would like to store the repository folder (Desktop as an example)

```bash
cd ~/Desktop
```

Clone down the repository

```bash
git clone git@github.com:stakekit/solana-pk-export.git
```

CD into the project

```bash
cd solana-pk-export/
```

Install relevant tools (node, npm, and pnpm)

```bash
proto use
```

Install dependencies
```bash
pnpm install
```

## Usage
In the terminal, while in the ~Desktop/solana-pk-export folder, run
```bash
node main.js "ENTER YOUR MNEMONIC HERE"
```

The private key and account id should be logged in the console. Example:

```
Private key: xxxx
Account id (Address): xxx
```
