export const state = () => ({
  rosen_data: '',
  longitude: 35.943302,
  latitude: 136.188187
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
