# 🧠 Quiz App - React Native

Một ứng dụng quiz đa chủ đề được xây dựng với **React Native** (Expo), cung cấp giao diện đẹp mắt, hiệu ứng mượt mà và âm thanh sinh động. Dành cho người dùng yêu thích kiểm tra kiến thức hoặc giải trí với các câu hỏi thú vị.

## 🚀 Tính năng nổi bật

- 🎨 Giao diện thân thiện, trực quan như quiz.com
- 🧪 Nhiều bộ đề thú vị:
  - Vua Tiếng Việt
  - Thần đồng âm nhạc
  - Mát Tơ Chép (Ẩm thực)
  - Ôn tập React Native & Flutter
- 🧏‍♂️ Hiệu ứng âm thanh khi chọn đúng/sai
- ⏱ Mỗi câu hỏi có **30s** đếm ngược
- ✅ Tự động chuyển câu sau khi chọn đáp án
- 🎉 Hiệu ứng mưa hoa giấy khi hoàn thành bài test
- 📊 Màn hình kết quả chi tiết (số câu đúng, thời gian)

## 🧑‍💻 Công nghệ sử dụng

- **React Native + Expo**
- `react-native-pager-view` (cho hiệu ứng lật câu hỏi)
- `expo-av` (âm thanh đúng/sai)
- `react-native-confetti-cannon` (mưa hoa giấy)
- TypeScript hoặc JavaScript (có thể build song song)

## 🛠 Cài đặt và chạy ứng dụng

```bash
# Clone project
git clone https://github.com/tenban/quiz-app-demo.git
cd quiz-app-demo
```
```
# Cài đặt dependencies
npm install 
```
```
# Khởi chạy app
npx expo start --tunnel --clear
```
📱 Sử dụng Expo Go để quét mã QR và chạy trên điện thoại

📦 Build APK hoặc IPA
```bash
# Cần cài đặt expo-cli
npm install -g expo-cli
```
```
# Build Android
npx expo export --platform android
```
```
# Build iOS
npx expo export --platform ios
```
```
📂 Cấu trúc thư mục
bash
Sao chép
Chỉnh sửa
├── /assets
│   ├── /images
│   └── /sounds
├── /components
├── /data
│   └── Các bộ đề (masterChef, music, code, etc.)
├── /screens
│   └── HomeScreen, TestScreen, ResultScreen
├── App.js
└── README.md
```
📬 Đóng góp
Pull request hoặc feedback luôn được chào đón 🙌
Liên hệ: [nviethung23@gmail.com]

⭐ Credits
Phát triển bởi: nviethung23 và team ❤️
Demo: React Native App UI lấy cảm hứng từ quiz.com
