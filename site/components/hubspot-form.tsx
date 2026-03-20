'use client'

import { useEffect, useRef } from 'react'

interface HubSpotFormProps {
  formId: string
  portalId?: string
  region?: string
  className?: string
}

export function HubSpotForm({
  formId,
  portalId = '147199122',
  region = 'eu1',
  className = '',
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    const loadForm = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
        const wrapper = document.createElement('div')
        wrapper.className = 'hs-form-frame'
        wrapper.setAttribute('data-region', region)
        wrapper.setAttribute('data-form-id', formId)
        wrapper.setAttribute('data-portal-id', portalId)
        containerRef.current.appendChild(wrapper)
      }
    }

    if (!scriptLoaded.current) {
      const existingScript = document.querySelector(
        `script[src="https://js-${region}.hsforms.net/forms/embed/${portalId}.js"]`
      )
      if (existingScript) {
        scriptLoaded.current = true
        loadForm()
        return
      }

      const script = document.createElement('script')
      script.src = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`
      script.defer = true
      script.onload = () => {
        scriptLoaded.current = true
        loadForm()
      }
      document.head.appendChild(script)
    } else {
      loadForm()
    }
  }, [formId, portalId, region])

  return <div ref={containerRef} className={className} />
}
