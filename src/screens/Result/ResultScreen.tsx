import { ResultScreenProps } from "../types";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Image,
} from "react-native";
import { ResultsCard, TimeSpentCard, Button } from "./components";
import { SafeAreaBox } from "../../components";
import { useEffect, useRef } from "react";
import ConfettiCannon from "react-native-confetti-cannon";

export function ResultScreen({ navigation, route }: ResultScreenProps) {
  const { correctAnswers, totalQuestions, timeTaken } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, []);

  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <SafeAreaBox>
      <View style={results.root}>
        {/* 🎉 Pháo giấy ăn mừng */}
        <ConfettiCannon
          count={200}
          origin={{ x: 180, y: 0 }}
          fadeOut={true}
          autoStart={true}
          fallSpeed={2500}
          explosionSpeed={400}
        />

        {/* Thẻ chúc mừng */}
        <Animated.View style={[results.celebrate, { opacity: fadeAnim }]}>
          <Image
            source={require("../../../assets/images/trophy.png")}
            style={results.image}
          />
          <Text style={results.title}>🎉 Chúc mừng bạn!</Text>
          <Text style={results.subtitle}>
            Bạn đã hoàn thành bài kiểm tra!
          </Text>
        </Animated.View>

        {/* Kết quả */}
        <Animated.View style={[results.cardContainer, { opacity: fadeAnim }]}>
          <ResultsCard
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
          />
          <TimeSpentCard timeTaken={timeTaken} />
          <Text style={results.scoreText}>🎯 {percentage}% chính xác</Text>
        </Animated.View>

        {/* Nút quay về */}
        <Animated.View style={[results.buttonContainer, { opacity: fadeAnim }]}>
          <Button
            text="🏠 Quay lại trang chủ"
            textColor="#fff"
            backgroundColor="#4F46E5"
            onPress={() => navigation.navigate("Home")}
          />
        </Animated.View>
      </View>
    </SafeAreaBox>
  );
}

const results = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    justifyContent: "space-evenly",
    backgroundColor: "#F9FAFB",
  },
  celebrate: {
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1E3A8A",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
  },
  cardContainer: {
    gap: 20,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 16,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#10B981",
  },
});
