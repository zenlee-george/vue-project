import { createStore } from 'vuex'
const portfolioURL = 'https://github.com/zenlee-george/first_api/blob/main/data/index.json'

export default createStore({
  state: {
    education: null,
    aboutMe: null,
    work: null,
    projects: null,
    testimonials: null,
    skills: null,
    softSkills: null,
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, payload) {
      state.jobTitle = payload
    },
    setAboutMe(state, payload) {
      state.aboutMe = payload
    },
    setEducation(state, payload) {
      state.education = payload
    },
    setWork(state, payload) {
      state.work = payload
    },
    setProjects(state, payload) {
      state.projects = payload
    },
    setTestimonials(state, payload) {
      state.testimonials = payload
    },
    setSkills(state, payload) {
      state.skills = payload
    },
    setSoftSkills(state, payload) {
      state.softSkills = payload
    },
  },
  actions: {
    async fetchPortfolio({ commit }) {
      try {
        const response = await fetch(portfolioURL)
        const data = await response.json()
        const { education, aboutMe, work, projects, testimonials, skills, softSkills } = data
  
        commit('setEducation', education)
        commit('setAboutMe', aboutMe)
        commit('setWork', work)
        commit('setProjects', projects)
        commit('setTestimonials', testimonials)
        commit('setSkills', skills)
        commit('setSoftSkills', softSkills)
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
      }
    }
  },
  modules: {
  },
})