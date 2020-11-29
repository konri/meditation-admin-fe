import { Store } from '../rootReducer'

const useLoading = (state: Store) => state.auth.loading

const useError = (state: Store) => state.auth.error

export default { useLoading, useError }
