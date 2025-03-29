import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Heading } from "../../../../components";
import { Image as ImageType } from "../../../../data/types";
import { useRef } from "react";

export interface Props {
  title: string;
  image?: ImageType;
  numOfQuestions: number;
  duration: number;
  index: number;
  onPress: () => void;
}

export function HomeCard({
  title,
  image,
  numOfQuestions,
  duration,
  index,
  onPress,
}: Props) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          homeCard.root,
          {
            marginRight: index % 2 === 0 ? 8 : 0,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={homeCard.imageWrapper}>
          <Image
            style={homeCard.image}
            source={{ uri: image?.uri }}
            alt={image?.alt}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0)"]}
            style={homeCard.gradientOverlay}
          />
        </View>
        <View style={homeCard.textContainer}>
          <Heading text={title} fontSize={18} color="#1F2937" />
          <View style={homeCard.footer}>
            <Text style={homeCard.footerText}>📝 {numOfQuestions} câu</Text>
            <Text style={homeCard.footerText}>⏱ {duration} phút</Text>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const homeCard = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 8,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 16 / 9,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  gradientOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  textContainer: {
    padding: 16,
    gap: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  footerText: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "500",
  },
});
