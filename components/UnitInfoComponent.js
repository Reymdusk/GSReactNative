//TODO Basic Unit Detail structure
import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import { UNITINFO } from '../shared/unitInfo';

class UnitInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unitinfo: UNITINFO
        };
    }

    static navigationOptions = {
        title: 'UnitInfo'
    };

    render(){
        return (
            <View>
                <RenderDetail detail={unitinfo.image.detail} />
            </View>
        );
    }
}

function RenderDetail(detail) {
    return (
        <Image
            imageSrc={{uri: detail}}
            />
    );
}

function RenderStats(hp, atk, def) {
    
}

