import { boolean, json, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const CourseList = pgTable("courseList", {
    id: serial("id").primaryKey(),
    courseId: varchar('couseId').notNull(),
    language: varchar('language').notNull(),
    category: varchar('category').notNull(),
    topic: varchar('topic').notNull(),
    level: varchar('level').notNull(),
    video: varchar('video').notNull().default('yes'),
    courseOutputByAI: json('courseOutputByAI').notNull(),
    createBy: varchar('userName').notNull(),
    userProfileImage: varchar('userProfileImage'),
    courseBanner: varchar('courseBanner').notNull().default('/.placeholder.png'),
    publish: boolean('publish').default(false),
    createAt: timestamp('createAt').notNull().defaultNow(),
})