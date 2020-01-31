const { reactive , computed } = require('vue');
const { registerModules } = require('./modules/index');


class Store{
  constructor(options){
    let state = reactive(options.state);
    if(options.modules){
      state = registerModules(options.modules , state);
    }
    if(options.state){
      this.state = reactive(state)
    }
    if(options.mutations){
      this.mutations = options.mutations;
    }
    if(options.actions){
      this.actions = options.actions;
    }
    if(options.getters){
      this.getters = {};
      const {getters} = options;
      for(const [handle , fn] of Object.entries(getters)){
        Object.defineProperty(this.getters , handle , {
          get: () => computed(() => fn(this.state)).value, 
          enumerable: true
        });
      }
    }
  }

  commit(handle , payload){
    this.mutations[handle](this.state , payload);
  }
  
  dispatch(handle , payload){
    //const call = this.actions[handle](this , payload);
    //if (!call || !call.then) {
    //  return Promise.resolve(call)
    //}
    const action = this.actions[handle];
    const call = action(this , payload);
    if(!call || !typeof call.then){
      return Promise.resolve(call)
    }
    return call;
  }
}

const StoreFX = {
  Store
};

module.exports = {
  StoreFX
}