"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_tools = require("../../utils/tools.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (HeaderBar + _easycom_uni_icons)();
}
const HeaderBar = () => "../../components/header-bar/Header.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "mine",
  setup(__props) {
    const goMineView = () => {
      utils_tools.navigationTo({ url: "/pages/mine/setting" }, "navigateTo");
    };
    const scanAction = () => {
      common_vendor.index.scanCode({
        success(res) {
          console.log(res);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(goMineView),
        c: common_assets._imports_1,
        d: common_vendor.o(scanAction),
        e: common_vendor.p({
          isShowBack: false
        }),
        f: common_assets._imports_2,
        g: common_vendor.p({
          type: "left",
          size: "16"
        }),
        h: common_vendor.p({
          type: "right",
          size: "16"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"]]);
wx.createPage(MiniProgramPage);
