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
    }

    shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate', nextProps)
    return this.props.text !== nextProps.text;
    }

    render(){
        console.log('render!')
        return(
            <div>{this.props.text}</div>
        )
    }
}