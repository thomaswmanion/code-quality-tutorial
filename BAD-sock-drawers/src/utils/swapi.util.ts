export const swapiUtil = {
    validateRequest(req): ValidateRequestOutput {
        const { type, num } = req.query;
        if (!type || !num) {
            return false;
        } else {
            return { type, num };
        }
    },
    transformResponse(data) {
        return {
            nameAndSize: `${data.name}-${data.mass || data.length || 'unknown'}`,
            hasStarships: !!data.starships && data.starships.length > 0,
        };
    },
};

export type ValidateRequestOutput = false | ValidateRequestOutputSuccess;

export interface ValidateRequestOutputSuccess {
    type: string;
    num: string;
}
