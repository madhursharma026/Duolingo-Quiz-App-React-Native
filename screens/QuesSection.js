import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import QuestionsDetails from '../components/QuestionsDetails';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';

export default function QuesSection({ navigation, route }) {
  const [yourScore, setYourScore] = useState(0);
  const [questionNO, setQuestionNO] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [skipQuestion, setSkipQuestion] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [lastQuestion, setLastQuestion] = useState(false);

  useEffect(() => {
    if (route.params === undefined) {
      setQuestionNO(0)
      setLastQuestion(QuestionsDetails.length)
    } else {
      const { questionNOParams } = route.params;
      setQuestionNO(Number(questionNOParams))
      setLastQuestion(QuestionsDetails.length)
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column1}>
          <AntDesign name="close" size={40} color="#A2A9AE" onPress={() => navigation.navigate("ChapterScreen")} />
        </View>
        <View style={styles.column2}>
          <ProgressBar progress={questionNO / QuestionsDetails.length} color={'#58CC02'} style={{ height: 18, borderRadius: 10 }} />
        </View>
      </View>

      <Text style={styles.mainHeading}>Translate this sentence</Text>

      <View style={{ marginTop: 30 }}>
        <View style={styles.row}>
          <View style={styles.column3}>
            <Image
              style={{ width: 120, height: 220, resizeMode: "contain" }}
              source={{
                uri: 'https://duoplanet.com/wp-content/uploads/2022/04/Duolingo-Eddy-1-640x1024.png',
              }}
            />
          </View>
          <View style={styles.column4}>
            <Text style={styles.quesStyle}>{QuestionsDetails[questionNO].Question}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: -23 }}></View>
      {(`${QuestionsDetails[questionNO].IsImageFormate}` !== "true") ?
        <>
          <View style={styles.hrStyle} />
          {userAnswer !== "" ?
            <Text style={styles.optionsStyle} onPress={() => setUserAnswer('')}>{userAnswer}</Text>
            :
            <Text style={styles.ansStyle}></Text>
          }
          <View style={styles.hrStyle} />
          <Text style={styles.ansStyle}></Text>
          <View style={styles.hrStyle} />
        </>
        :
        <></>
      }
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 50 }}>
        {(`${QuestionsDetails[questionNO].IsImageFormate}` === "true") ?
          <>
            {userAnswer !== `${QuestionsDetails[questionNO].options[0].a}` ?
              <View style={[styles.optionsStyle, { borderWidth: 5, borderBottomWidth: 5, borderColor: '#CCCCCC', borderBottomColor: '#CCCCCC' }]} onTouchStart={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].a}`)}>
                <Image
                  style={{ width: 132, height: 110, resizeMode: "contain" }}
                  source={{
                    uri: `${QuestionsDetails[questionNO].options[0].a}`,
                  }}
                />
              </View>
              :
              <View style={[styles.optionsStyle, { borderWidth: 5, borderBottomWidth: 5, borderColor: '#58CC02', borderBottomColor: '#58CC02' }]} onTouchStart={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].a}`)}>
                <Image
                  style={{ width: 132, height: 110, resizeMode: "contain" }}
                  source={{
                    uri: `${QuestionsDetails[questionNO].options[0].a}`,
                  }}
                />
              </View>
            }
            {userAnswer !== `${QuestionsDetails[questionNO].options[0].b}` ?
              <View style={[styles.optionsStyle, { borderWidth: 5, borderBottomWidth: 5, borderColor: '#CCCCCC', borderBottomColor: '#CCCCCC' }]} onTouchStart={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].b}`)}>
                <Image
                  style={{ width: 132, height: 110, resizeMode: "contain" }}
                  source={{
                    uri: `${QuestionsDetails[questionNO].options[0].b}`,
                  }}
                />
              </View>
              :
              <View style={[styles.optionsStyle, { borderWidth: 5, borderBottomWidth: 5, borderColor: '#58CC02', borderBottomColor: '#58CC02' }]} onTouchStart={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].b}`)}>
                <Image
                  style={{ width: 132, height: 110, resizeMode: "contain" }}
                  source={{
                    uri: `${QuestionsDetails[questionNO].options[0].b}`,
                  }}
                />
              </View>
            }
            {userAnswer !== `${QuestionsDetails[questionNO].options[0].c}` ?
              <View style={[styles.optionsStyle, { borderWidth: 5, borderBottomWidth: 5, borderColor: '#CCCCCC', borderBottomColor: '#CCCCCC' }]} onTouchStart={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].c}`)}>
                <Image
                  style={{ width: 132, height: 110, resizeMode: "contain" }}
                  source={{
                    uri: `${QuestionsDetails[questionNO].options[0].c}`,
                  }}
                />
              </View>
              :
              <View style={[styles.optionsStyle, { borderWidth: 5, borderBottomWidth: 5, borderColor: '#58CC02', borderBottomColor: '#58CC02' }]} onTouchStart={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].c}`)}>
                <Image
                  style={{ width: 132, height: 110, resizeMode: "contain" }}
                  source={{
                    uri: `${QuestionsDetails[questionNO].options[0].c}`,
                  }}
                />
              </View>
            }
            {userAnswer !== `${QuestionsDetails[questionNO].options[0].d}` ?
              <View style={[styles.optionsStyle, { borderWidth: 5, borderBottomWidth: 5, borderColor: '#CCCCCC', borderBottomColor: '#CCCCCC' }]} onTouchStart={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].d}`)}>
                <Image
                  style={{ width: 132, height: 110, resizeMode: "contain" }}
                  source={{
                    uri: `${QuestionsDetails[questionNO].options[0].d}`,
                  }}
                />
              </View>
              :
              <View style={[styles.optionsStyle, { borderWidth: 5, borderBottomWidth: 5, borderColor: '#58CC02', borderBottomColor: '#58CC02' }]} onTouchStart={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].d}`)}>
                <Image
                  style={{ width: 132, height: 110, resizeMode: "contain" }}
                  source={{
                    uri: `${QuestionsDetails[questionNO].options[0].d}`,
                  }}
                />
              </View>
            }
          </>
          :
          <>
            {userAnswer !== `${QuestionsDetails[questionNO].options[0].a}` ?
              <Text style={styles.optionsStyle} onPress={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].a}`)}>{QuestionsDetails[questionNO].options[0].a}</Text>
              :
              <Text style={[styles.optionsStyle, { backgroundColor: '#c7c3c3', color: '#c7c3c3' }]} onPress={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].a}`)}>{QuestionsDetails[questionNO].options[0].a}</Text>
            }
            {userAnswer !== `${QuestionsDetails[questionNO].options[0].b}` ?
              <Text style={styles.optionsStyle} onPress={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].b}`)}>{QuestionsDetails[questionNO].options[0].b}</Text>
              :
              <Text style={[styles.optionsStyle, { backgroundColor: '#c7c3c3', color: '#c7c3c3' }]} onPress={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].b}`)}>{QuestionsDetails[questionNO].options[0].b}</Text>
            }
            {userAnswer !== `${QuestionsDetails[questionNO].options[0].c}` ?
              <Text style={styles.optionsStyle} onPress={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].c}`)}>{QuestionsDetails[questionNO].options[0].c}</Text>
              :
              <Text style={[styles.optionsStyle, { backgroundColor: '#c7c3c3', color: '#c7c3c3' }]} onPress={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].c}`)}>{QuestionsDetails[questionNO].options[0].c}</Text>
            }
            {userAnswer !== `${QuestionsDetails[questionNO].options[0].d}` ?
              <Text style={styles.optionsStyle} onPress={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].d}`)}>{QuestionsDetails[questionNO].options[0].d}</Text>
              :
              <Text style={[styles.optionsStyle, { backgroundColor: '#c7c3c3', color: '#c7c3c3' }]} onPress={() => setUserAnswer(`${QuestionsDetails[questionNO].options[0].d}`)}>{QuestionsDetails[questionNO].options[0].d}</Text>
            }
          </>
        }
      </View >

      <View style={styles.bottomView}>
        {
          checkAnswer ?
            <>
              {userAnswer === `${QuestionsDetails[questionNO].correctAns}` ?
                <View style={{ backgroundColor: '#84e67e', padding: 10, borderRadius: 10 }}>
                  <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 5 }}> You are correct!</Text>
                  {(lastQuestion === (questionNO + 1)) ?
                    <Button onPress={() => (setUserAnswer(""), setCheckAnswer(false), navigation.navigate("ScoreCardScreen", { yourScore: yourScore, skipQuestion: skipQuestion }))} title="Show Score Card" color="#3e9139" />
                    :
                    <Button onPress={() => (setUserAnswer(""), setCheckAnswer(false), setYourScore(yourScore + 1), navigation.navigate("QuesSection", { questionNOParams: `${Number(questionNO + 1)}` }))} title="Continue" color="#3e9139" />
                  }
                </View>
                :
                <View style={{ backgroundColor: '#e69975', padding: 10, borderRadius: 10 }}>
                  <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 5 }}> You are Wrong!</Text>
                  {(lastQuestion === (questionNO + 1)) ?
                    <Button onPress={() => (setUserAnswer(""), setCheckAnswer(false), navigation.navigate("ScoreCardScreen", { yourScore: yourScore, skipQuestion: skipQuestion }))} title="Show Score Card" color="#BB2D3B" />
                    :
                    <Button onPress={() => (setUserAnswer(""), setCheckAnswer(false), navigation.navigate("QuesSection", { questionNOParams: `${Number(questionNO + 1)}` }))} title="Okay, Continue" color="#BB2D3B" />
                  }
                </View>
              }
            </>
            :
            <View style={styles.row}>
              <View style={styles.column5}>
                {(lastQuestion === (questionNO + 1)) ?
                  // <TouchableHighlight style={styles.skipBtn} onPress={() => (setUserAnswer(""), setSkipQuestion(skipQuestion + 1), setCheckAnswer(false), navigation.navigate("ScoreCardScreen", { yourScore: yourScore, skipQuestion: skipQuestion }))}>
                  //   <Text style={styles.skipBtnText}>SKIP</Text>
                  // </TouchableHighlight>
                  <TouchableHighlight style={styles.skipBtn} onPress={() => (setUserAnswer(""), setCheckAnswer(false), navigation.navigate("ScoreCardScreen", { yourScore: yourScore, skipQuestion: skipQuestion + 1 }))}>
                    <Text style={styles.skipBtnText}>SKIP</Text>
                  </TouchableHighlight>
                  :
                  <TouchableHighlight style={styles.skipBtn} onPress={() => (setUserAnswer(""), setSkipQuestion(skipQuestion + 1), setCheckAnswer(false), navigation.navigate("QuesSection", { questionNOParams: `${Number(questionNO + 1)}` }))}>
                    <Text style={styles.skipBtnText}>SKIP</Text>
                  </TouchableHighlight>
                }

              </View>
              <View style={styles.column6}>
                {userAnswer === "" ?
                  <TouchableHighlight style={styles.checkBtnBlank}>
                    <Text style={styles.checkBtnBlankText}>Check</Text>
                  </TouchableHighlight>
                  :
                  <TouchableHighlight style={styles.checkBtnSuccess}>
                    <Text style={styles.checkBtnSuccessText} onPress={() => setCheckAnswer(true)}>Check</Text>
                  </TouchableHighlight>
                }
              </View>
            </View>
        }
      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    paddingTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column1: {
    flex: 1.5,
  },
  column2: {
    flex: 10.5,
    marginTop: 12,
    marginHorizontal: 15
  },
  column3: {
    flex: 4,
  },
  column4: {
    flex: 8,
  },
  mainHeading: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 3,
  },
  quesStyle: {
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 15,
    borderColor: '#CCCCCC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  ansStyle: {
    padding: 15,
    fontSize: 18,
  },
  optionsStyle: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    alignSelf: 'flex-start',
    borderBottomColor: '#c7c3c3',
    borderBottomWidth: 3,
    marginHorizontal: 3,
    marginVertical: 3,
  },
  hrStyle: {
    marginTop: -0,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  column5: {
    flex: 4,
  },
  column6: {
    flex: 8,
  },
  skipBtn: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#CCCCCC',
    marginHorizontal: 5
  },
  skipBtnText: {
    color: '#CCCCCC',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  checkBtnBlank: {
    padding: 8,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#CCCCCC',
    marginHorizontal: 5
  },
  checkBtnBlankText: {
    color: '#AFAFAF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  checkBtnSuccess: {
    padding: 8,
    backgroundColor: '#58CC02',
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#58CC02',
    marginHorizontal: 5
  },
  checkBtnSuccessText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
