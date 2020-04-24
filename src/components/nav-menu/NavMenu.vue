<template>
  <header id="header">
    <Menu mode="horizontal" theme="light" :active-name="activeName" @on-select="onSelect">
      <a href="/"><div class="header-logo"></div></a>
      <!-- <div class="navbar-toggler">
        <div class="navbar-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>-->
      <div class="header-menu">
        <MenuItem name="character">
          <Icon type="ios-people" />角色图鉴
        </MenuItem>
        <MenuItem name="equipment">
          <Icon type="ios-keypad" />装备图鉴
        </MenuItem>
        <Submenu name="">
          <template slot="title">
            <Icon type="ios-stats" />地图掉落
          </template>
          <MenuItem name="normal">
            <Icon type="ios-navigate" />普通地图
          </MenuItem>
          <MenuItem name="hard">
            <Icon type="ios-navigate" />困难地图
          </MenuItem>
        </Submenu>
        <MenuItem name="4">
          <Icon type="ios-paper" />其他相关
        </MenuItem>
      </div>
    </Menu>
  </header>
</template>

<script>
export default {
  methods: {
    // 导航栏点击事件
    onSelect(pathName) {
      this.$router.push(pathName);
    }
  },
  computed: {
    activeName() {
      return this.$route.name;
    }
  }
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
}

.header-logo {
  width: 100px;
  height: 40px;
  background: url("~@/assets/img/logo_pcr.png") 0 0/150% no-repeat;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 10px;
  left: 50px;
}

.header-menu {
  max-width: 500px;
  margin: 0 auto;
  margin-right: 50px;
}

.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
  color: #f55291;
  border-bottom: 2px solid #f55291;
}

.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item:hover,
.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-selected,
.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-selected:hover {
  color: #f55291;
  border-bottom: none;
}

/* @media only screen and (max-width: 878px) {
  .navbar-toggler {
    position: absolute;
    top: 16px;
    right: 50px;
  }

  .navbar-icon {
    position: relative;
  }

  .navbar-icon span {
    display: block;
    height: 2px;
    width: 40px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f55291;
  }

  .navbar-icon span:nth-child(2) {
    top: 8px;
  }

  .navbar-icon span:nth-child(3) {
    top: 16px;
  }

  .navbar-icon span:last-child {
    top: 24px;
  }
} */
</style>