<template>
    <div class="index">
        <Header />
        <div class="content">
            <div class="content-left">
               <div class="my-tags">
                    <h1>我的技能标签</h1>
                    <Tag />
                </div>
                <div class="introduce">
                    <ul>
                        <li class="name border-1px">
                            <div class="name-left">
                                <p class="namel-cn">姓  名:</p>
                                <p class="namel-en">NAME:</p>
                            </div>
                            <div class="name-right">
                                <p class="namer">梁红磊</p>
                            </div>
                        </li>
                        <li class="name border-1px">
                            <div class="name-left">
                                <p class="namel-cn">毕业院校:</p>
                                <p class="namel-en">COLLEGE:</p>
                            </div>
                            <div class="name-right">
                                <p class="namer">青海大学</p>
                            </div>
                        </li>
                        <li class="name border-1px">
                            <div class="name-left">
                                <p class="namel-cn">电话:</p>
                                <p class="namel-en">PHONE:</p>
                            </div>
                            <div class="name-right">
                                <p class="namer">15378778664</p>
                            </div>
                        </li>
                        <li class="name border-1px">
                            <div class="name-left">
                                <p class="namel-cn">邮箱:</p>
                                <p class="namel-en">EMAIL:</p>
                            </div>
                            <div class="name-right">
                                <p class="namer">15378778664@163.com</p>
                            </div>
                        </li>
                    </ul>
                </div>  
            </div>
            <div class="content-right">
                <div class="production">
                    <h1>我的项目经历</h1>
                    <ul>
                        <li>
                            <div class="pro-content">
                                <img src="../assets/img/app.png" />
                                <p class="pro-title">花卷云app</p>
                                <p class="pro-desc">apicloud+vue</p>
                            </div>
                        </li>
                        <li>
                            <div class="pro-content">
                                <img src="../assets/img/app.png" />
                                <p class="pro-title">花卷云公众号</p>
                                <p class="pro-desc">vue</p>
                            </div>
                        </li>
                        <li>
                            <div class="pro-content">
                                <img src="../assets/img/app.png" />
                                <p class="pro-title">花卷云小程序</p>
                                <p class="pro-desc">mpvue</p>
                            </div>
                        </li>
                        <li>
                            <div class="pro-content">
                                <img src="../assets/img/app.png" />
                                <p class="pro-title">花卷云官网</p>
                                <p class="pro-desc">js</p>
                            </div>
                        </li>
                        <li>
                            <div class="pro-content">
                                <img src="../assets/img/app.png" />
                                <p class="pro-title">新航路app</p>
                                <p class="pro-desc">angular+ionic</p>
                            </div>
                        </li>
                        <li>
                            <div class="pro-content">
                                <img src="../assets/img/app.png" />
                                <p class="pro-title">浏览器插件</p>
                                <p class="pro-desc">js</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../components/header.vue'
import Tag from '../components/3dtag.vue'
export default {
    components: {
        Header,
        Tag
    },
    data() {
        return{
            products: [
                {

                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../assets/common/base.styl';
.index
    .content
        margin 0 auto
        display flex
        align-items flex-start
        width 1220px
        min-height calc(100% - 90px)
        .content-left
            .my-tags
                margin-top 2px
                width 300px
                padding 10px
                background #fff
                box-shadow  0 0 10px #fff
                border 1px solid #fffafa
                h1
                    line-height 30px
                    margin-bottom 10px
            .introduce
                margin-top 2px
                width 300px
                padding 10px
                background #fff
                box-shadow  0 0 10px #fff
                border 1px solid #fffafa
                ul
                    .name
                        display flex
                        align-items flex-start
                        padding 10px 0
                        .name-left
                            flex 0 0 30%
                            margin-right 20px
                            .namel-cn
                                @extend .main-color
                                margin-bottom 5px
                                font-size 16px
                            .namel-en
                                @extend .sec-color
                                font-size 10px    
                        .name-right
                            .namer
                                font-size 14px
                                font-weight 100
        .content-right
            margin-left 2px
            flex 1
            height 100%
            background #fff
            padding 10px
            border 1px solid #fffafa
            h1
                line-height 30px
                margin-bottom 10px
            ul
                display flex
                flex-wrap wrap
                width 90%
                padding 5% 5%
                li
                    flex 0 0 32.33%
                    background #f7f4f9
                    border-radius 10px
                    padding 5% 0
                    margin-bottom 10px
                    &:nth-child(3n+2)
                        margin-left 1.5%
                        margin-right 1.5%
                    .pro-content
                        width 100%
                        text-align center
                        img
                            width 80%
                        .pro-title
                            margin 10px 0
                            font-size 18px
                            font-weight 600
                        .pro-desc
                            font-size 14px
                            @extend .sec-color

</style>
