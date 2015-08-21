import Fluxxor from 'fluxxor';
import Immutable from 'immutable';

export default Fluxxor.createStore({

	foo() {
		console.log("foo");
	},

  	getState() {
        return {
            author: {},
            authors: {}
  		  }
  	}
});
