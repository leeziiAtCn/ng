<template>
  <div>
    <el-button>1</el-button>
  </div>
</template>
<script>
  export default {
    methods: {
      testAxios () {
        this.$axios.post('a').then(res => {
          console.log(res)
        })
      }
    },
    created () {
      this.testAxios()
    }
  }
</script>
