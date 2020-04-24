<template>
  <div id="app">
    <nav-menu></nav-menu>
    <div id="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div> 
    <footer id="footer">
      <p>&copy 2020 lchkid</p>
      <p><a href="https://wiki.biligame.com/pcr/">公主连结WIKI</a></p>
    </footer>
  </div>
</template>

<script>
import NavMenu from './components/nav-menu/NavMenu'

import Character from '@/views/character/Character'

export default {
  components: {
    NavMenu,
    Character
  }
}
</script>

<style scoped>
#content {
  padding: 30px;
  max-width: 1400px;
  min-height: calc(100vh - 240px);
  margin: 100px auto 40px;
  border: 2px solid #f55291;
  box-shadow: 0 0 10px 1px #f55291;
  border-radius: 5px;
  text-align: center;
}

#footer {
  height: 100px;
  text-align: center;
  font-size: 20px;
}
</style>
