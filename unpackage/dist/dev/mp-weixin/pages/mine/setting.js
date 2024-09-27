"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "setting",
  setup(__props) {
    const getPrivacyContract = () => {
      common_vendor.wx$1.openPrivacyContract({
        success: () => {
        },
        // 打开成功
        fail: () => {
        },
        // 打开失败
        complete: () => {
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        b: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        c: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        d: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        e: common_vendor.o(getPrivacyContract)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0bb48146"]]);
wx.createPage(MiniProgramPage);
