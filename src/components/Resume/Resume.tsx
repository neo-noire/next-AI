'use client'
import React, { useEffect } from 'react'
import '@/styles/globals.css'
import Divider from './Divider'
import Section from './Section'
import { observer } from "mobx-react-lite"
import store from '@/store/formStore'
import dayjs from 'dayjs'
import parse from 'html-react-parser'


const Resume: React.FC = () => {
    const { heading, job, jobDescription, education } = store.state

    return (
        <div className='mx-auto max-w-5xl py-4 px-6 lg:px-8 flex'>
            <div className='w-[210mm] h-[297mm] bg-slate-50 text-black'>
                <header className=' p-[10mm] pb-[5mm] bg-slate-400 border-b-2 border-sky-500'>
                    <div className='flex justify-center items-center gap-4 '>
                        <div>
                            {
                                heading.addressObj.city ?
                                    `${heading.addressObj.city}, ${heading.addressObj.state}, ${heading.addressObj.zip_code}`
                                    : null
                            }
                        </div>
                        <div className=' w-0.5 h-6 bg-sky-500' />
                        <div>
                            {heading.phone}
                        </div>
                        <div className=' w-0.5 h-6 bg-sky-500' />
                        <div>
                            {heading.email}
                        </div>
                    </div>
                </header>
                <main className='px-[10mm] text-sm'>
                    <div className='h-[6rem] flex-center'>
                        <h1 className='text-5xl font-extralight'>{`${heading.firstName} ${heading.lastName}`.toUpperCase()}</h1>
                    </div>
                    <Divider />
                    <Section title='position'>
                        <div>{job.jobTitle}</div>
                    </Section>
                    <Divider />
                    <Section title='PORTFOLIO'>
                        <div> https://mykoladev.netlify.app</div>
                    </Section>
                    <Divider />
                    <Section title='PROFESSIONAL SUMMARY'>
                        <div>Developed and implemented user interfaces using React.js, adhering to best practices and
                            coding standards to ensure high-quality deliverables.
                            Worked up on full stack solutions those are using SSR and Next.js.
                            Collaborated closely with cross-functional teams, including designers and backend
                            developers, to translate UI/UX designs into functional components, resulting in seamless
                            integration and an enhanced user experience.
                            Showcased a passion for learning and professional growth, actively seeking opportunities to
                            expand my skill set and staying informed about the latest advancements in React.js and
                            front-end development</div>
                    </Section>
                    <Divider />
                    <Section title='Skills'>
                        <ul className=' max-h-32 flex flex-col flex-wrap pl-3'>
                            <li className=' list-disc w-fit'>HTML</li>
                            <li className=' list-disc w-fit'>CSS</li>
                            <li className=' list-disc w-fit'>JS</li>
                            <li className=' list-disc w-fit'>React</li>
                            <li className=' list-disc w-fit'>Typescript</li>
                            <li className=' list-disc w-fit'>Git</li>
                            <li className=' list-disc w-fit'>Jira</li>
                            <li className=' list-disc w-fit'>Уес</li>
                            <li className=' list-disc w-fit'>JS</li>
                            <li className=' list-disc w-fit'>React</li>
                            <li className=' list-disc w-fit'>Typescript</li>
                            <li className=' list-disc w-fit'>Git</li>
                            <li className=' list-disc w-fit'>Jira</li>
                            <li className=' list-disc w-fit'>Уес</li>
                            <li className=' list-disc w-fit'>React</li>
                            <li className=' list-disc w-fit'>Typescript</li>
                            <li className=' list-disc w-fit'>Git</li>
                            <li className=' list-disc w-fit'>Jira</li>
                            <li className=' list-disc w-fit'>Уес</li>
                            <li className=' list-disc w-fit'>JS</li>
                            <li className=' list-disc w-fit'>React</li>
                            <li className=' list-disc w-fit'>Typescript</li>
                            <li className=' list-disc w-fit'>Git</li>
                            <li className=' list-disc w-fit'>Jira</li>
                            <li className=' list-disc w-fit'>Уес</li>
                        </ul>
                    </Section>
                    <Divider />
                    <Section title='WORK HISTORY'>
                        <div>
                            <div className='flex gap-1 flex-wrap items-center'>
                                <h3 className='inline-block font-semibold '>
                                    {job.jobTitle.toUpperCase()}
                                </h3>
                                <span className=' text-sm h-fit'>
                                    {
                                        job.startDate ?
                                            (job.endDate ?
                                                `${dateFormater(job.startDate)} to ${dateFormater(job.endDate)}`
                                                : `${dateFormater(job.startDate)} till now`)
                                            : null
                                    }
                                </span>
                            </div>
                            <div className=' text-xs font-normal'>
                                <span className=' font-bold'>
                                    {job.employer}
                                </span>
                                {job.city ? `, ${job.city}` : null}
                                {job.state ? `, ${job.state}` : null}
                            </div>
                            <div className='job-description'>
                                {parse(jobDescription)}
                            </div>
                        </div>
                    </Section>
                    <Divider />
                    <Section title='education'>
                        <div className='flex gap-1 flex-wrap items-center'>
                            <h3 className='inline-block font-semibold '>
                                {education.school}{education.location && ','}
                            </h3>
                            <span className='text-sm h-fit'>
                                {education.location}
                            </span>
                        </div>
                        <div className='flex gap-1 flex-wrap items-center'>
                            <h3 className='inline-block font-semibold '>
                                {education.degree},
                            </h3>
                            <span className='text-sm h-fit'>
                                {education.fieldOfStudy}, {dateFormater(education.graduation)}
                            </span>
                        </div>
                    </Section>
                </main>
            </div>
        </div>
    )
}

export default observer(Resume)


function dateFormater(a: string): string {
    const date = dayjs(a).format('DD/MM/YYYY')
    return date.split('/').slice(1).join('/')
}