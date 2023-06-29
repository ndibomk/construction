import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import todosReducer from "./features/todosSlice";
import commentReducer from "./features/commentSlice";
import invoiceReducer from './features/invoiceSlice'
import quizReducer from './features/quizSlice'
import feedbackReducer from './features/feedback'
import ProductReducer from "./features/productSlice";
import MpesaReducer from "./features/mpesa";
// import cartReducer from "./features/cartSlice";
// import messageReducer from "./features/Message";
// import helpReducer from "./features/HelpSlice";
// import answerReducer from "./features/answerSlice";
const store=configureStore({
    reducer:{
        auth: AuthReducer,
        todosState: todosReducer,
        todos: commentReducer,
        invoice: invoiceReducer,
        todos: quizReducer,
        todos: feedbackReducer,
        project: ProductReducer,
        mpesa:MpesaReducer,
        // cart:cartReducer,
        // message:messageReducer,
        // help:helpReducer,
        // answer:answerReducer,
    }
    
})

export default store