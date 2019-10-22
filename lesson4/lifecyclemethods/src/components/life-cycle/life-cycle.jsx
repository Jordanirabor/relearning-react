import React from "react"

export default class LifeCycles extends React.Component{
    constructor(){
        super()
        console.log('constructor!')
    }

    componentDidMount(){
        console.log('componentDidMount!')
    }

    render(){
        console.log('render!')
        return(
            <div>Hey</div>
        )
    }
}