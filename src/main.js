import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Quote from './components/Quote.vue'
import ContactSection from './components/ContactSection.vue'
import Contact from './components/Contact.vue'
import Warehouse from './components/Warehouse.vue'
import Service from './components/Service.vue'

// Install plugins
Vue.use(Router)
Vue.use(Resource)

// Set up a new router
var router = new Router()

// Route config
router.map({
  '/home':{
    name: 'home',
    component: Home
  },
  '/about':{
    name: 'about',
    component: About
  },
  '/quote':{
    name: 'quote',
    component: Quote
  },
  '/contact-section':{
    name: 'contact-section',
    component: ContactSection
  },
  '/contact':{
    name: 'contact',
    component: Contact
  },
  '/warehouse':{
    name: 'warehouse',
    component: Warehouse
  },
  '/service':{
    name: 'service',
    component: Service
  }
})

// For every new route scroll to the top of the page
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// If no route is matched redirect home
router.redirect({
  '*': '/home'
})

// Start up our app
router.start(App, '#app')
