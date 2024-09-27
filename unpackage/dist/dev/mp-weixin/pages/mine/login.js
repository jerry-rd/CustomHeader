"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (HeaderBar + _easycom_uni_easyinput)();
}
const HeaderBar = () => "../../components/header-bar/Header.js";
const backImageUrl = "../../static/header-close.png";
const placeholderStyle = "color:#999999;font-size:12px";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    const phone = common_vendor.ref("");
    const code = common_vendor.ref("");
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
          isShowBack: true,
          isHideMenu: true,
          backImageUrl
        }),
        b: common_vendor.o(($event) => phone.value = $event),
        c: common_vendor.p({
          maxlength: "11",
          type: "number",
          placeholderStyle,
          placeholder: "请输入手机号",
          modelValue: phone.value
        }),
        d: common_vendor.o(($event) => code.value = $event),
        e: common_vendor.p({
          modelValue: code.value
        }),
        f: common_vendor.o(getPrivacyContract)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7110b05c"]]);
wx.createPage(MiniProgramPage);
