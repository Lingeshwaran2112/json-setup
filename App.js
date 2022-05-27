import React, {Component} from "react";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [""],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("https://cms.idfcmf.com/en/api/v1/about-us-menu")
		.then((res) => res.json())
		.then((json) => {
			this.setState({
				items: json,
				DataisLoaded: true
			});
		})
		let response = {

		}

		// const career = {
		// 	"routeConstant": "/about-us/career",
        //     "linkName": "career",
        //     "linkDescription": null,
        //     "linkUrl": null,
        //     "weight": "-50",
        //     "hasChild": false,
        //     "attributes": { "target": "_self", "rel": "/about-us/career", "class": "about-us-career" },
        //     "childrens": []
		// }
	}

	render() 
	{
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <h1> Pleses wait some time.... </h1>;
		console.log(items.menus);
		return (
			<div className = "App">
				<h1> Fetch data from an api in react </h1> 
				{
					items.menus.map((item) => (
					<ol key = { item.routeConstant } >
						<li>Url: { item.routeConstant }</li>
						</ol>
					))
				}
			</div>
		);
	}
}

export default App;
