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
    return true
    }

    render(){
        console.log('render!')
        return(
            <div>Hey, pass some text in me.</div>
        )
    }
}