/*
 * @FileDescription:
 * @Author: wzj
 * @Date: 2023-01-05 19:01:40
 * @LastEditors: wzj
 * @LastEditTime: 2023-01-06 09:38:52
 */
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      selectorBlackList: ['px-to-vw-ignore'],
      unitPrecision: 5,
    },
  },
}
