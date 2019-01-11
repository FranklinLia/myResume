<template>
    <div>
        <ul class="tagBall">
            <li class="tag"
                v-for="(item, index) in tags"
                :key="index"
            >
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tags: [
                {
                    id: 1,
                    title: "帅气"
                },
                {
                    id: 2,
                    title: "VUE"
                },
                {
                    id: 3,
                    title: "ANGULAR"
                },
                {
                    id: 4,
                    title: "IONIC"
                },
                {
                    id: 5,
                    title: "JAVACRIPT"
                },
                {
                    id: 6,
                    title: "迷人"
                },
                {
                    id: 7,
                    title: "幽默"
                },
                {
                    id: 8,
                    title: "PYTHON"
                },
                {
                    id: 9,
                    title: "潇洒"
                },
                {
                    id: 10,
                    title: "稳重"
                },
                {
                    id: 11,
                    title: "爱笑"
                },
                {
                    id: 12,
                    title: "爱音乐"
                },
                {
                    id: 13,
                    title: "吉他"
                },
                {
                    id: 14,
                    title: "英雄联盟"
                },
                {
                    id: 15,
                    title: "HTML"
                },
                {
                    id: 16,
                    title: "CSS"
                },
                {
                    id: 17,
                    title: "GIT"
                },
                {
                    id: 18,
                    title: "WEBPACK"
                },
            ]
        }
    },
    mounted(){
        var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag"),
            paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0],
            RADIUS = 120,
            fallLength = 300,
            tags = [],
            angleX = Math.PI / 300,
            angleY = Math.PI / 300,
            CX = paper.offsetWidth / 2,
            CY = paper.offsetHeight / 2,
            EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
            EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;

        function getClass(className) {
            var ele = document.getElementsByTagName("*");
            var classEle = [];
            for (var i = 0; i < ele.length; i++) {
                var cn = ele[i].className;
                if (cn === className) {
                classEle.push(ele[i]);
                }
            }
            return classEle;
        }

        function innit() {
            for (var i = 0; i < tagEle.length; i++) {
                var a, b;
                var k = -1 + (2 * (i + 1) - 1) / tagEle.length;
                var a = Math.acos(k);
                var b = a * Math.sqrt(tagEle.length * Math.PI);
                var x = RADIUS * Math.sin(a) * Math.cos(b);
                var y = RADIUS * Math.sin(a) * Math.sin(b);
                var z = RADIUS * Math.cos(a);
                var t = new tag(tagEle[i], x, y, z);
                tagEle[i].style.color = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
                tags.push(t);
                t.move();
            }
        }

        Array.prototype.forEach = function(callback) {
            for (var i = 0; i < this.length; i++) {
                callback.call(this[i]);
            }
        }

        function animate() {
            rotateX();
            rotateY();
            tags.forEach(function() {
                this.move();
            });

            requestAnimationFrame(animate);
        }

        if ("addEventListener" in window) {
            paper.addEventListener("mousemove", function(event) {
                var x = event.clientX - EX - CX;
                var y = event.clientY - EY - CY;
                angleY = x * 0.0001;
                angleX = y * 0.0001;
            });
        }
        else {
            paper.attachEvent("onmousemove", function(event) {
                var x = event.clientX - EX - CX;
                var y = event.clientY - EY - CY;
                angleY = x * 0.0001;
                angleX = y * 0.0001;
            });
        }

        function rotateX() {
            var cos = Math.cos(angleX);
            var sin = Math.sin(angleX);
            tags.forEach(function() {
                var y1 = this.y * cos - this.z * sin;
                var z1 = this.z * cos + this.y * sin;
                this.y = y1;
                this.z = z1;
            })

        }

        function rotateY() {
            var cos = Math.cos(angleY);
            var sin = Math.sin(angleY);
            tags.forEach(function() {
                var x1 = this.x * cos - this.z * sin;
                var z1 = this.z * cos + this.x * sin;
                this.x = x1;
                this.z = z1;
            })
        }

        var tag = function(ele, x, y, z) {
            this.ele = ele;
            this.x = x;
            this.y = y;
            this.z = z;
        }

        tag.prototype = {
            move: function() {
                var scale = fallLength / (fallLength - this.z);
                var alpha = (this.z + RADIUS) / (2 * RADIUS);
                var left = this.x + CX - this.ele.offsetWidth / 2 + "px";
                var top = this.y + CY - this.ele.offsetHeight / 2 + "px";
                var transform = 'translate(' + left + ', ' + top + ') scale(' + scale + ')';
                this.ele.style.opacity = alpha + 0.5;
                this.ele.style.zIndex = parseInt(scale * 100);
                this.ele.style.transform = transform;
                this.ele.style.webkitTransform = transform;
            }
        }
        innit();
        animate();
    }
}
</script>
<style lang="stylus" scoped>
@import '../assets/common/base.styl'
.tagBall 
    width 300px
    height 300px
    border-radius 300px
    background rgba(256,256,256,0.9)
    border 1px solid #f5f5f5
    box-shadow inset 0 0 30px #fafafa
    position relative
    .tag 
        display block
        position absolute
        left 0px
        top 0px
        color #000
        text-decoration none
        font-size 13px
        font-family "微软雅黑"
        will-change transform
        &:hover 
            height 16px
            line-height 16px
            border 0.5px solid #e1e1e1
</style>
