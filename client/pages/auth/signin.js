
import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(() => import('../../components/signin'), { ssr: false })
export default DynamicComponent;