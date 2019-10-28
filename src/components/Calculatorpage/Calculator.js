import React, { useState } from 'react';
import OutputScreen from './OutputScreen/OutputScreen';
import Button from './Buttons/Buttons';
import './Calculator.css';

const Calculatorpage = () => {
    const [ state, setState ] = useState({
        question : '',
        answer: ''
    })

    const handleClick = (event) => {
        const value = event.target.value;
        switch (value) {
            case '=' : {
                if (state.question !== ''){
                    let ans =''
                    try{
                        ans = eval(state.question);
                    }
                    catch(err){
                        setState({
                            answer: "Math Error"
                        });
                    }
                    if (ans === undefined){
                        setState({
                            answer: "Math Error"
                        })
                    } else {
                        setState({
                            answer : ans,
                            question : state.question 
                        })
                    }
                }break;
                
            }
            case 'Clear' : {
                setState({
                    question : '',
                    answer : ''
                })
                break;
            }
            case 'Delete' : {
                let str = state.question;
                str = str.substr(0,str.length-1);
                setState({
                    question : str
                })
                break;
            }
            default: {
                setState({
                    question: state.question += value
                })
                break;
            }
        }
    }

    return (
        <div className="container-fluid calbg">
        <div className="frame container">
            <div className="mainCalc">
                <OutputScreen question = {state.question} answer = {state.answer}/>
                <div className="button-row">
                    <Button className="btnaction" label={'Clear'} handleClick = {handleClick}/>
                    <Button className="btnaction" label={'Delete'} handleClick = {handleClick}/>
                    <Button className="btnaction" label={'/'} handleClick = {handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={'8'} handleClick = {handleClick} />
                    <Button label={'9'} handleClick = {handleClick} />
                    <Button className="btnaction" label={'+'} handleClick = {handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'6'} handleClick = {handleClick} />
                    <Button label={'7'} handleClick = {handleClick} />
                    <Button className="btnaction" label={'*'} handleClick = {handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'4'} handleClick = {handleClick} />
                    <Button label={'5'} handleClick = {handleClick} />
                    <Button className="btnaction" label={'-'} handleClick = {handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'2'} handleClick = {handleClick} />
                    <Button label={'3'} handleClick = {handleClick} />
                    <Button className="btnaction" label={'.'} handleClick = {handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'0'} handleClick = {handleClick} />
                    <Button label={'1'} handleClick = {handleClick} />
                    <Button className="btnaction" label={'='} handleClick = {handleClick} />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Calculatorpage;