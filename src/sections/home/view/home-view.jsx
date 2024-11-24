'use client';

import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeMinimal } from '../home-minimal';
import { HomePricing } from '../home-pricing';
import { HomeColleagues } from '../home-colleagues';
import HomeArticle from '../home-article/home-article';
import { HomeTestimonials } from '../home-testimonials';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />
      <BackToTop />
      <HomeTestimonials />
      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <HomePricing />
        <HomeMinimal />
        <HomeColleagues />
        <HomeArticle />
        {/* <HomeFAQs /> */}

        {/* <HomeZoneUI /> */}
        {/* <HomeAdvertisement /> */}
        {/*

<HomeIntegrations />




      */}
      </Stack>
    </>
  );
}
