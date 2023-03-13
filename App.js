import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import Theme from 'components/template/Theme'
import Layout from 'components/layout'
import history from './history'
import mockServer from './mock'
import appConfig from 'configs/app.config'
import './locales'
import { QueryClient, QueryClientProvider } from 'react-query'

const environment = process.env.NODE_ENV

/**
 * Set enableMock(Default false) to true at configs/app.config.js
 * If you wish to enable mock api
 */
// if (environment !== 'production' && appConfig.enableMock) {
//     mockServer({ environment })
// }

// Charles push main
const queryClient = new QueryClient()

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter history={history}>
                        <Theme>
                            <Layout />
                        </Theme>
                    </BrowserRouter>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    )
}

export default App
