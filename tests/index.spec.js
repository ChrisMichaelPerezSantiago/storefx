const {StoreFX} = require('../src/storefx/index');


const createStore = () => new StoreFX.Store({
  state:{
    count: 1
  },
  mutations:{
    INCREMENT(state , payload){
      state.count += payload;
    }
  },
  actions:{
    increment(context , payload){
      context.commit('INCREMENT' , payload)
    }
  },
  getters:{
    triple: state => state.count * 3
  }
});


test('commit mutation' , () =>{
  const store = createStore();
  store.commit('INCREMENT' , 5);
  expect(store.state.count).toBe(6);
});

test('dispatch actions' , () =>{
  const store = createStore();
  return store.dispatch('increment' , 1)
    .then(() =>{
      expect(store.state.count).toBe(2);
    });
});

test('getters' , () =>{
  const store = createStore();
  expect(store.getters['triple']).toBe(3);
  store.commit('INCREMENT' , 1);
  expect(store.getters['triple']).toBe(6)
});

// Nested state with modules eg. 2 levels
test('Nested state with modules' , () =>{
  const store = new StoreFX.Store({
    state:{},
    modules:{
      one:{         // -> Level #1
        state:{},
        modules:{
          two:{     // -> Level #2
            state:{
              name: 'This state is part of level 2'
            },
          }
        }
      }
    }
  });
  expect(store.state.one.two.name).toBe('This state is part of level 2');
});
