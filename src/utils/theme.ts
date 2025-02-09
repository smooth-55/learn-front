import type { ThemeConfig } from "antd";

export const COLOR = {
  50: "#e0f1ff",
  100: "#b0d2ff",
  200: "#7fb0ff",
  300: "#4d8bff",
  400: "#1e79fe",
  500: "#076ee5",
  600: "#0062b3",
  700: "#004f81",
  800: "#003650",
  900: "#001620",
  blue1: "#0C3D67",
  border: "#B5B5B5",
};

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: COLOR["blue1"],
    borderRadius: 6,
    fontFamily: "Noto Sans JP",
  },

  components: {
    Input: {
      activeBorderColor: COLOR["blue1"],
      hoverBorderColor: COLOR["blue1"],
      borderRadius: 4,
      colorBorder: "#B7B7B7",
      fontSize: 16,
      lineHeight: 1,
      inputFontSize: 16,
    },

    Select: {
      borderRadius: 4,
      colorBorder: "#B7B7B7",
      optionSelectedBg: "#0000000f",
      hoverBorderColor: "none",
    },
    Button: {
      colorLink: COLOR["500"],
      colorLinkActive: COLOR["700"],
      colorLinkHover: COLOR["300"],
    },
    Table: {
      borderColor: COLOR["border"],
      colorBgContainer: "none",
      headerBg: "#566884",
      rowHoverBg: COLOR["50"],
      headerBorderRadius: 0,
      headerColor: "#FFFFFF",
    },
    Typography: {
      colorLink: COLOR["500"],
      colorLinkActive: COLOR["700"],
      colorLinkHover: COLOR["300"],
      linkHoverDecoration: "underline",
    },
    Tabs: {
      itemSelectedColor: COLOR["900"],
      titleFontSize: 26,
    },
    Pagination: {
      itemActiveBg: COLOR["blue1"],
      colorPrimary: "#ffffff",
    },
  },
};
