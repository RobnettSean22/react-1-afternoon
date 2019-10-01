import React, {Component} from 'react';

export default class FilterObject extends Component{
    constructor(){
        this.state = {
            unFilterArray: ['blue', 'yeallow', 'green', 'orange'],
            userInput: '',
            filtteredArray: []
        }
    }
    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
            <span className='puzzleText'></span>
            <input className='inputLine'/>
            <button className='confirmationButton'></button>
            <span class='resultsBox filterObjcetRB'></span>
            <h4>'Filter Object'</h4>
            
            </div>
        )
    }
}
