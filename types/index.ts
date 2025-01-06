'use client'
import { z } from "zod";

export const FormSchema = z.object({
    language: z.string().min(1, {
        message: 'Please select a language',
    }),
    category: z.string().min(1, {
        message: 'Please select a category',
    }),
    topic: z.string().min(1, {
        message: 'Please enter a topic',
    }),
    description: z.string().optional(),
    level: z.string().min(1, {
        message: 'Please select a level',
    }),
    duration: z.string().min(1, {
        message: 'Please select a duration',
    }),
    video: z.string().min(1, {
        message: 'Please select a video status',
    }),
    numOfChapters: z.coerce.number().min(1, {
        message: 'Please select a number of chapters',
    })
})