import { defineStore } from 'pinia'

export const useCasheModuleStore = defineStore('casheModuleStore', {
  state: () => ({
    post: localStorage.getItem('module_post'),
    comment: localStorage.getItem('module_comment')
  }),
  getters: {
    getPost(state) {
      return JSON.parse(state.post)
    },
    getComment(state) {
      return JSON.parse(state.comment)
    }
  },
  actions: {
    setModule(module, object) {
      let { id } = object
      if (!id) {
        throw 'require id'
      }
      localStorage.setItem(`module_${module}`, JSON.stringify(object))
      this[module] = JSON.stringify(object)
    },
    removeCasheModuleStore() {
      localStorage.removeItem('module_post')
      this.post = null
      localStorage.removeItem('module_comment')
      this.comment = null
    }
  }
})
