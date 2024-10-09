"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_tools = require("../../utils/tools.js");
if (!Array) {
  const _easycom_record_card2 = common_vendor.resolveComponent("record-card");
  _easycom_record_card2();
}
const _easycom_record_card = () => "../../components/record-card/record-card.js";
if (!Math) {
  (HeaderBar + _easycom_record_card)();
}
const HeaderBar = () => "../../components/header-bar/Header.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const records = common_vendor.ref([{}, {}, {}]);
    const toDetail = () => {
      utils_tools.navigationTo({ url: "/pages/mine/setting" }, "navigateTo");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "课程中心",
          isShowBack: false
        }),
        b: common_vendor.f(records.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: "1cf27b2a-1-" + i0
          };
        }),
        c: common_vendor.o(toDetail)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
