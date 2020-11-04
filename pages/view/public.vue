<template>
  <div class="container">
    <div class="number">
      <span>{{num}}</span>
    </div>
    <div class="content">
      <span>{{content}}</span>
    </div>
    <div class="win-name">
      <span>{{winName}}</span>
    </div>
    <div class="win-class">
      <span>
        {{winClass}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      socket: new WebSocket(`${process.env.API}/ws`),
      num: 0,
      content: "景品名",
      winName: "名前",
      winHuri: "ふりがな",
      winClass: "クラス"
    }
  },
  created () {
    this.socket.onmessage = (e) => {
      this.dataSet(e)
    }
    this.socket.onopen = () => {
      this.dataSet(e)
      console.log("connecting")
    }
    this.socket.onerror = () => {
      console.log("error")
    }
    this.socket.onclose = () => {
      console.log("close")
    }
  },
  methods: {
    dataSet (e) {
      const d  = JSON.parse(e.data)
      this.num = d.prize.id
      this.content = d.prize.name
      this.winName = d.winner.name
      this.winHuri = d.winner.name_furigana
      this.winClass = d.winner.class
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  border: 1px black solid;
  height: 100%;
  display: grid;
  grid-template-rows: 40% 1fr;
  grid-template-columns: 20% 1fr;

  .number{
    border-bottom: 4px black solid;
    position: relative;
    grid-row: 1;
    grid-column: 1;

    font-size: 15rem;
  }

  .content{
    border-bottom: 4px black solid;
    position: relative;
    grid-row: 1;
    grid-column: 2;

    font-size: 5rem;
  }

  .win-name{
    position: relative;
    grid-row: 2;
    grid-column: 2;

    font-size: 11rem;
  }

  .win-class{
    position: relative;
    grid-row: 2;
    grid-column: 1;

    font-size: 11rem;
  }

  span{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform : translateX(-50%) translateY(-50%);
  }
}
</style>
