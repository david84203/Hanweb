// 全站共用的 LINE 官方帳號連結（Han 自己的玫琳凱帳號，不是莎朗嘿yo）
export const LINE_OA_ID = '@726rmfol';
export const LINE_ADD_URL = `https://line.me/R/ti/p/${LINE_OA_ID}`;

/**
 * 官網來源前綴（比照照相館官網）：官網按鈕送出的句子一律長成「【官網預約】我想了解…」，
 * LINE 選單六格送的是不帶前綴的原句，Han 一眼就分得出客人是看完官網來的還是直接點選單。
 * LINE 後台每組關鍵字要同時掛「原句」與「【官網預約】原句」兩個關鍵字。
 */
export const WEB_PREFIX = '【官網預約】';

/** 帶預填文字開啟 LINE 聊天室（自動加官網前綴）；沒給文字就退回加好友連結 */
export const buildLineUrl = (text) => text
  ? `https://line.me/R/oaMessage/${encodeURIComponent(LINE_OA_ID)}/?${encodeURIComponent(WEB_PREFIX + text)}`
  : LINE_ADD_URL;

/**
 * 五組主要預填文字，必須跟 LINE 官方帳號「關鍵字自動回應」設定一字不差，
 * 客人一送出就會收到對應的自動回覆（依據：漏斗總設計 2026-09-16）。
 */
export const LINE_TEXT = {
  makeup:   '我想了解彩妝課',
  makeupA:  '我想體驗彩妝教學實作課',
  makeupB:  '我想了解個人彩妝養成課',
  skin:     '我想了解原生美肌保養',
  collagen: '我想預約澎潤Q彈計畫的諮詢',
  body:     '我想了解體態管理',
  custom:   '請Han幫我看',
};
