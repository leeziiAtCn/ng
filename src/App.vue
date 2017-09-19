<template>
  <div id="app">
    <!--<router-view></router-view>-->
    1
  </div>
</template>

<script>
  export default {
    created () {
      this.$http.post('http://192.168.1.203:9002/image/vc/valid', {
        keyCode: '111',
        imgCode: '111'
      }).then(({data}) => {
        console.log(data)
      })
      let a = [1, 2, 2, 2]
      let b = a.map(v => v)
      console.log(Object.assign(a, b))
    }
  }
</script>

<style lang="less" scoped>
  #app {
    color: red;
  }

  .a {
    background: red;
  }
</style>
