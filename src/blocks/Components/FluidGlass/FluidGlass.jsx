/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef, useState, useEffect, memo } from 'react'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import { useFBO, useGLTF, MeshTransmissionMaterial, Text } from '@react-three/drei'
import { easing } from 'maath'

export default function FluidGlass({
  barProps = {},
}) {
  const {
    navItems = [
      { label: 'Home', link: '#home' },
      { label: 'About', link: '#about' },
      { label: 'Projects', link: '#projects' },
      { label: 'Contact', link: '#contact' },
    ],
    ...modeProps
  } = barProps

  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      gl={{ alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <NavItems items={navItems} />
      <Bar modeProps={modeProps} />
    </Canvas>
  )
}

const ModeWrapper = memo(function ModeWrapper({
  glb,
  geometryKey,
  modeProps = {},
  ...props
}) {
  const ref = useRef()
  const { nodes } = useGLTF(glb)
  const buffer = useFBO()
  const { viewport: vp } = useThree()
  const [scene] = useState(() => new THREE.Scene())
  const geoWidthRef = useRef(1)

  useEffect(() => {
    const geo = nodes[geometryKey]?.geometry
    geo.computeBoundingBox()
    geoWidthRef.current =
      geo.boundingBox.max.x - geo.boundingBox.min.x || 1
  }, [nodes, geometryKey])

  useFrame((state, delta) => {
    const { gl, viewport, camera } = state
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])
    const destY = v.height / 2 - 0.4
    easing.damp3(ref.current.position, [0, destY, 15], 0.15, delta)

    if (modeProps.scale == null) {
      const maxWorld = v.width * 0.5
      const desired = maxWorld / geoWidthRef.current
      ref.current.scale.setScalar(Math.min(0.07, desired))
    }

    gl.setRenderTarget(buffer)
    gl.render(scene, camera)
    gl.setRenderTarget(null)
    gl.setClearColor(0x000000, 0)
  })

  const {
    scale,
    ior,
    thickness,
    anisotropy,
    chromaticAberration,
    ...extraMat
  } = modeProps

  return (
    <>
      {createPortal(null, scene)}
      <mesh
        ref={ref}
        scale={scale ?? 0.07}
        rotation-x={Math.PI / 2}
        geometry={nodes[geometryKey]?.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  )
})

function Bar({ modeProps = {}, ...p }) {
  const defaultMat = {
    transmission: 1,
    roughness: 0.1,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25,
  }

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  )
}

function NavItems({ items }) {
  const group = useRef()
  const { viewport, camera } = useThree()

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 },
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
    group.current.position.set(0, v.height / 2 - 0.35, 15.1)

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing
    })
  })

  const handleNavigate = (link) => {
    if (!link) return
    link.startsWith('#')
      ? (window.location.hash = link)
      : (window.location.href = link)
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
