import React,{Component} from 'react' ;
require('../../scss/style.scss');
import UserList from '../container/user_list';
import UserDetail from '../container/user_details';
import ContactForm from './myForm';

export default class App extends Component{  //create a component here for display data  

		submit(values){
		console.log("hello",values);
	}
	render(){


		return(
			<div>
				<h2>UserList:</h2>
				<UserList />
				<hr/>
				<h2>UserDetail:</h2>
				<UserDetail />
				<h2>ContactForm</h2>
				<ContactForm onSubmit={this.submit}/>
			</div>
		);
	}
}

