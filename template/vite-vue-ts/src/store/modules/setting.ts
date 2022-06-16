interface SettingState {
  count: number
}


export default {
  state(): SettingState {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: SettingState) {
      state.count++
    }
  }
}