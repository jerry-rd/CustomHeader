"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_tools = require("../../utils/tools.js");
const stores_user = require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  (_easycom_uni_icons2 + _easycom_uni_calendar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
if (!Math) {
  (HeaderBar + _easycom_uni_icons + _easycom_uni_calendar)();
}
const HeaderBar = () => "../../components/header-bar/Header.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "mine",
  setup(__props) {
    const calendarRef = common_vendor.ref(null);
    const userStore = stores_user.useUserStore();
    const goMineView = () => {
      utils_tools.navigationTo({ url: "/pages/mine/setting" }, "navigateTo");
    };
    const dateValue = common_vendor.computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = calendarRef.value) == null ? void 0 : _a.nowDate) == null ? void 0 : _b.year) + "-" + ((_d = (_c = calendarRef.value) == null ? void 0 : _c.nowDate) == null ? void 0 : _d.month);
    });
    const prevMonth = () => {
      var _a;
      (_a = calendarRef.value) == null ? void 0 : _a.pre();
    };
    const nextMonth = () => {
      var _a;
      (_a = calendarRef.value) == null ? void 0 : _a.next();
    };
    const scanAction = () => {
      common_vendor.index.scanCode({
        success(res) {
          console.log(res);
        }
      });
    };
    common_vendor.onLoad(() => {
      userStore.getUserInfo();
    });
    common_vendor.onMounted(() => {
      console.log(calendarRef.value);
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(goMineView),
        c: common_assets._imports_1,
        d: common_vendor.o(scanAction),
        e: common_vendor.p({
          isShowBack: false
        }),
        f: (_b = (_a = common_vendor.unref(userStore)) == null ? void 0 : _a.userInfo) == null ? void 0 : _b.avatar,
        g: common_vendor.t((_d = (_c = common_vendor.unref(userStore)) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.nickname),
        h: common_assets._imports_2,
        i: common_vendor.o(prevMonth),
        j: common_vendor.p({
          type: "left",
          size: "16"
        }),
        k: common_vendor.t(dateValue.value),
        l: common_vendor.o(nextMonth),
        m: common_vendor.p({
          type: "right",
          size: "16"
        }),
        n: common_vendor.sr(calendarRef, "7c2ebfa5-3", {
          "k": "calendarRef"
        }),
        o: common_vendor.p({
          showMonth: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"]]);
wx.createPage(MiniProgramPage);
