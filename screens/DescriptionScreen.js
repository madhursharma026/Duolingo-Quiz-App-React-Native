import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function DescriptionScreen({ navigation, route }) {
    const { topicName } = route.params;
    const { topicDescription } = route.params;
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeading}>Topic: {topicName}</Text>
            <View style={styles.container}>
                <Button onPress={() => navigation.navigate("QuesSection")} title="Start Quiz" color="#308dfc" />
                <ScrollView style={{ marginTop: 10 }}>
                    <Text style={styles.topicDescription}>{topicDescription}</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    mainHeading: {
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#272425',
        textDecorationLine: 'underline',
    },
    topicDescription: {
        fontSize: 18,
        marginBottom: 50
    }
});
