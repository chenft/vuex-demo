<template>
  <div>
    <div>count: {{ count }}</div>
    <div>num: {{ num }}</div>
    <div>
      <button @click="addAction">add</button>
      <button @click="decreaseAction">decrease</button>
    </div>
  </div>
</template>
<script>
import store from '@/vuex/store';
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  store,
  data() {
    return {
      msg: 'Count page',
    };
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  // computed: mapState({
  //   num: state => state.num,
  //   count: state => state.count,
  // }),
  computed: {
    ...mapState(['count', 'num']),
    ...mapGetters(['count']),
  },
  methods: {
    ...mapMutations(['add', 'decrease']),
    ...mapActions(['addAction', 'decreaseAction']),
  },
};
</script>
<style scoped>
</style>
