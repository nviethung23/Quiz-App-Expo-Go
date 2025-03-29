import { Question, Test } from "./types";

export const FlagTest: Test = {
  id: "id:test/flag",
  title: "Vua Tiếng Việt",
  testName: "vietelts",
  numOfQuestions: 10,
  duration: 5,
  image: {
    uri: "https://vnptmedia.vn/file/8a10a0d36ccebc89016cf4ff8bd72177/8a10a0d36e16e5b3016e3543dafd6aac/092022/vua_tieng_viet_20220916112737.jpg",
    alt: "Vua Tiếng Việt",
  },
};

export const flagQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "Từ nào dưới đây là từ đồng âm khác nghĩa, có nghĩa là 'hành động phê bình, chỉ trích'?",
    options: [
      { id: "id:option/0", text: "Mắng", isCorrect: true },
      { id: "id:option/1", text: "Quở", isCorrect: false },
      { id: "id:option/2", text: "Dạy", isCorrect: false },
      { id: "id:option/3", text: "Lên án", isCorrect: false },
    ],
    answerDescription: "'Mắng' là từ đồng âm, có nghĩa là chỉ trích hoặc phê bình ai đó.",
    hint: "Từ này có thể được dùng trong nhiều ngữ cảnh để diễn tả sự chỉ trích.",
  },  
  {
    id: "id:question/1",
    question: "Từ 'lú' trong ngôn ngữ GenZ có thể hiểu là gì?",
    options: [
      { id: "id:option/4", text: "Rối não, khó hiểu", isCorrect: true },
      { id: "id:option/5", text: "Mất trí nhớ", isCorrect: false },
      { id: "id:option/6", text: "Dễ thương", isCorrect: false },
      { id: "id:option/7", text: "Ngủ gật", isCorrect: false },
    ],
    answerDescription: "'Lú' – cách nói GenZ để chỉ cảm giác hoang mang, không hiểu gì luôn.",
    hint: "Thường dùng khi bị bài toán hack não."
  },
  {
    id: "id:question/2",
    question: "Trong câu \"Con gà gáy sáng\", từ \"gáy\" là loại từ gì?",
    options: [
      { id: "id:option/8", text: "Danh từ", isCorrect: false },
      { id: "id:option/9", text: "Tính từ", isCorrect: false },
      { id: "id:option/10", text: "Động từ", isCorrect: true },
      { id: "id:option/11", text: "Phó từ", isCorrect: false },
    ],
    answerDescription: "\"Gáy\" là động từ - hành động của con gà khi trời sáng.",
    hint: "Chỉ hành động - thường trả lời cho câu hỏi 'làm gì?'.",
  },
  {
    id: "id:question/3",
    question: "Từ \"ngọn\" có bao nhiêu âm và vần?",
    options: [
      { id: "id:option/12", text: "1 âm, 1 vần", isCorrect: false },
      { id: "id:option/13", text: "2 âm, 1 vần", isCorrect: false },
      { id: "id:option/14", text: "1 âm, 2 vần", isCorrect: false },
      { id: "id:option/15", text: "2 âm, 2 vần", isCorrect: true },
    ],
    answerDescription: "\"Ngọn\" gồm 2 âm: 'ng' + 'on', với thanh nặng. Có 2 vần.",
    hint: "Hãy phân tích theo câu trúc vần trong tiếng Việt.",
  },
  {
    id: "id:question/4",
    question: "Từ nào sau đây không phải là từ Hán - Việt?",
    options: [
      { id: "id:option/16", text: "nhân đức", isCorrect: false },
      { id: "id:option/17", text: "công nghệ", isCorrect: false },
      { id: "id:option/18", text: "máy bay", isCorrect: true },
      { id: "id:option/19", text: "xã hội", isCorrect: false },
    ],
    answerDescription: "\"Máy bay\" là từ thuần Việt, không phải Hán - Việt.",
    hint: "Từ Hán - Việt thường có 2 âm, nghe trọn trẽ.",
  },
  {
    id: "id:question/5",
    question: "Trong câu 'Anh ấy là một người rất tài giỏi', từ 'tài giỏi' là gì?",
    options: [
      { id: "id:option/20", text: "Danh từ", isCorrect: false },
      { id: "id:option/21", text: "Tính từ", isCorrect: true },
      { id: "id:option/22", text: "Động từ", isCorrect: false },
      { id: "id:option/23", text: "Trạng từ", isCorrect: false },
    ],
    answerDescription: "'Tài giỏi' là tính từ, mô tả phẩm chất của con người.",
    hint: "Tính từ dùng để mô tả đặc điểm của sự vật, hiện tượng, hoặc con người.",
  },  
  {
    id: "id:question/6",
    question:
      "Từ nào sau đây đúng ???",
    
    options: [
      { id: "id:option/24", text: "Cường", isCorrect: true },
      { id: "id:option/25", text: "Cừơng", isCorrect: false },
      { id: "id:option/26", text: "Cừong", isCorrect: false },
      { id: "id:option/27", text: "Cuờng", isCorrect: false },
    ],
    answerDescription:
      "Tinh mắt đấy",
    hint: "Hãy quan sát thật kỹ",
  },
  {
    id: "id:question/7",
    question:
      "Trong câu 'Chúng tôi sẽ đi lên núi vào sáng mai', từ 'lên' là từ loại gì?",
    options: [
      { id: "id:option/28", text: "Động từ", isCorrect: false },
      { id: "id:option/29", text: "Tính từ", isCorrect: false },
      { id: "id:option/30", text: "Giới từ", isCorrect: true },
      { id: "id:option/31", text: "Danh từ", isCorrect: false },
    ],
    answerDescription:
      "Giới từ !Trong câu trên, 'lên' là giới từ chỉ phương hướng, chỉ sự di chuyển lên một địa điểm.",
    hint: "Xem xét vai trò của từ trong việc kết nối các ý tưởng trong câu để đưa ra câu trả lời chính xác.",
  },
  {
    id: "id:question/8",
    question: "Từ nào là viết tắt theo phong cách 'teen code'?",
    options: [
      { id: "id:option/32", text: "ko", isCorrect: true },
      { id: "id:option/33", text: "không", isCorrect: false },
      { id: "id:option/34", text: "hông", isCorrect: false },
      { id: "id:option/35", text: "hok", isCorrect: false },
    ],
    answerDescription: "'Ko' là viết tắt phổ biến cho 'không' trong chat mạng.",
    hint: "Viết theo kiểu nhanh tay – ngắn gọn.",
  },
  {
    id: "id:question/9",
    question: "Từ nào dưới đây không phải là từ Hán - Việt?",
    options: [
      { id: "id:option/36", text: "Thiện", isCorrect: false },
      { id: "id:option/37", text: "Tâm", isCorrect: false },
      { id: "id:option/38", text: "Trí", isCorrect: false },
      { id: "id:option/39", text: "Sóng", isCorrect: true },
    ],
    answerDescription: "'Sóng' là từ thuần Việt, không phải từ Hán - Việt.",
    hint: "Từ Hán - Việt thường có hai âm và mang tính chất nghĩa sâu xa.",
  },     
];