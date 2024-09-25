"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  HeaderBar();
}
const HeaderBar = () => "../../components/header-bar/Header.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "detail",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "详情"
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
