<template>
  <div>
    key:<input type="text" v-model="key" /><br>
    景品番号:<input type="number" v-model="num" /><br>
    operate:
    <select v-model="operate">
      <option hidden>Please select command</option>
      <option v-for="n of command" :key="n">{{ n }}</option>
    </select>
    <br>
    <input type="button" value="send" @click=sendData />
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      operate: "null",
      key: "null",
      command: [
        "init",
        "show id",
        "show prize",
        "show winner",
        "lottery"
      ]
    }
  },
  methods: {
    sendData () {
      console.log(this.operate)
      this.$axios.$post(
        `${process.env.APIHost}/operation`,
        JSON.stringify({
          api_key: this.key,
          prize_id: this.num,
          operation: this.operate
        })
      ).then((result) => {
        console.log("done")
      }).catch((err) => {
        console.log("error")
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
