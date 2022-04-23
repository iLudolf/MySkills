import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from "react-native";

interface skillType extends TouchableOpacityProps{
    skillName: string
}

export const SkillCard = ({ skillName, ...rest } : skillType) => {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}
            >
           
            <Text style={styles.textSkill}>
                {skillName}
            </Text>
            
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e15',
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        marginBottom: 10
    },
    textSkill: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold",

    }
});