import { Addtocart as AddtocartType } from '../Constant';

const AddtocartAction = (data) => {
    return {
        type: AddtocartType,
        data: data
    };
};

export default AddtocartAction;
