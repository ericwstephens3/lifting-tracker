import React, {Component} from 'react';
import './HomePage.css';

class HomePage extends Component{
    constructor (props){
        super(props);
    }
    render(){
        return(
            <body>
            <div className = "HomePage">
            <header className = "HomePageHeader">
                {/*fill later*/}
            </header>
            <div>
                <form>
                    <h1>Enter One Rep Maxes</h1>
                    <div className= "row">
                        <div className = "columnDiv">
                            <p>Overhead Press: </p>
                        </div>
                        <div className = "columnInput">
                            <input type = "text" pattern = "[0-9]" className="Input"/>
                        </div>
                    </div>
                    <div className= "row">
                        <div className = "columnDiv">
                            <p>Bench Press: </p>
                        </div>
                        <div className = "columnInput">
                            <input type = "text" pattern = "[0-9]" className="Input"/>
                        </div>
                    </div>
                    <div className= "row">
                        <div className = "columnDiv">
                            <p>Squat: </p>
                        </div>
                        <div className = "columnInput">
                            <input type = "text" pattern = "[0-9]" className="Input"/>
                        </div>
                    </div>
                    <div className= "row">
                        <div className = "columnDiv">
                            <p>Deadlift: </p>
                        </div>
                        <div className = "columnInput">
                            <input type = "text" pattern = "[0-9]" className="Input"/>
                        </div>
                    </div>
                    <div className = "submitDiv">
                    <input type = "submit" value = "Save One Rep Maxes" className="InputAlignCenter"/>
                    </div>
                </form>
            </div>
        </div>
        </body>
        )
    }
}

export default HomePage;