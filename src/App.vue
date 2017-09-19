<template>
  <div id="app">
    <!--<router-view></router-view>-->
    1
  </div>
</template>

<script>
  export default {
    methods: {
      async test () {
        let {data} = await this.$http.post('http://192.168.1.203:9002/image/vc/valid', {
          keyCode: '111',
          imgCode: '111'
        })
        console.log(data)
      }
    },
    created () {
//      this.$http.post('http://192.168.1.203:9002/image/vc/valid', {
//        keyCode: '111',
//        imgCode: '111'
//      }).then(({data}) => {
//        console.log(data)
//      }).catch(err => {
//        console.log(err)
//        throw err
//      })
      this.test()
      let a = [1, 2, 2, 2]
      let [d, ...c] = a
      console.log(c)
      console.log(d)
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
