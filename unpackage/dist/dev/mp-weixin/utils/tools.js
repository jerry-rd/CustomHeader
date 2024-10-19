"use strict";
const common_vendor = require("../common/vendor.js");
const pages = [
  {
    path: "pages/index/index",
    style: {
      navigationBarTitleText: "",
      navigationStyle: "custom",
      enablePullDownRefresh: true
    }
  },
  {
    path: "pages/mine/mine",
    style: {
      navigationBarTitleText: "我的",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/mine/setting",
    style: {
      navigationBarTitleText: "账号设置"
    }
  },
  {
    path: "pages/mine/login",
    style: {
      navigationBarTitleText: "注册登录",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/mine/bindPhone",
    style: {
      navigationBarTitleText: "绑定手机号",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/mine/message",
    style: {
      navigationBarTitleText: "消息中心",
      enablePullDownRefresh: true
    }
  },
  {
    path: "pages/other/protocol",
    style: {
      navigationBarTitleText: "用户协议"
    }
  },
  {
    path: "pages/mine/avatarCropper",
    style: {
      navigationBarTitleText: "头像设置",
      enablePullDownRefresh: false,
      disableScroll: true
    }
  },
  {
    path: "pages/member/buy",
    style: {
      navigationBarTitleText: "会员购买",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/detail/detail",
    style: {
      navigationBarTitleText: "",
      navigationStyle: "custom"
    }
  }
];
const tabBar = {
  color: "#888",
  selectedColor: "#07c160",
  backgroundColor: "#F7F7F8",
  list: [
    {
      pagePath: "pages/index/index",
      iconPath: "./static/tabbar/index.png",
      selectedIconPath: "./static/tabbar/index_Selected.png"
    },
    {
      pagePath: "pages/mine/mine",
      iconPath: "./static/tabbar/calendar.png",
      selectedIconPath: "./static/tabbar/calendar_Select.png"
    }
  ]
};
const globalStyle = {
  navigationBarTextStyle: "black",
  navigationBarTitleText: "自定义导航",
  navigationBarBackgroundColor: "#ffffff",
  backgroundColor: "#ffffff"
};
const page = {
  pages,
  tabBar,
  globalStyle
};
let safeAreaInsertInfo = {
  scaleFactor: 0,
  windowHeight: 0,
  windowWidth: 0,
  windowContentHeight: 0,
  statusBarHeight: 0,
  menuButtonHeight: 0,
  menuButtonWidth: 0,
  menuButtonTop: 0,
  menuButtonRight: 0,
  menuButtonBottom: 0,
  menuButtonLeft: 0,
  navHeight: 0
};
const getSafeAreaInsertInfo = () => {
  return safeAreaInsertInfo;
};
const initSafeAreaInsert = () => {
  let navHeight = 0;
  let menuButtonHeight = 0;
  let menuButtonWidth = 0;
  let menuButtonTop = 0;
  let menuButtonRight = 0;
  let menuButtonBottom = 0;
  let menuButtonLeft = 0;
  const systemInfo = common_vendor.index.getSystemInfoSync();
  const scaleFactor = 750 / systemInfo.windowWidth;
  const windowHeight = systemInfo.windowHeight * scaleFactor;
  const windowWidth = systemInfo.windowWidth * scaleFactor;
  const statusBarHeight = systemInfo.statusBarHeight || 1 * scaleFactor;
  const safeAreaInserts = common_vendor.index.getMenuButtonBoundingClientRect();
  menuButtonHeight = safeAreaInserts.height * scaleFactor;
  menuButtonWidth = safeAreaInserts.width * scaleFactor;
  menuButtonTop = safeAreaInserts.top * scaleFactor;
  menuButtonRight = safeAreaInserts.right * scaleFactor;
  menuButtonBottom = safeAreaInserts.bottom * scaleFactor;
  menuButtonLeft = safeAreaInserts.left * scaleFactor;
  navHeight = menuButtonHeight + (menuButtonTop - statusBarHeight) * 2;
  const windowContentHeight = windowHeight - navHeight;
  safeAreaInsertInfo = {
    scaleFactor,
    windowHeight,
    windowWidth,
    windowContentHeight,
    statusBarHeight,
    menuButtonHeight,
    menuButtonWidth,
    menuButtonTop,
    menuButtonRight,
    menuButtonBottom,
    menuButtonLeft,
    navHeight
  };
};
const isTabBarUrl = (url) => {
  if (!url)
    return false;
  const tabBarList = page.tabBar.list;
  let pageUrl = url || "";
  if (pageUrl[0] === "/") {
    pageUrl = url.substring(1);
  }
  const index = tabBarList.findIndex((tabBar2) => tabBar2.pagePath === pageUrl);
  return index >= 0;
};
const navigationTo = (options, jumpFun = "navigateTo") => {
  const url = options.url;
  if (isTabBarUrl(url)) {
    common_vendor.index.switchTab(options);
    return;
  }
  common_vendor.index[jumpFun](options);
};
exports.getSafeAreaInsertInfo = getSafeAreaInsertInfo;
exports.initSafeAreaInsert = initSafeAreaInsert;
exports.isTabBarUrl = isTabBarUrl;
exports.navigationTo = navigationTo;
