
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { useTabs } from 'src/hooks/use-tabs';

import { MotionViewport } from 'src/components/animate';

import { FloatLine } from './components/svg-elements';
import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomePricing({ sx, ...other }) {
  const theme = useTheme();

  const tabs = useTabs('Standard');

  const renderDescription = (
    <SectionTitle
      // caption="اهداف ما"
      title="لنت ترمز"
      txtGradient="پارسیان"
      description="کیفیت بی‌نظیر، ایمنی تضمینی، و اعتماد همیشگی؛ لنت‌هایی برای آرامش و امنیت شما در هر مسیر"
      sx={{ mb: 8, textAlign: 'center' }}
    />
  );

  return (
    <Stack component="section" sx={{ py: 10, position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        <FloatLine vertical sx={{ top: 0, left: 80 }} />

        <Container>{renderDescription}</Container>

        <Box
          sx={{
            position: 'relative',
            '&::before, &::after': {
              width: 64,
              height: 64,
              content: "''",
              [theme.breakpoints.up(1440)]: {
                display: 'block',
              },
            },
          }}
        >
          <FloatLine sx={{ top: 64, left: 0 }} />
          <FloatLine sx={{ bottom: 64, left: 0 }} />
        </Box>
      </MotionViewport>
    </Stack>
  );
}
