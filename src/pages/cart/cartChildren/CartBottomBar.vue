<template>
  <div class="cart-bot-bar">
    <div class="check-content">
      <CheckButton :isChecked="isSelectAll"
                   class="checked-button" @click.native="checkClick"></CheckButton>
      <span>全选</span>
    </div>
    <div class="check-price"> 合计：{{totalPrice}} </div>
    <div class="calcuate">
      去计算{{checkLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/CheckButton/CheckButton";
  import {createNamespacedHelpers} from "vuex";
  let { mapState, mapActions,MapMutations,mapGetters }=createNamespacedHelpers('cart');
    export default {
        name: "CartBottomBar",
      components:{CheckButton,},
      props:{},
      computed:{
        ...mapState(['cartList']),
        totalPrice(){
          return '￥' + this.cartList.filter(item=>{
            return item.checked
          }).reduce((preValue,item)=>{
            return preValue + item.price * item.count
          },0).toFixed(2)
        },
        checkLength(){
          return this.cartList.filter(item => {return item.checked}).length
        },
        isSelectAll(){
          if(this.cartList.length ===0) return false;
          return !this.cartList.find(item=>!item.checked);  //find实现
          // for(let item of this.cartList){   //循环实现
          //   if(!item.checked){
          //     return false    //return false 会退出该循环 如果找到有个为false就返回false
          //   }
          // }
          // return  true
        },
      },
      methods:{
        checkClick(){
          if(this.isSelectAll){
            //全部选择变成全部不选中
            this.cartList.forEach(item=>item.checked = false)
          }else{  //有部分或全部不选中
            this.cartList.forEach(item=>item.checked = true)
          }
        }
      },
    }
</script>

<style scoped>
.cart-bot-bar{

  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  padding: 0 5px;
  background-color: #eeeeee;
  display: flex;

}
  .check-content{
    display: flex;
   align-items: center;
    align-content: center;
    width: 80px;
    flex-shrink: 0;
  }
  .checked-button{
    width: 20px;
    height: 20px;
  }
.check-content span{
  padding-left: 5px;
  padding-top: 2px;
  font-size: 1rem;
}
  .check-price{
    padding-left: 15px;

    line-height: 40px;
    flex-grow: 1;
  }
  .calcuate{
    line-height: 40px;
    width: 80px;
    flex-shrink: 0;
    background-color: red;
    color: #eeeeee;
    text-align:center;
    font-size: 1rem;
  }
</style>
