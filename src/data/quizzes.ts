
import { FlagTest, flagQuestions } from "./vietelts";
import { MusicTest, musicQuestions } from "./music";
import { CookingTest, cookingQuestions } from "./masterChef";
import { CodeTest, CodeQuestions } from "./Code";

export const quizzes = [
  {
    id: FlagTest.id,
    title: FlagTest.title,
    image: FlagTest.image,
    questions: flagQuestions,
    numOfQuestions: FlagTest.numOfQuestions,
    duration: FlagTest.duration,
    testName: FlagTest.testName,
  },
  {
    id: CookingTest.id,
    title: CookingTest.title,
    image: CookingTest.image,
    questions: cookingQuestions,
    numOfQuestions: CookingTest.numOfQuestions,
    duration: CookingTest.duration,
    testName: CookingTest.testName,
  },
  {
    id: MusicTest.id,
    title: MusicTest.title,
    image: MusicTest.image,
    questions: musicQuestions,
    numOfQuestions: MusicTest.numOfQuestions,
    duration: MusicTest.duration,
    testName: MusicTest.testName,
  },
  {
  id: CodeTest.id,
  title: CodeTest.title,
  image: CodeTest.image,
  questions: CodeQuestions,
  numOfQuestions: CodeTest.numOfQuestions,
  duration: CodeTest.duration,
  testName: CodeTest.testName,
  },
  
];
