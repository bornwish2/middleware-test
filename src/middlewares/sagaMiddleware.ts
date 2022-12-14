import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../features/rootSaga";

const sagaMiddleware=createSagaMiddleware();

sagaMiddleware.run(rootSaga);

export default sagaMiddleware;