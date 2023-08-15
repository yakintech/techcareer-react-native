
import { QueryClient, QueryClientProvider } from 'react-query'
import SupplierPage from './src/axiosSamples/SupplierPage'
import LottieSample from './src/lottieSample/LottieSample'
import ProductScreen from './src/samples/ProductScreen'
import Customers from './src/reactquerysample/Customers'

const queryClient = new QueryClient()

export default function App() {


    return <QueryClientProvider client={queryClient}>
        <Customers/>
    </QueryClientProvider>

}


