import { Question, Test } from "./types";

export const CodeTest: Test = {
  id: "id:test/ontap",
  title: "Ôn tập React Native",
  testName: "code",
  numOfQuestions: 10,
  duration: 5,
  image: {
    uri: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    alt: "React Native Logo",
  },
};

export const CodeQuestions: Question[] = [
  {
    id: "ontap/1",
    question: "React Native được ra mắt vào năm nào?",
    options: [
      { id: "a", text: "2014", isCorrect: false },
      { id: "b", text: "2015", isCorrect: true },
      { id: "c", text: "2016", isCorrect: false },
      { id: "d", text: "2017", isCorrect: false },
    ],
    answerDescription: "React Native chính thức được Facebook phát hành vào năm 2015.",
    hint: "Ra đời sau khi ReactJS tạo tiếng vang lớn.",
  },
  {
    id: "ontap/2",
    question: "Công ty nào phát triển và hỗ trợ React Native?",
    options: [
      { id: "a", text: "Google", isCorrect: false },
      { id: "b", text: "Meta", isCorrect: true },
      { id: "c", text: "Microsoft", isCorrect: false },
      { id: "d", text: "Apple", isCorrect: false },
    ],
    answerDescription: "React Native được phát triển và duy trì bởi Meta (Facebook).",
    hint: "Công ty sở hữu Instagram, Facebook.",
  },
  {
    id: "ontap/3",
    question: "React Native sử dụng ngôn ngữ lập trình nào?",
    options: [
      { id: "a", text: "Dart", isCorrect: false },
      { id: "b", text: "Swift", isCorrect: false },
      { id: "c", text: "JavaScript", isCorrect: true },
      { id: "d", text: "Kotlin", isCorrect: false },
    ],
    answerDescription: "React Native chủ yếu sử dụng JavaScript.",
    hint: "Cũng là ngôn ngữ chính của ReactJS.",
  },
  {
    id: "ontap/4",
    question: "Nền tảng nào được React Native hỗ trợ mà Flutter không hỗ trợ?",
    options: [
      { id: "a", text: "Android", isCorrect: false },
      { id: "b", text: "iOS", isCorrect: false },
      { id: "c", text: "Web Apps", isCorrect: true },
      { id: "d", text: "Tất cả các nền tảng trên", isCorrect: false },
    ],
    answerDescription: "React Native hỗ trợ Web thông qua React Native Web.",
    hint: "Không phải là mobile app.",
  },
  {
    id: "ontap/5",
    question: "IDE nào không hỗ trợ React Native?",
    options: [
      { id: "a", text: "Visual Studio Code", isCorrect: false },
      { id: "b", text: "Android Studio", isCorrect: false },
      { id: "c", text: "Xcode", isCorrect: false },
      { id: "d", text: "Eclipse", isCorrect: true },
    ],
    answerDescription: "Eclipse không phải IDE phù hợp với React Native.",
    hint: "IDE Java đời cũ.",
  },
  {
    id: "ontap/6",
    question: "Flutter hỗ trợ nền tảng nào?",
    options: [
      { id: "a", text: "Android và iOS", isCorrect: true },
      { id: "b", text: "Android, iOS, Web Apps", isCorrect: false },
      { id: "c", text: "Chỉ Android", isCorrect: false },
      { id: "d", text: "Chỉ iOS", isCorrect: false },
    ],
    answerDescription: "Flutter hỗ trợ cả Android và iOS ngay từ đầu.",
    hint: "Hai nền tảng di động phổ biến nhất.",
  },
  {
    id: "ontap/7",
    question: "Tái sử dụng mã nguồn của Flutter đạt khoảng bao nhiêu?",
    options: [
      { id: "a", text: "40-70%", isCorrect: false },
      { id: "b", text: "50-90%", isCorrect: true },
      { id: "c", text: "70-100%", isCorrect: false },
      { id: "d", text: "60-80%", isCorrect: false },
    ],
    answerDescription: "Với Flutter, có thể tái sử dụng tới 90% mã nguồn.",
    hint: "Gần như tối ưu toàn bộ.",
  },
  {
    id: "ontap/8",
    question: "Tái sử dụng mã nguồn của React Native đạt bao nhiêu phần trăm?",
    options: [
      { id: "a", text: "50-70%", isCorrect: false },
      { id: "b", text: "70-85%", isCorrect: false },
      { id: "c", text: "90%", isCorrect: true },
      { id: "d", text: "100%", isCorrect: false },
    ],
    answerDescription: "React Native giúp tái sử dụng tới 90% mã.",
    hint: "Không bằng 100% nhưng rất cao.",
  },
  {
    id: "ontap/9",
    question: "Thời gian ra mắt sản phẩm với React Native thường chậm hơn vì lý do gì?",
    options: [
      { id: "a", text: "Phụ thuộc vào thư viện bên thứ ba", isCorrect: true },
      { id: "b", text: "Không hỗ trợ giao diện gốc", isCorrect: false },
      { id: "c", text: "Ngôn ngữ JavaScript quá phức tạp", isCorrect: false },
      { id: "d", text: "Không hỗ trợ phát triển đa nền tảng", isCorrect: false },
    ],
    answerDescription: "Một số thư viện cần native module gây chậm trễ.",
    hint: "Do sự phụ thuộc vào plugin ngoài.",
  },
  {
    id: "ontap/10",
    question: "React Native có ưu điểm nào nổi bật so với Flutter?",
    options: [
      { id: "a", text: "Hỗ trợ IDE tốt hơn", isCorrect: false },
      { id: "b", text: "Giao diện gốc tốt hơn", isCorrect: false },
      { id: "c", text: "Tái sử dụng mã nguồn cao hơn", isCorrect: true },
      { id: "d", text: "Hiệu suất ứng dụng nhanh hơn", isCorrect: false },
    ],
    answerDescription: "React Native cho phép sử dụng mã JavaScript dễ dàng giữa các nền tảng.",
    hint: "Có thể dùng lại mã backend (JavaScript/Node).",
  },
];
