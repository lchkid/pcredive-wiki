<template>
  <div id="character">
    <Carousel
      class="banner"
      v-model="setting.index"
      :autoplay="setting.autoplay"
      :autoplay-speed="setting.autoplaySpeed"
      :dots="setting.dots"
      :radius-dot="setting.radiusDot"
      :trigger="setting.trigger"
      :arrow="setting.arrow"
    >
      <CarouselItem>
        <div class="carousel">
          <img src="@/assets/img/banner/chun.jpg" alt="chun">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel">
          <img src="@/assets/img/banner/1.png" alt="chun">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel">
          <img src="@/assets/img/banner/2.png" alt="chun">
          </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel">
          <img src="@/assets/img/banner/3.png" alt="chun">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel">
          <img src="@/assets/img/banner/4.png" alt="chun">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel">
          <img src="@/assets/img/banner/5.png" alt="chun">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel">
          <img src="@/assets/img/banner/6.png" alt="chun">
        </div>
      </CarouselItem>
    </Carousel>
    <RadioGroup v-model="sort">
      <Radio label="ssr" border>初始3星</Radio>
      <Radio label="sr" border>初始2星</Radio>
      <Radio label="r" border>初始1星</Radio>
    </RadioGroup>
    <Row class="c-row">
      <Col
        class="c-col"
        :xs="12"
        :sm="8"
        :md="6"
        :lg="3"
        v-for="item in character[sort]"
        :key="item.name"
      >
        <a :href="item.url">
          <img :src="item.pic" :title="item.name" :alt="item.name" />
          <p>{{item.name}}</p>
        </a>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setting: {
        index: 0,
        autoplay: true,
        autoplaySpeed: 3200,
        dots: "inside",
        radiusDot: true,
        trigger: "hover",
        arrow: "hover"
      },
      sort: "ssr",
      character: {}
    };
  },
  created() {
    this.character = this.$store.state.character;
  }
};
</script>

<style scoped>
.banner {
  width: 657px;
  height: 316px;
  margin: 0 auto 10px;
}

.carousel img{
  width: 100%;
}

.c-row {
  margin-top: 20px;
}

.c-col {
  margin: 5px 0;
}
</style>