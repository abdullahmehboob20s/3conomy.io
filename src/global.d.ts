declare interface Window {
    MoonPayWebSdk: {
      init: (options: {
        flow: string;
        environment: string;
        variant: string;
        params: {
          apiKey: string;
          baseCurrencyCode: string;
          baseCurrencyAmount: string;
          defaultCurrencyCode: string;
        };
      }) => { show: () => void };
    };
  }
  