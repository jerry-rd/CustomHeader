"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_tools = require("../../utils/tools.js");
if (!Math) {
  HeaderMenu();
}
const HeaderMenu = () => "./Menu.js";
const menuImage = `../../static/header-menu.png`;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Header",
  props: {
    title: {
      type: String,
      default: ""
    },
    pageCode: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: true
    },
    headerStyle: {
      type: Object,
      default: () => {
      }
    },
    backImageUrl: {
      type: String,
      default: `../../static/header-back.png`
    },
    titleStyle: {
      type: Object,
      default: () => {
      }
    },
    disableBackDefaultBehavior: {
      type: Boolean,
      default: false
    },
    isShowBack: {
      type: Boolean,
      default: true
    },
    isCompatibleMenubarArea: {
      type: Boolean,
      default: false
    },
    clearCount: {
      type: Number,
      default: 1
    },
    isToHome: {
      type: Boolean,
      default: false
    },
    isHideMenu: {
      type: Boolean,
      default: false
    },
    /******** h5端，app端需要传入自定义导航栏高度 *******/
    customNavHeight: {
      type: Number,
      default: 50
    }
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    let unread = common_vendor.ref(80);
    const safeAreaInsertState = common_vendor.reactive({
      navHeight: 0,
      customHeight: 0,
      menubarLeft: 0,
      statusBarHeight: 0,
      menubarRight: 0
    });
    const init = () => {
      const safeAreaInsertInfo = utils_tools.getSafeAreaInsertInfo();
      safeAreaInsertState.navHeight = safeAreaInsertInfo.navHeight;
      safeAreaInsertState.statusBarHeight = safeAreaInsertInfo.statusBarHeight;
      safeAreaInsertState.customHeight = safeAreaInsertInfo.menuButtonHeight;
      safeAreaInsertState.menubarLeft = safeAreaInsertInfo.menuButtonLeft;
      safeAreaInsertState.menubarRight = safeAreaInsertInfo.menuButtonWidth;
    };
    init();
    const isShowMenu = common_vendor.computed(() => {
      if (props.isHideMenu) {
        return false;
      }
      const pages = getCurrentPages();
      const url = pages[0].route || "";
      if (pages.length === 1 && !utils_tools.isTabBarUrl(url)) {
        return true;
      }
      return false;
    });
    const height = common_vendor.computed(() => {
      return {
        height: `${safeAreaInsertState.navHeight}rpx`
      };
    });
    const headerStyle = common_vendor.computed(() => {
      return {
        ...props.headerStyle,
        height: `${safeAreaInsertState.navHeight}rpx`
      };
    });
    const headerBarStyle = common_vendor.computed(() => {
      const paddingRight = props.isCompatibleMenubarArea ? `${safeAreaInsertState.menubarRight}rpx` : "0rpx";
      return {
        height: `${safeAreaInsertState.navHeight}rpx`,
        top: `${safeAreaInsertState.statusBarHeight}rpx`,
        paddingRight
      };
    });
    const headerBarContentStyle = common_vendor.computed(() => {
      return {
        height: `${safeAreaInsertState.customHeight}rpx`,
        lineHeight: `${safeAreaInsertState.customHeight}rpx`
      };
    });
    const headerBarTitleStyle = common_vendor.computed(() => {
      return {
        ...props.titleStyle
      };
    });
    const isBackHomePage = common_vendor.computed(() => {
      const pages = getCurrentPages();
      return pages.length <= 1 || props.isToHome;
    });
    const isShowMenuList = common_vendor.ref(false);
    const showMenu = () => {
      isShowMenuList.value = !isShowMenuList.value;
    };
    const onBackOff = common_vendor.ref(false);
    const back = () => {
      if (onBackOff.value)
        return;
      onBackOff.value = true;
      emit("back");
      setTimeout(() => {
        onBackOff.value = false;
      }, 1500);
      if (props.disableBackDefaultBehavior)
        return;
      if (isBackHomePage.value) {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
        return;
      }
      common_vendor.index.navigateBack({
        delta: props.clearCount
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s(height.value),
        b: props.isShowBack
      }, props.isShowBack ? {
        c: __props.backImageUrl,
        d: common_vendor.o(back)
      } : {}, {
        e: isShowMenu.value
      }, isShowMenu.value ? {
        f: menuImage,
        g: common_vendor.p({
          unread: common_vendor.unref(unread)
        }),
        h: isShowMenuList.value,
        i: common_vendor.o(showMenu)
      } : {}, {
        j: common_vendor.t(props.title),
        k: common_vendor.s(headerBarTitleStyle.value),
        l: common_vendor.s(headerBarContentStyle.value),
        m: common_vendor.s(headerBarStyle.value),
        n: common_vendor.s(headerStyle.value)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-90279473"]]);
wx.createComponent(Component);
