<template>
    <div>
        <h3>Login.vue</h3>
        <h5>{{ msg }} </h5>

        아이디 : <input type="text" v-model="userid" /> <br />
        암호 : <input type="text" v-model="userpw" /> <br />
        아이디 저장 : <input type="checkbox" v-model="chk" /> <br />
        <button @click="handleLogin">로그인</button>
    </div>
</template>

<script>
    export default {
        // 부모컴포넌트(App.vue)에서 전송되어 오는 값
        props : {
            msg : {
                type : String,
                defalut : ''
            }
        },

        setup () { //created, methods, data
            return { }
        },

        data() { //setup() { const state = reactive({ }) }
            return {
                userid : '', //아이디 연결
                userpw : '', //암호 연결
                chk : true, //체크박스 연결 
            }
        },

        methods : {
            handleLogin() {
                // 유효성 검사
                if(this.userid === ''){ // 비어있다면
                    return false;
                }

                // 백엔드 연동
                return true;
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>