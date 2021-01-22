//TODO Basic Unit Detail structure
import React from 'react';
import { View, Text } from 'react-native';
import { Image, Card } from 'react-native-elements';
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
            <View key={unitinfo.id}>
                <RenderDetail detail={unitinfo.image.detail} />
                <RenderStats stats={unitinfo.stats} attr={unitinfo.attribute} type={unitinfo.type} />
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

function RenderStats(stats, attr, type) {
    return(
        <Card>
            <Card.Title>STATS</Card.Title> 
            <Card.Divider />
            <Text>{attr}, {type}</Text>
            <Text>HP: {stats.hp} + {stats.hpplus}</Text>
            <Text>ATK: {stats.atk} + {stats.atkplus}</Text>
            <Text>DEF: {stats.def} + {stats.defplus}</Text>
        </Card>
    );
}

function RenderSkillset(skillset) {
    return (
        <Card>
            <Card.Title>SKILLSET</Card.Title>
            <Card.Divider />
            <Text>Skill: {skillset.skill} BREAK {skillset.skillbreak}</Text>
            <Text>Arts: {skillset.arts} BREAK {skillset.artsbreak}</Text>
            <Text>True Arts: {skillset.truearts} BREAK {skillset.trueartsbreak}</Text>
        </Card>
    );
}

function RenderPassive(passive){
    return(
        <Card>
            <Card.Title>PASSIVES</Card.Title>
            <Card.Divider />
            <Text>Ability: </Text>
            <Text>Ability: </Text>
        </Card>
    )
}

export default UnitInfo;
