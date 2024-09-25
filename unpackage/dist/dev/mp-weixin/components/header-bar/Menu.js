"use strict";
const common_vendor = require("../../common/vendor.js");
const imageServerURl = `https://img09.zhaopin.com/2012/other/mobile/mapp/mp-b`;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Menu",
  props: {
    unread: {}
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    common_vendor.index.setStorageSync("visitorSign", true);
    const list = common_vendor.computed(() => {
      return [
        {
          title: "首页",
          trackName: "msg",
          icon: `${imageServerURl}/header-menu-message.png`,
          url: "/pages/index/index"
        },
        {
          title: "购物车",
          trackName: "cv_share",
          icon: `${imageServerURl}/header-menu-forwarding.png`,
          url: "/pages/detail/detail",
          unread: props.unread > 99 ? "99+" : props.unread
        },
        {
          title: "商品分类",
          trackName: "recommend",
          icon: `${imageServerURl}/header-menu-mine.png`,
          url: "/pages/detail/detail"
        },
        {
          title: "我的账户",
          trackName: "talent_manage",
          icon: `${imageServerURl}/header-menu-communicate.png`,
          url: "/pages/mine/mine"
        },
        {
          title: "订单列表",
          trackName: "interview_manage",
          icon: `${imageServerURl}/header-menu-interview.png`,
          url: "/pages/detail/detail"
        }
      ];
    });
    const toPage = (row) => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.icon,
            b: common_vendor.t(item.title),
            c: item.unread
          }, item.unread ? {
            d: common_vendor.t(item.unread)
          } : {}, {
            e: index,
            f: common_vendor.o(($event) => toPage(), index)
          });
        })
      };
    };
  }
});
wx.createComponent(_sfc_main);
