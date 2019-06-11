const navData = [
  {
    id: 1,
    title: "Mac",
    subLink: [
      {
        id: "mac",
        title: "Macbook",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/macbook__do4qnh249seq_large.svg",
        new: false
      },
      {
        id: "mac-air",
        title: "Macbook Air",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/macbookair__ej39du0gz4uq_large.svg",
        new: false
      },
      {
        id: "macbook-pro",
        title: "Macbook Pro",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/macbookpro__enfip2k1cxkm_large.svg",
        new: true
      },
      {
        id: "imac",
        title: "iMac",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/imac__dkswmjfqeziq_large.svg",
        new: true
      },
      {
        id: "imac-pro",
        title: "iMac Pro",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/imac_pro__eer4bfwlutme_large.svg",
        new: false
      },
      {
        id: "mac-pro",
        title: "Mac Pro",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_pro__bn92faz71k6a_large.svg",
        new: true
      },
      {
        id: "mac-mini",
        title: "Mac Mini",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/macmini__c6u0it831y0y_large.svg",
        new: false
      },
      {
        id: "compare",
        title: "Compare",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg",
        new: false
      },
      {
        id: "pro-display",
        title: "Pro Display XDR",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg",
        new: true
      },
      {
        id: "accessories",
        title: "Accessories",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg",
        new: false
      },
      {
        id: "mojave",
        title: "Mojave",
        imageUrl:
          "https://www.apple.com/v/mac/home/ag/images/familybrowser/mac_osx__dntc9ef2limq_large.svg",
        new: false
      }
    ]
  },
  {
    id: 2,
    title: "iPad",
    subLink: [
      {
        id: "ipad-pro",
        title: "iPad Pro",
        imageUrl:
          "https://www.apple.com/v/ipad/home/ar/images/chapternav/ipadpro_light__dxq7nxjgsd2e_large.svg",
        new: false
      },
      {
        id: "ipad-air",
        title: "iPad Air",
        imageUrl:
          "https://www.apple.com/v/ipad/home/ar/images/chapternav/ipadair_light__gan6yfrffc66_large.svg",
        new: true
      },
      {
        id: "ipad",
        title: "iPad",
        imageUrl:
          "https://www.apple.com/v/ipad/home/ar/images/chapternav/ipad_light__expohijp19si_large.svg",
        new: false
      },
      {
        id: "ipad-mini",
        title: "iPad Mini",
        imageUrl:
          "https://www.apple.com/v/ipad/home/ar/images/chapternav/ipadmini_light__bxpulkud30s2_large.svg",
        new: true
      },
      {
        id: "compare",
        title: "Compare",
        imageUrl:
          "https://www.apple.com/v/ipad/home/ar/images/chapternav/ipad_comp_light__f80dzq6i8sq6_large.svg",
        new: false
      },
      {
        id: "apple-pencil",
        title: "Apple Pencil",
        imageUrl:
          "https://www.apple.com/v/ipad/home/ar/images/chapternav/apple_pencil_light__e9zorbynwqie_large.svg",
        new: false
      },
      {
        id: "smart-keyboard",
        title: "Smart Keyboard",
        imageUrl:
          "https://www.apple.com/v/ipad/home/ar/images/chapternav/keyboard_light__cjbr6d6i2vbm_large.svg",
        new: false
      },
      {
        id: "accessories",
        title: "Accessories",
        imageUrl:
          "https://www.apple.com/v/ipad/home/ar/images/chapternav/ipad_acc_light__ebtftz3r2rwy_large.svg",
        new: false
      },
      {
        id: "ios-12",
        title: "iOS 12",
        imageUrl:
          "https://www.apple.com/v/ipad/home/ar/images/chapternav/ios_light__d8hlu55ivueu_large.svg",
        new: false
      }
    ]
  },
  {
    id: 3,
    title: "iPhone",
    subLink: [
      {
        id: "iphone-xs",
        title: "iPhone XS",
        imageUrl:
          "https://www.apple.com/v/iphone/home/aa/images/chapternav/iphonexs__haztskdvse62_large.svg",
        new: true
      },
      {
        id: "iphone-xr",
        title: "iPhone XR",
        imageUrl:
          "https://www.apple.com/v/iphone/home/aa/images/chapternav/iphonexr__dc5ls4xainsm_large.svg",
        new: true
      },
      {
        id: "iphone-8",
        title: "iPhone 8",
        imageUrl:
          "https://www.apple.com/v/iphone/home/aa/images/chapternav/iphone8__ces17dqh6j6q_large.svg",
        new: false
      },
      {
        id: "iphone-7",
        title: "iPhone 7",
        imageUrl:
          "https://www.apple.com/v/iphone/home/aa/images/chapternav/iphone7__ew0p3ahbemuu_large.svg",
        new: false
      },
      {
        id: "compare",
        title: "Compare",
        imageUrl:
          "https://www.apple.com/v/iphone/home/aa/images/chapternav/compare__fx9dq75qwnma_large.svg",
        new: false
      },
      {
        id: "apple-card",
        title: "Apple Card",
        imageUrl:
          "https://www.apple.com/v/iphone/home/aa/images/chapternav/applecard__gip86jgm8zee_large.svg",
        new: false
      },
      {
        id: "airpods",
        title: "AirPods",
        imageUrl:
          "https://www.apple.com/v/iphone/home/aa/images/chapternav/airpods__c6lrgkbcjdg2_large.svg",
        new: false
      },
      {
        id: "accessories",
        title: "Accessories",
        imageUrl:
          "https://www.apple.com/v/iphone/home/aa/images/chapternav/accessories__bfu76z4hzusy_large.svg",
        new: false
      },
      {
        id: "ios-12",
        title: "iOS 12",
        imageUrl:
          "https://www.apple.com/v/iphone/home/aa/images/chapternav/ios__btf1uz0f3d0i_large.svg",
        new: false
      }
    ]
  },
  {
    id: 4,
    title: "Watch",
    subLink: [
      {
        id: "apple-watch-series-4",
        title: "Apple Watch Series 4",
        imageUrl:
          "https://www.apple.com/v/watch/home/p/images/overview/watch_nav_series_2__bk595ih4bliu_large.svg",
        new: false
      },
      {
        id: "apple-watch-nike+",
        title: "Apple Watch Nike+",
        imageUrl:
          "https://www.apple.com/v/watch/home/p/images/overview/watch_nav_nike__mkjgkrrlq2ye_large.svg",
        new: false
      },
      {
        id: "apple-watch-hermes",
        title: "Apple Watch Hermes",
        imageUrl:
          "https://www.apple.com/v/watch/home/p/images/overview/watch_nav_hermes__b1zeoxbn0df6_large.svg",
        new: false
      },
      {
        id: "apple-watch-series-3",
        title: "Apple Watch Series 3",
        imageUrl:
          "https://www.apple.com/v/watch/home/p/images/overview/watch_nav_edition__botzv6l1ftua_large.svg",
        new: false
      },
      {
        id: "watchOS",
        title: "watchOS",
        imageUrl:
          "https://www.apple.com/v/watch/home/p/images/overview/watch_nav_watch_os__fctkp231ik6e_large.svg",
        new: false
      },
      {
        id: "bands",
        title: "Bands",
        imageUrl:
          "https://www.apple.com/v/watch/home/p/images/overview/watch_nav_bands__f5qi8icu6suq_large.svg",
        new: false
      },
      {
        id: "accessories",
        title: "Accessories",
        imageUrl:
          "https://www.apple.com/v/watch/home/p/images/overview/watch_nav_accessories__fix8lwwxvtu2_large.svg",
        new: false
      },
      {
        id: "compare",
        title: "Compare",
        imageUrl:
          "https://www.apple.com/v/watch/home/p/images/overview/watch_nav_compare__bjddtmfseahe_large.svg",
        new: false
      }
    ]
  },
  {
    id: 5,
    title: "TV",
    subLink: [
      {
        id: "apple-tv-app",
        title: "Apple TV app",
        imageUrl:
          "https://www.apple.com/v/tv/home/g/images/home/apple_tv_app_dark__blle10nnpq3m_large.svg",
        new: true
      },
      {
        id: "apple-tv+",
        title: "Apple TV+",
        imageUrl:
          "https://www.apple.com/v/tv/home/g/images/home/apple_tv_plus_dark__fntbqaxjuouy_large.svg",
        new: true
      },
      {
        id: "apple-tv-4k",
        title: "Apple TV 4K",
        imageUrl:
          "https://www.apple.com/v/tv/home/g/images/home/apple_tv_dark__ern1bz8tkwqe_large.svg",
        new: false
      },
      {
        id: "apple-tv-hd",
        title: "Apple TV HD",
        imageUrl:
          "https://www.apple.com/v/tv/home/g/images/home/apple_tv_dark__ern1bz8tkwqe_large.svg",
        new: false
      },
      {
        id: "airplay",
        title: "AirPlay",
        imageUrl:
          "https://www.apple.com/v/tv/home/g/images/home/airplay_dark__dqiw3rzeujma_large.svg",
        new: false
      },
      {
        id: "accessories",
        title: "Accessories",
        imageUrl:
          "https://www.apple.com/v/tv/home/g/images/home/accessories_dark__dybfk40y28om_large.svg",
        new: false
      }
    ]
  },
  {
    id: 6,
    title: "Music",
    subLink: [
      {
        id: "apple-music",
        title: "Apple Music",
        imageUrl:
          "https://www.apple.com/v/music/h/images/overview/icons/apple_music_large.svg",
        new: false
      },
      {
        id: "itunes",
        title: "Tunes",
        imageUrl:
          "https://www.apple.com/v/music/h/images/overview/icons/itunes_large.svg",
        new: false
      },
      {
        id: "homepod",
        title: "HomePod",
        imageUrl:
          "https://www.apple.com/v/music/h/images/overview/icons/homepod_icon_large.svg",
        new: false
      },
      {
        id: "airpods",
        title: "AirPods",
        imageUrl:
          "https://www.apple.com/v/music/h/images/overview/icons/airpods_icon_large.svg",
        new: false
      },
      {
        id: "ipod-touch",
        title: "iPod touch",
        imageUrl:
          "https://www.apple.com/v/music/h/images/overview/icons/ipod_touch_light_large.svg",
        new: true
      },
      {
        id: "music-accessories",
        title: "Music Accessories",
        imageUrl:
          "https://www.apple.com/v/music/h/images/overview/icons/accessories_large.svg",
        new: false
      },
      {
        id: "gift-cards",
        title: "Gift Cards",
        imageUrl:
          "https://www.apple.com/v/music/h/images/overview/icons/gift_cards_large.svg",
        new: false
      }
    ]
  },
  {
    id: 7,
    title: "Support"
  }
];

export default navData;
