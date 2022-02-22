<template>
    <div style="padding:10px;">

    {{ state }} <br />

    <h3>{{ title }}</h3>
    
    <div style="width:100px;display:inline-block">아이디 :</div>
    <input type="text" v-model="state.userid" placeholder="아이디" />
    <button @click="handleIdCheck">중복확인</button> <br />

    <div style="width:100px;display:inline-block">암호 :</div>
    <input type="password" v-model="state.userpw" placeholder="암호" /><br />
    
    <div style="width:100px;display:inline-block">암호확인 :</div>
    <input type="password" v-model="state.userpw1" placeholder="암호확인" /><br />

    <div style="width:100px;display:inline-block">이름 :</div>
    <input type="password" v-model="state.username" placeholder="이름" /><br />

    <div style="width:100px;display:inline-block">연락처 :</div>
    <input type="password" v-model="state.userphone" placeholder="연락처" /><br />

    <div style="width:100px;display:inline-block">나이 :</div>
    <input type="text" v-model="state.userage" placeholder="나이" /><br />

    <div style="width:100px;display:inline-block">관심분야 :</div>
    <input type="checkbox" v-model="state.userinfo" value="1" />html
    <input type="checkbox" v-model="state.userinfo" value="2" />css
    <input type="checkbox" v-model="state.userinfo" value="3" />vue
    <input type="checkbox" v-model="state.userinfo" value="4" />nodejs
    <input type="checkbox" v-model="state.userinfo" value="5" />mongodb <br /><br />

    <div style="width:100px;display:inline-block"></div>
    <button @click="handleJoinAction">회원가입</button>

    </div>
</template>

<script>
    export default {
        props : {
            title : String
        },

        data () {
            return {
                state : {
                    userid : '',
                    userpw : '',
                    userpw1 : '',
                    username : '',
                    userphone : '',
                    userage : 0,
                    userinfo : [] //체크박스는 배열
                }
            }
        },
        
        methods : {
            handleIdCheck() {
                if(this.state.userid === ''){
                    return 1;
                }

                return 2;
            },

            handleJoinAction() {
                if(this.state.userpw === this.state.userpw1){ // 다르면
                    return 1;
                }

                return 2;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>