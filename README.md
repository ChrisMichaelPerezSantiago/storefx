<p align="center">
  <img src="./assets/img/storefx.png" style="display: block; margin-left: auto; margin-right: auto; ">
</p>

<p align="center">
Storefx is a state management pattern based on the singleton architecture that allows us to have centralized and accessible data in any component within the application but without being able to be modified without some control. Inspired by the vue state management library
</p>


<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" target="_blank" />
    <img src="https://img.shields.io/badge/JS-Library-blue.svg" target="_blank" />  
  <img src="https://img.shields.io/badge/Storefx-State/Management-blue.svg" target="_blank" />  
</p>


  [![Build Status](https://travis-ci.com/ChrisMichaelPerezSantiago/storefx.svg?branch=master)](https://travis-ci.com/ChrisMichaelPerezSantiago/storefx) 



Project In Development ...


# Store structure

The Store is an instance of the `StoreFX.Store` object, which consists of four objects. The four objects are the `state`, `actions`, `mutations` and `getters`.

```js
import {state} from './state';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters'; 

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
```



## state.js
The `state` is an object that contains the state of the application data.

```js
export const state = {
  data: [],
  isLoading: true
};

```

## mutations.js
`Mutations` is also an object that contains methods that affect the state and only care to control the states, to manipulate it.

A mutation may have two arguments as state and payload:
- [x] **State** has the current state of an application.
- [x] **Payload** is an optional one, which will give the data to mutate.

```js
 export const mutations = {
   SET_DATA(state , payload){
     state.data = payload;  
   },
   IS_LOADING(state , payload){
     state.isLoading = payload;
   }
 };
```

## actions.js
`Actions` are methods used to cause mutations and execute asynchronous code. Responsible for preparing everything necessary for a mutation to confirm a change in the state.

The actions expect a promise to be resolved, hence we make a return of the promise that returns axios. When axios returns the data, we can execute commits with the type of mutation that we want to carry out. Instead of mutating the state, actions commit mutations, in this case, using the mutator SET_DATA. And the mutator IS_LOADING that will help to know if there is still data to load.


## getters.js
`Getters` contain the methods used to abstract access to the state and to do some preprocessing tasks, if necessary (data calculation, filtering, etc …).

- [x] **Getters** will receive the state as their 1st argument

```js
const _ = require('lodash');

export const getters = {
  FILTER_SPESIFIC_DATA: (state) =>{
    return _.filter(state.data , (data) =>{
      // ....
    });
  }
};
```


## <img src="https://img.icons8.com/color/48/000000/paypal.png"> **Donations**
Storefx is an open source project licensed by MIT with continuous development. If you want me to continue maintaining this library and you are interested in continuing to use it, you can help me with a monetary help in the following link:


- [One-time donation via PayPal.](https://paypal.me/chrismperezsantiago?locale.x=en_US)

<a href="https://www.buymeacoffee.com/chrismichael" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

These are projects that take a lot of effort and time to maintain. So with your help I will be more motivated to continue maintaining the Storefx project.



## **:handshake: Contributing**

* Fork it!
* Create your feature branch: `git checkout -b my-new-feature` 
* Commit your changes: `git commit -am 'Add some feature'` 
* Push to the branch: `git push origin my-new-feature` 
* Submit a pull request

---

### **:busts_in_silhouette: Credits**

* [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris Michael*_

> You can follow me on

[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp; &middot; &nbsp; [twitter](https://twitter.com/Chris5855M)

