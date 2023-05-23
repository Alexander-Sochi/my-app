import React from "react"

const AppHeaders = ({label}) => {
   const style = {
        color:'red'
    }
    
   return<h1 style={style}>{label}</h1>

}

const AppHeader = () => <AppHeaders label ='Туду лист'/>

export { AppHeader }