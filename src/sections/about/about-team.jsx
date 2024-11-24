import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { _carouselsMembers } from 'src/_mock';

import { Image } from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';
import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function AboutTeam() {
  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: 4 },
  });

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
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
          {_carouselsMembers.map((member) => (
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
  );
}

// ----------------------------------------------------------------------

function MemberCard({ member }) {
  return (
    <Box sx={{ px: 1 }}>
      <Image alt={member.name} src={member.avatarUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
    </Box>
  );
}
