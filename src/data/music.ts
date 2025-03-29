import { Question, Test } from "./types";

export const MusicTest: Test = {
  id: "id:test/music",
  title: "Thần đồng âm nhạc",
  testName: "music",
  numOfQuestions: 10,
  duration: 5,
  image: {
    uri: "https://cdn-i.vtcnews.vn/resize/th/upload/2025/03/29/4875042709748534814964212257069272848835539n-1-01470203.jpg",
    alt: "Thần đồng âm nhạc",
  },
};

export const musicQuestions: Question[] = [
  {
    id: "id:question/music1",
    question: "\"Bước thật bước thật ...... về phía anh, từng giờ từng phút tiếng yêu nhiều thêm\". Điền từ còn thiếu:",
    image: { uri: "https://i.ytimg.com/vi/_4CiX0waEr0/maxresdefault.jpg", alt: "Lyrics Hint" },
    options: [
      { id: "a", text: "Khẽ", isCorrect: false },
      { id: "b", text: "Chậm", isCorrect: true },
      { id: "c", text: "Nhanh", isCorrect: false },
      { id: "d", text: "Gần", isCorrect: false },
    ],
    answerDescription: "Từ đúng là 'chậm' – lời bài hát từ 'Một ngày hay trăm năm'.",
    hint: "Tốc độ bước đi trong bài hát rất nhẹ nhàng.",
  },
  {
    id: "id:question/music2",
    question: "Ai là tác giả bài hát 'Trời giấu trời mang đi'?",
    image: { uri: "https://ict-imgs.vgcloud.vn/2021/02/08/20/viruss-la-ai-game-thu-hay-nhac-si-1.jpg?width=0&s=8F8LjN_qQKch-zQpchOOSw", alt: "Ca sĩ" },
    options: [
      { id: "a", text: "Sơn Tùng M-TP", isCorrect: false },
      { id: "b", text: "J97", isCorrect: false },
      { id: "c", text: "Viruss", isCorrect: true },
      { id: "d", text: "Hương Tràm", isCorrect: false },
    ],
    answerDescription: "Viruss là tác giả ca khúc nổi tiếng này.",
    hint: "Là một YouTuber kiêm nhà sản xuất âm nhạc.",
  },
  {
    id: "id:question/music3",
    question: "Fandom của J97 tên là gì?",
    image: { uri: "https://cdn-i.vtcnews.vn/resize/th/upload/2022/07/20/ava-copy-09081100.jpg", alt: "Fandom J97" },
    options: [
      { id: "a", text: "Đom đóm", isCorrect: true },
      { id: "b", text: "Chôm Chôm", isCorrect: false },
      { id: "c", text: "Ruồi phát sáng", isCorrect: false },
      { id: "d", text: "Ngọc Bình", isCorrect: false },
    ],
    answerDescription: "Tên fandom chính thức của J97 là Đom đóm.",
    hint: "Một loài côn trùng phát sáng trong đêm.",
  },
  {
    id: "id:question/music4",
    question: "Lời bài hát 'Chúng ta của hiện tại' có đoạn nào sau đây?",
    image: { uri: "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/chungtacuahientai.jpg", alt: "Lyrics hint" },
    options: [
      { id: "a", text: "Cầm tay anh thật lâu nhé em", isCorrect: false },
      { id: "b", text: "Ngày mai em đi lấy chồng", isCorrect: false },
      { id: "c", text: "Mình giữ nhau chẳng rời xa", isCorrect: true },
      { id: "d", text: "Em bước đi thật xa", isCorrect: false }
    ],
    answerDescription: "Đáp án đúng là 'Mình giữ nhau chẳng rời xa'.",
    hint: "Câu hát thể hiện mong muốn gắn bó lâu dài."
  },
  {
    id: "id:question/music5",
    question: "Sắp xếp lời bài hát: 'Ta/ áng/ là/ chúng/ vội/ vàng/ ngang/ qua/ bên/ trời/ mây'",
    image: { uri: "https://cloudvodhn.tek4tv.vn/Mam/attach/upload/08032024144648/bb9f22b7-f9e5-450a-8e17-3e46bc16adef-171.jpg", alt: "Lời bài hát" },
    options: [
      { id: "a", text: "Chúng ta là áng mây bên trời vội vàng ngang qua", isCorrect: true },
      { id: "b", text: "Chúng ta là bên trời áng mây ngang qua vội vàng", isCorrect: false },
      { id: "c", text: "Ta là mây bên trời vội vàng chúng áng ngang qua", isCorrect: false },
      { id: "d", text: "Bên trời chúng ta là áng mây ngang qua vội vàng", isCorrect: false },
    ],
    answerDescription: "Đáp án đúng: 'Chúng ta là áng mây bên trời vội vàng ngang qua'.",
    hint: "Nghe giống một câu thơ buồn, trôi nổi.",
  },
  {
    id: "id:question/music6",
    question: "Bài này của Pháo đang muốn nói đến ai",
    image: { uri: "https://cdn.24h.com.vn/upload/1-2025/images/2025-03-22/1742613296-screenshot-2025-03-22-at--4626-2521-width645height355.png", alt: "Sự nghiệp chướng" },
    options: [
      { id: "a", text: "Anh Tes", isCorrect: false },
      { id: "b", text: "Người yêu cũ", isCorrect: false },
      { id: "c", text: "Anh Viruss", isCorrect: true },
      { id: "d", text: "Cộng đồng mạng", isCorrect: false },
    ],
    answerDescription: "Cái anh hay nói đạo lý",
    hint: "Là một người quản lý thời gian hoàn hảo"
  },
  {
    id: "id:question/music7",
    question: "Anh đập banh, đập banh. Đến em .... vào",
    image: { uri: "https://i.ytimg.com/vi/IzSYlr3VI1A/maxresdefault.jpg", alt: "Đỗ Phú Quý" },
    options: [
      { id: "a", text: "Nhanh ", isCorrect: false },
      { id: "b", text: "Nhẹ", isCorrect: false },
      { id: "c", text: "Banh", isCorrect: false },
      { id: "d", text: "Mạnh", isCorrect: true },
    ],
    answerDescription: "Ca khúc Pickle Ball được thể hiện bởi Đỗ Phú Quý.",
    hint: "Viral vì có lời bài hát sáo rỗng."
  },
  {
    id: "id:question/music8",
    question: "Bài hát nào được mệnh danh là 'Quốc ca của GenZ thất tình'?",
    image: { uri: "https://images2.thanhnien.vn/zoom/700_438/528068263637045248/2023/5/22/wren-3-1684769431155750027640-49-168-1038-1750-crop-1684769648718866529179.jpg", alt: "Sad music GenZ" },
    options: [
      { id: "a", text: "3107", isCorrect: false },
      { id: "b", text: "Yêu lại từ đầu", isCorrect: false },
      { id: "c", text: "Có hẹn với thanh xuân", isCorrect: false },
      { id: "d", text: "Thích Em Hơi Nhiều", isCorrect: true }
    ],
    answerDescription: "'Thích Em Hơi Nhiều' được dân mạng đùa là quốc ca của GenZ thất tình.",
    hint: "Bài hát có trend TikTok kèm động tác dễ thương."
  },
  {
    id: "id:question/music9",
    question: "Bài hát nào giúp Jack nổi tiếng khi còn hoạt động cùng K-ICM?",
    image: { uri: "https://cdn-images.vtv.vn/zoom/640_400/2019/7/12/mvsonggio06-1562949600184649621149.jpg", alt: "Jack & K-ICM" },
    options: [
      { id: "a", text: "Sóng gió", isCorrect: true },
      { id: "b", text: "Bạc phận", isCorrect: false },
      { id: "c", text: "Hồng nhan", isCorrect: false },
      { id: "d", text: "Là một thằng con trai", isCorrect: false },
    ],
    answerDescription: "Ca khúc 'Sóng gió' là cú hit lớn trong sự nghiệp của Jack & K-ICM.",
    hint: "Tên bài hát mang hình ảnh biển cả, thử thách."
  },
  {
    id: "id:question/music10",
    question: "Bài '3107' có sự kết hợp giữa ai?",
    image: { uri: "https://i.ytimg.com/vi/V5GS5ANG96M/maxresdefault.jpg", alt: "3107 Poster" },
    options: [
      { id: "a", text: "W/N & Duongg & Nâu", isCorrect: true },
      { id: "b", text: "W/N & Hoaprox", isCorrect: false },
      { id: "c", text: "AMEE & W/N", isCorrect: false },
      { id: "d", text: "Sơn Tùng & SlimV", isCorrect: false },
    ],
    answerDescription: "'3107' là bản nhạc chill nổi bật của W/N, kết hợp với Duongg và Nâu.",
    hint: "Tên bài hát là một con số.",
  }
];
