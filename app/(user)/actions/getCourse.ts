'use server'

import { db } from "@/configs/db"
import { CourseList } from "@/configs/schema"
import { and, eq } from "drizzle-orm"

export const getUserCourseByCourseId = async (courseId: string, email: string) => {
    try {
        const course = await db.select().from(CourseList).where(and(eq(CourseList?.courseId, courseId), eq(CourseList.createBy, email))).execute();
        return course[0];
    } catch (error) {
        console.log(error);
    }

} 