<template>
  <div class="map-show">
    <table>
      <thead>
        <tr>
          <th></th>
          <th class="th-main">主要掉落</th>
          <th class="th-vice">次要掉落</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in mapDrop">
          <td class="td-order">{{item.order}}</td>
          <td class="td-main">
            <div v-for="jtem in item.main">
              <a :href="getItemUrl(jtem)">
                <img :src="getItemPic(jtem)" :title="jtem" :alt="jtem" />
              </a>
            </div>
          </td>
          <td class="td-vice">
            <div v-for="jtem in item.vice">
              <a :href="getItemUrl(jtem)">
                <img :src="getItemPic(jtem)" :title="jtem" :alt="jtem" />
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    mapDrop: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getItemUrl(name) {
      let e = this.$store.state.equipment;
      let d = e.filter(i => i.name == name);
      return d[0].url;
    },
    getItemPic(name) {
      let e = this.$store.state.equipment;
      let d = e.filter(i => i.name == name);
      return d[0].pic;
    }
  }
};
</script>

<style scoped>
table {
  box-sizing: content-box;
  text-align: center;
  font-size: 20px;
  border-collapse: collapse;
  margin: 20px auto;
}

tr {
  display: flex;
}

th {
  flex: 1;
  padding: 5px;
}

.th-main {
  flex: 3;
}

.th-vice {
  flex: 5;
}

td {
  flex: 1;
  padding: 5px;
  display: flex;
  align-items: center;
}

.td-order {
  width: 100px;
  justify-content: center;
}

td div {
  margin: 0 5px;
}

td img {
  width: 100px;
  height: 100px;
}
</style>