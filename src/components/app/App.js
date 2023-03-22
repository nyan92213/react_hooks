import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import React, { Component } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';


// const DynamicGreating = (props) => {
//     return (
//         <div className={'mb-3 p-3 border border-' + props.color}>
//             {
//                 React.Children.map(props.children, child => {
//                     return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'}) // модифицируем ребенка. Клнировать обязательно
//                 })
//             }
//         </div>
//     )
// }

// const HelloGreatings = () => {
//     return (
//         <div style={{'width': '600px', 'margin': '0 auto'}}>
//             <DynamicGreating color={'primary'}>
//                 <h2>this</h2>
//             </DynamicGreating>
//         </div>
//     )
// }

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    {/* <HelloGreatings/> */}
                    {/* <DynamicGreating color={'primary'}>
                        <h2>this</h2>
                        <h2>hello</h2>
                    </DynamicGreating> */}
                    <ErrorBoundary>
                        <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={this.onCharSelected}/>    
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar}/>    
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;