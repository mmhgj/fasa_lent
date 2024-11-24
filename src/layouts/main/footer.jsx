import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { img } from 'src/data/img';

import { Logo } from 'src/components/logo';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: paths.about },
      { name: 'Contact us', href: paths.contact },
      { name: 'FAQs', href: paths.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and condition', href: '#' },
      { name: 'Privacy policy', href: '#' },
    ],
  },
  { headline: 'Contact', children: [{ name: 'support@minimals.cc', href: '#' }] },
];

// ----------------------------------------------------------------------

export function Footer({ layoutQuery, sx }) {
  const theme = useTheme();

  return <HomeFooter />;
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx }) {
  console.log(img.footer.footer_saipa_logo?.src);
  console.log(img.footer.footer_instagram_logo?.src);
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
        // borderTop: '.5px solid',
        ...sx,
      }}
    >
      <Container>
        {/* <Box sx={{ mt: 1, typography: 'caption' }}>
          تمامی حقوق کپی رایت این سایت متعلق به فناوری سایپا ارتباط می باشد.
        </Box> */}
        <footer>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'start' }}>
                  <Logo />
                </div>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: '14px !important',
                    textAlign: 'justify',
                    direction: 'ltr !important',
                  }}
                >
                  فسا با انجام پروژه های متعدد و ارائه راه حل های مورد اعتماد در حوزه های صنعتی،
                  بیمه ای، خدمات ارزش افزوده، حمل و نقل هوشمند و مراکز داده، امنیت و تجهیز ساختمان
                  ها تبدیل به یکی از فعالترین شرکت های مطرح در فناوری اطلاعات و ارتباطات در سطح
                  مطلوب فناوری و تکنولوژی روز شده است.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                پیوند های مرتبط
              </Typography>
              <a
                className="text"
                href="https://www.saipacorp.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', fontSize: '14px' }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={img.footer.footer_saipa_logo?.src} alt="" width="30" />
                  گروه خودروسازی سایپا
                </div>
              </a>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                اطلاعات تماس
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <img src={img.footer.footer_address_logo?.src} alt="" width="20" height="20" />
                  <Typography variant="body2" sx={{ fontSize: '12px' }}>
                    تهران – بلوار میرداماد – خیابان کازرون – خیابان نیکنام – پلاک ۱۰
                  </Typography>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <img src={img.footer.footer_phone_logo?.src} alt="" width="20" height="20" />
                  <Typography variant="body2" sx={{ direction: 'rtl', fontSize: '12px' }}>
                    021-26424001 - 5
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </footer>
      </Container>
    </Box>
  );
}
