<template>
  <div>

    <div>
      <button @click="handleMenu(1)">홈</button>
      <button @click="handleMenu(2)">로그인</button>
      <button @click="handleMenu(3)">회원가입</button>
      <button @click="handleMenu(4)">마이페이지</button>
    </div>
    <hr />
      <home v-if="state.menu===1"></home>
      <login v-if="state.menu===2" msg="login"></login>
      <join v-if="state.menu===3" title="회원가입"></join>
      <mypage v-if="state.menu===4" title="마이페이지"></mypage>
    <hr />
    <div>
      copyright
    </div>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Join from '@/components/ExJoin.vue'
import Login from '@/components/Login.vue'
import Mypage from '@/components/ExMypage.vue'
import { reactive } from 'vue'

  export default {
    components : {
      Home, 
      Login, 
      Join,
      Mypage
    },

    setup () {
      const state = reactive ({
        menu : 1
      })
      const handleMenu = (idx) => {
        state.menu = idx;
      }

      return {state, handleMenu}
    }
  }
</script>

<style lang="scss" scoped>

</style>