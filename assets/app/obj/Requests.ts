/**
 * Created by thisum on 5/28/2017.
 */

export class RequestRecord{

    constructor(
        public recordTime: string,
        public content: string,
        public decision: boolean
    ) {}
}