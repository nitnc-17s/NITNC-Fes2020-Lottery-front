export const state = () => ({
  num: 0,
  content: "null",
  name: "null",
  huri: "null",
  class: "null"
})

export const mutations = {
  dataSet (state, arr) {
    state.num = arr[0],
    state.content = arr[1],
    state.name = arr[2],
    state.huri = arr[3],
    state.class = arr[4]
  }
}

export const getters = {
  returnData (state) {
    return [
      state.num,
      state.content,
      state.name,
      state.huri,
      state.class
    ]
  }
}
