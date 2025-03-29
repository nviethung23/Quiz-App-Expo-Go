import { memo, useEffect, useRef, useState } from "react";
import {
  Header,
  LoadingIndicator,
  Question as QuestionComponent,
} from "./components";
import PagerView from "react-native-pager-view";
import { TestScreenProps } from "../types";
import { Text, View, StyleSheet, Animated } from "react-native";
import { shuffleArray } from "./shuffle";
import { Question } from "../../data/types";
import { flagQuestions } from "../../data";
import { musicQuestions } from "../../data/music";
import { cookingQuestions } from "../../data/masterChef";
import { CodeQuestions } from "../../data/Code";
import { Audio } from "expo-av";

export function TestScreen({ navigation, route }: TestScreenProps) {
  const category = route.params.testName;
  const [questions, setQuestions] = useState<Question[]>([]);
  const startTimeRef = useRef<number>(Date.now());
  const pagerViewRef = useRef<PagerView>(null);

  const [correctIndexes, setCorrectIndexes] = useState<number[]>([]);
  const [incorrectIndexes, setIncorrectIndexes] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const loadedQuestions = (() => {
      switch (category) {
        case "vietelts": return flagQuestions;
        case "masterChef": return cookingQuestions;
        case "music": return musicQuestions;
        case "code": return CodeQuestions;
        default: return [];
      }
    })();
    setQuestions(shuffleArray(loadedQuestions));
  }, [category]);

  useEffect(() => {
    if (questions.length > 0) {
      navigation.setOptions({
        header: () => (
          <Header
            current={currentQuestionIndex}
            numOfQuestions={questions.length}
            correct={correctIndexes}
            incorrect={incorrectIndexes}
            onQuestionTouch={(index) => {
              pagerViewRef.current?.setPage(index);
            }}
            onBackPress={navigation.goBack}
          />
        ),
      });
    }
  }, [navigation, currentQuestionIndex, correctIndexes, incorrectIndexes, questions.length]);

  useEffect(() => {
    if (
      questions.length > 0 &&
      questions.length === correctIndexes.length + incorrectIndexes.length
    ) {
      navigation.push("Result", {
        correctAnswers: correctIndexes.length,
        totalQuestions: questions.length,
        timeTaken: Date.now() - startTimeRef.current,
      });
    }
  }, [navigation, questions.length, correctIndexes.length, incorrectIndexes.length]);

  if (questions.length === 0) return <LoadingIndicator />;

  return (
    <MemoizedPagerView
      questions={questions}
      pagerViewRef={pagerViewRef}
      onAnswered={async (index, answer) => {
        const sound = answer
          ? require("../../../assets/sounds/correct.mp3")
          : require("../../../assets/sounds/wrong.mp3");
        const { sound: playbackObject } = await Audio.Sound.createAsync(sound);
        await playbackObject.playAsync();

        if (answer) setCorrectIndexes((prev) => [...prev, index]);
        else setIncorrectIndexes((prev) => [...prev, index]);

        setTimeout(() => {
          if (pagerViewRef.current && index < questions.length - 1) {
            pagerViewRef.current.setPage(index + 1);
          }
        }, 1000); // 3s delay to view answer
      }}
      onPageSelected={setCurrentQuestionIndex}
    />
  );
}

interface PagerViewComponentProps {
  questions: Question[];
  pagerViewRef: React.RefObject<PagerView>;
  onAnswered: (index: number, answer: boolean) => void;
  onPageSelected: (index: number) => void;
}

const MemoizedPagerView = memo(
  function PagerViewComponent({
    questions,
    pagerViewRef,
    onAnswered,
    onPageSelected,
  }: PagerViewComponentProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [timer, setTimer] = useState(30);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(intervalRef.current!);
            onAnswered(currentPage, false);
            setTimeout(() => {
              if (pagerViewRef.current && currentPage < questions.length - 1) {
                pagerViewRef.current.setPage(currentPage + 1);
              }
            }, 1000);
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(intervalRef.current!);
    }, [currentPage]);

    return (
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={({ nativeEvent }) => {
          setCurrentPage(nativeEvent.position);
          setTimer(30);
          onPageSelected(nativeEvent.position);
        }}
      >
        {questions.map((question, index) => (
          <View key={question.id} style={styles.questionContainer}>
            <View style={styles.topBar}>
              <Text
                style={[styles.timer, timer <= 5 && {
                  color: "#F97316",
                  backgroundColor: "#FEF3C7",
                }]}
              >
                ⏱ {timer}s
              </Text>
              <Text style={styles.progress}>
                Câu {index + 1}/{questions.length}
              </Text>
            </View>

            <Animated.View style={[styles.card, { opacity: fadeAnim }]}> 
              <QuestionComponent
                question={question}
                onAnswered={(correct) => {
                  clearInterval(intervalRef.current!);
                  onAnswered(index, correct);
                  setTimeout(() => {
                    if (pagerViewRef.current && index < questions.length - 1) {
                      pagerViewRef.current.setPage(index + 1);
                    }
                  }, 1000);
                }}
              />
            </Animated.View>
          </View>
        ))}
      </PagerView>
    );
  },
  (prevProps, curProps) =>
    prevProps.questions.length === curProps.questions.length &&
    prevProps.pagerViewRef === curProps.pagerViewRef
);

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: "#F3F4F6",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  timer: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#10B981",
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  progress: {
    fontSize: 16,
    color: "#4B5563",
    fontWeight: "600",
  },
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
});