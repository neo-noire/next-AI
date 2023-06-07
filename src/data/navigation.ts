interface IFormNavItem {
    id: string,
    name: string,
}
type IFormNav = IFormNavItem[]

export const formNavigation: IFormNav = [
    {
        id: "1",
        name: "Heading"
    },
    {
        id: "2",
        name: "Work History"
    },
    {
        id: "3",
        name: "Education"
    },
    {
        id: "4",
        name: "Skills"
    },
    {
        id: "5",
        name: "Summary"
    },
    {
        id: "6",
        name: "Finalize"
    },
]