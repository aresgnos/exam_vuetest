<template>
    <div style="padding:10px;">
        <h3>{{ title }}</h3>

        <p>현재 메뉴번호는 {{menu}}입니다. </p>

        <button @click="changeMenuAction(1)">정보수정</button>
        <button @click="changeMenuAction(2)">암호변경</button>
        <button @click="changeMenuAction(3)">회원탈퇴</button>
        <hr />
        
        <!-- <input type="button" value="정보수정1" @click="changeMenu(1)" />
        <input type="button" value="암호변경1" @click="changeMenu(2)" />
        <input type="button" value="회원탈퇴1" @click="changeMenu(3)" /> -->

        <br /><br />
        <div v-if="menu===1">정보수정메뉴</div>
        <div v-if="menu===2">암호변경메뉴</div>
        <div v-if="menu===3">회원탈퇴메뉴</div>
    </div>
</template>

<script>
    export default {
        props : {
            title : String
        },
        
        data() {
            return {
                menu : 1
            }
        },

        methods:{
            changeMenuAction(idx){
                this.menu = idx;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
