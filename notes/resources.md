## Resources  
---

#### Generative Tools
- [[HashLips] Art Engine](https://github.com/HashLips/hashlips_art_engine)

#### Meta Data Tools
- [Safe NFT Metadata Provider](https://github.com/hashlips-lab/safe-nft-metadata-provider)
- [NextJS static](https://gist.github.com/ximxim/1a7c69f9b6c8714f686aa5f6a6f08ca9)

#### Frontend Tools and Dapps
- [[HashLips] HashLips NFT minting dapp](https://github.com/HashLips/hashlips_nft_minting_dapp)
- 

#### APIs for Data
- [NFT API (Moralis)](https://github.com/nft-api/nft-api)

#### Contracts
- [[HashLips] HashLips NFT contract](https://github.com/HashLips/hashlips_nft_contract)

#### Docs & Writeups
- [[Pinata Medium] How To Prevent NFT Trait Sniping In Your PFP Project](https://medium.com/pinata/how-to-prevent-nft-trait-sniping-in-your-pfp-project-506f17ff07d6)
- [[Alchemy] NFT Minter Tutorial: How to Create a Full Stack DApp](https://docs.alchemy.com/docs/nft-minter)
- [[NFTSchool.dev] Mint with NFT.storage and Polygon](https://nftschool.dev/tutorial/mint-nftstorage-polygon/#minting-your-nft)
- [[rsk] Introduction | Deploy an NFT project on the RSK Testnet](https://developers.rsk.co/guides/nft/)
- [Minting your own NFTs using Next JS and Thirdweb](https://rkazi103.hashnode.dev/minting-nfts-next-js-thirdweb)
- [Fullstack NFT Minting Dapp Using Next.js, Hardhat, Ethers.js, Alchemy, MetaMask, and TailwindCSS](https://javascript.plainenglish.io/fullstack-nft-minting-dapp-using-next-js-hardhat-ethers-js-alchemy-metamask-and-tailwindcss-145e0ef41d26)
- [[Decent Labs] How To Keep Your NFTs Secret Until Minted](https://www.decentlabs.io/blog/how-to-keep-your-nfts-secret-until-minted)
- [[ImmutableX] NFT Minting Tutorial](https://docs.x.immutable.com/docs/zero-to-hero-nft-minting/)
  - [[git] Immutable X Examples](https://github.com/immutable/imx-examples)
- [[ChainStack]The ultimate guide to NFTs: From concept to market success](https://chainstack.com/ultimate-guide-to-nfts/)

#### YoutubeTuts
- [[HashLips] How to create an NFT collection - Ultimate guide](https://www.youtube.com/watch?v=fzH7Gjadmj0)
-   [Create a Solana NFT collection - Ultimate guide (devnet)](https://www.youtube.com/watch?v=35RO0lAEIxE) (solana part 1)
    -   [Create a Solana NFT collection ultimate guide V2 Update](https://www.youtube.com/watch?v=S7ZgRxeqRDY) (solana part 2)
-   [Rust Solana Tutorial #7 - Mint NFTs with Rust!](https://www.youtube.com/watch?v=NSF6PmWUK1o&t) (concept of solana nfts, accounts, spl)
-   ~~[Sniper proof NFT metadata (advanced)](https://www.youtube.com/watch?v=fO5nT-TCIZs)(meta data api)~~  
-   [How to protect your NFTs from snipers (v2.x)](https://www.youtube.com/watch?v=putK0ToTdhY)  **V2**
    -   Depends on: [[hashlips-labs repo]: Collection Data Updater](https://github.com/hashlips-lab/collection-data-updater) (mid strat)
      -   Implements a `CollectionDataUpdater` to listen to contract events then reveal data for only those that are minted.
      -   Other notetable objects: `ERC721Contract`, `ERC721CollectionStatusProvider`
      -   `ERC721Contract extends Ethers.js's Contract and listens to contract events via loop to update api.`
      -   Runs via `collectionDataUpdater.start()`

#### Sniping Hacks?

#### Repositories
- Evms
- Solana