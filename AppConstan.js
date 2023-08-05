import {Platform, Dimensions} from 'react-native';

// const X = Styles.constants.X;
export default {
  LOG_TAG: '',
  IS_IOS: Platform.OS  === 'ios',
  IS_ANDROID: Platform.OS === 'android',
  LIMIT: 10,
  TIME_OUT: 10000,
  DATE_FORMAT: 'DD-MM-YYYY',

  REGISTER_KEY: {
    EMAIL: 'email',
    PHONE: 'phone',
    NEW: 'new',
    OLD: 'old',
  },

  CONSTANTS_API: {
    LIMIT: 20,
    CATEGORY_ID_OF_SELLING_PRODUCTS: 211,
    CATEGORY_ID_OF_SERVICE: 385,
    CATEGORY_ID_OF_HAIR_STYLE: 196,
    CATEGORY_ID_OF_HAIR_CARE: 197,
    CATEGORY_ID_OF_SKIN_CARE: 214,
    CATEGORY_ID_OF_PRODUCT: 391,
    CATEGORY_ID_CAR: 417,
    //396
    CATEGORY_SpecialOffers: 391,
  },

  CONSTANTS_TYPE: {
    LIKE_TYPE: {
      PRODUCT_TYPE: 391,
      SERVICE_TYPE: 385,
    },
    MESSAGE_TYPE: {
      TEXT: 'text',
      IMAGE: 'image',
    },
  },

  STORE_STYLE: {
    SERVICE_STORE: 1,
    WEATHER_STORE: 2,
    NEWS: 4,
    PRODUCT_STORE: 5,
    SPECIAL_OFFER: 6,
  },

  size9: 9,
  size10: 10,
  size11: 11,
  size12: 12,
  size13: 13,
  size14: 14,
  size15: 15,
  size16: 16,
  size17: 17,
  size18: 18,
  size19: 19,
  exceedNicknameLength: 'Vượt quá số lượng ký tự cho phép',
  downloadFailed: 'Tải dữ liệu không thành công',

  // server associated
  clientServerCommunicationProb: 'Lỗi trong quá trình giao tiếp với máy chủ',
  connectToServerFailed: 'Không thể kết nối đến máy chủ',
  //
  EventName: {
    LOGIN: 'LOGIN_EVENT',
    LOAD_GROUP_PRODUCT: 'LOAD_GROUP_PRODUCT',
    GET_TOTAL_CART: 'GET_TOTAL_CART',
    ADD_NEW_STORE: 'ADD_NEW_STORE',
    GO_TO_TAB: 'GO_TO_TAB',
  },
  //
  // IMAGE_SCALE_TYPE: {
  //   COVER: FastImage.resizeMode.cover,
  //   CONTAIN: FastImage.resizeMode.contain,
  //   STRETCH: FastImage.resizeMode.stretch,
  //   CENTER: FastImage.resizeMode.center,
  // },
  // user
  userNotFound: 'Không tìm thấy thông tin người dùng',
  uploadAvatarFailed: 'Cập nhật ảnh đại diện thất bại',
  SharedPreferencesKey: {
    LANGUAGE: 'LANGUAGE',
    FIRST_LOGIN: 'FIRST_LOGIN',
    LOGIN_INFOR: 'LOGIN_INFOR',
    PROVINCE: 'PROVINCE',
    USER_LOCATION: 'USER_LOCATION',
    WEATHER_DATA: 'WEATHER_DATA',
    APPLE_KEY: 'APPLE_KEY',
    TYPE_LOGIN: {
      GOOGLE: '1',
      FACEBOOK: '2',
      APPLE: '3'
    },
  },
  LIST_COMPONENT: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  // RELATIVE_ROLE: [
  //   {
  //     name: getStrings(vn.post),
  //     type: 3,
  //   },
  //   {
  //     name: strings('MEMBER'),
  //     type: 2,
  //   },
  //   {
  //     name: strings('admin'),
  //     type: 0,
  //   },
  //   {
  //     name: strings('WAITE_JOIN'),
  //     type: 1,
  //   },
  // ],
  ROLE_IN_GROUP: {
    admim_ecommece: 1,
    Owners: 3,
    deputy: 5,
    member: 4,
    wait_join_group: 0,
    outsider: 2,
  },
  PIN_GROUP: {
    IS_PIN: 1,
  },
  PRIVACY_GROUP: {
    PRIVATE: 1,
    PUBLIC: 0,
  },
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const UI_WIDTH = 375;

export function appSize(size) {
  return (windowWidth * size) / UI_WIDTH;
}

export function getSvgSize(width, height, newWidth) {
  return {
    width: newWidth !== undefined ? appSize(Number(newWidth)) : appSize(width),
    height:
      newWidth !== undefined
        ? appSize((Number(newWidth) * height) / width)
        : appSize(height),
  };
}
