export enum stateTopics {
    heading = "heading",
    job = "job"
}
export type IState = {
    heading: IHeading,
    job: IJob,
    jobDescription: string,
    education: IEducation,
    skills: string[]
}

interface IEducation {
    school: string,
    location: string,
    degree: string,
    fieldOfStudy: string,
    graduation: string,
}

export interface IAddressObj {
    city: string,
    state: string,
    zip_code: string,
}

export interface IHeading {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    addressString: string,
    addressObj: IAddressObj,
}
export interface IJob {
    jobTitle: string,
    employer: string,
    city: string,
    state: string,
    startDate: string,
    endDate: string,
}

