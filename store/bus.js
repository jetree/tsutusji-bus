export const state = () => ({
  rosen_data: null,
  longitude: 136.188187,
  latitude: 35.94330
})

export const mutations = {
  busstop (state, json) {
    state.rosen_data = json.busstop
  }
}

export const actions = {
  get_busstop (context, json) {
    context.commit('busstop', json)
  }
}
