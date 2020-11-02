<template>
  <div>
    operation
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
  methods: {
    setData() {
      this.$store.commit('dataSet', [
        this.num,
        this.content,
        this.name,
        this.huri,
        this.class
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
