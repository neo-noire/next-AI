import { initialState } from '@/store/initialState';
import { makeAutoObservable, autorun } from "mobx"
import { makePersistable } from 'mobx-persist-store';
import { IState, stateTopics } from './types';

export class formStore {
    totalPages: number
    currentPage: number
    state: IState = initialState

    constructor() {
        this.totalPages = 5
        this.currentPage = 0;
        makeAutoObservable(this)
        makePersistable(this, { storage: window.localStorage, name: "MyStore", properties: ['state', 'currentPage'] })
    }

    nextPageHandler() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }

    }

    prevPageHandler() {
        this.currentPage > 0 ? this.currentPage-- : null
    }


    setPage(v: number) {
        this.currentPage = v;
    }

    pagesValid() {
        if (this.formCheck(stateTopics.heading)) {
            if (this.formCheck(stateTopics.job)) {
                return 2;
            }
            return 1
        }

        return 0
    }

    private formCheck(objKey: stateTopics): boolean {
        return Object.values(this.state[objKey]).every(Boolean)
    }



}


const formState = new formStore()

export default formState;