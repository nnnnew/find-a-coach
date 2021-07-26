export default {
    requests(state, _, _2, rootGetters) {
        const coachId = rootGetters.userId;
        return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(_, getters) {
        console.log(getters.requests);
        return getters.reqeusts && getters.reqeusts.length > 0;
    }
};