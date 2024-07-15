import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://zenlee-george.github.io/first_api/data/index.json'

export default createStore({
  state: {
    education: null,
    aboutMe: null,
    work: null,
    projects: null,
    testimonials: null,
    skills: null,
    hobbies: null,
    designSkills: null,
    softSkills: null
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
    setHobbies(state, payload) {
      state.hobbies = payload
    },
    setEducation(state,payload) {
      state.education = payload
    },
    setWork(state,payload) {
      state.work = payload
    },
    setProjects(state,payload) {
      state.projects = payload
    },
    setTestimonials(state,payload) {
      state.testimonials = payload
    },
    setSkills(state,payload) {
      state.skills = payload
    },
    setDesignSkills(state,payload) {
      state.designSkills = payload
    },
    setSoftSkills(state,payload) {
      state.softSkills = payload
    }
  },
  actions: {
    async getJobTitle(context){
      try {
        let {jobTitle} = (await axios.get(portfolioURL)).data
        context.commit('setJobTitle', jobTitle)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getAboutMe(context){
      try {
        let {aboutMe} =  (await axios.get(portfolioURL)).data
        
        context.commit('setAboutMe', aboutMe)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
      // let converted = await fetchedInfo.json()
      // console.log(converted.aboutMe);
      // context.commit('setAboutMe', converted.aboutMe)
    },
    async getHobbies(context){
      try {
        let {hobbies} = (await axios.get(portfolioURL)).data
        context.commit('setHobbies', hobbies)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getEducation(context){
      try {
        let {education} = (await axios.get(portfolioURL)).data
        context.commit('setEducation', education)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getWork(context){
      try {
        let {work} = (await axios.get(portfolioURL)).data
        context.commit('setWork', work)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getSkills(context){
      try {
        let {skills} = (await axios.get(portfolioURL)).data
        context.commit('setSkills', skills )
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getProjects(context){
      try {
        let {projects} = (await axios.get(portfolioURL)).data
        context.commit('setProjects', projects)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getTestimonials(context){
      try {
        let {testimonials} = (await axios.get(portfolioURL)).data
        context.commit('setTestimonials', testimonials)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getDesignSkills(context){
      try {
        let {designSkills} = (await axios.get(portfolioURL)).data
        context.commit('setDesignSkills', designSkills)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getSoftSkills(context){
      try {
        let {softSkills} = (await axios.get(portfolioURL)).data
        context.commit('setSoftSkills', softSkills)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    }
  },
  modules: {
  }
})


