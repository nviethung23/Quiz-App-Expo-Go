import { Question, Test } from "./types";

export const CookingTest: Test = {
  id: "id:test/master-chef",
  title: "Mát Tơ Chép",
  testName: "masterChef",
  numOfQuestions: 10,
  duration: 5,
  image: {
    uri: "https://photo.znews.vn/w660/Uploaded/mdf_drkydd/2023_04_27/170203_salt_bae_mn_1530.jpg",
    alt: "Mát Tơ Chép",
  },
};

function shuffleOptions(question: Question): Question {
  const shuffled = question.options
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }, index) => ({
      ...value,
      id: String.fromCharCode(97 + index), // 'a', 'b', 'c', ...
    }));

  return { ...question, options: shuffled };
}

export const cookingQuestions: Question[] = [
  {
    id: "id:question/cook1",
    question: "Đây là gì?",
    image: {
      uri: "https://i.ytimg.com/vi/cZI5Uv8y3zs/sddefault.jpg",
      alt: "Bánh flan",
    },
    options: [
      { id: "a", text: "Bánh flan", isCorrect: true },
      { id: "b", text: "Kem trứng", isCorrect: false },
      { id: "c", text: "Pudding", isCorrect: false },
      { id: "d", text: "Sữa chua", isCorrect: false },
    ],
    answerDescription: "Đây là bánh flan, món tráng miệng mềm mịn từ trứng, sữa và caramel.",
    hint: "Món ngọt có lớp caramel ở trên cùng.",
  },
  {
    id: "id:question/cook2",
    question: "Đây là gì?",
    image: {
      uri: "https://i.ytimg.com/vi/CSI9ildGX9s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxhRIyoYY7k9ZuxY0YOC9jNFLapg",
      alt: "Bún bò Huế",
    },
    options: [
      { id: "a", text: "Bún bò Huế", isCorrect: true },
      { id: "b", text: "Phở", isCorrect: false },
      { id: "c", text: "Bún chả", isCorrect: false },
      { id: "d", text: "Bánh canh", isCorrect: false },
    ],
    answerDescription: "Bún bò Huế là món ăn đặc trưng của miền Trung, nổi bật với vị cay và sả.",
    hint: "Thường ăn kèm chả Huế, bò, huyết.",
  },
  {
    id: "id:question/cook3",
    question: "Đây là gì?",
    image: {
      uri: "https://gasbanmai.com/wp-content/uploads/2023/05/canh-chua-ca-dieu-hong.png",
      alt: "Canh chua cá",
    },
    options: [
      { id: "a", text: "Canh chua cá", isCorrect: true },
      { id: "b", text: "Canh măng", isCorrect: false },
      { id: "c", text: "Canh rau đay", isCorrect: false },
      { id: "d", text: "Canh bí đỏ", isCorrect: false },
    ],
    answerDescription: "Canh chua cá với vị me chua thanh, kèm thơm và cà chua.",
    hint: "Thường xuất hiện trong bữa cơm miền Nam.",
  },
  {
    id: "id:question/cook4",
    question: "Đây là gì?",
    image: {
      uri: "https://sakos.vn/wp-content/uploads/2024/10/bia-ct.jpg",
      alt: "Cơm tấm",
    },
    options: [
      { id: "a", text: "Cơm tấm", isCorrect: true },
      { id: "b", text: "Cơm gà", isCorrect: false },
      { id: "c", text: "Cơm sườn", isCorrect: false },
      { id: "d", text: "Cơm chiên", isCorrect: false },
    ],
    answerDescription: "Cơm tấm là món ăn phổ biến ở miền Nam, ăn kèm sườn, bì, chả.",
    hint: "Hạt gạo nhỏ, thường được ăn vào sáng hoặc trưa.",
  },
  {
    id: "id:question/cook5",
    question: "Đây là gì?",
    image: {
      uri: "https://tiki.vn/blog/wp-content/uploads/2023/07/thumb-12.jpg",
      alt: "Phở bò",
    },
    options: [
      { id: "a", text: "Phở bò", isCorrect: true },
      { id: "b", text: "Phở gà", isCorrect: false },
      { id: "c", text: "Hủ tiếu", isCorrect: false },
      { id: "d", text: "Mì quảng", isCorrect: false },
    ],
    answerDescription: "Phở bò là món ăn truyền thống nổi tiếng nhất của Việt Nam.",
    hint: "Nước dùng hầm từ xương bò, thơm mùi quế, hồi.",
  },
  {
    id: "id:question/cook6",
    question: "Đây là gì?",
    image: {
      uri: "https://i.pinimg.com/736x/c3/03/3d/c3033de2d1df36a393fbd52da537fe77.jpg",
      alt: "Gỏi cuốn",
    },
    options: [
      { id: "a", text: "Gỏi cuốn", isCorrect: true },
      { id: "b", text: "Chả giò", isCorrect: false },
      { id: "c", text: "Bánh xèo", isCorrect: false },
      { id: "d", text: "Bánh cuốn", isCorrect: false },
    ],
    answerDescription: "Gỏi cuốn là món ăn thanh mát, thường chấm nước mắm chua ngọt hoặc tương.",
    hint: "Cuốn bằng bánh tráng, có tôm và rau sống.",
  },
  {
    id: "id:question/cook7",
    question: "Đây là gì?",
    image: {
      uri: "https://i.ytimg.com/vi/uFBb5sB-2Uc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCAAr4Gm6lahMJUQKJ-lGmETeGDaQ",
      alt: "Bánh xèo",
    },
    options: [
      { id: "a", text: "Bánh xèo", isCorrect: true },
      { id: "b", text: "Bánh khọt", isCorrect: false },
      { id: "c", text: "Bánh căn", isCorrect: false },
      { id: "d", text: "Bánh tráng nướng", isCorrect: false },
    ],
    answerDescription: "Bánh xèo là món ăn giòn rụm, thường ăn kèm rau sống và nước chấm.",
    hint: "Màu vàng, có tôm, thịt, giá đỗ bên trong.",
  },
  {
    id: "id:question/cook8",
    question: "Đây là gì?",
    image: {
      uri: "https://www.huongnghiepaau.com/wp-content/uploads/2024/07/cach-nau-chao-long-mien-bac.jpg",
      alt: "Cháo lòng",
    },
    options: [
      { id: "a", text: "Cháo lòng", isCorrect: true },
      { id: "b", text: "Cháo gà", isCorrect: false },
      { id: "c", text: "Phở lòng", isCorrect: false },
      { id: "d", text: "Cháo vịt", isCorrect: false },
    ],
    answerDescription: "Cháo lòng là món ăn truyền thống với lòng heo và cháo gạo thơm.",
    hint: "Ăn kèm rau thơm, quẩy và nước mắm.",
  },
  {
    id: "id:question/cook9",
    question: "Đây là gì?",
    image: {
      uri: "https://cdn.xanhsm.com/2025/01/125f9835-banh-mi-sai-gon-thumb.jpg",
      alt: "Bánh mì thịt",
    },
    options: [
      { id: "a", text: "Bánh mì thịt", isCorrect: true },
      { id: "b", text: "Bánh mì chảo", isCorrect: false },
      { id: "c", text: "Hamburger", isCorrect: false },
      { id: "d", text: "Bánh mì que", isCorrect: false },
    ],
    answerDescription: "Bánh mì thịt là món ăn đường phố nổi tiếng thế giới.",
    hint: "Bánh mì Việt Nam giòn rụm, có pate và rau dưa.",
  },
  {
    id: "id:question/cook10",
    question: "Đây là gì?",
    image: {
      uri: "https://www.simplyrecipes.com/thmb/hGF_Oyd0R22nOGcKYpwp3nS_Pcg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Che-Ba-Mau-LEAD-2-c6162830ea634fa5ae0fab2d21276378.jpg",
      alt: "Chè ba màu",
    },
    options: [
      { id: "a", text: "Chè ba màu", isCorrect: true },
      { id: "b", text: "Chè thập cẩm", isCorrect: false },
      { id: "c", text: "Chè đậu đỏ", isCorrect: false },
      { id: "d", text: "Chè thái", isCorrect: false },
    ],
    answerDescription: "Chè ba màu là món tráng miệng mát lạnh, với đậu, rau câu và nước cốt dừa.",
    hint: "Món ngọt với 3 màu đặc trưng trong ly.",
  },
].map(shuffleOptions);