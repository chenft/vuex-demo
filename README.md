# vuex-demo

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## state 访问状态对象

### 通过 computed 的计算属性直接赋值

```js
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
```

```html
<div>count: {{ count }}</div>
```

### 通过 mapState 的对象来赋值

```js
import { mapState } from 'vuex';

export default {
  computed: mapState({
    num: state => state.num,
    count: state => state.count
  })
};
```

```html
<div>
  <div>count: {{ count }}</div>
  <div>num: {{ num }}</div>
</div>
```

### 通过 mapState 的数组来赋值

```js
import { mapState } from 'vuex';

export default {
  computed: mapState(['num', 'count'])
};
```

```html
<div>
  <div>count: {{ count }}</div>
  <div>num: {{ num }}</div>
</div>
```

## Mutations 修改状态

Mutations 是同步改变状态

### 获取 Mutations 方法

```js
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState(['num', 'count']),
  methods: mapMutations(['add', 'decrease'])
};
```

```html
<div>
  <button @click="add(2)">add</button>
  <button @click="decrease(3)">decrease</button>
</div>
```

## getter 计算过滤操作

```js
const getters = {
  count: (state) => {
    console.log(1);
    state.count += 100;
    return state.count;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
});

import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['count', 'num']),
    ...mapGetters(['count'])
  },
  methods: mapMutations(['add', 'decrease'])
};
```

```html
<div>
  <button @click="add(2)">add</button>
  <button @click="decrease(3)">decrease</button>
</div>
```

## actions 异步修改状态

actions 是异步的改变 state 状态

```js
const actions = {
  addAction(ctx) {
    ctx.commit('add', 4);
    setTimeout(() => {
      ctx.commit('decrease');
    }, 3000);
    console.log('我比reduce提前执行');
  },
  decreaseAction({ commit }) {
    commit('decrease');
  }
};

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['count', 'num']),
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add', 'decrease']),
    ...mapActions(['addAction', 'decreaseAction'])
  }
};
```

```html
<div>
  <button @click="addAction">add</button>
  <button @click="decreaseAction">decrease</button>
</div>
```

## module 模块组

```js
const moduleCount = {
  state,
  mutations,
  actions
};
export default new Vuex.Store({
  modules: {
    moduleCount,
  },
  getters,
});

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['count', 'num']),
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add', 'decrease']),
    ...mapActions(['addAction', 'decreaseAction'])
  }
};
```

```html
<div>
  <div>count: {{ count }}</div>
  <div>num: {{ num }}</div>
  <div>
    <button @click="addAction">add</button>
    <button @click="decreaseAction">decrease</button>
  </div>
</div>
```
