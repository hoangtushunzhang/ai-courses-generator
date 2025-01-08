'use server'

import { generateCoursebyAI } from "@/configs/AIModel";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { auth } from "@clerk/nextjs/server";

type CreateCourseProps = {
    courseID: string;
    language: string;
    category: string;
    topic: string;
    level: string;
    duration: string;
    numOfChapters: string;
    video: string;
    descripstion?: string;
    createdBy: string;
    userName: string;
    userProfileImage: string;
}

export async function createCourseContent(data: CreateCourseProps) {
    try {
        const user = auth();
        if (!user) return;
        const PROMPT = `Generate A Course Tutorial on Following Detail
         with Field as courseName, description, Along with chapterName,
          about, duration: category:${data?.category}, topic: ${data?.topic}, 
          level:${data?.level}, duration:${data?.duration}, numOfChapter: ${data?.numOfChapters}, in JSON 
          format and using ${data?.language}`;

        const result = await generateCoursebyAI.sendMessage(PROMPT);

        if (!result.response) {
            return;
        }

        const courseOutputByAI = JSON.parse(result?.response?.text());

        // Save Course on database
        await db.insert(CourseList).values({
            courseId: data?.courseID,
            language: data?.language,
            category: data?.category,
            topic: data?.topic,
            level: data?.level,
            courseOutputByAI: courseOutputByAI,
            createBy: data?.createdBy,
            userName: data?.userName,
            userProfileImage: data?.userProfileImage,
        })

    } catch (error) {
        console.error("Failed to course", error);
    }
}