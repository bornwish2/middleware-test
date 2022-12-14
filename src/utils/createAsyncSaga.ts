
import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';

type PromiseCreatorFunction<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>);


  function isPayloadAction(action: any): action is PayloadAction<string, any> {
    return action.payload !== undefined;
  }

  export default function createAsyncSaga<
  RequestType,
  RequestPayload,
  SuccessType,
  SuccessPayload,
  FailureType,
  FailurePayload
>(
  asyncActionCreator: AsyncActionCreatorBuilder<
    [RequestType, [RequestPayload, undefined]],
    [SuccessType, [SuccessPayload, undefined]],
    [FailureType, [FailurePayload, undefined]]
  >,
  promiseCreator: PromiseCreatorFunction<RequestPayload, SuccessPayload>
) {
  return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
    try {
      const result: SuccessPayload = isPayloadAction(action)
        ? yield call(promiseCreator, action.payload)
        : yield call(promiseCreator);
      yield put(asyncActionCreator.success(result));
    } catch (error) {
    //   yield put(asyncActionCreator.failure(error));
    }
  };
}
  