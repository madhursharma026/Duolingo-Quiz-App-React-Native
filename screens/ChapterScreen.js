import { StatusBar } from 'expo-status-bar';
import QuestionsDetails from '../components/QuestionsDetails';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ChapterScreen({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeading}>Topics</Text>
            <View style={styles.container}>
                <FlatList
                    data={QuestionsDetails}
                    renderItem={({ item, index }) =>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("DescriptionScreen", { topicName: `${item.Title}`, topicDescription: `${item.Description}` })}>
                                <Text style={styles.topicName}>{index + 1} {item.Title}</Text>
                            </TouchableOpacity>
                            <View style={styles.hrStyle} />
                        </View>
                    }
                />
            </View>
            <StatusBar style="auto" />
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
    hrStyle: {
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    topicName: {
        fontSize: 18,
        paddingTop: 10,
    }
});
