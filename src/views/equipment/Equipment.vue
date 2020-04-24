<template>
  <div id="equipment">
    <div class="e-search">
      <Input
        autofocus
        clearable
        v-model="searchItem"
        size="large"
        @on-keyup="onSearch(searchItem)"
        @on-clear="onClear"
      />
    </div>
    <Row class="c-row">
      <Col class="c-col" :xs="8" :sm="6" :md="4" :lg="2" v-for="item in equipment" :key="item.name">
        <a :href="item.url">
          <img :src="item.pic" :title="item.name" :alt="item.name"/>
          <p>{{item.name}}</p>
        </a>
      </Col>
    </Row>
  </div>
</template>

<script>
import { autoComplete } from "@/common/utils";

export default {
  data() {
    return {
      equipment: [],
      searchItem: ""
    };
  },
  methods: {
    onSearch(v) {
      if (!v) this.equipment = this.$store.state.equipment;
      let e = this.equipment.filter(i => i.name.indexOf(v) != -1);
      this.equipment = e;
    },
    onClear() {
      this.equipment = this.$store.state.equipment;
    }
  },
  created() {
    this.equipment = this.$store.state.equipment;
  }
};
</script>

<style scoped>
.e-search {
  max-width: 600px;
  margin: 0 auto;
}

.c-row {
  margin-top: 20px;
}

.c-col {
  margin: 5px 0;
}

.c-col img {
  width: 100px;
}
</style>