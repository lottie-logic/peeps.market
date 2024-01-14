'use client'

import { useGLTF } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'


export function Dog(props) {

  const { scene } = useGLTF('/logo.glb')

  return (
     <>
     <ambientLight intensity={0.2} /><directionalLight />
     <mesh>
      <primitive object={scene}  {...props} />
    </mesh></>
  ) 
}


const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex flex-col items-center justify-center w-full h-96'>
      <svg className='w-5 h-5 mr-3 -ml-1 text-black animate-spin' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
   

      <div className='flex flex-col flex-wrap items-center w-full p-12 mx-auto md:flex-row lg:w-4/5'>
        {/* first row */}
       
        <div className='relative w-full h-48 py-6 my-12 md:mb-40'>
          <View orbit className='relative h-full sm:h-48 sm:w-full'>
            <Suspense fallback={null}>
              <Dog scale={1} position={[0, 0, 0]} rotation={[0.0, 0, 0]} />
              <Common color={'white'} />
            </Suspense>
          </View>
        </div>
       
      
      </div>
    </>
  )
}
