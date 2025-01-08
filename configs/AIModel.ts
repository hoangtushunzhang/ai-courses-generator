import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const generateCoursebyAI = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate A Course Tutorial on Following Detail with Field as courseName, description, Along with chapterName, about, duration: category:\"Programing\", topic: \"Python\", level:\"Basic\", duration:\"1 Hour\", numOfChapter: 5, in JSON format and using English" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"courseName\": \"Introduction to Python Programming\",\n  \"description\": \"This course provides a foundational understanding of Python programming.  It covers basic syntax, data types, control flow, and fundamental programming concepts.  Ideal for beginners with little to no prior programming experience.\",\n  \"chapters\": [\n    {\n      \"chapterName\": \"Setting Up Your Python Environment\",\n      \"about\": \"Learn how to install Python, choose an IDE (Integrated Development Environment) like VS Code or PyCharm, and write your first 'Hello, World!' program. We'll also cover basic command-line navigation.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Data Types and Variables\",\n      \"about\": \"Explore fundamental Python data types such as integers, floats, strings, booleans, and how to declare and use variables. We will also cover type conversion.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Control Flow: Conditional Statements and Loops\",\n      \"about\": \"Master conditional statements (if, elif, else) to control the flow of your programs.  Learn about different loop structures (for and while loops) to iterate over data.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Basic Data Structures: Lists and Tuples\",\n      \"about\": \"Understand the difference between lists and tuples, how to create them, access their elements, and perform basic operations like appending and slicing.\",\n      \"duration\": \"10 minutes\"\n    },\n    {\n      \"chapterName\": \"Functions and Introduction to Modules\",\n      \"about\": \"Learn how to define and call functions to organize your code. We'll introduce the concept of modules and how to import and use pre-built functions.\",\n      \"duration\": \"5 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"totalDuration\": \"1 hour\",\n  \"numOfChapters\": 5\n}\n```\n" },
            ],
        },
    ],
});



