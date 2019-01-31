import Vue from 'vue';
import axios from "axios/index";
import navigation from "./blogNav";

const asideMenu = {
  props: {
    articlesData: Array
  },
  template: '#aside-menu'
};

const articles = {
  props: {
    articlesData: Array
  },
  template: '#articles__section'
};

new Vue({
  el: "#articles-component",
  components: {
    asideMenu, articles
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    axios.get('https://webdev-api.loftschool.com/posts/91').then(response => {
      this.articles = response.data
    }).then(response => {
      navigation()
    })
  },
  template: "#articles"
});

