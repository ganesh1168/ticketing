
import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(() => import('../../components/signup'), { ssr: false })
export default DynamicComponent;