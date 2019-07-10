// 在需要使用的js文件中，导入js
var util = require('../../time/time.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:[1,2,3],
    click:true,
    zan:true,
   
  },

  change:function(){
    var click = this.data.click;
    var zan = this.data.zan;
    this.setData({
      click: !click,
      zan:!zan,
    });

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time:time
    });  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})