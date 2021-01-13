import React, { Component } from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import { UNITINFO } from '../shared/unitInfo';

class Units extends Component { 
    constructor(props){
        super(props)

        this.state = {
            UnitInfo: UNITINFO
        };
    }

    static navigationOptions = {
        title: 'Units'
    };

    render() {
        return (
            <RenderThumbnails unit={UnitInfo} />
        );
    }
}

function RenderThumbnails(unit){
    const { navigate } = this.props.navigation;

    return (
        <Image 
            imageSrc={{uri: unit.image.thumbAwk}} 
            onPress={() => navigate('Unit Details', { unitId: unit.id})}
            />
    );
}

export default Units;