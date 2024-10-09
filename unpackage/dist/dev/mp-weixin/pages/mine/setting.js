"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_tools = require("../../utils/tools.js");
const stores_user = require("../../stores/user.js");
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
    const userStore = stores_user.useUserStore();
    const goBindPhone = () => {
      utils_tools.navigationTo({ url: "/pages/mine/bindPhone" }, "navigateTo");
    };
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
      var _a, _b, _c, _d, _e, _f;
      return {
        a: (_b = (_a = common_vendor.unref(userStore)) == null ? void 0 : _a.userInfo) == null ? void 0 : _b.avatar,
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
        d: common_vendor.t((_d = (_c = common_vendor.unref(userStore)) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.phone),
        e: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        f: common_vendor.o(goBindPhone),
        g: common_vendor.t((_f = (_e = common_vendor.unref(userStore)) == null ? void 0 : _e.userInfo) == null ? void 0 : _f.nickname),
        h: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        i: common_vendor.o(getPrivacyContract)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0bb48146"]]);
wx.createPage(MiniProgramPage);
