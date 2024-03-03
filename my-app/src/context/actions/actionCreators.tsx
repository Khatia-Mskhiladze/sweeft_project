import {INTERACTION} from "../actions/actions"

const searchTermHandler = (payload: boolean) => {
return {
    type: INTERACTION,
    payload,
}
};

export {searchTermHandler}