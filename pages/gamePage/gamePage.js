Page({
  data: {
    list1: [],
    list2: [],
    list3: [],
    list4: [],
    list5: [],
    list6: [],
    msg:""
    },

  // 跳转页面函数
  jumpRulesPage: function() {
    wx.navigateTo({
      url: '/pages/gameRules/gameRules',
    })
  },
  
  zhitouzi: function() {
      var that = this;
      wx.request({
        url: 'http://192.168.31.10:5000/touzi',
        headers: {
          'Content-Type': 'application/json'
        }, 
        success: function (res) {
          let values = Object.values(res.data);
          // console.log(Object.values(res.data));

          that.setData({
            list1: values[0],
            list2: values[1],
            list3: values[2],
            list4: values[3],
            list5: values[4],
            list6: values[5],
            msg: values[6]
           }); 

          //  弹窗显示点数成绩
           if (values[6] == '无用') {
            wx.showToast({
              title: "很遗憾，您的点数为 无用",
              icon: 'none',
              duration: 2000
              })
            }
            if (values[6] == '一秀') {
              wx.showToast({
                title: "恭喜您，您的点数为  秀才（一秀）！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '三红') {
              wx.showToast({
                title: "恭喜您，您的点数为 探花（三红)！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '二举') {
              wx.showToast({
                title: "恭喜您，您的点数为 举人（二举）！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '四进') {
              wx.showToast({
                title: "恭喜您，您的点数为 进士（四进）！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '对堂') {
              wx.showToast({
                title: "恭喜您，您的点数为 榜眼(对堂)！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '四点红') {
              wx.showToast({
                title: "恭喜您，您的点数为 状元（四点红）！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '五子登科') {
              wx.showToast({
                title: "恭喜您，您的点数为 状元（五子登科）！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '五红') {
              wx.showToast({
                title: "恭喜您，您的点数为 状元（五红）！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '六杯黑') {
              wx.showToast({
                title: "恭喜您，您的点数为 状元（六杯黑）！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '遍地锦') {
              wx.showToast({
                title: "恭喜您，您的点数为 状元（遍地锦）！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '六杯红') {
              wx.showToast({
                title: "恭喜您，您的点数为 状元（六杯红）！",
                icon: 'none',
                duration: 2000
              })
            }
            if (values[6] == '金花') {
              wx.showToast({
                title: "恭喜您，您的点数为 状元（金花）！",
                icon: 'none',
                duration: 2000
              })
            }
        }
      })
  },

  endGame: function() {
    wx.navigateTo({
      url: '/pages/rankingList/rankingList',
    }) 
    wx.request({
      url: 'http://192.168.31.10:8088/touzi',
      headers: {
        'Content-Type': 'application/json'
      }, 
      success: function (e) {
        console.log(Object.values(e.data));
      }
    })
  },


  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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