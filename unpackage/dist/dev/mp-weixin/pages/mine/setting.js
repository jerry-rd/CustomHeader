"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_tools = require("../../utils/tools.js");
const stores_user = require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "setting",
  setup(__props) {
    var _a;
    const userStore = stores_user.useUserStore();
    const inputDialog = common_vendor.ref(null);
    const nickName = common_vendor.ref((_a = userStore == null ? void 0 : userStore.userInfo) == null ? void 0 : _a.nickname);
    const goBindPhone = () => {
      utils_tools.navigationTo({ url: "/pages/mine/bindPhone" }, "navigateTo");
    };
    const goLogout = () => {
      userStore.logoutAction();
    };
    const changeUserAvatar = () => {
      common_vendor.index.navigateTo({ url: "/pages/mine/avatarCropper" });
    };
    const showNamePop = () => {
      inputDialog.value.open();
    };
    const dialogInputConfirm = (e) => {
      if (!e)
        return common_vendor.index.showToast({ title: "请输入账号名称", icon: "none", duration: 2e3 });
      userStore.updateUserInfo({ nickname: e });
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
      var _a2, _b, _c, _d, _e, _f;
      return {
        a: (_b = (_a2 = common_vendor.unref(userStore)) == null ? void 0 : _a2.userInfo) == null ? void 0 : _b.avatar,
        b: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        c: common_vendor.o(changeUserAvatar),
        d: common_vendor.t((_d = (_c = common_vendor.unref(userStore)) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.nickname),
        e: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        f: common_vendor.o(showNamePop),
        g: common_vendor.t((_f = (_e = common_vendor.unref(userStore)) == null ? void 0 : _e.userInfo) == null ? void 0 : _f.phone),
        h: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        i: common_vendor.o(goBindPhone),
        j: common_vendor.t("未绑定"),
        k: common_vendor.p({
          type: "forward",
          size: "16",
          color: "#999"
        }),
        l: common_vendor.o(goLogout),
        m: common_vendor.o(getPrivacyContract),
        n: common_vendor.sr("inputClose", "0bb48146-5,0bb48146-4"),
        o: common_vendor.o(dialogInputConfirm),
        p: common_vendor.o(($event) => nickName.value = $event),
        q: common_vendor.p({
          mode: "input",
          title: "账号名称",
          placeholder: "请输入账号名称",
          modelValue: nickName.value
        }),
        r: common_vendor.sr(inputDialog, "0bb48146-4", {
          "k": "inputDialog"
        }),
        s: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0bb48146"]]);
wx.createPage(MiniProgramPage);
