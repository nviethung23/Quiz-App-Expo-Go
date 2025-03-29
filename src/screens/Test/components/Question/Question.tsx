import { Heading } from "../../../../components";
import { Question as QuestionType } from "../../../../data/types";
import { Options } from "./components";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";

interface Props {
  question: QuestionType;
  onAnswered: (correct: boolean) => void;
}

export function Question({ question, onAnswered }: Props) {
  return (
    <ScrollView contentContainerStyle={questionStyle.scrollContainer}>
      <View style={questionStyle.root}>
      <Heading
    text={question.question}
    fontSize={22}
    color="#1F2937"
        />

        {question.image && (
          <View style={questionStyle.imageWrapper}>
            <Image
              style={questionStyle.image}
              source={{ uri: question.image?.uri }}
              alt={question.image?.alt}
            />
          </View>
        )}

        <Options
          options={question.options}
          description={question.answerDescription}
          onAnswered={onAnswered}
        />

        {question.hint && (
          <Text style={questionStyle.hintText}>💡 Gợi ý: {question.hint}</Text>
        )}
      </View>
    </ScrollView>
  );
}

const questionStyle = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 32,
  },
  root: {
    padding: 20,
    gap: 16,
    backgroundColor: "#FAFAFA",
    borderRadius: 16,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  heading: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 2 / 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  hintText: {
    marginTop: 12,
    fontSize: 14,
    color: "#6B7280",
    fontStyle: "italic",
  },
});