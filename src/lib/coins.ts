interface CoinsType {
  cartoonishLogo: string;
  logo: string;
}

const coins: Record<string, CoinsType> = {
  btc: {
    cartoonishLogo: "/images/coins/btc-cartoonish.svg",
    logo: "/images/coins/btc.svg",
  },
  eth: {
    cartoonishLogo: "/images/coins/eth-cartoonish.svg",
    logo: "/images/coins/eth.svg",
  },
  sol: {
    cartoonishLogo: "/images/coins/sol-cartoonish.svg",
    logo: "/images/coins/sol.svg",
  },
};

export default coins;
