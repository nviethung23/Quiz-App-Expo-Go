import { FlatList, StyleSheet, Text, View, Animated, Easing } from "react-native";
import { HomeCard } from "./components";
import { HomeScreenProps } from "../types";
import { Heading, SafeAreaBox } from "../../components";
import { quizzes } from "../../data/quizzes";
import { useEffect, useRef } from "react";
import { LinearGradient } from 'expo-linear-gradient';  // Linear Gradient cho background

export function HomeScreen({ navigation }: HomeScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaBox>
      <FlatList
        contentContainerStyle={styles.rootContainer}
        numColumns={2}
        data={quizzes}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <Animated.View style={[{ opacity: fadeAnim }]}>
              <WelcomeCard />
            </Animated.View>
            <Text style={styles.title}>🧪 Bộ đề kiểm tra</Text>
          </>
        }
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <Animated.View
            style={{
              flex: 1,
              marginVertical: 8,
              opacity: fadeAnim,
              transform: [{ scale: fadeAnim }],
            }}
          >
            <HomeCard
              title={item.title}
              image={item.image}
              numOfQuestions={item.numOfQuestions}
              duration={item.duration}
              index={index}
              onPress={() =>
                navigation.navigate("Test", {
                  title: item.title,
                  testName: item.testName,
                })
              }
            />
          </Animated.View>
        )}
      />
    </SafeAreaBox>
  );
}

function WelcomeCard() {
  return (
    <LinearGradient
      colors={["#4F46E5", "#6D79E1"]}  // Nền gradient nhẹ
      style={styles.welcomeCard}
    >
      <Heading text="🧠 Kiểm tra trí tuệ" fontSize={26} color="#fff" />
      <Text style={styles.welcomeText}>
        Chào mừng đến với bình nguyên vô tận – đây là bản Demo React Native của nhóm mình !!!
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 16,
    gap: 16,
    paddingBottom: 32,
    backgroundColor: "#F3F4F6",  // background nhẹ nhàng
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3B82F6",  // Màu xanh nhẹ
    marginBottom: 12,
    marginTop: 12,
    textAlign: "center",
    alignSelf: "center",
  },
  welcomeCard: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  welcomeText: {
    color: "#F1F5F9",  // Màu trắng nhạt, dễ đọc
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "justify",
    marginTop: 10,
  },
});
