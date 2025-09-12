import React from 'react'
import { ProvidersHero } from './ProvidersHero'
import PartnershipProgram from './PartnershipProgram'
import PartnershipRequirements from './PartnershipRequirements'
import PartnershipApplication from './PartnershipApplication'
import { TrustSection } from '../Home/TrustSection'
import AutoCarousel from './Auto'

export const Providers = () => {
  return (
    <div>
      <ProvidersHero />
      <PartnershipProgram />
      <PartnershipRequirements />
      <PartnershipApplication />
      <TrustSection />
    </div>
  )
}
