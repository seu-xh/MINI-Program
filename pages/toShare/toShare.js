// pages/mainWeather/mainWeather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"宝贝女儿",
    Message: "最近升温了，少喝点饮料，都是色素，多吃苦瓜，苦瓜防癌",
    luyinSrc:"",
    Info: null,
    MainSrc: "	https://wximg-1256782551-1256782551.cos.ap-guangzhou.myqcloud.com/qietu/分享页面/",
    yuyinSrc: "语音输入.png",
    tuoyuanSrc: "椭圆形.png",
    shoucangSrc: "心.png",
    animation0: '',
    animation1: '',
    animation2: '',
    animation3: '',
    animation4: '',
    animationSrc: ["太阳1.png", "太阳2.png", "太阳3.png"],
    Card: ["snow", "rain", "cloud", "frog", "hot", "sun", "wind","overcast"],
    Color: ["#a1b3c0", "#7ac7db", "#7baac7", "#b7b7b7", "#ff7b2e", "#ffba2e", "#7991bd","#427099"],
    tips: [],
    location: "广州",
    weather: "晴",
    weatherId: "100",
    cardId: 0,
    temperature: "45°C",
    tipsId: 0,
    weatherTomorrow: "晴",
    weatherAfterTomorrow: "多云",
    index: { aqi: "", qlt: "", pm25: "" },
    forecast: [{ date: "6月1日", weather: "晴", temperature: "43°/35°" }, { date: "6月2日", weather: "晴", temperature: "43°/35°" }, { date: "6月3日", weather: "晴", temperature: "43°/35°" }, { date: "6月4日", weather: "晴", temperature: "43°/35°" }, { date: "6月5日", weather: "晴", temperature: "43°/35°" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    {
      var t=JSON.parse(options.Data);
      this.setData({
        location: t.location,
        temperature: t.temperature,
        weather: t.weather,
        index: t.index,
        forecast: t.forecast,
        weatherId: t.weatherId,
        cardId: t.cardId,
        tips: t.tips,
        tipsId: t.tipsId,
        Message: t.Message,
        luyinSrc: t.luyinSrc,
        name: t.name
      })
    }
   
    // {
    // console.log(options);
    // this.data = JSON.parse(options.Data);
    // console.log(this.data);
    // this.setData({
    //   location: this.data.location,
    //   temperature: this.data.temperature,
    //   weather: this.data.weather,
    //   index: this.data.index,
    //   forecast: this.data.forecast,
    //   weatherId: this.data.weatherId,
    //   cardId: this.data.cardId,
    //   tips: this.data.tips,
    //   tipsId:this.data.tipsId,
    //   Message:this.data.Message,
    //   luyinSrc:this.data.luyinSrc,
    //   name:this.data.name
    // })
    // }
    // var left = this.data.forecast;
    // var right = this.data.Info.forecast;
    // console.log(left);
    // console.log(right);
    // for (var i = 1; i < 6; i++) {
    //   var date = new Date(right[i].date);
    //   var a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //   left[i - 1].date = date.getMonth() + 1 + "月" + date.getDate() + "日 ";
    //   left[i - 1].weather = right[i].cond_txt_d;
    //   left[i - 1].temperature = right[i].tmp_max + "°/" + right[i].tmp_min + "°";
    // }
    // this.setData({
    //   location: this.data.Info.Location,
    //   temperature: this.data.Info.Temperature,
    //   weather: this.data.Info.Weather,
    //   index: this.data.Info.OtherInfo,
    //   forecast: left,
    //   weatherId: this.data.Info.WeatherId,
    //   cardId: this.data.Info.CardId,
    //   tips: this.data.Info.Tips,
    //   tipsId: Math.floor(Math.random() * 8 + 1) - 1
    // })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation0 = wx.createAnimation({
      duration: 2000,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "100% 0 0"
    });
    this.animation1 = wx.createAnimation({
      duration: 2000,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "100% 0 0"
    });
    this.animation2 = wx.createAnimation({
      duration: 2000,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "100% 0 0"
    });
    this.animation3 = wx.createAnimation({
      duration: 2000,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50% 0"
    });
    this.animation4 = wx.createAnimation({
      duration: 2000,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50% 0"
    });
    var n = 0;
    setInterval(function () {
      n = n + 1;
      this.translate();
    }.bind(this), 5000)
  },
  translate: function () {
    this.animation0.scale(0.9, 0.9).step({}).scale(1, 1).step();
    this.animation1.scale(0.8, 0.8).step({}).scale(1, 1).step();
    this.animation2.scale(0.7, 0.7).step({}).scale(1, 1).step();

    this.animation3.rotate(-30).step().rotate(30).step();
    this.animation4.opacity(0).step({}).opacity(1).step();
    this.setData({
      animation0: this.animation0.export(),
      animation1: this.animation1.export(),
      animation2: this.animation2.export(),
      animation3: this.animation3.export(),
      animation4: this.animation4.export(),
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.animation0 = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: "linear",
    //   delay: 0,
    //   transformOrigin: "100% 0 0"
    // });
    // this.animation1 = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: "linear",
    //   delay: 0,
    //   transformOrigin: "100% 0 0"
    // });
    // this.animation2 = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: "linear",
    //   delay: 0,
    //   transformOrigin: "100% 0 0"
    // });
    // var n = 0;
    // setInterval(function () {
    //   n = n + 1;
    //   this.translate();
    // }.bind(this), 10000)
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
   // console.log(this.data);
    var t=JSON.stringify(this.data);
      var tmp={
                        location: this.data.location,
                        temperature: this.data.temperature,
                        weather: this.data.weather,
                  index: this.data.index,
                    forecast: this.data.forecast,
                      weatherId: this.data.weatherId,
                        cardId: this.data.cardId,
                          tips: this.data.tips,
                            tipsId:this.data.tipsId,
                              Message:this.data.Message,
                                luyinSrc:this.data.luyinSrc,
                                  name:this.data.name
              }
        return{
              title:"与你同晴",
              
              path:"pages/toShare/toShare?Data="+JSON.stringify(tmp)
}
  },
  listenerMessageInput: function (e) {
    this.data.Message = e.detail.value;
  },

  
  playRecord: function () {
    var innerAudioContext = wx.createInnerAudioContext();
    var that = this;
    var src = this.data.luyinSrc;
    if (src == '') {
      this.tip("传送录音失败！")
      return;
    }
    innerAudioContext.src = this.data.luyinSrc;
    innerAudioContext.play()
  },
})