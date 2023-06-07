import { IState } from "./types"

export const initialState: IState = {
    heading: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        addressString: "",
        addressObj: {
            city: "",
            state: "",
            zip_code: "",
        }
    },
    job: {
        jobTitle: "",
        employer: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
    },
    jobDescription: "",
    education: {
        school: "",
        degree: "",
        location: "",
        fieldOfStudy: "",
        graduation: ""
    },
    skills: []
}