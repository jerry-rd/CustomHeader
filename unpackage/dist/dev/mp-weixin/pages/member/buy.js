"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  HeaderBar();
}
const HeaderBar = () => "../../components/header-bar/Header.js";
const backImageUrl = "../../static/header-close.png";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "buy",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isShowBack: true,
          isHideMenu: true,
          backImageUrl
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-61bae21a"]]);
wx.createPage(MiniProgramPage);
