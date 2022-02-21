<template>
    <div>
        <h3>Home.vue</h3>

        <h5>{{ msg }}</h5>
        홈화면입니다.
    </div>
</template>

<script>
    export default {
        props : {
            msg : String
        },

        data() {
            return {
                total : 0
            }
        },

        methods : {
            plus(n1, n2) {
                this.total = n1 + n2;
                return this.total;    
            },

            minus(n1, n2) {
                this.total = n1 - n2;
                return this.total;
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>