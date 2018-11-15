const app = getApp()

Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: '琦琦'
    }],
    src: '../images/qiqi.jpg'
  },
  imageError: function (e) {
    console.log('error', e.detail.errMsg)
  }
})