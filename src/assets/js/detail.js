//构造函数
// class classname{
//   constructor(name,age){
//     this.name = name;
//     this.age = age
//   }
// }
//
//使用构造函数
// const p = new classname( 'why',18 )
//  p.name = why;
// p.age = 18
//this就是p
export class Goods {
  //构造器
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.desc = itemInfo.desc;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
    this.bgcolor = itemInfo.discountBgColor;
  }
}


//商铺信息
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

//参数信息
export class Param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}

