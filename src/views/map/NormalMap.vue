<template>
  <div>
    <map-selector :map-list="mapList" @onChangeMap="onChangeMap"></map-selector>
    <map-show :map-drop="dropN"></map-show>
  </div>
</template>

<script>
import MapSelector from "./child-comps/MapSelector";
import MapShow from "./child-comps/MapShow";

export default {
  components: {
    MapSelector,
    MapShow
  },
  data() {
    return {
      mapList: [],
      mapId: '1',
      
    };
  },
  methods: {
    onChangeMap(id) {
      this.mapId = id
    }
  },
  computed: {
    dropN() {
      let list = this.$store.state.dropN
      let drop = list.filter(item => item.id == this.mapId)
      return drop[0].drop
    }
  },
  created() {
    let list = this.$store.state.dropN;
    this.mapList = list.map(item => {
      return { value: item.id, label: item.name };
    });
    // console.log(this.mapList)
  }
};
</script>

<style>
</style>