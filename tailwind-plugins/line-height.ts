// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import plugin from "tailwindcss/plugin";

const lineHeightPlugin = plugin(
  function ({ theme, matchUtilities }) {
    matchUtilities(
      {
        lh: (value) => ({
          // example -> lh-1, lh-1.4
          "line-height": `${value} !important`,
        }),
      },
      { values: theme("lineHeightsValues"), type: "number" } // telling tailwindcss to get values from `lineHeightsValues`
    );
  },
  {
    theme: {
      lineHeightsValues: {
        1: "1",
        1.1: "1.1",
        1.2: "1.2",
        1.3: "1.3",
        1.4: "1.4",
        1.5: "1.5",
        1.6: "1.6",
        1.7: "1.7",
        1.8: "1.8",
        1.9: "1.9",
      },
    },
  }
);

export default lineHeightPlugin;
