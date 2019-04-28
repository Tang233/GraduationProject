<template>
      <div class="admin-box">
        <canvas id="canvas"></canvas>
        <div class="admin-login">
          <h2>管理员登录</h2>
          <div class="admin-id"><input type="text" placeholder="请输入账号" v-model="admin_id"></div>
          <div class="admin-pwd"><input type="password" placeholder="请输入密码" v-model="admin_pwd"></div>
          <div class="login-button"><button type="button" v-on:click="AdminLogin">登录</button></div>
        </div>
      </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
      return {
        admin_id: '',
        admin_pwd: '',
        admin: {}
      }
    },
    methods: {
      AdminLogin: function () {
        const self = this
        axios.post('http://localhost:3000/adminlogin', {admin_id: this.admin_id,admin_pwd: this.admin_pwd})
          .then(function ( response) {
            self.admin=response.data
            alert(self.admin)
            if(self.admin=="登录成功！"){
              self.$router.push("/views/AdminHome")
            }

          })
      },
      getCookie: function (column) {
        var str = document.cookie.split(';')
        var arr
        for (var i in str) {
          arr = unescape(str[i])
          arr = arr.split('=')
          for (var j in arr) {
            if (column === arr[j]) {
              console.log(arr[Number(j) + 1])
              return arr[Number(j) + 1]
            }
          }
        }
      }
    },
    mounted() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const rndCl = () => Math.floor(Math.random() * 225);
        const width = window.innerWidth;
        const height = window.innerHeight;
        var base_list = [];
        canvas.width = width;
        canvas.height = height;

        // 绘制圆
        const drawRounds = (obj, index) => {
            let { x, y, r, color } = obj;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            if (this.isColor) {
                ctx.fillStyle = color;
            } else {
                ctx.fillStyle = this.roundColor
            }
            ctx.fill();
            ctx.closePath();
        }
        //判断移动方向
        const controlDirection = (obj) => {
            if (obj.x >= (width - obj.r)) {
                obj.controlX = "left";
            } else if (obj.x <= parseInt(obj.r / 2)) {
                obj.controlX = "right";
            }
            if (obj.y >= (height - obj.r)) {
                obj.controlY = "bottom";
            } else if (obj.y <= parseInt(obj.r / 2)) {
                obj.controlY = "top"
            }
            return obj
        }
        //划线
        const drawLine = (list) => {
            list.map((item, index) => {
                console.log("item:", item);
                ctx.beginPath();
                ctx.moveTo(item.x1, item.y1);
                ctx.lineTo(item.x2, item.y2);
                ctx.LineWeight = 1;
                if (this.isColor) {
                    ctx.strokeStyle = item.color;
                } else {
                    ctx.strokeStyle = this.lineColor
                }
                ctx.stroke();
                ctx.closePath();
            })
        }
        //绘制
        const draw = (list) => {
            let dots_arr = [];
            let line_arr = [];
            list.map((item, index) => {
                let xy = controlDirection(item);
                let obj = roundMove(xy);
                dots_arr.push(obj);
            });
            dots_arr.map((item1, index1) => {
                dots_arr.map((item2, index2) => {
                    if (item1 !== item2) {
                        let x = item1.x - item2.x;
                        let y = item1.y - item2.y;
                        if (Math.abs(x) < 150 && Math.abs(y) < 150) {
                            let obj = {
                                x1: item1.x,
                                y1: item1.y,
                                x2: item2.x,
                                y2: item2.y,
                                color: item1.color
                            }
                            line_arr.push(obj)
                        }
                    }
                })
            })
            drawLine(line_arr);
            dots_arr.map((item, index) => {
                drawRounds(item, index)
            })
            base_list = dots_arr;
            setTimeout(() => {
                // if(this.paused){
                reDraw()
                // }
            }, 50)
        }
        const reDraw = () => {
            ctx.clearRect(0, 0, width, height);
            draw(base_list)
        }
        //移动
        const roundMove = (obj) => {
            switch (obj.controlX) {
                case "right":
                    obj.x++;
                    break;
                case "left":
                    obj.x--;
                    break;
                default:
            }
            switch (obj.controlY) {
                case "top":
                    obj.y++;
                    break;
                case "bottom":
                    obj.y--;
                    break;
                default:
            }
            return obj
        }
        //创造圆点
        const creatDots = () => {
            let arr = [];
            for (let i = 0; i < this.dotsNum; i++) {
                let obj = {};
                obj.x = parseInt(Math.random() * width);
                obj.y = parseInt(Math.random() * height);
                obj.r = parseInt(Math.random() * 10);
                obj.controlX = parseInt(Math.random() * 10) > 5 ? "left" : "right"
                obj.controlY = parseInt(Math.random() * 10) > 5 ? "bottom" : "top"
                obj.color = `rgba(${rndCl()},${rndCl()},${rndCl()},.3)`
                arr.push(obj)
            }
            return arr
        }
        draw(creatDots())
        //鼠标移动
        const moveXY = (event) => {
            let obj = {};
            obj.x = event.clientX;
            obj.y = event.clientY;
            obj.r = 0;
            base_list[0] = obj;
            base_list[0]["r"] = 1;
        }
        //鼠标点击
        const addXY = (event) => {
            let obj = {};
            obj.x = event.clientX;
            obj.y = event.clientY;
            obj.r = parseInt(Math.random() * 10);
            obj.color = `rgba(${rndCl()},${rndCl()},${rndCl()},.3)`;
            obj.controlX = parseInt(Math.random() * 10) > 5 ? 'left' : 'right'
            obj.controlY = parseInt(Math.random() * 10) > 5 ? 'bottom' : 'top'
            base_list.push(obj);
        }
        window.addEventListener("mousemove", moveXY);
        window.addEventListener("click", addXY)
    },
    props: {
        dotsNum: {
            type: Number,
            default: 50
        },
        isColor: {
            type: Boolean,
            default: true
        },
        roundColor: {
            type: String,
            default: "#999"
        },
        lineColor: {
            type: String,
            default: "#ccc"
        }
    }
}
</script>
<style>
    #canvas{
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
    }
    .admin-login{
      position: absolute;
      top: 100px;
      left: 35%;
      width: 300px;
      height: 300px;
      display: flex;
      flex-direction: column;
      padding: 50px;
      background-color: #C8E7ED;
      border-radius: 50%;
    }
    h2{
      position: absolute;
      padding: 10px;
      left: 125px;
      font-family: "微软雅黑";
      text-align: center;
    }
    .admin-id>input{
      position: absolute;
      display: block;
      width: 300px;
      height: 54px;
      top: 110px;
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    .admin-pwd>input{
      position: absolute;
      display: block;
      width: 300px;
      height: 54px;
      top: 185px;
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    button{
      position: absolute;
      width:304px;
      height: 45px;
      top: 260px;
      font-family: "微软雅黑";
      font-size: 1.2rem;
      border-radius: 10px;
      border: 2px solid #8BBBF6;
    }
</style>
