import React from "react"

export default class LifeCycles extends React.Component{

    constructor(){
        super()
        console.log('constructor!')
    }

    componentDidMount(){

        console.log('componentDidMount!')

    }

    componentDidUpdate(){
    console.log('componentDidUpdate!')
    }

    componentWillUnmount(){
    console.log('componentWillUnmount!')
    // This is where you want to free up memory or erase code that isn't needed anymore and can't be accessed by the garbage collector
    }

    shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate', nextProps)
    return this.props.text !== nextProps.text;
    // This is where we decide if a component should update or not based on some condition.
    }

    render(){
        console.log('render!')
        return(
            <div>{this.props.text}</div>
        )
    }
}