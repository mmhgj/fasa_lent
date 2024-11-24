import { m } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { _carouselColleagues } from 'src/_mock/parsian/_colleagues';

import { Image } from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';
import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function HomeColleagues() {
  const carousel = useCarousel(
    {
      align: 'start',
      slideSpacing: '24px',
      slidesToShow: { xs: 2, sm: 2, md: 3, lg: 4 },
    },
    [Autoplay({ playOnInit: false, delay: 100 })]
  );

  return (
    <div className="colleagues_section" style={{ padding: '0 20px' }}>
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
        <h2>همکاران</h2>

        <Stack sx={{ position: 'relative' }}>
          <CarouselArrowFloatButtons
            {...carousel.arrows}
            options={carousel.options}
            slotProps={{
              prevBtn: { sx: { left: { xs: -8, md: -40 }, transform: 'rotate(180deg)' } },
              nextBtn: { sx: { right: { xs: -8, md: -40 }, transform: 'rotate(180deg)' } },
            }}
          />

          <Carousel carousel={carousel} sx={{ px: 0.5 }}>
            {_carouselColleagues.map((member) => (
              <Box
                key={member.id}
                component={m.div}
                variants={varFade().in}
                sx={{ py: { xs: 8, md: 10 } }}
              >
                <MemberCard member={member} />
              </Box>
            ))}
          </Carousel>
        </Stack>
      </Container>
    </div>
  );
}

// ----------------------------------------------------------------------

function MemberCard({ member }) {
  return (
    <Box sx={{ px: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '200px' }}>
        <Image
          alt={member.name}
          src={member.avatarUrl}
          sx={{
            borderRadius: 2,
            maxHeight: '140px',
            // background: 'red',
            // padding: '10px',
            objectFit: 'cover',
            // aspectRatio: '3/3',
          }}
        />
      </div>
    </Box>
  );
}
