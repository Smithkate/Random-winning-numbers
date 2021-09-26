// index.js
var rand,sum;
function createRand(){
  rand=[];
  for(var i=0;i<7;i++){
    var r=0;
    while(r==0){
      r=parseInt(Math.random() * 32);              
    }                                             //生成不为0的数                                  
    r=(r/Math.pow(10,2)).toFixed(2).substr(2)     //控制形式为两位
    rand[i]=r;
    for (var j=0;j<i;j++){
      if (rand[j]==r){i=i-1;}
    }                                             //不重复                                             
    console.log(rand[i]);
  }
};
Page({
  onLoad:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:rand
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:rand
    })
  }
})
