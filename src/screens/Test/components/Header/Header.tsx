import { HeaderBackButton } from "@react-navigation/elements";
import { useRef } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  current: number;
  correct: number[];
  incorrect: number[];
  numOfQuestions: number;
  onQuestionTouch: (index: number) => void;
  onBackPress: () => void;
}

function HeaderContainer({ children }: { children: React.ReactNode }) {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[headerContainer.root, { paddingTop: top }]}>{children}</View>
  );
}

export function Header({
  current,
  correct,
  incorrect,
  numOfQuestions,
  onQuestionTouch,
  onBackPress,
}: Props) {
  const offSetX = useRef<number | null>(null);
  const scrollViewRef = useRef<ScrollView & View>(null);
  const { width: screenWidth } = useWindowDimensions();

  if (offSetX.current !== null) {
    const offSet = offSetX.current;
    const boxWidth = 36 + 2 * 10;
    const currentBoxPosition = offSet + current * boxWidth + boxWidth / 2;
    const isBeforeMiddle = currentBoxPosition < screenWidth / 2;

    scrollViewRef.current?.scrollTo({
      x: !isBeforeMiddle
        ? current * boxWidth + boxWidth / 2 - (screenWidth / 2 - offSet)
        : 0,
      y: 0,
      animated: true,
    });
  }

  const numberComponents = [...Array(numOfQuestions).keys()].map((index) => {
    const color = (() => {
      if (current === index) return "#FACC15";
      else if (correct.includes(index)) return "#4ADE80";
      else if (incorrect.includes(index)) return "#F87171";
      else return "#E5E7EB";
    })();
    return (
      <Pressable
  key={index}
  onPress={() => {
    if (index >= current) {
      onQuestionTouch(index);
    }
  }}
  disabled={index < current} // ✅ Chặn bấm các câu trước
>
  <View
    style={[
      header.circle,
      {
        backgroundColor: color,
        opacity: index < current ? 0.4 : 1, // Làm mờ nếu đã qua
      },
    ]}
  >
    <Text style={header.text}>{index + 1}</Text>
  </View>
</Pressable>

    );
  });

  return (
    <HeaderContainer>
      <View style={header.root}>
        <HeaderBackButton labelVisible={false} onPress={onBackPress} />
        <ScrollView
          style={header.scrollView}
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          onLayout={() => {
            scrollViewRef.current?.measure(
              (x, y, width, height, pageX, pageY) => {
                offSetX.current = pageX;
              }
            );
          }}>
          {numberComponents}
        </ScrollView>
      </View>
    </HeaderContainer>
  );
}

const header = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Platform.select({
      android: 10,
      default: 12,
    }),
    paddingHorizontal: 12,
    backgroundColor: "#F9FAFB",
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },
  scrollView: {
    flexGrow: 1,
    marginLeft: 8,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F2937",
  },
});

const headerContainer = StyleSheet.create({
  root: {
    backgroundColor: "#F9FAFB",
  },
});