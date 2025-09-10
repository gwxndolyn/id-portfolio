/*
	Installed from https://reactbits.dev/tailwind/
*/

/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef, useState, useEffect, memo } from 'react'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import {
  useFBO,
  useGLTF,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text,
} from '@react-three/drei'
import { easing } from 'maath'

// Import your components
import Hero from '../../../components/Hero.jsx'
import About from '../../../components/About.jsx'
import Projects from '../../../components/Projects.jsx'
import Contact from '../../../components/Contact.jsx'

export default function FluidGlass({
  navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
  ],
  ...barProps
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      gl={{ alpha: true }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ScrollControls damping={0.2} pages={4} distance={0.4}>
        <NavItems items={navItems} />
        <Bar modeProps={barProps}>
          <PortfolioContent />
        </Bar>
        <Scroll html>
          <PortfolioContent />
        </Scroll>
        <Preload />
      </ScrollControls>
    </Canvas>
  )
}

const Bar = memo(function Bar({ children, modeProps = {}, ...props }) {
  const ref = useRef()
  const { nodes } = useGLTF('/assets/3d/bar.glb')
  const buffer = useFBO()
  const { viewport: vp } = useThree()
  const [scene] = useState(() => new THREE.Scene())
  const geoWidthRef = useRef(1)

  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 2,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25,
    scale: 0.06,
    ...modeProps
  }

  useEffect(() => {
    const geo = nodes?.Cube?.geometry
    if (geo) {
      geo.computeBoundingBox()
      geoWidthRef.current =
        geo.boundingBox.max.x - geo.boundingBox.min.x || 1
    }
  }, [nodes])

  useFrame((state, delta) => {
    const { gl, viewport, camera } = state
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])

    const destY = v.height / 2 - 0.2
    easing.damp3(ref.current.position, [0, destY, 15], 0.15, delta)

    if (defaultMat.scale) {
      const maxWorld = v.width * 0.9
      const desired = maxWorld / geoWidthRef.current
      ref.current.scale.setScalar(Math.min(defaultMat.scale, desired))
    }

    gl.setRenderTarget(buffer)
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    // Background Color
    gl.setClearColor(0x000000, 1)
  })

  const {
    scale,
    ior,
    thickness,
    anisotropy,
    chromaticAberration,
    ...extraMat
  } = defaultMat

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.06}
        rotation-x={Math.PI / 2}
        geometry={nodes?.Cube?.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior}
          thickness={thickness}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  )
})

function NavItems({ items }) {
  const group = useRef()
  const { viewport, camera } = useThree()

  const DEVICE = {
    mobile: { max: 639, spacing: 0.15, fontSize: 0.025 },
    tablet: { max: 1023, spacing: 0.18, fontSize: 0.03 },
    desktop: { max: Infinity, spacing: 0.22, fontSize: 0.035 },
  }
  
  const getDevice = () => {
    const w = window.innerWidth
    return w <= DEVICE.mobile.max
      ? 'mobile'
      : w <= DEVICE.tablet.max
        ? 'tablet'
        : 'desktop'
  }

  const [device, setDevice] = useState(getDevice())

  useEffect(() => {
    const onResize = () => setDevice(getDevice())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { spacing, fontSize } = DEVICE[device]

  useFrame(() => {
    if (!group.current) return
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])
    group.current.position.set(0, v.height / 2 - 0.2, 15.1)

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing
    })
  })

  const handleNavigate = (link) => {
    if (!link) return
    
    // Handle scroll navigation for sections
    const scrollTo = (offset) => {
      const element = document.querySelector('canvas').parentElement
      if (element) {
        element.scrollTo({
          top: offset * window.innerHeight,
          behavior: 'smooth'
        })
      }
    }
    
    switch(link) {
      case '#home':
        scrollTo(0)
        break
      case '#about':
        scrollTo(1)
        break
      case '#projects':
        scrollTo(2)
        break
      case '#contact':
        scrollTo(3)
        break
      default:
        if (link.startsWith('#')) {
          window.location.hash = link
        } else {
          window.location.href = link
        }
    }
  }

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/assets/fonts/figtreeblack.ttf"
          depthWrite={false}
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          depthTest={false}
          renderOrder={10}
          onClick={(e) => {
            e.stopPropagation()
            handleNavigate(link)
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  )
}

function PortfolioContent() {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '400vh',
      pointerEvents: 'auto',
      zIndex: 1
    }}>
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'transparent'
      }}>
        <Hero />
      </div>
      
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'transparent'
      }}>
        <About />
      </div>
      
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'transparent'
      }}>
        <Projects />
      </div>
      
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'transparent'
      }}>
        <Contact />
      </div>
    </div>
  )
}