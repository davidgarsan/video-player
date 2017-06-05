const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent && !navigator.userAgent.match('CriOS');

export default {
  isSafari,
};
