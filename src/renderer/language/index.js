import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "./zh-CN"; // 简体
// import zhTW from "./zh-TW"; // 繁体
import en from "./en";

Vue.use(VueI18n);

// 准备翻译的语言环境信息
const i18n = new VueI18n({
  locale: "en", // 初始化英文
  messages: {
    zh: zh,
    en: en,
  },
});

export default i18n;
