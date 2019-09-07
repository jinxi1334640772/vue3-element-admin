import vue from 'vue';
import vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import moduleA from './modules/moduleA';
vue.use(vuex)

const store = new vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules:{
        moduleA
    }
})
export default store;