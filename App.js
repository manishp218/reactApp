import React from 'react';
class App extends React.Component{
	constructor() {
      super();
      this.state = {
		  header: "Hello world",
		  content: "Welcome to my page",
         data: 
         [
            {
               "name":",Manish Punjabi",
               "profession":"UI Developer",
			   "experience": "8 years"
            }
         ]
      }
   }
   render(){
      return(
         <div>
            <Header headerProp = {this.state.header}/>
			<Content contentProp = {this.state.content}/>
			<table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component{
	render(){
		var headStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
		return(
		<div>
			<h1 style= {headStyle}>{this.props.headerProp}</h1>
		</div>
		)
	};
}

class Content extends React.Component{
	render(){
		var stateStyle = {
			fontSize: 50,
			color: '#FF0001'
		}
		return(
		<div>
	<h2 style = {stateStyle}>}{this.props.contentProp}</h2>
		</div>
		)
	}
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.profession}</td>
			<td>{this.props.data.experience}</td>
         </tr>
      );
   }
}
export default App;