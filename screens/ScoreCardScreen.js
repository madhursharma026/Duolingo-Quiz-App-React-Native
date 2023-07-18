import QuestionsDetails from '../components/QuestionsDetails';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function ScoreCardScreen({ navigation, route }) {
    const { yourScore } = route.params;
    const { skipQuestion } = route.params;
    const TotalQues = QuestionsDetails.length;
    const wrongAnswer = (TotalQues - (yourScore + skipQuestion))
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeading}>Your Score: {yourScore}/{TotalQues}</Text>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ width: 200, height: 200, marginTop: 30, borderRadius: 20 }}
                    source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/001/942/619/original/gold-winner-celebration-banner-with-trophy-vector.jpg',
                    }}
                />
            </View>
            <Text style={styles.Heading}>Total Question: {TotalQues}</Text>
            <Text style={styles.Heading}>Attempt Question: {TotalQues - skipQuestion}</Text>
            <Text style={styles.Heading}>Skipped Question: {skipQuestion}</Text>
            <Text style={styles.Heading}>Wrong Question: {wrongAnswer}</Text>
            <View style={styles.container}>
                <Button onPress={() => navigation.navigate("ChapterScreen")} title="Move To Chapters" color="#308dfc" />
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
        marginTop: 100,
        paddingHorizontal: 30,
    },
    mainHeading: {
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#272425',
    },
    Heading: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20
    },
});
