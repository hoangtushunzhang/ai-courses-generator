'use client';
import { FormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CategoryItems, DurationItems, LanguageItems, LevelItems, VideoItems } from '@/constants';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import HeaderContent from '../_components/HeaderContent';


const CreateCoursePage = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            language: "",
            category: '',
            description: '',
            duration: '',
            level: '',
            numOfChapters: 0,
            topic: '',
            video: '',
        },
    });

    function onSubmit(UserInput: z.infer<typeof FormSchema>) {
        console.log(UserInput)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <HeaderContent leftsideTitle='Create' rightsideTitle='New Course' />
            <div className='mt-8 border-2 bg-white p-8 rounded-lg shadow-lg 
            lg:min-w-[900px]  '>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        {/* Language */}
                        <FormField
                            control={form.control}
                            name="language"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Language</FormLabel>
                                    <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Please select the language for the course" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {LanguageItems.map((item) => (
                                                <SelectItem key={item.value}
                                                    value={item.value} >
                                                    {item.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>

                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className='grid md:grid-cols-2 gap-5'>
                            {/* Category */}
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Please select a category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {CategoryItems.map((item) => (
                                                    <SelectItem key={item.value}
                                                        value={item.value} >
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>

                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Topic */}
                            <FormField
                                control={form.control}
                                name="topic"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Topic</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Please enter the course topic (e.g: python, typescript)'
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Level */}
                            <FormField
                                control={form.control}
                                name="level"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Level</FormLabel>
                                        <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Please select a level" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {LevelItems.map((item) => (
                                                    <SelectItem key={item.value}
                                                        value={item.value} >
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>

                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Duration */}
                            <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Duration</FormLabel>
                                        <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Please select a course duration" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {DurationItems.map((item) => (
                                                    <SelectItem key={item.value}
                                                        value={item.value} >
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>

                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Video */}
                            <FormField
                                control={form.control}
                                name="video"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Video ?</FormLabel>
                                        <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Please select a video status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {VideoItems.map((item) => (
                                                    <SelectItem key={item.value}
                                                        value={item.value} >
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>

                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Number of Chapter */}
                            <FormField
                                control={form.control}
                                name="numOfChapters"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Number of Chapters</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='number'
                                                placeholder='Please enter the number of chapters'
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description <span className='italic'>(optional)</span></FormLabel>
                                    <FormControl className='min-h-40'>
                                        <Textarea placeholder='Please enter a detail description
                                 for the course so the AI tool can create the most 
                                 suitable course for you.'
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className='bg-myPrimary hover:bg-myPrimary/80'>Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
};

export default CreateCoursePage