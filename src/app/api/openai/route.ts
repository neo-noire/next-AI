import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)


export async function POST(req: NextRequest) {

    const body = await req.json();
    console.log('we get to api function', body);
    if (!configuration.apiKey) {
        return NextResponse.json(
            {
                error: {
                    message: "OpenAI API key not configured, please follow instructions in README.md",
                }
            }, { status: 500 })
    }
    const jobTitle = body.job || '';


    if (jobTitle.trim().length === 0) {
        return NextResponse.json(
            {
                error: {
                    message: "Please enter a valid Job Title",
                }
            }, { status: 400 })
    }

    try {
        // text completion
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(jobTitle),
            max_tokens: 3500,
            temperature: 1,
        });
        //chat completion
        // const completion = await openai.createChatCompletion({
        //     model: "text-davinci-003",
        //     prompt: generatePrompt(jobTitle),
        //     temperature: 0.6,
        // });
        return NextResponse.json(
            { result: completion.data.choices[0].text }, { status: 200 }
        )
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error?.response) {
            console.error(error?.response?.status, error?.response?.data);
            return NextResponse.json(error?.response?.data, { status: error?.response?.status })
        } else {
            console.error(`Error with OpenAI API request: ${error?.message}`);
            return NextResponse.json({
                error: {
                    message: 'An error occurred during your request.',
                }
            }, { status: 500 })
        }
    }

}


function generatePrompt(jobTitle: string) {
    const capitalizedJobTitle =
        jobTitle[0].toUpperCase() + jobTitle.slice(1).toLowerCase();
    return `Suggest as much as you can bullet skills points for a Job Title, without explanation only the points, listed one by one.
        Use example
        Job Title: Frontend Developer
        Skills: HTML, CSS, SASS, Less, React, Vue, Angular, Svelte, Git, TailwindCSS 
        Job Title: Backend Developer
        Skills: Python, Java, C#, Ruby, Node.js, Flask, Django, Spring Boot, Express.js, Ruby on Rails, MySQL, PostgreSQL, MongoDB, Redis, Git, JUnit, NUnit
        Job Title: ${capitalizedJobTitle}
        Skills:`;
}