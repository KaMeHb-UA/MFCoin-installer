import React, { Component } from 'react'

import { Window, App } from 'proton-native'

export default class Example extends Component {
    render(){
        return <App>
            <Window style={{ width: 300, height: 300, backgroundColor: "blue" }}>
                {/* all your other components go here*/}
            </Window>
        </App>
    }
}
