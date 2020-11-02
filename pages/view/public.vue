<template>
  <div>
    public
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      content: "null",
      name: "null",
      huri: "null",
      class: "null"
    }
  },
  mounted () {
    [
      this.num,
      this.content,
      this.name,
      this.huri,
      this.class
    ] = this.$store.getters.returnData
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
