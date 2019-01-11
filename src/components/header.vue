<template>
    <div class="header border-1px">
        <div class="header-content">
            <div class="icon">
                <p>NicoLia</p>
            </div>
            <div class="title">
                <div class="resume">
                    <p>简历</p>
                </div>
                <div class="work">
                    <p>设计作品</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
@import "../assets/common/base.styl"
.header
    position relative
    background url(../assets/img/header-bg.png) repeat-x
    .header-content
        @extend .flex-center
        margin 0 auto 
        width 1220px
        height 100px
        line-height 100px
        .icon
            p
                background linear-gradient(to right top, #999 0%, #999 49%, #333 50%, #333 100%)
                -webkit-background-clip text
                color transparent
                font-size 30px
                font-weight 100
        .title
            @extend .flex-center
            color rgba(0,0,0,0.4)
            .resume
                margin-right 20px
                color #4d4d4d

</style>

