import storage from '@/utils/storage'
const state = () => {
  return {
    // 先把北京定住
    currentCity: storage.get('currentCity'),
    currentCityCode: storage.get('currentCityCode'),
    queryParams: {
      cityId: storage.get('currentCityCode'),
      area: '',
      price: '',
      rentType: '',
      start: 1,
      end: 20,
      more: ''
    }
  }
}

const mutations = {
  UPDATE_QUERY_PARAMS(state, paramsObj) {
    const keys = Object.keys(paramsObj)
    keys.forEach((key) => {
      if (paramsObj[key] !== '') {
        // 传过来的只要不是空字段，就更新字段
        state.queryParams[key] = paramsObj[key]
      }
    })
  },
  SET_PAGE(state, isInit) {
    // 参数是否初始化，默认累加
    if (isInit) {
      state.queryParams.start = 1
      state.queryParams.end = 20
    } else {
      state.queryParams.start += 20
      state.queryParams.end += 20
    }
  },
  SET_CITY(state, { cityName, cityCode }) {
    state.currentCity = cityName
    state.currentCityCode = cityCode
    storage.set('currentCity', cityName)
    storage.set('currentCityCode', cityCode)
  }
}

export const city = {
  namespaced: true,
  mutations,
  state
}
