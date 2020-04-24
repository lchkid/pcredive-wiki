<template>
  <div class="map-selector">
    <Select 
      v-model="defaultOption" 
      style="width:200px"
      @on-change="onChangeMap"
    >
      <Option v-for="(item, index) in mapList" :value="item.value" :key="item.value">{{index + 1}}.{{item.label}}</Option>
    </Select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultOption: 1
    }
  },
  props: {
    mapList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onChangeMap(id) {
      this.$emit('onChangeMap', id)
    }
  }
};
</script>

<style>
</style>