import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, OrbitControls, Environment, Float, Loader } from '@react-three/drei'
import * as THREE from 'three'

function Frames({ images, radius = 4, onImageClick }) {
    const count = images.length

    if (count === 0) return null

    return (
        <group>
            {images.map((img, i) => {
                // Fibonacci sphere distribution
                const phi = Math.acos(-1 + (2 * i) / count)
                const theta = Math.sqrt(count * Math.PI) * phi

                const x = radius * Math.cos(theta) * Math.sin(phi)
                const y = radius * Math.sin(theta) * Math.sin(phi) // Vary height
                const z = radius * Math.cos(phi)

                return (
                    <Frame key={i} data={img} position={[x, y, z]} onClick={() => !img.skeleton && onImageClick && onImageClick(img)} />
                )
            })}
        </group>
    )
}

function Frame({ data, position, onClick }) {
    const ref = useRef()
    const [hovered, setHover] = useState(false)

    useFrame((state) => {
        if (ref.current) {
            // Make image/mesh face the center (0,0,0)
            ref.current.lookAt(0, 0, 0)
        }
    })

    // Cursor pointer on hover
    useEffect(() => {
        document.body.style.cursor = hovered && !data.skeleton ? 'pointer' : 'auto'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered, data.skeleton])

    if (data.skeleton) {
        return (
            <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
                <mesh ref={ref} position={position}>
                    <planeGeometry args={[2, 2]} />
                    <meshBasicMaterial color="#222" side={THREE.DoubleSide} transparent opacity={0.3} />
                </mesh>
            </Float>
        )
    }

    return (
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
            <Image
                ref={ref}
                url={data.imageUrl}
                position={position}
                scale={[1.7, 1.7]} // Aspect ratio 1:1, larger scale to reduce gaps
                side={THREE.DoubleSide}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                onClick={onClick}
            />
        </Float>
    )
}

export default function DomeGallery({ images = [], onImageClick }) {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '500px', overflow: 'hidden', background: '#000', position: 'relative' }}>
            <Canvas camera={{ position: [0, 0, 25], fov: 50 }}>
                <color attach="background" args={['#050505']} />
                <ambientLight intensity={0.5} />
                <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} />

                <Suspense fallback={null}>
                    <Frames images={images} radius={8} onImageClick={onImageClick} />
                    <Environment preset="city" />
                </Suspense>

                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    enableZoom={true}
                    enablePan={false}
                    minDistance={15}
                    maxDistance={45}
                />
            </Canvas>
            <Loader
                containerStyles={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: '#050505',
                    zIndex: 100
                }}
                barStyles={{
                    height: '4px',
                    background: '#a40c1a',
                    width: '100%'
                }}
                innerStyles={{
                    width: '50vw',
                    backgroundColor: '#222'
                }}
                dataStyles={{
                    color: '#a40c1a',
                    fontSize: '1.2rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                }}
                dataInterpolation={(p) => `Loading Memories ${p.toFixed(0)}%`}
            />
        </div>
    )
}
