"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_user = require("../../stores/user.js");
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
    const userStore = stores_user.useUserStore();
    const phone = common_vendor.ref("");
    const smsCode = common_vendor.ref("");
    const checked = common_vendor.ref(false);
    const phoneRegex = /^1[3-9]\d{9}$/;
    const checkedChange = (e) => {
      var _a;
      checked.value = (_a = e == null ? void 0 : e.detail) == null ? void 0 : _a.value.includes("1");
    };
    const getSmsCode = () => {
      if (!phoneRegex.test(phone.value)) {
        return common_vendor.index.showToast({ title: "号码格式错误", icon: "none", duration: 2e3 });
      }
      userStore.sendSmsCode({ phone: phone.value });
    };
    const loginBind = () => {
      if (!phoneRegex.test(phone.value)) {
        return common_vendor.index.showToast({ title: "号码格式错误", icon: "none", duration: 2e3 });
      }
      if (!smsCode.value) {
        return common_vendor.index.showToast({ title: "请输入验证码", icon: "none", duration: 2e3 });
      }
      if (!checked.value) {
        return common_vendor.index.showToast({ title: "请先阅读并同意协议", icon: "none", duration: 2e3 });
      }
      userStore.loginBySmsCode({ phone: phone.value, smsCode: smsCode.value });
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
      return common_vendor.e({
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
        d: common_vendor.unref(userStore).countDown === 0
      }, common_vendor.unref(userStore).countDown === 0 ? {
        e: common_vendor.o(getSmsCode)
      } : {
        f: common_vendor.t(common_vendor.unref(userStore).countDown)
      }, {
        g: common_vendor.o(($event) => smsCode.value = $event),
        h: common_vendor.p({
          maxlength: "6",
          modelValue: smsCode.value
        }),
        i: common_vendor.unref(userStore).isLogin || !checked.value,
        j: common_vendor.o(loginBind),
        k: common_vendor.o(checkedChange),
        l: common_vendor.o(getPrivacyContract)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7110b05c"]]);
wx.createPage(MiniProgramPage);
